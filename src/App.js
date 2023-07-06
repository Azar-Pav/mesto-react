import React from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import PopupWithForm from "./components/PopupWithForm";
import PopupWithImage from "./components/PopupWithImage";


function App() {
  const [isEditAvatarPopupOpen,setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  };
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  };
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  };

  return (
    <div>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <PopupWithForm name="editAvatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen}>
        <input
          type="url"
          className="popup__text-field"
          id="input-avatar"
          name="avatar"
          placeholder="Ссылка на аватарку"
          required
        />
        <span className="input-avatar-error"></span>
      </PopupWithForm>
      <PopupWithForm name="editProfile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen}>
        <input
          type="text"
          className="popup__text-field"
          id="input-name"
          name="name"
          placeholder="Имя профиля"
          required
          minLength="2"
          maxLength="40"
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
        />
        <span className="input-about-error"></span>
      </PopupWithForm>
      <PopupWithForm name="addPlace" title="Новое место" buttonText="Сохранить" isOpen={isAddPlacePopupOpen}>
        <input
          type="text"
          className="popup__text-field"
          id="input-name"
          name="name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="input-name-error"></span>
        <input
          type="url"
          className="popup__text-field"
          id="input-link"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="input-link-error"></span>
      </PopupWithForm>
      <PopupWithForm name="deleteConfirm" title="Вы уверены?" buttonText="Да"></PopupWithForm>
      <PopupWithImage />
      <template id="card">
        <li className="elements__element">
          <button
            className="elements__delete"
            aria-label="Удалить"
            type="button"
          ></button>
          <img src="#" alt="#" className="elements__image" />
          <div className="elements__items">
            <h2 className="elements__text"></h2>
            <div className="elements__like-container">
              <button
                className="elements__like"
                aria-label="Нравится"
                type="button"
              ></button>
              <p className="elements__like-counter"></p>
            </div>
          </div>
        </li>
      </template>
      <Footer />
    </div>
  );
}

export default App;
