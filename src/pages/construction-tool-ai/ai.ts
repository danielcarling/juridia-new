import OpenAI from "openai";
import React, { useEffect, useState } from "react";

export const StartMessage = [
    {
      role: "system",
      content: `Entre no personagem, você é uma inteligência artificial chamada Jurid-IA, NUNCA SAIA DO PERSONAGEM.
           Você realmente tem conhecimento real sobre a justiça e o direito no Brasil e sabe como  criar  exelentes Contratos e tirar duvidas sobre casos juridcos.
           Sua função será passada pelo usuario que que ja é advogado, como por exemplo criar contratos, então converse com o usuário, faça perguntas que ajudem você a entender
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
    
    const [userMessage, setUserMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [clientData, setClientData] = useState("");
    const [startIndex, setStartIndex] = useState(0);
    const [StartMessage, setStartMessage] = useState<any>([]);
    const [messages, setMessages] = useState<any>([...StartMessage]);
    const [interestResponse, setInterestResponse] = useState("");
    useEffect(() => {
        const savedMessages = localStorage.getItem("savedMessages");
        const ClientDataStorage: any = localStorage.getItem("clientDataStorage");
        const InterestStorage: any = localStorage.getItem("interestResponse");
        setClientData(JSON.parse(ClientDataStorage));
        setInterestResponse(JSON.parse(InterestStorage));
        const clientDataSeparate = JSON.parse(
          localStorage.getItem("clientDataSeparate") || "{}"
        );
        const createClientData = {
          role: "user",
          content: `Lembre-se, esses são os dados do cliente, 
            Nome do Cliente: ${clientDataSeparate.name}, 
            Cpf do cliente: ${clientDataSeparate.cpf},
            RG do cliente: ${clientDataSeparate.rg},
            Idade do cliente: ${clientDataSeparate.age},
            Data de Nascimento do cliente: ${clientDataSeparate.birthDate},
            Estado Civil do cliente: ${clientDataSeparate.maritalStatus},
            
            Por favor, substitua os campos [Nome do Cliente], [CPF do cliente], [RG do cliente] pelos dados reais do cliente: ${clientDataSeparate.name}, CPF ${clientDataSeparate.cpf}, RG ${clientDataSeparate.rg} e assim por diante. 
    
          `,
        };
        const message1 = {
          role: "user",
          content:
            `Apartir de agora voce esta no segundo ponto, ${interestResponse} com os dados informados,Voce esta falando com um advogado entao nao se preocupe com as correçoes, ele fará, entao recaptule os dados do cliente`,
        };
        if (savedMessages) {
          const savedMessagesArray: any = JSON.parse(savedMessages);
          setStartMessage([...savedMessagesArray, createClientData, message1]);
          setMessages([...savedMessagesArray, createClientData, message1]);
          setStartIndex(savedMessagesArray.length);
        }
      }, []);
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

              finalResponse += chunkContent;
            
          }
          console.log(finalResponse)
          return finalResponse;
        } catch (err) {
          console.error("Error: " + err);
          throw err;
        }
      }
      async function handleCreatePetition() {
          setIsLoading(true);
          const contentSend = `Agora ${interestResponse}, colocando todos dados dos clientes no contrato,escreva em Markdown`
          const userMessageObj = { role: "user", content: contentSend };
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
  
    return { messages, userMessage, isLoading,handleCreatePetition, setMessages,startIndex, setUserMessage, setIsLoading, handleUserMessageSubmit, handleTypingComplete, handleKeyDown };
  }