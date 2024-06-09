export const ButtonLabel = (props: any) => {
    return (
        <button onClick={props.onClick}
                className="
                    hover:text-gray-800
                    text-left
                     flex flex-row
                    space-x-1
                    justify-between
                ">
            <span>{props.iconStart}</span>
            <span>{props.label}</span>
            <span>{props.iconEnd}</span>
        </button>
    )
}