import React from 'react'
import NextLink from 'next/link'
import { Box, Container, Heading, Image, useColorModeValue, Button, SimpleGrid, List, ListItem, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
	IoLogoInstagram,
	IoLogoFacebook,
	IoLogoGithub,
} from 'react-icons/io5'

import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

const Page = () => {
	return (
		<Layout>
			<Container>
				<Box
					borderRadius="lg"
					bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
					p={3}
					mb={6}
					align="center"
				>
					Hello, I&apos;m a software developer base in Taiwan!!
				</Box>

				<Box display={{ md: 'flex' }}>
					<Box flexGrow={1}>
						<Heading as="h2" variant="page-title">
							William Chen
						</Heading>
						<p>Strive For Greatness ( Developer / Engineer / Campler )</p>
					</Box>
					<Box
						flexShrink={0}
						mt={{ base: 4, md: 0 }}
						ml={{ md: 6 }}
						align="center"
						>
						<Image
							borderColor="whiteAlpha.800"
							borderWidth={2}
							borderStyle="solid"
							maxWidth="100px"
							display="inline-block"
							borderRadius="full"
							src="/images/nft.png"
							alt="Profile Image"
							/>
					</Box>
				</Box>

				<Section delay={0.1}>
					<Heading as="h3" variant="section-title">
						Work
					</Heading>
					<Paragraph>
						William is a software engineer for building website by mainly
						using React based in Taiwan. William likes using coding skill
						to resolve real-life problems. Currently, William works at a tech
						company called Cacdi (綠擊掌).
					</Paragraph>
					<Box align="center" my={4}>
						<NextLink href="/works">
							<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
								My portfolio
							</Button>
						</NextLink>
					</Box>
				</Section>
				<Section delay={0.2}>
					<Heading as="h3" variant="section-title">
						Bio
					</Heading>
					<BioSection>
						<BioYear>1998</BioYear>
						Born in New Taipei City, Taiwan.
					</BioSection>
					<BioSection>
						<BioYear>2021</BioYear>
						Complete Bachelor's Degree in National Taiwan University of Science and Technology.
					</BioSection>
					<BioSection>
						<BioYear>2021 to present</BioYear>
						Works at Cacdi as a software engineer.
					</BioSection>
				</Section>
				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						Social Media
					</Heading>
					<List>
						<ListItem>
							<Link href="https://github.com/ntustweilin" target="_blank">
								<Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoGithub />}>
									@weilin
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="https://instagram.com/c.wei_lin" target="_blank">
								<Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoInstagram />}>
									@c.wei_lin
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="https://www.facebook.com/profile.php?id=100006578867003" target="_blank">
								<Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoFacebook />}>
									@chen wei lin
								</Button>
							</Link>
						</ListItem>
					</List>
				</Section>
			</Container>
		</Layout>
	)
}

export default Page