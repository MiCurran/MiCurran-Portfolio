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

export default function PortfolioCard({ linkToCode, linkToLive, description, title, imgSrc, type, date, length, activeType}) {
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter();

  const handleGoToRoute = (route) => router.push(route);

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
            color={'gray.500'}>
            {description}
          </Text>
        </Stack>
        {date && 
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text color={'gray.500'}>{date || ''} {length && `· ${length} read`}</Text>
          </Stack>
        </Stack>
        }
        <HStack> 
          <CustomLink href={linkToLive} isExternal>
            <Button colorScheme="purple" rightIcon={<ExternalLinkIcon />}  variant="solid">{linkToCode ? 'View Live' : 'View Post'}</Button>
          </CustomLink>
          {linkToCode &&
            <CustomLink href={linkToCode} isExternal>
            <Button colorScheme="gray" rightIcon={<ExternalLinkIcon />}  variant="solid">View Code</Button>
            </CustomLink>
          }
        </HStack>
      </Box>
    </Center>
  );
} else return '';
}
