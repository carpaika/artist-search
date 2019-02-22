import React from 'react';
import Artists from '../Artists';
import renderer from 'react-test-renderer';

jest.mock('../../services/musicBrainzApi.js');

describe('Artists', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Artists />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
