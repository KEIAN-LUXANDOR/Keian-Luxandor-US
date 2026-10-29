import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import CategoryStrip from '../components/home/CategoryStrip';
import CampaignBanner from '../components/home/CampaignBanner';
import BridalBanner from '../components/home/BridalBanner';
import EditSplit from '../components/home/EditSplit';
import ProductRail from '../components/home/ProductRail';
import PromoCards from '../components/home/PromoCards';
import OurStory from '../components/home/OurStory';
import '../components/home/home.css';

// Section order mirrors the reference site's home page.
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CategoryStrip />
      <CampaignBanner />
      <BridalBanner />
      <EditSplit />
      <ProductRail />
      <PromoCards />
      <OurStory />
    </>
  );
}