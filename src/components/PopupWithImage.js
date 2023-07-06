import React from 'react';

function PopupWithImage() {
  return (
    <>
      <div className="popup popup_type-js_image">
        <div className="popup__img-window">
          <button
            className="popup__close-button"
            type="button"
            name="Закрыть"
          ></button>
          <img src="#" alt="#" className="popup__image" />
          <p className="popup__card-text"></p>
        </div>
      </div>
    </>
  );
}

export default PopupWithImage;
