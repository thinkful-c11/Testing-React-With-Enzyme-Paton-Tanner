import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';


describe('<GuessForm />', () => {

    it('GuessForm renders without crashing.', ()=> {
      shallow(<GuessForm />);
    });

    it('GuessForm submit button calls function on submit', () => {
      const callback = jest.fn();
      const wrapper = mount(<GuessForm onGuess={callback} />)
      wrapper.find('form').simulate('submit');
      expect(callback).toHaveBeenCalled();
    });
});
