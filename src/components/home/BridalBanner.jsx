import { Link } from 'react-router-dom';
import { BRIDAL } from '../../data/home';
import Media from '../common/Media';
import Reveal from '../common/Reveal';

export default function BridalBanner() {
  return (
    <section className="bridal">
      <Media className="bridal__media" src={BRIDAL.image} tone={BRIDAL.tone} kind="ring" alt="Bridal collection" ratio="auto" />
      <Reveal className="bridal__copy">
        <h2>{BRIDAL.title}</h2>
        <p>{BRIDAL.text}</p>
        <div className="bridal__ctas">
          {BRIDAL.ctas.map((c) => (
            <Link key={c.to} to={c.to} className="btn">{c.label}</Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}