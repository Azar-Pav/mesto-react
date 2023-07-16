import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import api from '../utils/Api.js';
import { CurrentUserContext, loadingUser } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmDeletePopup from "./ConfirmDeletePopup";
import ImagePopup from "./ImagePopup";


function App() {
  const [isEditAvatarPopupOpen,setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);

  const [currentUser, setCurrentUser] = useState(loadingUser);

  useEffect(() => {
    Promise.all([ api.getUser(), api.getInitialCards() ])
    .then(([ userData, cardsData ]) => {
      setCurrentUser(userData);
      setCards(cardsData);
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

  function handleUpdateUser({ name, about }) {
    api.patchUser({ name, about })
    .then((userData) => {
      setCurrentUser(userData);
      closeAllPopups();
    })
    .catch((err) => {
      console.error(err);
    })
  };

  function handleUpdateAvatar({ avatar }) {
    api.patchUserAvatar({ avatar })
    .then((userData) => {
      setCurrentUser(userData);
      closeAllPopups();
    })
    .catch((err) => {
      console.error(err);
    })
  };

  function handleAddPlace({ name, link }) {
    api.sendCard({ name, link })
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch((err) => {
      console.error(err);
    })
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
      .then((newCard) => renderCard(newCard))
      .catch((err) => {
        console.error(err);
      });
    } else {
      api.deleteLike(card._id)
      .then((newCard) => renderCard(newCard))
      .catch((err) => {
        console.error(err);
      });
    }
  }

  function handleCardDelete() {
    const cardsWithoutCard = cards.filter((c) => c._id !== selectedCard._id);

    api.deleteCard(selectedCard._id)
    .then((res) => {
      setCards(cardsWithoutCard)
    })
    .then((res) => {
      closeAllPopups()
    })
    .catch((err) => {
      console.error(err);
    });
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
        onCardDelete={handleCardDelete}
        cards={cards}
      />
      <Footer />
      <EditAvatarPopup name="editAvatar" title="Обновить аватар" buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <EditProfilePopup name="editProfile" title="Редактировать профиль" buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <AddPlacePopup name="addPlace" title="Новое место" buttonText="Сохранить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlace}
      />
      <ConfirmDeletePopup name="deleteConfirm" title="Вы уверены?" buttonText="Да"
        onSubmit={handleCardDelete}
        isOpen={selectedCard}
        onClose={closeAllPopups}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </CurrentUserContext.Provider>
  );
}

export default App;
