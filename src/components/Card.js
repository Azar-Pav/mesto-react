import React from 'react';

function Card(props) {
  const card = props.card;

  function handleClick() {
    props.onCardClick(card);
  };

  return (
    <>
      <li className="elements__element">
        <button
          className="elements__delete"
          aria-label="Удалить"
          type="button"
        ></button>
        <img src={card.link} alt={card.name} className="elements__image" onClick={handleClick} />
        <div className="elements__items">
          <h2 className="elements__text">{card.name}</h2>
          <div className="elements__like-container">
            <button
              className="elements__like"
              aria-label="Нравится"
              type="button"
            ></button>
            <p className="elements__like-counter">{card.likes.length}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;
