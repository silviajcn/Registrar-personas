import React from 'react';
import Footer from './components/Footer';
// import Form from './components/Form';
import Form from './components/Form';
import NavBar from './components/NavBar';
import { ContainerApp, ContainerFormList } from './styles/Styles.elements';

const App = () => {
  return (
    <ContainerApp>

      <NavBar />
      
      <ContainerFormList>
        <h1>Registro de personas</h1>
        <Form />
      </ContainerFormList>

      <Footer />

    </ContainerApp>
  )
};

export default App;