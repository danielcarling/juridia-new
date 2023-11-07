
import OpenAI from "openai";

export async function handleApiCall(areaResponse:any,aboutContractText:any,fullText:any){
    const openai = new OpenAI({
      apiKey: "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",
      dangerouslyAllowBrowser: true,
    });
  
    try {
      const messages = [
        {
          role: "system",
          content: `Entre no personagem, você é uma inteligência artificial chamada Jurid-IA, NUNCA SAIA DO PERSONAGEM.
             Você realmente tem conhecimento real sobre a justiça e o direito no Brasil e sabe criar  exelentes Contratos e tirar duvidas sobre casos juridcos.
             Sua função é revisar, e dar insights sobre contratos pontuando pontos negativos e positivos.`,
        },
        {
          role: "system",
          content: `
             O usuario vai te mandar um contrato e voce analiza ele,Revise ele, veja se tem coisas faltando, ou pontos que podem prejudicar alguma das partes, final pontue pontos negativos e positivos para que o usuario entenda onde ele errou e acertou.
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
          content: `Esse é meu contrato, Revise-o e me de insights sobre como aprimora-lo ou a onde o cliente pode sair prejudicado: ${fullText} ,escreva em markdown`,
        },
      ];
      console.log('xxxxx',areaResponse,aboutContractText,fullText)
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-1106",
        messages: messages as OpenAI.Chat.Completions.ChatCompletionMessageParam[],
      });
      localStorage.setItem("PrevImprovementMessages", JSON.stringify(messages));
      const Response = response.choices[0].message.content;
      console.log('response',Response)
      return Response;
    } catch (err) {
      console.error("Error: " + err);
      throw err;
    }
  }

