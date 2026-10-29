import { Link } from 'react-router-dom';
import { PROMO_CARDS } from '../../data/home';
import Media from '../common/Media';
import Reveal from '../common/Reveal';

export default function PromoCards() {
  return (
    <section className="section promos">
      <div className="container promos__grid">
        {PROMO_CARDS.map((card, i) => (
          <Reveal key={card.title} as="article" className="promo">
            <Link to={card.cta.to} className="promo__link">
              <Media src={card.image} tone={card.tone} kind={i === 0 ? 'sparkle' : 'bracelet'} alt={card.title} ratio="16 / 10" />
              <div className="promo__copy">
                <h3>{card.title}</h3>
                <p className="muted">{card.text}</p>
                <span className="link-underline">{card.cta.label}</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}