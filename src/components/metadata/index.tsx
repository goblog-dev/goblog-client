import Head from 'next/head'

export type MetadataType = {
    metadata: {
        Title: string
        PublishedTime: string
        Description: string
        ArticleId: number
        Image: string
        UserPage: string
        UserName: string
        TwitterAccount: string
    }
}

const MetadataHead = ({metadata}: MetadataType) => {
    return (
        <Head>
            <title>{metadata.Title}</title>
            <meta data-rh="true" charSet="utf-8"/>
            <meta data-rh="true" name="viewport"
                  content="width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=1"/>
            <meta data-rh="true" name="twitter:app:name:iphone" content="GoBlog"/>
            <meta data-rh="true" name="twitter:app:id:iphone" content="+62817373779"/>
            <meta data-rh="true" property="al:ios:app_name" content="GoBlog"/>
            <meta data-rh="true" property="al:ios:app_store_id" content="000000"/>
            <meta data-rh="true" property="al:android:package" content="goblog.dev"/>
            <meta data-rh="true" property="fb:app_id" content="michael.w.putong"/>
            <meta data-rh="true" property="og:site_name" content="GoBlog"/>
            <meta data-rh="true" property="og:type" content="article"/>
            <meta data-rh="true" property="article:published_time" content={metadata.PublishedTime}/>
            <meta data-rh="true" name="title" content={metadata.Title}/>
            <meta data-rh="true" property="og:title" content={metadata.Title}/>
            <meta data-rh="true" property="al:android:app_name" content="GoBlog"/>
            <meta data-rh="true" name="description" content={metadata.Description}/>
            <meta data-rh="true" property="og:description" content={metadata.Description}/>
            <meta data-rh="true" property="og:url"
                  content={"https://goblog.dev/articles/" + metadata.ArticleId}/>
            <meta data-rh="true" property="al:web:url"
                  content={"https://goblog.dev/articles/" + metadata.ArticleId}/>
            <meta data-rh="true" property="og:image" content={metadata.Image}/>
            <meta data-rh="true" property="article:author" content={metadata.UserPage}/>
            <meta data-rh="true" name="author" content={metadata.UserName}/>
            <meta data-rh="true" name="robots" content="index,follow,max-image-preview:large"/>
            <meta data-rh="true" name="referrer" content="unsafe-url"/>
            <meta data-rh="true" property="twitter:title" content={metadata.Title}/>
            <meta data-rh="true" name="twitter:site" content={metadata.TwitterAccount}/>
            <meta data-rh="true" name="twitter:app:url:iphone"
                  content={"https://goblog.dev/articles/}" + metadata.ArticleId}/>
            <meta data-rh="true" property="twitter:description" content={metadata.Description}/>
            <meta data-rh="true" name="twitter:image:src" content={metadata.Image}/>
            <meta data-rh="true" name="twitter:card" content="summary_large_image"/>
            <meta data-rh="true" name="twitter:creator" content={metadata.TwitterAccount}/>
            <meta data-rh="true" name="twitter:label1" content="Reading time"/>
            <meta data-rh="true" name="twitter:data1" content="4 min read"/>
        </Head>
    )
}

export default MetadataHead;