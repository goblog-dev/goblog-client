export const ButtonLabel = (props: any) => {
    return (
        <button onClick={props.onClick}
                className="
                    text-left text-gray-500
                    dark:text-gray-200
                    w-fit
                    hover:bg-gray-200 hover:text-gray-800
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