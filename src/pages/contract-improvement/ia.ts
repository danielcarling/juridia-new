import { useRouter } from "next/router";
import OpenAI from "openai";
import { useEffect, useState } from "react";

const [aboutContractText, setAboutContractText] = useState("");
const router = useRouter()
function getStartMessage() {
  return [
    {
      role: "system",
      content: `Entre no personagem, você é uma inteligência artificial chamada Jurid-IA, NUNCA SAIA DO PERSONAGEM.
   Você realmente tem conhecimento real sobre a justiça e o direito no Brasil e sabe como escrever uma ótima petição, criar  exelentes Contratos e tirar duvidas sobre casos juridcos.
   Sua função é revisar, melhorar e dar insights sobre contratos.`,
    },
    {
      role: "system",
      content: `
   O usuario vai te mandar um contrato e voce analiza ele, melhore os pontos que nao achar bom, pontue pontos negativos e positivos para que o usuario entenda onde ele errou e acertou.
  `,
    },
    {
      role: "user",
      content: `
   A area do direito  que preciso ajuda é: ${areaResponse}`,
    },
    {
      role: "system",
      content: `
   meu contrato é sobre  :${aboutContractText} `,
    },

    {
      role: "user",
      content: `
   Esse é meu contrato, melhore ele:
   ${fullText}
  `,
    },
  ];
}
const [messages, setMessages] = useState<any>([]);
async function handleSomething() {
  const updatedMessages: any = getStartMessage();
  setMessages(updatedMessages);
}
export async function handleApiCall() {
  handleSomething();
  if (!isLoading) {
    setIsLoading(true);

    // Configuração da API OpenAI

    const openai = new OpenAI({
      apiKey: "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",
      dangerouslyAllowBrowser: true,
    });

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-16k",
        messages: [
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
            content: `
       A area do direito  que preciso ajuda é: ${areaResponse}`,
          },
          {
            role: "system",
            content: `
       meu contrato é sobre  :${aboutContractText} `,
          },

          {
            role: "user",
            content: `
       Esse é meu contrato, melhore ele:
       ${fullText}
      `,
          },
        ],
      });

      console.log("API usage:", response.usage);
      const Response = response.choices[0].message.content;
      const systemResponse = { role: "assistant", content: Response };

      // Atualize o estado de mensagens com a resposta da API
      await setMessages((prevMessages: any) => [
        ...prevMessages,
        systemResponse,
      ]);
      if (Response !== null) {
        await localStorage.setItem(
          "contractMessages",
          JSON.stringify(messages)
        );

        setIsLoading(false);
      }
      return Response;
    } catch (err) {
      console.error("Error: " + err);
      setIsLoading(false);
      throw err;
    }
  }

  return "Erro ao processar a mensagem";
}
useEffect(() => {
  localStorage.setItem("contractMessages", JSON.stringify(messages));
}, [messages]);
async function handleCreatContract() {
  try {
    await handleApiCall();
    await localStorage.setItem("contractMessages", JSON.stringify(messages));
     router.push("/contrato-ia");
    console.log("essa é a mensagenx2", messages);

    const savedMessagesString = localStorage.getItem('contractMessages')!
    const savedMessages = JSON.parse(savedMessagesString)
    console.log('savedMessages xxx1 :', savedMessages)
  } catch (err) {
    console.error("Error: " + err);
  }
}