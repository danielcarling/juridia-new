import axios from "axios";

export const api_url = ""
export const token = ""

export const api = axios.create({
  baseURL: api_url,
});

export const PostAPI = async (url: string, data: any) => {
  const connect = await api
    .post(url, data)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status: status, body: message };
    });

  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
    ? {
        status: connect.status,
        body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
      }
    : connect;
};

export const PutAPI = async (url: string, data: any) => {
  const connect = await api
    .put(url, data)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status: status, body: message };
    });

  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
    ? {
        status: connect.status,
        body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
      }
    : connect;
};

export const getAPI = async (url: string) => {
  const connect = await api
    .get(url)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status: status, body: message };
    });

  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
    ? {
        status: connect.status,
        body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
      }
    : connect;
};

export const authGetAPI = async (url: string) => {
  const storageToken = localStorage.getItem(token);

  if (!storageToken) {
      return 400
  }

  const config = {
      headers: { Authorization: `Bearer ${storageToken}` }
    }

  const connect = await api
    .get(url, config)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status: status, body: message };
    });

  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
    ? {
        status: connect.status,
        body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
      }
    : connect;
};


export const authDeleteAPI = async (url: string) => {
  const storageToken = localStorage.getItem(token);

    if (!storageToken) {
        return 400
    }

    const config = {
        headers: { Authorization: `Bearer ${storageToken}` }
      }

  const connect = await api
    .delete(url, config)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status: status, body: message };
    });

  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
    ? {
        status: connect.status,
        body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
      }
    : connect;
};
export const AuthPostAPI = async (url: string, data: any) => {
  const storageToken = localStorage.getItem(token);

    if (!storageToken) {
        return 400
    }

    const config = {
        headers: { Authorization: `Bearer ${storageToken}` }
      }

  const connect = await api
    .post(url, data, config)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status: status, body: message };
    });
  console.log(connect);
  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
    ? {
        status: connect.status,
        body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
      }
    : connect;
};

export const AuthPutAPI = async (url:string, data:any) =>{

  const storageToken = localStorage.getItem(token);

    if (!storageToken) {
        return 400
    }

    const config = {
        headers: { Authorization: `Bearer ${storageToken}` }
      }

  const connect = await api.put(url, data, config)
        .then(({ data }) => {
            return {
              status:200,
              body:data
            }
        }).catch((err) => {
            const message = err.response.data
            const status = err.response.status
            return { status: status, body: message }
        })

    return connect.status ===
        500 ?
        { status: connect.status, body: 'Ops! algo deu errado, tente novamente' } :
        connect.status === 413 ? { status: connect.status, body: 'Ops! algo deu errado, tente novamente ou escolha outra imagem' } :
            connect

}

export const loginVerifyAPI = async () => {
    const storageToken = localStorage.getItem(token);

    if (!storageToken) {
        return 400
    }

    const config = {
        headers: { Authorization: `Bearer ${storageToken}` }
      }

    const requisition = await api.get('/token', config)
        .then(async ({ data }) => {
            return {status:200, body: ''}
        }).catch((err) => {
            const message = err.response.data
            const status = err.response.status
            return { status: status, body: message }
        })

   return requisition.status
}
