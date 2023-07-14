import React, { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const currentUser = useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({ name, about: description });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

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

export default EditProfilePopup;
