import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';
import Game from './game';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

describe('<Game />', () => {

    it('Header renders without crashing.', ()=> {
      shallow(<Header />);
    });
     it('Game renders without crashing.', ()=> {
      shallow(<Game />);
    });
    it('GuessSection renders without crashing.', ()=> {
      shallow(<GuessSection />);
    });
    it('GuessCount renders without crashing.', ()=> {
      shallow(<GuessCount />);
    });
    it('GuessList renders without crashing.', ()=> {
      shallow(<GuessList guesses={[2, 5 , 1]}/>);
    });
    it('Game state.correctAnswer should equal number', ()=>{
      const wrapper = shallow(<Game />);
      expect(typeof(wrapper.state('correctAnswer'))).toBe("number");
    });
    it('Game state.feeback should equal "Make your guess!"', ()=>{
      const wrapper = shallow(<Game />);
      expect(wrapper.state('feedback')).toEqual('Make your guess!');
    });

    it('Game state.guesses.length should equal 0', ()=>{
      const wrapper = shallow(<Game />);
      expect(wrapper.state('guesses').length).toEqual(0);
    });

    it('Game should reset correctAnswer when NewGame method is called', ()=>{
      const wrapper = shallow(<Game />);
      const oldAnswer = wrapper.state('correctAnswer');
      wrapper.instance().newGame();
      const newAnswer = wrapper.state('correctAnswer');
      expect(oldAnswer !== newAnswer).toEqual(true);
    });

    it('Game should reset guesses when NewGame method is called', ()=>{
      const wrapper = shallow(<Game />)
      wrapper.setState({guesses: [1, 6, 10, 4]})
      const oldGuess = wrapper.state('guesses');
      wrapper.instance().newGame();
      const newGuess = wrapper.state('guesses');
      expect(oldGuess !== newGuess).toEqual(true);
      expect(newGuess.length).toEqual(0);
    });

    it('Game should reset feedback when NewGame method is called', ()=>{
      const wrapper = shallow(<Game />)
      wrapper.setState({feedback: "You're getting colder"});
      const oldFeedback = wrapper.state('feedback');
      wrapper.instance().newGame();
      const newFeedback = wrapper.state('feedback');
      expect(oldFeedback !== newFeedback).toEqual(true);
      expect(newFeedback).toEqual('Make your guess!');
    });

    it("Game should not allow users to input an input that isn't a number", ()=>{
      const wrapper = shallow(<Game />);
      wrapper.instance().guess('foo');
      expect(wrapper.state('feedback')).toEqual('Please enter a valid number');
    });

    it("Game should return correct feedback matching users' input", ()=>{
      const wrapper = shallow(<Game />);
      wrapper.setState({correctAnswer: 0});
      wrapper.instance().guess(51);
      expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
      wrapper.instance().guess(40);
      expect(wrapper.state('feedback')).toEqual('You\'re Cold...');
      wrapper.instance().guess(11);
      expect(wrapper.state('feedback')).toEqual('You\'re Warm');
      wrapper.instance().guess(1);
      expect(wrapper.state('feedback')).toEqual('You\'re Hot!');
      wrapper.instance().guess(0);
      expect(wrapper.state('feedback')).toEqual('You got it!');
    });


});
