import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Question } from "../../components/Question";
import { useLGPD } from "../../contexts/lgpdAgreement";
import { GROUP_QUESTIONS } from "../../constants";

export function MainForm() {
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
              {group.questions.map((Title, questionIndex) => (
                <Question
                  key={questionIndex}
                  id={`g-${groupIndex}-q-${questionIndex}`}
                  disableNo={`g-${groupIndex}-q-${questionIndex}` == "g-9-q-0"}
                  disablePartial={
                    `g-${groupIndex}-q-${questionIndex}` == "g-9-q-0"
                  }
                  inputProps={register(`${group.title}.${questionIndex}`, {
                    required: true,
                  })}
                >
                  <Title />
                </Question>
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
