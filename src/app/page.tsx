import Home from "@/pages/home";
import {Metadata} from "next";

const title: string = 'a little share better than none';
const description: string = 'A place where I share my Experience, Knowledge & Thought';

export const metadata: Metadata = {
    title: title,
    description: description,
};

const HomePage = () => {
    return (
        <Home title={title} description={description} />
    )
}

export default HomePage;
