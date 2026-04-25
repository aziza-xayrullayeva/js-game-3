// Kerakli html tag lariga ulanish
const first_player_img = document.querySelector(".first__player");
const second_player_img = document.querySelector(".second__player");
const result = document.querySelector(".result");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  // Tasodifiy sonlarni generatsiya qilish
  const first_random_number = Math.round(Math.random() * 2);
  const second_random_number = Math.round(Math.random() * 2);

  // Birinchi o'yinchi uchun rasm chiqarish
  if (first_random_number == 0) {
    first_player_img.setAttribute("src", "./img/paper.png");
  } else if (first_random_number == 1) {
    first_player_img.setAttribute("src", "./img/rock.png");
  } else {
    first_player_img.setAttribute("src", "./img/scissors.png");
  }
  // ikkinchi o'yinchi uchun tasodifiy rasm chiqarish
  if (second_random_number == 0) {
    second_player_img.setAttribute("src", "./img/paper.png");
  } else if (second_random_number == 1) {
    second_player_img.setAttribute("src", "./img/rock.png");
  } else {
    second_player_img.setAttribute("src", "./img/scissors.png");
  }

  // 0 - paper
  // 1 - rock
  // 2 - scissors

  if(first_random_number == 0 && second_random_number == 1 ) {
    result.textContent='Siz yutdingiz!'
  } else if(first_random_number == 1 && second_random_number == 2) {
    result.textContent = 'Siz yutdingiz!'
  } else if(first_random_number == 2 && second_random_number == 0) {
    result.textContent = 'Siz yutdingiz!'
  } else if(first_random_number == second_random_number) {
    result.textContent = 'Durrang!'
  } else {
    result.textContent('Siz yutqazdingiz!')
  }
});
