import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
export default function Home() {
  const [timer, setTimer] = useState();
  const [interval, setInterval] = useState();
  const [timeBreak, setTimeBreak] = useState();
  const toast = useToast();
  const startTimer = () => {
    if (!timer || !timeBreak || !interval) {
      toast({
        variant: 'subtle',
        status: 'error',
        title: 'Error',
        description: 'Please provide all the fields',
      });
      return;
    }
    if (timer > 5) {
      toast({
        variant: 'subtle',
        status: 'error',
        title: 'Error',
        description: 'Pomodoro duration cannot be longer than 5 hours',
      });
      return;
    }
    if (interval > 60) {
      toast({
        variant: 'subtle',
        status: 'error',
        title: 'Error',
        description: 'Pomodoro Interval cannot be longer than 1 hour',
      });
      return;
    }
    if (timeBreak > 20) {
      toast({
        variant: 'subtle',
        status: 'error',
        title: 'Error',
        description: 'Break cannot be longer than 20 minutes',
      });
      return;
    }
  };
  return (
    <HStack
      bgGradient='linear-gradient(283.91deg, #39102e 1.03%,#674f9a 44.14%,#81286d 72.38%, #c66f6f 99.58% )'
      justifyContent={'center'}
      alignItems={'center'}
      width={'100vw'}
      height={'100vh'}
      px={'10'}
      spacing={'96'}>
      <VStack
        backgroundColor={'rgba(36, 7, 64, 0.63)'}
        p={'4'}
        color={'white'}
        borderRadius={35}>
        <Input
          placeholder='Pomodoro Time'
          type={'number'}
          value={timer}
          onChange={(e) => setTimer(e.target.value)}
          borderRadius={'2xl'}
        />
        <Input
          placeholder='Interval Time'
          type={'number'}
          value={interval}
          onChange={(e) => setInterval(e.target.value)}
          borderRadius={'2xl'}
        />
        <Input
          placeholder='Break Time'
          type={'number'}
          value={timeBreak}
          onChange={(e) => setTimeBreak(e.target.value)}
          borderRadius={'2xl'}
        />
        <Button colorScheme={'green'} onClick={startTimer}>
          Start
        </Button>
      </VStack>
      <VStack>
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          borderRadius={'360px'}
          height={'400px'}
          width={'400px'}
          borderColor={'white'}
          borderWidth={'15px'}
          dropShadow={'2xl'}>
          <Box
            width={'350px'}
            height={'100px'}
            borderWidth={'5px'}
            borderRadius={'10px'}>
            <HStack color={'white'} justifyContent={'space-evenly'}>
              <Text fontSize={'5xl'}>25</Text>
              <Text fontSize={'5xl'}>:</Text>
              <Text fontSize={'5xl'}>40</Text>
              <Text fontSize={'5xl'}>:</Text>
              <Text fontSize={'5xl'}>11</Text>
            </HStack>
          </Box>
        </Flex>
      </VStack>
    </HStack>
  );
}
