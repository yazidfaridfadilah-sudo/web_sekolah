
export default function Alumni() {
  return (
    <section id="berita" className="relative bg-white w-full py-16 overflow-hidden">
      {/* garis hijau tipis di tepi kiri */}
      <div className="absolute left-0 top-0 h-full w-1.5g-[#2f5233]" />

      <div className="relative max-w-5xl mx-auto">
        {/* Heading */}
        <div className="pl-22 pr-8 lg:pl-91.5 lg:pr-34.75">
          <h1 className="text-[28px] leading-tight font-extrabold text-gray-900">
            Profil Alumni <span className="text-yellow-400">SMK</span>
            <br />
            <span className="text-yellow-400">AL-MUHADJIRIN</span> Bekasi
          </h1>
          <p className="mt-4 text-[13px] font-semibold text-gray-400">
            Profil Alumni SMK AL-MUHADJIRIN
          </p>
        </div>

        {/* Kartu alumni */}
        <div className="mt-16 px-22 lg:pl-22 lg:pr-34.75 flex flex-col sm:flex-row gap-x-22.75 gap-y-14">
          {/* Alumni 1 */}
          <div className="flex gap-6.5">
            <img
              src="7Harimau.jpg"
              alt="Fardhu Rify ST"
               className="w-45.5 h-52.5 object-cover shrink-0 border-2 border-blue-700 p-0.75 box-content"
            />
            <div className="max-w-43">
              <h2 className="text-[17px] font-bold leading-[1.3] text-gray-900">
                Fardhu
                <br />
                Rify ST
              </h2>
              <p className="mt-2 text-[13px] text-gray-500">Angkatan 1945</p>
              <p className="mt-3 text-[13px] leading-[1.6] text-gray-500">
                Fardhu Rify ST adalah seorang ui ux yang bekerja di England saat ini
                dia adalah salah satu alumni yang berprestasi
              </p>
              <button
                type="button"
                className="mt-3 text-[13px] font-semibold text-yellow-400"
              >
                Baca selengkapnya
              </button>
            </div>
          </div>

          {/* Alumni 2 */}
          <div className="flex gap-6.5">
            <img
              src="Apeng.jpeg"
              alt="syahrini Alextra Ayu"
              className="w-45.5 h-52.5 object-cover shrink-0 border-2 border-blue-700 p-0.75 box-content"
            />
            <div className="max-w-43">
              <h2 className="text-[17px] font-bold leading-[1.3] text-gray-900">
                Yajid
                <br />
                Farid fadhillah ST
              </h2>
              <p className="mt-2 text-[13px] text-gray-500">Angkatan 2027</p>
              <p className="mt-3 text-[13px] leading-[1.6] text-gray-500">
                Yajid Farid fadhillah ST adalah seorang ui ux yang berada di mexiko saat ini
                dia adalah salah satu alumni yang berprestasi
              </p>
              <button
                type="button"
                className="mt-3 text-[13px] font-semibold text-yellow-400"
              >
                Baca selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
