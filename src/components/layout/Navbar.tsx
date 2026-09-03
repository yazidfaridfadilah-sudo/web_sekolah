import { ChevronDown } from "lucide-react";

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
              <ChevronDown size={18} />
            </a>
          </li>
          <li>
            <a
              href="#whyus"
              className="flex items-center gap-2 hover:text-gray-300 text-black"
            >
              Program
              <ChevronDown size={18} />
            </a>
          </li>
          <li>
            <a
              href="#Guru"
              className="flex items-center gap-2 hover:text-gray-300 text-black"
            >
              Guru
              <ChevronDown size={18} />
            </a>
          </li>
          <li>
            <a
              href="#Guru"
              className="flex items-center gap-2 hover:text-gray-300 text-black"
            >
              Siswa
              <ChevronDown size={18} />
            </a>
          </li>
          <li>
            <a
              href="#Guru"
              className="flex items-center gap-2 hover:text-gray-300 text-black"
            >
              Berita
              <ChevronDown size={18} />
            </a>
          </li>
          <li>
            <a
              href="#Guru"
              className="flex items-center gap-2 hover:text-gray-300 text-black"
            >
              Fitur
              <ChevronDown size={18} />
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
