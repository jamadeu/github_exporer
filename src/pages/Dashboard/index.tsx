import React from 'react';
import {FiChevronRight} from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={LogoImg} alt="Github Explorer"/>
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="IMG"
            alt="IMG"
          />
          <div>
            <strong>Repo</strong>
            <p>Descrição</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
