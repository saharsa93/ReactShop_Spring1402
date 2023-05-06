import MainLayout from "./layout/main-layout";
import { HomePage } from "./pages/Home";
import { TutorialsPage } from "./pages/tutorials";
import { AboutPage } from "./pages/About";
import { NotFoundPage } from "./pages/not-found";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClassComponent1 } from "./tutorials/react-components";
import { WelcomePage } from "./tutorials/welcome";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="tutorials" element={<TutorialsPage />}>
            <Route index element={<WelcomePage />} />
            <Route path="react-components" element={<ClassComponent1 />} />
          </Route>
          <Route path="About" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
