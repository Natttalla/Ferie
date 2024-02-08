
document.addEventListener('DOMContentLoaded', function() {
    // Pobranie elementu, który będzie wyświetlał liczbę odwiedzin
    var counterElement = document.getElementById('visitor_count');

    // Wywołanie pliku PHP, aby uzyskać aktualną liczbę odwiedzin
    fetch('counter.php')
        .then(response => response.text())
        .then(count => {
            // Aktualizacja wartości na stronie
            counterElement.textContent = count;
        })
        .catch(error => console.error('Błąd pobierania liczby odwiedzin:', error));
});
        const createSnow = () => {
            const snowflake = document.createElement('i')
            snowflake.classList.add('snowflake')
            snowflake.textContent = '❄️'
        
            snowflake.style.left = Math.random() * window.innerWidth + 'px'
            snowflake.style.animationDuration = Math.random() * 5 + 3 + 's'
            snowflake.style.opacity = Math.random()
        
            document.body.append(snowflake)
        
            setTimeout(() => {
                snowflake.remove()
            }, 8000)
        }
        
        setInterval(createSnow, 50)
