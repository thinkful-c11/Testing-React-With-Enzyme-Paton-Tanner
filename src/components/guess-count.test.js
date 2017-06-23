import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount  from './guess-count';
import Game from './game';


describe('<GuessCount />', () => {

    it('GuessCount renders without crashing.', ()=> {
      shallow(<GuessCount />);
    });

    it('GuessCount count should equal state.guesses.length', ()=>{
      const wrapper = shallow(<GuessCount />);
      const gameWrap = shallow(<Game />);
      console.log('-------------------',gameWrap);
      gameWrap.setState({guesses: [4, 6, 3, 10]});
      expect(wrapper.prop('count')).toEqual(4);
    });
    // it('Renders without crashing', () => {
    //     shallow(<AddForm />);
    // });

    // it('Renders the add button initially', () => {
    //     const wrapper = shallow(<AddForm />);
    //     expect(wrapper.hasClass('add-button')).toEqual(true);
    // });

    // it('Should render the add form when editing', () => {
    //     const wrapper = shallow(<AddForm />);
    //     wrapper.instance().setEditing(true);
    //     expect(wrapper.hasClass('add-form')).toEqual(true);
    // });

    // it('Should switch to editing when the add button is clicked', () => {
    //     const wrapper = shallow(<AddForm />);
    //     wrapper.simulate('click');
    //     expect(wrapper.state('editing')).toEqual(true);
    // });

    // it('Should fire the onAdd callback when the form is submitted', () => {
    //     const callback = jest.fn();
    //     const wrapper = mount(<AddForm onAdd={callback} />);
    //     const value = 'Foobar';
    //     wrapper.instance().setEditing(true);
    //     wrapper.find('input[type="text"]').node.value = value;
    //     wrapper.simulate('submit');
    //     expect(callback).toHaveBeenCalledWith(value);
    // });

});
