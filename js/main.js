// Menu mobile
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.remove('hidden');
    document.getElementById('mobile-menu').classList.add('flex');
});

document.getElementById('close-menu').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.add('hidden');
    document.getElementById('mobile-menu').classList.remove('flex');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', function () {
        document.getElementById('mobile-menu').classList.add('hidden');
        document.getElementById('mobile-menu').classList.remove('flex');
    });
});

// Funções para as UCs
function toggleUC(ucNumber) {
    const ucContainer = document.querySelector(`.uc-container:nth-child(${ucNumber})`);
    ucContainer.classList.toggle('active');

    // Fecha todas as outras UCs
    document.querySelectorAll('.uc-container').forEach((container, index) => {
        if (index + 1 !== ucNumber && container.classList.contains('active')) {
            container.classList.remove('active');
        }
    });
}

function expandAllUCs() {
    document.querySelectorAll('.uc-container').forEach(container => {
        container.classList.add('active');
    });
}

function collapseAllUCs() {
    document.querySelectorAll('.uc-container').forEach(container => {
        container.classList.remove('active');
    });
}

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Ativar UCs ao rolar
function checkUCsInView() {
    document.querySelectorAll('.uc-container').forEach(container => {
        const rect = container.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
            container.style.opacity = 1;
            container.style.transform = 'translateY(0)';
        }
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', function () {
    // Iniciar com algumas UCs abertas
    setTimeout(() => {
        toggleUC(1);
        toggleUC(17);
    }, 1000);

    // Verificar UCs visíveis
    window.addEventListener('scroll', checkUCsInView);
    checkUCsInView();
});
