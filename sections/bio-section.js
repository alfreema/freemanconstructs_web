import { LitElement, html, css } from 'https://esm.sh/lit';

export class BioSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 5rem 1.5rem;
      background-color: #ffffff;
      color: #1f2937; /* Tailwind gray-800 */
    }

    .container {
      max-width: 64rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    @media (min-width: 768px) {
      .container {
        flex-direction: row;
        align-items: flex-start;
      }
    }

    img {
      width: 10rem;
      height: 10rem;
      object-fit: cover;
      border-radius: 0.75rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      flex-shrink: 0;
    }

    h2 {
      font-size: 1.875rem;
      font-weight: 300;
      color: #6366f1;
      margin-bottom: 1rem;
    }

    p {
      line-height: 1.7;
      margin-top: 1rem;
    }

    a {
      color: #6366f1;
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <section id="bio">
        <div class="container" data-aos="fade-up">
          <img
            src="https://raw.githubusercontent.com/alfreema/freemanconstructs_web/main/200x200.jpg"
            alt="Aaron Freeman"
          />
          <div>
            <h2>Bio: Aaron Freeman</h2>
            <p>
              Aaron Freeman is a lifelong technologist and entrepreneur. He began coding at age 8, launched a BBS in 1983, and later earned a B.S. in
              Computer Science and an M.S. in Electrical Engineering (with a focus on computer architecture) from Wichita State University.
            </p>
            <p>
              While pursuing his Ph.D. he was awarded a Teaching Fellowship, where he taught various programming, computer architecture, genetic algorithms, and other courses.   
              He founded Adroit, a consulting firm serving major clients including AmeriServe (formerly PepsiCo Food Services). He was awarded a U.S. patent for the first
              internet-connected sprinkler system (US-7123993-B1) and founded <a href="https://sendthisfile.com" target="_blank">SendThisFile</a>, the first file-transfer-as-a-service platform.
            </p>
            <p>
              He and his wife Larissa are active investors and entrepreneurs across sectors including retail, real estate, and infrastructure.
              He has led development efforts in robotics, cloud, real estate, trading, and AI.
            </p>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('bio-section', BioSection);
