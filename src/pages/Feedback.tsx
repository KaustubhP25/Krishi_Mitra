
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import LanguageToggle from "@/components/LanguageToggle";
import { t } from "@/lib/langHelper";

const Feedback = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t("thankYouFeedback") || "Thank you for your feedback!",
      description: t("feedbackReceived") || "Your feedback has been submitted."
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 relative">
      <div className="absolute top-4 right-4 z-10">
        <LanguageToggle />
      </div>
      <div className="container mx-auto max-w-xl">
        <Card className="shadow-lg">
          <CardHeader className="bg-green-500 text-white text-center py-6">
            <h1 className="text-3xl font-bold">{t("feedback") || "Feedback"}</h1>
            <p className="mt-2">{t("feedbackInfo") || "We value your thoughts. Please let us know how we're doing!"}</p>
          </CardHeader>
          <CardContent className="p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm mb-1" htmlFor="name">{t("name") || "Name"}</label>
                <Input id="name" name="name" value={form.name} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="email">{t("email") || "Email"}</label>
                <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="message">{t("message") || "Message"}</label>
                <Textarea id="message" name="message" value={form.message} onChange={handleChange} required />
              </div>
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">{t("submit") || "Submit"}</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Feedback;
