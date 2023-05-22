import { useEffect, useState } from "react";

const getLocalStrage = (key: string) => {
  if (typeof window === "undefined") return;
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.log(error);
  }
};

const setLocalStrage = (key: string, value: any) => {
  if (typeof window === "undefined") console.error("window undefined");
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

const formatChat = (chat: string[]) => {
  return chat.map((message, index) => (index % 2 === 0 ? "Q:" : "A:") + message).join("");
};

const parseChat = (formattedChat: string) => {
  const splitChat = formattedChat.split(/(?=Q:|A:)/);
  return splitChat.map((message) => message.slice(2));
};

export const useOpenCalm = () => {
  const initialChat = ["こんにちは", "こんにちは！何かお手伝いできることがありますか？"];
  const [input, setInput] = useState("");
  const [chat, setChat] = useState<string[]>(initialChat);

  useEffect(() => {
    const localChat = getLocalStrage("chat");
    if (localChat) setChat(localChat);
    if (localChat.length === 0) {
      setChat(initialChat);
    }
  }, []);

  const addChat = (message: string) => {
    setChat([...chat, message]);
    setLocalStrage("chat", [...chat, message]);
  };

  const resetChat = () => {
    setChat([]);
    setLocalStrage("chat", []);
  };

  return { input, chat, setInput, addChat, resetChat };
};
