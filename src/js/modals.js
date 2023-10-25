// This code is a self-invoking function that adds two methods (`matches` and `closest`) to the `Element.prototype` object. These methods are used for working with Document Object Model (DOM) elements in JavaScript.

// This code creates a self-invoking function that takes one argument, `e. window.Element.prototype` is the prototype of a DOM element, and the code extends it with the methods `matches` and `closest`.

!(function (e) {
  // This block of code checks if the `matches` method exists on the element e. If the `matches` method does not exist (or is not a function), the code redefines it.

  'function' != typeof e.matches &&
    (e.matches = function (e) {
      for (
        let t = this,
          o = (t.document || t.ownerDocument).querySelectorAll(e),
          n = 0;
        o[n] && o[n] !== t;

      )
        ++n;
      return Boolean(o[n]);
    }),
    // This block of code checks if the `closest` method exists on the element e. If the `closest` method does not exist (or is not a function), the code redefines it.
    'function' != typeof e.closest &&
      (e.closest = function (e) {
        for (let t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
  // Storing an array of button elements and a backdrop element in variables.
  // Assigning an ID to the backdrop to avoid affecting other elements with the class "backdrop."

  var modalButtons = document.querySelectorAll('.js-open-modal'),
    backdrop = document.querySelector('.js-backdrop-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close');

  // Iterating through the array of buttons.
  modalButtons.forEach(function (item) {
    // Assigning a click handler to each button.
    item.addEventListener('click', function (e) {
      // Preventing the default action of the element since different people might have implemented the button differently.
      e.preventDefault();
      // With each click on a button, we will retrieve the content of the "data-modal" attribute and search for a modal window with the same attribute.

      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );
      // After finding the necessary modal window, we will add classes to the backdrop and the window to display them.

      modalElem.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }); // end click
  }); // end foreach

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    });
  }); // end foreach

  document.body.addEventListener(
    'keyup',
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.backdrop').classList.remove('active');
      }
    },
    false
  );

  backdrop.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
    document.body.style.overflow = '';
  });
}); // end ready
