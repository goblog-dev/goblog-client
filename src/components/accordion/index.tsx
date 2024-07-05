import {useState} from "react";

const Accordion = (props: any) => {
    const [expand, setExpand] = useState<boolean>(true);

    return (
        <div key={props.key} className={"mb-1 pr-2"}>
            <div className={`cursor-pointer 
                             text-sm dark:text-gray-200 text-gray-200 
                             w-full
                             font-semibold
                             dark:bg-gray-600 bg-gray-700
                             flex
                             flex-row
                             justify-between
                             p-2`}
                 onClick={() => setExpand(!expand)}>
                <span>{props.title.toUpperCase()}</span>
                <span>+</span>
            </div>
            {expand && <div>{props.content}</div>}
        </div>
    )
}

export default Accordion;