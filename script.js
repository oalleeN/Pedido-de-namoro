const noOption = document.querySelector('.no');

function getRandomPosition() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    const x = Math.floor(Math.random() * (window.innerWidth - noOption.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noOption.offsetHeight));

    return { x, y };
}

function moveNoOption() {
    const newPosition = getRandomPosition();
    noOption.style.left = newPosition.x + 'px';
    noOption.style.top = newPosition.y + 'px';
}

noOption.addEventListener('mouseover', moveNoOption);
noOption.addEventListener('touchstart', moveNoOption);

const simOption = document.querySelector('.option');

simOption.addEventListener('click', function() {
    alert("Pensei que não ia aceitar nunca!😁 Saudade❤️");

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var url = "https://www.youtube.com/watch?v=izGwDsrQ1eQ";

    if (isMobile) {
        url = "vnd.youtube://www.youtube.com/watch?v=izGwDsrQ1eQ";
    }

    window.location.href = url;
});