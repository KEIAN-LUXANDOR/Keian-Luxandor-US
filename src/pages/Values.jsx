import PageHero from '../components/common/PageHero';
import Icon from '../components/common/Icon';
import Reveal from '../components/common/Reveal';
import './Content.css';

const VALUES = [
  { id: 'artisans', icon: 'award', title: 'Artisans of Love', text: 'Each design is sketched in New York and finished by master jewelers with decades of experience.' },
  { id: 'authenticity', icon: 'gem', title: 'Gemstone Authenticity', text: 'Natural diamonds are independently verified, and every stone is inspected before setting.' },
  { id: 'serial', icon: 'hash', title: 'Unique Serial Number', text: 'Every piece is engraved with a serial number and comes with a certificate of authenticity.' },
  { id: 'ethical', icon: 'shield', title: 'Ethically Sourced Jewelry', text: 'We work only with suppliers who follow conflict-free sourcing standards.' },
  { id: 'sustainable', icon: 'leaf', title: 'Sustainable Beauty', text: 'Our recycled-gold initiative reduces mining impact without compromising quality.' },
  { id: 'warranty', icon: 'shield', title: 'Lifetime Warranty', text: 'Manufacturing defects are covered for life. Register your piece to activate warranty and repairs.' },
  { id: 'returns', icon: 'refresh', title: 'Returns and Refunds', text: 'Complimentary shipping and 30-day returns on online orders in original condition.' },
  { id: 'trade-up', icon: 'arrowRight', title: 'Trade-Up Program', text: 'Upgrade a qualifying diamond piece and receive credit toward something new.' },
];

export default function Values() {
  return (
    <>
      <PageHero title="Why Choose Us" text="The promises behind every piece we make." crumbs={[{ label: 'About Us', to: '/about-us' }, { label: 'Our Values' }]} />
      <section className="section container values">
        {VALUES.map((v) => (
          <Reveal as="article" key={v.id} id={v.id} className="value">
            <Icon name={v.icon} size={30} strokeWidth={1.1} />
            <h3>{v.title}</h3>
            <p className="muted">{v.text}</p>
          </Reveal>
        ))}
      </section>
    </>
  );
}