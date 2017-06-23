import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';


describe('<GuessSection />', () => {

    it('GuessForm renders without crashing.', ()=> {
      shallow(<GuessSection feedback={"you're doing great"} onGuess={"ok"}/>);
    });
    it('GuessSection renders with proper feedback value', ()=>{
      const feedback = 'testing testing'
      const wrapper = shallow(<GuessSection feedback={feedback} onGuess={"ok"}/>);
      expect(wrapper.find('h2').text()).toEqual(feedback);
    });
});