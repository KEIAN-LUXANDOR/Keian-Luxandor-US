// ─────────────────────────────────────────────────────────────
// Main navigation / mega-menu data.
// Structure: menu → columns → links, plus an optional feature card.
// Every link points to /collections/:slug, which the Category page renders.
// ─────────────────────────────────────────────────────────────
const c = (slug) => `/collections/${slug}`;
const l = (label, slug, extra = {}) => ({ label, to: c(slug), ...extra });

const METALS = {
  yellow: '#d9b45a',
  rose: '#e2a98f',
  white: '#e4e4e4',
  silver: '#c9ccd1',
  platinum: '#d6d8db',
  mixed: 'linear-gradient(135deg,#d9b45a 0 50%,#e4e4e4 50% 100%)',
  twoTone: 'linear-gradient(135deg,#d9b45a 0 50%,#e2a98f 50% 100%)',
};

export const NAV_MENUS = [
  {
    id: 'jewelry',
    label: 'Jewelry',
    to: c('fine-jewelry'),
    columns: [
      {
        title: 'Rings',
        links: [
          l('Statement Rings', 'rings-statement'),
          l('Promise Rings', 'rings-promise'),
          l('Stackable Rings', 'rings-stackable'),
          l('Signet Rings', 'rings-signet'),
          l('Birthstone Rings', 'rings-birthstone'),
          l('Shop All Rings', 'rings', { strong: true }),
        ],
      },
      {
        title: 'Earrings',
        links: [
          l('Stud Earrings', 'earrings-stud'),
          l('Hoop Earrings', 'earrings-hoop'),
          l('Ear Cuffs', 'earrings-cuffs'),
          l('Drop Earrings', 'earrings-drop'),
          l('Birthstone Earrings', 'earrings-birthstone'),
          l('Shop All Earrings', 'earrings', { strong: true }),
        ],
      },
      {
        title: 'Bracelets',
        links: [
          l('Tennis Bracelets', 'bracelets-tennis'),
          l('Beaded Bracelets', 'bracelets-beaded'),
          l('Bangle Bracelets', 'bracelets-bangle'),
          l('Birthstone Bracelets', 'bracelets-birthstone'),
          l('Anklets', 'anklets'),
          l('Shop All Bracelets', 'bracelets', { strong: true }),
        ],
      },
      {
        title: 'Necklaces',
        links: [
          l('Cross Necklaces', 'necklaces-cross'),
          l('Initial Necklaces', 'necklaces-initial'),
          l('Charm Necklaces', 'necklaces-charm'),
          l('Birthstone Necklaces', 'necklaces-birthstone'),
          l('Pendants', 'pendants'),
          l('Shop All Necklaces', 'necklaces', { strong: true }),
        ],
      },
      {
        title: 'Shop by Material',
        links: [
          l('Yellow Gold', 'yellow-gold', { swatch: METALS.yellow }),
          l('Rose Gold', 'rose-gold', { swatch: METALS.rose }),
          l('White Gold', 'white-gold', { swatch: METALS.white }),
          l('Silver', 'sterling-silver', { swatch: METALS.silver }),
          l('Mixed Metal', 'mixed-metal', { swatch: METALS.mixed }),
        ],
      },
      {
        title: 'Collections',
        links: [
          l('Signature', 'signature'),
          l('Étoile', 'etoile'),
          l('Contemporary', 'contemporary'),
          l('Demure', 'demure'),
          l('Riviera', 'riviera'),
        ],
      },
      {
        title: 'Gemstones',
        links: [
          l('Diamond Jewelry', 'diamond-jewelry'),
          l('Gemstone Jewelry', 'gemstone-jewelry'),
          l('Birthstone Jewelry', 'birthstone-jewelry'),
        ],
      },
      {
        title: 'Featured',
        links: [
          l('New Arrivals', 'new-arrivals'),
          l('Award Winners', 'award-winners'),
          l('Enamel Jewelry', 'enamel'),
          l('Initial Jewelry', 'initial-jewelry'),
          l('Smart Ring Enhancers', 'smart-ring-enhancers'),
        ],
      },
    ],
    explore: l('Explore Jewelry', 'fine-jewelry'),
    feature: { title: 'Soft Shine, Strong Style', cta: 'Explore Silver', to: c('sterling-silver'), tone: 'silver' },
  },
  {
    id: 'signature',
    label: 'Signature',
    to: c('signature'),
    intro: {
      title: 'The Iconic Signature Collection',
      text: 'Handcrafted arcs of gold spheres, mini-cluster diamonds and chains of perfect gold circles — pure sophistication and radiance.',
    },
    columns: [
      {
        title: 'Categories',
        grid: true,
        links: [
          l('Rings', 'signature-rings', { thumb: true }),
          l('Earrings', 'signature-earrings', { thumb: true }),
          l('Bracelets', 'signature-bracelets', { thumb: true }),
          l('Bangles', 'signature-bangles', { thumb: true }),
          l('Pendants', 'signature-pendants', { thumb: true }),
          l('Necklaces', 'signature-necklaces', { thumb: true }),
        ],
      },
    ],
    explore: l('Explore Signature', 'signature'),
    feature: { title: 'Limited Edition Signature Bangle', cta: 'Own the Extraordinary', to: c('signature-bangles'), tone: 'gold' },
  },
  {
    id: 'engagement',
    label: 'Engagement Rings',
    to: c('engagement-rings'),
    columns: [
      {
        title: 'Shop by Shape',
        links: [
          ['Round', 'round'], ['Oval', 'oval'], ['Emerald', 'emerald'], ['Princess', 'princess'],
          ['Pear', 'pear'], ['Cushion', 'cushion'], ['Marquise', 'marquise'], ['Radiant', 'radiant'],
          ['Elongated Cushion', 'elongated-cushion'],
        ].map(([label, s]) => l(label, `engagement-${s}`, { shape: s })),
      },
      {
        title: 'Shop by Style',
        links: [
          'Solitaire', 'Hidden Halo', 'Straight', 'Three Stone', 'Halo', 'Double Halo',
          'Split Shank', 'Three Stone Halo', 'Wide Band', 'Toi et Moi', 'Cluster',
        ].map((label) => l(label, `engagement-${label.toLowerCase().replace(/\s+/g, '-')}`)),
      },
      {
        title: 'Shop by Metal',
        links: [
          l('White Gold', 'engagement-white-gold', { swatch: METALS.white }),
          l('Yellow Gold', 'engagement-yellow-gold', { swatch: METALS.yellow }),
          l('Rose Gold', 'engagement-rose-gold', { swatch: METALS.rose }),
          l('Two Tone Gold', 'engagement-two-tone', { swatch: METALS.twoTone }),
          l('Platinum', 'engagement-platinum', { swatch: METALS.platinum }),
        ],
      },
      {
        title: 'Premium Collections',
        links: ['Classic', 'Contemporary', 'Vintage Inspired', 'Lotus', 'Starlight', 'Floral Nouveau'].map((label) =>
          l(label, `engagement-${label.toLowerCase().replace(/\s+/g, '-')}`),
        ),
      },
      {
        title: 'Featured',
        links: [
          l('Remount Engagement Rings', 'engagement-remount'),
          l('Sapphire Engagement Rings', 'engagement-sapphire'),
          l('Unique Engagement Rings', 'engagement-unique'),
          l('Bezel Engagement Rings', 'engagement-bezel'),
        ],
      },
      {
        title: 'Knowledge',
        links: [
          { label: 'Engagement Ring Guide', to: '/guides/engagement-ring-guide' },
          { label: 'How to Choose a Diamond', to: '/guides/choose-a-diamond' },
          { label: 'Diamond Clarity Chart', to: '/guides/diamond-clarity' },
          { label: 'Shop Confidently®', to: '/shop-with-confidence' },
        ],
      },
    ],
    explore: l('Explore Engagement Rings', 'engagement-rings'),
    feature: { title: 'Discover Your Bridal Style', cta: 'Take the Quiz', to: '/bridal-style-quiz', tone: 'blush' },
  },
  {
    id: 'wedding',
    label: 'Wedding Rings',
    to: c('wedding-rings'),
    columns: [
      {
        title: "Women's",
        links: [
          l('Classic Wedding Rings', 'wedding-classic'),
          l('Curved Wedding Bands', 'wedding-curved'),
          l('Eternity Wedding Bands', 'wedding-eternity'),
          l('Anniversary Rings', 'wedding-anniversary'),
          l('Ring Enhancers', 'wedding-ring-enhancers'),
          l('Open Wedding Bands', 'wedding-open'),
          l('Stackable Wedding Rings', 'wedding-stackable'),
          l('Shop All', 'wedding-womens', { strong: true }),
        ],
      },
      {
        title: "Men's",
        links: [
          l('Classic Wedding Bands', 'mens-bands-classic'),
          l('Diamond Wedding Bands', 'mens-bands-diamond'),
          l('Alternative Wedding Bands', 'mens-bands-alternative'),
          l("Men's Engagement Rings", 'mens-engagement-rings'),
          l("Men's Promise Rings", 'mens-promise-rings'),
          l('Shop All', 'mens-wedding-bands', { strong: true }),
        ],
      },
      {
        title: 'Featured Collections',
        links: [
          l('Sapphire Wedding Rings', 'wedding-sapphire'),
          l('Floral Nouveau Wedding Rings', 'wedding-floral-nouveau'),
          l('Victorian Wedding Rings', 'wedding-victorian'),
          l('Contemporary Wedding Rings', 'wedding-contemporary'),
        ],
      },
    ],
    explore: l('Explore Wedding Rings', 'wedding-rings'),
    feature: { title: 'Wedding Ring Enhancers', cta: 'Discover Now', to: c('wedding-ring-enhancers'), tone: 'gold' },
  },
  {
    id: 'mens',
    label: "Women's",
    to: c('mens-jewelry'),
    columns: [
      {
        title: "Men's Jewelry",
        links: [
          l('Necklaces', 'mens-necklaces'),
          l('Pendants', 'mens-pendants'),
          l('Bracelets', 'mens-bracelets'),
          l('Cufflinks', 'mens-cufflinks'),
          l('Rings', 'mens-rings'),
          l('Earrings', 'mens-earrings'),
          l('Money Clips', 'mens-money-clips'),
          l('Shop All', 'mens-jewelry', { strong: true }),
        ],
      },
      {
        title: "Men's Bands",
        links: [
          l('Classic Wedding Bands', 'mens-bands-classic'),
          l('Diamond Wedding Bands', 'mens-bands-diamond'),
          l('Alternative Wedding Bands', 'mens-bands-alternative'),
          l("Men's Engagement Rings", 'mens-engagement-rings'),
          l("Men's Promise Rings", 'mens-promise-rings'),
          l('Shop All', 'mens-wedding-bands', { strong: true }),
        ],
      },
      {
        title: 'Featured Collections',
        links: ['Facets', 'Geo', 'Meridian', 'Forged', 'Modern Relics'].map((label) =>
          l(label, `mens-${label.toLowerCase().replace(/\s+/g, '-')}`),
        ),
      },
      {
        title: 'Shop by Metal',
        links: [
          l('Yellow Gold', 'mens-yellow-gold', { swatch: METALS.yellow }),
          l('Silver', 'mens-silver', { swatch: METALS.silver }),
          l('Mixed Metal', 'mens-mixed-metal', { swatch: METALS.mixed }),
          l('Rose Gold', 'mens-rose-gold', { swatch: METALS.rose }),
          l('White Gold', 'mens-white-gold', { swatch: METALS.white }),
        ],
      },
    ],
    explore: l("Explore All Men's Jewelry", 'mens-jewelry'),
    feature: { title: 'New Pendants & Medallions', cta: 'Discover Now', to: c('mens-pendants'), tone: 'dark' },
  },
  {
    id: 'gifts',
    label: 'Gifts',
    to: c('gifts'),
    columns: [
      {
        title: 'Occasions',
        links: [
          l('Anniversary Gifts', 'gifts-anniversary'),
          l('Graduation Gifts for Her', 'gifts-graduation-her'),
          l('Graduation Gifts for Him', 'gifts-graduation-him'),
        ],
      },
      {
        title: 'Discover',
        links: [
          l('Gifts for Her', 'gifts-for-her'),
          l('Gifts for Him', 'gifts-for-him'),
          l('Gifts by Initials', 'initial-jewelry'),
          l('Gifts by Zodiac', 'zodiac'),
        ],
      },
      {
        title: 'Price',
        links: [
          l('Under $500', 'price-under-500'),
          l('$500 to $1,000', 'price-500-1000'),
          l('$1,000 to $2,500', 'price-1000-2500'),
          l('$2,500 and more', 'price-over-2500'),
        ],
      },
      {
        title: 'Giving Back',
        links: [
          l('Foundation Collection', 'giving-back'),
          l('Heart of Hope Pendant', 'giving-back-heart'),
          l('Twisted Bar Necklace', 'giving-back-bar'),
          l('Huggie Earrings', 'giving-back-huggies'),
          l('Wish Silver Bracelet', 'giving-back-bracelet'),
        ],
      },
      {
        title: 'Birthstone Jewelry',
        wide: true,
        links: [
          ['JAN - Garnet', 'garnet', '#7b1e2b'], ['FEB - Amethyst', 'amethyst', '#8e5fb6'],
          ['MAR - Aquamarine', 'aquamarine', '#7fd1d8'], ['APR - Diamond', 'diamond', '#eef2f5'],
          ['MAY - Emerald', 'emerald', '#1f8a5b'], ['JUN - Pearl', 'pearl', '#f1ece2'],
          ['JUL - Ruby', 'ruby', '#b3123a'], ['AUG - Peridot', 'peridot', '#a3c33a'],
          ['SEP - Sapphire', 'sapphire', '#1d3f9a'], ['OCT - Pink Tourmaline', 'tourmaline', '#e48bb0'],
          ['NOV - Citrine', 'citrine', '#e6a73a'], ['DEC - Topaz', 'topaz', '#4aa3d6'],
        ].map(([label, s, color]) => l(label, `birthstone-${s}`, { swatch: color })),
      },
    ],
    explore: l('Shop All Gifts', 'gifts'),
    feature: { title: "An anniversary she'll never forget", cta: 'Shop Gifts for Her', to: c('gifts-anniversary'), tone: 'blush' },
  },
  {
    id: 'about',
    label: 'About Us',
    to: '/about-us',
    columns: [
      {
        title: 'About Us',
        links: [
          { label: 'Our Story', to: '/about-us' },
          { label: 'Foundation', to: '/about-us#foundation' },
          { label: 'Press & Media', to: '/about-us#press' },
          { label: 'Designer Spotlight', to: '/about-us#designer' },
          { label: 'Love Stories', to: '/about-us#stories' },
        ],
      },
      {
        title: 'Why Choose Us',
        links: [
          { label: 'Artisans of Love', to: '/our-values#artisans' },
          { label: 'Gemstone Authenticity', to: '/our-values#authenticity' },
          { label: 'Unique Serial Number', to: '/our-values#serial' },
          { label: 'Ethically Sourced Jewelry', to: '/our-values#ethical' },
          { label: 'Sustainable Beauty', to: '/our-values#sustainable' },
          { label: 'Lifetime Warranty', to: '/our-values#warranty' },
          { label: 'Returns and Refunds', to: '/our-values#returns' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'Contact Us', to: '/contact-us' },
          { label: 'Find a Store', to: '/store-locator' },
          { label: 'Register for Warranty', to: '/our-values#warranty' },
          { label: 'Certificates', to: '/our-values#serial' },
          { label: 'Warranty & Repairs', to: '/our-values#warranty' },
        ],
      },
      {
        title: 'Knowledge',
        links: [{ label: 'Journal', to: '/guides/engagement-ring-guide' }],
      },
    ],
    feature: { title: 'Certificate of Authenticity', cta: 'Explore the Certificate', to: '/our-values#serial', tone: 'cream' },
  },
];

export const UTILITY_LINKS = [
  { label: 'Find a Store', to: '/store-locator', icon: 'pin' },
  { label: 'Contact Us', to: '/contact-us', icon: 'phone' },
];