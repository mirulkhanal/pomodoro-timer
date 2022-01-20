import React, { useState } from 'react';
import { Button, Input, Box, VStack } from '@chakra-ui/react';
const TimerConfigForm = ({ onvalue }) => {
  return (
    <VStack backgroundColor={'rgba(36, 7, 64, 0.63)'} p={'4'} borderRadius={35}>
      <Input placeholder='Pomodoro Time' type={'number'} variant={'filled'} />
      <Input placeholder='Interval Time' type={'number'} variant={'filled'} />
      <Input placeholder='Break Time' type={'number'} variant={'filled'} />
      <Button colorScheme={'green'}>Start</Button>
    </VStack>
  );
};

export default TimerConfigForm;
