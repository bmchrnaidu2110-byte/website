import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import "./styles/tailwind.css";

export default function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}
