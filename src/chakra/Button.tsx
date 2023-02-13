import { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button:ComponentStyleConfig = {
    baseStyle: {
        borderRadius: "10px",
        fontSize: "15pt",
        fontWeight: 700,
        _focus: {
            boxShadow: "none"
        }
    },
    sizes: {
        sm: {
            fontSize: "8pt"
        },
        md: {
            fontSize: "10pt"
            //height: "28px"
        },
    },
    variants: {
    solid: {
      color: "white",
      bg: "black",
      _hover: {
        bg: "gray.800",
      },
    },
    outline: {
      color: "white",
      border: "1px solid",
      borderColor: "white",
      bg: "black"
    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
    },
},
}; 
