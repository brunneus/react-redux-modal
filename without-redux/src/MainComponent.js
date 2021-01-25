import YesNoModal from './YesNoModal'
import React, { useState } from 'react';
import { openModalButtonStyle, buttonContainerStyle } from './MainComponent.styles'

const MainComponent = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  const [ modalStatus, setModalStatus ] = useState('')

  const closeModal = () => setIsOpen(false)
  const showModal = () => setIsOpen(true)

  const onYesPressed = () => {
    setModalStatus("User pressed yes")
    closeModal()
  } 

  const onNoPressed = () => {
    setModalStatus("User pressed no")
    closeModal()
  }

  return (
    <>
      <div style={buttonContainerStyle}>
        <button style={openModalButtonStyle} onClick={showModal}>Open</button>
        { modalStatus ?? <span>{ modalStatus }</span> }
      </div>
      <YesNoModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        onYesPressed={onYesPressed}
        onNoPressed={onNoPressed}
      />
    </>
  );
};

export default MainComponent;

