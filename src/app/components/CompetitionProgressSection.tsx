import { TrendingUp, LayoutGrid, DollarSign, Instagram, Facebook, ArrowUp } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Custom Progress Component with color support
function ColoredProgress({ value, color }: { value: number; color: string }) {
  const colorMap: Record<string, string> = {
    "bg-[#ED1C24]": "#ED1C24",
    "bg-[#FFCC00]": "#FFCC00",
    "bg-[#003F7F]": "#003F7F",
  };

  return (
    <div className="relative h-3 w-full overflow-hidden rounded-full bg-gray-200">
      <div
        className="h-full transition-all duration-500 rounded-full"
        style={{
          width: `${value}%`,
          backgroundColor: colorMap[color] || "#ED1C24"
        }}
      />
    </div>
  );
}

export function CompetitionProgressSection() {
  // Data untuk Social Media Growth Chart
  const socialMediaData = [
    { bulan: "Jan", instagram: 245, facebook: 189, tiktok: 312 },
    { bulan: "Feb", instagram: 389, facebook: 267, tiktok: 445 },
    { bulan: "Mar", instagram: 521, facebook: 398, tiktok: 589 },
    { bulan: "Apr", instagram: 678, facebook: 512, tiktok: 723 },
    { bulan: "Mei", instagram: 834, facebook: 645, tiktok: 891 },
    { bulan: "Jun", instagram: 1023, facebook: 798, tiktok: 1067 },
  ];

  // Data untuk Sales Revenue Chart
  const revenueData = [
    { bulan: "Jan", pendapatan: 8500000 },
    { bulan: "Feb", pendapatan: 9200000 },
    { bulan: "Mar", pendapatan: 11500000 },
    { bulan: "Apr", pendapatan: 13200000 },
    { bulan: "Mei", pendapatan: 14800000 },
    { bulan: "Jun", pendapatan: 16500000 },
  ];

  // Progress data untuk Store Layout
  const layoutMetrics = [
    { label: "Penataan Produk", progress: 92, target: "Target: 95%", color: "bg-[#ED1C24]" },
    { label: "Kebersihan Area", progress: 88, target: "Target: 90%", color: "bg-[#FFCC00]" },
    { label: "Signage & Display", progress: 95, target: "Target: 95%", color: "bg-[#003F7F]" },
    { label: "Standar Operasional", progress: 85, target: "Target: 90%", color: "bg-[#ED1C24]" },
  ];

  const statsCards = [
    {
      icon: Instagram,
      label: "Total Followers",
      value: "3,888",
      growth: "+24.5%",
      color: "from-[#ED1C24] to-[#C41820]"
    },
    {
      icon: DollarSign,
      label: "Pendapatan Juni",
      value: "Rp 16.5jt",
      growth: "+11.5%",
      color: "from-[#FFCC00] to-[#FFB700]"
    },
    {
      icon: LayoutGrid,
      label: "Skor Tata Letak",
      value: "90/100",
      growth: "+5 poin",
      color: "from-[#003F7F] to-[#002855]"
    }
  ];

  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#ED1C24]/10 text-[#ED1C24] px-6 py-2 rounded-full mb-4">
            <span className="font-semibold">Dashboard Kompetisi</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Progresi <span className="text-[#003F7F]">Kompetisi</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pantau perkembangan dan pencapaian Business Centre melalui metrik bulanan yang terukur
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {statsCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.color} text-white p-6 rounded-2xl shadow-lg`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    <ArrowUp className="w-4 h-4" />
                    {stat.growth}
                  </div>
                </div>
                <p className="text-sm text-white/80 mb-1">{stat.label}</p>
                <p className="text-3xl">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Social Media Growth Chart */}
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#ED1C24] text-white p-2 rounded-lg">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[#003F7F]">Pertumbuhan Media Sosial</h3>
                <p className="text-sm text-gray-600">Followers per bulan (Jan - Jun 2026)</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={socialMediaData}>
                <defs>
                  <linearGradient id="colorInstagram" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ED1C24" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ED1C24" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorFacebook" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#003F7F" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#003F7F" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorTiktok" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFCC00" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FFCC00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="bulan" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '2px solid #f0f0f0',
                    borderRadius: '12px',
                    padding: '12px'
                  }}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="instagram" 
                  stroke="#ED1C24" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorInstagram)" 
                  name="Instagram"
                />
                <Area 
                  type="monotone" 
                  dataKey="facebook" 
                  stroke="#003F7F" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorFacebook)" 
                  name="Facebook"
                />
                <Area 
                  type="monotone" 
                  dataKey="tiktok" 
                  stroke="#FFCC00" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorTiktok)" 
                  name="TikTok"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Sales Revenue Chart */}
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#FFCC00] text-[#003F7F] p-2 rounded-lg">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[#003F7F]">Pendapatan Penjualan</h3>
                <p className="text-sm text-gray-600">Revenue bulanan dalam Rupiah</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="bulan" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '2px solid #f0f0f0',
                    borderRadius: '12px',
                    padding: '12px'
                  }}
                  formatter={(value: number) => `Rp ${(value / 1000000).toFixed(1)}jt`}
                />
                <Bar dataKey="pendapatan" fill="#ED1C24" radius={[8, 8, 0, 0]} name="Pendapatan" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Store Layout Progress */}
        <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#003F7F] text-white p-2 rounded-lg">
              <LayoutGrid className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-[#003F7F]">Peningkatan Tata Letak Toko</h3>
              <p className="text-sm text-gray-600">Evaluasi standar operasional dan tampilan toko</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {layoutMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-5 rounded-xl border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-[#003F7F]">{metric.label}</h4>
                  <span className="text-2xl text-[#003F7F]">{metric.progress}%</span>
                </div>
                <ColoredProgress value={metric.progress} color={metric.color} />
                <p className="text-xs text-gray-600 mt-2">{metric.target}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}