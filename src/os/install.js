import * as disk from './disk.js'

export default function main(){
    if(localStorage.getItem("webos_version") == null || localStorage.getItem('webos_reset') != null){
        install()
    }
}

function install(){
    setupDisk()
    setVersion()
}


function setupDisk(){
    if(disk.exists("/")){
        disk.removeDir("/")
    }

    disk.newDir("/")
    disk.newDir("/home")
    disk.newDir("/bin")
    disk.newFile("/home/hello.md", 
`# Hello World!
This is a side project of mine that I am working on just for fun.\n
Think of it as an operating system, except completely contained in your browser.\n
Feel free to try it out and check out my Github [here.](https://github.com/DevinVS)\n
### Features
Moving/Resizing Windows\n
A Persistent File System\n
An Application Launcher\n
Functioning(ish) Terminal (Type 'help' for a list of commands)`)
}

function setVersion(){
    localStorage.setItem("webos_version", "0.0.0")
    localStorage.removeItem('webos_reset')
}