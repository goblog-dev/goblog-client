import {ButtonPrimary} from "@/components/button/primary";
import {ButtonSecondary} from "@/components/button/secondary";
import {ButtonLabel} from "@/components/button/label";
import {ButtonSuccess} from "@/components/button/success";
import {ButtonError} from "@/components/button/error";

export const Button = (props: any) => {
    if (props.type === "primary") {
        return <ButtonPrimary {...props} />;
    }

    if (props.type === "secondary") {
        return <ButtonSecondary {...props}/>;
    }

    if (props.type === "label") {
        return <ButtonLabel {...props} />;
    }

    if (props.type === "success") {
        return <ButtonSuccess {...props} />;
    }

    if (props.type === "error") {
        return <ButtonError {...props} />;
    }
}