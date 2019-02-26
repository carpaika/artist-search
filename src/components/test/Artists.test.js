import React from 'react';
import Artists from '../Artists';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';


jest.mock('../../services/musicBrainzApi.js');

describe('Artists', () => {
  it('matches a snapshot', () => {
    const artists = [
      {
        'id': '57f73e51-5b95-485b-9102-bc7bd23584f7',
        'type': 'Group',
        'type-id': 'e431f5f6-b5d2-343d-8b36-72607fffb74b',
        'score': 100,
        'name': 'Mumford’s',
        'sort-name': 'Mumford’s',
        'life-span': {
          'begin': '2008',
          'ended': null
        },
        'tags': [
          {
            'count': 1,
            'name': 'iowa'
          }
        ]
      },
      {
        'id': 'e5379ae1-cb4c-46dc-89f4-3d22791f589a',
        'score': 86,
        'name': 'Quincy Mumford',
        'sort-name': 'Mumford, Quincy',
        'life-span': {
          'ended': null
        }
      },
      {
        'id': '2f3613cf-568c-4e18-ba59-ce6d50f05f00',
        'type': 'Group',
        'type-id': 'e431f5f6-b5d2-343d-8b36-72607fffb74b',
        'score': 85,
        'name': 'Brock Mumford',
        'sort-name': 'Brock Mumford',
        'life-span': {
          'ended': null
        }
      }];
    const tree = renderer.create(
      <MemoryRouter>
        <Artists artists={artists} />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
