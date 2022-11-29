const Keyboard = window.SimpleKeyboard.default;

const myKeyboard = new Keyboard({
  onKeyPress: (button) => onKeyPress(button),
  layout: {
    default: [
      "1 2 3 4 5 6 7 8 9 0",
      "q w e r t y u i o p {enter}",
      "a s d f g h j k l {enter}",
      "z x c v b n m",
    ],
  },
});

function onKeyPress(button) {
  virtuaKeyPressed(button.charCodeAt(0));
}
