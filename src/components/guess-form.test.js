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
      const value = 5;
      wrapper.find('input[type="text"]').node.value = value;
      wrapper.find('form').simulate('submit');
      expect(callback).toHaveBeenCalledWith(value.toString());
    });
    it('GuessForm submit button calls function on submit', () => {
      const callback = jest.fn();
      const wrapper = mount(<GuessForm />)
      const value = 5;
      const input = wrapper.find('input[type="text"]')
      input.node.value = value;
      wrapper.find('form').simulate('submit');
      expect(input.node.value).toEqual('');
    });

});
