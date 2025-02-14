"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Loader } from "lucide-react";
import Image from "next/image";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/actions/email.action";
import formSchema from "@/lib/validations";

import terminal from "../../../public/assets/terminal.png";

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      const result = await sendEmail(data);

      if (result.success) {
        toast({
          title: "Sukces",
          description: "Wiadomość została wysłana pomyślnie",
        });
        form.reset();
      } else {
        toast({
          title: "Błąd",
          description: "Wiadomość nie została wysłana",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <section id="contact" className="c-space py-20">
      <div
        className={
          "relative flex min-h-screen flex-col items-center justify-center"
        }
      >
        <Image
          src={terminal}
          alt="terminal background"
          className="absolute inset-0 h-full"
        />
        <div className="contact-container">
          <h3 className="head-text">Let&apos;s talk</h3>
          <p className="mt-3 text-lg text-card-foreground">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-12 flex flex-col gap-7"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="field-label">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        {...field}
                        className="field-input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="field-label">E-mail</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className="field-input"
                        placeholder="johndoe@gmail.com"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="field-label">Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="field-input"
                        placeholder="Hi, I'm interested in..."
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending} className="field-btn">
                {isPending ? "Sending..." : "Send message"}
                {isPending ? (
                  <Loader className="size-5 animate-spin" />
                ) : (
                  <ArrowUpRight className="size-5" />
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
