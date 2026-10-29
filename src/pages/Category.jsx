import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCollectionTitle, getProductsForSlug } from '../data/products';
import PageHero from '../components/common/PageHero';
import ProductCard from '../components/common/ProductCard';
import Icon from '../components/common/Icon';
import './Category.css';

const SORTS = {
  featured: { label: 'Featured', fn: () => 0 },
  'price-asc': { label: 'Price: Low to High', fn: (a, b) => a.price - b.price },
  'price-desc': { label: 'Price: High to Low', fn: (a, b) => b.price - a.price },
  name: { label: 'Name: A–Z', fn: (a, b) => a.name.localeCompare(b.name) },
};

const PRICE_BANDS = [
  { id: 'u500', label: 'Under $500', test: (p) => p < 500 },
  { id: '500-1000', label: '$500 – $1,000', test: (p) => p >= 500 && p < 1000 },
  { id: '1000-2500', label: '$1,000 – $2,500', test: (p) => p >= 1000 && p < 2500 },
  { id: 'o2500', label: '$2,500 & above', test: (p) => p >= 2500 },
];

const PAGE_SIZE = 12;

export default function Category() {
  const { slug } = useParams();
  const title = getCollectionTitle(slug);
  const all = useMemo(() => getProductsForSlug(slug, 24), [slug]);

  const [metals, setMetals] = useState([]);
  const [prices, setPrices] = useState([]);
  const [sort, setSort] = useState('featured');
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [filtersOpen, setFiltersOpen] = useState(() => window.innerWidth >= 1024);

  // Reset filters when the collection changes.
  const [lastSlug, setLastSlug] = useState(slug);
  if (slug !== lastSlug) {
    setLastSlug(slug);
    setMetals([]);
    setPrices([]);
    setSort('featured');
    setVisible(PAGE_SIZE);
  }

  const metalOptions = useMemo(() => [...new Set(all.map((p) => p.metal))].sort(), [all]);

  const results = useMemo(() => {
    const bands = PRICE_BANDS.filter((b) => prices.includes(b.id));
    return all
      .filter((p) => !metals.length || metals.includes(p.metal))
      .filter((p) => !bands.length || bands.some((b) => b.test(p.price)))
      .sort(SORTS[sort].fn);
  }, [all, metals, prices, sort]);

  const toggle = (setter) => (value) =>
    setter((list) => (list.includes(value) ? list.filter((v) => v !== value) : [...list, value]));

  const activeCount = metals.length + prices.length;

  return (
    <>
      <PageHero title={title} crumbs={[{ label: 'Jewelry', to: '/collections/fine-jewelry' }, { label: title }]} />

      <div className="container plp">
        <div className="plp__toolbar">
          <button className="plp__filter-btn" onClick={() => setFiltersOpen((o) => !o)} aria-expanded={filtersOpen}>
            <Icon name="menu" size={16} /> Filters {activeCount > 0 && `(${activeCount})`}
          </button>
          <p className="muted plp__count">{results.length} items</p>
          <label className="plp__sort">
            <span className="visually-hidden">Sort by</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              {Object.entries(SORTS).map(([k, s]) => (
                <option key={k} value={k}>Sort: {s.label}</option>
              ))}
            </select>
          </label>
        </div>

        <div className={`plp__layout ${filtersOpen ? 'is-filters-open' : ''}`}>
          <aside className="plp__filters" aria-label="Filters">
            <fieldset>
              <legend className="eyebrow">Metal</legend>
              {metalOptions.map((m) => (
                <label key={m} className="check">
                  <input type="checkbox" checked={metals.includes(m)} onChange={() => toggle(setMetals)(m)} />
                  <span>{m}</span>
                </label>
              ))}
            </fieldset>
            <fieldset>
              <legend className="eyebrow">Price</legend>
              {PRICE_BANDS.map((b) => (
                <label key={b.id} className="check">
                  <input type="checkbox" checked={prices.includes(b.id)} onChange={() => toggle(setPrices)(b.id)} />
                  <span>{b.label}</span>
                </label>
              ))}
            </fieldset>
            {activeCount > 0 && (
              <button className="link-underline" onClick={() => { setMetals([]); setPrices([]); }}>
                Clear all
              </button>
            )}
          </aside>

          <div>
            {results.length === 0 ? (
              <p className="plp__empty muted">No pieces match these filters.</p>
            ) : (
              <div className="grid-products">
                {results.slice(0, visible).map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
            {visible < results.length && (
              <div className="plp__more">
                <p className="muted">Showing {Math.min(visible, results.length)} of {results.length}</p>
                <button className="btn btn--outline" onClick={() => setVisible((v) => v + PAGE_SIZE)}>Load More</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}