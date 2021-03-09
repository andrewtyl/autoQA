import React from 'react';
import ReactDOM from 'react-dom';
import My_component from '../My_component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    // eslint-disable-next-line
    ReactDOM.render(<div><My_component></My_component></div>, div);
})