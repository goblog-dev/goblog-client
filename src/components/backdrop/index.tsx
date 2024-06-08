export const Backdrop = (props: any) => {
    return (
        <div className="
                z-40
                fixed
                w-full h-full
                top-0 left-0
                justify-center items-center
                flex
                bg-gray-500 bg-opacity-50
                backdrop-blur-sm backdrop-grayscale">
            {props.content}
        </div>
    )
}