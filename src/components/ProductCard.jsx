import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
export default function ProductCard({product}) {
  const {addToCart, cartItems} = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart
  ? `(${productInCart.quantity})`
  : "";
  return (
    <div>
     <div className="product-card">
      <img src={product.image} className="product-card-image" alt="product-image" />
      <div className="product-card-content">
       <h3 className="product-card-name">{product.name}</h3>
       <p className="product-card-price">${product.price}</p>
       <div className="product-card-action">
        <Link className="btn btn-secondary" to={`/products/${product.id}`}>View Details</Link>
        <button
          className="btn btn-primary" style={{margin: "0.5rem"}}
          onClick={() => addToCart(product.id)}>Add to Cart {productQuantityLabel}
        </button>
       </div>
      </div>
     </div>
    </div>
  )
}
