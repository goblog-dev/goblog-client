import Home from "@/pages/home";
import {Metadata} from "next";

const title: string = 'a little share better than none';
const description: string = 'A place where I share my Experience, Knowledge & Thought';
const keywords: string[] = ["goblog", "webblog", "article", "tutorial", "programming", "software", "engineering", "computer"];
const creator:string =  "michaelputong.com";

export const metadata: Metadata = {
    title: title
    , description: description
    , keywords: keywords
    , creator: creator
};

const HomePage = () => {
    return (
        <Home title={title} description={description} />
    )
}

export default HomePage;
