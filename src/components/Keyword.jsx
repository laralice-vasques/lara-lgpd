import { useExplanations } from "../contexts/explanations";

export function Keyword({ children, explanation }) {
  const { setExplanation } = useExplanations();

  return (
    <a
      href="#"
      data-bs-toggle="modal"
      data-bs-target="#explanationsModal"
      onClick={() => setExplanation(explanation)}
    >
      {children}
    </a>
  );
}
