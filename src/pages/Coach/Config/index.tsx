import { useHistory } from "react-router-dom";
import NewPassword from "../../../components/NewPassword";
import { ContainerFoto, PageContainer, RedButtonStyled } from "./styles";

export default function CoachConfig() {
 
  const history = useHistory();

  const hanldeLogout = async () => {
    await localStorage.clear();
    await history.push("/");
    await window.location.reload();
  };

  return (
    <PageContainer>
      <span>Configurações</span>
      <div className="components">
        <ContainerFoto>
          <div className="foto">
            <div>
              <img
                src="https://i.pinimg.com/originals/c7/8f/9c/c78f9c888554a3633e0fcba4f8201027.png"
                alt="imagem maior"
              />
              <img
                src="https://image.flaticon.com/icons/png/512/189/189689.png"
                alt="imagem menor"
              />
            </div>
          </div>
          <span>Nome do coach</span>
        </ContainerFoto>
        <NewPassword />
      </div>
      {/* Coloquei dentro da div só pra funcionar */}
      <div onClick={hanldeLogout}>
        <RedButtonStyled>Logout</RedButtonStyled>
      </div>
    </PageContainer>
  );
}
