export const ButtonPrimary = (props: any) => {
    return (
        <button onClick={props.onClick}
                className="
                    w-full
                    bg-black
                    text-white text-sm
                    pt-1 pb-1 pl-3 pr-3
                    border-2 border-black rounded-md
                    hover:border-gray-300
                ">
            {props.label}
        </button>
    )
}