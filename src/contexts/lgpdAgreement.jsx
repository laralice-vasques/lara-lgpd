import { createContext, useState, useMemo, useContext } from "react";

import { GROUP_TITLES } from "../constants";

function parseAnswers(values) {
  return values.filter((v) => v != "-1").map((value) => parseInt(value, 10));
}

function calculateAgreementPercentage(values) {
  const totalPoints = values.length * 2;

  if (totalPoints == 0) {
    return 0;
  }

  const points = values.reduce((acc, value) => acc + value, 0);
  return ((points / totalPoints) * 100).toFixed(2);
}

function calculateGeneralAgreementPercentage(answers) {
  const allAnswers = parseAnswers(
    Object.values(answers).reduce(
      (acc, value) => [...acc, ...Object.values(value)],
      []
    )
  );

  return calculateAgreementPercentage(allAnswers);
}

function calculateAgreementPercentageByGroup(allAnswers) {
  return GROUP_TITLES.map((groupTitle) => {
    const groupAnswers = parseAnswers(allAnswers[groupTitle]);

    return {
      title: groupTitle,
      agreementPercentage: calculateAgreementPercentage(groupAnswers),
    };
  });
}

const LGPDContext = createContext();

export const LGPDProvider = ({ children }) => {
  const [formData, setFormData] = useState(null);

  const result = useMemo(() => {
    if (!formData) return null;

    const generalAgreementPercentage =
      calculateGeneralAgreementPercentage(formData);

    const agreementByGroup = calculateAgreementPercentageByGroup(formData);

    return {
      generalAgreementPercentage,
      agreementByGroup,
    };
  }, [formData]);

  return (
    <LGPDContext.Provider value={{ formData, setFormData, result }}>
      {children}
    </LGPDContext.Provider>
  );
};

export const useLGPD = () => {
  const context = useContext(LGPDContext);

  if (!context) {
    throw new Error("useLGPD must be used within a LGPDProvider");
  }

  return context;
};
