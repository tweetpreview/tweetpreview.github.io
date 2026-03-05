// components/features.js

(function () {
  const root = document.getElementById('features-root');
  if (!root) return;

  const features = [
    { icon: '⚡', title: 'Real-Time Rendering', desc: 'The preview updates instantly as you type — no submit button, no delay. Just pure live feedback.' },
    { icon: '🎨', title: 'Light & Dark Mode', desc: 'Toggle between dark and light themes to preview exactly what your audience sees based on their device settings.' },
    { icon: '📱', title: 'Mobile-Accurate', desc: 'Previews replicate the mobile UI of each platform — because that\'s where most of your followers actually scroll.' },
    { icon: '🔒', title: 'Zero Data Storage', desc: 'Everything runs in your browser. We never see, log, or store your post content. Your drafts stay yours.' },
    { icon: '🌐', title: '6 Platforms', desc: 'One site, six tools: Twitter/X, Facebook, LinkedIn, Instagram, TikTok, and YouTube — all with platform-accurate styling.' },
    { icon: '🚀', title: 'No Login Required', desc: 'Open and use immediately. No accounts, no subscriptions, no friction. The tool is always free.' },
    { icon: '#️⃣', title: 'Hashtag Highlighting', desc: 'Hashtags and @mentions are highlighted in real time, just like the real platform renders them.' },
    { icon: '✅', title: 'Verified Badge Toggle', desc: 'Toggle the verified badge on or off to mock up exactly the post you\'re crafting — for yourself or a client.' },
    { icon: '📊', title: 'Engagement Numbers', desc: 'Set custom like, repost, and comment counts to create realistic-looking post previews for presentations.' },
  ];

  const grid = document.createElement('div');
  grid.className = 'features-grid';

  features.forEach((f, i) => {
    const item = document.createElement('div');
    item.className = 'feature-item reveal';
    item.style.transitionDelay = `${(i % 3) * 0.08}s`;
    item.innerHTML = `
      <div class="feature-icon">${f.icon}</div>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    `;
    grid.appendChild(item);
  });

  root.appendChild(grid);
})();
