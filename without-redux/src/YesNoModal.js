import React from 'react';
import Modal from 'react-modal';

const customStyles = {
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

const YesNoModal = ({ isOpen, onRequestClose, onYesPressed, onNoPressed }) => {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Example Modal"
    style={customStyles}
  >
    <div>Are you sure?</div>

    <div>
      <button style={buttonStyle} onClick={onYesPressed}>Yes</button>
      <button style={buttonStyle} onClick={onNoPressed}>No</button>
    </div>
  </Modal>
  );
};

export default YesNoModal;
  