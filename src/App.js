import logo from './images/header-logo.svg';

function App() {
  return (
  <div>
    <header className="header">
      <img src={logo} alt="Место Россия" className="header__logo" />
    </header>
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src="<%=require('./images/profile-avatar.jpg')%>" alt="Аватарка профиля" className="profile__avatar" />
          <button type="button" className="profile__edit-avatar-btn"></button>
        </div>
        <div className="profile__info">
          <div className="profile__edit-name">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__edit-button" type="button" name="Редактировать профиль"></button>
          </div>
          <p className="profile__about">Исследователь океана</p>
        </div>
        <button className="profile__add-button" type="button" name="Добавить"></button>
      </section>
      <section>
        <ul className="elements">

        </ul>
      </section>
    </main>
    <div className="popup popup_type-js_edit">
      <div className="popup__container">
        <button className="popup__close-button" type="button" name="Закрыть"></button>
        <h2 className="popup__legend">Редактировать профиль</h2>
        <form name="editNameAbout" className="popup__edit-form" noValidate>
          <fieldset className="popup__edit">
            <input
              type="text"
              className="popup__text-field"
              id="input-name"
              name="name"
              placeholder="Имя профиля"
              required minLength="2" maxLength="40" />
            <span className="input-name-error"></span>
            <input
              type="text"
              className="popup__text-field"
              id="input-about"
              name="about"
              placeholder="О себе"
              required minLength="2" maxLength="200" />
            <span className="input-about-error"></span>
            <button className="popup__save-button" type="submit" name="saveChanges">Сохранить</button>
          </fieldset>
        </form>
      </div>
    </div>
    <div className="popup popup_type-js_ava">
      <div className="popup__container">
        <button className="popup__close-button" type="button" name="Закрыть"></button>
        <h2 className="popup__legend">Обновить аватар</h2>
        <form name="editNameAbout" className="popup__edit-form" noValidate>
          <fieldset className="popup__edit">
            <input
              type="url"
              className="popup__text-field"
              id="input-avatar"
              name="avatar"
              placeholder="Ссылка на аватарку"
              required />
            <span className="input-avatar-error"></span>
            <button className="popup__save-button" type="submit" name="saveChanges">Сохранить</button>
          </fieldset>
        </form>
      </div>
    </div>
    <div className="popup popup_type-js_add">
      <div className="popup__container">
        <button className="popup__close-button" type="button" name="Закрыть"></button>
        <h2 className="popup__legend">Новое место</h2>
        <form name="addNamedLink" className="popup__edit-form" noValidate>
          <fieldset className="popup__edit">
            <input
              type="text"
              className="popup__text-field"
              id="input-named"
              name="name"
              placeholder="Название"
              required minLength="2" maxLength="30" />
            <span className="input-named-error"></span>
            <input
              type="url"
              className="popup__text-field"
              id="input-link"
              name="link"
              placeholder="Ссылка на картинку"
              required />
            <span className="input-link-error"></span>
            <button className="popup__save-button" type="submit" name="saveChanges">Сохранить</button>
          </fieldset>
        </form>
      </div>
    </div>
    <div className="popup popup_type-js_confirm">
      <div className="popup__container">
        <button className="popup__close-button" type="button" name="Закрыть"></button>
        <h2 className="popup__legend">Вы уверены?</h2>
        <form name="deleteCard" className="popup__edit-form" noValidate>
          <button className="popup__save-button" type="submit" name="saveChanges">Да</button>
        </form>
      </div>
    </div>
    <div className="popup popup_type-js_image">
      <div className="popup__img-window">
        <button className="popup__close-button" type="button" name="Закрыть"></button>
        <img src="#" alt="#" className="popup__image" />
        <p className="popup__card-text"></p>
      </div>
    </div>
    <template id="card">
      <li className="elements__element">
        <button className="elements__delete" aria-label="Удалить" type="button"></button>
        <img src="#" alt="#" className="elements__image" />
        <div className="elements__items">
          <h2 className="elements__text"></h2>
          <div className="elements__like-container">
            <button className="elements__like" aria-label="Нравится" type="button"></button>
            <p className="elements__like-counter"></p>
          </div>
        </div>
      </li>
    </template>
    <footer className="footer">
      <p className="footer__copyright">&copy; 2023 Mesto Russia</p>
    </footer>
  </div>
  );
}

export default App;
