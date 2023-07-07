import React from 'react';

function Card(props) {

  return (
    <>
      <li className="elements__element">
        <button
          className="elements__delete"
          aria-label="Удалить"
          type="button"
        ></button>
        <img src={props.card.link} alt={props.card.name} className="elements__image" />
        <div className="elements__items">
          <h2 className="elements__text">{props.card.name}</h2>
          <div className="elements__like-container">
            <button
              className="elements__like"
              aria-label="Нравится"
              type="button"
            ></button>
            <p className="elements__like-counter">{props.card.likes.length}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;
