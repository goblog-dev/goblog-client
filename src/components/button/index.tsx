import {ButtonComponent} from "@/components/button/component";
import {ButtonLabel} from "@/components/button/label";

export const Button = (props: any) => {
    if (props.type === "primary") {
        return <ButtonComponent textColor="white" color="black" {...props} />;
    }

    if (props.type === "secondary") {
        return <ButtonComponent textColor="white" color="gray-500" {...props} />;
    }

    if (props.type === "label") {
        return <ButtonLabel {...props} />;
    }

    if (props.type === "success") {
        return <ButtonComponent textColor="white" color="green-800" {...props} />;
    }

    if (props.type === "error") {
        return <ButtonComponent textColor="white" color="red-800" {...props} />;
    }
}