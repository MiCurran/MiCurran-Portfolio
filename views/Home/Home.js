import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.scss'
import { Box, Heading, HStack, Text, Avatar, Button, VStack, Switch, Stack, Grid, GridItem, Center, List, ListItem, ListIcon } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import { projects } from '../../constants/projects';
import { useState, useEffect } from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { GoTools } from 'react-icons/go';
import { SiNextDotJs, SiTailwindcss, SiBootstrap, SiGithub } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import * as ga from '../../lib/ga'
import { useRouter } from 'next/router'
import Footer from '../../components/Footer/Footer';
import {HiDocumentText } from 'react-icons/hi'
import { motion } from "framer-motion"
import { animationVariants } from '../../constants/animationVariants';
import CustomLink from '../../components/CustomLink/CustomLink';

const MotionHeading = motion(Heading);
const MotionAvatar = motion(Avatar);

const Section = ({children, height}) => (
  <Box 
    height={height || '80vh'}  
  >
    {children}
  </Box>
)
 
export default function Home() {
  const router = useRouter()
  const [activeType, setActiveType] = useState(null);
  const { colorMode, toggleColorMode } = useColorMode()
  
  const handleSetActiveType = (type) => {
    if(activeType !== type){
      setActiveType(type);
    } else setActiveType(null);
  };

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <div >
      <Head>
        <title>Michael Curran</title>
        <meta name="portfolio site" content="Michael Curran portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Section>
        <HStack style={{position: 'absolute', top: '-10', left: '0'}}>
                <Switch size="lg" onChange={toggleColorMode}/>
                {colorMode === 'light' 
                  ? <SunIcon/>
                  : <MoonIcon />
                }
                </HStack>
          <Center
            h={'full'}
            flexDir={'column'} 
          >
            <VStack> 
            <VStack>
                <MotionAvatar 
                  whileHover={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                  }}
                  size="2xl" name="Michael Curran" src="https://avatars.githubusercontent.com/u/65498724?v=4" />{" "}
                <Heading as="h1" color={useColorModeValue('gray.700', 'white')}>
                    Hi I'm Michael!
                    <Heading className='wave'>👋</Heading>
                  </Heading>
                  <Heading as="h1" color={useColorModeValue('gray.700', 'white')}>
                    I'm a developer
                  </Heading>
                  <Heading className='wave'>
                    
                  </Heading>
            </VStack>   
            <VStack alignContent={['center', 'left']} justifyContent="center">
              <CustomLink href={'https://github.com/micurran'}>
              <a target="_blank" rel="noopener noreferrer" 
                  href="https://github.com/micurran">
                      <Button
                        leftIcon={<SiGithub stroke='white' fill='white'/>} 
                        color="white" 
                        marginX="2" 
                        variant="gradientL"
                        size={'block'}
                        _hover={{
                          transform: 'scale(1.08)',
                          bgGradient: 'linear(to-r, red.500, yellow.500)',
                        }}
                      > 
                        View My Github! 
                      </Button>
                </a>
              </CustomLink>
                <a 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      href="/images/resume.pdf"
                      >
                        <Button 
                        leftIcon={<HiDocumentText />} 
                        color="white" 
                        marginX="2"
                        size={'block'} 
                        variant="gradient" 
                        _hover={{
                          transform: 'scale(1.08)',
                          bgGradient: 'linear(to-r, red.500, yellow.500)',
                        }}
                        > 
                          View My Resume! 
                        </Button>
                    </a>                    
            </VStack>
            </VStack>
          </Center>
        </Section>
        <VStack textAlign="center" px={4}>
            <MotionHeading 
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              as="h1"
            >
              Check out what I have been working on!</MotionHeading>
                <MotionHeading
                  initial="hidden"
                  animate="visibleExtraDelay"
                  variants={animationVariants}
                >
                  👇
                </MotionHeading>
            </VStack>
        <Section height={'auto'}>
                <Center flexDir={'column'} py={[20, 28]}>
            <Box w={['100%', "50%"]}>
                <Text 
                    textAlign="center" 
                    textColor={useColorModeValue('gray.800',"gray.300")} 
                    fontSize="xl"
                >
                        I am currently working as a Web Developer doing contract work and 
                        looking for a full time job! I have a serious passion for creating unique and 
                        memorable user experiences through intuitive and dynamic UI.
                </Text>
            </Box>
            <HStack>
            <Button 
                onClick={() => handleSetActiveType(null)}
                borderColor={activeType === null ? 'info.500' : 'info.500'}
                variant={activeType === null ? "solid" : 'outline'}
                bg={activeType === null ? 'info.500' : 'gray.800'}
                color={activeType === null ? 'gray.800' : 'white'}
                >
                  View All
                </Button>
              <Button 
                onClick={() => handleSetActiveType('React App')}
                borderColor={activeType === 'React App' ? 'info.500' : 'info.500'}
                variant={activeType === 'React App' ? "solid" : 'outline'}
                bg={activeType === 'React App' ? 'info.500' : 'gray.800'}
                color={activeType === 'React App' ? 'gray.800' : 'white'}
                >
                  Web Apps
                </Button>
              <Button 
                onClick={() => handleSetActiveType('Blog')}
                borderColor={activeType === 'Blog' ? 'info.500' : 'info.500'}
                variant={activeType === 'Blog' ? "solid" : 'outline'}
                bg={activeType === 'Blog' ? 'info.500' : 'gray.800'}
                color={activeType === 'Blog' ? 'gray.800' : 'white'}
                >
                  Blog Posts
                </Button>
                </HStack>
            <Grid templateColumns={['repeat(1, 1fr)',"repeat(3, 1fr)"]} gap={6}>
          {projects.map((x,i) => (
                <PortfolioCard
                activeType={activeType}
                key={i} 
                type={x.type}
              title={x.title}
              imgSrc={x.imgSrc}
              date={x.date}
              description={x.description}
              linkToCode={x.linkToCode}
              linkToLive={x.linkToLive}
              length={x.length}
            />
            ))}
          </Grid>
                </Center>
        </Section>
      
      </main>
      <Footer />
    </div>
  )
}
