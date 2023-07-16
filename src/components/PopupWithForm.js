import React from 'react';

function PopupWithForm(props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit();
  }

  return (
    <div className={`popup popup_type-js_${props.name} ${props.card._id && `popup_opened`}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" name="Закрыть" onClick={props.onClose}></button>
        <h2 className="popup__legend">{props.title}</h2>
        <form name={props.name} className="popup__edit-form" noValidate onSubmit={handleSubmit}>
          <fieldset className="popup__edit">
            <button className="popup__save-button" type="submit" name="Сохранить">{buttonText}</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
