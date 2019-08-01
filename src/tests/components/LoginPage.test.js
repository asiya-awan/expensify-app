import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should correctly render login page', () => {
  
    const wrapper = shallow(<LoginPage startLogin={() => {}} startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();

})

test('should call startLogin on button click', () => {
    const startLogin = jest.fn();
 
    const wrapper = shallow (<LoginPage startLogin = {startLogin} startLogout={() => {}}/>);
        wrapper.find('button').simulate('click');
        expect(startLogin).toHaveBeenCalled();

});

