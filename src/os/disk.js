export function IOException(message){
    this.message = message;
    this.name = "IOException"
}

export function newFile(path, contents){

    if(exists(path)){
        throw IOException(path + " already exists")
    }

    let pathParts = path.split("/")
    let dirPath = pathParts.slice(0, pathParts.length-1).join("/")
    dirPath = dirPath === ''? '/': dirPath

    let dir = read(dirPath)
    dir.contents.push(fileRef(pathParts[pathParts.length-1], "file"))

    localStorage.setItem(dirPath, JSON.stringify(dir))

    localStorage.setItem(path, JSON.stringify({
        type: "file",
        contents: contents
    }))

    console.log("Created file " + path)
}

export function newDir(path){
    if(exists(path)){
        throw IOException(path + " already exists")
    }
    
    if (path !== '/'){
        let pathParts = path.split("/")
        let dirPath = pathParts.slice(0, pathParts.length-1).join("/")
        dirPath = dirPath === ''? '/': dirPath

        let dir = read(dirPath)
        dir.contents.push(fileRef(pathParts[pathParts.length-1], "dir"))

        localStorage.setItem(dirPath, JSON.stringify(dir))
    }

    localStorage.setItem(path, JSON.stringify({
        type: "dir",
        contents: []
    }))

    console.log("Created directory " + path)
}

export function edit(path, contents){
    if(!exists(path)){
        throw IOException(path + " does not exist")
    }

    localStorage.setItem(path, JSON.stringify({
        type: "file",
        contents: contents
    }))

    console.log("Edited " + path)
}

export function remove(path){
    if(!exists(path)){
        throw IOException(path + " does not exist")
    }

    localStorage.removeItem(path)
    if (path !== '/'){
        let pathParts = path.split("/")
        let dirPath = pathParts.slice(0, pathParts.length-1).join("/")
        dirPath = dirPath === ''? '/': dirPath

        let dir = read(dirPath)
        dir.contents = dir.contents.filter(e => e.name !== pathParts[pathParts.length-1])
        localStorage.setItem(dirPath, JSON.stringify(dir))
    }
    console.log("Removed " + path)
}

export function removeDir(path){
    if(!exists(path)){
        throw IOException(path + " does not exist")
    }
    let a
    if((a=read(path)).type === "dir"){
        for(let i=0; i<a.contents.length; i++){
            let filePath = path==='/'? path + a.contents[i].name: path + '/' + a.contents[i].name
            console.log(filePath)
            if(typeOf(filePath) === "dir"){
                removeDir(filePath)
            }else{
                remove(filePath)
            }
        }
        remove(path)
    }
}

export function read(path){
    return JSON.parse(localStorage.getItem(path))
}

export function exists(path){
    return (localStorage.getItem(path) != null)
}

export function typeOf(path){
    if(!exists(path)){
        throw IOException(path + " does not exist")
    }

    if(path !== '/root'){
        let pathParts = path.split("/")
        let dirPath = pathParts.slice(0, pathParts.length-1).join("/")
        dirPath = dirPath === ''? '/': dirPath

        let dir = read(dirPath)
        let file = dir.contents.find(x => x === pathParts[pathParts.length-1])

        if(file === undefined){
            return read(path).type
        }else{
            return file.type
        }

    }else{
        return "dir"
    }
}

function fileRef(name, type){
    return {
        name: name,
        type: type
    }
}