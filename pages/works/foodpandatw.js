import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	return (
		<Layout title="Foodpandatw">
			<Container>
				<Title>
					Foodpanda TW <Badge>2021</Badge>
				</Title>
				<P>
					A informational website included CMS system.
				</P>
				<List ml={4}my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://www.foodpandatw.com/">
							https://www.foodpandatw.com/ <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Skills</Meta>
						<span>Next.js / React / NodeJS</span>
					</ListItem>
				</List>

				<WorkImage src="/images/fp-content-1.png" alt="FPTW1" />
				<WorkImage src="/images/fp-content-2.png" alt="FPTW2" />
				<WorkImage src="/images/fp-cms.png" alt="FPCMS" />
			</Container>
		</Layout>
	)
}

export default Work