import React, { FC } from 'react';

const Input: FC = () => {
    const dragStart = (e: any) => {
        let element = e.target;
        element.classList.add('dragged');
        e.dataTransfer.setData('text/plain', e.target.id);
        e.dataTransfer.effectAllowed = 'copy';
        e.target.classList.add('input-grabbing');
    }

    const dragEnd = (e: any) => {
        e.target.classList.remove('dragged');
        e.target.classList.remove('input-grabbong');
    }

    return (
        <input 
            type="text"
            id='input'
            placeholder='input'
            draggable
            onDragStart={dragStart}
            onDragEnd={dragEnd}
        />
    )
}

export default Input;