import { useState, useEffect, useRef } from "react";
import heroImage from "@/imports/image.png";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  Menu,
  X,
  ChevronUp,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  TrendingUp,
  Users,
  ShoppingBag,
  Award,
  Store,
  BookOpen,
  Camera,
  Calendar,
  ExternalLink,
} from "lucide-react";

// ─── CONSTANTS ───────────────────────────────────────────────
const COLORS = {
  red: "#ED1C24",
  yellow: "#FFCC00",
  blue: "#003F7F",
  blueLight: "#EBF1F9",
  white: "#FFFFFF",
  gray50: "#F8F9FB",
  gray100: "#F1F3F6",
  gray400: "#9CA3AF",
  gray600: "#6B7280",
  dark: "#0D1117",
};

const salesData = [
  { month: "Mei", revenue: 3200000, target: 3000000 },
  { month: "Jun", revenue: 4100000, target: 3500000 },
  { month: "Jul", revenue: 3750000, target: 3800000 },
  { month: "Agt", revenue: 5200000, target: 4500000 },
  { month: "Sep", revenue: 4800000, target: 4800000 },
  { month: "Okt", revenue: 6300000, target: 5500000 },
  { month: "Nov", revenue: 7100000, target: 6000000 },
];

const galleryPiket = [
  { id: 1, name: "Alya Ramadhani", role: "Kasir", week: "Minggu I" },
  { id: 2, name: "Budi Santoso", role: "Display", week: "Minggu I" },
  { id: 3, name: "Citra Dewi", role: "Kasir", week: "Minggu II" },
  { id: 4, name: "Dian Pratama", role: "Stock", week: "Minggu II" },
  { id: 5, name: "Eka Nurhayati", role: "Display", week: "Minggu III" },
  { id: 6, name: "Fajar Maulana", role: "Kasir", week: "Minggu III" },
  { id: 7, name: "Gita Lestari", role: "Stock", week: "Minggu IV" },
  { id: 8, name: "Hendra Wijaya", role: "Display", week: "Minggu IV" },
];

const formatRupiah = (v: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(v);

// ─── NAVBAR ──────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Beranda", href: "#hero" },
    { label: "Kemitraan", href: "#kemitraan" },
    { label: "Denah", href: "#denah" },
    { label: "Fasilitas", href: "#fasilitas" },
    { label: "Kegiatan", href: "#kegiatan" },
    { label: "Galeri", href: "#galeri" },
    { label: "Statistik", href: "#statistik" },
  ];

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "#ffffff",
        borderBottom: scrolled
          ? `1px solid ${COLORS.blue}20`
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,63,127,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo Placeholder */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold"
              style={{ background: COLORS.red, color: "#fff" }}
              title="Tempatkan logo BC di sini"
            >
              BC
            </div>
            <div className="hidden sm:block">
              <p
                className="text-xs font-semibold leading-tight"
                style={{ color: COLORS.blue, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Business Centre
              </p>
              <p
                className="text-xs leading-tight"
                style={{ color: COLORS.gray600, fontFamily: "'Inter', sans-serif" }}
              >
                SMKN 8 Jakarta
              </p>
            </div>
          </div>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-1 mx-auto">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-red-50"
                style={{
                  color: COLORS.dark,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = COLORS.red)
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = COLORS.dark)
                }
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block flex-shrink-0">
            <button
              onClick={() => scrollTo("#kemitraan")}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
              style={{
                background: COLORS.red,
                color: "#fff",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Pelajari Lebih
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden ml-auto p-2 rounded-lg"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X size={20} style={{ color: COLORS.dark }} />
            ) : (
              <Menu size={20} style={{ color: COLORS.dark }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-4 py-4 flex flex-col gap-1"
          style={{ borderColor: `${COLORS.blue}15`, background: "#fff" }}
        >
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-left px-3 py-2.5 rounded-lg text-sm font-medium"
              style={{
                color: COLORS.dark,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id="hero"
      className="pt-16 relative overflow-hidden flex items-center"
      style={{ background: COLORS.red, minHeight: "100vh" }}
    >
      {/* Background image right side */}
      <div className="absolute inset-0 flex justify-end pointer-events-none">
        <div className="w-full lg:w-13/20 h-full relative">
          <ImageWithFallback
            src={heroImage}
            alt="Petugas Business Centre SMKN 8 Jakarta"
            className="w-full h-full object-cover object-center opacity-60"
            style={{ mixBlendMode: "normal" }}
          />
          {/* Gradient overlay to seamlessly blend the image with the red background on the left */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${COLORS.red} 0%, transparent 40%)`,
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="max-w-xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-8"
            style={{
              background: COLORS.yellow,
              color: COLORS.dark,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-black opacity-80" />
            Teaching Factory Bisnis Retail
          </div>

          {/* Heading */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "#ffffff" }}>Tefa Business Centre Eight Mart</span>
            <br />
            <span style={{ color: COLORS.yellow }}>SMKN 8 Jakarta</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-base lg:text-lg leading-relaxed mb-10"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(255,255,255,0.9)",
              maxWidth: "460px",
            }}
          >
            Membangun generasi pengusaha muda melalui kemitraan strategis
            dengan industri ritel terkemuka Indonesia.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              className="px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
              style={{
                background: COLORS.yellow,
                color: COLORS.dark,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                boxShadow: `0 8px 24px ${COLORS.yellow}40`,
              }}
            >
              Pelajari Lebih Lanjut
            </button>
            <button
              className="px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:bg-white/20 border"
              style={{
                background: "transparent",
                color: "#fff",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                borderColor: "rgba(255,255,255,0.4)",
              }}
            >
              Lihat Galeri
            </button>
          </div>

          {/* Social Media Handles */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Ikuti Kami
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Instagram, label: "@bc.smkn8jakarta" },
                { icon: Youtube, label: "BC SMKN 8 Jakarta" },
                { icon: Facebook, label: "Business Centre SMKN 8" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all hover:bg-white/10"
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontFamily: "'Inter', sans-serif",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <Icon size={13} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PARTNERSHIP ─────────────────────────────────────────────
function PartnershipSection() {
  const benefits = [
    {
      icon: BookOpen,
      title: "Kurikulum Berbasis Industri",
      desc: "Materi pembelajaran langsung mengacu pada standar operasional Alfamart yang diterapkan di lebih dari 17.000 gerai.",
    },
    {
      icon: Award,
      title: "Sertifikasi Kompetensi",
      desc: "Siswa mendapatkan sertifikat kompetensi ritel yang diakui oleh industri sebagai nilai tambah saat memasuki dunia kerja.",
    },
    {
      icon: Store,
      title: "Praktik Nyata Ritel",
      desc: "Bukan simulasi — BC beroperasi sebagai minimarket sesungguhnya dengan transaksi, stok, dan manajemen produk riil.",
    },
    {
      icon: TrendingUp,
      title: "Mentoring Tim Profesional",
      desc: "Tim Area Manager Alfamart hadir secara berkala untuk monitoring, evaluasi, dan pembinaan operasional BC.",
    },
  ];

  return (
    <section id="kemitraan" className="py-24" style={{ background: COLORS.gray50 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: `${COLORS.red}15`, color: COLORS.red, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Kemitraan Strategis
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4"
            style={{ color: COLORS.dark, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.02em" }}
          >
            SMKN 8 Jakarta &times; Alfamart
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: COLORS.gray600, fontFamily: "'Inter', sans-serif" }}
          >
            Sejak tahun 2023, SMKN 8 Jakarta menjalin kerjasama resmi dengan PT Sumber Alfaria Trijaya Tbk (Alfamart)
            dalam program Teaching Factory — menjadikan sekolah sebagai pusat pembelajaran bisnis ritel yang autentik
            dan terstandar industri nasional.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: "#fff",
                border: `1px solid ${COLORS.blue}12`,
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${COLORS.red}12` }}
              >
                <Icon size={20} style={{ color: COLORS.red }} />
              </div>
              <h3
                className="text-sm font-bold mb-2"
                style={{ color: COLORS.dark, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: COLORS.gray600, fontFamily: "'Inter', sans-serif" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Background story */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{ border: `1px solid ${COLORS.blue}15` }}
        >
          <div
            className="px-6 py-4 flex items-center gap-3"
            style={{ background: COLORS.blue }}
          >
            <BookOpen size={16} style={{ color: COLORS.yellow }} />
            <span
              className="text-sm font-bold"
              style={{ color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Latar Belakang Berdirinya Business Centre
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-10">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: COLORS.dark, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Dari Kelas ke Toko Nyata
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: COLORS.gray600, fontFamily: "'Inter', sans-serif" }}
              >
                Business Centre SMKN 8 Jakarta lahir dari kebutuhan akan ruang belajar yang menjembatani teori
                di kelas dengan praktik nyata dunia usaha. Berangkat dari program Sekolah Menengah Kejuruan
                (SMK) Jurusan Bisnis Daring dan Pemasaran, sekolah mengidentifikasi bahwa siswa membutuhkan
                pengalaman langsung mengelola toko ritel.
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: COLORS.gray600, fontFamily: "'Inter', sans-serif" }}
              >
                Dengan dukungan Dinas Pendidikan DKI Jakarta dan Alfamart sebagai mitra industri, BC resmi
                dibuka sebagai Teaching Factory — sebuah model pembelajaran di mana siswa tidak hanya belajar,
                tetapi benar-benar menjalankan operasional minimarket dari pukul 07.00 hingga 17.00 setiap
                hari sekolah. Seluruh pendapatan digunakan untuk pengembangan kompetensi siswa.
              </p>
            </div>
            <div
              className="relative min-h-64 lg:min-h-auto"
              style={{ background: COLORS.blueLight }}
            >
              <img
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=700&h=500&fit=crop&auto=format"
                alt="Produk-produk tertata rapi di rak Business Centre"
                className="w-full h-full object-cover"
                style={{ minHeight: "240px" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${COLORS.blue}40 0%, transparent 60%)` }}
              />
              <div
                className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)" }}
              >
                <p
                  className="text-xs font-bold mb-1"
                  style={{ color: COLORS.blue, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Tahun Berdiri
                </p>
                <p
                  className="text-2xl font-extrabold"
                  style={{ color: COLORS.red, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  2023
                </p>
                <p
                  className="text-xs"
                  style={{ color: COLORS.gray600, fontFamily: "'Inter', sans-serif" }}
                >
                  Beroperasi penuh sebagai Teaching Factory
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FLOOR PLAN ───────────────────────────────────────────────
function FloorPlanSection() {
  return (
    <section id="denah" className="py-24" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-14">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: `${COLORS.blue}12`, color: COLORS.blue, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Denah &amp; Lokasi
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold"
            style={{ color: COLORS.dark, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.02em" }}
          >
            Di Mana Business Centre Berada?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Floor plan visual */}
          <div
            className="rounded-3xl overflow-hidden shadow-lg relative"
            style={{ background: COLORS.gray100, minHeight: "400px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1670684684445-a4504dca0bbc?w=700&h=500&fit=crop&auto=format"
              alt="Denah letak Business Centre di lingkungan SMKN 8 Jakarta"
              className="w-full h-full object-cover"
              style={{ minHeight: "400px" }}
            />
            {/* Overlay badge */}
            <div
              className="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5"
              style={{ background: COLORS.yellow, color: COLORS.dark, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <MapPin size={12} />
              Denah BC — SMKN 8 Jakarta
            </div>
          </div>

          {/* Description */}
          <div>
            <h3
              className="text-xl font-bold mb-5"
              style={{ color: COLORS.dark, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Lokasi Strategis di Jantung Sekolah
            </h3>

            <div className="space-y-4">
              {[
                {
                  title: "Gedung Utama — Lantai Dasar",
                  desc: "Business Centre terletak di lantai dasar gedung utama SMKN 8 Jakarta, tepat di sebelah lobby penerimaan tamu.",
                },
                {
                  title: "Luas Area ±80 m²",
                  desc: "Mencakup area belanja seluas ±60 m², ruang kasir 1 unit, gudang penyimpanan stok, dan area display produk.",
                },
                {
                  title: "Akses Mudah",
                  desc: "Dapat diakses oleh seluruh warga sekolah: siswa, guru, dan tamu. Buka setiap hari sekolah pukul 07.00–17.00 WIB.",
                },
                {
                  title: "Sistem Planogram Alfamart",
                  desc: "Tata letak rak mengikuti standar planogram Alfamart — produk disusun berdasarkan kategori, visibilitas, dan frekuensi penjualan.",
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 p-4 rounded-2xl"
                  style={{ background: COLORS.gray50, border: `1px solid ${COLORS.blue}10` }}
                >
                  <div
                    className="w-2 rounded-full flex-shrink-0 mt-1"
                    style={{ background: COLORS.red, minHeight: "20px" }}
                  />
                  <div>
                    <p
                      className="text-sm font-bold mb-1"
                      style={{ color: COLORS.dark, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {title}
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: COLORS.gray600, fontFamily: "'Inter', sans-serif" }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-6 flex items-center gap-2 text-xs font-medium"
              style={{ color: COLORS.blue, fontFamily: "'Inter', sans-serif" }}
            >
              <MapPin size={13} />
              Jl. Raya Kalimalang, Duren Sawit, Jakarta Timur 13440
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FACILITIES & UNIFORM ─────────────────────────────────────
function FacilitiesSection() {
  return (
    <section id="fasilitas" className="py-24" style={{ background: COLORS.gray50 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-14">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: `${COLORS.red}12`, color: COLORS.red, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Fasilitas &amp; Seragam
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold"
            style={{ color: COLORS.dark, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.02em" }}
          >
            Suasana &amp; Identitas Petugas BC
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Facilities */}
          <div>
            <div
              className="rounded-3xl overflow-hidden shadow-md mb-5"
              style={{ background: COLORS.gray100 }}
            >
              <img
                src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=700&h=480&fit=crop&auto=format"
                alt="Interior dan suasana di dalam Business Centre SMKN 8 Jakarta"
                className="w-full h-72 object-cover"
              />
            </div>
            <h3
              className="text-lg font-bold mb-3"
              style={{ color: COLORS.dark, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Layout Interior BC
            </h3>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: COLORS.gray600, fontFamily: "'Inter', sans-serif" }}
            >
              Interior BC dirancang mengikuti standar visual merchandising Alfamart: rak gondola berjajar
              tertata, pencahayaan terang merata, papan harga seragam, dan area kasir yang efisien.
              Semua elemen menciptakan pengalaman belanja yang nyaman bagi konsumen.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Sistem POS Alfamart",
                "Gondola 12 unit",
                "Pendingin Udara",
                "CCTV Operasional",
                "Gudang Stok",
                "Papan Harga Digital",
              ].map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg"
                  style={{
                    background: "#fff",
                    border: `1px solid ${COLORS.blue}12`,
                    color: COLORS.dark,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: COLORS.red }}
                  />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Uniform */}
          <div>
            <div
              className="rounded-3xl overflow-hidden shadow-md mb-5 relative"
              style={{ background: COLORS.gray100 }}
            >
              <img
                src="https://images.unsplash.com/photo-1665664660924-255a6167f498?w=700&h=480&fit=crop&auto=format"
                alt="Seragam resmi petugas Business Centre SMKN 8 Jakarta"
                className="w-full h-72 object-cover object-top"
              />
              <div
                className="absolute top-4 right-4 px-3 py-1.5 rounded-xl text-xs font-bold"
                style={{ background: COLORS.red, color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Seragam Resmi BC
              </div>
            </div>
            <h3
              className="text-lg font-bold mb-3"
              style={{ color: COLORS.dark, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Pengenalan Seragam Petugas
            </h3>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: COLORS.gray600, fontFamily: "'Inter', sans-serif" }}
            >
              Seragam petugas BC SMKN 8 Jakarta dirancang mengadaptasi identitas visual Alfamart —
              didominasi merah cerah dengan aksen putih bersih. Setiap petugas diwajibkan tampil rapi,
              name tag terpasang, dan menggunakan alas kaki hitam tertutup.
            </p>
            <div className="space-y-3">
              {[
                { part: "Atasan", detail: "Kemeja merah lengan pendek + logo BC di dada kiri" },
                { part: "Bawahan", detail: "Celana/rok hitam formal, panjang menutup lutut" },
                { part: "Name Tag", detail: "ID card resmi dengan foto, nama, dan jabatan" },
                { part: "Alas Kaki", detail: "Sepatu hitam tertutup, bersih dan tidak bersuara" },
              ].map(({ part, detail }) => (
                <div
                  key={part}
                  className="flex gap-3 items-start"
                >
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-md flex-shrink-0"
                    style={{ background: `${COLORS.yellow}40`, color: COLORS.dark, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {part}
                  </span>
                  <span
                    className="text-xs leading-relaxed pt-1"
                    style={{ color: COLORS.gray600, fontFamily: "'Inter', sans-serif" }}
                  >
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ACTIVITIES ───────────────────────────────────────────────
function ActivitiesSection() {
  return (
    <section id="kegiatan" className="py-24" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-14">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: `${COLORS.blue}12`, color: COLORS.blue, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Kegiatan
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold"
            style={{ color: COLORS.dark, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.02em" }}
          >
            Monitoring Industri oleh Tim Alfamart
          </h2>
        </div>

        {/* Main activity card */}
        <div
          className="rounded-3xl overflow-hidden shadow-xl mb-10"
          style={{ border: `1px solid ${COLORS.blue}12` }}
        >
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-3 relative" style={{ background: COLORS.gray100 }}>
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=600&fit=crop&auto=format"
                alt="Tim Alfamart melakukan monitoring dan evaluasi operasional Business Centre SMKN 8 Jakarta"
                className="w-full h-80 lg:h-full object-cover"
                style={{ minHeight: "320px" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, transparent 60%, rgba(255,255,255,0.1))" }}
              />
            </div>
            <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center">
              <div
                className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-5 w-fit"
                style={{ background: `${COLORS.red}12`, color: COLORS.red, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <Calendar size={12} />
                Dilaksanakan Setiap Bulan
              </div>
              <h3
                className="text-xl font-extrabold mb-4"
                style={{ color: COLORS.dark, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Kunjungan &amp; Evaluasi Langsung
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: COLORS.gray600, fontFamily: "'Inter', sans-serif" }}
              >
                Tim Area Manager dan Trainer dari Alfamart hadir langsung ke BC setiap bulan untuk melakukan
                monitoring operasional menyeluruh. Kegiatan ini mencakup audit tata letak produk (planogram),
                evaluasi kualitas pelayanan kasir, dan pemeriksaan kondisi stok barang.
              </p>
              <div className="space-y-3">
                {[
                  "Audit standar display & planogram",
                  "Evaluasi SOP kasir & pelayanan",
                  "Pemeriksaan administrasi stok",
                  "Coaching & feedback langsung ke siswa",
                  "Penilaian kompetensi petugas piket",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${COLORS.red}15` }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: COLORS.red }}
                      />
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: COLORS.gray600, fontFamily: "'Inter', sans-serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sub-activities */}
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=400&fit=crop&auto=format",
              title: "Rapat Evaluasi Bulanan",
              desc: "Pembahasan hasil monitoring, target penjualan, dan rencana perbaikan bersama guru pembimbing.",
            },
            {
              img: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=600&h=400&fit=crop&auto=format",
              title: "Pelatihan Kasir & Display",
              desc: "Siswa mendapat pelatihan intensif penggunaan mesin POS dan teknik penataan produk yang benar.",
            },
            {
              img: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&h=400&fit=crop&auto=format",
              title: "Briefing Produk Baru",
              desc: "Pengenalan produk-produk baru dari distributor Alfamart beserta strategi merchandising-nya.",
            },
          ].map(({ img, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ border: `1px solid ${COLORS.blue}12` }}
            >
              <div style={{ background: COLORS.gray100 }}>
                <img
                  src={img}
                  alt={title}
                  className="w-full h-44 object-cover"
                />
              </div>
              <div className="p-5">
                <h4
                  className="text-sm font-bold mb-2"
                  style={{ color: COLORS.dark, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {title}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: COLORS.gray600, fontFamily: "'Inter', sans-serif" }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── GALLERY ──────────────────────────────────────────────────
function GallerySection() {
  const unsplashIds = [
    "photo-1665664660924-255a6167f498",
    "photo-1666533835131-5cd525e9e965",
    "photo-1615466178532-b6d2f9c304de",
    "photo-1665664660924-255a6167f498",
    "photo-1551161001-5c4184cc4317",
    "photo-1617078913444-5bfe537fe74c",
    "photo-1666533835131-5cd525e9e965",
    "photo-1615466178532-b6d2f9c304de",
  ];

  return (
    <section id="galeri" className="py-24" style={{ background: COLORS.gray50 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: `${COLORS.red}12`, color: COLORS.red, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Galeri Petugas
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ color: COLORS.dark, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.02em" }}
            >
              Galeri Foto Piket Siswa
            </h2>
            <p
              className="text-sm mt-2"
              style={{ color: COLORS.gray600, fontFamily: "'Inter', sans-serif" }}
            >
              Dokumentasi penampilan petugas BC setiap minggunya
            </p>
          </div>
          {/* Update badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold flex-shrink-0"
            style={{
              background: `${COLORS.yellow}30`,
              color: COLORS.dark,
              border: `1.5px solid ${COLORS.yellow}`,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            <Camera size={13} style={{ color: COLORS.blue }} />
            Diupdate setiap akhir bulan
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryPiket.map((person, i) => (
            <div
              key={person.id}
              className="group relative rounded-2xl overflow-hidden shadow-sm cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ background: COLORS.gray100, aspectRatio: "3/4" }}
            >
              <img
                src={`https://images.unsplash.com/${unsplashIds[i % unsplashIds.length]}?w=400&h=530&fit=crop&auto=format`}
                alt={`Foto piket ${person.name} — ${person.role}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(to top, ${COLORS.dark}e0 0%, transparent 50%)` }}
              />
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <p
                  className="text-xs font-bold text-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {person.name}
                </p>
                <p
                  className="text-xs text-white/70"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {person.role} — {person.week}
                </p>
              </div>
              {/* Week badge */}
              <div
                className="absolute top-3 left-3 px-2 py-1 rounded-md text-[10px] font-bold"
                style={{ background: "rgba(255,255,255,0.9)", color: COLORS.dark, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {person.week}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 border"
            style={{
              color: COLORS.blue,
              borderColor: `${COLORS.blue}30`,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            <ExternalLink size={15} />
            Lihat Semua Dokumentasi
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── STATISTICS ────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label }: {
  active?: boolean;
  payload?: Array<{ value: number; dataKey: string }>;
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="rounded-xl px-4 py-3 shadow-xl"
        style={{ background: "#fff", border: `1px solid ${COLORS.blue}20` }}
      >
        <p
          className="text-xs font-bold mb-2"
          style={{ color: COLORS.dark, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {label} 2024
        </p>
        {payload.map((p) => (
          <p
            key={p.dataKey}
            className="text-xs"
            style={{ color: p.dataKey === "revenue" ? COLORS.red : COLORS.blue, fontFamily: "'Inter', sans-serif" }}
          >
            {p.dataKey === "revenue" ? "Pendapatan: " : "Target: "}
            {formatRupiah(p.value)}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

function StatisticsSection() {
  const total = salesData.reduce((s, d) => s + d.revenue, 0);
  const best = salesData.reduce((m, d) => (d.revenue > m.revenue ? d : m), salesData[0]);
  const avg = Math.round(total / salesData.length);

  return (
    <section id="statistik" className="py-24" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-14">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: `${COLORS.red}12`, color: COLORS.red, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Statistik Penjualan
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-3"
            style={{ color: COLORS.dark, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.02em" }}
          >
            Pendapatan Penjualan BC
          </h2>
          <p
            className="text-sm"
            style={{ color: COLORS.gray600, fontFamily: "'Inter', sans-serif" }}
          >
            Data pendapatan bulanan Business Centre periode Mei–November 2024
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: "Total Pendapatan", value: formatRupiah(total), sub: "Mei – Nov 2024", color: COLORS.red },
            { label: "Bulan Terbaik", value: best.month + " 2024", sub: formatRupiah(best.revenue), color: COLORS.blue },
            { label: "Rata-rata/Bulan", value: formatRupiah(avg), sub: "7 bulan berjalan", color: "#16a34a" },
          ].map(({ label, value, sub, color }) => (
            <div
              key={label}
              className="rounded-2xl p-5"
              style={{ background: COLORS.gray50, border: `1px solid ${COLORS.blue}10` }}
            >
              <p
                className="text-xs font-medium mb-2"
                style={{ color: COLORS.gray600, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {label}
              </p>
              <p
                className="text-lg font-extrabold mb-1"
                style={{ color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {value}
              </p>
              <p
                className="text-xs"
                style={{ color: COLORS.gray400, fontFamily: "'Inter', sans-serif" }}
              >
                {sub}
              </p>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div
          className="rounded-3xl p-6 sm:p-8"
          style={{ background: COLORS.gray50, border: `1px solid ${COLORS.blue}10` }}
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
            <h3
              className="text-base font-bold"
              style={{ color: COLORS.dark, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Grafik Pendapatan vs Target Bulanan
            </h3>
            <div className="flex items-center gap-5 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm" style={{ background: COLORS.red }} />
                <span style={{ color: COLORS.gray600 }}>Pendapatan</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm" style={{ background: `${COLORS.blue}50` }} />
                <span style={{ color: COLORS.gray600 }}>Target</span>
              </span>
            </div>
          </div>

          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={salesData}
                margin={{ top: 4, right: 4, left: 8, bottom: 4 }}
                barGap={4}
                barCategoryGap="30%"
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={`${COLORS.blue}12`}
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 12, fill: COLORS.gray600, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
                  axisLine={{ stroke: `${COLORS.blue}20` }}
                  tickLine={false}
                />
                <YAxis
                  tickFormatter={(v) => `${(v / 1000000).toFixed(1)}jt`}
                  tick={{ fontSize: 11, fill: COLORS.gray400, fontFamily: "'Inter', sans-serif" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: `${COLORS.blue}08` }} />
                <Bar dataKey="target" radius={[4, 4, 0, 0]} fill={`${COLORS.blue}25`} name="Target" />
                <Bar dataKey="revenue" radius={[6, 6, 0, 0]} name="Pendapatan">
                  {salesData.map((entry, index) => (
                    <Cell
                      key={`revenue-cell-${entry.month}-${index}`}
                      fill={entry.revenue >= entry.target ? COLORS.red : `${COLORS.red}80`}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <p
            className="text-xs text-center mt-4"
            style={{ color: COLORS.gray400, fontFamily: "'Inter', sans-serif" }}
          >
            Batang merah penuh = target tercapai / terlampaui · Merah transparan = di bawah target
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: COLORS.blue }}>
      {/* Yellow accent line */}
      <div className="h-1" style={{ background: COLORS.yellow }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-sm"
                style={{ background: COLORS.red, color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                BC
              </div>
              <div>
                <p
                  className="font-bold text-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Business Centre
                </p>
                <p
                  className="text-sm text-white/60"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  SMKN 8 Jakarta
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed text-white/70 mb-5 max-w-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Laboratorium bisnis ritel nyata — tempat siswa SMKN 8 Jakarta belajar dan berkarya
              di bawah bimbingan profesional Alfamart.
            </p>
            {/* Partner logos */}
            <div className="flex items-center gap-4">
              <div
                className="px-4 py-2 rounded-lg text-xs font-bold"
                style={{ background: "rgba(255,255,255,0.12)", color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                SMKN 8 Jakarta
              </div>
              <div
                className="px-4 py-2 rounded-lg text-xs font-bold"
                style={{ background: COLORS.red, color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                × Alfamart
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-bold text-white mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Kontak
            </h4>
            <div className="space-y-3">
              {[
                { icon: MapPin, text: "Jl. Raya Kalimalang, Duren Sawit, Jakarta Timur 13440" },
                { icon: Phone, text: "(021) 8609707" },
                { icon: Mail, text: "bc@smkn8jakarta.sch.id" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-2.5">
                  <Icon size={13} className="flex-shrink-0 mt-0.5" style={{ color: COLORS.yellow }} />
                  <span
                    className="text-xs text-white/65 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4
              className="text-sm font-bold text-white mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Media Sosial
            </h4>
            <div className="space-y-3">
              {[
                { icon: Instagram, label: "@bc.smkn8jakarta" },
                { icon: Youtube, label: "BC SMKN 8 Jakarta" },
                { icon: Facebook, label: "Business Centre SMKN 8" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex items-center gap-2.5 text-xs text-white/65 hover:text-white transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Icon size={13} style={{ color: COLORS.yellow }} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.12)" }}
        >
          <p
            className="text-xs text-white/45"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2024 Business Centre SMKN 8 Jakarta. Hak cipta dilindungi.
          </p>
          <p
            className="text-xs text-white/45"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Dibuat dengan ❤ oleh siswa jurusan Bisnis Daring &amp; Pemasaran
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── SCROLL TO TOP ─────────────────────────────────────────────
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 w-11 h-11 rounded-full shadow-lg flex items-center justify-center z-50 transition-all hover:scale-110 active:scale-95"
      style={{ background: COLORS.red, color: "#fff" }}
      aria-label="Scroll ke atas"
    >
      <ChevronUp size={18} />
    </button>
  ) : null;
}

// ─── APP ──────────────────────────────────────────────────────
export default function App() {
  return (
    <div
      className="min-h-screen bg-background"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />
      <HeroSection />
      <PartnershipSection />
      <FloorPlanSection />
      <FacilitiesSection />
      <ActivitiesSection />
      <GallerySection />
      <StatisticsSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
