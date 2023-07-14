import React, { useRef, useEffect } from 'react';

function EditAvatarPopup(props) {
  const inputRef = useRef();

  function handleAvatarClick() {
    inputRef.current.focus();
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateAvatar({ avatar: inputRef.current.value });
  }

  useEffect(() => {
    inputRef.current.value='';
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
        <form name={props.name} className="popup__edit-form" noValidate onSubmit={handleSubmit}>
          <fieldset className="popup__edit">
          <input
            type="url"
            className="popup__text-field"
            id="input-avatar"
            name="avatar"
            placeholder="Ссылка на аватарку"
            required
            ref={inputRef}
            onClick={handleAvatarClick}
          />
          <span className="input-avatar-error"></span>
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

export default EditAvatarPopup;
