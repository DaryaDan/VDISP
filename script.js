const TAGS = document.getElementById('tags');
TAGS.addEventListener('click', (event) => {
TAGS.querySelectorAll('button').forEach(el => el.classList.remove('tags_active'));
event.target.classList.add('tags_active');
});
