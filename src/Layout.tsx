import { Link, Outlet, useNavigate } from "react-router-dom";
import { Suspense } from "react";
import { usePorfileData } from "./modules/Profile/data";

const Layout = () => {
  const { profileData } = usePorfileData();
  const { nickname } = profileData;

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/profile/edit");
  };

  return (
    <div>
      <header>
        <em onClick={handleEdit}>{nickname}</em>
      </header>
      <nav>
        <ul style={{ display: "flex", gap: "30px" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
