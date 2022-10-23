import { useForm, FormProvider } from "react-hook-form";
import { Routes, Route } from "react-router-dom";
import { Form } from "./pages/Form";
import { Result } from "./pages/Result";

export default function App() {
  const methods = useForm();

  return (
    <main className="m-3">
      <FormProvider {...methods}>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </FormProvider>
    </main>
  );
}
