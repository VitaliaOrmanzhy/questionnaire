import { BrowserRouter, Route, Routes } from "react-router";
import "@/App.css";
import RegisterPage from "@/pages/RegisterPage/RegisterPage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import MainLayout from "@/components/layouts/MainLayout";
import QuizStartPageWithAuth from "./pages/QuizStartPage/QuizStartPage";
import MainPage from "./pages/MainPage/MainPage";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<MainLayout />}>
              <Route path="quizes/:id" element={<QuizStartPageWithAuth />} />
              <Route path="quizes" element={<MainPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
