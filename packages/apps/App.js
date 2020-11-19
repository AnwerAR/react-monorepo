/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { sum, greet } from '@react-monorepo/core';
import styled from 'styled-components';

const Container = styled(View)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

`;

const Title = styled(Text)`
    font-size: 30px;
`;

const Para = styled(Text)`
    font-size: 16px;
`;

const App = () => (
  <>
    <SafeAreaView>
      <Container>
        <Title>{greet('World!')}</Title>
        <Para>
          Sum of 2+3 is
          {sum(2, 3)}
        </Para>
      </Container>
    </SafeAreaView>
  </>
);

export default App;
