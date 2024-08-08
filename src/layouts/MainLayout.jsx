import Navbar from "../components/Navbar";

const MainLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <h1>This is footer</h1>
    </>
  );
};

export default MainLayout;
