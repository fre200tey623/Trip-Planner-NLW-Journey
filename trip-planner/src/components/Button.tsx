import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  TextProps,
  ActivityIndicator,
} from "react-native";
import { createContext, useContext } from "react";

type ButtonProps = TouchableOpacityProps & {
  variant?: "primary" | "secondary" | "tertiary";
  isLoading?: boolean;
};

const ThemeContext = createContext({} as ButtonProps);

function Button({
  variant = "primary",
  children,
  isLoading,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={`w-full h-11 flex-row items-center justify-center rounded-lg gap-2 mt-2
    ${
      variant === "primary"
        ? "bg-lime-300"
        : variant === "secondary"
        ? "bg-zinc-800"
        : variant === "tertiary"
        ? "bg-zinc-800"
        : ""
    }
    
    `}
      activeOpacity={0.7}
      disabled={isLoading}
      {...props}
    >
      <ThemeContext.Provider value={{ variant }}>
        {isLoading? <ActivityIndicator/> : children}
      </ThemeContext.Provider>
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  const { variant } = useContext(ThemeContext);
  return (
    <Text
      className={`${
        variant === "primary"
          ? "text-zinc-900"
          : variant === "secondary"
          ? "text-zinc-100"
          : variant === "tertiary"
          ? "text-zinc-100"
          : ""
      } text-sm font-semibold`}
    >
      {children}
    </Text>
  );
}

Button.Title = Title;

export { Button };
