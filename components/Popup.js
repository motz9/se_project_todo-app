class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseButton = this._popupElement.querySelector(".popup__close");
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    this.setEventListeners();
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    this.removeEventListeners();
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupCloseButton.addEventListener("click", () => {
      this.close();
    });
    document.addEventListener("keydown", this._handleEscapeClose);
    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target === this._popupElement) {
        this.close();
      }
    });
  }

  removeEventListeners() {
    document.removeEventListener("keydown", this._handleEscapeClose);
  }
}

export default Popup;
