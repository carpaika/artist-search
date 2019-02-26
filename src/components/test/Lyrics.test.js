import React from 'react';
import Lyrics from '../Lyrics';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';


jest.mock('../../services/musicBrainzApi.js');

describe('Lyrics', () => {
  it('matches a snapshot', () => {
    const match = { params: { 
      artist: 'coldplay',
      work: 'fix-you'
    } };
    const tree = renderer.create(
      <MemoryRouter>
        <Lyrics match={match}/>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
