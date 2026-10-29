import { Link } from 'react-router-dom';
import { CAMPAIGN } from '../../data/home';
import Media from '../common/Media';
import Reveal from '../common/Reveal';

export default function CampaignBanner() {
  return (
    <section className="campaign">
      <Media className="campaign__media" src={CAMPAIGN.image} tone={CAMPAIGN.tone} kind="necklace" alt="Campaign" ratio="auto" />
      <Reveal className="campaign__copy">
        <h2>
          {CAMPAIGN.title} <em>{CAMPAIGN.titleItalic}</em>
          <sup>™</sup>
        </h2>
        <p>{CAMPAIGN.text}</p>
        <Link to={CAMPAIGN.cta.to} className="btn btn--outline">{CAMPAIGN.cta.label}</Link>
      </Reveal>
    </section>
  );
}