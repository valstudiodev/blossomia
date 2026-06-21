"use strict"

export function formUtils() {
  typeSwitcher()
  initCartAdd()
}
// ===========================================================================================

// ===========================================================================================
// -----------------------------
// typeSwitcher form
// -----------------------------
export function typeSwitcher() {
  // Знаходимо всі інпути з класом 'type-switcher'
  const inputs = document.querySelectorAll('.type-switcher');

  inputs.forEach(input => {
    const desiredType = input.getAttribute('data-type');
    // 🔑 Ключова зміна: Зберігаємо початковий текст placeholder
    const originalPlaceholder = input.getAttribute('data-placeholder');

    // 1. Обробник події ФОКУС (focus)
    input.addEventListener('focus', function () {
      // Змінюємо тип на бажаний ('date' або 'time')
      this.type = desiredType;
    });

    // 2. Обробник події ВТРАТА ФОКУСУ (blur)
    input.addEventListener('blur', function () {

      // 1. Перевіряємо, чи поточний тип — це той, який ми хочемо приховати
      if (this.type === desiredType) {

        // 2. Ключова перевірка: Якщо поле візуально порожнє
        if (this.value === "") {

          // 🔑 КРОК ВИПРАВЛЕННЯ: Примусово скидаємо значення перед зміною типу.
          // Це обходить проблеми кешування та внутрішніх значень браузера.
          this.value = "";

          // Повертаємо тип назад на 'text'
          this.type = 'text';

          // Відновлюємо placeholder
          this.placeholder = originalPlaceholder;
        }
      }
    });

    // 3. Додатковий крок: Встановлюємо правильний тип, якщо є значення при завантаженні
    if (input.value) {
      input.type = desiredType;
    }

    // Переконаємось, що інпут починає з 'text' і має коректний placeholder
    if (!input.value && input.type !== 'text') {
      input.type = 'text';
      input.placeholder = originalPlaceholder;
    }
  });
}



let cartCount = 0

function updateCounter(currentCount, quantity) {
  return currentCount + quantity
}
function renderCounter(count) {
  const basket = document.querySelector(`.card-basket span`)
  if (!basket) return

  basket.textContent = String(count)
}
function handleAddToCart(event) {
  event.preventDefault();

  const newCount = updateCounter(cartCount, 1);

  cartCount = newCount;
  renderCounter(cartCount);
}
function initCartAdd() {
  renderCounter(0)

  document.addEventListener('click', (e) => {
    const target = e.target

    const btn = target.closest('.actions__button--icon-card-icon')
    if (!btn) return

    handleAddToCart(e)
  });
}


let favoriteCount = 0

function updateCounterFavorite(currentCount, quantity) {
  return currentCount + quantity
}
function renderConterFavorite(count) {
  const favoriteContainer = document.querySelector(`.action-button__link--icon-like span`)
  if (!favoriteContainer) return

  favoriteContainer.textContent = String(count)
}
function handleFavoriteCart(event) {
  event.preventDefault()

  const newCount = updateCounterFavorite(favoriteCount, 1)

  favoriteCount = newCount
  renderConterFavorite(favoriteCount)
}
function initFavoriteCart() {
  renderConterFavorite(0)

  document.addEventListener('click', (e) => {
    const target = e.target

    const btnFavorite = target.closest('.actions__button--icon-like')
    if (!btnFavorite) return

    handleFavoriteCart(e)
  });
}
initFavoriteCart()