import React, { useState, useEffect, useContext } from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CurrentButtonTextContext } from '../contexts/CurrentButtonTextContext';

function EditProfilePopup(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const currentUser = useContext(CurrentUserContext);
  const currentButton = useContext(CurrentButtonTextContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы (страница не обновляется)
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({ name, about: description });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  return (
    <>
      <PopupWithForm name="editProfile" title="Редактировать профиль"
        buttonText={currentButton.formPopup}
        onSubmit={handleSubmit}
        isOpen={props.isOpen}
        onClose={props.onClose}
        isLoading={currentButton.isLoading}
      >
        <input
          type="text"
          className="popup__text-field"
          id="input-name"
          name="name"
          placeholder="Имя профиля"
          required
          minLength="2"
          maxLength="40"
          onChange={handleNameChange}
          value={name}
        />
        <span className="input-name-error"></span>
        <input
          type="text"
          className="popup__text-field"
          id="input-about"
          name="about"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200"
          onChange={handleDescriptionChange}
          value={description}
        />
        <span className="input-about-error"></span>
    </PopupWithForm>
  </>


  );
}

export default EditProfilePopup;
