import { useContext, useEffect } from "react"
import { ColorsContext } from "./useColors"

export const useGlobalStyling = (): void => {
    const colors = useContext(ColorsContext)
    
    useEffect(() => {
        console.log('setting properties!')
        document.documentElement.style.setProperty('--link', colors.link)
        document.documentElement.style.setProperty('--link-hover', colors.linkHover)
        document.documentElement.style.setProperty('--visited-link', colors.visitedLink)
        document.documentElement.style.setProperty('--visited-link-hover', colors.visitedLinkHover)
    }, [colors])
}