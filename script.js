// Dados dos biomas brasileiros
const biomasData = {
    amazonia: {
        nome: "Amazônia",
        descricao: "A Amazônia é a maior floresta tropical do mundo e representa mais de 60% do território brasileiro. Conhecida como o 'pulmão do mundo', ela desempenha um papel crucial no equilíbrio climático global.",
        caracteristicas: [
            "Maior floresta tropical do mundo",
            "60% do território brasileiro",
            "Maior biodiversidade do planeta",
            "Regula o clima global",
            "Rica em recursos hídricos"
        ],
        clima: "Tropical úmido com temperaturas elevadas e alta umidade",
        vegetacao: "Floresta densa com árvores de grande porte, lianas e epífitas",
        fauna: "Onça-pintada, arara-azul, boto-cor-de-rosa, anaconda, macaco-aranha",
        importancia: "Fundamental para o equilíbrio climático global e conservação da biodiversidade",
        area: "5,5 milhões de km²",
        estados: "Acre, Amazonas, Roraima, Rondônia, Pará, Amapá, Maranhão, Mato Grosso"
    },
    cerrado: {
        nome: "Cerrado",
        descricao: "O Cerrado é considerado a savana mais rica do mundo em biodiversidade. Conhecido como o 'berço das águas', é responsável por abastecer importantes bacias hidrográficas do país.",
        caracteristicas: [
            "Segundo maior bioma do Brasil",
            "Savana mais rica em biodiversidade",
            "Berço das águas brasileiras",
            "Vegetação adaptada ao fogo",
            "Solo ácido e pobre em nutrientes"
        ],
        clima: "Tropical sazonal com duas estações bem definidas: seca e chuvosa",
        vegetacao: "Vegetação savânica com árvores de troncos retorcidos e casca grossa",
        fauna: "Lobo-guará, tamanduá-bandeira, ema, tatu-canastra, veado-campeiro",
        importancia: "Crucial para o abastecimento hídrico e agricultura brasileira",
        area: "2 milhões de km²",
        estados: "Goiás, Tocantins, Mato Grosso, Mato Grosso do Sul, Minas Gerais, Bahia, Maranhão, Piauí"
    },
    caatinga: {
        nome: "Caatinga",
        descricao: "A Caatinga é o único bioma exclusivamente brasileiro. Adaptada ao clima semiárido, apresenta uma vegetação única que se adapta às condições de seca prolongada.",
        caracteristicas: [
            "Único bioma exclusivamente brasileiro",
            "Clima semiárido",
            "Vegetação adaptada à seca",
            "Períodos de estiagem prolongados",
            "Solo raso e pedregoso"
        ],
        clima: "Semiárido com baixa precipitação e alta evaporação",
        vegetacao: "Vegetação xerófila com cactos, bromélias e árvores de pequeno porte",
        fauna: "Tatu-peba, preá, sagui-do-nordeste, asa-branca, jacaré-do-papo-amarelo",
        importancia: "Importante para a conservação de espécies endêmicas e cultura nordestina",
        area: "844 mil km²",
        estados: "Ceará, Rio Grande do Norte, Paraíba, Pernambuco, Sergipe, Alagoas, Bahia, Piauí, Minas Gerais"
    },
    "mata-atlantica": {
        nome: "Mata Atlântica",
        descricao: "A Mata Atlântica acompanha todo o litoral brasileiro e é uma das florestas mais ameaçadas do mundo. Apesar da devastação, ainda abriga uma enorme biodiversidade.",
        caracteristicas: [
            "Acompanha o litoral brasileiro",
            "Uma das florestas mais ameaçadas",
            "Alta biodiversidade",
            "Região mais povoada do país",
            "Importante corredor ecológico"
        ],
        clima: "Tropical úmido com influência marítima",
        vegetacao: "Floresta tropical úmida com grande diversidade de espécies",
        fauna: "Mico-leão-dourado, muriqui, jaguatirica, papagaio-da-cara-roxa, preguiça-de-coleira",
        importancia: "Crucial para a conservação da biodiversidade e recursos hídricos",
        area: "1,3 milhões de km² (originalmente)",
        estados: "Todos os estados do litoral brasileiro, do Rio Grande do Norte ao Rio Grande do Sul"
    },
    pantanal: {
        nome: "Pantanal",
        descricao: "O Pantanal é a maior planície alagável do mundo e um dos ecossistemas mais ricos em biodiversidade. Suas águas abrigam uma fauna aquática impressionante.",
        caracteristicas: [
            "Maior planície alagável do mundo",
            "Rica biodiversidade aquática",
            "Ciclos de cheia e seca",
            "Paisagem única no mundo",
            "Importante rota migratória"
        ],
        clima: "Tropical com duas estações: seca (maio a outubro) e chuvosa (novembro a abril)",
        vegetacao: "Vegetação adaptada às inundações com campos, cerrados e florestas",
        fauna: "Jaguar, capivara, ariranha, tuiuiú, jacaré-do-pantanal, piranha",
        importancia: "Fundamental para a conservação da biodiversidade aquática e terrestre",
        area: "150 mil km²",
        estados: "Mato Grosso, Mato Grosso do Sul, pequena parte na Bolívia e Paraguai"
    },
    pampa: {
        nome: "Pampa",
        descricao: "O Pampa brasileiro é caracterizado por campos naturais e é uma extensão dos pampas argentinos e uruguaios. Conhecido por suas paisagens abertas e atividades pastoris.",
        caracteristicas: [
            "Campos naturais extensos",
            "Paisagem aberta e plana",
            "Tradição pastoril",
            "Clima temperado",
            "Vegetação herbácea"
        ],
        clima: "Subtropical com quatro estações bem definidas",
        vegetacao: "Campos naturais com gramíneas, arbustos e pequenas árvores",
        fauna: "Veado-campeiro, graxaim, perdiz, quero-quero, tuco-tuco",
        importancia: "Importante para a pecuária e conservação de espécies campestres",
        area: "176 mil km²",
        estados: "Rio Grande do Sul"
    }
};

// Elementos do DOM
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollAnimations();
    initializeParallax();
    initializeBiomaCards();
});

// Navegação mobile
function initializeNavigation() {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animações de scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observar elementos que devem aparecer no scroll
    document.querySelectorAll('.bioma-card, .stat-item, .sobre-text').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Efeito parallax no hero - removido para background de imagem
function initializeParallax() {
    // Parallax removido para permitir background fixo de imagem
}

// Interatividade dos cards de biomas
function initializeBiomaCards() {
    document.querySelectorAll('.bioma-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Função para scroll suave para a seção de biomas
function scrollToBiomas() {
    const biomasSection = document.getElementById('biomas');
    biomasSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Função para abrir modal com informações do bioma
function openModal(biomaKey) {
    const bioma = biomasData[biomaKey];
    if (!bioma) return;

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${bioma.nome}</h2>
        </div>
        <div class="modal-body-content">
            <div class="bioma-image-modal">
                <img src="https://www.synergiaconsultoria.com.br/wp-content/uploads/2024/10/01_Biomas_img-Interna_AdobeStock.jpg" alt="${bioma.nome}">
            </div>
            <div class="bioma-info">
                <p class="bioma-description">${bioma.descricao}</p>
                
                <div class="info-section">
                    <h3>🌡️ Clima</h3>
                    <p>${bioma.clima}</p>
                </div>
                
                <div class="info-section">
                    <h3>🌱 Vegetação</h3>
                    <p>${bioma.vegetacao}</p>
                </div>
                
                <div class="info-section">
                    <h3>🐾 Fauna</h3>
                    <p>${bioma.fauna}</p>
                </div>
                
                <div class="info-section">
                    <h3>📊 Dados Importantes</h3>
                    <ul>
                        <li><strong>Área:</strong> ${bioma.area}</li>
                        <li><strong>Estados:</strong> ${bioma.estados}</li>
                    </ul>
                </div>
                
                <div class="info-section">
                    <h3>⭐ Importância</h3>
                    <p>${bioma.importancia}</p>
                </div>
                
                <div class="info-section">
                    <h3>🔍 Características Principais</h3>
                    <ul>
                        ${bioma.caracteristicas.map(caracteristica => `<li>${caracteristica}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Animação de entrada
    setTimeout(() => {
        modal.querySelector('.modal-content').style.transform = 'scale(1)';
    }, 10);
}

// Função para fechar modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora dele
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Fechar modal com tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Efeito de digitação no título principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Inicializar efeito de digitação após carregar a página
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Contador animado para as estatísticas
function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    
    counters.forEach(counter => {
        const target = parseFloat(counter.textContent.replace(/[^0-9.]/g, ''));
        const suffix = counter.textContent.replace(/[0-9.]/g, '');
        //const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
       // const suffix = counter.textContent.replace(/[\d]/g, '');
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + suffix;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current) + suffix;
            }
        }, 30);
    });
}

// Observar quando a seção sobre entra na tela para animar contadores
const sobreObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            sobreObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const sobreSection = document.querySelector('.sobre-section');
if (sobreSection) {
    sobreObserver.observe(sobreSection);
}

// Efeito de hover nos cards com rotação 3D
document.querySelectorAll('.bioma-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Adicionar estilos CSS para o modal via JavaScript
const modalStyles = `
    .modal-header h2 {
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-size: 1.8rem;
    }
    
    .bioma-image-modal {
        width: 100%;
        height: 200px;
        margin-bottom: 1.5rem;
        border-radius: var(--border-radius);
        overflow: hidden;
    }
    
    .bioma-image-modal img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .info-section {
        margin-bottom: 1.5rem;
        padding: 1rem;
        background: var(--light-bg);
        border-radius: var(--border-radius);
    }
    
    .info-section h3 {
        color: var(--primary-color);
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
    }
    
    .info-section p {
        margin-bottom: 0.5rem;
        line-height: 1.6;
    }
    
    .info-section ul {
        margin-left: 1rem;
    }
    
    .info-section li {
        margin-bottom: 0.3rem;
    }
    
    .bioma-description {
        font-size: 1.1rem;
        font-weight: 500;
        color: var(--text-color);
        margin-bottom: 1.5rem;
        padding: 1rem;
        background: var(--accent-color);
        border-radius: var(--border-radius);
        color: var(--white);
    }
`;

// Injetar estilos do modal
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);
