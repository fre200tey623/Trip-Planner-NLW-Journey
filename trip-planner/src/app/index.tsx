import { View, Text, Image } from "react-native";
import { Input } from "@/components/Input";
import {
  MapPin,
  Calendar as IconCaledar,
  Settings2,
  UserRoundPlus,
  ArrowRight,
} from "lucide-react-native";
import { Button } from "@/components/Button";
import { useState } from "react";
export default function Index() {

  enum StepForm {
    Trip_details = 1,
    Add_Email = 2,
  }

  const [step, setStep] = useState<StepForm>(StepForm.Trip_details);
  
  function handleNextStep() {
    if (step === StepForm.Trip_details) {
      setStep(StepForm.Add_Email);
    }
  }

  return (
    <View className="flex-1 items-center justify-center px-5 w-full">
      <Image
        source={require("../assets/logo.png")}
        className="h-8"
        resizeMode="contain"
      />
      <Text className="text-zinc-400 text-center mt-3 text-lg">
        Convide seus amigos e planeje sua {"\n"} próxima viagem!
      </Text>
      <View className="w-full items-center justify-center p-4 rounded-lg my-8 bg-zinc-900">
        <Input variant="tertiary">
          <MapPin size={20} className="text-zinc-100" />
          <Input.Field placeholder="Para onde?" editable={step === StepForm.Trip_details}/>
        </Input>
        <Input variant="tertiary">
          <IconCaledar size={20} className="text-zinc-100" />
          <Input.Field placeholder="Quando?" editable={step === StepForm.Trip_details}/>
        </Input>
        {step === StepForm.Add_Email && (
          <View className="w-full items-center justify-center"> 
            <View className="pb-3 w-full border-b border-zinc-800 items-center">
              <Button
                variant="secondary"
                onPress={() => setStep(StepForm.Trip_details)}
              >
                <Button.Title >Alterar local/data</Button.Title>
                <Settings2 size={20} className="text-zinc-100" />
              </Button>
            </View>
            <View className="w-full mt-2">
            <Input variant="tertiary">
              <UserRoundPlus size={20} className="text-zinc-100" />
              <Input.Field placeholder="Quem estara na viagem?" />
            </Input>
              </View>
          </View>
        )}
        
        <Button onPress={() => handleNextStep()}>
          <Button.Title> {step == StepForm.Trip_details? "Continuar" : "Confirmar Viagem"}</Button.Title>
          <ArrowRight size={20} className="text-zinc-800" />
        </Button>
        
      </View>
      <Text className="text-white text-center text-sm">
        Ao planejar sua viagem pela plann.er voce automaticamente concorda com
        os nossos{" "}
        <Text className=" text-zinc-400 underline">
          termos de uso e politica de privacidade
        </Text>
      </Text>
    </View>
  );
}
