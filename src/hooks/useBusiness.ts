import { countrySchema } from "@/validators";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { z } from "zod";
export const useBusiness = () => {
  return useMutation({
    mutationKey: ["useBusiness"],
    mutationFn: async (data: z.infer<typeof countrySchema>) => {
      const { data: res } = await axios.post("https://api.ihemon.me", data);
      return res;
    },
    onMutate: () => {
      return toast.loading("Loading...");
    },
  });
};
