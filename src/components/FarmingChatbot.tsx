
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
        "default": "I can help you with information about crops, farming seasons, and agricultural policies in India. What would you like to know?"
      };

      // Simple keyword matching for demo
      const response = userMessage.toLowerCase().includes("crop") ? demoResponses.crops
        : userMessage.toLowerCase().includes("policy") || userMessage.toLowerCase().includes("scheme") ? demoResponses.policies
        : userMessage.toLowerCase().includes("season") ? demoResponses.seasons
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
