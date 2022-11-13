import { useSteps } from "../../contexts/steps";

export function LgpdNotApplicable() {
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
