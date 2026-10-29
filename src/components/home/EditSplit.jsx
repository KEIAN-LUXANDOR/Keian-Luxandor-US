import { Link } from 'react-router-dom';
import { EDITS } from '../../data/home';
import Media from '../common/Media';
import Reveal from '../common/Reveal';

// Two side-by-side editorial tiles ("The Silver Edit" / "The Men's Edit").
export default function EditSplit() {
  return (
    <section className="edits">
      {EDITS.map((edit, i) => (
        <article key={edit.title} className={`edit edit--${edit.tone}`}>
          <Media className="edit__media" src={edit.image} tone={edit.tone} kind={i === 0 ? 'earrings' : 'pendant'} alt={edit.title} ratio="4 / 5" />
          <Reveal className="edit__copy">
            <h2>{edit.title}</h2>
            <p>
              {edit.text.map((line) => (
                <span key={line}>{line}<br /></span>
              ))}
            </p>
            <Link to={edit.cta.to} className="link-underline">{edit.cta.label}</Link>
          </Reveal>
        </article>
      ))}
    </section>
  );
}