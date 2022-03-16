import {useState, useEffect} from 'react';
import axios from 'axios';
import { 
    Spinner,
    Link,
    Flex,
    Image,
Box,
} from '@chakra-ui/react';
import chromium from 'chrome-aws-lambda';

export default function CustomLink({ children, href }) {
    let [imagePreview, setImagePreview] = useState("");
    let [isHovering, setIsHovering] = useState(false);
    let inImagePreview = false;
    let inLink = false;
  
    let handleMouseEnterImage = () => {
      inImagePreview = true;
      setIsHovering(true);
    };
  
    let handleMouseLeaveImage = () => {
      inImagePreview = false;
      setIsHovering(inLink);
    };
  
    let handleMouseEnterLink = () => {
      inLink = true;
      setIsHovering(true);
    };
  
    let handleMouseLeaveLink = () => {
      inLink = false;
      setIsHovering(inImagePreview);
    };
  
    let handleFetchImage = async (url) => {
    
    let getImageBase64 = async (url) => {
      //let browser = await chromium.puppeteer.launch();
      // import * as puppeteer from 'puppeteer';
    // const browser = await puppeteer.launch( { args: ['--no-sandbox'] } );
    
    const browser = await chromium.puppeteer.launch({
        args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: true,
        ignoreHTTPSErrors: true,
      })
      let page = await browser.newPage();
      await page.goto(url);
      let image = await page.screenshot({ encoding: "base64" });
      await browser.close();
      return image;
    };
    const image = await getImageBase64(url);
      setImagePreview(image);
    };
  
    useEffect(() => {
      handleFetchImage(href);
  
      return () => setImagePreview("");
    }, [href]);
  
    return (
      <Box position= 'relative' zIndex={10} display={'inline-block'}>
        <Link
          href={href}
          textDecoration={'underline'}
          className={`${isHovering && "underline"}`}
          onMouseEnter={handleMouseEnterLink}
          onMouseLeave={handleMouseLeaveLink}
          onFocus={handleMouseEnterLink}
          onBlur={handleMouseLeaveLink}>
          {children}
        </Link>
        {isHovering && (
          <Link href={href}>
            <Flex
                justifyContent={'center'}
                alignItems='start'
                w={36}
                position={'absolute'}

                

              className="w-36 h-28 absolute -top-32 left-1/2 transform -translate-x-[4.5rem] translate-y-8"
              onMouseLeave={handleMouseLeaveImage}
              onMouseEnter={handleMouseEnterImage}
              onFocus={handleMouseEnterImage}
              onBlur={handleMouseLeaveImage}>
              {imagePreview ? (
                <Image
                rounded={'lg'}
                shadow={'lg'}
                w={'40'}
                h={'32'}
                zIndex={10}
                objectFit='cover'
                objectPosition={'object-top'}
                  src={`data:image/jpeg;base64, ${imagePreview}`}
                  alt={children}
                />
              ) : (
                <Flex
                w={'40'}
                h={'32'}
                zIndex={10}
                justifyContent={'center'}
                alignItems={'center'}
                bg={'white'} 
                rounded={'xl'}
                shadow={'xl'}
                >
                  <Spinner color={'brand.500'}/>
                </Flex>
              )}
            </Flex>
          </Link>
        )}
      </Box>
    );
  }