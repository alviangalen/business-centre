import { Camera, Users, Store, Award, TrendingUp, Calendar } from "lucide-react";

export function GalleryAccessSection() {
  const galleryCategories = [
    {
      icon: Store,
      title: "Operasional Toko",
      description: "Dokumentasi kegiatan harian di Business Centre",
      color: "from-[#ED1C24] to-[#C41820]"
    },
    {
      icon: Users,
      title: "Pelatihan Siswa",
      description: "Sesi pembelajaran dan workshop praktik",
      color: "from-[#FFCC00] to-[#FFB700]"
    },
    {
      icon: Award,
      title: "Pencapaian & Penghargaan",
      description: "Prestasi dan sertifikasi yang diraih",
      color: "from-[#003F7F] to-[#002855]"
    },
    {
      icon: TrendingUp,
      title: "Perkembangan Bisnis",
      description: "Grafik dan milestone pertumbuhan BC",
      color: "from-[#ED1C24] to-[#C41820]"
    },
    {
      icon: Camera,
      title: "Event & Kegiatan",
      description: "Acara spesial dan kunjungan industri",
      color: "from-[#FFCC00] to-[#FFB700]"
    },
    {
      icon: Calendar,
      title: "Dokumentasi Bulanan",
      description: "Arsip foto dan video setiap bulan",
      color: "from-[#003F7F] to-[#002855]"
    }
  ];

  return (
    <section id="galeri" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#003F7F]/10 text-[#003F7F] px-6 py-2 rounded-full mb-4">
            <span className="font-semibold">Galeri Dokumentasi</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Akses <span className="text-[#ED1C24]">Galeri Foto</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jelajahi berbagai kategori dokumentasi kegiatan Business Centre melalui galeri interaktif kami
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {galleryCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  className="group relative overflow-hidden bg-white hover:shadow-xl transition-all duration-300 rounded-2xl p-6 text-left border-2 border-gray-100 hover:border-transparent"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-start gap-4">
                    <div className={`bg-gradient-to-r ${category.color} text-white w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="mb-1 group-hover:text-white transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                        {category.description}
                      </p>
                    </div>
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button className="bg-[#003F7F] hover:bg-[#002855] text-white px-8 py-4 rounded-xl transition-colors inline-flex items-center gap-2">
              <Camera className="w-5 h-5" />
              Lihat Semua Galeri
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}