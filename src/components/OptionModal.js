import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectOption}
        onRequestClose={props.handleSelectOption}
        contentLabel = "Selected Option">
        <h3>Selected Option</h3>
        <button onClick={props.handleSelectOption}>OKAY</button>
    </Modal>      
)

export default OptionModal;