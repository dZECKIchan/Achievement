const chooseFileButton = document.getElementById("file-choose");
const icon = document.querySelector("img");

chooseFileButton.addEventListener("change", () => {
  const file = chooseFileButton.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    icon.src = e.target.result;
  };
  reader.readAsDataURL(file);
});

const headline = document.querySelectorAll('input')[0];
const description = document.querySelectorAll('input')[1];
const headlineText = document.getElementsByClassName('text_achievement')[0];
const descriptionText = document.getElementById('description');

headline.value = "Достижение получено!";
description.value = "Ваш текст"

function editAchievementText(event, text){
    const eventText = event.value
    text.innerText = eventText
}

headline.addEventListener('input', () => {editAchievementText(headline, headlineText)})
description.addEventListener('input', () => {editAchievementText(description, descriptionText)})


