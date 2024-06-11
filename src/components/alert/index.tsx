import {AlertComponent} from "@/components/alert/alertComponent";

export const Alert = (props: any) => {
    if (props.severity === "success") {
        return <AlertComponent color="bg-teal-700" {...props} />;
    }

    if (props.severity === "info") {
        return <AlertComponent color="bg-blue-500" {...props} />;
    }

    if (props.severity === "error") {
        return <AlertComponent color="bg-red-700" {...props} />;
    }
}