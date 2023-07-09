import React, { useState } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {
  const [isEditAvatarPopupOpen,setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  };
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  };
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  };

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  };

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm name="editAvatar" title="Обновить аватар" buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
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
      <PopupWithForm name="editProfile" title="Редактировать профиль" buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="popup__text-field"
          id="input-name"
          name="name"
          placeholder="Имя профиля"
          required
          minLength="2"
          maxLength="4{}"
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
          maxLength="2{}{}"
        />
        <span className="input-about-error"></span>
      </PopupWithForm>
      <PopupWithForm name="addPlace" title="Новое место" buttonText="Сохранить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="popup__text-field"
          id="input-name"
          name="name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="3{}"
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
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </>
  );
}

export default App;
