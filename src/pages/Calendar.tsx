
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import LanguageToggle from "@/components/LanguageToggle";
import { t } from "@/lib/langHelper";

const Calendar = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 relative">
      <div className="absolute top-4 right-4 z-10">
        <LanguageToggle />
      </div>
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-lg">
          <CardHeader className="bg-green-500 text-white text-center py-6">
            <h1 className="text-3xl font-bold">{t("sowingCalendar")}</h1>
            <p className="mt-2">{t("bestPractices")}</p>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs defaultValue="spring">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="spring">{t("spring")}</TabsTrigger>
                <TabsTrigger value="summer">{t("summer")}</TabsTrigger>
                <TabsTrigger value="autumn">{t("autumn")}</TabsTrigger>
                <TabsTrigger value="winter">{t("winter")}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="spring" className="space-y-4">
                <h3 className="text-xl font-semibold">{t("calendarSpringGuide")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium text-lg text-green-600">{t("calendarSpringVeg")}</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>{t("calendarSpringVeg1")}</li>
                      <li>{t("calendarSpringVeg2")}</li>
                      <li>{t("calendarSpringVeg3")}</li>
                      <li>{t("calendarSpringVeg4")}</li>
                      <li>{t("calendarSpringVeg5")}</li>
                    </ul>
                  </div>
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium text-lg text-green-600">{t("calendarSpringCrops")}</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>{t("calendarSpringGrain1")}</li>
                      <li>{t("calendarSpringGrain2")}</li>
                      <li>{t("calendarSpringGrain3")}</li>
                      <li>{t("calendarSpringGrain4")}</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-md p-4 mt-4">
                  <h4 className="font-medium text-green-600">{t("calendarSpringTipsTitle")}</h4>
                  <ul className="list-disc pl-5 mt-2">
                    <li>{t("calendarSpringTip1")}</li>
                    <li>{t("calendarSpringTip2")}</li>
                    <li>{t("calendarSpringTip3")}</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="summer" className="space-y-4">
                <h3 className="text-xl font-semibold">{t("calendarSummerGuide")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium text-lg text-green-600">{t("calendarSpringVeg")}</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Lady Finger (Okra) - June, July</li>
                      <li>Bitter Gourd - June</li>
                      <li>Bottle Gourd - June, July</li>
                      <li>Brinjal (Eggplant) - June, July</li>
                      <li>Green Chillies - Throughout Summer</li>
                    </ul>
                  </div>
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium text-lg text-green-600">{t("calendarSpringCrops")}</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Paddy (Rice) - June</li>
                      <li>Cotton - Early June</li>
                      <li>Maize - June</li>
                      <li>Groundnut - June, July</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-md p-4 mt-4">
                  <h4 className="font-medium text-green-600">Summer Sowing Tips</h4>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Ensure fields are irrigated before sowing summer crops.</li>
                    <li>Mulch to conserve soil moisture and regulate soil temperature.</li>
                    <li>Choose short duration, heat-tolerant crop varieties.</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="autumn" className="space-y-4">
                <h3 className="text-xl font-semibold">{t("calendarAutumnGuide")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium text-lg text-green-600">{t("calendarSpringVeg")}</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Cauliflower - September</li>
                      <li>Spinach - September, October</li>
                      <li>Radish - September, October</li>
                      <li>Peas - October, November</li>
                    </ul>
                  </div>
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium text-lg text-green-600">{t("calendarSpringCrops")}</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Wheat - October, November</li>
                      <li>Mustard - October</li>
                      <li>Barley - November</li>
                      <li>Lentil - November</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-md p-4 mt-4">
                  <h4 className="font-medium text-green-600">Autumn Sowing Tips</h4>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Sow before onset of winter and use early maturing varieties.</li>
                    <li>Fertilize soil after the rainy season for healthy crop establishment.</li>
                    <li>Watch for aphids and early frost.</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="winter" className="space-y-4">
                <h3 className="text-xl font-semibold">{t("calendarWinterGuide")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium text-lg text-green-600">{t("calendarSpringVeg")}</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Carrot - December, January</li>
                      <li>Turnip - December</li>
                      <li>Cabbage - December, January</li>
                      <li>Onion - December</li>
                    </ul>
                  </div>
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium text-lg text-green-600">{t("calendarSpringCrops")}</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Wheat - December, January</li>
                      <li>Gram (Chana) - December</li>
                      <li>Barley - January</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-md p-4 mt-4">
                  <h4 className="font-medium text-green-600">Winter Sowing Tips</h4>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Protect crops from frost by mulching or row covers.</li>
                    <li>Irrigate during dry winter spells but avoid waterlogging.</li>
                    <li>Ensure timely sowing to avoid yield loss.</li>
                  </ul>
                </div>
              </TabsContent>
              
              <div className="mt-8 text-center">
                <Link to="/home">
                  <Button variant="outline" className="mr-4">
                    {t("goHome")}
                  </Button>
                </Link>
                <Button className="bg-green-500 hover:bg-green-600">
                  {t("downloadPDF")}
                </Button>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Calendar;
