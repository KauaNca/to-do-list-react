//import { useState } from 'react';
import './App.css';
import Input from './components/form/Input.jsx';
import ButtonForm from './components/layout/Button.jsx';

function App() {
  return (
    <>
    <Input name='field-search' label='Pesquisar'/>
    <ButtonForm variant='contained' texto='Asc' handleOnChange={()=>{}}/>
    </>

  );
}

export default App;
