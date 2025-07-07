// Считаем цену за год и выводим
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('billingToggle');
  const prices = document.querySelectorAll('.price');

  toggle.addEventListener('change', function () {
    prices.forEach(function (el) {
      const monthPrice = parseInt(el.dataset.month);
      let value = toggle.checked ? monthPrice * 12 : monthPrice;
      
      el.textContent = value.toLocaleString('ru-RU');
    });
  });

  toggle.addEventListener('mouseleave', function () { // снимаем состояние focus с переключателя
    toggle.blur();
  });
});
