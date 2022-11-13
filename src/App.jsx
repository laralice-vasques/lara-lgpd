import { useForm, FormProvider } from "react-hook-form";
import { Routes, Route } from "react-router-dom";
import Form from "./pages/form";
import { ExplanationsProvider } from "./contexts/explanations";
import { Result } from "./pages/Result";
import { ExplanationsModal } from "./components/explanations/ExplanationsModal";

export default function App() {
  const methods = useForm();

  return (
    <main className="m-3">
      <FormProvider {...methods}>
        <ExplanationsProvider>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/result" element={<Result />} />
          </Routes>
          <ExplanationsModal />
        </ExplanationsProvider>
      </FormProvider>
    </main>
  );
}
