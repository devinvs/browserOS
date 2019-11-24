import React from 'react'
import * as Disk from '../os/disk.js'

export default class Terminal extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            history: [],
            input: "",
            editor: false,
            editorFile: "",
            editorContents: "",
            editorSaved: "",
            editorMessage: "",
            editorReadOnly: false
        }

        this.prompt = "$ "

        this.textInput = React.createRef()
        this.scrolled = true
        this.wd = '/home'

        this.pwd = this.pwd.bind(this)
        this.ls = this.ls.bind(this)
        this.cd = this.cd.bind(this)
        this.clear = this.clear.bind(this)
        this.help = this.help.bind(this)
        this.processPath = this.processPath.bind(this)
        this.mkdir = this.mkdir.bind(this)
        this.nano = this.nano.bind(this)
        this.less = this.less.bind(this)
        this.cat = this.cat.bind(this)
        this.mv = this.mv.bind(this)
        this.cp = this.cp.bind(this)
        this.rm = this.rm.bind(this)
        this.touch = this.touch.bind(this)

        this.commands = {
            help: this.help,
            pwd: this.pwd,
            whoami: this.whoami,
            cd: this.cd,
            ls: this.ls,
            clear: this.clear,
            mkdir: this.mkdir,
            nano: this.nano,
            echo: this.echo,
            less: this.less,
            cat: this.cat,
            mv: this.mv,
            cp: this.cp,
            rm: this.rm,
            touch: this.touch
        }
    }

    processPath(path){
        let newDir = ''

        let wdParts = this.wd.split('/')

        if (path.startsWith('/')){
            newDir = path
        }else if(path === ".."){
            newDir = wdParts.slice(0, wdParts.length-1).join('/')

            if (newDir === ''){
                newDir = '/'
            }
        }else{
            if(this.wd === '/'){
                newDir = this.wd + path
            }else{
                newDir = this.wd + '/' + path
            }
        }

        return newDir
    }

    parseCommand(commandString){
        let command = commandString.split(' ')
        try {
            return this.commands[command[0]](command.slice(1))
        } catch (error) {
            console.log(error)
            return "Error"
        }
    }

    help(args){
        return Object.keys(this.commands).join(' ')
    }

    pwd(args){
        return this.wd
    }

    whoami(args){
        return "How am I supposed to know?"
    }

    ls(args){
        if (args.length === 0){
            return Disk.read(this.wd).contents.join(' ')
        }else if(args.length === 1){
            return Disk.read(this.processPath(args[0])).contents.join('')
        }
    }

    cd(args){
        if(args[0] == null){
            return "Invalid Argument"
        }
        let newDir = this.processPath(args[0])
        console.log(newDir)

        if(Disk.exists(newDir) && Disk.read(newDir).type == "dir"){
            this.wd = newDir
            return ""
        }else{
            return "There is no directory named " + args[0]
        }
        
    }

    echo(args){
        return args.join(' ')
    }

    clear(args){
        this.setState({history: [], input: ""})
        return "|||CLEAR|||"
    }
    
    touch(args){
        args.forEach((arg) => {
            let path = this.processPath(arg)
            if(Disk.exists(path)){
                return arg + " already exists"
            }else{
                Disk.newFile(arg)
            }
        })
    }

    mkdir(args){
        for (let i=0; i<args.length; i++){
            Disk.newDir(this.processPath(args[i]))
        }
    }

    cat(args){
        let path = this.processPath(args[0])
        if(Disk.exists(path)){
            let file = Disk.read(path)
            if(file.type === "file"){
                return file.contents
            }else{
                return args[0] + " is a directory"
            }
        }else{
            return args[0] + " does not exist"
        }
    }

    nano(args){
        let path = this.processPath(args[0])
        if(Disk.exists(path)){
            let file = Disk.read(path)
            if(file.type === "file"){
                this.setState({editor: true, editorFile: path, editorContents: file.contents, editorMessage: "Save: Ctrl+s  Exit: Ctrl+x"})
            }else{
                return args[0] + " is not a file"
            }
        }else{
            Disk.newFile(path, "")
            this.setState({editor: true, editorFile: path, editorMessage: "Save: Ctrl+s  Exit: Ctrl+x"})
        }
    }

    less(args){
        let path = this.processPath(args[0])

        if(Disk.exists(path)){
            let file = Disk.read(path)
            if(file.type === "file"){
                this.setState({
                    editor: true,
                    editorFile: "",
                    editorContents: file.contents,
                    editorReadOnly: true,
                    editorMessage: "Press 'q' to exit"
                })
            }else{
                return args[0] + " is not a file"
            }
        }else{
            return args[0] + " does not exist"
        }
    }

    cp(args){
        let pathFrom = this.processPath(args[0])
        let pathTo = this.processPath(args[1])

        if(Disk.exists(pathFrom)){
            let fileFrom = Disk.read(pathFrom)

            if(Disk.exists(pathTo)){
                let fileTo = Disk.read(pathTo)
                if(fileTo.type === "file"){
                    Disk.edit(pathTo, fileFrom.contents)
                }else{
                    return args[1] + " is a directory"
                }
            }else{
                Disk.newFile(pathTo, fileFrom.contents)
            }
        }else{
            return args[0] + " does not exist"
        }
    }

    mv(args){
        let pathFrom = this.processPath(args[0])
        let pathTo = this.processPath(args[1])

        if(Disk.exists(pathFrom)){
            let fileFrom = Disk.read(pathFrom)

            if(Disk.exists(pathTo)){
                let fileTo = Disk.read(pathTo)
                if(fileTo.type === "file"){
                    Disk.edit(pathTo, fileFrom.contents)
                    Disk.remove(pathFrom)
                }else{
                    return args[1] + " is a directory"
                }
            }else{
                Disk.newFile(pathTo, fileFrom.contents)
                Disk.remove(pathFrom)
            }
        }else{
            return args[0] + " does not exist"
        }
    }

    rm(args){
        let recursive = false

        args.forEach((arg) => {
            if (arg.startsWith('-')){
                if (arg === "-r")
                    recursive = true
            }else{
                let path = this.processPath(arg)
                if(Disk.exists(path)){
                    let file = Disk.read(path)
                    if(file.type === "file"){
                        Disk.remove(path)
                    }else if(recursive){
                        Disk.removeDir(path)
                    }else{
                        return arg + " is a directory. Use 'rm -r' to delete it"
                    }
                }else{
                    return arg + " does not exist"
                }
            }
        })
    }

    onKeyDown = (e) => {
        if(this.state.editor){
            if(this.state.editorReadOnly){
                if(e.key === 'q'){
                    this.setState({
                        editor: false,
                        editorContents: "",
                        editorFile: "",
                        editorReadOnly: false
                    })
                }
            }else{
                if(e.ctrlKey === true && e.key==='s'){
                    Disk.edit(this.state.editorFile, this.state.editorContents)
                    console.log(this.state.editorContents)

                    e.preventDefault()
                    }else if(e.ctrlKey === true && e.key==='x'){
                    this.setState({
                        editor: false,
                        editorFile: "",
                        editorContents: "",
                    })
                }
            }
        }else{

            this.scrollToBottom()
            if (e.key === "Enter"){
                let output = this.parseCommand(this.state.input)

                if(output === "|||CLEAR|||"){
                    return
                }

                const history = this.state.history.slice()
                history.push(this.prompt+ this.state.input)
                history.push(output)

                this.setState({
                    history: history,
                    input: ""
                })

                e.preventDefault();
            }else if (e.key === "Backspace"){
                this.setState({input:this.state.input.slice(0,this.state.input.length-1) })

            }else if (e.key === "Meta"){
                
            }else if(e.keyCode > 47 || e.keyCode === 32){
                this.setState({
                    input: this.state.input + e.key
                })
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            editorContents: e.target.value
        })
    }

    focusInput = (e) => {
        this.textInput.current.focus()
    }

    handleScroll(){
        this.scrolled = false
    }

    scrollToBottom(){
        //(this._scroll.scrollHeight - this._scroll.clientHeight).toString() + "px"
        this._scroll.scrollTop = this._scroll.scrollHeight;
        this.scrolled = true
    }

    componentDidMount(){
        this.scrollToBottom()
        this.focusInput()
    }

    componentDidUpdate(){
        if(this.scrolled){
            this.scrollToBottom()
        }
        this.focusInput()
    }

    render(){
        const editor = this.state.editor
        const className = "WindowBody TerminalRoot" + (editor? " Editor": "")

        return editor? 
        (
            <div className="WindowBody TerminalRoot" style={{overflowY: "hidden", display:"flex", flexDirection:"column"}}onMouseMove={this.focusInput} ref={(div) => {this._scroll = div}} onScroll={() => {this.handleScroll()}}>
                <textarea onKeyDown={this.onKeyDown} ref={this.textInput} value={this.state.editorContents} onChange={this.handleChange} readOnly={this.state.editorReadOnly}></textarea>
                <p>{this.state.editorMessage}</p>
            </div>
        )
        :
        (
            <div className={className} onMouseMove={this.focusInput} onClick={this.focusInput} ref={(div) => {this._scroll = div}} onScroll={() => {this.handleScroll()}}>
                {this.state.history.map((value, index) => {
                    return <p style={{whiteSpace: "pre-wrap"}} key={index}>{value}</p>
                })}
                <span style={{display:"flex"}}><textarea className="prompt" value={this.prompt} readOnly={true}></textarea><textarea cols={1} onKeyDown={this.onKeyDown} onChange={()=>{}} value={this.state.input} ref={this.textInput} spellCheck={false}/></span>
            </div>
        )
    }
}