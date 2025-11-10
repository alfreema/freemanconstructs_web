import { LitElement, html, css } from 'https://esm.sh/lit';
import lottie from 'https://esm.sh/lottie-web';

export class HeroSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
      width: 100vw;
      height: 100vh;
      color: #555;
      overflow: hidden;
      /* Inherit site font (Inter via next/font) */
      font-family: inherit;
    }

    .lottie-bg {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100vw;
      height: 100vh;
      transform: translate(-50%, -50%);
      z-index: 0;
      opacity: 0.4;
      pointer-events: none;
    }

    .content {
      position: relative;
      z-index: 2;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      text-align: center;
      padding: 22vh 1.5rem 0 1.5rem;
    }

    .brand {
      font-size: 0.875rem;
      font-weight: 300;
      color: #999;
      margin-bottom: 0.75rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    h1 {
      font-size: 3.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #222;
    }

    .tagline,
    .subtext {
      font-size: 1.25rem;
      color: #555;
      max-width: 38rem;
      margin: 0.5rem auto;
      line-height: 1.6;
    }

    .scroll-indicator {
      position: absolute;
      bottom: 6rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
    }

    .scroll-indicator-inner {
      width: 1.5rem;
      height: 2.5rem;
      border: 2px solid #aaa;
      border-radius: 9999px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 0.25rem;
    }

    .scroll-dot {
      width: 0.25rem;
      height: 0.5rem;
      background-color: #aaa;
      border-radius: 9999px;
      animation: bounce 1.5s infinite;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(6px); }
    }

    /* 📱 Mobile adjustments */
    @media (max-width: 600px) {
      .lottie-bg {
        width: 60vw;
        height: 60vw;
        opacity: 0.4;
      }

      .content {
        padding-top: 18vh;
      }

      .tagline,
      .subtext {
        font-size: 1.125rem;
        margin: 0.75rem auto;
        max-width: 90vw;
      }

      h1 {
        font-size: 2.5rem;
      }
    }
  `;

  firstUpdated() {
    const container = this.renderRoot.querySelector('#lottie-bg');
    lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/AI.json',
    });
  }

  render() {
    return html`
      <section id="home">
        <div id="lottie-bg" class="lottie-bg"></div>
        <div class="content">
          <div class="brand">A project by Freeman Constructs</div>
          <h1>Tenfold</h1>
          <p class="tagline">10× Faster AI Compute — with Integer Arithmetic</p>
          <p class="subtext">Computing AI with zero floating-point math</p>
        </div>
        <div class="scroll-indicator">
          <div class="scroll-indicator-inner">
            <div class="scroll-dot"></div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
