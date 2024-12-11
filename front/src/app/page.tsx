'use client'
import { useLanguage } from "@/context/languageContext";
import translations from "@/content/translations";

export default function Home() {
  const { language, setLanguage } = useLanguage();

  const t = translations[language]; 

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <header className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">{t.name}</h1>
        <div className="flex items-center gap-4">
          <button onClick={() => setLanguage(language === "en" ? "es" : "en")} className="p-2 border rounded">
            {language === "en" ? "ESP" : "ENG"}
          </button>
        </div>
      </header>

      <section id="about" className="">
        <h2 className="text-3xl font-bold mb-4">{t.aboutTitle}</h2>
        <p>{t.aboutDescriptionOne}</p>
        <p className="mt-4">{t.aboutDescriptionTwo}</p>
      </section>

      <section id="skills" className="">
        <h2 className="text-3xl font-bold mb-4">{t.skillsTitle}</h2>
        
      </section>

      <section id="contact" className="">
        <h2 className="">{t.contactTitle}</h2>
        <p>{t.contactDescriptionOne}</p>
      </section>
    </main>
  );
}
