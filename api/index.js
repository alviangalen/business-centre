import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { google } from 'googleapis';

// Load .env from root directory (if running locally)
dotenv.config({ path: '../.env' });


const app = express();
app.use(cors());
app.use(express.json());

// Initialize Google Sheets API
const getSheetsClient = () => {
  // Option 1: Use Service Account credentials from JSON string in env
  if (process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS) {
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    return google.sheets({ version: 'v4', auth });
  } 
  // Option 2: Use API Key (only works for public sheets or read-only)
  else if (process.env.GOOGLE_SHEETS_API_KEY) {
    return google.sheets({ version: 'v4', auth: process.env.GOOGLE_SHEETS_API_KEY });
  }
  
  throw new Error("No Google Sheets credentials found in environment variables.");
};

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

// GET /api/galeri
// Fetches list of image URLs for the gallery from the sheet
app.get('/api/galeri', async (req, res) => {
  try {
    const sheets = getSheetsClient();
    // Assuming the sheet is named 'Galeri'
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Galeri!A2:D', // Columns: Bulan, Minggu, Image URL, Deskripsi
    });
    
    const rows = response.data.values || [];
    
    // Helper to convert Google Drive viewing links to direct image links
    const getDirectImageUrl = (url) => {
      if (!url) return '';
      const driveRegex = /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/;
      const match = url.match(driveRegex);
      if (match && match[1]) {
        return `https://drive.google.com/uc?export=view&id=${match[1]}`;
      }
      return url;
    };

    // Map to an array of objects
    const galeriData = rows.map(row => ({
      bulan: row[0] || '',
      minggu: row[1] || '',
      imageUrl: getDirectImageUrl(row[2]),
      description: row[3] || '',
    }));

    res.json({ success: true, data: galeriData });
  } catch (error) {
    console.error('Error fetching galeri:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch galeri data' });
  }
});

// GET /api/penjualan
// Fetches sales data from the sheet
app.get('/api/penjualan', async (req, res) => {
  try {
    const sheets = getSheetsClient();
    // Assuming sheet is named 'Penjualan'
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Penjualan!A2:C', // Columns: Bulan, Pendapatan, Target
    });
    
    const rows = response.data.values || [];
    // Map rows to objects based on your sheet's columns
    const penjualanData = rows.map(row => ({
      bulan: row[0] || '',
      pendapatan: Number(row[1] || 0),
      target: Number(row[2] || 0),
    }));

    res.json({ success: true, data: penjualanData });
  } catch (error) {
    console.error('Error fetching penjualan:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch penjualan data' });
  }
});

// Optional: POST endpoints if you need to update data from the frontend
app.post('/api/galeri', async (req, res) => {
  try {
    const { imageUrl, description } = req.body;
    if (!imageUrl) return res.status(400).json({ error: 'imageUrl is required' });

    const sheets = getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Galeri!A:B',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[imageUrl, description || '']]
      }
    });

    res.json({ success: true, message: 'Data added successfully' });
  } catch (error) {
    console.error('Error adding galeri:', error);
    res.status(500).json({ success: false, error: 'Failed to add galeri data' });
  }
});

app.post('/api/penjualan', async (req, res) => {
  try {
    const { bulan, pendapatan, target } = req.body;
    
    const sheets = getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Penjualan!A:C',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[bulan, pendapatan, target]]
      }
    });

    res.json({ success: true, message: 'Data added successfully' });
  } catch (error) {
    console.error('Error adding penjualan:', error);
    res.status(500).json({ success: false, error: 'Failed to add penjualan data' });
  }
});

// Start the server if running locally
const PORT = process.env.PORT || 3001;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export the Express API
export default app;
