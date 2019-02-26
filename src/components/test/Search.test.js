import React from 'react';
import Search from '../Search';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

jest.mock('../../services/musicBrainzApi.js');

describe('Search', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Search />
    ).toJSON();
    expect(tree).toMatchSnapshot();
      
  });
    
  it('Enzyme Search', (done) => {
    const wrapper = shallow(<Search />);

    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    setTimeout(() => {
      expect(wrapper.state().artists).toHaveLength(25);
      done();
    }, 500);
  });
});
