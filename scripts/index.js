let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__text-input_author');
let jobInput = document.querySelector('.popup__text-input_description');
let jobValue = document.querySelector('.profile__text-field_type_description');
let nameValue = document.querySelector('.profile__text-field_type_author');

function closePopup() {
  popup.classList.remove('popup_opened');
}

function openPopup () {
  popup.classList.add('popup_opened');
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
}

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
  let name = nameInput.value;
  let job = jobInput.value;
  jobValue.textContent = job;
  nameValue.textContent = name;
  closePopup();
}

closeButton.addEventListener ('click', closePopup);
editButton.addEventListener('click', openPopup);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 
