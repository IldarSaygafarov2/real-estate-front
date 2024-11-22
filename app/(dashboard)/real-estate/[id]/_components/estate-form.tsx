"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormLabel,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import type { Image, RealEstate } from "../../_types";

import { useRealEstate } from "../../_hooks/use-real-estate";

import { ImageUploader } from "./image-uploader";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Строка должна содержать хотя бы 1 символ." }),
  description: z.string().trim().nullable(),
  notes: z.string().trim().nullable(),
  price: z
    .string()
    .min(1, { message: "Строка должна содержать хотя бы 1 символ." }),
  ownerPhone: z.string().trim().nullable(),
  managerPhone: z.string().trim().nullable(),
  realtorPhone: z.string().trim().nullable(),
  balconyId: z
    .number()
    .min(1, { message: "В этом поле должно быть выбрано значение." }),
  conditionId: z
    .number()
    .min(1, { message: "В этом поле должно быть выбрано значение." }),
  districtId: z
    .number()
    .min(1, { message: "В этом поле должно быть выбрано значение." }),
  floorId: z
    .number()
    .min(1, { message: "В этом поле должно быть выбрано значение." }),
  roomId: z
    .number()
    .min(1, { message: "В этом поле должно быть выбрано значение." }),
  stroreyId: z
    .number()
    .min(1, { message: "В этом поле должно быть выбрано значение." }),
  typeId: z
    .number()
    .min(1, { message: "В этом поле должно быть выбрано значение." }),
  images: z
    .object({ url: z.string() })
    .array()
    .refine((value) => value.some((item) => item), {
      message: "В этом поле должно быть выбрано хотя бы одно значение.",
    }),
});

interface EstateFormProps {
  initialValues:
  | (RealEstate & {
    images: Image[];
  })
  | null;
}

export function EstateForm({ initialValues }: EstateFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues ?? {
      name: "",
      description: null,
      notes: null,
      price: "",
      ownerPhone: null,
      managerPhone: null,
      realtorPhone: null,
      balconyId: 0,
      conditionId: 0,
      districtId: 0,
      floorId: 0,
      roomId: 0,
      stroreyId: 0,
      typeId: 0,
      images: [],
    },
  });

  const { updateEstate, addEstate } = useRealEstate();

  async function onSubmit(values: z.infer<typeof formSchema>) {


    try {
      setIsLoading(true);

      if (initialValues?.id) {
        // await updateEstate(initialValues.id, values);
      } else {
        // await addEstate(values);
      }

      router.replace("/real-estate");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    form.reset(
      initialValues ?? {
        name: "",
        description: null,
        notes: null,
        price: "",
        ownerPhone: null,
        managerPhone: null,
        realtorPhone: null,
        balconyId: 0,
        conditionId: 0,
        districtId: 0,
        floorId: 0,
        roomId: 0,
        stroreyId: 0,
        typeId: 0,
        images: [],
      },
    );
  }, [initialValues, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Название</FormLabel>
                <FormControl>
                  <Input disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Цена</FormLabel>
                <FormControl>
                  <Input disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ownerPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Телефон владельца</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    value={field.value ?? ""}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="managerPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Телефон руководителя</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    value={field.value ?? ""}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="realtorPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Телефон риелтора</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    value={field.value ?? ""}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Описание</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isLoading}
                    value={field.value ?? ""}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Заметки</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isLoading}
                    value={field.value ?? ""}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FormField
            control={form.control}
            name="balconyId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Балкон</FormLabel>
                <Select
                  disabled={isLoading}
                  defaultValue={`${field.value}`}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите балкон" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Балкон</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="conditionId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Состояние</FormLabel>
                <Select
                  disabled={isLoading}
                  defaultValue={`${field.value}`}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите состояние" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Состояние</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="districtId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Район</FormLabel>
                <Select
                  disabled={isLoading}
                  defaultValue={`${field.value}`}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите район" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Район</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="floorId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Этаж</FormLabel>
                <Select
                  disabled={isLoading}
                  defaultValue={`${field.value}`}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите этаж" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Этаж</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="roomId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Комнатность</FormLabel>
                <Select
                  disabled={isLoading}
                  defaultValue={`${field.value}`}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите комнатность" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Комнатность</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="stroreyId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Этажность</FormLabel>
                <Select
                  disabled={isLoading}
                  defaultValue={`${field.value}`}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите этажность" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Этажность</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="typeId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Тип</FormLabel>
                <Select
                  disabled={isLoading}
                  defaultValue={`${field.value}`}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Тип</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Изображения</FormLabel>
              <FormControl>
                <ImageUploader
                  disabled={isLoading}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end gap-x-2">
          <Button
            disabled={isLoading}
            onClick={() => router.replace("/real-estate")}
            type="button"
            variant="outline"
          >
            Отмена
          </Button>
          <Button disabled={isLoading} type="submit">
            {initialValues
              ? isLoading
                ? "Сохранение..."
                : "Сохранить"
              : isLoading
                ? "Создание..."
                : "Создать"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
