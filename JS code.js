const elements = {
    childCard: document.getElementById('child-massage-card'),
    galleryBtn: document.getElementById('galleryBtn'),
    modals: {
        child: document.getElementById('childModal'),
        gallery: document.getElementById('galleryModal')
    },
    closeButtons: document.querySelectorAll('.close')
};

const openModal = (modal) => {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
};

const closeModal = (modal) => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

elements.childCard.addEventListener('click', () => openModal(elements.modals.child));
elements.galleryBtn.addEventListener('click', () => openModal(elements.modals.gallery));

elements.closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        closeModal(modal);
    });
});

Object.values(elements.modals).forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
    });
});