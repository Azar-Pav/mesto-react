import React from 'react';

function PopupWithForm({ name, title, buttonText, onSubmit, isOpen, onClose, children }) {
  return (
    <div className={`popup popup_type-js_${name} ${isOpen && `popup_opened`}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" name="Закрыть" onClick={onClose}></button>
        <h2 className="popup__legend">{title}</h2>
        <form name={name} className="popup__edit-form" noValidate onSubmit={onSubmit}>
          <fieldset className="popup__edit">
            {children}
            <button className="popup__save-button" type="submit" name="Сохранить">{buttonText}</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
