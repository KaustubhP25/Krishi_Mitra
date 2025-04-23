import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User, UserPlus, Calendar as CalIcon, FileText, Newspaper, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageToggle from "@/components/LanguageToggle";
import { t } from "@/lib/langHelper";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-600 text-white shadow-md">
        <div className="container mx-auto py-6 px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">{t("homeTitle")}</h1>
            <div className="flex items-center space-x-6">
              <LanguageToggle />
              <span>{t("userWelcome")}</span>
              <Button variant="outline" className="text-white border-white hover:bg-green-700">
                {t("logout")}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-8">{t("homeWelcome")}</h2>
          <p className="text-center text-lg max-w-3xl mx-auto mb-8">
            {t("platformDesc")}
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
            <User size={48} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t("registerPoor")}</h3>
            <p className="text-gray-600 mb-4">{t("poorDesc")}</p>
            <Link to="/register-poor" className="mt-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-full">
                {t("register")}
              </Button>
            </Link>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
            <UserPlus size={48} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t("register")}</h3>
            <p className="text-gray-600 mb-4">{t("registerDesc")}</p>
            <Link to="/register" className="mt-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-full">
                {t("register")}
              </Button>
            </Link>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
            <CalIcon size={48} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t("calendar")}</h3>
            <p className="text-gray-600 mb-4">{t("calendarDesc")}</p>
            <Link to="/calendar" className="mt-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-full">
                {t("showCalendar")}
              </Button>
            </Link>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
            <FileText size={48} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t("policies")}</h3>
            <p className="text-gray-600 mb-4">{t("policiesDesc")}</p>
            <Link to="/policies" className="mt-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-full">
                {t("policies")}
              </Button>
            </Link>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
            <Newspaper size={48} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t("news")}</h3>
            <p className="text-gray-600 mb-4">{t("newsDesc")}</p>
            <Link to="/news" className="mt-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-full">
                {t("readNews")}
              </Button>
            </Link>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
            <Bot size={48} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t("farmingAssistant")}</h3>
            <p className="text-gray-600 mb-4">{t("chatbotDesc") || "Get instant answers about farming and agricultural policies"}</p>
            <Link to="/chat-assistant" className="mt-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-full">
                {t("chatNow") || "Chat Now"}
              </Button>
            </Link>
          </Card>
        </section>
      </main>

      <footer className="bg-green-600 text-white mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <p dangerouslySetInnerHTML={{ __html: t("copyright") }} />
        </div>
      </footer>
    </div>
  );
};
export default Home;
