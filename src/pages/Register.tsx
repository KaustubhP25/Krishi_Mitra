
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import LanguageToggle from "@/components/LanguageToggle";
import { t } from "@/lib/langHelper";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";

const RegisterSchema = z
  .object({
    firstName: z.string().min(1, { message: t("firstName") + " " + t("required") }),
    lastName: z.string().min(1, { message: t("lastName") + " " + t("required") }),
    email: z.string().email({ message: t("email") + " " + t("required") }),
    password: z.string().min(6, { message: t("password") + " " + t("required") }),
    confirmPassword: z.string().min(6, { message: t("passwordConfirm") + " " + t("required") }),
    farmerType: z.string().min(1, { message: t("farmerType") + " " + t("required") }),
    region: z.string().min(1, { message: t("region") + " " + t("required") }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: t("passwordConfirm") + " " + t("required"),
    path: ["confirmPassword"],
  });

type RegisterFormType = z.infer<typeof RegisterSchema>;

const Register = () => {
  const form = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterSchema),
  });

  function onSubmit(data: RegisterFormType) {
    toast({
      title: t("thankYouFeedback"),
      description: t("finishRegistration"),
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 relative">
      <div className="absolute top-4 right-4 z-10">
        <LanguageToggle />
      </div>
      <div className="container mx-auto max-w-3xl">
        <Card className="shadow-lg">
          <CardHeader className="bg-green-500 text-white text-center py-6">
            <h1 className="text-3xl font-bold">{t("registerHeading")}</h1>
            <p className="mt-2">{t("registerSub")}</p>
          </CardHeader>
          <CardContent className="p-6">
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium">{t("firstName")}</label>
                  <Input id="firstName" placeholder={t("firstName")} {...form.register("firstName")} />
                  {form.formState.errors.firstName && (
                    <span className="text-sm text-red-600">{form.formState.errors.firstName.message}</span>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium">{t("lastName")}</label>
                  <Input id="lastName" placeholder={t("lastName")} {...form.register("lastName")} />
                  {form.formState.errors.lastName && (
                    <span className="text-sm text-red-600">{form.formState.errors.lastName.message}</span>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">{t("email")}</label>
                <Input id="email" placeholder={t("emailPlaceholder")} type="email" {...form.register("email")} />
                {form.formState.errors.email && (
                  <span className="text-sm text-red-600">{form.formState.errors.email.message}</span>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium">{t("password")}</label>
                  <Input id="password" placeholder={t("password")} type="password" {...form.register("password")} />
                  {form.formState.errors.password && (
                    <span className="text-sm text-red-600">{form.formState.errors.password.message}</span>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium">{t("passwordConfirm")}</label>
                  <Input id="confirmPassword" placeholder={t("passwordConfirm")} type="password" {...form.register("confirmPassword")} />
                  {form.formState.errors.confirmPassword && (
                    <span className="text-sm text-red-600">{form.formState.errors.confirmPassword.message}</span>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="farmerType" className="block text-sm font-medium">{t("farmerType")}</label>
                <Select onValueChange={value => form.setValue("farmerType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t("selectFarmer")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smallholder">{t("smallholder")}</SelectItem>
                    <SelectItem value="commercial">{t("commercial")}</SelectItem>
                    <SelectItem value="cooperative">{t("cooperative")}</SelectItem>
                    <SelectItem value="other">{t("other")}</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.farmerType && (
                  <span className="text-sm text-red-600">{form.formState.errors.farmerType.message}</span>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="region" className="block text-sm font-medium">{t("region")}</label>
                <Input id="region" placeholder={t("regionPlaceholder")} {...form.register("region")} />
                {form.formState.errors.region && (
                  <span className="text-sm text-red-600">{form.formState.errors.region.message}</span>
                )}
              </div>
              <div className="flex space-x-4 pt-4">
                <Link to="/home" className="flex-1">
                  <Button variant="outline" className="w-full">
                    {t("goHome")}
                  </Button>
                </Link>
                <Button type="submit" className="flex-1 bg-green-500 hover:bg-green-600">
                  {t("finishRegistration")}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Register;
