import { useState } from "react";

export const useOpenCalm = () => {
  const [input, setInput] = useState("");

  return { input, setInput };
};
