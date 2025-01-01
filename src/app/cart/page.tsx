import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      

      <main className="shop-container">
        <div className="rose-card">
            <image href={"https://via.placeholder.com/150"}>
            <h2>Red Rose</h2>
            <p className="price">$10</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>

        <div class="rose-card">
            <img src="https://via.placeholder.com/150" alt="White Rose">
            <h2>White Rose</h2>
            <p class="price">$12</p>
            <button class="add-to-cart">Add to Cart</button>
        </div>

        <div class="rose-card">
            <image href={"https://via.placeholder.com/150"}></image>
            <h2>Pink Rose</h2>
            <p className="price">$8</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    </main>

    </div>
  )
}

export default page
