
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import LanguageToggle from "@/components/LanguageToggle";
import { t } from "@/lib/langHelper";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/home";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">
      <div className="absolute top-4 right-4 z-10">
        <LanguageToggle />
      </div>
      <Card className="w-full max-w-md shadow-md">
        <CardContent className="pt-6">
          <h1 className="text-3xl font-bold text-center mb-6">{t("welcome")}</h1>
          <Tabs defaultValue="signin" className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin" className="text-green-500 font-medium">{t("signIn")}</TabsTrigger>
              <TabsTrigger value="signup">{t("signUp")}</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <Button
                    type="button"
                    variant="ghost"
                    className={`rounded-none border-b-2 border-green-500 text-green-500`}
                  >
                    {t("password")}
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className={`rounded-none border-b-2 border-transparent`}
                  >
                    {t("otp")}
                  </Button>
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder={t("usernamePlaceholder")}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mb-3"
                  />
                </div>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder={t("passwordPlaceholder")}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-2"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {"👁️"}
                  </button>
                </div>
                <div className="text-right">
                  <a href="#" className="text-green-500 hover:underline text-sm">
                    {t("forgot")}
                  </a>
                </div>
                <div className="bg-gray-100 p-4 rounded-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{t("captcha")}</span>
                    <div className="flex items-center">
                      <img
                        src="/lovable-uploads/f1b1986c-8853-4015-8431-6cadbce24163.png"
                        alt="Captcha"
                        className="h-8 mr-2"
                      />
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        ↻
                      </Button>
                    </div>
                  </div>
                  <Input
                    type="text"
                    placeholder={t("captchaPlaceholder")}
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  {t("signInBtn")}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-green-500 text-green-500 hover:bg-green-50"
                >
                  {t("checkStatus")}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="signup">
              <div className="text-center p-4">
                <h3 className="text-lg mb-2">{t("createNew")}</h3>
                <p className="mb-4 text-gray-600">{t("details")}</p>
                <Link to="/home">
                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    {t("continue")}
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
export default Index;
