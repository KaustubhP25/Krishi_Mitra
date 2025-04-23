
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import LanguageToggle from "@/components/LanguageToggle";
import { t } from "@/lib/langHelper";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: t("news") === "समाचार"
        ? "नई सूखा-प्रतिरोधी फसल किस्में जारी"
        : "New drought-resistant crop varieties released",
      date: t("news") === "समाचार"
        ? "3 अप्रैल 2025"
        : "April 3, 2025",
      summary: t("news") === "समाचार"
        ? "कृषि अनुसंधान संस्थान ने मक्का और बीन्स की नई सूखा-प्रतिरोधी किस्में जारी की हैं।"
        : "Agriculture research institute has released new drought-resistant varieties of maize and beans.",
      category: t("news") === "समाचार" ? "अनुसंधान" : "Research"
    },
    {
      id: 2,
      title: t("news") === "समाचार"
        ? "सब्सिडी आवेदन तिथि बढ़ाई गई"
        : "Subsidy application deadline extended",
      date: t("news") === "समाचार"
        ? "1 अप्रैल 2025"
        : "April 1, 2025",
      summary: t("news") === "समाचार"
        ? "कृषि मंत्रालय ने वार्षिक कृषि इनपुट सब्सिडी कार्यक्रम की अंतिम तिथि एक माह के लिए बढ़ा दी है।"
        : "The Ministry of Agriculture has extended the deadline for the annual input subsidy program by one month.",
      category: t("news") === "समाचार" ? "नीति" : "Policy"
    },
    {
      id: 3,
      title: t("news") === "समाचार"
        ? "आगामी किसान प्रशिक्षण कार्यशालाएँ"
        : "Upcoming farmer training workshops",
      date: t("news") === "समाचार"
        ? "28 मार्च 2025"
        : "March 28, 2025",
      summary: t("news") === "समाचार"
        ? "विभिन्न क्षेत्रों में आधुनिक कृषि तकनीकों पर कार्यशालाओं की श्रृंखला अगले सप्ताह से आयोजित की जाएगी।"
        : "A series of workshops on modern agriculture techniques will be held in various districts starting next week.",
      category: t("news") === "समाचार" ? "कार्यक्रम" : "Program"
    },
    {
      id: 4,
      title: t("news") === "समाचार"
        ? "प्रमुख फसलों के बाजार दाम अपडेट"
        : "Major crop market price updates",
      date: t("news") === "समाचार"
        ? "25 मार्च 2025"
        : "March 25, 2025",
      summary: t("news") === "समाचार"
        ? "वर्तमान बाजार प्रवृत्तियाँ मक्का और बीन्स के दामों में वृद्धि दिखाती हैं, जबकि सब्ज़ियों के दाम स्थिर हैं।"
        : "Current market trends show an increase in maize and beans prices while vegetable prices remain stable.",
      category: t("news") === "समाचार" ? "बाज़ार" : "Market"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 relative">
      <div className="absolute top-4 right-4 z-10">
        <LanguageToggle />
      </div>
      <div className="container mx-auto max-w-5xl">
        <Card className="shadow-lg">
          <CardHeader className="bg-green-500 text-white text-center py-6">
            <h1 className="text-3xl font-bold">{t("agriNews")}</h1>
            <p className="mt-2">{t("newsSub")}</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-2xl font-semibold">{t("latestNews")}</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">{t("all")}</Button>
                <Button variant="outline" size="sm">{t("policy")}</Button>
                <Button variant="outline" size="sm">{t("research")}</Button>
                <Button variant="outline" size="sm">{t("market")}</Button>
                <Button variant="outline" size="sm">{t("program")}</Button>
              </div>
            </div>
            <div className="space-y-6">
              {newsArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-gray-200 w-full md:w-1/4 h-40 md:h-auto"></div>
                    <div className="p-4 md:p-6 w-full md:w-3/4 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-sm">{article.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                      <p className="text-gray-600">{article.summary}</p>
                      <a href="#" className="text-green-500 hover:underline mt-4 self-start">{t("readNews")} →</a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="mr-2">{t("prev")}</Button>
              <Button variant="outline" className="mx-1">1</Button>
              <Button variant="outline" className="mx-1">2</Button>
              <Button variant="outline" className="mx-1">3</Button>
              <Button variant="outline" className="ml-2">{t("next")}</Button>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 border-t p-4">
            <div className="w-full flex justify-between items-center">
              <p className="text-gray-500">{t("newsletter")}</p>
              <Link to="/home">
                <Button variant="outline">{t("goHome")}</Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
export default News;
