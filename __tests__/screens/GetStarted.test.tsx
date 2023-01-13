import React from 'react';

import renderer from 'react-test-renderer';

import Screen from '../../src/screens/GetStarted';

import Wrapper from '../Wrapper';

const navigation = {
  navigate: jest.fn(),
};

const route = {
  key: 'GetStarted',
  name: 'GetStarted',
  params: {},
  path: 'GetStarted',
};

describe('<GetStarted />', () => {
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
