import {useState} from "react";

const Comment = () => {
    const [comment, setComment] = useState<number>(5);

    const commentIcon = <svg width="17px" height="17px" viewBox="0 0 32 32" version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Icon-Set" transform="translate(-100.000000, -255.000000)" fill="#231F20">
                <path
                    d="M116,281 C114.832,281 113.704,280.864 112.62,280.633 L107.912,283.463 L107.975,278.824 C104.366,276.654 102,273.066 102,269 C102,262.373 108.268,257 116,257 C123.732,257 130,262.373 130,269 C130,275.628 123.732,281 116,281 L116,281 Z M116,255 C107.164,255 100,261.269 100,269 C100,273.419 102.345,277.354 106,279.919 L106,287 L113.009,282.747 C113.979,282.907 114.977,283 116,283 C124.836,283 132,276.732 132,269 C132,261.269 124.836,255 116,255 L116,255 Z"
                    id="comment-1">

                </path>
            </g>
        </g>
    </svg>


    return (
        <>
            <div className="flex flex-row
                            space-x-2
                            pl-2 pr-2
                            border-gray-300 border-l
                            justify-center
                            items-center">
                <div className="cursor-pointer" onClick={() => setComment(comment + 1)}>
                    {commentIcon}
                </div>
                <span>{comment}</span>
            </div>
        </>
    )
}

export default Comment;