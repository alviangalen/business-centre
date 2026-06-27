# Landing Page Tefa Business Centre SMKN 8 Jakarta

Website ini adalah *landing page* resmi untuk **Business Centre SMKN 8 Jakarta** (Tefa Business Centre Eight Mart). Platform ini dirancang untuk memberikan informasi komprehensif terkait program pendidikan kewirausahaan, fasilitas, kegiatan, dan pencapaian siswa di lingkungan sekolah.

## Tentang Business Centre SMKN 8 Jakarta

Business Centre SMKN 8 Jakarta adalah laboratorium bisnis ritel nyata sekaligus program *Teaching Factory* (Tefa) yang dikelola oleh sekolah. Tempat ini tidak sekadar menjadi simulasi, melainkan minimarket yang beroperasi sungguhan di mana para siswa dapat langsung mempraktikkan teori yang mereka pelajari di kelas, mulai dari transaksi, manajemen stok produk, display, hingga pelayanan pelanggan. 

Melalui Business Centre ini, siswa dipersiapkan menjadi generasi pengusaha muda yang kompeten dan siap bersaing di dunia kerja maupun usaha.

## Kerjasama Strategis dengan Alfamart

Sejak tahun 2010, SMKN 8 Jakarta telah menjalin kemitraan strategis secara resmi dengan **PT Sumber Alfaria Trijaya Tbk (Alfamart)**. Kerjasama ini bertujuan menjadikan sekolah sebagai pusat pembelajaran bisnis ritel yang autentik dan berstandar industri nasional. 

Beberapa keunggulan dari kemitraan ini antara lain:
- **Kurikulum Berbasis Industri**: Materi pembelajaran langsung mengacu pada standar operasional Alfamart.
- **Sertifikasi Kompetensi**: Siswa mendapatkan sertifikat yang diakui industri.
- **Mentoring Profesional**: Adanya pendampingan dan evaluasi berkala dari tim Area Manager Alfamart untuk membina operasional Business Centre.

---

## Cara Menjalankan Proyek (Development)

Proyek ini telah dikonfigurasi menggunakan arsitektur *monorepo* dengan **pnpm workspaces** yang memisahkan antara *frontend* (React/Vite) dan *backend* (Express Serverless).

Untuk menjalankan kode *landing page* ini secara lokal di komputer Anda, ikuti langkah-langkah berikut:

1. **Persiapan `.env` (Environment Variables)**  
   Duplikat file `.env.example` dan ubah namanya menjadi `.env`.  
   Buka file `.env` dan masukkan konfigurasi Google Sheets (seperti `SPREADSHEET_ID` dan `GOOGLE_SHEETS_API_KEY`).

2. **Instalasi Dependensi**  
   Buka terminal di direktori proyek ini (folder utama) dan jalankan perintah:
   ```bash
   pnpm install
   ```

3. **Menjalankan Development Server**  
   Setelah instalasi selesai, jalankan perintah ini di folder utama:
   ```bash
   pnpm dev
   ```
   Perintah ini akan secara otomatis menyalakan *backend* di port `3001` dan *frontend* di port `5173`.

4. **Membuka di Browser**  
   Buka tautan `http://localhost:5173` di browser Anda untuk melihat hasilnya secara langsung. Semua fungsi yang terhubung ke Google Sheets sudah siap diuji.

---
## Deployment (Vercel)

Proyek ini siap untuk dideploy ke [Vercel](https://vercel.com).
File `vercel.json` telah dikonfigurasi secara otomatis untuk membangun (build) *frontend* sebagai website statis dan melayani *backend* di path `/api/*` sebagai Serverless Functions.
Jangan lupa untuk memasukkan environment variables di Dashboard Vercel Anda sebelum melakukan deployment.