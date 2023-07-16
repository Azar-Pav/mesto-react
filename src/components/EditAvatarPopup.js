import React, { useRef, useEffect } from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const inputRef = useRef();

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы (страница не обновляется)
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateAvatar({ avatar: inputRef.current.value });
  }

  useEffect(() => {
    inputRef.current.value='';
  }, [props.isOpen]);

  return (
    <>
      <PopupWithForm name="editAvatar" title="Обновить аватар"
        buttonText="Сохранить"
        onSubmit={handleSubmit}
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <input
          type="url"
          className="popup__text-field"
          id="input-avatar"
          name="avatar"
          placeholder="Ссылка на аватарку"
          required
          ref={inputRef}
        />
        <span className="input-avatar-error"></span>
      </PopupWithForm>
    </>
  );
}

export default EditAvatarPopup;
