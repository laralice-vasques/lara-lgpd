import { useState } from "react";
import { useFormContext, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Question } from "../components/Question";
import { StepsProvider, useSteps } from "../contexts/steps";

import { useLGPD } from "../contexts/lgpdAgreement";
import { GROUP_QUESTIONS } from "../constants";

const STEPS = {
  1: EntrypointQuestion,
  2: MainForm,
  3: LgpdNotApplicable,
  4: AgentsOfDataTreatment,
};

export function Form() {
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

function EntrypointQuestion() {
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
        title="A empresa faz algum tipo de tratamento de dados pessoais, coletados no território brasileiro, para fins econômicos, com o objetivo de ofertar produtos e serviços?"
        inputProps={register("hasPersonalDataTreatment", {
          required: true,
        })}
      />

      {hasPersonalDataTreatment == "2" ? (
        <Question
          disableNotApplicable
          disablePartial
          id="employeeAreResponsibleForDataTreatment"
          title="Os profissionais - sejam eles da empresa ou terceirizados, e trabalhando no Brasil ou no exterior - responsáveis por tratar os dados pessoais estão claramente identificados?"
          inputProps={register("employeeAreResponsibleForDataTreatment", {
            required: true,
          })}
        />
      ) : null}

      <button className="btn btn-primary">Avançar</button>
    </form>
  );
}

function MainForm() {
  const { register, handleSubmit } = useFormContext();
  const { setFormData } = useLGPD();
  const navigate = useNavigate();

  function onSubmit(data) {
    setFormData(data);
    navigate("/result");
  }

  return (
    <>
      <h2 className="text-center">Calculadora de Adequação à LGPD</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        {GROUP_QUESTIONS.map((group, groupIndex) => (
          <div key={group.title} className="mb-3">
            <h4 className="mb-0">{group.title}</h4>

            <div className="card card-body shadow-sm">
              {group.questions.map((question, questionIndex) => (
                <Question
                  key={question}
                  id={`g-${groupIndex}-q-${questionIndex}`}
                  title={question}
                  inputProps={register(`${group.title}.${questionIndex}`, {
                    required: true,
                  })}
                />
              ))}
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="btn btn-block btn-primary w-100 mx-auto"
        >
          Calcular resultado
        </button>
      </form>
    </>
  );
}

function LgpdNotApplicable() {
  const { setCurrentStep } = useSteps();

  return (
    <div className="d-flex flex-column">
      <p>
        ATENÇÃO! é preciso verificar se de fato não há nenhum tipo de tratamento
        de dados “relacionados ao titular (brasileiro ou não) que esteja no
        Brasil, no momento da coleta; dentro do território nacional,
        independentemente do meio aplicado (físico ou digital), do país-sede do
        operador ou do país onde se localizam os dados”, porque empresas que se
        encaixam no “não”, são a minoria.
      </p>
      <p>
        A empresa não trata dados pessoais para fins econômicos, com o objetivo
        de ofertar produtos e serviços, portanto, não é necessário a utilização
        do GUIA.
      </p>
      <button className="btn btn-primary" onClick={() => setCurrentStep(2)}>
        Ver o formulário mesmo assim
      </button>
    </div>
  );
}

function AgentsOfDataTreatment() {
  return (
    <div className="d-flex flex-column">
      <p>
        Recomenda-se a leitura do Guia Orientativo para Definições dos Agentes
        de Tratamento de Dados Pessoais e do Encarregado da ANPD antes de
        utilizar o GUIA.
      </p>
      <a href="https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/guia_agentes_de_tratamento_e_encarregado___defeso_eleitoral.pdf ">
        Link do Guia
      </a>
    </div>
  );
}
