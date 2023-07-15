import React, { useRef, useEffect } from 'react';

function AddPlacePopup(props) {
  const nameInputRef = useRef();
  const urlInputRef = useRef();

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddPlace({ name: nameInputRef.current.value, link: urlInputRef.current.value });
  }

  useEffect(() => {
    nameInputRef.current.value='';
    urlInputRef.current.value='';
  }, [props.isOpen]);

  return (
    <div
      className={`popup popup_type-js_${props.name} ${
        props.isOpen && `popup_opened`
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          name="Закрыть"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__legend">{props.title}</h2>
        <form
          name={props.name}
          className="popup__edit-form"
          noValidate
          onSubmit={handleSubmit}
        >
          <fieldset className="popup__edit">
            <input
              type="text"
              className="popup__text-field"
              id="input-name"
              name="name"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
              ref={nameInputRef}
            />
            <span className="input-name-error"></span>
            <input
              type="url"
              className="popup__text-field"
              id="input-link"
              name="link"
              placeholder="Ссылка на картинку"
              required
              ref={urlInputRef}
            />
            <span className="input-link-error"></span>
            <button
              className="popup__save-button"
              type="submit"
              name="Сохранить"
            >
              {props.buttonText}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default AddPlacePopup;
