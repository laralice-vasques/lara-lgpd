import { createContext, useContext } from "react";

export const StepsContext = createContext();

export function StepsProvider({ steps, setCurrentStep, children }) {
  return (
    <StepsContext.Provider value={{ steps, setCurrentStep }}>
      {children}
    </StepsContext.Provider>
  );
}

export function useSteps() {
  const data = useContext(StepsContext);

  if (!data) {
    throw new Error("useSteps must be used within a StepsProvider");
  }

  return data;
}
