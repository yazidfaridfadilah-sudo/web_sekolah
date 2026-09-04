export default function Extracurricular() {
  return (
    <section id="eskul" className="bg-white py-16">


      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">
          Ekstrakulikuler Di{" "}
          <span className="text-yellow-400">SMK 1</span>
        </h1>

        <h2 className="text-3xl font-bold text-yellow-400">
          Al Muhadjirin{""}
          <span className="text-black"> Bekasi</span>
        </h2>

        <p className="text-gray-500 mt-2">
          pilihan Ekstrakulikuler di SMK AL Muhadjirin 1 Bekasi
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-4 px-20 ml-30 gap-8 justify-center">


        <div className="bg-white rounded-2xl shadow-lg p-6 text-left w-60 hover:scale-105 transition">
          <img src="src/components/sections/Extracurricular/Rectangle 70.jpg" alt="Praja Muda Karana" className="ml-1 w-16 h-16 mx-auto mb-4 rounded-full" />
          <h3 className="font-semibold  text-xl">praja muda</h3>
            <h3 className="font-semibold  text-xl">karana</h3>
          <p className="text-gray-400 text-sm mt-2">
            Pertama kali di bentuk team tahun 2020
          </p>
        </div>


        <div className="bg-white rounded-2xl shadow-lg p-6 text-left w-60 hover:scale-105 transition">
          <img src="src/components/sections/Extracurricular/Rectangle 80.jpg" alt="pmr" className="ml-1 w-16 h-16 mx-auto mb-4 rounded-2xl" />
          <h3 className="font-semibold text-xl">Palang merah</h3>
          <h3 className="font-semibold text-xl">remaja</h3>
          <p className="text-gray-400 text-sm mt-2">
            Pertama kali di bentuk team tahun 2021
          </p>
        </div>


        <div className="bg-white rounded-2xl shadow-lg p-6 text-left w-60 hover:scale-105 transition">
          <img src="src/components/sections/Extracurricular/Rectangle 82.jpg" alt="gunung" className="ml-1 w-16 h-16 mx-auto mb-4 rounded-full" />
          <h3 className="font-semibold text-xl">Pecinta alam</h3>
          <p className="text-gray-400 text-sm mt-2">
            Pertama kali di bentuk team tahun 2022
          </p>
        </div>


        <div className="bg-white rounded-2xl shadow-lg p-6 text-left w-60 hover:scale-105 transition">
         <img src="src/components/sections/Extracurricular/Rectangle 83.jpg" alt="vollyball" className="ml-1 w-16 h-16 mx-auto mb-4 rounded-full" />
          <h3 className="font-semibold text-xl">Volleyball</h3>
          <p className="text-gray-400 text-sm mt-2">
            Pertama kali di bentuk team tahun 2023
          </p>
        </div>

      </div>

    </section>
  );
}