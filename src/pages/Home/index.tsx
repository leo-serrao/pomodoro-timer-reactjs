import { NewCycleForm } from "./components/NewCycleForm";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CountDown } from "./components/CountDown";
import { HandPalm, Play } from "phosphor-react";
import { useContext } from "react";
import * as z from "zod";

import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from "./styles";
import { CyclesContext } from "../../contexts/CyclesContext";

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, "Informe a tarefa"),
  minutesAmount: z
    .number()
    .min(5, "O cilo deve conter no mínimo 5 minutos")
    .max(60, "O cilo deve conter no máximo 60 minutos"),
});

/* Tipagem do form feita na mão 
interface NewCycleFormDataProps {
  task: string;
  minutesAmount: number;
} */

// Tipagem do form feita automaticamente com o zod
type NewCycleFormDataProps = z.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormDataProps>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormDataProps) {
    createNewCycle(data);
    reset();
  }

  const fields = {
    task: watch("task"),
    minutesAmount: watch("minutesAmount"),
  };
  const isSubmitDisabled = !fields.task || !fields.minutesAmount;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <CountDown />

        {activeCycle ? (
          <StopCountDownButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountDownButton>
        ) : (
          <StartCountDownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  );
}
