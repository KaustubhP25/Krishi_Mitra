
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Bot, MessageCircle } from "lucide-react";
import { t } from "@/lib/langHelper";

interface ChatMessage {
  role: "user" | "bot";
  content: string;
}

const FarmingChatbot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      content: t("chatbotWelcome") || "Hello! I'm your farming assistant. Ask me anything about farming or agricultural policies in India!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);

    // Add user message to chat
    setMessages((prev) => [
      ...prev,
      { role: "user", content: userMessage },
    ]);

    try {
      // Mock response for now - in a real app, this would call an AI API
      const demoResponses = {
        "crops": "Common crops in India include rice, wheat, sugarcane, cotton, and various pulses. The choice of crop depends on your region's climate and soil type.",
        "policies": "Key agricultural policies in India include PM-KISAN, Soil Health Card Scheme, and the National Agriculture Market (eNAM). These aim to support farmers through direct income support and better market access.",
        "seasons": "India has three main agricultural seasons: Kharif (monsoon), Rabi (winter), and Zaid (summer). Each season is suitable for different crops.",
        
        "whenToSowWheat": "Wheat is typically sown in India during the Rabi season, from late October to December, depending on the region and weather conditions.",
        "howToImproveSoil": "Use organic matter like compost, apply the correct fertilizers, practice crop rotation, and get your soil tested regularly through the Soil Health Card Scheme.",
        "whenToHarvestRice": "Rice is usually harvested 3–4 months after sowing. Kharif rice is harvested between October and December.",
        "howToSaveWater": "Use techniques like drip irrigation, mulching, and scheduling irrigation based on crop needs to conserve water.",
        "whichFertilizerForPaddy": "Urea, DAP (Di-ammonium Phosphate), and Potash are commonly used for paddy. Use based on soil test recommendations.",
        "whatIsGreenManure": "Green manure crops are grown and then plowed into the soil to improve its fertility and structure. Examples include dhaincha and sunhemp.",
        "bestTimeToPlantSugarcane": "Sugarcane is typically planted between February and April (spring season) or September and October (autumn season).",
        "howToControlWeeds": "Use mulching, hand weeding, or herbicides like Pendimethalin, depending on the crop and stage of growth.",
        "whatIsDripIrrigation": "Drip irrigation delivers water directly to the roots of plants, reducing wastage and improving water use efficiency.",
        "whatIsOrganicFarming": "Organic farming avoids synthetic chemicals and focuses on natural inputs, soil health, and ecological balance.",
        "bestTimeToSowMustard": "Mustard is best sown from mid-October to early November during the Rabi season.",
        "howToIncreaseYield": "Follow recommended farming practices, use quality seeds, apply the right fertilizers, ensure proper irrigation, and manage pests to increase crop yield.",
        "howToPreventCropDiseases": "Use certified seeds, rotate crops, monitor your fields regularly, apply recommended fungicides or pesticides only when needed, and maintain good field hygiene.",
        "whatIsMulching": "Mulching involves covering the soil with organic or synthetic materials to reduce evaporation, prevent weeds, and regulate soil temperature. Materials like straw, leaves, and plastic sheets can be used.",
        "whatIsZeroTillage": "Zero tillage is a farming technique where crops are planted without disturbing the soil through plowing. This helps retain soil moisture and improves soil health.",  "default": "I can help you with information about crops, farming seasons, and agricultural policies in India. What would you like to know?"
      }
      ;

      // Simple keyword matching for demo
      const lowerMessage = userMessage.toLowerCase();

const response = lowerMessage.includes("crop") ? demoResponses.crops
    : lowerMessage.includes("policy") || lowerMessage.includes("scheme") ? demoResponses.policies
    : lowerMessage.includes("season") ? demoResponses.seasons
    : lowerMessage.includes("wheat") && lowerMessage.includes("sow") ? demoResponses.whenToSowWheat
    : lowerMessage.includes("mustard") && lowerMessage.includes("sow") ? demoResponses.bestTimeToSowMustard
    : lowerMessage.includes("yield") ? demoResponses.howToIncreaseYield
    : lowerMessage.includes("disease") ? demoResponses.howToPreventCropDiseases
    : lowerMessage.includes("fertilizer") && lowerMessage.includes("paddy") ? demoResponses.whichFertilizerForPaddy
    : lowerMessage.includes("mulch") ? demoResponses.whatIsMulching
    : lowerMessage.includes("zero tillage") ? demoResponses.whatIsZeroTillage
    : lowerMessage.includes("drip irrigation") ? demoResponses.whatIsDripIrrigation
    : lowerMessage.includes("organic farming") ? demoResponses.whatIsOrganicFarming
    : lowerMessage.includes("sugarcane") && lowerMessage.includes("plant") ? demoResponses.bestTimeToPlantSugarcane
    : lowerMessage.includes("weed") || lowerMessage.includes("weeds") ? demoResponses.howToControlWeeds
    : lowerMessage.includes("green manure") ? demoResponses.whatIsGreenManure
    : lowerMessage.includes("water") || lowerMessage.includes("irrigation") ? demoResponses.howToSaveWater
    : lowerMessage.includes("harvest") && lowerMessage.includes("rice") ? demoResponses.whenToHarvestRice
    : demoResponses.default;


      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: "bot", content: response },
        ]);
        setIsLoading(false);
      }, 1000);

    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="bg-green-500 text-white p-4 flex items-center gap-2">
        <Bot className="w-6 h-6" />
        <h2 className="text-xl font-semibold">{t("farmingAssistant") || "Farming Assistant"}</h2>
      </CardHeader>
      <CardContent className="p-4">
        <div className="h-[400px] overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.role === "user"
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                {t("thinking") || "Thinking..."}
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder={t("askAboutFarming") || "Ask about farming..."}
            className="flex-1"
          />
          <Button 
            onClick={handleSend} 
            disabled={isLoading || !input.trim()}
            className="bg-green-500 hover:bg-green-600"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FarmingChatbot;
