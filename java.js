window.onload = function() {
    if(window.localStorage){
        var counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;
        counter++;
        localStorage.setItem('counter', counter);
        document.getElementById('counter').innerText = 'Ta strona została odwiedzona ' + counter + ' razy.';
    } else {
        document.getElementById('counter').innerText = 'Twoja przeglądarka nie obsługuje LocalStorage, więc nie mogę zliczyć odwiedzin.';
    }
};

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