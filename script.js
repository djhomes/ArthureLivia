const startDate = new Date("2023-08-11T00:00:00");

function updateCount() {
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Atualiza o elemento com o id "count"
            document.getElementById("count").textContent = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

        // Atualiza a cada segundo
updateCount();
setInterval(updateCount, 1000);