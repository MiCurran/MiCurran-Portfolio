import React from 'react'
import Terminal from 'react-console-emulator'

const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: function () {
      return `${Array.from(arguments).join(' ')}`
    }
  },
  ls: {
    description: 'List contents of cwd',
    usage: 'ls',
    fn: () => (
      'backendSkills.txt \n frontendSkills.txt \n'
    )
  },
  cat: {
    description: 'return contents of a file',
    usage: 'cat backendSkills.txt',
    fn: function () {
      const args = Array.from(arguments);
      if (args[0] === 'frontendSkills.txt'){
        return (
          'I like coding things from scratch and I love creating intuitive but unique User Experiences and Interfaces.\n'
          +
          '___________________________\n'
          +
          '🛠----Languages I Use----🛠\n'
          +
          '___________________________\n'
          +
          '▪ Javascript / Typescript \n'
          +
          '_________________________\n'
          +
          '❤----Tools I Love----❤ \n' 
          +
          '_________________________\n'
          +
          '▪ React \n ▪ NextJS \n ▪ Tailwind \n ▪ ChakraUI \n ▪ Bootstrap \n ▪ Webpack \n ▪ Hyper Terminal'
        )
      }
      if (args[0] === 'backendSkills.txt'){
        return (
          'I enjoy developing and consuming APIs as well as writing server side and business logic to create persistent and consistent user data\n'
          +
          '___________________________\n'
          +
          '🛠----Languages I Use----🛠\n'
          +
          '___________________________\n'
          +
          '▪ Javscript / Typescript \n ▪ GOlang \n ▪ Bash \n ▪ Python \n'
          +
          '_________________________\n'
          +
          '❤----Tools I Love----❤ \n'
          +
          '_________________________\n'
          +
          '▪ Vercel \n ▪ MongoDB \n ▪ MySQL \n ▪ VIM \n ▪ Docker \n ▪ AWS'
        )
      } else return `No file matching ${args[0]}`
    }
  },
}

const MyTerminal = () => {
    return (
      <Terminal
      contentStyle={{maxHeight: '300px', overflowY: 'scroll'}}
        commands={commands}
        messageStyle={{color: '#00CBFF'}}
        promptLabelStyle={{color: '#B827D3'}}
        welcomeMessage={'I also enjoy working with Bash and CLIs \n So I made this terminal for you to explore a little! \n use "help" to view commands \n' + 
        '----Try typing "cat frontendSkills.txt"----'
      }
        promptLabel={'Michael.Curran@HireMe:~$'}
      />
    )
  
};

export default MyTerminal;