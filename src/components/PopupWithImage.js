import React from 'react';

function PopupWithImage(props) {
  const card = props.card;

  return (
    <>
      <div className={`popup popup_type-js_image  ${card && `popup_opened`}`}>
        <div className="popup__img-window">
          <button
            className="popup__close-button"
            type="button"
            name="Закрыть"
            onClick={props.onClose}
          ></button>
          <img src={card.link} alt={card.name} className="popup__image" />
          <p className="popup__card-text">{card.name}</p>
        </div>
      </div>
    </>
  );
}

export default PopupWithImage;
