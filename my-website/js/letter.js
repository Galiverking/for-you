document.addEventListener('DOMContentLoaded', function() {
    const letterContent = localStorage.getItem('letterContent') || 'Your love letter will be displayed here...';
    document.getElementById('letter-content').textContent = letterContent;
});
