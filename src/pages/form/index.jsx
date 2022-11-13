import { useState } from "react";
import { StepsProvider } from "../../contexts/steps";
import { EntrypointQuestions } from "./EntrypointQuestions";
import { MainForm } from "./MainForm";
import { LgpdNotApplicable } from "./LgpdNotApplicable";
import { AgentsOfDataTreatment } from "./AgentsOfDataTreatment";

const STEPS = {
  1: EntrypointQuestions,
  2: MainForm,
  3: LgpdNotApplicable,
  4: AgentsOfDataTreatment,
};

export default function Form() {
  const [step, setStep] = useState(1);

  const CurrentStepComponent = STEPS[step];

  return (
    <StepsProvider steps={STEPS} setCurrentStep={setStep}>
      <div className="shadow mx-auto my-auto p-4" style={{ maxWidth: "880px" }}>
        <CurrentStepComponent />
      </div>
    </StepsProvider>
  );
}
