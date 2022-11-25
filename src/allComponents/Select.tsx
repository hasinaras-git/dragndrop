import React, { FC } from 'react';

const Select: FC = () => {
    const dragStart = (e: any) => {
        let element = e.target;
        element.classList.add('dragged');
        e.dataTransfer.setData('text/plain', e.target.id);
        e.dataTransfer.effectAllowed = "copy";
    }

    const dragEnd = (e: any) => {
        e.target.classList.remove('dragged');
    }

    return (
        <div
            draggable
            onDragStart={dragStart}
            onDragEnd={dragEnd}
        >
            <select defaultValue="select"
                id="select"
            >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </div>
    );
}

export default Select;