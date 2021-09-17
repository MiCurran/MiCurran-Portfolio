import Typist from 'react-typist';

export const AnimatedText = ({textToAnimate, secondTextToAnimate}) => {

    return (
      <Typist>
        {textToAnimate}
        <Typist.Delay ms={2_000} />
        <br />
        {secondTextToAnimate}
      </Typist>
    );
}
