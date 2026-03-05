// components/faq.js

(function () {
  const root = document.getElementById('faq-root');
  if (!root) return;

  const faqs = [
    {
      q: 'Is TweetPreview completely free?',
      a: 'Yes — 100% free, forever. No premium tier, no credit card, no sign-up required. Just open the page and start previewing.'
    },
    {
      q: 'Which platforms does TweetPreview support?',
      a: 'Currently we support Twitter/X, Facebook, LinkedIn, Instagram, TikTok, and YouTube. More platforms are planned based on user demand.'
    },
    {
      q: 'Does TweetPreview store my post content?',
      a: 'Never. All previews are generated locally in your browser using JavaScript. No data is sent to any server. Your posts stay completely private.'
    },
    {
      q: 'Can I use TweetPreview for client work?',
      a: 'Absolutely. Many social media managers and marketing agencies use TweetPreview to show clients exactly how their posts will look before approval — great for pitch decks and approval flows.'
    },
    {
      q: 'How accurate are the previews?',
      a: 'Very accurate. We regularly update our preview components to match each platform\'s current UI, including font sizes, spacing, action buttons, and color schemes — in both light and dark mode.'
    },
    {
      q: 'Can I screenshot or share the previews?',
      a: 'Yes! Use your browser\'s built-in screenshot tool or any screen capture app to grab the preview. You can then share it anywhere.'
    },
    {
      q: 'Does it work on mobile?',
      a: 'Yes, TweetPreview is fully responsive and works great on smartphones and tablets. The interface adapts to your screen size automatically.'
    }
  ];

  const list = document.createElement('div');
  list.className = 'faq-list reveal';

  faqs.forEach((faq, i) => {
    const item = document.createElement('div');
    item.className = 'faq-item';

    item.innerHTML = `
      <button class="faq-q" aria-expanded="false">
        ${faq.q}
        <span class="faq-arrow">▾</span>
      </button>
      <div class="faq-a">${faq.a}</div>
    `;

    item.querySelector('.faq-q').addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      list.querySelectorAll('.faq-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        item.querySelector('.faq-q').setAttribute('aria-expanded', 'true');
      }
    });

    list.appendChild(item);
  });

  root.appendChild(list);
})();
