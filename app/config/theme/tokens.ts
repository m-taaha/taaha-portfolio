


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
    primary: "#080D12",
    secondary: "#0D151C",
    elevated: "#121D25",
  },

  surface: {
    primary: "#101A22",
    secondary: "#15232D",
  },

  text: {
    primary: "#F0F7F5",
    secondary: "#B5C7C6",
    muted: "#829796",
  },

  border: {
    subtle: "#1B2B33",
    default: "#29404A",
    strong: "#3B5962",
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

