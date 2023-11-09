import {createContext} from "react";

type StepContent = {
    step: number,
    setStep: (d: number) => void,
}
type RealStepContent = {
    realStep: number,
    setRealStep: (d: number) => void,
}

export const StepContext = createContext<StepContent>({
    step: 0,
    setStep: () => {},
});

export const RealStepContext = createContext<RealStepContent>({
    realStep: 0,
    setRealStep: () => {},
});
