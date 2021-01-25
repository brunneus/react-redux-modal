import YesNoModal from './YesNoModal'
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { openModalButtonStyle, buttonContainerStyle } from './MainComponent.styles'

const MainComponent = ({ showYesNoModal }) => {
  const [ modalStatus, setModalStatus ] = useState('')

  const onYesPressed = () => {
    setModalStatus("User pressed yes")
  } 

  const onNoPressed = () => {
    setModalStatus("User pressed no")  
  }

  return (
    <>
      <div style={buttonContainerStyle}>
        <button style={openModalButtonStyle} onClick={showYesNoModal}>Open</button>
        { modalStatus ?? <span>{ modalStatus }</span> }
      </div>
      <YesNoModal
        id="modal-id"
        onYesPressed={onYesPressed}
        onNoPressed={onNoPressed}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showYesNoModal: () => dispatch({ type: "ShowYesNoModal" })
})

export default connect(null, mapDispatchToProps)(MainComponent);
