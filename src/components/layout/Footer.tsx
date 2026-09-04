import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaChevronUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <section id="footer">
      <footer className="bg-yellow-400 px-10 py-16 md:px-20">
        <div className="mx-auto flex max-w-7xl items-start justify-between gap-10">
          <div className="text-left text-white">
            <h1 className="mb-8 text-3xl font-bold">
              SMK1
            </h1>

            <p className="max-w-md text-lg font-medium leading-relaxed">
              Sekolah adalah tempat mencetak penerus bangsa
              <br />
              yang berkualitas dan berprestasi di segala bidang
              <br />
              yang dapat bersaing di dunia internasional
            </p>

            <div className="mt-8 flex items-center gap-6">
              <a
                href="https://www.instagram.com/smkdjirin1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl transition-transform duration-300 hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/gaby.uwoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl transition-transform duration-300 hover:scale-110"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.youtube.com/@fardhurify"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl transition-transform duration-300 hover:scale-110"
              >
                <FaYoutube />
              </a>

              <a
                href="https://www.tiktok.com/@iptmdjirin57"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl transition-transform duration-300 hover:scale-110"
              >
                <FaTiktok />
              </a>
            </div>

            <div className="mt-8 flex items-center w-fit gap-2 text-xl font-bold border-2 px-4 py-2 border-b-gray-100">
              <div className="flex flex-col">
                <FaChevronUp className="text-2xl" />
                <FaChevronUp className="-mt-3 text-2xl" />
              </div>
             
              <a href="#hero">
                KEMBALI KE ATAS
              </a>
            </div>
          </div>

          <div className="text-left text-white">

            <h2 className="mb-5 text-2xl font-bold">
              SITE MAP
            </h2>

            <ul className="space-y-3 text-lg">
              <li>
                <a href="#hero" className="hover:underline">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang-kami" className="hover:underline">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#jurusan" className="hover:underline">
                  Jurusan
                </a>
              </li>
              <li>
                <a href="#eskul" className="hover:underline">
                  Ekstrakurikuler
                </a>
              </li>
              <li>
                <a href="#berita" className="hover:underline">
                  Berita
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:underline">
                  Galeri
                </a>
              </li>
              <li>
                <a href="#alumni" className="hover:underline">
                  Alumni
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  );
}

