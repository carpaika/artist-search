import React from 'react';
import Artist from '../Artist';
import renderer from 'react-test-renderer';

jest.mock('../../services/musicBrainzApi.js');

describe('Artist', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Artist />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
