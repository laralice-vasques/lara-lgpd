import { createContext, useState, useContext, useMemo } from "react";
import { DataTreatment } from "../components/explanations/DataTreatment";
import { AgentsOfDataTreatment } from "../components/explanations/AgentsOfDataTreatment";
import { LegalBasis } from "../components/explanations/LegalBasis";
import { WhatToDoIndeed } from "../components/explanations/WhatToDoIndeed";
import { InternationalTransferOfPersonalData } from "../components/explanations/InternationalTransferOfPersonalData";
import { BusinessContext } from "../components/explanations/BusinessContext";
import { MinimumNecessary } from "../components/explanations/MinimumNecessary";
import { FiscalResponsibility } from "../components/explanations/FiscalResponsibility";
import { Discriminate } from "../components/explanations/Discriminate";
import { InCharge } from "../components/explanations/InCharge";
import { Finality } from "../components/explanations/Finality";
import { Adequation } from "../components/explanations/Adequation";
import { Necessity } from "../components/explanations/Necessity";
import { FreeAccess } from "../components/explanations/FreeAccess";
import { DataQuality } from "../components/explanations/DataQuality";
import { Transparency } from "../components/explanations/Transparency";
import { Security } from "../components/explanations/Security";
import { Prevention } from "../components/explanations/Prevention";
import { NoDiscrimination } from "../components/explanations/NoDiscrimination";
import { Accountability } from "../components/explanations/Accountability";

const ExplanationsContext = createContext();

export const EXPLANATIONS = {
  DATA_TREATMENT: {
    title: "Tratamento de dados",
    Component: DataTreatment,
  },
  AGENTS_OF_DATA_TREATMENT: {
    title: "Profissionais responsáveis por tratar os dados pessoais",
    Component: AgentsOfDataTreatment,
  },
  LEGAL_BASIS: {
    title: "Base jurídica",
    Component: LegalBasis,
  },
  WHAT_TO_DO_INDEED: {
    title: "O que fazer?",
    Component: WhatToDoIndeed,
  },
  INTERNATIONAL_TRANSFER_OF_PERSONAL_DATA: {
    title: "Transferência internacional de dados pessoais",
    Component: InternationalTransferOfPersonalData,
  },
  BUSINESS_CONTEXT: {
    title: "Contexto do negócio",
    Component: BusinessContext,
  },
  MINIMUM_NECESSARY: {
    title: "Mínimo necessário",
    Component: MinimumNecessary,
  },
  FISCAL_RESPONSIBILITY: {
    title: "Responsabilidade fiscal",
    Component: FiscalResponsibility,
  },
  DISCRIMINATE: {
    title: "Discriminar",
    Component: Discriminate,
  },
  IN_CHARGE: {
    title: "Encarregado",
    Component: InCharge,
  },
  Finalidade: {
    title: "Finalidade",
    Component: Finality,
  },
  Adequação: {
    title: "Adequação",
    Component: Adequation,
  },
  Necessidade: {
    title: "Necessidade",
    Component: Necessity,
  },
  "Livre acesso": {
    title: "Livre acesso",
    Component: FreeAccess,
  },
  "Qualidade dos dados": {
    title: "Qualidade dos dados",
    Component: DataQuality,
  },
  Transparência: {
    title: "Transparência",
    Component: Transparency,
  },
  Segurança: {
    title: "Segurança",
    Component: Security,
  },
  Prevenção: {
    title: "Prevenção",
    Component: Prevention,
  },
  "Não discriminação": {
    title: "Não discriminação",
    Component: NoDiscrimination,
  },
  Responsabilização: {
    title: "Responsabilização",
    Component: Accountability,
  },
};

export function ExplanationsProvider({ children }) {
  const [currentExplanation, setExplanation] = useState(null);

  return (
    <ExplanationsContext.Provider
      value={{
        Component: currentExplanation?.Component,
        title: currentExplanation?.title,
        setExplanation,
      }}
    >
      {children}
    </ExplanationsContext.Provider>
  );
}

export function useExplanations() {
  const context = useContext(ExplanationsContext);

  if (!context) {
    throw new Error(
      "useExplanations must be used within a ExplanationsProvider"
    );
  }

  return context;
}
