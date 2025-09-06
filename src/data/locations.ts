export interface City {
  name: { ar: string; en: string };
  slug: string;
  population: number;
  neighborhoods: Neighborhood[];
  serviceFactors: {
    climate: string;
    commonIssues: string[];
  };
}

export interface Neighborhood {
  name: string;
  nameArabic: string;
  slug: string;
}

export const saudiLocations = {
  "riyadh": {
    name: { ar: "الرياض", en: "Riyadh" },
    population: 7000000,
    neighborhoods: [
      { name: "Al-Olaya", nameArabic: "العليا", slug: "al-olaya" },
      { name: "Al-Murabba", nameArabic: "المربع", slug: "al-murabba" },
      { name: "Diriyah", nameArabic: "الدرعية", slug: "diriyah" },
      { name: "Al-Nakheel", nameArabic: "النخيل", slug: "al-nakheel" },
    ],
    serviceFactors: {
      climate: "جاف وحار",
      commonIssues: ["الدفان", "الرطوبة المنخفضة", "العواصف الرملية"]
    }
  },
  "jeddah": {
    name: { ar: "جدة", en: "Jeddah" },
    population: 4500000,
    neighborhoods: [
      { name: "Al-Balad", nameArabic: "البلد", slug: "al-balad" },
      { name: "Al-Hamra", nameArabic: "الحمراء", slug: "al-hamra" },
      { name: "Al-Shati", nameArabic: "الشاطئ", slug: "al-shati" },
      { name: "Al-Salamah", nameArabic: "السلامة", slug: "al-salamah" },
    ],
    serviceFactors: {
      climate: "رطب ومداري",
      commonIssues: ["الرطوبة العالية", "التآكل", "الحشرات المدارية"]
    }
  },
  "mecca": {
    name: { ar: "مكة المكرمة", en: "Mecca" },
    population: 2000000,
    neighborhoods: [
      { name: "Ajyad", nameArabic: "أجياد", slug: "ajyad" },
      { name: "Al-Aziziyah", nameArabic: "العزيزية", slug: "al-aziziyah" },
      { name: "Al-Haram", nameArabic: "الحرم", slug: "al-haram" },
      { name: "Al-Khalidiyyah", nameArabic: "الخالدية", slug: "al-khalidiyyah" },
    ],
    serviceFactors: {
      climate: "جبلي حار",
      commonIssues: ["الحج الموسمي", "الكثافة السكانية", "المياه المقدسة"]
    }
  },
  "medina": {
    name: { ar: "المدينة المنورة", en: "Medina" },
    population: 1500000,
    neighborhoods: [
      { name: "Al-Haram", nameArabic: "الحرم", slug: "al-haram" },
      { name: "Quba", nameArabic: "قباء", slug: "quba" },
      { name: "Al-Awali", nameArabic: "العوالي", slug: "al-awali" },
      { name: "Al-Azahir", nameArabic: "الأزاهر", slug: "al-azahir" },
    ],
    serviceFactors: {
      climate: "صحراوي معتدل",
      commonIssues: ["الزيارة الدينية", "المياه الجوفية", "النخيل"]
    }
  },
  "dammam": {
    name: { ar: "الدمام", en: "Dammam" },
    population: 1200000,
    neighborhoods: [
      { name: "Al-Faisaliyah", nameArabic: "الفيصلية", slug: "al-faisaliyah" },
      { name: "Al-Noor", nameArabic: "النور", slug: "al-noor" },
      { name: "Al-Shatea", nameArabic: "الشاطئ", slug: "al-shatea" },
      { name: "Al-Adamah", nameArabic: "الآدمة", slug: "al-adamah" },
    ],
    serviceFactors: {
      climate: "ساحلي رطب",
      commonIssues: ["الملوحة", "الرطوبة الساحلية", "النفط والغاز"]
    }
  },
  "abha": {
    name: { ar: "أبها", en: "Abha" },
    population: 500000,
    neighborhoods: [
      { name: "Al-Manhal", nameArabic: "المنهل", slug: "al-manhal" },
      { name: "Al-Wurud", nameArabic: "الورود", slug: "al-wurud" },
      { name: "Shadaa", nameArabic: "شدا", slug: "shadaa" },
      { name: "Al-Sahab", nameArabic: "السهب", slug: "al-sahab" },
    ],
    serviceFactors: {
      climate: "جبلي معتدل",
      commonIssues: ["الأمطار", "الضباب", "المدرجات الجبلية"]
    }
  },
  "tabuk": {
    name: { ar: "تبوك", en: "Tabuk" },
    population: 600000,
    neighborhoods: [
      { name: "Al-Wurud", nameArabic: "الورود", slug: "al-wurud" },
      { name: "Al-Malqa", nameArabic: "الملقا", slug: "al-malqa" },
      { name: "Al-Faisaliyah", nameArabic: "الفيصلية", slug: "al-faisaliyah" },
      { name: "Al-Nakheel", nameArabic: "النخيل", slug: "al-nakheel" },
    ],
    serviceFactors: {
      climate: "صحراوي بارد شتاء",
      commonIssues: ["التغيرات الحرارية", "الرياح", "المياه الجوفية"]
    }
  },
  "khobar": {
    name: { ar: "الخبر", en: "Khobar" },
    population: 700000,
    neighborhoods: [
      { name: "Al-Aqrabiyah", nameArabic: "العقربية", slug: "al-aqrabiyah" },
      { name: "Al-Thuqbah", nameArabic: "الثقبة", slug: "al-thuqbah" },
      { name: "Al-Rakah", nameArabic: "الراكة", slug: "al-rakah" },
      { name: "Al-Dana", nameArabic: "الدانة", slug: "al-dana" },
    ],
    serviceFactors: {
      climate: "ساحلي حار",
      commonIssues: ["الملوحة العالية", "الرطوبة", "المنشآت النفطية"]
    }
  }
};

// Legacy compatibility
export const cities = Object.entries(saudiLocations).map(([slug, city]) => ({
  name: city.name.en,
  nameArabic: city.name.ar,
  slug,
  neighborhoods: city.neighborhoods
}));

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getSaudiLocationBySlug(slug: string) {
  return saudiLocations[slug as keyof typeof saudiLocations];
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}

export function getAllSaudiLocationSlugs(): string[] {
  return Object.keys(saudiLocations);
}