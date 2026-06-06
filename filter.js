const tags = document.querySelectorAll('.tag');
const gridItems = document.querySelectorAll('.grid-item');

const filterItems = (filter) => {
    gridItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category').includes(filter)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
};

tags.forEach(tag => {
    tag.addEventListener('click', () => {
        tags.forEach(btn => btn.classList.remove('active'));
        tag.classList.add('active');
        const filter = tag.getAttribute('data-filter');
        filterItems(filter);
    });
});

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        tags.forEach(tag => tag.classList.remove('active'));
        const correspondingTag = document.querySelector(`.tag[data-filter="${filter}"]`);
        if (correspondingTag) {
            correspondingTag.classList.add('active');
        }

        filterItems(filter);
    });
});