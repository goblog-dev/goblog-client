import React from "react";
import {Quill} from "react-quill";

// Custom Undo button icon component for Quill editor. You can import it directly
// from 'quill/assets/icons/undo.svg' but I found that a number of loaders do not
// handle them correctly
const CustomUndo = () => (
    <svg viewBox="0 0 18 18">
        <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"/>
        <path
            className="ql-stroke"
            d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
        />
    </svg>
);

// Redo button icon component for Quill editor
const CustomRedo = () => (
    <svg viewBox="0 0 18 18">
        <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"/>
        <path
            className="ql-stroke"
            d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
        />
    </svg>
);

// Undo and redo functions for Custom Toolbar
function undoChange() {
    // @ts-ignore
    this.quill.history.undo();
}

function redoChange() {
    // @ts-ignore
    this.quill.history.redo();
}

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
    "arial",
    "comic-sans",
    "courier-new",
    "georgia",
    "helvetica",
    "lucida"
];
Quill.register(Font, true);

// Modules object for setting up the Quill editor
export const modules = {
    toolbar: {
        container: "#toolbar",
        handlers: {
            undo: undoChange,
            redo: redoChange
        }
    },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true
    }
};

// Formats objects for setting up the Quill editor
export const formats = [
    'header', 'font', 'size',
    'background', 'color',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'script', 'code-block',
    'list', 'bullet',
    'align', 'indent',
    'link', 'image'
]

// Quill Toolbar component
export const QuillToolbar = (props: any) => (
    <div id="toolbar" className="bg-gray-200 fixed top-20 translate-y-2 w-full left-0 z-20">
        <span className="ql-formats">
            <button onClick={() => {
                props.handleEditorSaveCallback(props.data)
            }}>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z"
                      fill="#0F0F0F"/>
                </svg>
            </button>
        </span>
        <span className="ql-formats">
          <select className="ql-font" defaultValue="arial">
            <option value="arial">Arial</option>
            <option value="comic-sans">Comic Sans</option>
            <option value="courier-new">Courier New</option>
            <option value="georgia">Georgia</option>
            <option value="helvetica">Helvetica</option>
            <option value="lucida">Lucida</option>
          </select>
          <select className="ql-size" defaultValue="medium">
            <option value="extra-small">x-small</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
          </select>
          <select className="ql-header" defaultValue="3">
            <option value="1">Heading</option>
            <option value="2">Subheading</option>
            <option value="3">Normal</option>
          </select>
        </span>
        <span className="ql-formats">
          <button className="ql-bold"/>
          <button className="ql-italic"/>
          <button className="ql-underline"/>
          <button className="ql-strike"/>
        </span>
        <span className="ql-formats">
          <button className="ql-list" value="ordered"/>
          <button className="ql-list" value="bullet"/>
          <button className="ql-indent" value="-1"/>
          <button className="ql-indent" value="+1"/>
        </span>
        <span className="ql-formats">
          <button className="ql-script" value="super"/>
          <button className="ql-script" value="sub"/>
          <button className="ql-blockquote"/>
          <button className="ql-direction"/>
        </span>
        <span className="ql-formats">
          <select className="ql-align"/>
          <select className="ql-color"/>
          <select className="ql-background"/>
        </span>
        <span className="ql-formats">
          <button className="ql-link"/>
          <button className="ql-image"/>
          <button className="ql-video"/>
        </span>
        <span className="ql-formats">
          <button className="ql-formula"/>
          <button className="ql-code-block"/>
          <button className="ql-clean"/>
        </span>
        <span className="ql-formats">
          <button className="ql-undo">
            <CustomUndo/>
          </button>
          <button className="ql-redo">
            <CustomRedo/>
          </button>
        </span>
    </div>
);

export default QuillToolbar;