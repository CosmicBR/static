// Acessando elementos do DOM
const uploadInput = document.getElementById('uploadInput');
const previewImg = document.getElementById('preview');

// Función para mostrar u ocultar el modal
function toggleModal() {
    var modal = document.getElementById("modalNotificaciones");
    modal.style.display = modal.style.display === "none" ? "flex" : "none";
}

// Gerador de Texto
const textInput = document.getElementById('text-input');
const generateButton = document.getElementById('generate-button');
const generatedText = document.getElementById('generated-text');

generateButton.addEventListener('click', () => {
    const text = textInput.value;
    generatedText.textContent = text;
});

// Gerador de QR Code
const qrcodeInput = document.getElementById('qrcode-input');
const qrcodeGenerateButton = document.getElementById('qrcode-generate-button');
const qrcodeImage = document.getElementById('qrcode-image');

qrcodeGenerateButton.addEventListener('click', () => {
    const text = qrcodeInput.value;
    if (text.trim() !== '') {
        // Use a biblioteca qrcode para gerar o código QR
        const qr = new QRCode(qrcodeImage, {
            text: text,
            width: 128,
            height: 128,
        });
    } else {
        // Caso o input esteja vazio, exiba uma mensagem de erro ou faça algo apropriado.
        qrcodeImage.textContent = 'Campo vazio! Digite o texto ou URL para gerar o QR Code.';
    }
});
// Script JavaScript (seu_arquivo.js)
const fileUpload = document.getElementById('file-upload');
const selectedFileName = document.getElementById('selected-file-name');
const uploadButton = document.getElementById('upload-button');
const loadingPopup = document.getElementById('loading-popup');

fileUpload.addEventListener('change', () => {
    const file = fileUpload.files[0];
    if (file) {
        selectedFileName.textContent = file.name;
    } else {
        selectedFileName.textContent = '';
    }
});

uploadButton.addEventListener('click', () => {
    const file = fileUpload.files[0];
    if (file) {
        // Exibir o popup de carregamento
        loadingPopup.style.display = 'flex';

        // Simular o envio da Rifa (aqui você pode adicionar a lógica real para enviar o arquivo)
        setTimeout(() => {
            // Ocultar o popup de carregamento após um pequeno atraso (apenas para simulação)
            loadingPopup.style.display = 'none';

            // Limpar o nome do arquivo selecionado
            selectedFileName.textContent = '';

            // Limpar o input de arquivo
            fileUpload.value = '';
        }, 3000); // Tempo de simulação (3 segundos)
    } else {
        alert('Por favor, selecione um arquivo antes de enviar a Rifa.');
    }
});



// Adicionando um ouvinte de eventos para o botão de upload
uploadInput.addEventListener('change', handleFileSelect);

// Função para lidar com a seleção de um arquivo
function handleFileSelect(event) {
  const file = event.target.files[0];

  // Verifica se um arquivo foi selecionado
  if (file) {
    // Cria um objeto URL para exibir a imagem carregada
    const objectURL = URL.createObjectURL(file);

    // Atualiza a imagem de pré-visualização com a imagem carregada
    previewImg.src = objectURL;
  }
}
