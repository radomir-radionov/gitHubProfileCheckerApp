import { Header } from "modules";
import { Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutPage;
