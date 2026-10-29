import { TRUST_BADGES } from '../../data/home';
import Icon from '../common/Icon';

export default function TrustBar() {
  return (
    <section className="trust" aria-label="Why shop with us">
      <ul className="trust__list container">
        {TRUST_BADGES.map((b) => (
          <li key={b.label}>
            <Icon name={b.icon} size={26} strokeWidth={1.1} />
            <span>{b.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}