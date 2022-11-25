type ChildType = {
    type: String, 
    tagName: String, 
    innerText: String, 
    placeholder?: String
};

interface IHeadProps {
    setToShow: any;
    setJSON: any;
}

export type {
    IHeadProps,
    ChildType
}