import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';


describe('<Header />', () => {

    it('Header renders without crashing.', ()=> {
      shallow(<Header />);
    });
    it('Header state showInfoModal defaults to false', ()=>{
      const wrapper = shallow(<Header />);
      expect(wrapper.state('showInfoModal')).toEqual(false);
    });
    it('Header toggleInfoModal method changes state properly', ()=>{
      const wrapper = shallow(<Header />);
      wrapper.instance().toggleInfoModal();
      expect(wrapper.state('showInfoModal')).toEqual(true);
    });
    
});