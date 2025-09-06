export interface City {
  name: string;
  nameArabic: string;
  slug: string;
  neighborhoods: Neighborhood[];
}

export interface Neighborhood {
  name: string;
  nameArabic: string;
  slug: string;
}

export const cities: City[] = [
  {
    name: "Riyadh",
    nameArabic: "الرياض",
    slug: "riyadh",
    neighborhoods: [
      { name: "Al-Olaya", nameArabic: "العليا", slug: "al-olaya" },
      { name: "Al-Malaz", nameArabic: "الملز", slug: "al-malaz" },
      { name: "King Fahd District", nameArabic: "حي الملك فهد", slug: "king-fahd-district" },
      { name: "Al-Nakheel", nameArabic: "النخيل", slug: "al-nakheel" },
    ]
  },
  {
    name: "Jeddah",
    nameArabic: "جدة",
    slug: "jeddah",
    neighborhoods: [
      { name: "Al-Balad", nameArabic: "البلد", slug: "al-balad" },
      { name: "Al-Hamra", nameArabic: "الحمراء", slug: "al-hamra" },
      { name: "Al-Rawdah", nameArabic: "الروضة", slug: "al-rawdah" },
      { name: "Obhur", nameArabic: "أبحر", slug: "obhur" },
    ]
  },
  {
    name: "Dammam",
    nameArabic: "الدمام",
    slug: "dammam",
    neighborhoods: [
      { name: "Al-Faisaliyah", nameArabic: "الفيصلية", slug: "al-faisaliyah" },
      { name: "Al-Shati", nameArabic: "الشاطئ", slug: "al-shati" },
      { name: "Al-Noor", nameArabic: "النور", slug: "al-noor" },
      { name: "Al-Adamah", nameArabic: "الآدمة", slug: "al-adamah" },
    ]
  },
  {
    name: "Mecca",
    nameArabic: "مكة المكرمة",
    slug: "mecca",
    neighborhoods: [
      { name: "Al-Aziziyah", nameArabic: "العزيزية", slug: "al-aziziyah" },
      { name: "Al-Mansour", nameArabic: "المنصور", slug: "al-mansour" },
      { name: "Ajyad", nameArabic: "أجياد", slug: "ajyad" },
      { name: "Al-Shubaikah", nameArabic: "الشبيكة", slug: "al-shubaikah" },
    ]
  },
  {
    name: "Medina",
    nameArabic: "المدينة المنورة",
    slug: "medina",
    neighborhoods: [
      { name: "Al-Haram", nameArabic: "الحرم", slug: "al-haram" },
      { name: "Quba", nameArabic: "قباء", slug: "quba" },
      { name: "Al-Awali", nameArabic: "العوالي", slug: "al-awali" },
      { name: "Al-Uyun", nameArabic: "العيون", slug: "al-uyun" },
    ]
  }
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}