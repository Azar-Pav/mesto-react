import React, { useState, useEffect } from 'react';
import loading from '../images/profile-ava-load.png'
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
  const [userName, setUserName] = useState('Загрузка...');
  const [userDescription, setUserDescription] = useState('Загрузка...');
  const [userAvatar, setUserAvatar] = useState(`${loading}`);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([ api.getInitialCards(), api.getUser() ])
    .then(([ cardsData, userData ]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      setCards(cardsData);
    })
    .catch((err) => {
      console.error(err);
    })
  }, []);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={userAvatar} alt="Аватарка профиля" className="profile__avatar" />
          <button
            type="button"
            className="profile__edit-avatar-btn"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__edit-name">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              name="Редактировать профиль"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          name="Добавить"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section>
        <ul className="elements">
          {
            cards.map((card, i) => (
              <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
            ))
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
