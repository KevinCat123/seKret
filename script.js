// Получаем контейнер для записей
const postList = document.getElementById("post-list");

// Функция для добавления новой записи
function addPost(text) {
  const post = document.createElement("div");
  post.className = "post";
  post.innerText = text;
  postList.appendChild(post);
}

// Пример: добавим одну запись при загрузке
addPost("🔐 Это пример записи. В будущем здесь будут ваши тексты.");

// Здесь можно будет добавить форму и новые функции позже
