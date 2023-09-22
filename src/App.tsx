import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetStyle from "./styles/reset";
import Layout from "./Layout";
import Home from "./pages/Home";
import { lazy } from "react";

const ProfileEdit = lazy(() => import("./modules/Profile/ProfileEdit"));

const App = () => {
  return (
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} index />
          <Route path="/profile/edit" element={<ProfileEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
