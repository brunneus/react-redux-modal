import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux'

const modalStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const buttonStyle = {
  width: 120,
  height: 50,
  marginRight: 20,
  marginTop: 20
}

const YesNoModal = ({ closeModal, showModal, onYesPressed, onNoPressed }) => {

  const handleYesPressed = () => {
    onYesPressed()
    closeModal()
  }

  const handleNoPressed = () => {
    onNoPressed()
    closeModal()
  }

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={modalStyle}
  >
    <div>Are you sure?</div>

    <div>
      <button style={buttonStyle} onClick={handleYesPressed}>Yes</button>
      <button style={buttonStyle} onClick={handleNoPressed}>No</button>
    </div>
  </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    showModal: state.modalsStore.showYesNoModal 
  }
}

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch({ type: "HideYesNoModal" })
})

export default connect(mapStateToProps, mapDispatchToProps)(YesNoModal);
  