import React from 'react';
import { View, Image } from 'react-native';

import { Container, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <View>
        <Logo />
      </View>
    </Container>
  );
}
