const Linkedin = ({url}: { url: string}) => {
    return (
        <div className={"text-sm pr-1 pl-1 border border-gray-300 bg-sky-700 text-gray-200"}>
                <a target="_blank"
                    href={"http://www.linkedin.com/shareArticle?mini=true&url=" + url}
                >
                    Linkedin
                </a>
        </div>
    )
}

export default Linkedin;