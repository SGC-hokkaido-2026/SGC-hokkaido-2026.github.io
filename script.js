// モバイルメニュー
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
}));

// 開催日までのカウントダウン(2026-11-28 10:00 JST)
const target = new Date('2026-11-28T10:00:00+09:00');
const el = document.getElementById('countdown');
function tick() {
  const diff = target - new Date();
  if (diff <= 0) { el.textContent = ''; return; }
  const days = Math.ceil(diff / 86400000);
  el.textContent = `開催まであと ${days} 日`;
}
tick();

// 未設定のリンク(プレースホルダー)は押せないようにする
['mapLink', 'applyLink'].forEach(id => {
  const a = document.getElementById(id);
  if (a && a.getAttribute('href').includes('【')) {
    a.setAttribute('aria-disabled', 'true');
    a.addEventListener('click', e => e.preventDefault());
    a.style.opacity = '.55';
    a.style.cursor = 'not-allowed';
  }
});
