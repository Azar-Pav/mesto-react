import React from 'react';

function PopupWithImage() {
  return (
    <>
      <div class="popup popup_type-js_image">
        <div class="popup__img-window">
          <button
            class="popup__close-button"
            type="button"
            name="Закрыть"
          ></button>
          <img src="#" alt="#" class="popup__image" />
          <p class="popup__card-text"></p>
        </div>
      </div>
    </>
  );
}

export default PopupWithImage;
