import { useRouter } from "next/router";
import OpenAI from "openai";

type Message = {
    role: string;
    content: string;
  };
  export const StartMessage = [
    {
      role: "system",
      content: `Entre no personagem, você é uma inteligência artificial chamada Jurid-IA, NUNCA SAIA DO PERSONAGEM.
       Você realmente tem conhecimento real sobre a justiça e o direito no Brasil e sabe como escrever uma ótima petição ou contrato, criar  exelentes Contratos e tirar duvidas sobre casos juridcos.
       Sua função será passada pelo usuario que que ja é advogado, como por exemplo criar uma petição ou contrato, então converse com o usuário, faça perguntas que ajudem você a entender
       melhor o caso, quais são os problemas enfrentados e qual o objetivo.Seu objetivo é ajudar os advogados a ajudarem seus clientes, entao voce nao precisará
       de forma alguma pedir para um outro advogado revisar ,pois será revisado. 
       Ao conseguir todos os dados que precisa  recapitule toda a conversa e peça para o usuário confirmar se está tudo certo ou se quer acrescentar mais algum detalhe
        `,
    },
    {
      role: "system",
      content: `
       Essa criação sera dividida em dois pontos. 1 captura de dados, que começa agora, e 2. criação da petição ou contrato que ocorrerá posteriormente .
       Por enquanto sua função é somente recolher os dados,
       NAO CRIE A PETIÇÂO, Somente recolha os dados. Quando achar que tem todos os dados Peça para o Usuario Prosseguir para o segundo ponto.
      `,
    },
    {
      role: "system",
      content: `
       È muito importante que Lembre-se: Somente capture os dados que achar necessario para que no segundo ponto seja escrito uma petição ou contrato, dependendo do que o usuario queira  excelente.
      Se acha que tem todos os dados peça pro usuario ir para o proximo ponto. "
      `,
    },
  ];

  export async function handleApiCall(messages: any[],setMessages:any): Promise<string | null> {
    const openai = new OpenAI({
      apiKey: "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",
      dangerouslyAllowBrowser: true,
    });

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-1106",
        messages,
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

  export const handleClientDataSubmit = (
    data: any,
    areaResponse: string, // Adicionado parâmetro areaResponse
    interestResponse: string, // Adicionado parâmetro interestResponse
    themeResponse: string, // Adicionado parâmetro themeResponse
    client_data: string, // Adicionado parâmetro client_data
    setReload: React.Dispatch<React.SetStateAction<boolean>>,
    setClient_data: React.Dispatch<React.SetStateAction<string>>,
    setMessages: React.Dispatch<React.SetStateAction<any[]>>)=> { // Adicionado parâmetro setClient_data
    const clientDataString = `Nome: ${data.name},CPF: ${data.cpf},RG: ${data.rg},Idade:${data.age},Data de nascimento: ${data.birthDate},Estado civil: ${data.maritalStatus}`;
    localStorage.setItem("clientDataStorage", JSON.stringify(clientDataString));
    localStorage.setItem("clientDataSeparate", JSON.stringify(data));
    setClient_data(
      `Nome: ${data.name},CPF: ${data.cpf},RG: ${data.rg},Endereço: ${data.enderecoEmpresa},Data de nascimento: ${data.birthDate},Estado civil: ${data.maritalStatus}`
    );
    setReload(true);
    setMessages([
      ...StartMessage,
      {
        role: "system",
        content: `Voce é expecialista em  ${areaResponse}, e preciso que haja como um amplo conhecedor sobre esta area do direito.`,
      },
      {
        role: "user",
        content: `haja como um especialista pois preciso ${interestResponse}`,
      },
      {
        role: "user",
        content: ` haja como especialista sobre ${themeResponse}`,
      },
      {
        role: "user",
        content: `Esses são os dados do cliente em questão:${clientDataString}`,
      },
      {
        role: "assistant",
        content: `Olá, tudo bem? Me chamo Jurid-Ia, sou uma inteligência artificial que vai te ajudar a ${interestResponse} sobre ${themeResponse}. Poderia me dar mais detlhes sobre o caso?`,
      },
    ]);
  };

  export const handleStartConversation = 
  (
    data: any,
    areaResponse: string, // Adicionado parâmetro areaResponse
    interestResponse: string, // Adicionado parâmetro interestResponse
    themeResponse: string, // Adicionado parâmetro themeResponse
    client_data: string, // Adicionado parâmetro client_data
    setReload: React.Dispatch<React.SetStateAction<boolean>>,
    setClient_data: React.Dispatch<React.SetStateAction<string>>,
    setMessages: React.Dispatch<React.SetStateAction<any[]>>) => {
    setReload(true);
    setMessages([
      ...StartMessage,
      {
        role: "system",
        content: `Voce é expecialista em  ${areaResponse}, e preciso que haja como um amplo conhecedor sobre esta area do direito.`,
      },
      {
        role: "user",
        content: `haja como um especialista pois preciso ${interestResponse}`,
      },
      {
        role: "user",
        content: ` haja como especialista sobre ${themeResponse}`,
      },
      {
        role: "user",
        content: `Esses são os dados do cliente em questão:${client_data}`,
      },
      {
        role: "assistant",
        content: `Olá, tudo bem? Me chamo Jurid-Ia, sou uma inteligência artificial que vai te ajudar a ${interestResponse} sobre ${themeResponse}. Poderia me dar mais detlhes sobre o caso?`,
      },
    ]);
  };

  export const handleUserMessageSubmit = async (
    userMessage: string,
    setMessages: any,
    setUserMessage: React.Dispatch<React.SetStateAction<string>>,
    handleApiCall: ( request: any,setMessages:any) => Promise<any>,
    messages: any[],
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {

    if (userMessage.trim() !== "") {
        setIsLoading(true);
      const userMessageObj = { role: "user", content: userMessage };
      setMessages((prevMessages:any) => [...prevMessages, userMessageObj]);
      setUserMessage("");
    console.log('messagensxx',messages)
    console.log('userMessage',userMessage)
      try {
        await handleApiCall([...messages, userMessageObj],setMessages);
        setIsLoading(false);
        console.log('xxx',Response)
      } catch (err) {
        setIsLoading(false);
        console.error("Error: " + err);
      }
    }
  };
  
export function handleTypingComplete() {
  // ...
}
export function handleReloadData(
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
    setReload: React.Dispatch<React.SetStateAction<boolean>>,
    StartMessage: Message[]
) {
  setReload(false);
  setMessages([...StartMessage]);
}

export function handleCreatePetition( messages: Message[]) {
  const router = useRouter()
  try {
    localStorage.setItem("savedMessages", JSON.stringify(messages));
    router.push("/criar-ia");
  } catch (err) {
    console.error("Error: " + err);
  }
}
