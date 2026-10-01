import type { JSX } from "react";
import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import WhyUs from "./components/sections/WhyUs";
import Majors from "./components/sections/Majors";
import Extracurricular from "./components/sections/Extracurricular";
import News from "./components/sections/News";
import Gallery from "./components/sections/Gallery";
import Alumni from "./components/sections/Alumni";
import Footer from "./components/layout/Footer";
import SchoolProfile from "./components/sections/SchoolProfile";
import SchoolContact from "./components/sections/SchoolContact";
import SchoolDirectory, {
  type DirectoryPage,
} from "./components/sections/SchoolDirectory";
import Subjects from "./components/sections/Subjects";
import ScrollExperience from "./components/layout/ScrollExperience";

type Page =
  | { type: "home" }
  | { type: "section"; component: () => JSX.Element }
  | { type: "directory"; directory: DirectoryPage };

function getPage(path: string): Page {
  const route = path.replace(/^\/+|\/+$/g, "");

  if (route === "guru" || route === "siswa" || route === "staff-tata-usaha") {
    return { type: "directory", directory: route };
  }

  const sectionPages: Record<string, () => JSX.Element> = {
    program: WhyUs,
    "profil-sekolah": SchoolProfile,
    contact: SchoolContact,
    jurusan: Majors,
    "mata-pelajaran": Subjects,
    eskul: Extracurricular,
    berita: News,
    galeri: Gallery,
    alumni: Alumni,
  };
  const section = sectionPages[route];

  if (section) return { type: "section", component: section };
  return { type: "home" };
}

function App() {
  const [page, setPage] = useState<Page>(() => getPage(window.location.pathname));

  useEffect(() => {
    const cleanAddressBar = () => {
      if (window.location.pathname !== "/") {
        window.history.replaceState(null, "", "/");
      }
    };

    const handlePrivateNavigation = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) {
        return;
      }

      const url = new URL(link.href, window.location.origin);
      if (url.origin !== window.location.origin || !url.pathname.startsWith("/")) {
        return;
      }

      event.preventDefault();
      setPage(getPage(url.pathname));
      window.history.replaceState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    cleanAddressBar();
    document.addEventListener("click", handlePrivateNavigation);

    return () => document.removeEventListener("click", handlePrivateNavigation);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        <Navbar />
        {page.type === "home" && <ScrollExperience />}
        {page.type === "directory" ? (
          <SchoolDirectory page={page.directory} />
        ) : page.type === "section" ? (
          <page.component />
        ) : (
          <>
            <Hero />
            <WhyUs />
            <Majors />
            <Extracurricular />
          </>
        )}
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
