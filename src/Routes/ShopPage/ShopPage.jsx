import React, { useContext } from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { ProductsContext } from '../../context/products.context';
import './ShopPage.styles.scss';


const ShopPage = () => {
	const { products } = useContext(ProductsContext)

	return (
		<div className='products-container'>
			{products.map((product) => {
				return (
					<ProductCard key={product.id} product={product} />
				)
			})}
		</div>
	)
}

export default ShopPage