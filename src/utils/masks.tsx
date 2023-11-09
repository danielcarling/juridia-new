import React from "react";

export function maskCep(value: string) {
  if (!value) {
    return "";
  }

  value = value.replace(/\D/g, ""); // 1239856

  if (value.length >= 8) {
    value = value.slice(0, 8);
  }

  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  return value;
}

export function maskPhone(value: string) {
  if (!value) {
    return "";
  }
  value = value.replace(/\D/g, "");

  if (value.length > 11) {
    value = value.slice(0, 11);
  }

  // (11)1111-1111
  value = value.replace(/^(\d{2})(\d)/g, "($1)$2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
}

export function maskCpf(value: string) {
  if (!value) {
    return "";
  }
  value = value.replace(/\D/g, "");

  if (value.length >= 11) {
    value = value.slice(0, 11);
  }

  if (value.length <= 11) {
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  return value;
}

export function maskCnpj(value: string) {
  if (!value) {
    return "";
  }
  value = value.replace(/\D/g, "");

  if (value.length >= 14) {
    value = value.slice(0, 14);
  }

  value = value.replace(/^(\d{2})(\d)/, "$1.$2");
  value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
  value = value.replace(/(\d{4})(\d)/, "$1-$2");

  return value;
}

export function maskCpfCnpj(value: string) {
  if (!value) {
    return "";
  }
  value = value.replace(/\D/g, "");

  if (value.length > 14) {
    value = value.slice(0, 14);
  }

  if (value.length <= 11) {
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else {
    value = value.replace(/^(\d{2})(\d)/, "$1.$2");
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
    value = value.replace(/(\d{4})(\d)/, "$1-$2");
  }

  return value;
}

export function maskAge(value: string) {
  if (!value) {
    return "";
  }
  value = value.replace(/\D/g, "");
  return value;
}

export function maskCreditCard(value: string) {
  value = value.replace(/\D/g, "");

  if (value.length >= 16) {
    value = value.slice(0, 16);
  }

  const maskedCardNumber = value
    .split("")
    .map((char, index) => (index % 4 === 0 && index > 0 ? ` ${char}` : char))
    .join("")
    .trim();

  return maskedCardNumber;
}

export function maskDate(value: string) {
  let data = value;
  data = data.replace(/\D/g, "");

  if (data.length > 8) {
    data = data.slice(0, 8);
  }

  if (data.length <= 8) {
    data = data.replace(/(\d{2})(\d)/, "$1/$2");
    data = data.replace(/(\d{2})(\d)/, "$1/$2");
  }

  return data;
}

export function maskCardValidity(value: string) {
  if (!value) {
    return "";
  }

  value = value.replace(/\D/g, "");

  if (value.length >= 4) {
    value = value.slice(0, 4);
  }

  value = value.replace(/(\d{2})(\d)/, "$1/$2");
  return value;
}

export function maskCvc(value: string) {
  if (!value) {
    return "";
  }

  value = value.replace(/\D/g, "");

  if (value.length >= 3) {
    value = value.slice(0, 3);
  }

  return value;
}

export function maskCard(value: string) {
  if (!value) {
    return "";
  }
  if (value.length <= 17) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{4})(\d)/, "$1 $2");
    value = value.replace(/(\d{6})(\d)/, "$1 $2");
    return value;
  }
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{4})(\d)/, "$1 $2");
  value = value.replace(/(\d{4})(\d)/, "$1 $2");
  value = value.replace(/(\d{4})(\d)/, "$1 $2");
  return value;
}
export function sanitizeAndFormatText(inputText: string) {
  // Divide o texto em linhas e junta-as com <br />
  let formattedText = inputText.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
  return formattedText;
}

export function onlyNumbers(value: string) {
  return value.replace(/\D/g, "");
}
