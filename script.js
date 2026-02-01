function moveButton() {
    const noBtn = document.getElementById('noButton');
    
    // Calculate random positions
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function handleYesClick() {
    const music = document.getElementById('bg-music');
    music.play();
    document.getElementById('question').innerText = "Yay! See you on the 14th! ❤️";
    document.getElementById('gif-display').src = "tom.gif"; // Happy GIF
    
    // Hide buttons after clicking yes
    document.querySelector('.buttons').style.display = 'none';
}
