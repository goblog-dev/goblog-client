import {useContext, useEffect, useState} from "react";
import {CommonContext} from "@/app/commonContext";

const Like = () => {
    const {darkMode} = useContext(CommonContext);
    const [like, setLike] = useState<number>(5);
    const [likeColor, setLikeColor] = useState<string>("#231F20");

    useEffect(() => {
        setLikeColor(darkMode ? "#FFF" : "#231F20");
    }, [darkMode])

    const thumb = <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px"
                       viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
        <g>
            <path fill={likeColor} d="M64,28c0-3.314-2.687-6-6-6H41l0,0h-0.016H41l2-18c0.209-2.188-1.287-4-3.498-4h-4.001
		C33,0,31.959,1.75,31,4l-8,18c-2.155,5.169-5,6-7,6c-1,0-2,0-2,0v-2c0-2.212-1.789-4-4-4H4c-2.211,0-4,1.788-4,4v34
		c0,2.21,1.789,4,4,4h6c2.211,0,4-1.79,4-4v-2c1,0,3.632,0.052,6.21,2.697C23.324,63.894,27.043,64,29,64h23c3.313,0,6-2.688,6-6
		c0-1.731-0.737-3.288-1.91-4.383C58.371,52.769,60,50.577,60,48c0-1.731-0.737-3.288-1.91-4.383C60.371,42.769,62,40.577,62,38
		c0-1.731-0.737-3.288-1.91-4.383C62.371,32.769,64,30.577,64,28z M12,60c0,1.104-0.896,2-2,2H4c-1.104,0-2-0.896-2-2V26
		c0-1.105,0.896-2,2-2h6c1.104,0,2,0.895,2,2V60z M58,32H48c-0.553,0-1,0.446-1,1c0,0.552,0.447,1,1,1h8c2.209,0,4,1.79,4,4
		c0,2.209-1.791,4-4,4H46c-0.553,0-1,0.446-1,1c0,0.552,0.447,1,1,1h8c2.209,0,4,1.79,4,4c0,2.209-1.791,4-4,4H44
		c-0.553,0-1,0.446-1,1c0,0.552,0.447,1,1,1h8c2.209,0,4,1.79,4,4c0,2.209-1.791,4-4,4H29c-1,0-4.695,0.034-7.358-2.699
		C18.532,56.109,16.112,56.003,14,56V30h2c4,0,6.57-1.571,9.25-8L33,4c0.521-1.104,1.146-2,2.251-2H39c1.104,0,2.126,0.834,2,2
		l-1.99,18c-0.132,1.673,0.914,2,1.99,2h17c2.209,0,4,1.79,4,4C62,30.209,60.209,32,58,32z"/>
            <path fill={likeColor} d="M7,54c-1.657,0-3,1.342-3,3c0,1.656,1.343,3,3,3s3-1.344,3-3C10,55.342,8.657,54,7,54z M7,58
		c-0.553,0-1-0.449-1-1c0-0.553,0.447-1,1-1s1,0.447,1,1C8,57.551,7.553,58,7,58z"/>
        </g>
    </svg>

    return (
        <>
            <div className="flex flex-row
                            space-x-2
                            pl-2 pr-2
                            border-gray-500 border-l
                            justify-center
                            items-center">
                <div className="cursor-pointer" onClick={() => setLike(like + 1)}>
                    {thumb}
                </div>
                <span>{like}</span>
            </div>
        </>
    )
}

export default Like;