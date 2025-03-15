document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('textarea');
    const saveButton = document.querySelector('.btn-danger');

    saveButton.addEventListener('click', function() {
        localStorage.setItem('letterContent', textarea.value);
    });
});