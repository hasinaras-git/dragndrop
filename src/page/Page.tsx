import React, { FC, useEffect } from 'react';
import './styles/index.scss';
import { createElement } from '../functions/createElement';
import ReactJson from 'react-json-view';
import { ChildType } from '../interfaces/types';

interface IPageProps {
    toShow: String;
    setToShow?: any;
    JSONValue: any;
}

const Page: FC<IPageProps> = (props) => {
    const { toShow, JSONValue } = props as IPageProps;

    useEffect(() => {
        if (JSONValue?.content?.length && toShow === "UI") {
            const page = document.querySelector('.page');
            let rowCount = 0;
            for (let i = 0; i < JSONValue?.content.length; ++i) {
                // console.log(JSONValue.content)
                JSONValue.content[i][`row${++rowCount}`].forEach((child: ChildType) => {
                    let element = createElement(child.tagName, page, child.innerText);
                    page?.appendChild(element);
                })
            }
        }
    }, [ JSONValue, toShow ])

    const handleDrop = (e: any) => {
        e.preventDefault();
        console.log(e.target);
        let data = e.dataTransfer.getData('text/plain');
        let source = document.getElementById(data) as HTMLElement;
        const newElementCreated = createElement(data, e.target, source?.textContent);
        // console.log(newElementCreated)
        // setDynamicContent(`<${newElementCreated.parentElement?.localName}>
        //     ${newElementCreated.innerHTML}
        // </${newElementCreated.parentElement?.localName}>`);
        e.target.classList.remove('drag-over');
        e.stopPropagation();
    }

    const handleDragOver = (e: any) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
        e.target.classList.add('drag-over');
        // e.stopPropagation();
    }

    const dragEnter = (e: any) => {
        e.dataTransfer.dropEffect = 'copy';
    }

    const dragEnd = (e: any) => {
        e.dataTransfer.dropeffect = "copy";
    }

    const dragLeave = (e: any) => {
        e.target.classList.remove('drag-over');
    }

    return (
        <div className="page-container">
            {
                (toShow === "UI") && (<div
                    className='page'
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragEnter={dragEnter}
                    onDragEnd={dragEnd}
                    onDragLeave={dragLeave}
                >

                </div>)
            }

            {
                (toShow === "JSON") && (
                    <div className='page'>
                        <ReactJson
                            src={
                                JSONValue
                            }
                            theme="bespin"
                            collapsed={false}
                        />
                    </div>
                )
            }


        </div>
    )
}

export default Page;