
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import { t } from "@/lib/langHelper";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      <div className="absolute top-4 right-4 z-10">
        <LanguageToggle />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">{t("notFound")}</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          {t("goHome")}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
