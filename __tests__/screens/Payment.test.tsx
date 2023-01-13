import React from 'react';

import renderer from 'react-test-renderer';

import Screen from '../../src/screens/Payment';

import Wrapper from '../Wrapper';

jest.useFakeTimers();

const navigation = {
  navigate: jest.fn(),
};

const route = {
  key: 'Payment',
  name: 'Payment',
  params: {},
  path: 'Payment',
};

describe('<Payment />', () => {
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
