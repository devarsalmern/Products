import { Outlet } from "react-router-dom";

const UserAuth = () => {
  return (
    <>
      <h1>UserAuth Page</h1>
      <Outlet />
    </>
  );
};

export default UserAuth;
