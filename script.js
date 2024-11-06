function showForm(formType) {
    // Ocultar ambos formularios
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    
    // Mostrar el formulario correspondiente
    if (formType === 'register') {
        document.getElementById('registerForm').style.display = 'block';
    } else if (formType === 'login') {
        document.getElementById('loginForm').style.display = 'block';
    }
}
