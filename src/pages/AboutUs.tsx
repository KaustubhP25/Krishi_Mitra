import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import LanguageToggle from "@/components/LanguageToggle";
import { t } from "@/lib/langHelper";
import FeedbackForm from "@/components/FeedbackForm";

const AboutUs = () => (
  <div className="min-h-screen bg-gray-50 py-12 px-4 relative">
    <div className="absolute top-4 right-4 z-10">
      <LanguageToggle />
    </div>
    <div className="container mx-auto max-w-2xl">
      <Card className="shadow-lg">
        <CardHeader className="bg-green-500 text-white text-center py-6">
          <h1 className="text-3xl font-bold">{t("aboutUs") || "About Us"}</h1>
        </CardHeader>
        <CardContent className="p-6 space-y-4 text-gray-700">
          <p>
            {t("aboutUsText1") ||
              "SeedHope Connect is dedicated to empowering farmers and their communities through accessible information, support, and programs. Our mission is to help you succeed!"}
          </p>
          <p>
            {t("aboutUsText2") ||
              "We strive to bridge the gap between technology and rural needs, ensuring every user can benefit from our services in their preferred language."}
          </p>
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-1">{t("feedback")}</h2>
            <p className="text-gray-600">{t("feedbackInfo")}</p>
            <FeedbackForm />
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default AboutUs;
