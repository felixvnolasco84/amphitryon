"use client";

import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import Image from "next/image";
import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { sendContactEmail } from "@/app/_actions";
import SuccessMessage from "./SuccessMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { clashDisplayMedium } from "@/utils/fonts";

const FormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "El nombre debe de ser de al menos 2 carácteres.",
    })
    .max(160, {
      message: "El nombre no puede ser más de 160 carácteres.",
    }),
  email: z.string().email({ message: "Correo electrónico Inválido" }),
  phoneNumber: z.string().min(10, { message: "Número de teléfono inválido" }),
});

export function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModalMessage, setShowModalMessage] = useState<boolean>(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setIsLoading(true);
      await sendContactEmail(data);
      const response = await fetch("/api/customers", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setShowModalMessage(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "OH!",
        description: "No se ha enviado correctamente el formulario",
      });
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className={`${clashDisplayMedium.className} text-3xl`}>CONTACTO</h3>
      {showModalMessage && <SuccessMessage type="contact" />}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`flex w-full max-w-xl flex-col gap-5 lg:items-center`}
        >
          <div className="flex w-full flex-col gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormControl>
                    <Input
                      placeholder="Nombre"
                      className="resize-none rounded-3xl bg-[#F4F4F4] p-6 text-base focus-visible:ring-orange-400 lg:text-lg"
                      disabled={isLoading}
                      {...field}
                    ></Input>
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
                  <FormControl>
                    <Input
                      placeholder="Correo"
                      className="resize-none rounded-3xl bg-[#F4F4F4] p-6 text-base focus-visible:ring-orange-400 lg:text-lg"
                      disabled={isLoading}
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Número de teléfono"
                      className="resize-none rounded-3xl bg-[#F4F4F4] p-6 text-base focus-visible:ring-orange-400 lg:text-lg"
                      disabled={isLoading}
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {isLoading ? (
            <>
              <Button
                type="submit"
                className="h-fit w-fit bg-black"
                disabled={isLoading}
              >
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Por favor, espere
              </Button>
            </>
          ) : (
            <Button
              type="submit"
              size={"contact"}
              variant={"contact"}
              disabled={isLoading}
            >
              Enviar
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
}
