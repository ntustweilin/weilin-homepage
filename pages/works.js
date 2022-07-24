import {
	Container,
	Box,
	Heading,
	SimpleGrid,
	Divider
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbFoodpanda from '../public/images/foodpandatw.png'
import thumbPdh from '../public/images/pdh.png'

const Works = () => {
	return (
		<Layout>
			<Container>
				<Heading as="h3" fontSize={20} mb={4}>Works</Heading>

				<SimpleGrid columns={[1, 1, 2]} gap={6}>
					<Section>
						<WorkGridItem id="foodpandatw" title="FoodpandaTW" thumbnail={thumbFoodpanda}>
							A informational website included CMS system.
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id="pdh" title="PDH 羅特麗磁磚" thumbnail={thumbPdh}>
							A high quality tile website included price asking service and CMS system.
						</WorkGridItem>
					</Section>
				</SimpleGrid>
			</Container>
		</Layout>
	)
}

export default Works