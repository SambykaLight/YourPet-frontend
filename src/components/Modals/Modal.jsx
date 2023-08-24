import React, { useState, useEffect } from 'react';
import { ModalOverlay, ModalContent, CloseButton } from './Modal.styled';

function Modal({ children, openButtonLabel }) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const close = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const closeOnEscape = event => {
      if (event.key === 'Escape') {
        close();
      }
    };

    if (showModal) {
      window.addEventListener('keydown', closeOnEscape);
    } else {
      window.removeEventListener('keydown', closeOnEscape);
    }
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [showModal]);

  return (
    <div>
      <button className="open-button" onClick={toggleModal}>
        {openButtonLabel}
      </button>

      <ModalOverlay className={showModal ? 'active' : ''} onClick={close}>
        <ModalContent
          className={showModal ? 'active' : ''}
          onClick={e => e.stopPropagation()}
        >
          {children}

          <CloseButton onClick={toggleModal}>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </CloseButton>
        </ModalContent>
      </ModalOverlay>
    </div>
  );
}

export default Modal;
