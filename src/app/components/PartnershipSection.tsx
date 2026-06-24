import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Handshake, Store, GraduationCap, Target } from "lucide-react";

export function PartnershipSection() {
  const benefits = [
    {
      icon: Store,
      title: "Pengalaman Praktis",
      description: "Siswa mendapat pengalaman langsung mengelola toko ritel modern"
    },
    {
      icon: GraduationCap,
      title: "Pembelajaran Terapan",
      description: "Kurikulum yang dirancang sesuai standar industri ritel"
    },
    {
      icon: Target,
      title: "Peluang Karir",
      description: "Akses langsung ke peluang karir di jaringan Alfamart nasional"
    },
    {
      icon: Handshake,
      title: "Sertifikasi",
      description: "Sertifikat kompetensi yang diakui industri"
    }
  ];

  return (
    <section id="kemitraan" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FFCC00]/20 text-[#003F7F] px-6 py-2 rounded-full mb-4">
            <span className="font-semibold">Kemitraan Strategis</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Kolaborasi dengan <span className="text-[#ED1C24]">Alfamart</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SMKN 8 Jakarta bermitra dengan Alfamart untuk memberikan pendidikan kewirausahaan berkualitas dan pengalaman kerja nyata
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1780803244390-53d653db2931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbWluaW1hcnQlMjBzdG9yZXxlbnwxfHx8fDE3ODIzMDc1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Business Centre SMKN 8 Jakarta"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#ED1C24] text-white px-6 py-3 rounded-lg">
                <span className="text-2xl font-bold">ALFAMART</span>
              </div>
              <span className="text-gray-400">×</span>
              <div className="bg-[#003F7F] text-white px-6 py-3 rounded-lg">
                <span className="text-xl font-bold">SMKN 8 JKT</span>
              </div>
            </div>
            <h3 className="text-3xl mb-6 text-[#003F7F]">Tentang Kemitraan</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Business Centre SMKN 8 Jakarta merupakan program inovatif yang menggabungkan pendidikan formal dengan praktik bisnis nyata. Melalui kemitraan dengan Alfamart, siswa mendapatkan kesempatan untuk:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="bg-[#ED1C24] text-white rounded-full p-1 mt-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Mengelola operasional toko secara langsung</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-[#ED1C24] text-white rounded-full p-1 mt-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Belajar manajemen inventori dan keuangan</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-[#ED1C24] text-white rounded-full p-1 mt-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Mengembangkan keterampilan pelayanan pelanggan</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-[#ED1C24] text-white rounded-full p-1 mt-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Memahami strategi pemasaran dan promosi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 p-6 rounded-2xl hover:shadow-lg transition-all hover:border-[#FFCC00]"
              >
                <div className="bg-[#ED1C24] text-white w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="mb-2 text-[#003F7F]">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}