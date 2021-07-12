import AcademyRoutes from "./routes/academy";
import CoachRoutes from "./routes/coach";
import StudentRoutes from "./routes/student";
import DefaultRoutes from "./routes/default";
import { GlobalStyle } from "./styles/global";
import Register from "./components/Register";

const App = () => {
  let typeUser = localStorage.getItem("@typeUser") || "";
  if (typeUser !== "") {
    typeUser = JSON.parse(typeUser);
  }

  return (
    <>

    <Register/>
      {typeUser === "" ? (
        <DefaultRoutes />
      ) : (
        <>
          {typeUser === "academys" && <AcademyRoutes />}
          {typeUser === "coaches" && <CoachRoutes />}
          {typeUser === "students" && <StudentRoutes />}
        </>
      )}
      <GlobalStyle />
    </>
  );
};

export default App;
