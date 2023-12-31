import { chat } from "@/validators";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { z } from "zod";
export const useChat = (
  setChats: React.Dispatch<
    React.SetStateAction<
      {
        name: "me" | "bot";
        text?: string | undefined;
      }[]
    >
  >,
) => {
  return useMutation({
    mutationKey: ["useChat"],
    mutationFn: async (data: z.infer<typeof chat>) => {
      const { data: res } = await axios.post(
        "https://api.ihemon.me/chat/",
        data,
      );
      return res as z.infer<typeof chat>;
    },
    onMutate: (val) => {
      setChats((prev) => [...prev, { name: "me", text: val.text }]);
      return;
    },
  });
};
