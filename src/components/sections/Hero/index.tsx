import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="bg-white flex items-center justify-between px-20">
      <div className="relative top-8">
        <div className="text-7xl space-y-8 font-extrabold">
          <h1 className="text-black">SMK AL</h1>
          <h1>
            <span className="text-yellow-400">MUHADJIRIN</span>
            <span className="text-black"> 1</span>
          </h1>
        </div>

        <div className="space-y-6">
          <div className="font-medium mt-5 text-xl text-justify">
            <p>sekolah adalah tempat mencetak penerus bangsa</p>
            <p>yang berkualitas dan berprestasi di segala bidang</p>
            <p>yang dapat bersaing di dunia internasional</p>
          </div>

          <div className="flex items-center gap-12">
            <button
              className="
                flex items-center gap-2  bg-amber-400 px-4 py-4 text-white rounded-4xl
                font-bold shadow-[0_12px_20px_rgba(0,0,0,0.25) hover:text-gray-400 transition"             
            >
              GET STARTED
              <ChevronRight size={20} />
            </button>

            <button
              className="
                flex items-center gap-2 bg-gray-200 px-11 py-4 text-amber-400
                rounded-4xl font-bold shadow-[0_12px_20px_rgba(0,0,0,0.25)] hover:text-gray-500 transition"
            >
              VIDEO
              <ChevronRight size={20} />
            </button>

          </div>
        </div>
      </div>
      <img
        src="images/fotoSekolah.jpg"
        className="w-100 mt-43 mr-20"
      />

    </section>
  );
}