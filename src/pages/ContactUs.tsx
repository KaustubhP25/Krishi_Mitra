import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import LanguageToggle from "@/components/LanguageToggle";
import { t } from "@/lib/langHelper";
import FeedbackForm from "@/components/FeedbackForm";

const ContactUs = () => (
  <div className="min-h-screen bg-gray-50 py-12 px-4 relative">
    <div className="absolute top-4 right-4 z-10">
      <LanguageToggle />
    </div>
    <div className="container mx-auto max-w-2xl">
      <Card className="shadow-lg">
        <CardHeader className="bg-green-500 text-white text-center py-6">
          <h1 className="text-3xl font-bold">{t("contactUs") || "Contact Us"}</h1>
        </CardHeader>
        <CardContent className="p-6 space-y-2 text-gray-700">
          <p>
            {t("contactUsText") ||
              "For any inquiries, support, or suggestions, contact us at:"}
          </p>
          <p>
            <span className="font-bold">{t("email") || "Email"}:</span> info@seedhopeconnect.com
          </p>
          <p>
            <span className="font-bold">{t("phone") || "Phone"}:</span> +91-12345-67890
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

export default ContactUs;
