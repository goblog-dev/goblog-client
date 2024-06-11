import {useContext} from "react";
import {CommonContext} from "@/app/commonContext";
import {Button} from "@/components/button";
import {Backdrop} from "@/components/backdrop";

export const Modal = (props: any) => {
    const {setModalOpen} = useContext(CommonContext);
    const content = (props: any) => {
        return (
            <div className="
                    p-2
                    rounded-md border-gray-200 border-2
                    min-w-56
                    left-1/2
                    bg-gray-100">
                {
                    props.header ?
                        <header className="
                                    justify-between
                                    border-b-2 border-gray-200
                                    flex flex-row
                                    pl-3 pr-3 pb-1
                                    font-bold">
                            <span>{props.title}</span>
                            <Button type="label" label="X" onClick={() => setModalOpen(false)}/>
                        </header> : <></>
                }
                <div className="p-5">
                    {props.content}
                </div>
                {
                    props.footer ?
                        <footer className="
                                    space-x-2
                                    justify-end
                                    border-t-2 border-gray-200
                                    flex flex-row
                                    pl-3 pr-3 pt-1">
                            <span>{props.title}</span>
                            <Button type="primary" label="Ok" onClick={props.onClick}/>
                            <Button type="secondary" label="Cancel" onClick={() => setModalOpen(false)}/>
                        </footer> : <></>
                }
            </div>
        )
    }

    return (
        <>
            {
                props.open ? <Backdrop content={content(props)} /> : <></>
            }
        </>
    )
}