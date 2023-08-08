import Meta from '@/src/components/ui/Meta'
import Catalog from '@/src/components/ui/catalog/Catalog'
import Layout from '@/src/components/ui/layout/Layout'
import { ProductService } from '@/src/services/product/product.service'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const SearchPage: NextPage = () => {
	const router = useRouter()
	const { query } = router

	const searchTerm = query.term as string

	const { data } = useQuery(['search products', searchTerm], () =>
		ProductService.getAll({
			searchTerm: searchTerm
		})
	)

	return (
		<Meta title='Поиск'>
			<Layout>
				<Catalog
					products={data?.products || []}
					title={`Поиск по запросу "${searchTerm}"`}
				/>
			</Layout>
		</Meta>
	)
}

export default SearchPage
