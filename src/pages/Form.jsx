import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useLGPD } from "../contexts/lgpdAgreement";
import { GROUP_QUESTIONS } from "../constants";

export function Form() {
  const { register, handleSubmit } = useFormContext();
  const { setFormData } = useLGPD();
  const navigate = useNavigate();

  function onSubmit(data) {
    setFormData(data);
    navigate("/result");
  }

  return (
    <div className="shadow mx-auto p-4" style={{ maxWidth: "880px" }}>
      <h2 className="text-center">Calculadora de Adequação à LGPD</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        {GROUP_QUESTIONS.map((group, groupIndex) => (
          <div key={group.title} className="mb-3">
            <h4 className="mb-0">{group.title}</h4>

            <div className="card card-body shadow-sm">
              {group.questions.map((question, questionIndex) => (
                <div key={question} className="mb-3">
                  <p className="mb-0">{question}</p>

                  <div className="form-check form-check-inline">
                    <label
                      className="form-check-label"
                      htmlFor={`na-g-${groupIndex}-q-${questionIndex}`}
                    >
                      <input
                        {...register(`${group.title}.${questionIndex}`, {
                          required: true,
                        })}
                        className="form-check-input"
                        type="radio"
                        id={`na-g-${groupIndex}-q-${questionIndex}`}
                        value="-1"
                      />
                      Não se aplica
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <label
                      className="form-check-label"
                      htmlFor={`no-g-${groupIndex}-q-${questionIndex}`}
                    >
                      <input
                        {...register(`${group.title}.${questionIndex}`, {
                          required: true,
                        })}
                        className="form-check-input"
                        type="radio"
                        id={`no-g-${groupIndex}-q-${questionIndex}`}
                        value="0"
                      />
                      Não
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <label
                      className="form-check-label"
                      htmlFor={`partially-g-${groupIndex}-q-${questionIndex}`}
                    >
                      <input
                        {...register(`${group.title}.${questionIndex}`, {
                          required: true,
                        })}
                        className="form-check-input"
                        type="radio"
                        id={`partially-g-${groupIndex}-q-${questionIndex}`}
                        value="1"
                      />
                      Parcialmente
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <label
                      className="form-check-label"
                      htmlFor={`yes-g-${groupIndex}-q-${questionIndex}`}
                    >
                      <input
                        {...register(`${group.title}.${questionIndex}`, {
                          required: true,
                        })}
                        className="form-check-input"
                        type="radio"
                        id={`yes-g-${groupIndex}-q-${questionIndex}`}
                        value="2"
                      />
                      Sim
                    </label>
                  </div>
                </div>
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
    </div>
  );
}
