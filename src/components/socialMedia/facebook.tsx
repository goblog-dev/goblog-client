const Facebook = ({url, articleId}: { url: string, articleId: string }) => {
    return (
        <div className={"text-sm pr-1 pl-1 border border-gray-300 bg-blue-700 text-gray-200"}>
            <div className="fb-share-button" data-href={url} data-layout="" data-size=""><a
                target="_blank"
                href={"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgoblog.dev%2Farticles%2F"
                    + articleId + "&amp;src=sdkpreparse"}
                className="fb-xfbml-parse-ignore">facebook</a></div>
        </div>
    )
}

export default Facebook;