export default function Extracurricular() {
  return (
    <section id="eskul" className="bg-white py-16">

      
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">
          Ekstrakulikuler Di{" "}
          <span className="text-yellow-400">SMK 1</span>
        </h1>

        <h2 className="text-3xl font-bold text-yellow-400">
          Al Muhadjirin Bekasi
        </h2>

        <p className="text-gray-500 mt-2">
          pilihan Ekstrakulikuler di SMK AL Muhadjirin 1 Bekasi
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-10">

        {/* CARD 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
            ⚜️
          </div>
          <h3 className="font-semibold text-lg">praja muda karana</h3>
          <p className="text-gray-400 text-sm mt-2">
            Pertama kali di bentuk team tahun 2020
          </p>
        </div>

        
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center text-2xl">
            ➕
          </div>
          <h3 className="font-semibold text-lg">Palang merah remaja</h3>
          <p className="text-gray-400 text-sm mt-2">
            Pertama kali di bentuk team tahun 2021
          </p>
        </div>

        
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
            🏔️
          </div>
          <h3 className="font-semibold text-lg">Pecinta alam</h3>
          <p className="text-gray-400 text-sm mt-2">
            Pertama kali di bentuk team tahun 2022
          </p>
        </div>

        
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
            🏐
          </div>
          <h3 className="font-semibold text-lg">Volleyball</h3>
          <p className="text-gray-400 text-sm mt-2">
            Pertama kali di bentuk team tahun 2023
          </p>
        </div>

      </div>

    </section>
  );
}