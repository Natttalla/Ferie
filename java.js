let count = localStorage.getItem('count');
        if(count === null) {
            count = 0;
        } else {
            count = Number(count) + 1;
        }
        document.getElementById('counter').innerText = "Liczba odwiedzin: " + count;
        localStorage.setItem('count', count);

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