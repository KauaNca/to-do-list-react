import "./App.css";
import SimpleContainer from "./components/layout/Container";
import React from "react";
import Input from "./components/form/Input";

function App() {
  return (
    <>
      <SimpleContainer maxWidth="false" bgcolor="white" height="90vh">
        <Input placeholder="Digite algo..." />
      </SimpleContainer>
    </>
  );
}

export default App;
