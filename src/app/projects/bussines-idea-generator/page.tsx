"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBusiness } from "@/hooks/useBusiness";
import { BusinessSchema, countrySchema } from "@/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { flags } from "@nexisltd/country";
import { useIsMutating } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const BusinessIdeaPage = () => {
  const [res, setRes] = useState<undefined | z.infer<typeof BusinessSchema>>();
  const form = useForm<z.infer<typeof countrySchema>>({
    defaultValues: {
      country_name: undefined,
    },
    resolver: zodResolver(countrySchema),
  });
  const businessMutation = useBusiness();
  const isMutating = useIsMutating({ mutationKey: ["useBusiness"] });
  if (isMutating > 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="rounded bg-white p-8 shadow-md">
          <p className="mb-4 text-xl font-bold">Generating Idea...</p>
        </div>
      </main>
    );
  }
  if (res) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="rounded bg-white p-8 shadow-md">
          <p className="mb-4 text-xl font-bold">{res.country_name}</p>
          <p className="mb-2 text-lg">Idea: {res.business_idea}</p>
          <p className="mb-2 text-lg">Analysis: {res.business_analysis}</p>
          <p className="text-lg">Financial Data: {res.financial_data}</p>
        </div>
        <Button onClick={() => setRes(undefined)}>Another Search</Button>
      </main>
    );
  }
  return (
    <Form {...form}>
      <form
        className="mt-10"
        onSubmit={form.handleSubmit((value) => {
          businessMutation.mutate(value, {
            onSuccess: (data) => {
              setRes(data);
              toast.success("Success");
            },
            onError: () => {
              toast.error("Retry again after few seconds");
            },
          });
        })}
      >
        <FormField
          control={form.control}
          name="country_name"
          render={({ field }) => (
            <FormItem className="w-full ">
              <FormLabel>Country</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="h-[50vh] overflow-auto">
                  {flags().map((f, index) => {
                    return (
                      <SelectItem key={index} value={f.name}>
                        <div className="flex">
                          <Image
                            src={f.flag}
                            alt={f.name}
                            height={200}
                            width={200}
                            className="h-5 w-8 object-cover"
                          />{" "}
                          <span> {f.name}</span>
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default BusinessIdeaPage;
