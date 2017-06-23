import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';


describe('<TopNav />', () => {

    it('TopNav renders without crashing.', ()=> {
      shallow(<TopNav />);
    });
    it("TopNav's onNewGame method is called on click", ()=>{
      const callback = jest.fn();
      const wrapper = shallow(<TopNav onNewGame={callback} />);
      wrapper.find('.new').simulate('click', {preventDefault: () => {}});
      expect(callback).toHaveBeenCalled();
    });
    it("TopNav's onInfo method is called on click", ()=>{
      const callback = jest.fn();
      const wrapper = shallow(<TopNav onInfo={callback} />);
      wrapper.find('.what').first().simulate('click', {preventDefault: () => {}});
      expect(callback).toHaveBeenCalled();
    });
});