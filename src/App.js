import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import PopupWithForm from "./components/PopupWithForm";
import PopupWithImage from "./components/PopupWithImage";


function App() {
  return (
    <div>
      <Header />
      <Main />
      <PopupWithForm name="editAvatar" title="Обновить аватар" buttonText="Сохранить">
        <input
          type="url"
          class="popup__text-field"
          id="input-avatar"
          name="avatar"
          placeholder="Ссылка на аватарку"
          required
        />
        <span class="input-avatar-error"></span>
      </PopupWithForm>
      <PopupWithForm name="editProfile" title="Редактировать профиль" buttonText="Сохранить">
        <input
          type="text"
          class="popup__text-field"
          id="input-name"
          name="name"
          placeholder="Имя профиля"
          required
          minlength="2"
          maxlength="40"
        />
        <span class="input-name-error"></span>
        <input
          type="text"
          class="popup__text-field"
          id="input-about"
          name="about"
          placeholder="О себе"
          required
          minlength="2"
          maxlength="200"
        />
        <span class="input-about-error"></span>
      </PopupWithForm>
      <PopupWithForm name="addPlace" title="Новое место" buttonText="Сохранить">
        <input
          type="text"
          class="popup__text-field"
          id="input-name"
          name="name"
          placeholder="Название"
          required
          minlength="2"
          maxlength="30"
        />
        <span class="input-name-error"></span>
        <input
          type="url"
          class="popup__text-field"
          id="input-link"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span class="input-link-error"></span>
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
