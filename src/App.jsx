import { Routes, Route } from "react-router-dom";
import { Form } from "./pages/Form";
import { Result } from "./pages/Result";

export default function App() {
  return (
    <main className="m-3">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </main>
  );
}
