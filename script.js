document.addEventListener('DOMContentLoaded', () => {
  console.log("Digital card ready!");

  const learnMoreBtn = document.getElementById('learn-more-btn');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('close-btn');

  if (learnMoreBtn && overlay && closeBtn) {
    learnMoreBtn.addEventListener('click', () => {
      overlay.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
      overlay.style.display = 'none';
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.style.display = 'none';
      }
    });
  }
});
