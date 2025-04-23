
import React, { useState } from "react";
import { Languages } from "lucide-react";
import { t, dict, getLang } from "@/lib/langHelper"; // import dict and getLang

const LANGUAGES = [
  { code: "hi", labelKey: "hindiLabel" },
  { code: "en", labelKey: "englishLabel" }
];

// We'll add the translated language labels inline here because dict does not have them!
const langDisplayNames = {
  hi: {
    hi: "हिन्दी",
    en: "अंग्रेज़ी"
  },
  en: {
    hi: "Hindi",
    en: "English"
  }
};

const getInitialLang = () => {
  // Defaults to Hindi if not set
  return localStorage.getItem("lang") || "hi";
};

const LanguageToggle = () => {
  const [lang, setLang] = useState<string>(getInitialLang());

  const handleChange = (code: string) => {
    setLang(code);
    localStorage.setItem("lang", code);
    window.location.reload();
  };

  // Use the current language to display both language labels
  const currentLang = getLang();

  return (
    <div className="flex items-center space-x-2">
      <Languages className="w-5 h-5 text-green-700" />
      {Object.keys(langDisplayNames[currentLang]).map((code) => (
        <button
          key={code}
          onClick={() => handleChange(code)}
          className={`px-2 py-1 rounded flex items-center space-x-1 ${
            lang === code ? "bg-green-500 text-white" : "bg-gray-100 text-green-700"
          } text-sm`}
        >
          <span>{langDisplayNames[currentLang][code]}</span>
          {lang === code && (
            <span aria-label="Selected" className="ml-1 font-bold">✓</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;

