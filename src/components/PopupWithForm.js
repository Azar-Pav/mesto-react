import React from 'react';

function PopupWithForm(props) {
  return (
    <>
      <div className={`popup popup_type-js_${props.name}`}>
        <div className="popup__container">
          <button className="popup__close-button" type="button" name="Закрыть"></button>
          <h2 className="popup__legend">{props.title}</h2>
          <form name={props.name} className="popup__edit-form" noValidate>
            <fieldset className="popup__edit">
              {props.children}
              <button className="popup__save-button" type="submit" name="Сохранить">{props.buttonText}</button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
