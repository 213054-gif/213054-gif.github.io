
function alternarDarkMode() {
  document.body.classList.toggle('dark-mode')
}


let tamanhoFonte = 16

function aumentarFonte() {
  tamanhoFonte += 2
  document.body.style.fontSize = tamanhoFonte + 'px'
}
  
function diminuirFonte() {
  tamanhoFonte -= 2
  document.body.style.fontSize = tamanhoFonte + 'px'
}

const formulario = document.getElementById('formulario-contato')

if (formulario) {
  formulario.addEventListener('submit', function(evento) {
    evento.preventDefault()

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const mensagem = document.getElementById('mensagem').value

    if (nome === '' || email === '' || mensagem === '') {
      alert('Por favor, preencha todos os campos!')
      return
    }

    alert('Mensagem enviada com sucesso!')
  })
}