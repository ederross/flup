import React, { useRef } from 'react';
import styled from 'styled-components/native';
import { Transition, Transitioning } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { Image, Text } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/types';

const Container = styled.TouchableWithoutFeedback``;

const Background = styled(Transitioning.View)`
  flex: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  margin: 6px;
`;

function Tab({ label, accessibilityState, onPress }: any) {
  const { user } = useAuth();

  const { photo, name } = user;

  const focused = accessibilityState.selected;

  const {
    user: {
      userId,
      displayName,
      status,
      avatarURL,
      bannerURL,
      profileRole,
      socialMedia,
      peopleDescription,
    },
  } = useSelector((state: AppStore) => state);

  const transition = (
    <Transition.Sequence>
      <Transition.Out type="scale" durationMs={30} />
      <Transition.Change interpolation="easeInOut" durationMs={100} />
      <Transition.In type="scale" durationMs={30} />
    </Transition.Sequence>
  );

  const ref = useRef();

  return (
    <Container
      onPress={() => {
        ref?.current?.animateNextTransition();
        onPress();
      }}
    >
      <Background
        focused={focused}
        label={label}
        ref={ref}
        transition={transition}
      >
        {label === 'Eu' ? (
          <Image
            style={{ width: 32, height: 32, borderRadius: 32 }}
            source={{
              uri: avatarURL
                ? avatarURL
                : `https://ui-avatars.com/api/?size=128&length=1&background=FF2424&color=FFF&name=${name}`,
            }}
          />
        ) : label === 'Discover' ? (
          <Image
            style={{ width: 24, height: 24 }}
            source={require('../../assets/images/logo.png')}
          />
        ) : (
          <Ionicons name={'grid-outline'} size={20} color="#FFF" />
        )}
        {focused && (
          <Text
            style={{
              color: '#FFFFFF',
              fontWeight: '600',
              marginLeft: 12,
              marginTop: 4,
              fontFamily: 'DMSans_Bold',
            }}
          >
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Text>
        )}
      </Background>
    </Container>
  );
}

export default Tab;