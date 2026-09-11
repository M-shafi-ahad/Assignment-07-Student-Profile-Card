

  const colors = ['#4f46e5', '#059669', '#dc2626', '#d97706', '#0891b2', '#7c3aed'];
  const btn = document.getElementById('colorBtn');
  const avatar = document.querySelector('.avatar');
  const name = document.querySelector('.student-name');

  btn.addEventListener('click', () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    btn.style.background = color;
    avatar.style.background = color;
    name.style.color = color;
  });
