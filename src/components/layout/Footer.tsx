import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/fiboys13/",
    Icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/gaby.uwoe",
    Icon: FaFacebook,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@fardhurify",
    Icon: FaYoutube,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@iptmdjirin57",
    Icon: FaTiktok,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/628561831850",
    Icon: FaWhatsapp,
  },
];

const siteLinks = [
  { name: "Beranda", href: "/" },
  { name: "Profil Sekolah", href: "/profil-sekolah" },
  { name: "Guru", href: "/guru" },
  { name: "Siswa", href: "/siswa" },
  { name: "Staff Tata Usaha", href: "/staff-tata-usaha" },
  { name: "Program", href: "/program" },
  { name: "Jurusan", href: "/jurusan" },
  { name: "Ekstrakurikuler", href: "/eskul" },
  { name: "Berita", href: "/berita" },
  { name: "Galeri", href: "/galeri" },
  { name: "Alumni", href: "/alumni" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="scroll-mt-20 bg-gradient-to-br from-[#352b17] via-[#292516] to-[#1f211d] px-5 py-14 text-white sm:px-8 sm:py-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.5fr_0.7fr]">
        <div>
          <a href="/" className="inline-flex items-center">
            <span className="text-lg font-extrabold tracking-tight">
              SMK Al-Muhadjirin 1
            </span>
          </a>
          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300">
            Membentuk generasi yang berkarakter, kompeten, dan siap melangkah
            menuju masa depan.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-slate-300 transition hover:border-amber-400 hover:bg-amber-400 hover:text-slate-950"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-amber-400">
            Navigasi
          </h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-amber-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} SMK Al-Muhadjirin 1 Bekasi. Hak cipta
          dilindungi.
        </p>
        <a href="/" className="font-semibold transition hover:text-amber-300">
          Kembali ke beranda ↑
        </a>
      </div>
    </footer>
  );
}
