import { useState } from "react";

export const useOpenCalm = () => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState<string[]>([]);

  const addChat = (message: string) => {
    setChat([...chat, message]);
  };

  return { input, chat, setInput, addChat };
};
