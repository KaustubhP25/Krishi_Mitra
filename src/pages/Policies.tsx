
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import LanguageToggle from "@/components/LanguageToggle";
import { t } from "@/lib/langHelper";

const Policies = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 relative">
      <div className="absolute top-4 right-4 z-10">
        <LanguageToggle />
      </div>
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-lg">
          <CardHeader className="bg-green-500 text-white text-center py-6">
            <h1 className="text-3xl font-bold">{t("agriPolicies")}</h1>
            <p className="mt-2">{t("programInfo")}</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-6">
              <p className="text-gray-600">
                {t("policiesIntro")}
              </p>
            </div>
            
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">{t("subsidyPrograms")}</AccordionTrigger>
                <AccordionContent className="text-gray-600 space-y-4">
                  <div>
                    <h4 className="font-medium text-green-600">{t("seedSubsidy")}</h4>
                    <p>{t("seedSubsidyDesc")}</p>
                    <p className="text-sm mt-1">{t("seedSubsidyEligibility")}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-600">{t("fertilizerAid")}</h4>
                    <p>{t("fertilizerAidDesc")}</p>
                    <p className="text-sm mt-1">{t("fertilizerAidTime")}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">{t("landPolicy")}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>{t("landPolicyDesc")}</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">{t("waterMgmt")}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>{t("waterMgmtDesc")}</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg">{t("marketAccess")}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>{t("marketAccessDesc")}</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg">{t("disasterRelief")}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>{t("disasterReliefDesc")}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="text-center">
              <Link to="/home">
                <Button variant="outline" className="mr-4">
                  {t("goHome")}
                </Button>
              </Link>
              <Button className="bg-green-500 hover:bg-green-600">
                {t("downloadPolicy")}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Policies;
