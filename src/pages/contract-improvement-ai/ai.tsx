import OpenAI from "openai";
import React, { useEffect, useState } from "react";

function getPrevImprovementMessages() {
    if (typeof window !== 'undefined') {
      const areaResponse = localStorage.getItem("areaResponse");
      const aboutContractText = localStorage.getItem("aboutContractText");
      const fullText = localStorage.getItem("fullText");

      const messages = [
        {
          role: "system",
          content: `Entre no personagem, você é uma inteligência artificial chamada Jurid-IA, NUNCA SAIA DO PERSONAGEM.
             Você realmente tem conhecimento real sobre a justiça e o direito no Brasil e sabe criar  exelentes Contratos e tirar duvidas sobre casos juridcos.
             Sua função é revisar, melhorar e dar insights sobre contratos.`,
        },
        {
          role: "system",
          content: `
             O usuario vai te mandar um contrato e voce analiza ele,Reescreva todo o contrato melhore os pontos que nao achar bom, no final pontue pontos negativos e positivos para que o usuario entenda onde ele errou e acertou.
             o usuario ja é um advogado, ele ira revisar o contrato, entao nao se preocupe em falar isso para ele.
            `,
        },
        {
          role: "user",
          content: `A area do direito  que preciso ajuda é: ${areaResponse}`,
        },
        {
          role: "system",
          content: `meu contrato é sobre  :${aboutContractText} `,
        },
        {
          role: "user",
          content: `Esse é meu contrato, melhore ele: ${fullText} ,escreva em markdown`,
        },
      ];
      return messages;
    }
    return [];
  }

export function useChatFunctions() {
    const [messages, setMessages] = useState<any>([...getPrevImprovementMessages()]);
    const [userMessage, setUserMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const convertNewLines = (text: string) =>
  text.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));

    async function handleApiCall(messageList: any[]): Promise<string | null> {
      const openai = new OpenAI({
        apiKey: "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",
        dangerouslyAllowBrowser: true,
      });
  
      try {
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo-1106",
          messages: messageList,
          stream: true,
        });
        let finalResponse = ""; // Inicialize uma string vazia para armazenar a resposta final
  
        for await (const chunk of response) {
          const chunkContent = chunk.choices[0].delta.content;
            // Verifique se o chunkContent não é undefined
            const systemResponse = { role: "assistant", content: finalResponse };
  
            setMessages((prevMessages: any) => {
              const currentMessage = prevMessages[prevMessages.length - 1];
  
              if (currentMessage.role === "assistant") {
                prevMessages[prevMessages.length - 1] = systemResponse;
                return [...prevMessages];
              } else {
                return [...prevMessages, systemResponse];
              }
            });
  
            // console.log(messages.length);
            // Adicione o chunk ao finalResponse
            finalResponse += chunkContent;
          
        }
        console.log(finalResponse)
        return finalResponse;
      } catch (err) {
        console.error("Error: " + err);
        throw err;
      }
    }
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
            // setMessages((prevMessages: any) => [...prevMessages, systemResponse]);
  
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
    async function handleCreatePetition() {
      setIsLoading(true);
      setUserMessage("");

      try {
        const apiResponse = await handleApiCall([...messages]);

        if (apiResponse !== null) {
          const systemResponse = { role: "assistant", content: apiResponse };
          // setMessages((prevMessages: any) => [...prevMessages, systemResponse]);

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
  
    const handleTypingComplete = () => {};
  
    function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
      if (event.key === "Enter") {
        event.preventDefault();
        handleUserMessageSubmit();
      }
    }
  
    return { messages, userMessage, isLoading, setMessages,handleCreatePetition, setUserMessage, setIsLoading, handleUserMessageSubmit, handleTypingComplete, handleKeyDown };
  }