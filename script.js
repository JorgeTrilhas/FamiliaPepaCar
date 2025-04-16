// Scroll suave para as seções
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Formulário
document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');

    
});
