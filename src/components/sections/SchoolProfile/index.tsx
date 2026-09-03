export default function SchoolProfile() {
  return (
    <section id="tentang-kami">
    
    <div className="min-h-screen bg-white px-6 py-8">

   
      <div className="mb-10 text-center">
        <h1 className="text-xl font-bold text-black md:text-3xl">
          Profil{" "}
          <span className="text-yellow-400">
            SMK AL-MUHAJIRIN 1
          </span>
        </h1>

        <h2 className="mt-2 text-xl font-bold text-black md:text-2xl">
          Bekasi
        </h2>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="flex justify-center">
          <img
            src="/images/SchoolProfile.jpg"
            alt="Profil sekolah"
            className=" h-75 w-full rounded-3xl object-cover object-center mr-40"
          />
        </div>


        <div>
          <h3 className="-ml-10 text-xl font-bold leading-tight text-black md:text-2xl">
            Sambutan Kepala Sekolah
            <br />
            SMK AL-MUHAJIRIN
          </h3>

          <p className="-ml-10 text-3x1 mt-5 font-normal leading-relaxed text-gray-500">
            Sekolah adalah tempat mencetak penurus bangsa yang berkulitas dan berprestasi di segala bidang yang dapat
            bersaing di dunia internasional.
          </p>

          <p className="-ml-10 text-5x1 mt-5 font-normal leading-relaxed text-gray-500" ml-10>
            dan sekolah adalah tempat anak-anak mendapatkan
            dukungan untuk melengkapi pembelajaranya di sekolah.
          </p>

          <button
            className="
              mt-8
              rounded-full
              bg-yellow-500
              px-7
              py-3
              font-semibold
              text-black
              transition
              duration-300
              hover:bg-yellow-600
            "
          >
            Baca Selanjutnya
            <span className="ml-3">›</span>
          </button>
        </div>

      </div>
    </div>
    </section>
  );
}