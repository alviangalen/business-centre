import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer id="kontak" className="bg-[#003F7F] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl mb-4 text-[#FFCC00]">Business Centre SMKN 8 Jakarta</h3>
            <p className="text-white/80 leading-relaxed">
              Program pendidikan kewirausahaan yang menggabungkan teori dan praktik melalui kemitraan strategis dengan industri ritel.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-[#FFCC00]">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFCC00] shrink-0 mt-0.5" />
                <span className="text-sm text-white/80">
                  Jl. Raya Pulo Gebang, Kelurahan Cakung Barat, Kecamatan Cakung, Jakarta Timur
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FFCC00]" />
                <span className="text-sm text-white/80">(021) 4600005</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FFCC00]" />
                <span className="text-sm text-white/80">info@smkn8jakarta.sch.id</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4 text-[#FFCC00]">Ikuti Kami</h4>
            <p className="text-sm text-white/80 mb-4">
              Tetap terhubung dengan perkembangan terbaru Business Centre
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-[#ED1C24] p-3 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-[#ED1C24] p-3 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-[#ED1C24] p-3 rounded-lg transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              &copy; 2026 Business Centre SMKN 8 Jakarta. Semua hak dilindungi.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-[#FFCC00] transition-colors">Tentang</a>
              <a href="#" className="hover:text-[#FFCC00] transition-colors">Kemitraan</a>
              <a href="#" className="hover:text-[#FFCC00] transition-colors">Galeri</a>
              <a href="#" className="hover:text-[#FFCC00] transition-colors">Kontak</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}