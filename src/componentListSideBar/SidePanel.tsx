import React from 'react';
import {
    Button,
    Input,
 } from '../allComponents';
import './styles/index.scss';

const SidePanel = () => {

    return (
        <div className='side-panel'>
            <h3>All Components</h3>
            <Button />
            <Input />
        </div>
    );
}

export default SidePanel;