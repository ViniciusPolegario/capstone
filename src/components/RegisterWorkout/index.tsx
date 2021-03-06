import React, { useEffect, useState } from "react";

import { FaTimes } from "react-icons/fa";
import { useExercises } from "../../providers/Exercises";
import RegisterButton from "./RegisterButton";
import {
  Body,
  ModalHeader,  
  Container,
  ModalBody,
  DivSelect,
} from "./styles";

import { useParams } from "react-router-dom";
import { apiMyGym } from "../../services/api";
import { useUserProvider } from "../../providers/User";
import { toast } from "react-toastify";
import { ToastRegister } from "../Toasts/Register";
import { motion } from "framer-motion";

const grupoMuscular = [
  "Peito",
  "Pernas",
  "Braços",
  "Costas",
  "Abdomen/Core",
  "Ombros",
];


interface Props {
  setOpen: () => void;
  getInfo: () => void
  infoStudent: any
}

const RegisterWorkout = ({ infoStudent, getInfo, setOpen }: Props) => {
  const { id } = useParams<{ id?: any }>();
  const {
    userProvider: { token },
  } = useUserProvider();

  const { exercises } = useExercises();
  const [workouts, setWorkouts] = useState<Array<any>>([]);
  const [filterExercises, setFilterExercises] = useState<Array<any>>([]);
  const [selectValue, setSelectValue] = useState<any>("");
  const [inputValue, setInputValue] = useState<any>("");
  const [group, setGroup] = useState<string>("Peito");

  const handleFilter = (e: any) => {
    const currentGroup = e.target.value;
    setGroup(currentGroup)

    const newList = exercises.filter((value: any) => value.group === currentGroup);
    setFilterExercises(newList);
  };


  const handleChangeSelect = (e: any) => {
    const value = e.target.value;
    setSelectValue(value);
  };

  const handleInput = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const submitWorkout = () => {
    if (inputValue !== "" && selectValue !== "") {   

      const item = exercises.filter(
        (exercice: any) => exercice.name === selectValue
      );
      item[0].seriesDuration = inputValue;

      setWorkouts([...workouts, item[0]]);

      setInputValue("");
      setSelectValue("");
    }

    
  };

  const handlePost = () => {

    const data = {
        group: group,
        exercices: workouts,
        studentId: parseInt(id),
    }

    apiMyGym
      .post("workouts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) =>{ 
        toast(
          <ToastRegister name={""} closeToast={true} toastProps={null}>
            Treino registrado com sucesso!
          </ToastRegister>,
          { className: "registerSuccess" }
        )
        getInfo()})
      .catch( () => toast(
        <ToastRegister name={""} closeToast={true} toastProps={null}>
          Algo deu errado, tente novamente!
        </ToastRegister>,
        { className: "registerFail" }
      ));
  };

  useEffect(() => {
    const newList = exercises.filter((value: any) => value.group === "Peito");
    setFilterExercises(newList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
    initial={{ opacity: 0.5 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Body>
      <div>
        <ModalHeader>
          <Container>
            <h3>{infoStudent.name}</h3>
            <span onClick={setOpen}>
              <FaTimes />
            </span>
          </Container>
        </ModalHeader>
        <ModalBody>
          <Container>
            <h4>Cadastro de treinos</h4>
            <select name="select" id="group" onChange={handleFilter}>
              {grupoMuscular.map((item: string, index: number) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <DivSelect>
              <Container>
                <select id="exercises" onChange={handleChangeSelect}>
                  {filterExercises?.map((item: any, index: number) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  placeholder="Séries/Duração"
                  onChange={handleInput}
                />
                <RegisterButton
                  backgroundColor="var(--dark-purple)"
                  func={submitWorkout}
                >
                  adicionar
                </RegisterButton>
              </Container>
            </DivSelect>
            <h4>Treino</h4>
            <ul>
              {workouts?.map((item, index) => (
                <li key={index}>
                  {item.name}                
                </li>
              ))}
            </ul>
            <RegisterButton func={handlePost}>cadastrar</RegisterButton>
          </Container>
        </ModalBody>
      </div>
    </Body>
    </motion.div>

  );
};

export default RegisterWorkout;
