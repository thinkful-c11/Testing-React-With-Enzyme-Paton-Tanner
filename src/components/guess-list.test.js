import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';


describe('<GuessList />', () => {

    it('GuessList renders without crashing.', ()=> {
      shallow(<GuessList guesses={[0, 5, 17, 37]}/>);
    });
    it('GuessList renders in correct guesses props', ()=> {
      const guesses = [0, 5, 17, 37]
      const wrapper = shallow(<GuessList guesses={guesses}/>);
      expect(wrapper.text().includes('0')).toEqual(true);
      expect(wrapper.text().includes('5')).toEqual(true);
      expect(wrapper.text().includes('17')).toEqual(true);
      expect(wrapper.text().includes('37')).toEqual(true);
    });
});
