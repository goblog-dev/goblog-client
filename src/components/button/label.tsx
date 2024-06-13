export const ButtonLabel = (props: any) => {
    return (
        <button onClick={props.onClick}
                className="
                    text-left
                    w-fit
                    hover:text-gray-800
                    flex flex-row
                    space-x-1
                    justify-start
                ">
            <span>{props.iconStart}</span>
            <span>{props.label}</span>
            <span>{props.iconEnd}</span>
        </button>
    )
}