import React from 'react';
import Modal from 'react-modal';

const RemoveModal = (props) => (
  <Modal
    isOpen={!!props.selectedExpenseToRemove}
    onRequestClose={props.handleClearSelectedExpenseToRemove}
    contentLabel="Remove Expense"
    closeTimeoutMS={200}
    className="modal"
    ariaHideApp={false}
  >
    <h3 className="modal__title">Remove Expense</h3>
    {props.selectedExpenseToRemove && <p className="modal__body">Do you want to remove your expense with id:{props.selectedExpenseToRemove.id} and description: {props.selectedExpenseToRemove.description}?</p>}
   <div className="buttons">
    <button className="button" onClick={props.handleConfirmRemove}>Yes</button>
    <button className="button button--secondary" onClick={props.handleClearSelectedExpenseToRemove}>No</button>
   </div>
  </Modal>
);

export default RemoveModal;