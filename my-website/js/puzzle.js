document.addEventListener('DOMContentLoaded', function() {
    const puzzleContainer = document.getElementById('puzzle-container');
    const imageSrc = 'images/puzzle-image.jpg'; // Replace with your image path
    const rows = 4;
    const cols = 4;
    const pieces = [];

    // Create puzzle pieces
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const piece = document.createElement('div');
            piece.className = 'puzzle-piece';
            piece.style.backgroundImage = `url(${imageSrc})`;
            piece.style.backgroundPosition = `${-col * 100}px ${-row * 100}px`;
            piece.style.width = `${100 / cols}%`;
            piece.style.height = `${100 / rows}%`;
            piece.dataset.row = row;
            piece.dataset.col = col;
            pieces.push(piece);
        }
    }

    // Shuffle pieces
    pieces.sort(() => Math.random() - 0.5);

    // Add pieces to the container
    pieces.forEach(piece => puzzleContainer.appendChild(piece));

    // Add drag and drop functionality
    let draggedPiece = null;

    puzzleContainer.addEventListener('dragstart', function(event) {
        draggedPiece = event.target;
        event.dataTransfer.setData('text/plain', '');
    });

    puzzleContainer.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    puzzleContainer.addEventListener('drop', function(event) {
        event.preventDefault();
        const targetPiece = event.target;
        if (targetPiece.className === 'puzzle-piece') {
            const draggedRow = draggedPiece.dataset.row;
            const draggedCol = draggedPiece.dataset.col;
            const targetRow = targetPiece.dataset.row;
            const targetCol = targetPiece.dataset.col;

            // Swap pieces
            [draggedPiece.dataset.row, targetPiece.dataset.row] = [targetRow, draggedRow];
            [draggedPiece.dataset.col, targetPiece.dataset.col] = [targetCol, draggedCol];

            // Update positions
            draggedPiece.style.backgroundPosition = `${-targetCol * 100}px ${-targetRow * 100}px`;
            targetPiece.style.backgroundPosition = `${-draggedCol * 100}px ${-draggedRow * 100}px`;

            // Check if puzzle is solved
            if (isPuzzleSolved()) {
                const loveMessage = document.getElementById('love-message');
                loveMessage.style.display = 'block';
                loveMessage.innerHTML = '<h3 class="text-danger">เก่งมาก รางวัลคือ 1234</h3>';
                loveMessage.classList.add('show-message');
            }
        }
    });

    function isPuzzleSolved() {
        return pieces.every(piece => {
            const row = piece.dataset.row;
            const col = piece.dataset.col;
            const correctRow = Math.floor(pieces.indexOf(piece) / cols);
            const correctCol = pieces.indexOf(piece) % cols;
            return row == correctRow && col == correctCol;
        });
    }
});
