import { $ } from 'utilities/shorthands'
import './styles.css'

// TODO:
// image upload?
// markdown support?
export default class ChatAuthoring extends HTMLElement {
  attachedCallback() {
    this.setAttribute('contenteditable', '')
  }

  createdCallback() {
    this.ChatUI       = this.parentNode
    this.Scrollview   = $('chat-scrollview', this.parentNode)

    this.addEventListener('focus', e => 
      this.Scrollview.scrollToLatest())

    this.addEventListener('keydown', e => {
      let key = e.which || e.keyCode

      if (key === 13 && !e.shiftKey) {
        e.preventDefault()
        this.send()
      }
    })
  }

  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}

  send() {
    this.ChatUI.newMessage({
      mine:     true,
      type:     'HTML',
      contents: this.innerHTML
    })

    this.innerHTML = ''
  }
}

document.registerElement('chat-authoring', ChatAuthoring)