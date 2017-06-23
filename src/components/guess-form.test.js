import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';


describe('<GuessForm />', () => {

    it('GuessForm renders without crashing.', ()=> {
      shallow(<GuessForm />);
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
