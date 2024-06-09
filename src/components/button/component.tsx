export const ButtonComponent = (props: any) => {
    return (
        <button onClick={props.onClick}
                className={`
                    w-full
                    bg-${props.color}
                    text-${props.textColor} text-sm
                    pt-1 pb-1 pl-3 pr-3
                    border-2 border-${props.color} rounded-md
                    hover:border-gray-300 border-2
                    flex flex-row
                    space-x-1
                    justify-between
                    `}>
            <span>{props.iconStart}</span>
            <span>{props.label}</span>
            <span>{props.iconEnd}</span>
        </button>
    )
}