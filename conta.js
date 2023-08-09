// JavaScript function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hide');
}

// JavaScript code to handle the form submission (for demonstration purposes only)
document.getElementById('createAccountForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const igreja = document.getElementById('igreja').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const key = document.getElementById('key').value;

    // You can process the form data here (e.g., send it to a server using AJAX)
    // For demonstration purposes, we'll just log the values to the console
    console.log('igreja:', email);
    console.log('email:', senha);
    console.log('senha:', cnpj);
    console.log('key:', codigoAcesso);
});

