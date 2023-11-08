import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.juridia.com.br',
})
export const token = "Jurid-IA.token";
export const refreshToken = "Jurid-IA.refreshToken";
export const PostAPI = async (url: string, data: any) => {
  const connect = await api
    .post(url, data)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      }
    })
    .catch((err) => {
      const message = err.response.data
      const status = err.response.status
      return { status: status, body: message }
    })

  return connect.status === 500
    ? { status: connect.status, body: 'Ops! algo deu errado, tente novamente' }
    : connect.status === 413
    ? {
        status: connect.status,
        body: 'Ops! algo deu errado, tente novamente ou escolha outra imagem',
      }
    : connect
}

export const PutAPI = async (url: string, data: any) => {
  const connect = await api
    .put(url, data)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      }
    })
    .catch((err) => {
      const message = err.response.data
      const status = err.response.status
      return { status: status, body: message }
    })

  return connect.status === 500
    ? { status: connect.status, body: 'Ops! algo deu errado, tente novamente' }
    : connect.status === 413
    ? {
        status: connect.status,
        body: 'Ops! algo deu errado, tente novamente ou escolha outra imagem',
      }
    : connect
}

export const getAPI = async (url: string) => {
  const connect = await api
    .get(url)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      }
    })
    .catch((err) => {
      const message = err.response.data
      const status = err.response.status
      return { status: status, body: message }
    })

  return connect.status === 500
    ? { status: connect.status, body: 'Ops! algo deu errado, tente novamente' }
    : connect.status === 413
    ? {
        status: connect.status,
        body: 'Ops! algo deu errado, tente novamente ou escolha outra imagem',
      }
    : connect
};
export const AuthPostAPI = async (url: string, data: any) => {
  const storageToken = localStorage.getItem(token);

  if (!storageToken) {
    return {
      status: 401,
      body: "",
    };
  }

  const config = {
    headers: { Authorization: `Bearer ${storageToken}` },
  };

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
export const authGetAPI = async (url: string) => {
  const storageToken = localStorage.getItem(token);

  if (!storageToken) {
    return {
      status: 401,
      body: "",
    };
  }

  const config = {
    headers: { Authorization: `Bearer ${storageToken}` },
  };

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
export const loginVerifyAPI = async () => {
  const token = localStorage.getItem(refreshToken);
  if (!token) {
    return 400;
  }

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const requisition = await api
    .patch("/user/refresh", {}, config)
    .then(async ({ data }) => {
      return { status: 200, body: "" };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status: status, body: message };
    });

  return requisition.status;
};
