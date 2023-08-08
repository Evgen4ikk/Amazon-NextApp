import Home from '@/src/components/screens/home/Home'
import { ProductService } from '@/src/services/product/product.service'
import { TypePaginationProducts } from '@/src/types/product.interface'
import { GetStaticProps, NextPage } from 'next'

const HomePage: NextPage<TypePaginationProducts> = ({ length, products }) => {
	return <Home length={length} products={products} />
}

export const getStaticProps: GetStaticProps<
	TypePaginationProducts
> = async () => {
	const data = await ProductService.getAll({
		page: 1,
		perPage: 4
	})

	return {
		props: data
	}
}

export default HomePage
