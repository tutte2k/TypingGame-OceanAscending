const Keyboard = window.SimpleKeyboard.default;
const myKeyboard = new Keyboard({
  onKeyPress: (button) => onKeyPress(button),
  layout: {
    default: [
      "1 2 3 4 5 6 7 8 9 0",
      "Q W E R T Y U I O P",
      "A S D F G H J K L ⚡",
      "⌛ Z X C V B N M ⚡ ⚡",
    ],
  },
});

function onKeyPress(button) {
  console.log(button.charCodeAt(0));
  if (button.charCodeAt(0) == 9889) {
    return virtuaKeyPressed(13);
  }
  if (button.charCodeAt(0) == 8987) {
    return virtuaKeyPressed(17);
  }
  return virtuaKeyPressed(button.charCodeAt(0));
}
