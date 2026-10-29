import { SITE } from '../config/site';

export const FOOTER_COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'Engagement Rings', to: '/collections/engagement-rings' },
      { label: 'Wedding Rings', to: '/collections/wedding-rings' },
      { label: 'Fine Jewelry', to: '/collections/fine-jewelry' },
      { label: "Men's Jewelry", to: '/collections/mens-jewelry' },
      { label: 'Birthstone Jewelry', to: '/collections/birthstone-jewelry' },
    ],
  },
  {
    title: 'Our Company',
    links: [
      { label: 'About Us', to: '/about-us' },
      { label: 'Journal', to: '/guides/engagement-ring-guide' },
    ],
  },
  {
    title: 'Customer Care',
    links: [
      { label: 'Shipping & Return Policy', to: '/our-values#returns' },
      { label: 'Warranty & Repairs', to: '/our-values#warranty' },
      { label: 'Shop Confidently®', to: '/shop-with-confidence' },
      { label: 'Trade-Up Program', to: '/our-values#trade-up' },
      { label: 'Accessibility', to: '/accessibility' },
    ],
  },
  {
    title: 'Contact Us',
    links: [
      { label: SITE.phone, href: `tel:${SITE.phone.replace(/\D/g, '')}`, icon: 'phone' },
      { label: SITE.email, href: `mailto:${SITE.email}`, icon: 'mail' },
      { label: 'Live Chat', action: 'chat', icon: 'chat' },
      { label: 'Book Appointment', action: 'appointment', icon: 'calendar' },
      { label: 'Find a Store', to: '/store-locator', icon: 'pin' },
    ],
  },
  {
    title: 'Join & Connect',
    links: [
      { label: 'Wishlist', to: '/wishlist' },
      { label: 'Retailer Program', to: '/contact-us' },
      { label: 'Affiliate Program', to: '/contact-us' },
    ],
  },
];

export const FOOTER_LEGAL = [
  { label: 'Sitemap', to: '/sitemap' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
];