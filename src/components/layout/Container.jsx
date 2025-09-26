import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function SimpleContainer({ maxWidth, bgcolor, height, ...props}) {
    //Por agora deixar essa borda para visualizar o container
    let sx = {
    border: "1px solid black",
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={maxWidth} sx={sx}>
        <Box sx={{ bgcolor: { bgcolor }, height: { height } }}>
          {props.children} {/* Renderiza os componentes filhos passados para SimpleContainer*/}
        </Box>
      </Container>
    </React.Fragment>
  );
}

//ANOTAÇÕES
/*
    CSSBaseline: Normaliza o CSS entre os navegadores.
    Container: é uma caixa responsiva que centraliza o conteúdo horizontalmente.
    Tem propriedades como maxWidth, fixed e disableGutters para controlar o layout.

    Box: é um componente versátil | genérico que pode ser usado para criar layouts e aplicar estilos.
*/
