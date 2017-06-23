import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount  from './guess-count';
import Game from './game';


describe('<GuessCount />', () => {

    it('GuessCount renders without crashing.', ()=> {
      shallow(<GuessCount />);
    });

    it('GuessCount renders the correct prop value', ()=>{
      const count = 8;
      const wrapper = shallow(<GuessCount count= {count}/>);
      expect(wrapper.text().split('').includes(`${count}`)).toEqual(true);
    });
});
