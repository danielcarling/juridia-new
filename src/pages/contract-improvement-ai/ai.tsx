import OpenAI from "openai";
import React, { useEffect, useState } from "react";

function getPrevImprovementMessages() {
    if (typeof window !== 'undefined') {
      const messages = JSON.parse(localStorage.getItem("PrevImprovementMessages") || "[]");
      return messages;
    }
    return [];
  }
  
function getImprovementApiResponse() {
    if (typeof window !== 'undefined') {
      const response = localStorage.getItem("improvementApiResponse") || "";
      return response;
    }
    return "";
  }

export async function handleApiCall(messages: any[]): Promise<string | null> {
  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages,
    });
    const Response = response.choices[0].message.content;

    return Response;
  } catch (err) {
    console.error("Error: " + err);
    throw err;
  }
}
const convertNewLines = (text: string) =>
  text.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));
export function useChatFunctions() {
    const [messages, setMessages] = useState<any>([...getPrevImprovementMessages()]);
    const [userMessage, setUserMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const apiResponse = JSON.parse(getImprovementApiResponse());
        const formattedMessage = convertNewLines(apiResponse);
        if (apiResponse) {
          const systemResponse = { role: "assistant", content: apiResponse };
          setMessages((prevMessages: any) => [...prevMessages, systemResponse]);
        }
      }, []);

    async function handleUserMessageSubmit() {
      if (userMessage.trim() !== "") {
        setIsLoading(true);
        const userMessageObj = { role: "user", content: userMessage };
        setMessages((prevMessages: any) => [...prevMessages, userMessageObj]);
        setUserMessage("");
  
        try {
          const apiResponse = await handleApiCall([...messages, userMessageObj]);
  
          if (apiResponse !== null) {
            const systemResponse = { role: "assistant", content: apiResponse };
            setMessages((prevMessages: any) => [...prevMessages, systemResponse]);
  
            setIsLoading(false);
          } else {
            // Trate o caso em que a API retorna null
            console.error("A API retornou null.");
            setIsLoading(false);
          }
        } catch (err) {
          console.error("Error: " + err);
        }
      }
    }
  
    const handleTypingComplete = () => {};
  
    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
      if (event.key === "Enter") {
        event.preventDefault();
        handleUserMessageSubmit();
      }
    }
  
    return { messages, userMessage, isLoading, setMessages, setUserMessage, setIsLoading, handleUserMessageSubmit, handleTypingComplete, handleKeyDown };
  }