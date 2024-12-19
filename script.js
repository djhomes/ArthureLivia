// script.js

// Define a data inicial do relacionamento
const startDate = new Date("2023-08-11T00:00:00");

function updateCount() {
    const now = new Date();
    const difference = now - startDate;

    // Calcula os dias
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    // Calcula as horas restantes
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // Calcula os minutos restantes
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    // Calcula os segundos restantes
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Atualiza o elemento com o id "count"
    document.getElementById("count").textContent = 
        `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

// Atualiza imediatamente e configura o intervalo de atualização
updateCount();
setInterval(updateCount, 1000);
