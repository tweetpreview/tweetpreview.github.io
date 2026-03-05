// components/twitter-tool.js

(function () {
  const root = document.getElementById('twitter-tool-root');
  if (!root) return;

  root.innerHTML = `
    <div class="twitter-tool">
      <!-- COMPOSER -->
      <div class="tweet-composer reveal">
        <h3>
          <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.265 5.643L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
          Compose Tweet
        </h3>

        <div class="options-row">
          <div class="field-group">
            <label for="tweet-name">Display Name</label>
            <input class="field-input" id="tweet-name" type="text" value="Your Name" placeholder="Your Name" maxlength="50" />
          </div>
          <div class="field-group">
            <label for="tweet-handle">Username</label>
            <input class="field-input" id="tweet-handle" type="text" value="@yourhandle" placeholder="@yourhandle" maxlength="16" />
          </div>
        </div>

        <div class="field-group">
          <label for="tweet-text">Tweet Content</label>
          <textarea class="field-textarea" id="tweet-text" placeholder="What's happening?" maxlength="280">Type your tweet here and watch the preview update live! ✨ Add #hashtags and @mentions to see how they render. #TweetPreview</textarea>
          <div class="char-count" id="char-count">131 / 280</div>
        </div>

        <div class="options-row">
          <div class="field-group">
            <label for="tweet-date">Date & Time</label>
            <input class="field-input" id="tweet-date" type="text" value="3:42 PM · Mar 5, 2026" />
          </div>
          <div class="field-group">
            <label for="tweet-emoji">Avatar Emoji</label>
            <input class="field-input" id="tweet-emoji" type="text" value="😊" maxlength="2" />
          </div>
        </div>

        <div class="options-row">
          <div class="field-group">
            <label for="tweet-likes">Likes</label>
            <input class="field-input" id="tweet-likes" type="text" value="1.2K" />
          </div>
          <div class="field-group">
            <label for="tweet-reposts">Reposts</label>
            <input class="field-input" id="tweet-reposts" type="text" value="284" />
          </div>
        </div>

        <div class="toggle-row">
          <span class="toggle-label">Verified badge</span>
          <button class="toggle on" id="toggle-verified" aria-pressed="true" aria-label="Toggle verified badge"></button>
        </div>
        <div class="toggle-row">
          <span class="toggle-label">Light mode preview</span>
          <button class="toggle" id="toggle-lightmode" aria-pressed="false" aria-label="Toggle light mode"></button>
        </div>
        <div class="toggle-row">
          <span class="toggle-label">Show image placeholder</span>
          <button class="toggle" id="toggle-image" aria-pressed="false" aria-label="Toggle image placeholder"></button>
        </div>

        <button class="btn btn--primary" id="copy-tweet-btn" style="width:100%;margin-top:20px;justify-content:center;">
          Copy Preview Link
        </button>
      </div>

      <!-- PREVIEW -->
      <div class="tweet-preview-wrap reveal" style="transition-delay:.1s">
        <div class="preview-label">Live Preview</div>
        <div class="tweet-card dark-mode" id="live-tweet-card">
          <div class="tweet-header">
            <div class="tweet-avatar" id="lp-avatar">😊</div>
            <div class="tweet-user">
              <div class="tweet-name" id="lp-name" style="color:#e7e9ea">
                Your Name
                <svg id="lp-verified" viewBox="0 0 22 22" width="16" height="16" fill="#1d9bf0"><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"/></svg>
              </div>
              <div class="tweet-handle" id="lp-handle" style="color:#71767b">@yourhandle</div>
            </div>
            <div class="tweet-more" style="color:#71767b">···</div>
          </div>

          <div class="tweet-body" id="lp-body" style="color:#e7e9ea"></div>
          <div class="tweet-image-placeholder" id="lp-image" style="display:none">📷 Image preview will appear here</div>

          <div class="tweet-time" id="lp-time" style="color:#71767b">3:42 PM · Mar 5, 2026 · <strong style="color:#e7e9ea">TweetPreview Web App</strong></div>
          <div class="tweet-stats" style="border-color:#2f3336; color:#71767b">
            <span><strong id="lp-reposts" style="color:#e7e9ea">284</strong> Reposts</span>
            <span><strong id="lp-likes" style="color:#e7e9ea">1.2K</strong> Likes</span>
          </div>
          <div class="tweet-actions">
            <button style="color:#71767b">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              48
            </button>
            <button style="color:#71767b">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
              <span id="lp-reposts-btn">284</span>
            </button>
            <button style="color:#71767b">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              <span id="lp-likes-btn">1.2K</span>
            </button>
            <button style="color:#71767b">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Helpers
  function formatTweetText(text) {
    return text
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/(#\w+)/g, '<span class="hashtag">$1</span>')
      .replace(/(@\w+)/g, '<span class="hashtag">$1</span>')
      .replace(/(https?:\/\/\S+)/g, '<a href="$1" target="_blank">$1</a>');
  }

  function updatePreview() {
    const card = document.getElementById('live-tweet-card');
    const isLight = document.getElementById('toggle-lightmode').classList.contains('on');
    const isVerified = document.getElementById('toggle-verified').classList.contains('on');
    const showImage = document.getElementById('toggle-image').classList.contains('on');

    // Theme
    card.className = 'tweet-card ' + (isLight ? 'light-mode' : 'dark-mode');
    const textColor = isLight ? '#0f1419' : '#e7e9ea';
    const mutedColor = isLight ? '#536471' : '#71767b';
    const borderColor = isLight ? '#eff3f4' : '#2f3336';
    card.style.borderColor = borderColor;

    // Name & handle
    const nameEl = document.getElementById('lp-name');
    nameEl.style.color = textColor;
    const verSvg = document.getElementById('lp-verified');
    verSvg.style.display = isVerified ? 'inline' : 'none';
    
    const nameText = document.getElementById('tweet-name').value || 'Your Name';
    nameEl.childNodes[0].textContent = nameText + ' ';

    document.getElementById('lp-handle').textContent = document.getElementById('tweet-handle').value || '@yourhandle';
    document.getElementById('lp-handle').style.color = mutedColor;

    // Avatar
    document.getElementById('lp-avatar').textContent = document.getElementById('tweet-emoji').value || '😊';

    // Body
    const bodyEl = document.getElementById('lp-body');
    bodyEl.innerHTML = formatTweetText(document.getElementById('tweet-text').value);
    bodyEl.style.color = textColor;

    // Image
    document.getElementById('lp-image').style.display = showImage ? 'grid' : 'none';

    // Time
    const timeEl = document.getElementById('lp-time');
    timeEl.innerHTML = (document.getElementById('tweet-date').value || '3:42 PM · Mar 5, 2026') + ' · <strong style="color:' + textColor + '">TweetPreview Web App</strong>';
    timeEl.style.color = mutedColor;

    // Stats
    const reposts = document.getElementById('tweet-reposts').value || '0';
    const likes = document.getElementById('tweet-likes').value || '0';
    document.getElementById('lp-reposts').textContent = reposts;
    document.getElementById('lp-likes').textContent = likes;
    document.getElementById('lp-reposts').style.color = textColor;
    document.getElementById('lp-likes').style.color = textColor;
    document.getElementById('lp-reposts-btn').textContent = reposts;
    document.getElementById('lp-likes-btn').textContent = likes;

    card.querySelectorAll('.tweet-stats').forEach(el => {
      el.style.borderColor = borderColor;
      el.style.color = mutedColor;
    });
    card.querySelectorAll('.tweet-actions button').forEach(b => b.style.color = mutedColor);
  }

  // Char counter
  const textarea = document.getElementById('tweet-text');
  const charCount = document.getElementById('char-count');
  function updateCharCount() {
    const len = textarea.value.length;
    const remaining = 280 - len;
    charCount.textContent = `${len} / 280`;
    charCount.className = 'char-count' + (remaining < 20 ? ' warn' : '') + (remaining < 0 ? ' over' : '');
  }

  // Toggles
  function setupToggle(id) {
    const btn = document.getElementById(id);
    btn.addEventListener('click', () => {
      btn.classList.toggle('on');
      btn.setAttribute('aria-pressed', btn.classList.contains('on'));
      updatePreview();
    });
  }
  setupToggle('toggle-verified');
  setupToggle('toggle-lightmode');
  setupToggle('toggle-image');

  // Live inputs
  ['tweet-name', 'tweet-handle', 'tweet-text', 'tweet-date', 'tweet-emoji', 'tweet-likes', 'tweet-reposts'].forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener('input', () => { updateCharCount(); updatePreview(); });
  });

  // Copy link
  document.getElementById('copy-tweet-btn').addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const btn = document.getElementById('copy-tweet-btn');
      btn.textContent = '✓ Link Copied!';
      setTimeout(() => btn.textContent = 'Copy Preview Link', 2000);
    });
  });

  // Init
  updateCharCount();
  updatePreview();
})();
