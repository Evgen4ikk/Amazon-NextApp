
import Heading from '@/src/components/ui/Heading'
import Meta from '@/src/components/ui/Meta'
import Layout from '@/src/components/ui/layout/Layout'
import { NextPage } from 'next'

const ThanksPage: NextPage = () => {
	return (
		<Meta title='Thanks'>
			<Layout>
				<Heading>Thanks!</Heading>
			</Layout>
		</Meta>
	)
}

export default ThanksPage
