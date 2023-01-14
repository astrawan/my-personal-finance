import React from 'react';

import renderer from 'react-test-renderer';

import Screen from '../../src/components/Root';

import Wrapper from '../Wrapper';

describe('<Root />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          {/* @ts-ignore */}
          <Screen />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
