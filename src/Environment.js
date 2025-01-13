
class DevEnv {
    static logoUrl = "/logo.jpeg" 
}


class ProdEnv {
    static logoUrl = `/build${DevEnv.logoUrl}` 
}


let isDev = true


const Environment = isDev ? DevEnv : ProdEnv


export default Environment