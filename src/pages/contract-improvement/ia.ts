
import OpenAI from "openai";

export async function handleApiCall(areaResponse:any,aboutContractText:any,fullText:any){
    const openai = new OpenAI({
      apiKey: "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",
      dangerouslyAllowBrowser: true,
    });
  
    try {
      console.log('xxxxx',areaResponse,aboutContractText,fullText)
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-1106",
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
      const Response = response.choices[0].message.content;
      console.log('response',Response)
      return Response;
    } catch (err) {
      console.error("Error: " + err);
      throw err;
    }
  }

