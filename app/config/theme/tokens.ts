


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
    primary: "#0B0B0C",
    secondary: "#111113",
    elevated: "#17171A",
  },

  surface: {
    primary: "#141417",
    secondary: "#1B1B1F",
  },

  text: {
    primary: "#F5F5F4",
    secondary: "#C9C9C5",
    muted: "#8C8C89",
  },

  border: {
    subtle: "#232327",
    default: "#313136",
    strong: "#4B4B52",
  },

  brand: {
    primary: "#B87333",
    soft: "#D4A373",
  },

  feedback: {
    success: "#3BA55D",
    warning: "#D6A34A",
    error: "#D9534F",
  },
};



