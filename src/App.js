import MainLayout from "./layout/main-layout";
import { HomePage } from "./pages/Home";
import { TutorialsPage } from "./pages/tutorials";
import { AboutPage } from "./pages/About";
import { NotFoundPage } from "./pages/not-found";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="tutorials" element={<TutorialsPage />} />
          <Route path="About" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
