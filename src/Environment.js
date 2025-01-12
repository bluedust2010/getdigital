
class DevEnv {
    static logoUrl = "/placeholder.webp" 
}


class ProdEnv {
    static logoUrl = `/build${DevEnv.logoUrl}` 
}


let isDev = true


const Environment = isDev ? DevEnv : ProdEnv


export default Environment