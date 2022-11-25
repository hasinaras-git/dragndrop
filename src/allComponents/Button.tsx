import React from 'react';
import { button } from './styles/button';

const Button = () => {
    const dragEnd = (e: any) => {
        e.preventDefault();
        e.target.classList.remove('dragged');
        e.target.classList.remove('btn-grabbing');
        // e.dataTransfer.setData("text/plain", e.target.type)
    }

    const dragStart = (e: any) => {
        console.log(e);
        e.dataTransfer.effectAllowed = 'copy';
        e.target.classList.add('dragged');
        e.dataTransfer?.setData("text/plain", e.target.id);
        e.target.classList.add('btn-grabbing');
    }

    return (
        <div>
            <button
                style={button}
                type='button'
                draggable
                onDragStart={dragStart}
                onDragEnd={dragEnd}
                id="button"
            // onDrag={() => console.log('dragging')}
            >
                Button
            </button>
        </div>
    )
}

export default Button;