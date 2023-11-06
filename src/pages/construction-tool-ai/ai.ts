// useEffect(() => {
//     const savedMessages = localStorage.getItem("savedMessages");
//     const ClientDataStorage: any = localStorage.getItem("clientDataStorage");
//     setClientData(JSON.parse(ClientDataStorage));
//     const clientDataSeparate = JSON.parse(
//       localStorage.getItem("clientDataSeparate") || "{}"
//     );
//     const createClientData = {
//       role: "user",
//       content: `Lembre-se, esses são os dados do cliente, 
//         Nome do Cliente: ${clientDataSeparate.name}, 
//         Cpf do cliente: ${clientDataSeparate.cpf},
//         RG do cliente: ${clientDataSeparate.rg},
//         Idade do cliente: ${clientDataSeparate.idade},
//         Data de Nascimento do cliente: ${clientDataSeparate.dataNascimento},
//         Estado Civil do cliente: ${clientDataSeparate.estadoCivil},
//         Profissão do cliente: ${clientDataSeparate.profissao},
//         Nome da Empresa Empregadora: ${clientDataSeparate.nomeEmpresa},
//         CTPS do cliente: ${clientDataSeparate.ctps},
//         CNPJ da Empresa Empregadora: ${clientDataSeparate.cnpjEmpresa},
//         Data de Admissão do cliente: ${clientDataSeparate.dataAdmissao}.
        
//         Por favor, substitua os campos [Nome do Cliente], [CPF do cliente], [RG do cliente] pelos dados reais do cliente: ${clientDataSeparate.name}, CPF ${clientDataSeparate.cpf}, RG ${clientDataSeparate.rg} e assim por diante. 

//       `,
//     };
//     const message1 = {
//       role: "user",
//       content:
//         "Apartir de agora voce esta no segundo ponto, Criar a petição com os dados informados,Voce esta falando com um advogado entao nao se preocupe com as correçoes, ele fará, entao recaptule os dados do cliente",
//     };
//     if (savedMessages) {
//       const savedMessagesArray: any = JSON.parse(savedMessages);
//       setStartMessage([...savedMessagesArray, createClientData, message1]);
//       setMessages([...savedMessagesArray, createClientData, message1]);
//       setStartIndex(savedMessagesArray.length);
//     }
//   }, []);
//   async function callAPI() {
//     setCreatePetition(true);
//     try {
//       // Chame a função para lidar com a API
//       await handleApiCall({
//         body: {
//           messages: [
//             ...messages,
//             {
//               role: "system",
//               content: `
//                crie a petição, colocando todos dados dos clientes na petição
//           `,
//             },
//           ],
//         },
//       });
//     } catch (err) {
//       console.error("Error: " + err);
//     }
//   }
//   console.log("Essas sao os dados do cliente  :", clientData);
//   async function handleApiCall(request: any) {
//     const { messages } = request.body;
//     if (!isLoading) {
//       setIsLoading(true);

//       // Configuração da API OpenAI

//       const openai = new OpenAI({
//         apiKey: "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",
//         dangerouslyAllowBrowser: true,
//       });

//       try {
//         console.log("Essas sao as mensagnesxxxxx :", messages);
//         const response = await openai.chat.completions.create({
//           model: "gpt-3.5-turbo-16k",
//           messages,
//         });
//         const Response = response.choices[0].message.content;
//         // Adicione a resposta da API ao histórico de mensagens
//         const systemResponse = { role: "assistant", content: Response };

//         // Atualize o estado de mensagens com a resposta da API
//         setMessages((prevMessages: any) => [...prevMessages, systemResponse]);
//         setFirstLoading(false);
//         setIsLoading(false);
//         return Response;
//       } catch (err) {
//         console.error("Error: " + err);
//         setIsLoading(false);
//         throw err;
//       }
//     }

//     return "Erro ao processar a mensagem";
//   }
//   async function handleUserMessageSubmit() {
//     if (userMessage.trim() !== "") {
//       // Adicione a mensagem do usuário ao histórico de mensagens imediatamente
//       const userMessageObj = { role: "user", content: userMessage };
//       setMessages((prevMessages: any) => [...prevMessages, userMessageObj]);
//       setUserMessage("");
//       try {
//         // Chame a função para lidar com a API
//         await handleApiCall({
//           body: { messages: [...messages, userMessageObj] },
//         });
//       } catch (err) {
//         console.error("Error: " + err);
//       }
//     }
//   }
//   const handleTypingComplete = () => {};

//   function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
//     if (event.key === "Enter") {
//       event.preventDefault(); // Evita quebra de linha no input
//       handleUserMessageSubmit(); // Chama a função de envio de mensagem
//     }
//   }
//   console.log("Essas sao as mensagnes :", messages);
//   const messagesContainerRef = useRef<any>(null);
//   useEffect(() => {
//     // Sempre que as mensagens mudarem, faça o scroll até a última mensagem
//     messagesContainerRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, []);