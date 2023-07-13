import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import api from '../utils/Api.js';
import { CurrentUserContext, loadingUser } from '../contexts/CurrentUserContext.js';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {
  const [isEditAvatarPopupOpen,setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);

  const [currentUser, setCurrentUser] = useState(loadingUser);

  useEffect(() => {
    api.getUser()
    .then((userData) => {
      setCurrentUser(userData);
    })
    .catch((err) => {
      console.error(err);
    })
  }, [])

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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const renderCard = (newCard) => {
      setCards((state) => state.map(
        (c) => c._id === card._id ? newCard : c
      ));
    }
    if (!isLiked) {
      api.putLike(card._id)
      .then((newCard) => renderCard(newCard));
    } else {
      api.deleteLike(card._id)
      .then((newCard) => renderCard(newCard));
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        cards={cards}
        setCards={setCards}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
