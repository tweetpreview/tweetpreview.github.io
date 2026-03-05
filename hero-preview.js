// components/hero-preview.js

(function () {
  const root = document.getElementById('hero-preview-root');
  if (!root) return;

  root.innerHTML = `
    <div class="hero-mini-preview">
      <div class="mini-browser-bar">
        <div class="browser-dots">
          <span></span><span></span><span></span>
        </div>
        <div class="browser-url">tweetpreview.github.io</div>
      </div>
      <div style="padding: 14px;">
        <div class="tweet-card dark-mode" id="hero-tweet-card" style="border:1px solid #2f3336; box-shadow: 0 24px 60px rgba(0,0,0,0.5)">
          <div class="tweet-header">
            <div class="tweet-avatar">🐦</div>
            <div class="tweet-user">
              <div class="tweet-name" style="color:#e7e9ea">
                TweetPreview
                <svg viewBox="0 0 22 22" width="16" height="16" fill="#1d9bf0"><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"/></svg>
              </div>
              <div class="tweet-handle" style="color:#71767b">@tweetpreview</div>
            </div>
            <div class="tweet-more" style="color:#71767b">···</div>
          </div>
          <div class="tweet-body" style="color:#e7e9ea" id="hero-tweet-body">Just discovered <span class="hashtag">#TweetPreview</span> — you can see exactly how your tweet looks before posting. This is a game-changer! 🚀✨</div>
          <div class="tweet-time" style="color:#71767b">3:42 PM · Mar 5, 2026 · <strong style="color:#e7e9ea">TweetPreview</strong></div>
          <div class="tweet-stats" style="border-color:#2f3336; color:#71767b">
            <span><strong style="color:#e7e9ea">284</strong> Reposts</span>
            <span><strong style="color:#e7e9ea">1.2K</strong> Likes</span>
          </div>
          <div class="tweet-actions">
            <button style="color:#71767b">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              48
            </button>
            <button style="color:#71767b">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
              284
            </button>
            <button style="color:#71767b">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              1.2K
            </button>
            <button style="color:#71767b">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
        </div>

        <!-- Platform switcher mini -->
        <div style="display:flex; gap:8px; margin-top:14px; justify-content:center;">
          <button class="mini-platform active" data-platform="twitter" style="padding:6px 14px; border-radius:99px; font-size:0.75rem; font-weight:700; background:rgba(29,155,240,0.15); color:#1d9bf0; border:1px solid rgba(29,155,240,0.3); cursor:pointer; font-family:inherit;">Twitter/X</button>
          <button class="mini-platform" data-platform="facebook" style="padding:6px 14px; border-radius:99px; font-size:0.75rem; font-weight:700; background:rgba(255,255,255,0.04); color:#8892aa; border:1px solid rgba(255,255,255,0.07); cursor:pointer; font-family:inherit;">Facebook</button>
          <button class="mini-platform" data-platform="linkedin" style="padding:6px 14px; border-radius:99px; font-size:0.75rem; font-weight:700; background:rgba(255,255,255,0.04); color:#8892aa; border:1px solid rgba(255,255,255,0.07); cursor:pointer; font-family:inherit;">LinkedIn</button>
        </div>
      </div>
    </div>
  `;

  // Platform previews
  const previews = {
    twitter: {
      name: 'TweetPreview',
      handle: '@tweetpreview',
      text: 'Just discovered <span class="hashtag">#TweetPreview</span> — you can see exactly how your tweet looks before posting. This is a game-changer! 🚀✨',
      emoji: '🐦',
      bg: '#000',
      border: '#2f3336',
      textColor: '#e7e9ea',
      mutedColor: '#71767b'
    },
    facebook: {
      name: 'TweetPreview',
      handle: 'tweetpreview.github.io',
      text: 'Preview your Facebook posts before publishing with TweetPreview! ✨ See exactly how your audience will see your content. No login needed. 💙',
      emoji: '📘',
      bg: '#242526',
      border: '#3a3b3c',
      textColor: '#e4e6eb',
      mutedColor: '#b0b3b8'
    },
    linkedin: {
      name: 'TweetPreview',
      handle: 'Social Media Tools · tweetpreview.github.io',
      text: 'Excited to share TweetPreview — a free tool for previewing social media posts before publishing. Perfect for marketers, creators & brands. 🚀 #SocialMedia #Marketing',
      emoji: '💼',
      bg: '#1b1f23',
      border: '#283039',
      textColor: '#fff',
      mutedColor: '#8892aa'
    }
  };

  const buttons = document.querySelectorAll('.mini-platform');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.style.background = 'rgba(255,255,255,0.04)';
        b.style.color = '#8892aa';
        b.style.borderColor = 'rgba(255,255,255,0.07)';
        b.classList.remove('active');
      });
      btn.style.background = 'rgba(29,155,240,0.15)';
      btn.style.color = '#1d9bf0';
      btn.style.borderColor = 'rgba(29,155,240,0.3)';
      btn.classList.add('active');

      const p = previews[btn.dataset.platform];
      const card = document.getElementById('hero-tweet-card');
      card.style.background = p.bg;
      card.style.borderColor = p.border;
      card.querySelector('.tweet-avatar').textContent = p.emoji;
      card.querySelector('.tweet-name').innerHTML = p.name + ' <svg viewBox="0 0 22 22" width="16" height="16" fill="#1d9bf0"><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"/></svg>';
      card.querySelector('.tweet-name').style.color = p.textColor;
      card.querySelector('.tweet-handle').textContent = p.handle;
      card.querySelector('.tweet-handle').style.color = p.mutedColor;
      document.getElementById('hero-tweet-body').innerHTML = p.text;
      document.getElementById('hero-tweet-body').style.color = p.textColor;
    });
  });
})();
