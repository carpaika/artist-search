import React from 'react';
import Work from '../Work';
import renderer from 'react-test-renderer';

describe('Work', () => {
  it('matches a snapshot', () => {
    const artist = 'Mumford and Sons';
    const work =     {
      'type-id': null,
      'languages': [
        'eng'
      ],
      'iswcs': [],
      'id': '15dc1e5d-7aff-488e-a6ff-40ba51f326b5',
      'disambiguation': '',
      'attributes': [],
      'type': null,
      'language': 'eng',
      'title': 'Beloved'
    };
    const tree = renderer.create(
      <Work artist={artist} work={work} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
