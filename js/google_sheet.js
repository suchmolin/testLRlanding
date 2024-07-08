



const scriptURL = 'https://script.google.com/macros/s/AKfycbw1R9SWvCCEz3guhBEzyoobbWq-z4AvEYRST3J1uiJWtwYBy3t-kbuUJfBg4z9H8uE/exec'

const form = document.forms['contact-form']



form.addEventListener('submit', e => {
  e.preventDefault()
  document.getElementById('btn_send_me').disabled = true; /* para desactivar el boton de enviar */

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => Swal.fire({
    title: "¡Enviado!",
    text: "Pronto será contactado por nuestro equipo de ventas.",
    icon: "success"
  })) 
  .then(() => { window.location.reload(); })
  .catch(error => console.error('¡Error no se logor enviar!', error.message))
}  )  




