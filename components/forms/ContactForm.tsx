"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { sendContactEmail } from "@/app/_actions";
import SuccessMessage from "./SuccessMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { clashDisplayMedium, clashDisplayRegular } from "@/utils/fonts";
import { Textarea } from "../ui/textarea";
import { phoneRegex } from "@/lib/utils";

import CalendlyButton from "../Calendar/CalendlyButton";

export const FormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "El nombre debe de ser de al menos 2 carácteres.",
    })
    .max(160, {
      message: "El nombre no puede ser más de 160 carácteres.",
    }),
  email: z.string().email({ message: "Correo electrónico Inválido" }),
  phoneNumber: z.string().regex(phoneRegex, "Número de Teléfono Inválido"),
  dateEvent: z
    .date()
    .refine(
      (date) => {
        const today = new Date();
        return date > today;
      },
      { message: "La fecha del evento debe ser mayor a la fecha actual" }
    )
    .transform((date) => date.toISOString()),

  venue: z.string().min(1, { message: "Venue inválido" }),
  eventDescription: z.string().min(1, { message: "Descripción inválida" }),
});

export function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModalMessage, setShowModalMessage] = useState<boolean>(false);

  const [startDate, setStartDate] = useState<undefined | Date>();

  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      dateEvent: "",
      venue: "",
      eventDescription: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setIsLoading(true);
      const response = await sendContactEmail(data);
      if (response.success) {
        setShowModalMessage(true);
        setIsLoading(false);
        form.reset();
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
    <div id="contacto" className="order-7 flex flex-col items-center gap-2">
      <h3 className={`${clashDisplayMedium.className} text-3xl`}>CONTACTO</h3>
      {showModalMessage && <SuccessMessage />}
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
                      placeholder="NOMBRE"
                      className="resize-none rounded-3xl bg-[#F4F4F4] p-5 text-base focus-visible:ring-orange-400 lg:p-6 lg:text-lg"
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
                      placeholder="CORREO"
                      className="resize-none rounded-3xl bg-[#F4F4F4] p-5 text-base focus-visible:ring-orange-400 lg:p-6 lg:text-lg"
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
                      placeholder="TELÉFONO DE CONTACTO"
                      className="resize-none rounded-3xl bg-[#F4F4F4] p-5 text-base focus-visible:ring-orange-400 lg:p-6 lg:text-lg"
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
              name="dateEvent"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="ml-2 text-muted-foreground">
                    Fecha del Evento
                  </FormLabel> */}
                  <FormControl className="flex h-10 w-full resize-none rounded-3xl border border-input bg-[#F4F4F4] p-5 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 lg:p-6 lg:text-lg">
                    <DatePicker
                      onChange={(date) => {
                        setStartDate(date as Date);
                        field.onChange(date);
                      }}
                      selected={startDate}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="FECHA DEL EVENTO"
                      className="w-full resize-none rounded-3xl bg-[#F4F4F4] p-5 text-base text-muted-foreground focus-visible:ring-orange-400 lg:p-6 lg:text-lg"
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="venue"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="flex h-10 w-full resize-none rounded-3xl border border-input bg-[#F4F4F4] p-5 text-base text-muted-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 lg:p-6 lg:text-lg">
                        <SelectValue placeholder="VENUE PREFERIDO" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem
                          className={`${clashDisplayRegular.className} text-lg`}
                          value="La Galeria"
                        >
                          La Galeria
                        </SelectItem>
                        <SelectItem
                          className={`${clashDisplayRegular.className} text-lg`}
                          value="Macarella"
                        >
                          Macarella
                        </SelectItem>
                        <SelectItem
                          className={`${clashDisplayRegular.className} text-lg`}
                          value="Terraza Pepita"
                        >
                          Terraza Pepita
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="eventDescription"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="items-center justify-between focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 [&>span]:line-clamp-1 flex h-10 w-full resize-none rounded-3xl border border-input bg-[#F4F4F4] p-5 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 lg:p-6 lg:text-lg"
                      placeholder="DESCRIBE TU EVENTO"
                      {...field}
                    />
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
            <div className="flex w-full flex-col gap-2">
              <Button
                type="submit"
                size={"contact"}
                variant={"contact"}
                disabled={isLoading}
              >
                Enviar
              </Button>
              <CalendlyButton url="https://calendly.com/amphitryonterrazas/" />
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}
