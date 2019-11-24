export function newFile(path, contents){
    let pathParts = path.split("/")
    let dirPath = pathParts.slice(0, pathParts.length-1).join("/")
    dirPath = dirPath === ''? '/': dirPath

    let dir = read(dirPath)
    dir.contents.push(pathParts[pathParts.length-1])

    localStorage.setItem(dirPath, JSON.stringify(dir))

    localStorage.setItem(path, JSON.stringify({
        type: "file",
        contents: contents
    }))
}

export function newDir(path){
    if (path !== '/'){
        let pathParts = path.split("/")
        let dirPath = pathParts.slice(0, pathParts.length-1).join("/")
        dirPath = dirPath === ''? '/': dirPath

        let dir = read(dirPath)
        dir.contents.push(pathParts[pathParts.length-1])

        localStorage.setItem(dirPath, JSON.stringify(dir))
    }

    localStorage.setItem(path, JSON.stringify({
        type: "dir",
        contents: []
    }))
}

export function edit(path, contents){
    localStorage.setItem(path, JSON.stringify({
        type: "file",
        contents: contents
    }))
}

export function remove(path){
    localStorage.removeItem(path)
    if (path !== '/'){
        let pathParts = path.split("/")
        let dirPath = pathParts.slice(0, pathParts.length-1).join("/")
        dirPath = dirPath === ''? '/': dirPath

        let dir = read(dirPath)
        dir.contents = dir.contents.filter(e => e !== pathParts[pathParts.length-1])
        localStorage.setItem(dirPath, JSON.stringify(dir))
    }
    console.log("Removed " + path)
}

export function removeDir(path){
    let a
    if((a=read(path)).type === "dir"){
        for(let i=0; i<a.contents.length; i++){
            let filePath = path==='/'? path + a.contents[i]: path + '/' + a.contents[i]
            let file = read(filePath)
            if(file.type === "dir"){
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