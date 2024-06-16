import {ButtonComponent} from "@/components/button/buttonComponent";
import {ButtonLabel} from "@/components/button/label";

export const Button = (props: any) => {
    if (props.type === "primary") {
        return <ButtonComponent textColor="white" color="bg-gray-800" {...props} />;
    }

    if (props.type === "secondary") {
        return <ButtonComponent textColor="white" color="bg-gray-500" {...props} />;
    }

    if (props.type === "label") {
        return <ButtonLabel {...props} />;
    }

    if (props.type === "success") {
        return <ButtonComponent textColor="white" color="bg-green-800" {...props} />;
    }

    if (props.type === "error") {
        return <ButtonComponent textColor="white" color="bg-red-800" {...props} />;
    }
}