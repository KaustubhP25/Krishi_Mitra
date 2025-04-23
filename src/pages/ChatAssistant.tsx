
import React from "react";
import FarmingChatbot from "@/components/FarmingChatbot";
import LanguageToggle from "@/components/LanguageToggle";
import { t } from "@/lib/langHelper";

const ChatAssistant = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 relative">
      <div className="absolute top-4 right-4 z-10">
        <LanguageToggle />
      </div>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          {t("farmingAssistant") || "Farming Assistant"}
        </h1>
        <FarmingChatbot />
      </div>
    </div>
  );
};

export default ChatAssistant;
