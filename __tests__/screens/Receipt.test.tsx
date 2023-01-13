import React from 'react';

import renderer from 'react-test-renderer';

import Screen from '../../src/screens/Receipt';

import Wrapper from '../Wrapper';

const navigation = {
  navigate: jest.fn(),
};

const route = {
  key: 'Receipt',
  name: 'Receipt',
  params: {},
  path: 'Receipt',
};

describe('<Receipt />', () => {
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
