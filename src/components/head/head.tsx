import React, { FC, useRef } from 'react';
import './style/index.scss';
import { ChildType, IHeadProps } from '../../interfaces/types';

const Head: FC<IHeadProps> = (props) => {
    const { setToShow, setJSON } = props as IHeadProps;
    const btnRef = useRef(null);

    const getAllElement = (e?: any) => {
        const allElementHTML = document.querySelector('.page')?.children as any;
        let allElement: any[] = [];
        for (const element of allElementHTML) {
            allElement.push(element)
        }
        let data: any[] = [];
        let rowCount = 0;
        allElement.forEach((element: any) => {
            let rowNumber = `row${++rowCount}`;
            let allChild: any[] = [];
            element?.childNodes.forEach((child: any) => {
                let temp: ChildType = {
                    tagName: child.localName,
                    innerText: child.innerText,
                    type: child.type
                }
                if(child.localName === "input") {
                    temp.placeholder = child.placeholder;
                }
                allChild.push(temp);
            })
            data.push({ [rowNumber]: allChild });
        })
        return { content: data }
    }

    const handleClick = (val: String) => (e: any) => {
        setToShow(val);
        if(val === 'JSON') {
            const res = getAllElement(e);
            setJSON(res)
        }
    }

    return (
        <div className='head'>
            <h2>Builder App</h2>
            <div className='btn-container'>
                <button onClick={getAllElement} className="head-btn">Get elements</button>
                <button className="head-btn" onClick={handleClick('UI')} ref={btnRef}>UI</button>
                <button className="head-btn" onClick={handleClick('JSON')}>JSON</button>
            </div>
        </div>
    )
}

export default Head;