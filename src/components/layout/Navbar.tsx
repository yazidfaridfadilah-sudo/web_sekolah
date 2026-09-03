export default function Navbar() {
  return (
    <nav className="text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-5xl font-bold">
          <span className="text-yellow-400">SM</span>
          <span className="text-black">K1</span>
        </h1>
        <ul className="flex gap-15">
          <li>
            <a href="#Beranda" className="hover:text-gray-300 text-amber-300">
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#tentang-kami"
              className="flex items-center gap-2 hover:text-gray-300 text-black"
            >
              Tentang Kami
            </a>
          </li>
          <li>
            <a
              href="#whyus"
              className="flex items-center gap-2 hover:text-gray-300 text-black"
            >
              Program
            </a>
          </li>
          <li>
            <a
              href="#jurusan"
              className="flex items-center gap-2 hover:text-gray-300 text-black"
            >
              Jurusan
            </a>
          </li>
          <li>
            <a
              href="#eskul"
              className="flex items-center gap-2 hover:text-gray-300 text-black"
            >
              Eskul
            </a>
          </li>
          <li>
            <a
              href="#Guru"
              className="flex items-center gap-2 hover:text-gray-300 text-black"
            >
              Berita
            </a>
          </li>
          <li>
            <a
              href="#Guru"
              className="flex items-center gap-2 hover:text-gray-300 text-black"
            >
              Alumni
            </a>
          </li>
        </ul>
        <button className="hover:text-gray-300 bg-amber-300 rounded-4xl text-xl 
        px-4 py-2 font-bold text-white">
          Contact
        </button>
      </div>
    </nav>
  );
}
