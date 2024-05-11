import React from 'react'

const Sunglasses = () => {
  return (
    <div>
        <main>
            <section className="product">
                <div className="product-image">
                    <img src="https://cdn.shopify.com/s/files/1/0047/5335/8922/files/Eround_09281714-795c-4acf-9783-944456b4ef95.png?v=1654591707" alt="JJ"/>
                </div>
                <div className="product-details">
                    <h2>JJ Acetate</h2>
                    <h5>JJ 3291</h5>
                    <p>Price: 5,600/-</p>
                    <button >Add to Cart</button>
                </div>
            </section>

            <section className="product">
                <div className="product-image">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.YDyZEiQoKp2FJZcwOtEt5QHaDj&pid=Api&P=0&h=180" alt="VC"/>
                </div>
                <div className="product-details">
                    <h2>Vincent Chase Blue</h2>
                    <h5>VC 1029</h5>
                    <p>Price: 3,699/-</p>
                    <button>Add to Cart</button>
                </div>
            </section>

            <section className="product">
                <div className="product-image">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.Np2BtxQDflHPloBzateE7wHaDj&pid=Api&P=0&h=180" alt="BlueAviator"/>
                </div>
                <div className="product-details">
                    <h2>Blue Aviator</h2>
                    <h5>BA 1169</h5>
                    <p>Price: 5,499/-</p>
                    <button>Add to Cart</button>
                </div>
            </section>
        </main>   
    </div>
  )
}

export default Sunglasses