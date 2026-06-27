import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1666290441567-cfdcfe9a1d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHNjaG9vbCUyMHN0dWRlbnRzfGVufDF8fHx8MTc4MjMwNzU2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Siswa SMKN 8 Jakarta"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003F7F]/95 via-[#003F7F]/80 to-[#003F7F]/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-block bg-[#FFCC00] text-[#003F7F] px-6 py-2 rounded-full mb-6">
            <span className="font-semibold">Program Pendidikan Kewirausahaan</span>
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
            Business Centre
            <span className="block text-[#FFCC00] mt-2">SMKN 8 Jakarta</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Membangun generasi pengusaha muda melalui kemitraan strategis dengan industri ritel terkemuka Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#kemitraan" className="bg-[#ED1C24] hover:bg-[#C41820] text-white px-8 py-4 rounded-xl transition-colors inline-block">
              Pelajari Lebih Lanjut
            </a>
            <a href="#galeri" className="bg-white text-[#003F7F] hover:bg-gray-100 px-8 py-4 rounded-xl transition-colors inline-block">
              Lihat Galeri
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}