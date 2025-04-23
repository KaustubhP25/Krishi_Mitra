
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import LanguageToggle from "@/components/LanguageToggle";
import { t } from "@/lib/langHelper";

const RegisterPoor = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 relative">
      <div className="absolute top-4 right-4 z-10">
        <LanguageToggle />
      </div>
      <div className="container mx-auto max-w-3xl">
        <Card className="shadow-lg">
          <CardHeader className="bg-green-500 text-white text-center py-6">
            <h1 className="text-3xl font-bold">{t("poorHeading")}</h1>
            <p className="mt-2">{t("poorSub")}</p>
          </CardHeader>
          <CardContent className="p-6">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium">{t("firstName")}</label>
                  <Input id="firstName" placeholder={t("firstName")} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium">{t("lastName")}</label>
                  <Input id="lastName" placeholder={t("lastName")} />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="idNumber" className="block text-sm font-medium">{t("idNumber")}</label>
                <Input id="idNumber" placeholder={t("idPlaceholder")} />
              </div>
              <div className="space-y-2">
                <label htmlFor="address" className="block text-sm font-medium">{t("address")}</label>
                <Input id="address" placeholder={t("addressPlaceholder")} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">{t("phone")}</label>
                  <Input id="phone" placeholder={t("phonePlaceholder")} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="income" className="block text-sm font-medium">{t("income")}</label>
                  <Input id="income" placeholder={t("incomePlaceholder")} type="number" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="familySize" className="block text-sm font-medium">{t("familySize")}</label>
                <Input id="familySize" placeholder={t("familySizePlaceholder")} type="number" />
              </div>
              <div className="flex space-x-4 pt-4">
                <Link to="/home" className="flex-1">
                  <Button variant="outline" className="w-full">
                    {t("goHome")}
                  </Button>
                </Link>
                <Button className="flex-1 bg-green-500 hover:bg-green-600">
                  {t("submitApplication")}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default RegisterPoor;
