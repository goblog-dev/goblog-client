export const ButtonSecondary = (props: any) => {
    return (
        <button onClick={props.onClick}
                className="
                    w-full
                    bg-gray-500
                    text-white text-sm
                    pt-1 pb-1 pl-3 pr-3
                    border-2 border-gray-500 rounded-md
                    hover:border-gray-300
                ">
            {props.label}
        </button>
    )
}