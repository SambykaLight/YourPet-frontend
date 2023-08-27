import React, { useEffect } from 'react';
import { ModalOverlay, ModalContent, CloseButton } from './Modal.styled';
import { useModalContext } from './Context/Context';

function Modal({ children, openButtonLabel }) {

const context = useModalContext()

const { toggleValue, toggle } = context

  const toggleModal = () => {
    toggle(!context.toggleValue);
  };
  
  const close = () => {
    toggle(false);
  };

  useEffect(() => {
    const closeOnEscape = event => {
      if (event.key === 'Escape') {
        close();
      }
    };

    if (toggleValue) {
      window.addEventListener('keydown', closeOnEscape);
    } else {
      window.removeEventListener('keydown', closeOnEscape);
    }
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [toggleValue]);

  return (
  
      <div>
        <button className="open-button" onClick={toggleModal}>
          {openButtonLabel}
        </button>

        <ModalOverlay className={toggleValue ? 'active' : ''} onClick={close}>
          <ModalContent
            className={toggleValue ? 'active' : ''}
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
