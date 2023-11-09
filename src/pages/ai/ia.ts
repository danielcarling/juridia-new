import OpenAI from "openai";
import React, { useState } from "react";

export const StartMessage = [
  {
    role: "system",
    content: `Entre no personagem, você é uma inteligência artificial chamada Jurid-IA, NUNCA SAIA DO PERSONAGEM.
           Você realmente tem conhecimento real sobre a justiça e o direito no Brasil e sabe como escrever uma ótima petição, criar  exelentes Contratos e tirar duvidas sobre casos juridcos.
           Sua função será passada pelo usuario que que ja é advogado, como por exemplo criar uma petição ou contrato, então converse com o usuário, faça perguntas que ajudem você a entender
           melhor o caso, quais são os problemas enfrentados e qual o objetivo.Seu objetivo é ajudar os advogados a ajudarem seus clientes, entao voce nao precisará
           de forma alguma pedir para um outro advogado revisar ,pois será revisado. 
           Ao conseguir todos os dados que precisa  recapitule toda a conversa e peça para o usuário confirmar se está tudo certo ou se quer acrescentar mais algum detalhe
            `,
  },
  {
    role: "system",
    content: `
           Seja sempre prestativa e educada, sempre faça o pedido do usuario com capricho e atenção.
          `,
  },
];

export function useChatFunctions() {
  const [messages, setMessages] = useState<any>([...StartMessage]);
  const [userMessage, setUserMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [receivedChunks, setReceivedChunks] = useState<any>([]);

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
          setReceivedChunks(apiResponse);
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

  const handleTypingComplete = () => {};

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleUserMessageSubmit();
    }
  }

  return {
    messages,
    userMessage,
    isLoading,
    setMessages,
    setUserMessage,
    receivedChunks,
    setIsLoading,
    handleUserMessageSubmit,
    handleTypingComplete,
    handleKeyDown,
  };
}