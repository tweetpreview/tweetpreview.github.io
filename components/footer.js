// components/footer.js

(function () {
  const root = document.getElementById('footer-root');
  if (!root) return;

  root.innerHTML = `
    <footer class="site-footer" aria-label="Site footer">
      <div class="container">
        <div class="footer__top">

          <!-- BRAND WIDGET -->
          <div class="footer__brand">
            <a href="#home" class="header__logo" style="margin-bottom:4px; display:inline-flex">
              <div class="logo-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.265 5.643L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
                </svg>
              </div>
              TweetPreview
            </a>
            <p>The easiest way to preview social media posts before publishing. Free, private, and always accurate.</p>
            <div class="footer__socials">
              <a href="https://twitter.com/tweetpreview" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Follow us on Twitter">
                <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.265 5.643L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
              </a>
              <a href="https://github.com/tweetpreview" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="View on GitHub">
                <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Follow on LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <!-- WIDGET 1: TOOLS -->
          <div class="footer__widget">
            <h4>Preview Tools</h4>
            <ul class="footer__links">
              <li><a href="#preview-tool">Twitter / X Preview</a></li>
              <li><a href="fb-post">Facebook Preview</a></li>
              <li><a href="linkedin-post">LinkedIn Preview</a></li>
              <li><a href="instagram-feed">Instagram Preview</a></li>
              <li><a href="tiktok-video">TikTok Preview</a></li>
              <li><a href="youtube-video">YouTube Preview</a></li>
            </ul>
          </div>

          <!-- WIDGET 2: RESOURCES -->
          <div class="footer__widget">
            <h4>Resources</h4>
            <ul class="footer__links">
              <li><a href="#how">How It Works</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="blog">Blog</a></li>              
            </ul>
          </div>

          <!-- WIDGET 3: NEWSLETTER -->
          <div class="footer__widget">
            <h4>Stay Updated</h4>
            <p style="font-size:0.83rem; color:var(--text-muted); line-height:1.65; margin-bottom:14px;">
              Get notified when we add new platforms and features. No spam, ever.
            </p>
            <div class="footer__newsletter">
              <input type="email" id="footer-email" placeholder="you@example.com" aria-label="Email address" />
              <button id="footer-subscribe">Subscribe Free</button>
            </div>
            <p style="font-size:0.72rem; color:var(--text-faint); margin-top:8px;">🔒 No spam. Unsubscribe anytime.</p>
          </div>

        </div>

        <div class="footer__bottom">
          <span>© 2026 TweetPreview. Made by Waqas Bukhari.</span>
          <div class="footer__bottom-links">
            <a href="privacy">Privacy Policy</a>
            <a href="terms">Terms of Service</a>
            <a href="contact">Contact</a>
            <a href="about">About</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  // Newsletter subscribe
  document.getElementById('footer-subscribe').addEventListener('click', () => {
    const email = document.getElementById('footer-email').value.trim();
    const btn = document.getElementById('footer-subscribe');
    if (!email || !email.includes('@')) {
      btn.textContent = 'Enter valid email';
      btn.style.background = '#ef4444';
      setTimeout(() => { btn.textContent = 'Subscribe Free'; btn.style.background = ''; }, 2000);
      return;
    }
    btn.textContent = '✓ You\'re subscribed!';
    btn.style.background = '#22c55e';
    document.getElementById('footer-email').value = '';
    setTimeout(() => { btn.textContent = 'Subscribe Free'; btn.style.background = ''; }, 3000);
  });
})();
