import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <div className="section1">
        {/* Headline Section */}
        <section className="section2">
          <h1>Welcome to Patel Flower Shop</h1>
          <p>Where Every Bloom Tells a Story</p>
        </section>

        {/* Our Story */}
        <section className="section3">
          <h2>Our Story</h2>
          <p>
            At Patel Flower Shop we believe that flowers have the power to brighten any day and bring people closer together.
            What started as a small passion for nature beauty has blossomed into a shop that delivers joy, love, and care through
            handcrafted floral arrangements. Every petal, every stem, and every design reflects our commitment to quality and creativity.
          </p>
        </section>

        {/* Our Mission */}
        <section className="section4">
          <h2>Our Mission</h2>
          <p>
            To create unforgettable floral experiences that celebrate life special moments and inspire smiles every day.
          </p>
        </section>

        {/* What We Offer */}
        <section className="section5">
          <h2>What We Offer</h2>
          <ul>
            <li>🌹 <strong>Fresh Flowers:</strong> Sourced daily to ensure vibrant, long lasting blooms.</li>
            <li>💐 <strong>Custom Arrangements:</strong> Tailored to suit every occasion  weddings, birthdays, anniversaries, and more.</li>
            <li>🎁 <strong>Gifting Options:</strong> Beautifully wrapped bouquets, gift baskets, and potted plants.</li>
            <li>🚚 <strong>Fast Delivery:</strong> Bringing your blooms to your doorstep, fresh and on time.</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section className="section6">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>🌟 <strong>Expert Florists:</strong> Our skilled team turns your ideas into stunning arrangements.</li>
            <li>💚 <strong>Eco-Friendly Practices:</strong> We care for the planet as much as we care for our flowers.</li>
            <li>🏆 <strong>Customer Love:</strong> Thousands of happy customers and glowing testimonials.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="section7">
          <p>Let us help you make every moment bloom with beauty.</p>
          <Link href={"/Shop"}>
            <button>🌼 Browse Our Collection</button>
          </Link>
          <Link href={"/Contact"}>
            <button>📞 Contact Us Today</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Page;
