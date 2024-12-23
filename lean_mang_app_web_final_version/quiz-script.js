// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Quiz questions
const questions = [
    {
        question: "Dans le contexte du MSA (Measurement System Analysis), que mesure-t-on avec la répétabilité?",
        options: [
            "La variation entre différents opérateurs",
            "La variation des mesures d'un même opérateur sur la même pièce",
            "La précision de l'instrument",
            "La variation entre différentes pièces"
        ],
        correct: 1,
        explanation: "La répétabilité mesure la variation des résultats obtenus par un même opérateur mesurant plusieurs fois la même pièce dans les mêmes conditions. C'est un indicateur crucial de la consistance du système de mesure."
    },
    {
        question: "Quel est l'objectif principal de la tortue de Crosby?",
        options: [
            "Gérer les stocks",
            "Analyser un processus de manière systématique et complète",
            "Planifier la production",
            "Mesurer la satisfaction client"
        ],
        correct: 1,
        explanation: "La tortue de Crosby est un outil d'analyse systématique qui permet d'examiner un processus sous tous ses angles : les entrées, les sorties, le 'qui' (responsabilités), le 'comment' (méthodes), le 'avec quoi' (moyens) et les résultats attendus."
    },
    {
        question: "Dans la méthode QQOQCP, que signifie le second Q?",
        options: [
            "Quand",
            "Quoi",
            "Qui",
            "Quantité"
        ],
        correct: 1,
        explanation: "Dans QQOQCP, le second Q signifie 'Quoi'. La méthode complète est : Qui, Quoi, Où, Quand, Comment, Pourquoi. C'est un outil fondamental pour analyser une situation ou un problème de manière structurée."
    },
    {
        question: "Quelle est la principale différence entre une activité VA et VASN?",
        options: [
            "La VA coûte plus cher que la VASN",
            "La VA ajoute de la valeur pour le client, la VASN est nécessaire mais n'ajoute pas de valeur directe",
            "La VASN est plus rapide que la VA",
            "La VA est obligatoire, la VASN est optionnelle"
        ],
        correct: 1,
        explanation: "Une activité à Valeur Ajoutée (VA) crée directement de la valeur pour le client et il est prêt à payer pour elle. Une activité VASN (Valeur Ajoutée Sans Nuisance) est nécessaire au processus mais n'ajoute pas directement de valeur du point de vue du client."
    },
    {
        question: "Dans un diagramme SIPOC, à quel moment doit-on l'utiliser?",
        options: [
            "Uniquement en fin de projet",
            "Au début d'un projet pour cartographier le processus à haut niveau",
            "Pendant la phase de contrôle",
            "Lors de l'analyse des données"
        ],
        correct: 1,
        explanation: "Le SIPOC est utilisé au début d'un projet car il permet d'avoir une vue d'ensemble du processus en identifiant les Suppliers (fournisseurs), Inputs (entrées), Process (processus), Outputs (sorties) et Customers (clients) avant d'entrer dans les détails."
    },
    {
        question: "Quel est l'intérêt principal d'un diagramme de spaghetti?",
        options: [
            "Mesurer le temps de production",
            "Visualiser et optimiser les déplacements physiques",
            "Calculer les coûts de production",
            "Définir les responsabilités"
        ],
        correct: 1,
        explanation: "Le diagramme de spaghetti permet de visualiser tous les déplacements physiques dans un espace de travail. Il met en évidence les mouvements inutiles et aide à optimiser l'agencement de l'espace pour réduire les gaspillages de déplacement."
    },
    {
        question: "Comment la VOC (Voice of Customer) est-elle utilisée dans la phase de mesure?",
        options: [
            "Pour définir le budget",
            "Pour établir les CTQ (Critical To Quality) et les spécifications mesurables",
            "Pour former les employés",
            "Pour choisir les fournisseurs"
        ],
        correct: 1,
        explanation: "La VOC est utilisée pour traduire les besoins clients en caractéristiques mesurables (CTQ). Ces CTQ deviennent ensuite les spécifications et les métriques qui seront utilisées pour mesurer la performance du processus."
    },
    {
        question: "Dans le MSA, que mesure la reproductibilité?",
        options: [
            "La variation entre différents opérateurs mesurant la même pièce",
            "La variation d'un même opérateur",
            "La précision de l'instrument",
            "La variation des pièces"
        ],
        correct: 0,
        explanation: "La reproductibilité mesure la variation des résultats entre différents opérateurs mesurant la même pièce. C'est un indicateur important de la robustesse du système de mesure face aux changements d'opérateurs."
    },
    {
        question: "Quel axe de la tortue de Crosby permet d'identifier les ressources nécessaires?",
        options: [
            "Qui",
            "Avec quoi",
            "Comment",
            "Quand"
        ],
        correct: 1,
        explanation: "L'axe 'Avec quoi' de la tortue de Crosby identifie spécifiquement les ressources matérielles, financières et humaines nécessaires pour réaliser le processus."
    },
    {
        question: "Dans le QQOQCP, quel aspect traite le 'Comment'?",
        options: [
            "Le budget nécessaire",
            "Les méthodes et moyens utilisés",
            "Le planning",
            "Les responsables"
        ],
        correct: 1,
        explanation: "Le 'Comment' dans QQOQCP traite des méthodes, des moyens et des procédures utilisés pour réaliser l'action ou résoudre le problème. Il décrit la manière dont les choses sont ou doivent être faites."
    },
    {
        question: "Quelle est la meilleure façon de collecter la VOC?",
        options: [
            "Uniquement par des enquêtes en ligne",
            "Par des réunions internes",
            "Par une approche multi-canaux (enquêtes, interviews, observations, réclamations)",
            "Uniquement par l'analyse des ventes"
        ],
        correct: 2,
        explanation: "Une approche multi-canaux est la plus efficace car elle permet de capturer la voix du client sous différents angles et contextes, donnant ainsi une image plus complète et précise des besoins et attentes des clients."
    },
    {
        question: "Dans un diagramme SIPOC, que représente le 'I'?",
        options: [
            "Intelligence",
            "Inputs (entrées)",
            "Information",
            "Innovation"
        ],
        correct: 1,
        explanation: "Le 'I' représente les Inputs (entrées), qui sont tous les éléments nécessaires au processus pour fonctionner : matières premières, informations, ressources, etc. C'est un élément crucial pour comprendre ce qui alimente le processus."
    },
    {
        question: "Quel est le principal avantage d'utiliser un MSA?",
        options: [
            "Réduire les coûts",
            "Valider la fiabilité du système de mesure",
            "Augmenter la production",
            "Former les opérateurs"
        ],
        correct: 1,
        explanation: "Le MSA permet de valider que le système de mesure est fiable et capable de produire des données précises et cohérentes. Sans cette validation, toutes les décisions basées sur ces mesures pourraient être erronées."
    },
    {
        question: "Dans le contexte lean, pourquoi est-il important d'identifier les activités VASN?",
        options: [
            "Pour les éliminer immédiatement",
            "Pour les optimiser car elles sont nécessaires même si elles n'ajoutent pas de valeur directe",
            "Pour augmenter leur fréquence",
            "Pour les transformer en VA"
        ],
        correct: 1,
        explanation: "Les activités VASN, bien que n'ajoutant pas de valeur directe pour le client, sont nécessaires au processus. L'objectif n'est pas de les éliminer mais de les optimiser pour réduire leur impact sur le temps et les ressources."
    },
    {
        question: "Comment le diagramme de spaghetti aide-t-il dans la phase de mesure?",
        options: [
            "En mesurant la qualité des produits",
            "En quantifiant les distances parcourues et en identifiant les gaspillages de mouvement",
            "En calculant les coûts de production",
            "En mesurant le temps de cycle"
        ],
        correct: 1,
        explanation: "Le diagramme de spaghetti permet de mesurer concrètement les distances parcourues et d'identifier les gaspillages liés aux déplacements. Ces mesures sont essentielles pour optimiser l'agencement et réduire les mouvements inutiles."
    }
];

// Quiz state
let currentQuestion = 0;
let score = 0;
let answers = new Array(questions.length).fill(null);
let timeLeft = 600; // 10 minutes in seconds
let timerInterval;

// Timer functionality
function startTimer() {
    timeLeft = 600; // Reset to 10 minutes
    const timerDisplay = document.getElementById('timer');

    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResults();
        }
        timeLeft--;
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
}

// Reset quiz function
function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    answers = new Array(questions.length).fill(null);
    timeLeft = 600; // Reset to 10 minutes
    
    // Reset UI elements
    document.querySelector('.quiz-content').style.display = 'block';
    document.querySelector('.results-container').style.display = 'none';
    document.getElementById('timer').textContent = '10:00';
    
    // Reset buttons
    document.querySelector('.previous').disabled = true;
    document.querySelector('.next').style.display = 'block';
    document.querySelector('.submit').style.display = 'none';
    
    // Reset progress
    const progress = document.querySelector('.progress');
    progress.style.width = '0%';
    
    // Start fresh
    showQuestion(0);
    updateProgress();
    startTimer();
}

// Show question
function showQuestion(index) {
    const question = questions[index];
    document.querySelector('.question-number').textContent = index + 1;
    document.querySelector('.question-text').textContent = question.question;
    
    const optionsContainer = document.querySelector('.options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, i) => {
        const optionElement = document.createElement('button');
        optionElement.className = 'option';
        if (answers[index] === i) {
            optionElement.classList.add('selected');
        }
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(i);
        optionsContainer.appendChild(optionElement);
    });

    updateNavigationButtons();
    updateProgress();
}

// Select option
function selectOption(optionIndex) {
    answers[currentQuestion] = optionIndex;
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    options[optionIndex].classList.add('selected');
    updateNavigationButtons();
    updateTimer();
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.querySelector('.progress').style.width = `${progress}%`;
}

// Update navigation buttons
function updateNavigationButtons() {
    document.querySelector('.previous').disabled = currentQuestion === 0;
    document.querySelector('.next').style.display = currentQuestion === questions.length - 1 ? 'none' : 'block';
    document.querySelector('.submit').style.display = currentQuestion === questions.length - 1 ? 'block' : 'none';
}

// Navigation handlers
document.querySelector('.previous').addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
        updateProgress();
        updateNavigationButtons();
    }
});

document.querySelector('.next').addEventListener('click', () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
        updateProgress();
        updateNavigationButtons();
    }
});

// Submit quiz
document.querySelector('.submit').addEventListener('click', () => {
    showResults();
});

// Restart quiz
document.querySelector('.restart').addEventListener('click', () => {
    resetQuiz();
});

function showResults() {
    stopTimer();
    document.querySelector('.quiz-content').style.display = 'none';
    document.querySelector('.results-container').style.display = 'block';
    
    // Calculate score
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        if (answers[i] === questions[i].correct) {
            score++;
        }
    }
    
    // Update score display
    document.querySelector('.score').textContent = score;
    document.querySelector('.total').textContent = `/${questions.length}`;
    
    // Create and display explanations
    const explanationsDiv = document.createElement('div');
    explanationsDiv.className = 'explanations';
    explanationsDiv.innerHTML = '<h3>Explications des réponses :</h3>';
    
    questions.forEach((q, index) => {
        const isCorrect = answers[index] === q.correct;
        const explanation = document.createElement('div');
        explanation.className = `explanation ${isCorrect ? 'correct' : 'incorrect'}`;
        explanation.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${q.question}</p>
            <p><strong>Votre réponse:</strong> ${q.options[answers[index]]}</p>
            <p><strong>Réponse correcte:</strong> ${q.options[q.correct]}</p>
            <p><strong>Explication:</strong> ${q.explanation}</p>
        `;
        explanationsDiv.appendChild(explanation);
    });
    
    document.querySelector('.results-container').appendChild(explanationsDiv);
    
    // Update result message
    const resultMessage = document.querySelector('.result-message');
    const percentage = (score / questions.length) * 100;
    
    if (percentage >= 80) {
        resultMessage.textContent = 'Excellent ! Vous maîtrisez bien les concepts de mesure en lean management !';
    } else if (percentage >= 60) {
        resultMessage.textContent = 'Bien ! Continuez à approfondir vos connaissances.';
    } else {
        resultMessage.textContent = 'Continuez à étudier les concepts de mesure en lean management.';
    }
}

// Initialize quiz
function initializeQuiz() {
    currentQuestion = 0;
    score = 0;
    answers = new Array(questions.length).fill(null);
    timeLeft = 600; // 10 minutes in seconds
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    showQuestion(currentQuestion);
    updateProgress();
    updateNavigationButtons();
    startTimer();
}

// Initialize the quiz when the page loads
initializeQuiz();
