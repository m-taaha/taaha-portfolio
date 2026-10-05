


export interface ColorTokens {
readonly background: {
    primary: string;
    secondary: string;
    elevated: string;
},

readonly surface: {
    primary: string;
    secondary: string
},

readonly border: {
    subtle: string;
    default: string;
    strong: string
},

readonly text: {
    primary: string;
    secondary: string;
    muted: string;
}

readonly brand: {
    primary: string;
    soft: string;
},

readonly feedback: {
    success: string;
    warning: string;
    error: string;
}
}

export const darkColors: ColorTokens = {
  background: {
    primary: "#0A0D12",
    secondary: "#10151D",
    elevated: "#171E29",
  },

  surface: {
    primary: "#121821",
    secondary: "#192231",
  },

  text: {
    primary: "#F2F5F9",
    secondary: "#B5C0CE",
    muted: "#8592A3",
  },

  border: {
    subtle: "#222C3A",
    default: "#344256",
    strong: "#50637C",
  },

  brand: {
    primary: "#75A7FF",
    soft: "#B7D0FF",
  },

  feedback: {
    success: "#64D7A5",
    warning: "#E8BF72",
    error: "#F07888",
  },
};
