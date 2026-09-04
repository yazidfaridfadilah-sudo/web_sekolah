import TanganIcon from "../../../assets/Tangan.png";
import MonitorIcon from "../../../assets/Monitor.png";
import Gedungicon from "../../../assets/Gedung.png";
import OrangIcon from "../../../assets/Orang.png";
const features = [
  {
  title: "Fasilitas Lengkap",
  desc: "Penunjang belajar dengan kualitas terbaik",
  icon: (
  <img src={MonitorIcon} className="w-10 h-10" alt="Fasilitas Lengkap" />
),
},
  {
  title: "Lingkungan Nyaman",
  desc: "Berada di lingkungan yang nyaman dan asri",
  icon: (
  <img src={Gedungicon} className="w-10 h-10" alt="Lingkungan Nyaman" />
  )
},
  {
    title: "Pengajar Kompeten",
    desc: "Guru terbaik dengan pengalaman",
    icon: (
    <img src={OrangIcon} className="w-10 h-10" alt="Pengajar Kompoten" />
  )
    
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
    <section id="whyus">
    <div className="min-h-screen bg-[#fdfbfb] flex items-center justify-center p-6">
      <div >
        {/* side accent bars */}
        <div className="absolute left-0 top-0 h-full w-1.5 bg-[#fefefe]" />
        <div className="absolute left-1.5 top-0 h-full w-1.5 bg-[#fcfafa]" />

        <div className="px-10 py-14 sm:px-16 sm:py-16">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] leading-snug">
              Kenapa Harus <span className="text-yellow-400">SMK AL-MUHADJIRIN 1</span>
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
    </section>
  );
}


