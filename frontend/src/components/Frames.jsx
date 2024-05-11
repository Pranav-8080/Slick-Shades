import React from 'react'

const Frames = () => {
  return (
    <div>
        <main>
            <section className="product">
                <div className="product-image">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.4UFMM29vSutaHjxtE1UyoQHaDj&pid=Api&P=0&h=180" alt="Frame1"/>
                </div>
                <div className="product-details">
                    <h2>Blue Eyeglasses</h2>
                    <h5>BL 196</h5>
                    <p>1,799/-</p>
                    <button>Add to Cart</button>
                </div>
            </section>

            <section className="product">
                <div className="product-image">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.sAizPsZom58t6rSNof3xdAHaDj&pid=Api&P=0&h=180" alt="Frame2"/>
                </div>
                <div className="product-details">
                    <h2>Gold Black</h2>
                    <h5>GB 012</h5>
                    <p>1,999/-</p>
                    <button >Add to Cart</button>
                </div>
            </section>

            <section className="product">
                <div className="product-image">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.bpS-dQoAFF3OuHic3VyyPgHaDj&pid=Api&P=0&h=180" alt="Frame3"/>
                </div>
                <div className="product-details">
                    <h2>Bluecut crystal</h2>
                    <h5>BC 011</h5>
                    <p>1,299/-</p>
                    <button>Add to Cart</button>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Frames