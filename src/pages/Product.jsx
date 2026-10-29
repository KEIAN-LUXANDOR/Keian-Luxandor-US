import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCollectionTitle, getProductById, getProductsForSlug } from '../data/products';
import { formatPrice } from '../config/site';
import { useShop } from '../context/ShopContext';
import { useUI } from '../context/UIContext';
import Media from '../components/common/Media';
import Icon from '../components/common/Icon';
import ProductCard from '../components/common/ProductCard';
import NotFound from './NotFound';
import './Product.css';

const RING_SIZES = ['4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9'];
const METAL_SWATCHES = [
  { name: '14K Yellow Gold', color: '#d9b45a' },
  { name: '14K White Gold', color: '#e4e4e4' },
  { name: '14K Rose Gold', color: '#e2a98f' },
  { name: 'Platinum', color: '#d6d8db' },
];
const VIEWS = ['front', 'side', 'detail', 'worn'];

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`acc ${open ? 'is-open' : ''}`}>
      <button className="acc__btn" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="eyebrow">{title}</span>
        <Icon name={open ? 'minus' : 'plus'} size={16} />
      </button>
      {open && <div className="acc__body">{children}</div>}
    </div>
  );
}

// Keyed by id so selections reset when moving between products.
export default function Product() {
  const { id } = useParams();
  return <ProductView key={id} id={id} />;
}

function ProductView({ id }) {
  const product = getProductById(id);
  const { addToCart, toggleWishlist, isWishlisted } = useShop();
  const { open, showToast } = useUI();
  const [view, setView] = useState(0);
  const [metal, setMetal] = useState(product?.metal);
  const [size, setSize] = useState(null);
  const [qty, setQty] = useState(1);
  const [sizeError, setSizeError] = useState(false);

  const related = useMemo(
    () => (product ? getProductsForSlug(product.collection, 24).filter((p) => p.id !== product.id).slice(0, 4) : []),
    [product],
  );

  if (!product) return <NotFound />;

  const isRing = /ring|band/i.test(product.type);
  const saved = isWishlisted(product.id);
  const collectionTitle = getCollectionTitle(product.collection);

  const handleAdd = () => {
    if (isRing && !size) {
      setSizeError(true);
      return;
    }
    addToCart({ ...product, metal: metal || product.metal }, qty, size);
    showToast('Added to bag');
  };

  return (
    <div className="container pdp">
      <nav className="breadcrumbs pdp__crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link> / <Link to={`/collections/${product.collection}`}>{collectionTitle}</Link> / <span aria-current="page">{product.name}</span>
      </nav>

      <div className="pdp__grid">
        {/* Gallery */}
        <div className="pdp__gallery">
          <div className="pdp__thumbs">
            {VIEWS.map((v, i) => (
              <button key={v} className={i === view ? 'is-active' : ''} onClick={() => setView(i)} aria-label={`View ${v}`}>
                <Media tone={product.tone} label={i === 3 ? 'sparkle' : product.type} />
              </button>
            ))}
          </div>
          <div className="pdp__main">
            <Media tone={product.tone} label={view === 3 ? 'sparkle' : product.type} ratio="1 / 1" eager />
            {product.badge && <span className="pcard__badge">{product.badge}</span>}
          </div>
        </div>

        {/* Info */}
        <div className="pdp__info">
          <p className="eyebrow muted">{collectionTitle}</p>
          <h1 className="pdp__title">{product.name}</h1>
          <div className="pdp__meta">
            <span className="pdp__rating" aria-label={`Rated ${product.rating.toFixed(1)} out of 5`}>
              {Array.from({ length: 5 }, (_, i) => (
                <Icon key={i} name="star" size={14} filled={i < Math.round(product.rating)} />
              ))}
              <span className="muted">({product.reviews})</span>
            </span>
            <span className="muted">Style #{product.sku}</span>
          </div>
          <p className="pdp__price">{formatPrice(product.price)}</p>

          <div className="pdp__option">
            <p className="eyebrow">Metal: <span className="muted">{metal}</span></p>
            <div className="pdp__swatches">
              {METAL_SWATCHES.map((m) => (
                <button
                  key={m.name}
                  className={metal === m.name ? 'is-active' : ''}
                  style={{ '--sw': m.color }}
                  onClick={() => setMetal(m.name)}
                  aria-label={m.name}
                  aria-pressed={metal === m.name}
                />
              ))}
            </div>
          </div>

          {isRing && (
            <div className="pdp__option">
              <p className="eyebrow">Ring Size {sizeError && <span className="field-error"> — please select a size</span>}</p>
              <div className="pdp__sizes">
                {RING_SIZES.map((s) => (
                  <button key={s} className={size === s ? 'is-active' : ''} onClick={() => { setSize(s); setSizeError(false); }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="pdp__actions">
            <div className="qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity"><Icon name="minus" size={14} /></button>
              <span aria-live="polite">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity"><Icon name="plus" size={14} /></button>
            </div>
            <button className="btn pdp__add" onClick={handleAdd}>Add to Bag</button>
            <button
              className={`pdp__wish ${saved ? 'is-saved' : ''}`}
              onClick={() => { toggleWishlist(product); showToast(saved ? 'Removed from wishlist' : 'Added to wishlist'); }}
              aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}
              aria-pressed={saved}
            >
              <Icon name="heart" filled={saved} />
            </button>
          </div>

          <div className="pdp__help">
            <button onClick={() => open('appointment')}><Icon name="calendar" size={18} /> Book an Appointment</button>
            <Link to="/store-locator"><Icon name="pin" size={18} /> Find in Store</Link>
            <button onClick={() => open('chat')}><Icon name="chat" size={18} /> Chat with an Expert</button>
          </div>

          <ul className="pdp__assure">
            <li><Icon name="truck" size={20} /> Complimentary shipping</li>
            <li><Icon name="refresh" size={20} /> 30-day returns</li>
            <li><Icon name="shield" size={20} /> Lifetime warranty</li>
          </ul>

          <div className="pdp__accs">
            <Accordion title="Product Details" defaultOpen>
              <dl className="pdp__specs">
                <dt>Style #</dt><dd>{product.sku}</dd>
                <dt>Metal</dt><dd>{metal}</dd>
                <dt>Category</dt><dd>{product.type}</dd>
                <dt>Stone</dt><dd>Natural diamond, G–H color, SI clarity</dd>
                <dt>Finish</dt><dd>High polish</dd>
              </dl>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>Complimentary insured shipping on all orders. Returns accepted within 30 days in original condition.</p>
            </Accordion>
            <Accordion title="Warranty & Care">
              <p>Every piece carries a unique serial number and lifetime manufacturing warranty. Clean gently with warm water and a soft brush.</p>
            </Accordion>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="pdp__related">
          <h2 className="section-head">You May Also Like</h2>
          <div className="grid-products">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}