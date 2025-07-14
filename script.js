// Optional interactivity — can be expanded later
console.log("Digital card ready!");
 const learnMoreBtn = document.getElementById('learn-more-btn');
  const extraInfo = document.getElementById('extra-info');

  learnMoreBtn.addEventListener('click', () => {
    const isVisible = extraInfo.style.display === 'block';
    extraInfo.style.display = isVisible ? 'none' : 'block';
    learnMoreBtn.innerHTML = isVisible
      ? '<i class="fas fa-info-circle"></i> Learn More'
      : '<i class="fas fa-chevron-up"></i> Show Less';
  });
