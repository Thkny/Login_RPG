document.getElementById('cadastro1').addEventListener('submit', function (event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    window.location.href = 'RPG';
});