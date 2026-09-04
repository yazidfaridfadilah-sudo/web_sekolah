import { useEffect, useState } from "react";
export default function Navbar() {
  
  const [activeMenu, setActiveMenu] = useState("Beranda")

  const menus = [
    {name: "Beranda", href: "#hero"},
    {name: "Program", href:"#whyus"},
    {name: "Tentang Kami", href:"#tentang-kami"},
    {name: "Jurusan", href:"#jurusan"},
    {name: "Eskul", href:"#eskul"},
    {name: "Berita", href:"#berita"},
    {name: "Galeri", href:"#galeri"},
    {name: "Alumni", href:"#alumni"},
   ];

   useEffect (() => {
    const section = menus.map((menu) =>
    document.querySelector(menu.href)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const menu = menus.find(
              (menu) => menu.href === `#${entry.target.id}`
            );

            if (menu) {
              setActiveMenu(menu.name)
            }
          }
        });
      },
    {
      threshold: 0.3,
    }
    );

    section.forEach((section) =>
      observer.observe(section));
    
    return () => observer.disconnect();  
}, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-5xl font-bold">
          <span className="text-yellow-400">SM</span>
          <span className="text-black">K1</span>
        </h1>
        <ul className="flex gap-15">
          {menus.map((menu) => (
          <li key={menu.name}>
            <a href={menu.href}
            onClick={ () =>
            setActiveMenu(menu.name) }
             className={`flex items-center gap-2 transition-colors duration-200 ${activeMenu === menu.name ? "text-amber-400" : "text-black hover:text-amber-400"}`}>
              {menu.name}
            </a>
          </li>
          ))}
        </ul>

        <a href="#footer" className="hover:text-gray-300 bg-amber-300 rounded-4xl text-xl 
        px-4 py-2 font-bold text-white">
          Contact
        </a>
      </div>
    </nav>
  );
}
