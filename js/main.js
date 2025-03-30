document.addEventListener('DOMContentLoaded', function () {
    const heroSection = document.querySelector('.hero');
    const trailContainer = document.getElementById('cursor-trail-container');
    const svgPaths = [
        'assets/card1.svg',
        'assets/card2.svg',
        'assets/card3.svg',
        'assets/card4.svg',
        'assets/card5.svg',
        'assets/card6.svg'
    ];
    
    let trailElements = [];
    let lastSpawnTime = 0;
    const spawnDelay = 100; 

    heroSection.addEventListener('mousemove', function (e) {
        const currentTime = Date.now();
        if (currentTime - lastSpawnTime < spawnDelay) return;
        lastSpawnTime = currentTime;

        if (trailElements.length >= 5) {
            let oldElement = trailElements.shift();
            oldElement.remove();
        }

        const trailElement = document.createElement('div');
        trailElement.classList.add('trail-element');

        const offsetX = e.clientX - heroSection.getBoundingClientRect().left;
        const offsetY = e.clientY - heroSection.getBoundingClientRect().top;
        trailElement.style.left = `${offsetX}px`;
        trailElement.style.top = `${offsetY}px`;

     
        const randomIndex = Math.floor(Math.random() * svgPaths.length);
        trailElement.style.backgroundImage = `url('${svgPaths[randomIndex]}')`;

        trailContainer.appendChild(trailElement);
        trailElements.push(trailElement);


        setTimeout(() => {
            trailElement.remove();
            trailElements = trailElements.filter(el => el !== trailElement);
        }, 800); 
    });
});
