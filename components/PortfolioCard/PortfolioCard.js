import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Link,
  Button,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router';
import CustomLink from '../CustomLink/CustomLink';

const CardBody = ({title, imgSrc, type, description}) => {
  const { colorMode, toggleColorMode } = useColorMode()

return (
<>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            alt={`${title} image`}
            src={imgSrc}
            layout={'fill'}
          />
        </Box>
        <Stack>
          <Text
            color={'success.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
            >
            {type}
          </Text>
          <Heading
            color={colorMode === 'light' ? 'gray.700' : 'white'}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {title}
          </Heading>
          <Text
            whiteSpace={'wrap'}
            overflow={'hidden'}
            textOverflow={'ellipsis'}
            color={useColorModeValue('gray.600','gray.300')}>
            {description}
          </Text>
        </Stack>
</>
)
}

const DateSection = ({date, length}) => {
 return (
    <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
      <Stack direction={'column'} spacing={0} fontSize={'sm'}>
        <Text fontWeight={'bold'} color={useColorModeValue('gray.700','gray.300')}>{date || ''} {length && `· ${length} read`}</Text>
      </Stack>
    </Stack>
 )
}

const LinkSection = ({linkToCode, linkToLive}) => (
    <Link href={linkToCode} isExternal>
    <Button colorScheme="gray" rightIcon={<ExternalLinkIcon />}  variant="solid">View Code</Button>
    </Link>
)

export default function PortfolioCard({ linkToCode, linkToLive, description, title, imgSrc, type, date, length, activeType}) {
  const { colorMode, toggleColorMode } = useColorMode()

  if (activeType === type || activeType === null){
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={colorMode === 'light' ? 'white' : 'gray.900'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        >
        <CardBody title={title} description={description} imgSrc={imgSrc} type={type}/>
        {date && 
          <DateSection date={date} length={length}/>
        }
        <HStack> 
            <Link href={linkToLive} isExternal>
            <Button colorScheme="purple" rightIcon={<ExternalLinkIcon />}  variant="solid">{linkToCode ? 'View Live' : 'View Post'}</Button>
            </Link>
            {linkToCode && 
              <LinkSection />
            }
        </HStack>
        </Box>
    </Center>
  );
} else return '';
}
