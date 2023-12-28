import { z } from "zod";

export const countrySchema = z.object({
  country_name: z.string().min(1, { message: "Name is required" }),
});
export const BusinessSchema = z.object({
  country_name: z.object({
    country_name: z.string(),
  }),
  current_year: z.number(),
  business_idea: z.string(),
  business_analysis: z.string(),
  financial_data: z.string(),
});
