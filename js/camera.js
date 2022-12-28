const btnIniciarCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]')
const video = document.querySelector('[data-video]')
const btnTirarFoto = document.querySelector("[data-tirar-foto]")
const canvas = document.querySelector("[data-video-canvas]")
const mensagem = document.querySelector("[data-mensagem]")
const btnEnviarFoto = document.querySelector('[data-enviar]')

let imagemURL = "";


btnIniciarCamera.addEventListener('click', async function () {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})

    btnIniciarCamera.style.display = "none"
    campoCamera.style.display = 'block';

    video.srcObject = iniciarVideo;
})

btnTirarFoto.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

    imagemURL = canvas.toDataURL('image/jpeg');

    campoCamera.style.display = "none";
    mensagem.style.display = "block"
})

btnEnviarFoto.addEventListener('click', () => {
    const cadastro = localStorage.getItem("cadastro");
    const cadastroJson = JSON.parse(cadastro);

    cadastroJson.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(cadastroJson))

    window.location.href = "../pages/abrir-conta-form-3.html"

})