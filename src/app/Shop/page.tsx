import React from 'react';



const Flower = () => {

  const Items = [
    { id: 1, name: 'Sparkling Snowflakes Bouquet', price: '70', description: 'Take a wintry stroll with our Sparkling Snowflakes Bouquet, effortlessly capturing the serene beauty of a winter wonderland through a blend of lilies, roses and seasonal greenery.', image: '/p1.webp' },
    { id: 2, name: 'Candy Cane Lane Bouquet', price: '55', description: 'Awaken your senses this winter with a chilly mix of red, white and peppermint swirled stems.', image: '/p2.webp' },
    { id: 3, name: 'Happiest Holidays Poinsettia', price: '65', description: 'Poinsettias make any home feel ready for the holidays with their classic, bold red flowers and green leaves. Each live plant comes tied with a festive ribbon.', image: '/image2.webp' },
    { id: 4, name: 'Evergreen Delight Bouquet', price: '60', description: 'Inspired by the lush greenery and timeless charm of evergreen trees, this wintry mix creates a classic and sophisticated color palette that is perfect for any occasion.', image: '/p4.webp' },
    { id: 5, name: 'Glistening Icicles Bouquet', price: '65', description: 'Whether you are celebrating, wishing seasons greetings, or sending a hug, the Glistening Icicles Bouquet will do the trick.', image: '/p5.webp' },
    { id: 6, name: 'Chance of Flurries Bouquet', price: '55', description: 'The weather report shows beauty ahead with our Chance of Flurries Bouquet, a captivating blend of carnations, roses, and hypericum berries.', image: '/p6.webp' },
    { id: 7, name: 'Peppermint Chill Bouquet', price: '60', description: 'Swirl into the holidays with the Peppermint Chill Bouquet, a delicious mix of red and white florals artfully arranged.', image: '/p7.webp' },
    { id: 8, name: 'Alluring Elegance Bouquet', price: '80', description: 'An illuminating array of florals brings an air of elegance to any room its placed. This arrangement features refined florals like lilies, Queen Annes Lace and Veronica in a clear glass vase to add a touch of sophisticated style to your special occasions.', image: '/p8.webp' },
    { id: 9, name: 'Botanical Dream Bouquet', price: '75', description: 'Ground yourself in the soothing hues of green and purple in the Botanical Dream Bouquet. Whether you are treating yourself, sending a smile, or celebrating a big day, this bouquet is sure to please.', image: '/p10.webp' },
    { id: 10, name: 'Vintage Glamour Bouquet', price: '55', description: 'Add a touch of vintage flair to any occasion with this harming blend of pink and white stems.', image: '/p2p.webp' },
    { id: 11, name: 'Calming Comfort Bouquet', price: '95', description: 'Accented by a deep blue vase, our Calming Comfort Bouquet is crafted with iris, lilies, stock and delphinium. This unique mix of blue and white flowers makes a well-suited tribute to send to those memorializing the loss of someone who had a soothing presence.', image: '/p12.webp' },
    { id: 12, name: 'Luminous Morning Bouquet', price: '60', description: 'Send some light their way with our Luminous Morning Bouquet, sure to add a smile to your recipients face through all of life moments.', image: '/p13.webp' },
  ];
  


  return (
    <div>
      <div className="roses">
        {Items.map((rose) => (
          <div key={rose.id} className="rose-card">
            <img src={rose.image} alt={rose.name} />
            <h3>{rose.name}</h3>
            <p>{rose.description}</p>
            <div>${rose.price}</div>
            <button >Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flower;