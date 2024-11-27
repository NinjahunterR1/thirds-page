const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  
  if (e.target.matches('.next')) {
    // Move the first item to the end
    slider.append(items[0]);
  } else if (e.target.matches('.prev')) {
    // Move the last item to the start
    slider.prepend(items[items.length - 1]);
  }
}

document.addEventListener('click', activate, false);
document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', function() {
    const extraContent = this.previousElementSibling;
    
    if (extraContent.classList.contains('hidden')) {
      extraContent.classList.remove('hidden');
      this.textContent = 'Show Less';
    } else {
      extraContent.classList.add('hidden');
      this.textContent = 'Read More';
    }
  });
});
