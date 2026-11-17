const textInput = document.getElementById("text-input");
const characterCount = document.getElementById("character-count");
const maxCharacters = 100;

textInput.addEventListener("input", () => {
  textInput.value = textInput.value.slice(0, maxCharacters);
  characterCount.textContent = textInput.value.length;
  characterCount.style.color =
    textInput.value.length === maxCharacters ? "red" : "";
});

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", () => {
  textInput.value = "";
  characterCount.textContent = "0";
  characterCount.style.color = "green";
});