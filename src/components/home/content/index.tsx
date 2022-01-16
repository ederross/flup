import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  HeaderContainer,
  LocationContainer,
  LocationLabel,
  SaludationsContainer,
  SaludationsDescription,
  SaludationsTitle,
  Title,
  TitleContainer,
} from './styles';
import { useTheme } from 'styled-components/native';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import CarouselTrackMap from './carouselTrackMap';

interface IContent {
  city: string;
  loading: boolean;
}

const Content = ({ city, loading }: IContent) => {
  const { COLORS } = useTheme();

  return (
    <>
      <Container>
        <HeaderContainer>
          <LocationContainer>
            {loading ? (
              <ActivityIndicator size="small" color={COLORS.SUCCESS_900} />
            ) : (
              <LocationLabel>{city}</LocationLabel>
            )}
          </LocationContainer>
          <TouchableOpacity>
            <MaterialIcons
              name="notifications"
              size={24}
              color={COLORS.ICONS_PRIMARY_COLOR}
            />
          </TouchableOpacity>
        </HeaderContainer>
        <SaludationsContainer>
          <SaludationsTitle>Bora pro rolê?</SaludationsTitle>
          <SaludationsDescription>
            Mamãe já dizia: se for dar um rolê "ollie" para os dois lados antes
            de atravessar a rua.
          </SaludationsDescription>
        </SaludationsContainer>
        <CarouselTrackMap />

        <TitleContainer>
          <MaterialIcons name="supervised-user-circle"  size={24} style={{marginRight: 4}}/>
          <Title>Galera de</Title>
        </TitleContainer>

        <Title></Title>
      </Container>
    </>
  );
};

export default Content;
