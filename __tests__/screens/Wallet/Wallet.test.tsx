import React from 'react';

import renderer from 'react-test-renderer';

import Screen from '../../../src/screens/Wallet';

import Wrapper from '../../Wrapper';

const navigation = {
  navigate: jest.fn(),
};

const route = {
  key: 'Wallet',
  name: 'Wallet',
  params: {},
  path: 'Wallet',
};

describe('<Wallet />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          {/* @ts-ignore */}
          <Screen navigation={navigation} route={route} />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
