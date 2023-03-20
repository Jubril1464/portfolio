import { ReactNode } from "react"
export interface NavItem {
    id:string,
    title:string,
    activeTab: string,
    setActiveTab:(any) => void
}
export interface NavContent {
    id: string,
    activeTab:string,
    children: ReactNode

}