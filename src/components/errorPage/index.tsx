import ErrorPageComponent from "@/components/errorPage/errorPageComponent";

const ErrorPage = (props: any) => {
    switch (props.type) {
        case "not-found":
            return <ErrorPageComponent {...props} label="404 Not Found" />
    }
}

export default ErrorPage;