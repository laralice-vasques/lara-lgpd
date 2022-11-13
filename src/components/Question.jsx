export function Question({
  id,
  children,
  inputProps,
  disableNotApplicable = false,
  disablePartial = false,
  disableNo = false,
}) {
  return (
    <div className="mb-3">
      <p className="mb-1">{children}</p>

      {!disableNotApplicable ? (
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor={`na-${id}`}>
            <input
              {...inputProps}
              className="form-check-input"
              type="radio"
              id={`na-${id}`}
              value="-1"
            />
            Não se aplica
          </label>
        </div>
      ) : null}

      {!disableNo ? (
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor={`no-${id}`}>
            <input
              {...inputProps}
              className="form-check-input"
              type="radio"
              id={`no-${id}`}
              value="0"
            />
            Não
          </label>
        </div>
      ) : null}

      {!disablePartial ? (
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor={`partially-${id}`}>
            <input
              {...inputProps}
              className="form-check-input"
              type="radio"
              id={`partially-${id}`}
              value="1"
            />
            Parcialmente
          </label>
        </div>
      ) : null}

      <div className="form-check form-check-inline">
        <label className="form-check-label" htmlFor={`yes-${id}`}>
          <input
            {...inputProps}
            className="form-check-input"
            type="radio"
            id={`yes-${id}`}
            value="2"
          />
          Sim
        </label>
      </div>
    </div>
  );
}
