import React, { useEffect } from 'react';
import './Notification.css';

function Notification({ message, type, isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000); // Auto-close após 4 segundos

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]); //onClose como dependência para que a função mais recente seja usada

  /*
onClose é uma prop que pode variar, incluí-la nas dependências garante que:
✅ Sempre use a função mais recente que foi passada
✅ Funcione corretamente mesmo que o onClose mude
✅ Seja reutilizável com diferentes comportamentos de fechamento
  */

  if (!isVisible) return null;

  // Separar título e mensagem
  //Função anônima para retornar o conteúdo baseado no tipo e mensagem
  const getNotificationContent = () => {
    if (type === 'success') {
      if (message.includes('removida') || message.includes('deletada')) {
        return {
          title: 'Tarefa removida',
          text: 'A tarefa foi deletada com sucesso.'
        };
      }
      return {
        title: 'Tarefa adicionada!',
        text: 'Sua nova tarefa foi criada com sucesso.'
      };
    } else if (type === 'error') {
      if (message.includes('digite')) {
        return {
          title: 'Oops!',
          text: 'Por favor, digite uma tarefa.'
        };
      }
      return {
        title: 'Erro!',
        text: message
      };
    }
    return { title: '', text: message };
  };

  const { title, text } = getNotificationContent();

  return (
    <div className={`notification notification--${type}`}>
      <div className="notification__content">
        <div className="notification__message">
          {title && <span className="notification__title">{title}</span>}
          <span className="notification__text">{text}</span>
        </div>
        <button className="notification__close" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
}

export default Notification;