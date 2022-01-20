import React from 'react';
import { Flex } from '@chakra-ui/react';
import clock from '../public/images/clock.svg';
import Image from 'next/image';
const PomodoroTimer = ({ timeConfig }) => {
  return (
    <Flex>
      <Image src={clock} alt='clock svg' width={200} height={200} />
    </Flex>
  );
};

export default PomodoroTimer;
