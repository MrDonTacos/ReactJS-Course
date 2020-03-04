import React from 'react';
import Modal from 'react-modal'


const OptionModal = (props) => (
    <Modal 
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleHideModal}
    contentLabel="Selected Option"
    >
        <h1>Selected Option</h1>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleHideModal}>Okay</button>
    </Modal>
);
export default OptionModal;