import { TextInput, TextInputProps, View, Platform } from "react-native";

type InputProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};

function Input({ children, variant = "primary" }: InputProps) {
  return (
    <View
      className={`w-full h-16 flex-row items-center gap-2
        ${
          variant === "primary"
            ? "h-14 px-4 rounded-lg border border-zinc-800"
            : variant === "secondary"
            ? "bg-zinc-950"
            : variant === "tertiary"
            ? "bg-zinc-900"
            : ""
        }`}
    >
      {children}
    </View>
  );
}

function Field({...props}: TextInputProps) {
  return <TextInput
  {...props}
  placeholderTextColor={"#6B7280"}
  cursorColor={"#10B981"}
  selectionColor={Platform.OS === "ios" ? "#10B981" : undefined}
  className=" text-zinc-100 text-lg"/>;
  
}

Input.Field = Field;

export { Input };
