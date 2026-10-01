import { useState } from "react";
import { ChevronDown, GraduationCap, Menu, X } from "lucide-react";

const menus = [
  { name: "Beranda", href: "/" },
  { name: "Program", href: "/program" },
  { name: "Eskul", href: "/eskul" },
  { name: "Berita", href: "/berita" },
  { name: "Galeri", href: "/galeri" },
  { name: "Alumni", href: "/alumni" },
];

const aboutLinks = [
  { name: "Profil Sekolah", href: "/profil-sekolah" },
  { name: "Guru", href: "/guru" },
  { name: "Siswa", href: "/siswa" },
  { name: "Staff Tata Usaha", href: "/staff-tata-usaha" },
];

function getActiveMenu(path: string) {
  const menu = menus.find((item) => item.href === path);
  return menu?.name ??
    (aboutLinks.some((item) => item.href === path)
      ? "Tentang Kami"
      : path === "/contact"
        ? "Hubungi Kami"
        : "");
}

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(() =>
    getActiveMenu(window.location.pathname),
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeMenu = (name: string) => {
    setActiveMenu(name);
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-stone-950/40 text-white shadow-[0_12px_35px_-22px_rgba(28,25,23,0.9)] backdrop-blur-xl">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8"
      >
        <a
          href="/"
          onClick={() => closeMenu("Beranda")}
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="SMK Al-Muhadjirin 1, beranda"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-200/30 bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-600 text-stone-950 shadow-lg shadow-amber-950/20 transition duration-300 group-hover:rotate-3 group-hover:scale-105">
            <GraduationCap size={19} strokeWidth={2.5} />
          </span>
          <span className="text-sm font-extrabold tracking-tight text-white sm:text-base">
            SMK <span className="text-amber-300">Al-Muhadjirin</span>
          </span>
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition hover:bg-white/20 md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div
          id="primary-navigation"
          className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-1 border-b border-white/10 bg-stone-950/95 p-4 shadow-lg backdrop-blur-xl md:static md:flex md:flex-row md:items-center md:gap-1.5 md:rounded-2xl md:border md:border-white/10 md:bg-white/10 md:p-1.5 md:shadow-inner md:shadow-white/5`}
        >
          {[
            ...menus.slice(0, 2),
            { name: "Tentang Kami", href: "/profil-sekolah" },
            ...menus.slice(2),
          ].map((menu) =>
            menu.name === "Tentang Kami" ? (
              <div key={menu.name} className="relative">
                <button
                  type="button"
                  aria-expanded={aboutOpen}
                  aria-haspopup="true"
                  onClick={() => setAboutOpen((open) => !open)}
                  className={`flex w-full items-center justify-between gap-1 rounded-xl px-3 py-2 text-left text-sm font-semibold transition-all duration-300 ${
                    activeMenu === menu.name
                      ? "bg-gradient-to-br from-amber-50 to-white text-amber-800 shadow-md shadow-stone-950/10"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {menu.name}
                  <ChevronDown
                    size={15}
                    className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {aboutOpen && (
                  <div className="mt-1 flex flex-col gap-1 rounded-xl border border-white/10 bg-stone-900 p-2 shadow-lg md:absolute md:left-0 md:top-full md:mt-2 md:w-52">
                    {aboutLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => {
                          closeMenu(menu.name);
                          setAboutOpen(false);
                        }}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-amber-200"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={menu.name}
                href={menu.href}
                onClick={() => {
                  closeMenu(menu.name);
                  setAboutOpen(false);
                }}
                aria-current={
                  activeMenu === menu.name ? "location" : undefined
                }
                className={`rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeMenu === menu.name
                    ? "bg-gradient-to-br from-amber-50 to-white text-amber-800 shadow-md shadow-stone-950/10"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                {menu.name}
              </a>
            ),
          )}
          <a
            href="/contact"
            onClick={() => closeMenu("Hubungi Kami")}
            aria-current={
              activeMenu === "Hubungi Kami" ? "page" : undefined
            }
            className="mt-2 inline-flex items-center justify-center gap-1 rounded-xl border border-amber-300/45 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 px-4 py-2 text-sm font-extrabold text-stone-950 shadow-lg shadow-amber-950/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-amber-400/30 md:ml-1 md:mt-0"
          >
            Hubungi Kami
          </a>
        </div>
      </nav>
    </header>
  );
}
