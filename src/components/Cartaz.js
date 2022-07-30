import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Cartaz() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v7/cineflex/movies"
    );
    promise.then((resposta) => {
      setFilmes(resposta.data);
    });
  }, []);

  return (
    <>
      <Titulo>Selecione o filme</Titulo>
      <Container>
        {filmes.map((filme, value) => (
          <Filme key={value}>
            <img src={filme.posterURL} alt="post" />
          </Filme>
        ))}
      </Container>
    </>
  );
}

const Titulo = styled.h1`
  margin: 50px 0;
  font-family: "Roboto";
  font-size: 1.5em;
`;

const Container = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Filme = styled.li`
  width: 170px;
  height: 250px;
  border-radius: 10px;
  border: 1;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  & img {
    width: 150px;
    height: 230px;
  }
`;
