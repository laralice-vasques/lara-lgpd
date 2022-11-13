import { useExplanations } from "../../contexts/explanations";

export function ExplanationsModal() {
  const { Component, title } = useExplanations();

  return (
    <div className="modal" tabIndex="-1" id="explanationsModal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title ?? null}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{Component ? <Component /> : null}</div>
          <div className="modal-footer">
            <button
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-secondary"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
