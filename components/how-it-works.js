// components/how-it-works.js

(function () {
  const root = document.getElementById('how-it-works-root');
  if (!root) return;

  const steps = [
    {
      num: '01',
      title: 'Choose Your Platform',
      desc: 'Select Twitter/X, Facebook, LinkedIn, Instagram, TikTok or YouTube. Each tool is tuned to match that platform\'s exact visual style.'
    },
    {
      num: '02',
      title: 'Type Your Post',
      desc: 'Enter your content — text, hashtags, mentions, emojis. Add your display name and handle. Watch the preview update instantly as you type.'
    },
    {
      num: '03',
      title: 'Preview & Refine',
      desc: 'See exactly how your post will look to followers. Tweak until it\'s perfect, then copy or screenshot — no account needed.'
    }
  ];

  const grid = document.createElement('div');
  grid.className = 'steps-grid';

  steps.forEach((step, i) => {
    const card = document.createElement('div');
    card.className = 'step-card reveal';
    card.style.transitionDelay = `${i * 0.12}s`;
    card.innerHTML = `
      <div class="step-num">${step.num}</div>
      <h3>${step.title}</h3>
      <p>${step.desc}</p>
    `;
    grid.appendChild(card);
  });

  root.appendChild(grid);
})();
