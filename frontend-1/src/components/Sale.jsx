import React from 'react'

const Sale = () => {
  return (
    <div>
        <main>
            <section className="product">
                <div className="product-image">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.ok9M8dGHLyEqYtdEEDQXkwHaDj&pid=Api&P=0&h=180" alt="Gray"/>
                </div>
                <div className="product-details">
                    <h2>Gray Aviator</h2>
                    <h5>GA 4291</h5>
                    <p>Price: <strike>4,700/-</strike> 3,900/-</p>
                    <button onclick="addToCart('Gray Aviator', 'https://tse2.mm.bing.net/th?id=OIP.ok9M8dGHLyEqYtdEEDQXkwHaDj&pid=Api&P=0&h=180','3900')">Add to Cart</button>
                </div>
            </section>

            <section className="product">
                <div className="product-image">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.yR2xZgWdWgCiIloN5_SWVQHaDj&pid=Api&P=0&h=180" alt="Brown"/>
                </div>
                <div className="product-details">
                    <h2>Brown Wayfarer</h2>
                    <h5>BW 0029</h5>
                    <p>Price: <strike>5,500/-</strike> 4,699/-</p>
                    <button onclick="addToCart('Brown Wayfarer','https://tse4.mm.bing.net/th?id=OIP.yR2xZgWdWgCiIloN5_SWVQHaDj&pid=Api&P=0&h=180', '4699')">Add to Cart</button>
                </div>
            </section>

            <section className="product">
                <div className="product-image">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.DymJenqIk_FJ9hffVRZWNAHaDj&pid=Api&P=0&h=180" alt="BluePink"/>
                </div>
                <div className="product-details">
                    <h2>BluePink Round</h2>
                    <h5>BP 169</h5>
                    <p>Price: <strike>1,799/-</strike> 1,299/-</p>
                    <button onclick="addToCart('BluePink Round','https://tse4.mm.bing.net/th?id=OIP.DymJenqIk_FJ9hffVRZWNAHaDj&pid=Api&P=0&h=180' , '1299')">Add to Cart</button>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Sale