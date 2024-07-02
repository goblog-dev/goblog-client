import "@/app/switchComponent.css"

export const SwitchComponent = (props: any) => {
    return (
        <label className="switch">
            <input type="checkbox"
                   checked={props.checked}
                   onClick={(e)=> props.onSelect(e)}
                   onChange={(e)=> props.onSelect(e)}
            />
            <span className="slider round" />
        </label>
    )
}