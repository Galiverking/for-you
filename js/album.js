document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('album');
    const albumTitle = urlParams.get('title');
    const albumImages = {
        album1: ['images/memory1.png', 'images/memory2.png', 'images/memory3.png'],
        album2: ['images/memory4.png', 'images/memory5.png', 'images/memory6.png'],
        album3: ['images/memory7.png', 'images/memory8.png', 'images/memory9.png']
    };

    document.getElementById('album-title').textContent = albumTitle;

    const albumContainer = document.querySelector('.album-images');
    albumImages[albumId].forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.className = 'img-fluid mb-3';
        albumContainer.appendChild(img);
    });
});
