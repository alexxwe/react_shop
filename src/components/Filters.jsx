import { useId } from "react"
import { useFilters } from "../hooks/useFilters"
import './Filters.css'

export function Filters () {
    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    
    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice:event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category:event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Min Price</label>
                <input 
                type="range"
                id={minPriceFilterId}
                min="0"
                max="1000"
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>All</option>
                    <option value='beauty'>Beauty</option>
                    <option value='fragrances'>Fragrances</option>
                    <option value='furniture'>Furniture</option>
                    <option value='groceries'>Groceries</option>
                    <option value='home-decoration'>Home Decoration</option>
                    <option value='kitchen-accessories'>Kitchen Accessories</option>
                    <option value='laptops'>Laptops</option>
                    <option value='mens-shirts'>Men&apos;s Shirts</option>
                    <option value='mens-shoes'>Men&apos;s Shoes</option>
                    <option value='mens-watches'>Men&apos;s Watches</option>
                    <option value='mobile-accessories'>Mobile Accessories</option>
                    <option value='motorcycle'>Motorcycle</option>
                    <option value='skin-care'>Skin Care</option>
                    <option value='smartphones'>Smartphones</option>
                    <option value='sports-accessories'>Sports Accessories</option>
                    <option value='sunglasses'>Sunglasses</option>
                    <option value='tablets'>Tablets</option>
                    <option value='tops'>Tops</option>
                    <option value='vehicle'>Vehicle</option>
                    <option value='womens-bags'>Women&apos;s Bags</option>
                    <option value='womens-dresses'>Women&apos;s Dresses</option>
                    <option value='womens-jewellery'>Women&apos;s Jewellery</option>
                    <option value='womens-shoes'>Women&apos;s Shoes</option>
                    <option value='womens-watches'>Women&apos;s Watches</option>
                </select>
            </div>
        </section>
    )
}