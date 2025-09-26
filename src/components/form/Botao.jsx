import './Botao.css';

function Botao({ onClick, children, tipo = 'adicionar' }) {
  return (
    <button 
      className={`botao botao--${tipo}`}
      onClick={onClick}
      type="button"
    >
      {children || '+'}
    </button>
  );
}

export default Botao;