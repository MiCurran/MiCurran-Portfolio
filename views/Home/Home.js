import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.scss'
import { Box, Heading, HStack, Text, Avatar, Button, VStack, Switch, Stack, Grid, GridItem, Center, List, ListItem, ListIcon } from '@chakra-ui/react'
import { BiCoffeeTogo } from "react-icons/bi";
import { AnimatedText } from '../../components/AnimatedText/AnimatedText';
import { useColorMode } from '@chakra-ui/color-mode';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import { projects } from '../../constants/projects';
import { useState, useEffect } from 'react';
import MyTerminal from '../../components/Terminal/MyTerminal';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { GoTools } from 'react-icons/go';
import { SiNextDotJs, SiTailwindcss, SiBootstrap, SiGithub } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import * as ga from '../lib/ga'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const [activeType, setActiveType] = useState(null);
  const [activeSkill, setActiveSkill] = useState('Backend');

  const handleSetActiveType = (type) => {
    if(activeType !== type){
      setActiveType(type);
    } else setActiveType(null);
  };
  
  const handleSetActiveSkill = (type) => {
    setActiveSkill(type);
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
      <HStack style={{position: 'absolute', top: '-10', left: '0'}}>
                <Switch size="lg" onChange={toggleColorMode}/>
                {colorMode === 'light' 
                  ? <SunIcon color={'gray.400'}/>
                  : <MoonIcon />
                }
                </HStack>
      <svg viewBox="50 20 275 200" xmlns="http://www.w3.org/2000/svg" style={{position:'absolute', top: '-500', zIndex:'-1'}}>
  <path fill="#6E1397" d="M54.9,-59.6C64.4,-45.4,60.8,-22.7,60.5,-0.3C60.3,22.2,63.4,44.3,53.9,54.7C44.3,65.1,22.2,63.6,0.4,63.2C-21.4,62.8,-42.8,63.5,-58.1,53.1C-73.4,42.8,-82.6,21.4,-79.5,3C-76.5,-15.3,-61.2,-30.6,-45.9,-44.8C-30.6,-59.1,-15.3,-72.3,3.7,-76C22.7,-79.7,45.4,-73.9,54.9,-59.6Z" transform="translate(100 100)" />
</svg>
          <Grid py="10%" h={['60vh', '50vh']} templateColumns={['repeat(1, 1fr)',"repeat(2, 1fr)"]} my={[ '50', '10']}>
            <VStack>

                <Avatar size="2xl" name="Michael Curran" src="https://avatars.githubusercontent.com/u/65498724?v=4" />{" "}
                <Heading as="h1" color={useColorModeValue('gray.400', 'white')}><AnimatedText textToAnimate="Hi I'm Michael!" secondTextToAnimate="I'm a developer"/></Heading>
            </VStack>   
            <VStack alignContent={['center', 'left']} justifyContent="center">
                <Box>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/micurran"><Button color="white" marginX="2" variant="solid" bg="brand.500"> View My Github! </Button></a>
                    <a target="_blank" rel="noopener noreferrer" href="/images/resume.pdf"><Button color="white" marginX="2" variant="solid" bg="brand.500"> View My Resume! </Button></a>
                </Box>

            </VStack>
          </Grid>
          <VStack
          margin={[ '10', '20']}
          >
            <Heading as="h1">Check out what I have been working on!</Heading>
            <Box w={['100%', "50%"]}><Text textAlign="center" textColor={useColorModeValue('gray.800',"gray.300")} fontSize="xl">
            I am currently working as a Web Developer doing contract work and 
            looking for a full time job! I have a serious passion for creating unique and 
            memorable user experiences through intuitive and dynamic UI.
            </Text></Box>
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
              length={x.length}
            />
            ))}
          </Grid>
          </VStack>
          <Grid templateColumns={['repeat(1, 1fr)',"repeat(2, 1fr)"]} gap={6}>
            <VStack textAlign="center">
            <Heading>About My Work</Heading>
            <Text w="50%">
              I love Coding things from scratch and making content come to life while creating exciting new things for each of my projects.
            </Text>
            <Heading color="info.500" fontSize="2xl">
              Use the buttons to explore tools {'&'} languages I enjoy using!
              </Heading>
            <HStack>
              <Button
              onClick={() => handleSetActiveSkill('Frontend')}
                borderColor={activeSkill === 'Frontend' ? 'info.500' : 'info.500'}
                variant={activeSkill === 'Frontend' ? "solid" : 'outline'}
                bg={activeSkill === 'Frontend' ? 'info.500' : 'gray.800'}
                color={activeSkill === 'Frontend' ? 'gray.800' : 'white'}
              >
                Front End
              </Button>
              <Button
              onClick={() => handleSetActiveSkill('Backend')}
              borderColor={activeSkill === 'Backend' ? 'info.500' : 'info.500'}
              variant={activeSkill === 'Backend' ? "solid" : 'outline'}
              bg={activeSkill === 'Backend' ? 'info.500' : 'gray.800'}
              color={activeSkill === 'Backend' ? 'gray.800' : 'white'}
              >
                Back End
              </Button>
              {/* <Button
              onClick={() => handleSetActiveSkill('Devops')}
                borderColor={activeSkill === 'Devops' ? 'info.500' : 'red'}
                variant={activeSkill === 'Devops' ? "outline" : 'solid'}
                bg={activeSkill === 'Devops' ? 'gray.800' : 'info.500'}
              >
                Dev Ops
              </Button> */}
            </HStack>
            </VStack>
            {activeSkill === 'Backend' &&
              <MyTerminal />
            }
            {activeSkill !== 'Backend' &&
              <Center>
                <VStack>
                <Heading><GoTools/></Heading>
                <Heading fontSize="2xl" color={'brand.500'}>Developer Tool Belt</Heading>
                <List>
                  <ListItem><ListIcon as={SiNextDotJs} /> NextJS</ListItem>
                  <ListItem><ListIcon as={FaReact} /> ReactJS</ListItem>
                  <ListItem><ListIcon as={SiTailwindcss} /> Tailwind css</ListItem>
                  <ListItem><ListIcon as={SiBootstrap} /> Bootstrap css</ListItem>
                  <ListItem><ListIcon as={SiGithub} /> Git</ListItem>
                </List>
                </VStack>
                </Center>
            }
          </Grid>
      </main>

      <footer className={styles.footer}>
          {/* we need to link this to buy me a coffee just cuz we can */}
        <p>
          Powered by{' '}
          <span className={styles.logo}>
            <BiCoffeeTogo size="2em" />
          </span>
        </p>
      </footer>
    </div>
  )
}
