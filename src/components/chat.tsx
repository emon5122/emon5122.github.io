"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "@/hooks/useChat";
import { useEffect, useRef, useState } from "react";
import { LuSend } from "react-icons/lu";
import { PiChatCircleDotsFill } from "react-icons/pi";

const Chat = () => {
  const [disabled, setDisabled] = useState(false);
  const [chats, setChats] = useState<
    {
      name: "me" | "bot";
      text?: string;
    }[]
  >([]);
  const [trigger, setTrigger] = useState(false);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const chatMutation = useChat(setChats);

  useEffect(() => {
    if (trigger) {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
      }
      setTrigger((prev) => !prev);
    } else {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
      }
    }
  }, [trigger]);
  const handleMessageSend = () => {
    if (textRef.current?.value) {
      chatMutation.mutate(
        { text: textRef.current?.value },
        {
          onSuccess: (data) => {
            setDisabled(false);
            textRef.current!.value = "";
            setChats((prev) => {
              return [...prev, { name: "bot", text: data?.text }];
            });
          },
        },
      );
      setDisabled(true);
    }
  };
  return (
    <div className="fixed bottom-4 right-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className="rounded-full shadow-lg"
            onClick={() => {
              setTrigger(true);
            }}
          >
            <PiChatCircleDotsFill size={"20px"} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="h-[75vh] w-[21rem] origin-bottom-right transform overflow-hidden rounded-xl p-0 shadow-lg transition-transform duration-300 ease-in-out">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b p-4">
              <h3 className="text-lg font-semibold text-primary">
                Chat with Emon Bot
              </h3>
            </div>
            <div
              className="w-80 flex-grow overflow-y-auto overflow-x-hidden pb-1"
              ref={chatContainerRef}
            >
              <div className="flex flex-col gap-2">
                {chats?.map((g, index) => {
                  if (g.name === "me") {
                    return (
                      <div
                        key={index}
                        className="flex w-full justify-end p-2 text-xs
                                                  "
                      >
                        {g.text}
                      </div>
                    );
                  }
                  return (
                    <div
                      key={index}
                      className="flex w-full justify-start p-2 text-xs"
                    >
                      {g.text}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="border-t">
              <div className="w-full rounded border p-2 shadow-xl">
                <Textarea
                  className="w-full"
                  placeholder="message..."
                  ref={textRef}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleMessageSend();
                    }
                  }}
                />

                <div className="mt-1 flex justify-between">
                  <Button
                    disabled={disabled}
                    type="button"
                    onClick={handleMessageSend}
                    variant={"outline"}
                  >
                    <LuSend />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default Chat;
