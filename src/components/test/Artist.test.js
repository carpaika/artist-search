import React from 'react';
import Artist from '../Artist';
import renderer from 'react-test-renderer';

jest.mock('../../services/musicBrainzApi.js');

describe('Artist', () => {
  it('matches a snapshot', () => {
    const match = { params:{ id: '57f73e51-5b95-485b-9102-bc7bd23584f7' } };
    console.log('WOW****', match);
    const tree = renderer.create(
      <Artist match={match}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
