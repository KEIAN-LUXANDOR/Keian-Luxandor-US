import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import Media from '../components/common/Media';
import Reveal from '../components/common/Reveal';
import { SITE } from '../config/site';
import './Content.css';

const TIMELINE = [
  { year: SITE.since, text: 'Founded in New York with a single bridal collection and a promise of craftsmanship.' },
  { year: 2004, text: 'Introduced our signature fine-jewelry line and expanded to partner stores nationwide.' },
  { year: 2015, text: 'Launched our recycled-gold initiative and unique serial numbering on every piece.' },
  { year: 2024, text: 'Recognised as one of the most awarded jewelry designers in the industry.' },
];

export default function About() {
  return (
    <>
      <PageHero title="Our Story" text="Discover the passion and artistry behind every piece we create." crumbs={[{ label: 'About Us' }]} />

      <section className="section container split">
        <Media tone="gold" kind="ring" ratio="4 / 5" />
        <Reveal className="split__copy">
          <p className="eyebrow muted">Since {SITE.since}</p>
          <h2>Artisans of Love</h2>
          <p>
            For more than three decades our designers and master jewelers have worked side by side, translating
            moments of love into heirlooms. Every piece is designed in New York and finished by hand.
          </p>
          <p>
            We believe fine jewelry should be meaningful, responsibly made, and built to last a lifetime — which is why
            each design carries its own serial number and a lifetime warranty.
          </p>
          <Link to="/our-values" className="link-underline">Our Values</Link>
        </Reveal>
      </section>

      <section className="section timeline-wrap" id="press">
        <div className="container">
          <h2 className="section-head">Milestones</h2>
          <ol className="timeline">
            {TIMELINE.map((t) => (
              <Reveal as="li" key={t.year}>
                <span className="serif timeline__year">{t.year}</span>
                <p>{t.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section container split split--reverse" id="foundation">
        <Media tone="blush" kind="pendant" ratio="4 / 5" />
        <Reveal className="split__copy">
          <p className="eyebrow muted">Giving Back</p>
          <h2>Our Foundation</h2>
          <p>Proceeds from our giving-back collection support children’s charities and community partners.</p>
          <Link to="/collections/giving-back" className="btn btn--outline">Shop to Give</Link>
        </Reveal>
      </section>

      <section className="section container split" id="designer">
        <Media tone="silver" kind="earrings" ratio="4 / 5" />
        <Reveal className="split__copy" id="stories">
          <p className="eyebrow muted">Designer Spotlight & Love Stories</p>
          <h2>Made for Your Moments</h2>
          <p>From proposals to anniversaries, our community shares the stories behind their pieces. Share yours with us.</p>
          <Link to="/contact-us" className="link-underline">Share Your Story</Link>
        </Reveal>
      </section>
    </>
  );
}