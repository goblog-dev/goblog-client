const ErrorPageComponent = (props: any) => {
    return (
        <div className="w-full h-screen left-0 top-0 flex items-center justify-center">
            <div className="text-gray-800 font-bold text-5xl">
                {props.label}
            </div>
        </div>
    )
}

export default ErrorPageComponent;