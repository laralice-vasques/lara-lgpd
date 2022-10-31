import { Navigate, useNavigate } from "react-router-dom";
import { useLGPD } from "../contexts/lgpdAgreement";

export function Result() {
  const { result } = useLGPD();
  const navigate = useNavigate();

  if (!result) return <Navigate to="/" />;

  return (
    <div
      className="card card-body shadow mx-auto"
      style={{ maxWidth: "800px" }}
    >
      <h4 className="text-center">Resultado</h4>
      <div className="alert alert-primary text-center" role="alert">
        Você está em {result.generalAgreementPercentage}% de acordo com a LGPD
      </div>
      <div className="d-flex justify-content-center text-center flex-wrap mb-2">
        {result.agreementByGroup.map((group) => (
          <div
            key={group.title}
            className="border rounded shadow-sm p-2 mb-3 me-2"
          >
            <h6 className="mb-0">{group.title}</h6>
            <p className="mb-0">{group.agreementPercentage}%</p>
          </div>
        ))}
      </div>
      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        Voltar para o formulário
      </button>
    </div>
  );
}
