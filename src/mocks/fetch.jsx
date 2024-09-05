//Posible fetch de datos para app.jsx
import { useState, useEffect } from "react"
import { Products } from "./components/Products"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { IS_DEVELOPMENT } from "./config"
import { useFilters } from "./hooks/useFilters"
import { Cart } from "./components/Cart"
import { CartProvider } from "./context/cart"

function App() {
  const { filterProducts } = useFilters()
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=200")
        const data = await response.json()
        setProducts(data.products)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const filteredProducts = filterProducts(products)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App