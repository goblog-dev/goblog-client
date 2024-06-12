export const ButtonLabel = (props: any) => {
    return (
        <button onClick={props.onClick}
                className="
                    text-left
                    w-full
                    hover:text-gray-800
                    flex flex-row
                    space-x-1
                    justify-start
                    w-full
                ">
            <span>{props.iconStart}</span>
            <span>{props.label}</span>
            <span>{props.iconEnd}</span>
        </button>
    )
}