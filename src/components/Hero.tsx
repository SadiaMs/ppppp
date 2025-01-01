import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div>
      <section
        className="hero"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '50px 20px',
        }}
      >
        <div>
          <h1 className="fade-in">Welcome to Patel's Flower Shop</h1>
          <p>
            Send flowers and send a smile! Discover fresh flowers online, gift
            baskets, and florist-designed arrangements.
          </p>
          <Link href={"/Shop"}>
            <button className={"shop-button"}>Shop Now!</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;