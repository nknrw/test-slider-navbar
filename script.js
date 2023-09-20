// Список данных для карточек (просто пример)
const cardData = [
  { icon: "bi bi-house-door", text: "Карточка 1" },
  { icon: "bi bi-person", text: "Карточка 2" },
  { icon: "bi bi-envelope", text: "Карточка 3" },
  { icon: "bi bi-award", text: "Карточка 4" },
  { icon: "bi bi-bag-check", text: "Карточка 5" },
  { icon: "bi bi-calendar", text: "Карточка 6" },
  { icon: "bi bi-credit-card", text: "Карточка 7" },
  { icon: "bi bi-bookmark-heart", text: "Карточка 8" },
  { icon: "bi bi-camera", text: "Карточка 9" },
  { icon: "bi bi-chat-left-quote", text: "Карточка 10" },
  { icon: "bi bi-check", text: "Карточка 11" },
  { icon: "bi bi-cup", text: "Карточка 12" },
  { icon: "bi bi-file-earmark-code", text: "Карточка 13" },
  { icon: "bi bi-film", text: "Карточка 14" },
  { icon: "bi bi-globe2", text: "Карточка 15" },
  { icon: "bi bi-headphones", text: "Карточка 16" },
  { icon: "bi bi-lightbulb", text: "Карточка 17" },
  { icon: "bi bi-music-note", text: "Карточка 18" },
  { icon: "bi bi-pen", text: "Карточка 19" },
  { icon: "bi bi-phone", text: "Карточка 20" },
  { icon: "bi bi-shield", text: "Карточка 21" },
  { icon: "bi bi-star", text: "Карточка 22" },
  { icon: "bi bi-sun", text: "Карточка 23" },
  { icon: "bi bi-tools", text: "Карточка 24" },
  { icon: "bi bi-tv", text: "Карточка 25" },
  { icon: "bi bi-watch", text: "Карточка 26" },
  { icon: "bi bi-wifi", text: "Карточка 27" },
  { icon: "bi bi-apple", text: "Карточка 28" },
  { icon: "bi bi-github", text: "Карточка 29" },
  { icon: "bi bi-google", text: "Карточка 30" },
];

// Создание навигационных ссылок и карточек
const navbarNav = document.getElementById("navbarNav");
const cardContainer = document.getElementById("cardContainer");

cardData.forEach((item, index) => {
  // Создание навигационной ссылки
  const navItem = document.createElement("li");
  navItem.className = "nav-item";
  const navLink = document.createElement("a");
  navLink.className = "nav-link";
  navLink.href = `#card${index + 1}`;
  navLink.innerHTML = `<span class="${item.icon}"></span>`;
  navItem.appendChild(navLink);
  navbarNav.appendChild(navItem);

  // Создание карточки
  const cardColumn = document.createElement("div");
  cardColumn.className = "col-md-4";
  const card = document.createElement("div");
  card.className = "card mb-3";
  card.id = `card${index + 1}`;
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardBody.innerHTML = `<span class="${item.icon}"></span><p class="card-text">${item.text}</p>`;
  card.appendChild(cardBody);
  cardColumn.appendChild(card);
  cardContainer.appendChild(cardColumn);
});

// Инициализация слайдера
$("#navbarNav").slick({
  infinite: true,
  slidesToShow: 10,
  slidesToScroll: 10,
  arrows: false,
});
