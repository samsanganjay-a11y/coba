// Interactive logic for Antigravity Demo Web
const themeToggle = document.getElementById('themeToggle');
const btnTest = document.getElementById('btnTest');
const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const counterValue = document.getElementById('counterValue');
const statusMessage = document.getElementById('statusMessage');

let count = 0;

// Theme Toggle (Dark / Light)
themeToggle.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  if (currentTheme === 'light') {
    document.body.removeAttribute('data-theme');
    themeToggle.textContent = '🌙 Mode';
  } else {
    document.body.setAttribute('data-theme', 'light');
    themeToggle.textContent = '☀️ Mode';
  }
});

// Counter
incrementBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});

decrementBtn.addEventListener('click', () => {
  count--;
  updateCounter();
});

function updateCounter() {
  counterValue.textContent = count;
  statusMessage.textContent = `Nilai counter saat ini: ${count}`;
  statusMessage.style.color = count > 0 ? '#38bdf8' : count < 0 ? '#f43f5e' : 'var(--text-muted)';
}

// Test Button
btnTest.addEventListener('click', () => {
  statusMessage.textContent = '🎉 Berhasil! Interaktivitas JavaScript berfungsi sempurna.';
  statusMessage.style.background = 'rgba(34, 197, 94, 0.15)';
  statusMessage.style.color = '#22c55e';
});
