import React from 'react';
import PopupWithForm from "./PopupWithForm";

function ConfirmDeletePopup(props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit();
  }

  return (
    <>
      <PopupWithForm name="deleteConfirm" title="Вы уверены?"
        buttonText="Да"
        onSubmit={handleSubmit}
        isOpen={props.isOpen._id}
        onClose={props.onClose}
      />
    </>
  );
}

export default ConfirmDeletePopup;
