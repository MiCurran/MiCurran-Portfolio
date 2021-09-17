import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';

export default function PortfolioCard({ linkToCode, linkToLive, description, title, imgSrc, type, date, length, activeType}) {
  const { colorMode, toggleColorMode } = useColorMode()
  if (activeType === type || activeType === null){
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        maxH={'475px'}
        bg={colorMode === 'light' ? 'white' : 'gray.900'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
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
            <Text color={'gray.300'}>{date || ''} {length && `· ${length} read`}</Text>
          </Stack>
        </Stack>
        }
      </Box>
    </Center>
  );
} else return '';
}