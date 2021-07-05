import React from 'react';

import {
  Text,
  ReloadScreenText,
  ActivityIndicator,
  ReloadScreenButton,
  EmptyStateContainer,
} from './EmptyStates.styles';

export const EmptyStateActivityIndicator = () => (
  <EmptyStateContainer>
    <ActivityIndicator />
  </EmptyStateContainer>
);

type IEmptyStateReloaderProps = {
  onPress: () => void;
};

export const EmptyStateReloader = (props: IEmptyStateReloaderProps) => {
  const {onPress} = props;

  return (
    <EmptyStateContainer>
      <Text>
        {`The content couldn’t load.\r\n\r\n Please check your internet connection.`}
      </Text>
      <ReloadScreenButton onPress={onPress}>
        <ReloadScreenText>Reload the screen</ReloadScreenText>
      </ReloadScreenButton>
    </EmptyStateContainer>
  );
};
