import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	return (
		<Layout title="PDH">
			<Container>
				<Title>
					PDH 羅特麗磁磚 <Badge>2021</Badge>
				</Title>
				<P>
				A high quality tile website included price asking service and CMS system.
				</P>
				<List ml={4}my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://www.pdh.com.tw/">
							https://www.pdh.com.tw/ <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Skills</Meta>
						<span>Next.js / React / NodeJS</span>
					</ListItem>
				</List>

				<WorkImage src="/images/pdh-content-1.png" alt="PDH1" />
				<WorkImage src="/images/pdh-content-2.png" alt="PDH2" />
				<WorkImage src="/images/pdh-cms.png" alt="PDHCMS" />
			</Container>
		</Layout>
	)
}

export default Work