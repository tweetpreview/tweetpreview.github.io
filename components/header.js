// components/header.js

(function () {
  const root = document.getElementById('header-root');
  if (!root) return;

  root.innerHTML = `
    <header class="site-header" id="site-header">
      <div class="header__inner">
        <a href="#home" class="header__logo" aria-label="TweetPreview Home">
          <div class="logo-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.265 5.643L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
            </svg>
          </div>
          TweetPreview
        </a>

        <nav aria-label="Main navigation">
          <ul class="header__nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#preview-tool">Preview</a></li>
            <li><a href="#tools">Tools</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>

        <div class="header__actions">
          <a href="#preview-tool" class="btn btn--primary">Try Free</a>
        </div>

        <button class="header__hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>

    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
      <a href="#home" class="mobile-link">Home</a>
      <a href="#preview-tool" class="mobile-link">Live Preview</a>
      <a href="#tools" class="mobile-link">All Tools</a>
      <a href="#features" class="mobile-link">Features</a>
      <a href="#faq" class="mobile-link">FAQ</a>
      <a href="#preview-tool" class="btn btn--primary" style="margin-top:8px">Try Free</a>
    </nav>
  `;

  // Scroll behavior
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Hamburger
  const ham = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  ham.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    ham.setAttribute('aria-expanded', open);
  });

  // Close mobile nav on link click
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      ham.setAttribute('aria-expanded', 'false');
    });
  });
})();
