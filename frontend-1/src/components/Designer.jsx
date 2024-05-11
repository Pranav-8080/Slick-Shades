import React from 'react'

const Designer = () => {
  return (
    <div>
          <main>
        <section className="product">
            <div className="product-image">
                <img src="https://tse3.mm.bing.net/th?id=OIP.JQqrlLLLZ-EwREfowHkZdAHaE8&pid=Api&P=0&h=180" alt="Burberry"/>
            </div>
            <div className="product-details">
                <h2>Burberry</h2>
                <h5>BE 4291</h5>
                <p>Price: 19,000/-</p>
                <button onclick="addToCart('Burberry', 'https://tse3.mm.bing.net/th?id=OIP.JQqrlLLLZ-EwREfowHkZdAHaE8&pid=Api&P=0&h=180' , '19000')">Add to Cart</button>
            </div>
        </section>

        <section className="product">
            <div className="product-image">
                <img src="https://tse4.mm.bing.net/th?id=OIP.jYamEZHXBF7lzW20SByuZQHaEo&pid=Api&P=0&h=180" alt="Balenciaga"/>
            </div>
            <div className="product-details">
                <h2>Balenciaga</h2>
                <h5>BG 0029</h5>
                <p>Price: 26,700/-</p>
                <button onclick="addToCart('Balenciaga','https://tse4.mm.bing.net/th?id=OIP.jYamEZHXBF7lzW20SByuZQHaEo&pid=Api&P=0&h=180', '26700')">Add to Cart</button>
            </div>
        </section>

        <section className="product">
            <div className="product-image">
                <img src="https://tse4.mm.bing.net/th?id=OIP.vABipcddz3E8UXpSqmXK-gHaEQ&pid=Api&P=0&h=180" alt="Gucci"/>
            </div>
            <div className="product-details">
                <h2>Gucci</h2>
                <h5>GG 0169</h5>
                <p>Price: 15,169/-</p>
                <button onclick="addToCart('Gucci','https://tse4.mm.bing.net/th?id=OIP.vABipcddz3E8UXpSqmXK-gHaEQ&pid=Api&P=0&h=180' , '15169')">Add to Cart</button>
            </div>
        </section>
    </main>
    </div>
  )
}

export default Designer