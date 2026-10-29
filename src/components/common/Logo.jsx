import { SITE } from '../../config/site';

// Two-line text logo:
//   KEIAN      ← underlined
//   LUXANDOR
export default function Logo({ light = false }) {
  return (
    <span className={`logo logo--stack ${light ? 'logo--light' : ''}`} aria-label={SITE.name}>
      <span className="logo__top">{SITE.logoTop}</span>
      <span className="logo__bottom">{SITE.logoBottom}</span>
    </span>
  );
}