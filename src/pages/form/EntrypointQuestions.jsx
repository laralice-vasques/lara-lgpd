import { useForm } from "react-hook-form";
import { Question } from "../../components/Question";
import { useSteps } from "../../contexts/steps";
import { Keyword } from "../../components/Keyword";
import { EXPLANATIONS } from "../../contexts/explanations";

export function EntrypointQuestions() {
  const { register, handleSubmit, watch } = useForm();
  const { setCurrentStep } = useSteps();

  const hasPersonalDataTreatment = watch("hasPersonalDataTreatment");

  function onSubmit(data) {
    if (data.hasPersonalDataTreatment == "0") {
      setCurrentStep(3);
    } else if (
      data.hasPersonalDataTreatment == "2" &&
      data.employeeAreResponsibleForDataTreatment == "0"
    ) {
      setCurrentStep(4);
    } else {
      setCurrentStep(2);
    }
  }

  return (
    <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
      <Question
        disableNotApplicable
        disablePartial
        id="hasPersonalDataTreatment"
        inputProps={register("hasPersonalDataTreatment", {
          required: true,
        })}
      >
        A empresa faz algum tipo de{" "}
        <Keyword explanation={EXPLANATIONS.DATA_TREATMENT}>
          tratamento de dados pessoais
        </Keyword>
        , coletados no território brasileiro, para fins econômicos, com o
        objetivo de ofertar produtos e serviços?
      </Question>

      {hasPersonalDataTreatment == "2" ? (
        <Question
          disableNotApplicable
          disablePartial
          id="employeeAreResponsibleForDataTreatment"
          inputProps={register("employeeAreResponsibleForDataTreatment", {
            required: true,
          })}
        >
          Os{" "}
          <Keyword explanation={EXPLANATIONS.AGENTS_OF_DATA_TREATMENT}>
            profissionais responsáveis por tratar os dados pessoais
          </Keyword>{" "}
          - sejam eles da empresa ou terceirizados, e trabalhando no Brasil ou
          no exterior - estão claramente identificados?
        </Question>
      ) : null}

      <button className="btn btn-primary">Avançar</button>
    </form>
  );
}
