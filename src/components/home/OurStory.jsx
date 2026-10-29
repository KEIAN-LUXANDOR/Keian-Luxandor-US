import { Link } from 'react-router-dom';
import { STORY } from '../../data/home';
import Media from '../common/Media';
import Reveal from '../common/Reveal';

export default function OurStory() {
  return (
    <section className="story">
      <Reveal className="story__copy">
        <p className="eyebrow">Since 1989</p>
        <h2>{STORY.title}</h2>
        <p>{STORY.text}</p>
        <Link to={STORY.cta.to} className="btn btn--ghost-light">{STORY.cta.label}</Link>
      </Reveal>
      <Media className="story__media" src={STORY.image} tone={STORY.tone} kind="sparkle" alt={STORY.title} ratio="auto" />
    </section>
  );
}