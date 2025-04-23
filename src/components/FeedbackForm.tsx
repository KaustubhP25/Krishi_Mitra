
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { t } from "@/lib/langHelper";

const FeedbackSchema = z.object({
  name: z.string().min(1, { message: t("name") + " " + t("required") }),
  message: z.string().min(1, { message: t("message") + " " + t("required") }),
});

type FeedbackFormInputs = z.infer<typeof FeedbackSchema>;

const FeedbackForm: React.FC = () => {
  const form = useForm<FeedbackFormInputs>({
    resolver: zodResolver(FeedbackSchema),
  });

  function onSubmit(data: FeedbackFormInputs) {
    toast({
      title: t("thankYouFeedback"),
      description: t("feedbackReceived"),
    });
    form.reset();
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-6">
      <div>
        <label htmlFor="feedback-name" className="block font-medium">{t("name")}</label>
        <Input
          id="feedback-name"
          placeholder={t("name")}
          {...form.register("name")}
        />
        {form.formState.errors.name && (
          <span className="text-sm text-red-600">{form.formState.errors.name.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="feedback-message" className="block font-medium">{t("message")}</label>
        <Textarea
          id="feedback-message"
          placeholder={t("message")}
          {...form.register("message")}
        />
        {form.formState.errors.message && (
          <span className="text-sm text-red-600">{form.formState.errors.message.message}</span>
        )}
      </div>
      <div className="flex justify-end">
        <Button type="submit">{t("submit")}</Button>
      </div>
    </form>
  );
};

export default FeedbackForm;
