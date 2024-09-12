export interface MacroLiveInfoInterface {
    id: number
    userName: string
    description: string
    isLive: boolean
}

export interface ResponseBaramMacroCurrentInterface {
    gthrDttm: string
    macroInfos: Array<MacroLiveInfoInterface>
}