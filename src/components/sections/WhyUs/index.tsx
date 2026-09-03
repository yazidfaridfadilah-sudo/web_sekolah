import TanganIcon from "../../../assets/Tangan.png";

const features = [
  {
  title: "Fasilitas Lengkap",
  desc: "Penunjang belajar dengan kualitas terbaik",
  icon: (
    <svg viewBox="0 0 16 16" className="w-10 h-10" shapeRendering="crispEdges">
      {/* Monitor frame */}
      <rect x="1" y="1" width="14" height="9" fill="#000" />
      <rect x="2" y="2" width="12" height="7" fill="#fff" />

      {/* Heart di layar */}
      <rect x="5" y="4" width="1" height="1" fill="#000" />
      <rect x="7" y="4" width="1" height="1" fill="#000" />
      <rect x="4" y="5" width="1" height="1" fill="#000" />
      <rect x="6" y="5" width="1" height="1" fill="#000" />
      <rect x="8" y="5" width="1" height="1" fill="#000" />
      <rect x="5" y="6" width="1" height="1" fill="#000" />
      <rect x="7" y="6" width="1" height="1" fill="#000" />
      <rect x="6" y="7" width="1" height="1" fill="#000" />

      {/* Leher monitor */}
      <rect x="6" y="10" width="4" height="1" fill="#000" />

      {/* Keyboard */}
      <rect x="1" y="12" width="14" height="3" fill="#000" />
      <rect x="2" y="13" width="12" height="1" fill="#fff" />
    </svg>
  )
},
  {
  title: "Lingkungan Nyaman",
  desc: "Berada di lingkungan yang nyaman dan asri",
  icon: (
    <svg viewBox="0 0 16 16" className="w-10 h-10" shapeRendering="crispEdges">
      {/* Gedung kiri (pendek) */}
      <rect x="1" y="6" width="4" height="9" fill="#000" />
      <rect x="2" y="7" width="1" height="1" fill="#fff" />
      <rect x="4" y="7" width="1" height="1" fill="#fff" />
      <rect x="2" y="9" width="1" height="1" fill="#fff" />
      <rect x="4" y="9" width="1" height="1" fill="#fff" />
      <rect x="2" y="11" width="1" height="1" fill="#fff" />
      <rect x="4" y="11" width="1" height="1" fill="#fff" />

      {/* Gedung tengah (tertinggi) */}
      <rect x="6" y="2" width="4" height="13" fill="#000" />
      <rect x="7" y="3" width="1" height="1" fill="#fff" />
      <rect x="9" y="3" width="1" height="1" fill="#fff" />
      <rect x="7" y="5" width="1" height="1" fill="#fff" />
      <rect x="9" y="5" width="1" height="1" fill="#fff" />
      <rect x="7" y="7" width="1" height="1" fill="#fff" />
      <rect x="9" y="7" width="1" height="1" fill="#fff" />
      <rect x="7" y="9" width="1" height="1" fill="#fff" />
      <rect x="9" y="9" width="1" height="1" fill="#fff" />
      <rect x="7" y="11" width="1" height="1" fill="#fff" />
      <rect x="9" y="11" width="1" height="1" fill="#fff" />

      {/* Gedung kanan (sedang) */}
      <rect x="11" y="4" width="4" height="11" fill="#000" />
      <rect x="12" y="5" width="1" height="1" fill="#fff" />
      <rect x="14" y="5" width="1" height="1" fill="#fff" />
      <rect x="12" y="7" width="1" height="1" fill="#fff" />
      <rect x="14" y="7" width="1" height="1" fill="#fff" />
      <rect x="12" y="9" width="1" height="1" fill="#fff" />
      <rect x="14" y="9" width="1" height="1" fill="#fff" />
      <rect x="12" y="11" width="1" height="1" fill="#fff" />
      <rect x="14" y="11" width="1" height="1" fill="#fff" />

      {/* Tanah/dasar */}
      <rect x="0" y="15" width="16" height="1" fill="#000" />
    </svg>
  )
},
  {
    title: "Pengajar Kompeten",
    desc: "Guru terbaik dengan pengalaman",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="24" cy="12" r="5" />
        <circle cx="10" cy="16" r="4" />
        <circle cx="38" cy="16" r="4" />
        <path d="M14 40v-6a10 10 0 0120 0v6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 38v-4a7 7 0 017-7M44 38v-4a7 7 0 00-7-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Kerja Sama Luas",
    desc: "Dapat kesempatan kerja yang lebih terjamin",
    icon: (
  <img src={TanganIcon} className="w-10 h-10" alt="Kerja Sama Luas" />
),
},
];

export default function Whyus() {
  return (
    
    <div className="min-h-screen bg-[#f9f8f8] flex items-center justify-center p-6">
      <div className="relative w-full max-w-5xl bg-white shadow-sm overflow-hidden">
        {/* side accent bars */}
        <div className="absolute left-0 top-0 h-full w-1.5 bg-[#fefefe]" />
        <div className="absolute left-1.5 top-0 h-full w-1.5 bg-[#fcfafa]" />

        <div className="px-10 py-14 sm:px-16 sm:py-16">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] leading-snug">
              Kenapa Harus <span className="text-[#ba4545]">SMK AL-MUHADJIRIN 1</span>
              <br />
              Bekasi?
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-md mx-auto leading-relaxed">
              Alasan kenapa harus memilih untuk bergabung dengan SMK AL-MUHADJIRIN
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[#faf8f8] rounded-2xl px-5 py-8 flex flex-col items-center text-center gap-4"
              >
                <div className="text-[#1a1a1a]">{f.icon}</div>
                <div>
                  <h3 className="font-bold text-[#1a1a1a] text-[15px] mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


