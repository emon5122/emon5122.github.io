import { BusinessSchema, countrySchema } from "@/validators";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { z } from "zod";
export const useBusiness = () => {
  return useMutation({
    mutationKey: ["useBusiness"],
    mutationFn: async (data: z.infer<typeof countrySchema>) => {
      const { data: res } = await axios.post(
        "https://api.ihemon.me/business-idea-generator/",
        data,
      );
      return BusinessSchema.parse(res);
    },
  });
};
