import React from 'react';

import renderer from 'react-test-renderer';

import { AddNewCard as Screen } from '../../../src/screens/Wallet';

import Wrapper from '../../Wrapper';

describe('<Wallet.AddNewCard />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Screen />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
