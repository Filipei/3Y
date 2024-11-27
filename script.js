
function updateCountdown() {
    var startDate = new Date('November 27, 2021 00:00:00');
    var now = new Date();
    var timeDiff = now - startDate;

    var years = now.getFullYear() - startDate.getFullYear();
    startDate.setFullYear(startDate.getFullYear() + years);

    if (now < startDate) {
        years--;
        startDate.setFullYear(startDate.getFullYear() - 1);
    }

    var days = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    startDate.setDate(startDate.getDate() + days);

    var hours = Math.floor((now - startDate) / (1000 * 60 * 60));
    startDate.setHours(startDate.getHours() + hours);

    var minutes = Math.floor((now - startDate) / (1000 * 60));
    startDate.setMinutes(startDate.getMinutes() + minutes);

  
    var seconds = Math.floor((now - startDate) / 1000);

    document.getElementById('years').querySelector('.number').textContent = years;
    document.getElementById('days').querySelector('.number').textContent = days;
    document.getElementById('hours').querySelector('.number').textContent = hours;
    document.getElementById('minutes').querySelector('.number').textContent = minutes;
    document.getElementById('seconds').querySelector('.number').textContent = seconds;
}

setInterval(updateCountdown, 1000);

updateCountdown();


onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };


document.addEventListener('DOMContentLoaded', function() {
    var h2 = document.getElementById('transcript');
    var texts = [
        "Eu te amo mais do que posso descrever", 
        "I love you more than I can describe", 
        "我愛你勝過我所能描述的"
    ];
    var index = 0;
    var speed = 100; 
    var pauseBetweenTexts = 3000; 
    var erasingSpeed = 100; 
    var textIndex = 0;
    var isTyping = true;

    function typeText() {
        if (isTyping) {
            var currentText = texts[index];
            h2.textContent = currentText.slice(0, textIndex);
            textIndex++;

            if (textIndex > currentText.length) {
                isTyping = false;
                setTimeout(typeText, pauseBetweenTexts);
            } else {
                setTimeout(typeText, speed);
            }
        } else {
            if (textIndex > 0) {
                h2.textContent = h2.textContent.slice(0, textIndex - 1);
                textIndex--;
                setTimeout(typeText, erasingSpeed);
            } else {
                isTyping = true;
                index = (index + 1) % texts.length;
                setTimeout(typeText, speed);
            }
        }
    }

    typeText();
});
document.addEventListener('DOMContentLoaded', function() {
    const flashElement = document.createElement('div');
    flashElement.id = 'flash';
    document.body.appendChild(flashElement);

    const flowerElement = document.createElement('div');
    flowerElement.id = 'flower';
    document.body.appendChild(flowerElement);

    function checkNewYear() {
        const now = new Date();
        const nextYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
        const timeToNewYear = nextYear - now;

        if (timeToNewYear <= 0) {
            flashElement.classList.add('flash-active');
            flowerElement.classList.add('flower-active');
            setTimeout(() => {
                flashElement.classList.remove('flash-active');
                flowerElement.classList.remove('flower-active');
            }, 2000); // Duração da animação da flor
        } else {
            setTimeout(checkNewYear, timeToNewYear + 1000); // Verifica novamente logo após a virada do ano
        }
    }

    checkNewYear();
});


