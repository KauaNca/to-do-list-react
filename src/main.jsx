import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

//Por agora só apliquei palette
const tema = createTheme({
  palette: {
    background: {
      default: "#e4e4e4", // cor de fundo da página
      paper: "#ffffff"    // cor de fundo para elementos elevados
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={tema}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
)

//ANOTAÇÕES
/*
  CssBaseline: Normaliza o CSS entre os navegadores.
  ThemeProvider: Permite aplicar um tema personalizado a todos os componentes filhos. Por padrão, ele é colocado
  em um nível alto na árvore de componentes para que os temas sejam aplicados globalmente e os filhos possam herdar o tema.

  createTheme: Função que cria um tema personalizado para a aplicação. Ele permite criar um OBJETO de tema com propriedades
  específicas, como paleta de cores, tipografia, espaçamento, etc. Esse tema pode ser passado para o ThemeProvider para
  aplicar estilos consistentes em toda a aplicação.
  O ThemeProvider lê as palavras-chave do tema e aplica os estilos correspondentes aos componentes filhos.
*/
