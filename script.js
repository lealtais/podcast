document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('header nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita o comportamento padrão do link
            
            const targetId = this.getAttribute('href'); // Obtém o ID do alvo do link
            const targetElement = document.querySelector(targetId); // Obtém o elemento alvo
            
            // Verifica se o elemento alvo existe
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Adiciona rolagem suave
                    block: 'start' // Alinha o topo do elemento com o topo da janela de exibição
                });
            }
        });
    });
});
