export const ButtonLabel = (props: any) => {
    return (
        <button onClick={props.onClick}
                className="
                    hover:text-gray-800
                    text-left
                ">
            {props.label}
        </button>
    )
}