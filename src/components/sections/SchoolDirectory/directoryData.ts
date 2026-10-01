export type Student = {
  name: string;
  major: string;
};

export type Teacher = {
  name: string;
  position: string;
};

export const students: Student[] = [
  { name: "Fahim Allauddin Rahman", major: "TITL" },
  { name: "Hendry Maulana", major: "TITL" },
  { name: "Muhammad Wildan Faiz Fadillah", major: "TITL" },
  { name: "Fachri Ibrahim", major: "TKJ" },
  { name: "Wira Mahadika Respati", major: "TKJ" },
  { name: "Afif Zaky Tamtama", major: "RPL" },
  { name: "Anisa Chairani", major: "RPL" },
  { name: "Azzahrafi Alfattih", major: "RPL" },
  { name: "Fardhu Rify", major: "RPL" },
  { name: "Lailatul Badriyah", major: "RPL" },
  { name: "Muhammad Fajri Rizky Ramadhan", major: "RPL" },
  { name: "Muhammad Rafka Umar Fadilah", major: "RPL" },
  { name: "Rayyan Ammar Wafiq Yasar", major: "RPL" },
  { name: "Revalia Syarif", major: "RPL" },
  { name: "Safiqah Mardhyyah", major: "RPL" },
  { name: "Seiya Rahmadani Siddik", major: "RPL" },
  { name: "Siti Maimuna", major: "RPL" },
  { name: "Yazid Farid Fadhillah", major: "RPL" },
  { name: "Allmira Hildayanti", major: "RPL" },
];

export const teachers: Teacher[] = [
  { name: "Rijan Sania Saputra, S.T., M.M", position: "Wakil Kepala Sekolah Bidang Kurikulum / Guru" },
  { name: "Sulaiman, S.Pd.I", position: "Wakil Kepala Sekolah Bidang Kesiswaan / Guru" },
  { name: "Nadya Chika Novella, M.Pd", position: "Staf Kurikulum / Guru" },
  { name: "Ahmad Danu Sugiarto", position: "Staf Hubin / Guru" },
  { name: "Baihaqi Rahmansah, S.Kom", position: "Guru" },
  { name: "Yosep Rayus Niaden, S.T", position: "Guru" },
  { name: "Anisah, S.Pd", position: "Guru" },
  { name: "Cecep Sugianto, S.Pd", position: "Guru" },
  { name: "Intan Saraswati, S.AP", position: "Guru" },
  { name: "Ihya Ulumudin, S.Kom", position: "Guru" },
  { name: "Muhammad Muharrom, M.Kom", position: "Guru" },
  { name: "Muhammad Naufal Afdhol Faiz, S.Pd", position: "Guru" },
  { name: "Neneng Irwanti", position: "Guru" },
  { name: "Abdul Baari", position: "Guru" },
  { name: "Hana Amelia Maryam", position: "Guru / Staf Tata Usaha" },
  { name: "Tia Sundari, S.Pd", position: "Guru / Staf Tata Usaha" },
];

export const majorNames: Record<string, string> = {
  TITL: "Teknik Instalasi Tenaga Listrik",
  TKJ: "Teknik Komputer dan Jaringan",
  RPL: "Rekayasa Perangkat Lunak",
};