import { useEffect, useState } from "react";
import axios from "axios";

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

export const useOpenCalm = () => {
  const initialChat = ["こんにちは", "こんにちは！何かお手伝いできることがありますか？"];
  const [input, setInput] = useState("");
  const [chat, setChat] = useState<string[]>(initialChat);

  useEffect(() => {
    const localChat = getLocalStrage("chat");
    if (localChat) setChat(localChat);
    if (localChat && localChat.length === 0) {
      setChat(initialChat);
    }
  }, []);

  const addChat = async (message: string) => {
    if (!chat || chat.length == 0) {
      setChat([message, "リクエスト中..."]);
    } else {
      setChat([...chat, message, "リクエスト中..."]);
    }
    const data = await requestOpenCalm(message, chat);
    setChat([...chat, message, data]);
    setLocalStrage("chat", [...chat, message, data]);
  };

  const resetChat = () => {
    setChat([]);
    setLocalStrage("chat", []);
  };

  const requestOpenCalm = async (message: string, chat: string[]) => {
    try {
      const response = await axios.post(
        "https://opencalm.ngrok.app",
        {
          instruction: message,
          context: chat.toString(),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { input, chat, setInput, addChat, resetChat };
};
