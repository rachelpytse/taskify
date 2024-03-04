"use client"

import { useEffect, useState } from "react"
import { CardModal } from "../modals/card-modal"
import { ProModal } from "../modals/pro-modal"

export const ModalProvider = () => {
    //prevent hydration error
    const [isMounted, setIsMounted] = useState(false)

    //ensure everything inside is only rendered on the client bc useEffect is only rendered on the client
    //so unless it has been mounted, true by the initial mount here, the card modal will not be rendered
    //and thus it will not be creating any inconsistency when it comes to server and the client
    //thus preventing hydration error
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted) {
        return null
    }

    return(
        <>
            <CardModal/>
            <ProModal/>
        </>
    )
}