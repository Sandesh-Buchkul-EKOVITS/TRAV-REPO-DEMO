import { useMemo, useState } from "react";

const tours = [
  {
    id: 1,
    title: "Golden Triangle and Varanasi Explorer",
    route: "Delhi - Agra - Jaipur - Varanasi",
    duration: 9,
    operator: "Royal India Tours",
    rating: 4.8,
    reviews: 214,
    originalPrice: 1299,
    price: 999,
    pricePerDay: 111,
    month: "Mar",
    style: "Cultural",
    label: "Bestseller",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=60",
    available: "Limited seats"
  },
  {
    id: 2,
    title: "Himalayan Trails and Monasteries",
    route: "Delhi - Shimla - Manali - Dharamshala",
    duration: 8,
    operator: "Mountain Realm",
    rating: 4.6,
    reviews: 138,
    originalPrice: 0,
    price: 849,
    pricePerDay: 106,
    month: "Apr",
    style: "Adventure",
    label: "Recommended",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=60",
    available: "Available"
  },
  {
    id: 3,
    title: "Kerala Backwaters and Spice Coast",
    route: "Kochi - Munnar - Thekkady - Alleppey",
    duration: 7,
    operator: "South Vistas",
    rating: 4.9,
    reviews: 322,
    originalPrice: 1099,
    price: 879,
    pricePerDay: 125,
    month: "May",
    style: "Nature",
    label: "Top Rated",
    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1200&q=60",
    available: "Filling fast"
  },
  {
    id: 4,
    title: "Rajasthan Desert and Heritage Circuit",
    route: "Jodhpur - Jaisalmer - Udaipur",
    duration: 6,
    operator: "Desert Nomad",
    rating: 4.4,
    reviews: 96,
    originalPrice: 799,
    price: 699,
    pricePerDay: 116,
    month: "Mar",
    style: "Cultural",
    label: "Best Value",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=60",
    available: "Available"
  },
  {
    id: 5,
    title: "Goa Beaches and Local Flavors",
    route: "North Goa - South Goa",
    duration: 5,
    operator: "Coastline Escapes",
    rating: 4.3,
    reviews: 75,
    originalPrice: 649,
    price: 549,
    pricePerDay: 110,
    month: "Jun",
    style: "Relax",
    label: "Popular",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=60",
    available: "Available"
  },
  {
    id: 6,
    title: "Sacred South Temples Journey",
    route: "Chennai - Madurai - Rameswaram",
    duration: 8,
    operator: "Heritage Wheels",
    rating: 4.7,
    reviews: 164,
    originalPrice: 0,
    price: 920,
    pricePerDay: 115,
    month: "Apr",
    style: "Spiritual",
    label: "New",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=60",
    available: "Guaranteed"
  }
];

const pageSize = 3;

export default function App() {
  const [sortBy, setSortBy] = useState("recommended");
  const [maxPrice, setMaxPrice] = useState(1300);
  const [maxDays, setMaxDays] = useState(12);
  const [styles, setStyles] = useState([]);
  const [page, setPage] = useState(1);

  const styleOptions = ["Cultural", "Adventure", "Nature", "Relax", "Spiritual"];

  const filtered = useMemo(() => {
    let data = tours.filter((t) => t.price <= maxPrice && t.duration <= maxDays);
    if (styles.length) data = data.filter((t) => styles.includes(t.style));

    if (sortBy === "price") data.sort((a, b) => a.price - b.price);
    if (sortBy === "duration") data.sort((a, b) => a.duration - b.duration);
    if (sortBy === "rating") data.sort((a, b) => b.rating - a.rating);
    if (sortBy === "best-value") data.sort((a, b) => (b.originalPrice - b.price) - (a.originalPrice - a.price));
    if (sortBy === "recommended") data.sort((a, b) => b.reviews - a.reviews);
    return data;
  }, [sortBy, maxPrice, maxDays, styles]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = filtered.slice((page - 1) * pageSize, page * pageSize);

  const toggleStyle = (value) => {
    setPage(1);
    setStyles((prev) => (prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]));
  };

  const resetFilters = () => {
    setPage(1);
    setMaxPrice(1300);
    setMaxDays(12);
    setStyles([]);
  };

  return (
    <div className="page">
      <header className="topbar">
        <div className="logo">TravelNest</div>
        <nav className="navlinks">
          <a href="#">Tours</a>
          <a href="#">Deals</a>
          <a href="#">Destinations</a>
        </nav>
        <input className="search" placeholder="Where to?" />
        <div className="actions">USD | EN | Login</div>
      </header>

      <section className="hero">
        <p className="crumbs">Home &gt; Asia &gt; India</p>
        <h1>India Tours &amp; Trips</h1>
        <p className="summary">
          Compare curated India packages across culture, nature, and adventure routes with trusted operators.
        </p>
        <p className="count">{filtered.length} tours found</p>
      </section>

      <section className="resultsbar">
        <span>{filtered.length} results</span>
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            setPage(1);
          }}
        >
          <option value="recommended">Recommended</option>
          <option value="best-value">Best Value</option>
          <option value="price">Price</option>
          <option value="duration">Duration</option>
          <option value="rating">Customer Rating</option>
        </select>
      </section>

      <main className="content">
        <aside className="filters">
          <h3>Filters</h3>
          <label>Price up to ${maxPrice}</label>
          <input type="range" min="400" max="1300" value={maxPrice} onChange={(e) => { setMaxPrice(Number(e.target.value)); setPage(1); }} />

          <label>Duration up to {maxDays} days</label>
          <input type="range" min="4" max="12" value={maxDays} onChange={(e) => { setMaxDays(Number(e.target.value)); setPage(1); }} />

          <p className="filtertitle">Travel style</p>
          {styleOptions.map((style) => (
            <label key={style} className="check">
              <input type="checkbox" checked={styles.includes(style)} onChange={() => toggleStyle(style)} /> {style}
            </label>
          ))}

          <button onClick={resetFilters} className="reset">Reset filters</button>
        </aside>

        <section className="listings">
          {current.map((tour) => (
            <article key={tour.id} className="card">
              <img src={tour.image} alt={tour.title} />
              <div className="cardbody">
                <span className="badge">{tour.label}</span>
                <h2>{tour.title}</h2>
                <p>{tour.route}</p>
                <p>{tour.duration} days • {tour.operator}</p>
                <p>{tour.rating} stars ({tour.reviews} reviews)</p>
              </div>
              <div className="pricebox">
                {tour.originalPrice > 0 && <p className="strike">${tour.originalPrice}</p>}
                <p className="price">${tour.price}</p>
                <p>${tour.pricePerDay}/day</p>
                <p className="status">{tour.available}</p>
                <button>View Tour</button>
              </div>
            </article>
          ))}
        </section>
      </main>

      <section className="pagination">
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>Previous</button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <button key={n} className={n === page ? "active" : ""} onClick={() => setPage(n)}>{n}</button>
        ))}
        <button disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>Next</button>
      </section>

      <footer className="footer">
        <div>
          <h4>Company</h4><p>About</p><p>Careers</p><p>Press</p>
        </div>
        <div>
          <h4>Support</h4><p>Help Center</p><p>Contact</p><p>FAQs</p>
        </div>
        <div>
          <h4>Destinations</h4><p>India</p><p>Nepal</p><p>Sri Lanka</p>
        </div>
        <div>
          <h4>Resources</h4><p>Travel Guide</p><p>Reviews</p><p>Terms</p>
        </div>
      </footer>
    </div>
  );
}
