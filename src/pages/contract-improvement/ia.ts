// import { useRouter } from "next/router";
// import OpenAI from "openai";
// import { useEffect, useState } from "react";

// const [aboutContractText, setAboutContractText] = useState("");
// const router = useRouter()
// function getStartMessage() {
//   return [
//     {
//       role: "system",
//       content: `Entre no personagem, você é uma inteligência artificial chamada Jurid-IA, NUNCA SAIA DO PERSONAGEM.
//    Você realmente tem conhecimento real sobre a justiça e o direito no Brasil e sabe como escrever uma ótima petição, criar  exelentes Contratos e tirar duvidas sobre casos juridcos.
//    Sua função é revisar, melhorar e dar insights sobre contratos.`,
//     },
//     {
//       role: "system",
//       content: `
//    O usuario vai te mandar um contrato e voce analiza ele, melhore os pontos que nao achar bom, pontue pontos negativos e positivos para que o usuario entenda onde ele errou e acertou.
//   `,
//     },
//     {
//       role: "user",
//       content: `
//    A area do direito  que preciso ajuda é: ${areaResponse}`,
//     },
//     {
//       role: "system",
//       content: `
//    meu contrato é sobre  :${aboutContractText} `,
//     },

//     {
//       role: "user",
//       content: `
//    Esse é meu contrato, melhore ele:
//    ${fullText}
//   `,
//     },
//   ];
// }
// const [messages, setMessages] = useState<any>([]);
// async function handleSomething() {
//   const updatedMessages: any = getStartMessage();
//   setMessages(updatedMessages);
// }
// export async function handleApiCall() {
//   handleSomething();
//   if (!isLoading) {
//     setIsLoading(true);

//     // Configuração da API OpenAI

//     const openai = new OpenAI({
//       apiKey: "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",
//       dangerouslyAllowBrowser: true,
//     });

//     try {
//       const response = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo-16k",
//         messages: [
//           {
//             role: "system",
//             content: `Entre no personagem, você é uma inteligência artificial chamada Jurid-IA, NUNCA SAIA DO PERSONAGEM.
//        Você realmente tem conhecimento real sobre a justiça e o direito no Brasil e sabe criar  exelentes Contratos e tirar duvidas sobre casos juridcos.
//        Sua função é revisar, melhorar e dar insights sobre contratos.`,
//           },
//           {
//             role: "system",
//             content: `
//        O usuario vai te mandar um contrato e voce analiza ele,Reescreva todo o contrato melhore os pontos que nao achar bom, no final pontue pontos negativos e positivos para que o usuario entenda onde ele errou e acertou.
//        o usuario ja é um advogado, ele ira revisar o contrato, entao nao se preocupe em falar isso para ele.
//       `,
//           },
//           {
//             role: "user",
//             content: `
//        A area do direito  que preciso ajuda é: ${areaResponse}`,
//           },
//           {
//             role: "system",
//             content: `
//        meu contrato é sobre  :${aboutContractText} `,
//           },

//           {
//             role: "user",
//             content: `
//        Esse é meu contrato, melhore ele:
//        ${fullText}
//       `,
//           },
//         ],
//       });

//       console.log("API usage:", response.usage);
//       const Response = response.choices[0].message.content;
//       const systemResponse = { role: "assistant", content: Response };

//       // Atualize o estado de mensagens com a resposta da API
//       await setMessages((prevMessages: any) => [
//         ...prevMessages,
//         systemResponse,
//       ]);
//       if (Response !== null) {
//         await localStorage.setItem(
//           "contractMessages",
//           JSON.stringify(messages)
//         );

//         setIsLoading(false);
//       }
//       return Response;
//     } catch (err) {
//       console.error("Error: " + err);
//       setIsLoading(false);
//       throw err;
//     }
//   }

//   return "Erro ao processar a mensagem";
// }
// useEffect(() => {
//   localStorage.setItem("contractMessages", JSON.stringify(messages));
// }, [messages]);
// async function handleCreatContract() {
//   try {
//     await handleApiCall();
//     await localStorage.setItem("contractMessages", JSON.stringify(messages));
//      router.push("/contrato-ia");
//     console.log("essa é a mensagenx2", messages);

//     const savedMessagesString = localStorage.getItem('contractMessages')!
//     const savedMessages = JSON.parse(savedMessagesString)
//     console.log('savedMessages xxx1 :', savedMessages)
//   } catch (err) {
//     console.error("Error: " + err);
//   }
// }





// export async function handleApiCall(messages: any[],areaResponse:any,aboutContractText:any,fullText:any): Promise<string | null> {
//     const openai = new OpenAI({
//       apiKey: "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",
//       dangerouslyAllowBrowser: true,
//     });
  
//     try {
//       const response = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo-16k",
//         messages: [
//             {
//               role: "system",
//               content: `Entre no personagem, você é uma inteligência artificial chamada Jurid-IA, NUNCA SAIA DO PERSONAGEM.
//          Você realmente tem conhecimento real sobre a justiça e o direito no Brasil e sabe criar  exelentes Contratos e tirar duvidas sobre casos juridcos.
//          Sua função é revisar, melhorar e dar insights sobre contratos.`,
//             },
//             {
//               role: "system",
//               content: `
//          O usuario vai te mandar um contrato e voce analiza ele,Reescreva todo o contrato melhore os pontos que nao achar bom, no final pontue pontos negativos e positivos para que o usuario entenda onde ele errou e acertou.
//          o usuario ja é um advogado, ele ira revisar o contrato, entao nao se preocupe em falar isso para ele.
//         `,
//             },
//             {
//               role: "user",
//               content: `
//          A area do direito  que preciso ajuda é: ${areaResponse}`,
//             },
//             {
//               role: "system",
//               content: `
//          meu contrato é sobre  :${aboutContractText} `,
//             },
  
//             {
//               role: "user",
//               content: `
//          Esse é meu contrato, melhore ele:
//          ${fullText}
//         `,
//             },
//           ],
//       });
//       const Response = response.choices[0].message.content;
  
//       return Response;
//     } catch (err) {
//       console.error("Error: " + err);
//       throw err;
//     }
//   }



//   export function useChatFunctions() {
    
//     const [userMessage, setUserMessage] = useState("");
//     const [isLoading, setIsLoading] = useState(false);
//     const [clientData, setClientData] = useState("");
//     const [startIndex, setStartIndex] = useState(0);
//     const [StartMessage, setStartMessage] = useState<any>([]);
//     const [messages, setMessages] = useState<any>([...StartMessage]);
      
//     useEffect(() => {
//         const savedMessages = localStorage.getItem("savedMessages");
//         const ClientDataStorage: any = localStorage.getItem("clientDataStorage");
//         setClientData(JSON.parse(ClientDataStorage));
//         const clientDataSeparate = JSON.parse(
//           localStorage.getItem("clientDataSeparate") || "{}"
//         );
//         const createClientData = {
//           role: "user",
//           content: `Lembre-se, esses são os dados do cliente, 
//             Nome do Cliente: ${clientDataSeparate.name}, 
//             Cpf do cliente: ${clientDataSeparate.cpf},
//             RG do cliente: ${clientDataSeparate.rg},
//             Idade do cliente: ${clientDataSeparate.age},
//             Data de Nascimento do cliente: ${clientDataSeparate.birthDate},
//             Estado Civil do cliente: ${clientDataSeparate.maritalStatus},
            
//             Por favor, substitua os campos [Nome do Cliente], [CPF do cliente], [RG do cliente] pelos dados reais do cliente: ${clientDataSeparate.name}, CPF ${clientDataSeparate.cpf}, RG ${clientDataSeparate.rg} e assim por diante. 
    
//           `,
//         };
//         const message1 = {
//           role: "user",
//           content:
//             "Apartir de agora voce esta no segundo ponto, Criar a petição com os dados informados,Voce esta falando com um advogado entao nao se preocupe com as correçoes, ele fará, entao recaptule os dados do cliente",
//         };
//         if (savedMessages) {
//           const savedMessagesArray: any = JSON.parse(savedMessages);
//           setStartMessage([...savedMessagesArray, createClientData, message1]);
//           setMessages([...savedMessagesArray, createClientData, message1]);
//           setStartIndex(savedMessagesArray.length);
//           callAPI()
//         }
//       }, []);
//       async function callAPI() {
//         try {
//           // Chame a função para lidar com a API
//           await handleApiCall([...messages,{
//             role: "system",
//             content: `
//              crie a petição, colocando todos dados dos clientes na petição
//         `,
//           },])
//         } catch (err) {
//           console.error("Error: " + err);
//         }
//       }


//     async function handleUserMessageSubmit() {
//       if (userMessage.trim() !== "") {
//         setIsLoading(true);
//         const userMessageObj = { role: "user", content: userMessage };
//         setMessages((prevMessages: any) => [...prevMessages, userMessageObj]);
//         setUserMessage("");
  
//         try {
//           const apiResponse = await handleApiCall([...messages, userMessageObj]);
  
//           if (apiResponse !== null) {
//             const systemResponse = { role: "assistant", content: apiResponse };
//             setMessages((prevMessages: any) => [...prevMessages, systemResponse]);
  
//             setIsLoading(false);
//           } else {
//             // Trate o caso em que a API retorna null
//             console.error("A API retornou null.");
//             setIsLoading(false);
//           }
//         } catch (err) {
//           console.error("Error: " + err);
//         }
//       }
//     }
  
//     const handleTypingComplete = () => {};
  
//     function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
//       if (event.key === "Enter") {
//         event.preventDefault();
//         handleUserMessageSubmit();
//       }
//     }
  
//     return { messages, userMessage, isLoading,callAPI, setMessages,startIndex, setUserMessage, setIsLoading, handleUserMessageSubmit, handleTypingComplete, handleKeyDown };
//   }