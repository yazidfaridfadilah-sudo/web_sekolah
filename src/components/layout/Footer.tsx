import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-yellow-400 px-10 md:px-20 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        <div className="text-white text-center md:text-left">
          <h1 className="text-3xl font-bold mb-8">
            SMK1
          </h1>
          <p className="text-lg font-medium leading-relaxed max-w-md">
            Sekolah adalah tempat mencetak penerus bangsa
            <br />
            yang berkualitas dan berprestasi di segala bidang
            <br />
            yang dapat bersaing di dunia internasional
          </p>
        </div>
        <div className="text-white text-center">
          <div className="flex justify-center items-center gap-6 mb-5">
            <a
              href="https://www.instagram.com/smkdjirin1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href=""
              className="text-4xl hover:scale-110 transition-transform duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-4xl hover:scale-110 transition-transform duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.tiktok.com/@iptmdjirin57?_r=1&_t=ZS-99Py3wAoTbO"
              className="text-4xl hover:scale-110 transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
          </div>
          <div className="text-xl md:text-2xl font-bold leading-relaxed text-justify">
            <p>
              Dibuat oleh Pkl_2026,
            </p>
            <p>
              Menggunakan Tailwind CSS dan JS. @2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}