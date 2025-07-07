// Открываем модальное окно
function openModal() {
  document.getElementById('modal-window').classList.add('active');
  document.getElementById('overlay').classList.add('active');
  document.getElementById('modal-window-header').textContent = 'Оставить заявку';
  document.querySelector('.modal-window-subtext').style.display = 'block';
  document.querySelector('.modal-window').querySelectorAll('input').forEach(i => i.style.display = 'block');
  document.querySelector('.modal-window .checkbox').style.display = 'flex';
}

// Закрываем модальное окно
function closeModal() {
  document.getElementById('modal-window').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}

// Имитируем отправку формы и сообщаем, что всё ок
function submitForm() {
  document.getElementById('modal-window-header').textContent = 'Спасибо за заявку';
  document.querySelector('.modal-window-subtext').textContent = 'Наши менеджеры свяжутся с вами в течение 5 минут';
  document.querySelector('.modal-window').querySelectorAll('input').forEach(i => i.style.display = 'none');
  document.querySelector('.modal-window .btn').style.display = 'none';
  document.querySelector('.modal-window .checkbox').style.display = 'none';
  document.querySelector('.modal-window-subtext').style.marginBottom = '0'; // иначе отступ 56px
}