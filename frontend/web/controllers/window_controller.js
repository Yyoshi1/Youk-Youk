// window_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["window", "hiddenContainer"]

  connect() {
    console.log("Unified Responsive Window controller connected")
  }

  close(event) {
    const win = event.currentTarget.closest(".window")
    win.remove()
  }

  hide(event) {
    const win = event.currentTarget.closest(".window")
    const hiddenContainer = this.hiddenContainerTarget
    const icon = document.createElement("div")
    icon.className = "hidden-window"
    icon.dataset.target = win.dataset.id
    icon.textContent = win.dataset.icon || "📄"
    hiddenContainer.appendChild(icon)
    win.style.display = "none"

    icon.addEventListener("click", () => {
      win.style.display = "flex"
      icon.remove()
    })
  }

  toggleMaximize(event) {
    const win = event.currentTarget.closest(".window")
    if(this.isMobile()) return
    if (win.dataset.maximized === "true") {
      win.style.width = this.defaultWidth()
      win.style.height = this.defaultHeight()
      win.dataset.maximized = "false"
    } else {
      win.style.width = "100%"
      win.style.height = "100%"
      win.dataset.maximized = "true"
    }
  }

  isMobile() {
    return window.innerWidth <= 640
  }

  defaultWidth() {
    if(this.isMobile()) return "100vw"
    if(window.innerWidth <= 1024) return "80vw"
    return "600px"
  }

  defaultHeight() {
    if(this.isMobile()) return "100vh"
    if(window.innerWidth <= 1024) return "60vh"
    return "300px"
  }
}
