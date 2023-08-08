import { IProduct } from '@/src/types/product.interface'
import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
	const [rating, setRating] = useState(
		Math.floor(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length
		) || 0
	)

	return (
		<div className='mb-2'>
			{!!product.reviews.length && (
				<span className='mr-1 inline-flex items-center'>
					<Rating
						readonly
						initialValue={rating}
						SVGstyle={{
							display: 'inline-block'
						}}
						size={20}
						allowFraction
						transition
					/>
					<span className='text-[#FFBC0D] text-sm ml-1'>{rating}</span>
				</span>
			)}
			<span className='text-xs'>({product.reviews.length} reviews)</span>
		</div>
	)
}

export default ProductRating
