import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["hiddenContainer"]

  connect() {
    console.log("Window controller connected")
  }

  hide(event) {
    const win = event.currentTarget.closest(".window")
    const icon = document.createElement("div")
    icon.className = "hidden-window"
    icon.textContent = win.dataset.icon || "📄"
    this.hiddenContainerTarget.appendChild(icon)
    win.style.display = "none"

    icon.addEventListener("click", () => {
      win.style.display = "flex"
      icon.remove()
    })
  }

  toggleMaximize(event) {
    const win = event.currentTarget.closest(".window")
    if(win.dataset.maximized === "true") {
      win.style.width = "600px"
      win.style.height = "300px"
      win.dataset.maximized = "false"
    } else {
      win.style.width = "100%"
      win.style.height = "100%"
      win.dataset.maximized = "true"
    }
  }
}
