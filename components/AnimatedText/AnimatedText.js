import { Text } from "@chakra-ui/react";
export const AnimatedText = ({textToAnimate, secondTextToAnimate}) => {

    return (
      <Text>
        {textToAnimate}
        <br />
        {secondTextToAnimate}
      </Text>
    );
}
