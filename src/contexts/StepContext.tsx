import {createContext} from "react";

type StepContent = {
    step: number,
    setStep: (d: number) => void,
}

export const StepContext = createContext<StepContent>({
    step: 0,
    setStep: () => {},
});
