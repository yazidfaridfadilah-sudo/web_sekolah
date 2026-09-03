export default function SchoolProfile() {
  return (
    <div className="min-h-screen bg-white px-6 py-8">

   
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold text-black md:text-4xl">
          Profil{" "}
          <span className="text-yellow-700">
            SMK AL-MUHAJIRIN 1
          </span>
        </h1>

        <h2 className="mt-2 text-2xl font-extrabold text-black md:text-3xl">
          Bekasi
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
            <img
              src="/images/SchoolProfile.jpg"
              alt="Profil sekolah"
            className="h-75 w-full rounded-3xl object-cover"
          />
        </div>

        <div>
          <h3 className="text-2xl font-extrabold leading-tight text-black md:text-3xl">
            Sambutan Kepala Sekolah
            <br />
            SMK AL-MUHAJIRIN
          </h3>

          <p className="mt-7 font-semibold leading-relaxed text-gray-500">
            Sekolah adalah tempat mencetak penurus bangsa yang berkulitas dan berprestasi di segala bidang yang dapat
            bersaing di dunia internasional.
          </p>

          <p className="mt-5 font-semibold leading-relaxed text-gray-500">
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
              font-bold
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
  );
}