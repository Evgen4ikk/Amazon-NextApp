import Meta from '@/src/components/ui/Meta'
import Catalog from '@/src/components/ui/catalog/Catalog'
import Layout from '@/src/components/ui/layout/Layout'
import { useProfile } from '@/src/hooks/useProfile'
import { NextPageAuth } from '@/src/providers/auth-provider/auth-page.types'

const FavoritesPage: NextPageAuth = () => {
	const { profile } = useProfile()

	return (
		<Meta title='Favorites'>
			<Layout>
				<Catalog products={profile?.favorites || []} title='Favorites' />
			</Layout>
		</Meta>
	)
}

FavoritesPage.isOnlyUser = true

export default FavoritesPage
