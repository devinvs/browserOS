(this.webpackJsonpbrowserOS=this.webpackJsonpbrowserOS||[]).push([[0],{125:function(A,e,t){},127:function(A,e,t){"use strict";t.r(e);var i=t(0),g=t.n(i),n=t(18),C=t.n(n),o=(t(38),t(3)),I=t(4),s=t(6),r=t(5),c=t(1),a=t(7),l=(t(39),function(A){function e(A){var t;return Object(o.a)(this,e),(t=Object(s.a)(this,Object(r.a)(e).call(this,A))).props=A,t}return Object(a.a)(e,A),Object(I.a)(e,[{key:"render",value:function(){var A=this;return g.a.createElement("div",{className:"WindowTopBar",onMouseDown:this.props.onMouseDown,onMouseUp:this.props.onMouseUp},g.a.createElement("div",{style:{minWidth:"70px"}}),g.a.createElement("div",{className:"WindowTopBarTitle"},this.props.title),g.a.createElement("div",{className:"WindowTopBarButtons"},g.a.createElement("div",{className:"WindowTopBarButton",id:"maximize",onClick:function(e){A.props.maximize(A.props.id)}}),g.a.createElement("div",{className:"WindowTopBarButton",id:"minimize",onClick:function(e){A.props.minimize(A.props.id)}}),g.a.createElement("div",{className:"WindowTopBarButton",id:"close",onClick:function(e){A.props.close(A.props.id)}})))}}]),e}(g.a.Component)),d=function(A){function e(A){var t;return Object(o.a)(this,e),(t=Object(s.a)(this,Object(r.a)(e).call(this,A))).props=A,t}return Object(a.a)(e,A),Object(I.a)(e,[{key:"render",value:function(){var A=this;return g.a.createElement("div",{className:"WindowFrame",style:{left:this.props.x,top:this.props.y,width:this.props.width,height:this.props.height}},g.a.createElement("div",{className:"resizeN",onMouseDown:function(e){A.props.setResize(e,A.props.id,"N")}}),g.a.createElement("div",{className:"resizeE",onMouseDown:function(e){A.props.setResize(e,A.props.id,"E")}}),g.a.createElement("div",{className:"resizeS",onMouseDown:function(e){A.props.setResize(e,A.props.id,"S")}}),g.a.createElement("div",{className:"resizeW",onMouseDown:function(e){A.props.setResize(e,A.props.id,"W")}}),g.a.createElement("div",{className:"resizeNE",onMouseDown:function(e){A.props.setResize(e,A.props.id,"NE")}}),g.a.createElement("div",{className:"resizeSE",onMouseDown:function(e){A.props.setResize(e,A.props.id,"SE")}}),g.a.createElement("div",{className:"resizeSW",onMouseDown:function(e){A.props.setResize(e,A.props.id,"SW")}}),g.a.createElement("div",{className:"resizeNW",onMouseDown:function(e){A.props.setResize(e,A.props.id,"NW")}}),g.a.createElement(l,{title:this.props.title,onMouseDown:function(e){A.props.setGrab(e,A.props.id)},maximize:this.props.maximize,minimize:this.props.minimize,id:this.props.id,close:this.props.close}),this.props.children)}}]),e}(g.a.Component);t(40);function h(A){this.message=A,this.name="IOException"}function u(A,e){if(v(A))throw h(A+" already exists");var t=A.split("/"),i=t.slice(0,t.length-1).join("/"),g=b(i=""===i?"/":i);g.contents.push(B(t[t.length-1],"file")),localStorage.setItem(i,JSON.stringify(g)),localStorage.setItem(A,JSON.stringify({type:"file",contents:e})),console.log("Created file "+A)}function m(A){if(v(A))throw h(A+" already exists");if("/"!==A){var e=A.split("/"),t=e.slice(0,e.length-1).join("/"),i=b(t=""===t?"/":t);i.contents.push(B(e[e.length-1],"dir")),localStorage.setItem(t,JSON.stringify(i))}localStorage.setItem(A,JSON.stringify({type:"dir",contents:[]})),console.log("Created directory "+A)}function w(A,e){if(!v(A))throw h(A+" does not exist");localStorage.setItem(A,JSON.stringify({type:"file",contents:e})),console.log("Edited "+A)}function p(A){if(!v(A))throw h(A+" does not exist");if(localStorage.removeItem(A),"/"!==A){var e=A.split("/"),t=e.slice(0,e.length-1).join("/"),i=b(t=""===t?"/":t);i.contents=i.contents.filter((function(A){return A.name!==e[e.length-1]})),localStorage.setItem(t,JSON.stringify(i))}console.log("Removed "+A)}function f(A){if(!v(A))throw h(A+" does not exist");var e;if("dir"===(e=b(A)).type){for(var t=0;t<e.contents.length;t++){var i="/"===A?A+e.contents[t].name:A+"/"+e.contents[t].name;console.log(i),"dir"===E(i)?f(i):p(i)}p(A)}}function b(A){return JSON.parse(localStorage.getItem(A))}function v(A){return null!=localStorage.getItem(A)}function E(A){if(!v(A))throw h(A+" does not exist");if("/root"!==A){var e=A.split("/"),t=e.slice(0,e.length-1).join("/"),i=b(t=""===t?"/":t).contents.find((function(A){return A===e[e.length-1]}));return void 0===i?b(A).type:i.type}return"dir"}function B(A,e){return{name:A,type:e}}var y=function(A){function e(A){var t;return Object(o.a)(this,e),(t=Object(s.a)(this,Object(r.a)(e).call(this,A))).onKeyDown=function(A){if(t.state.editor)t.state.editorReadOnly?"q"===A.key&&t.setState({editor:!1,editorContents:"",editorFile:"",editorReadOnly:!1}):!0===A.ctrlKey&&"s"===A.key?(w(t.state.editorFile,t.state.editorContents),console.log(t.state.editorContents),A.preventDefault()):!0===A.ctrlKey&&"x"===A.key&&t.setState({editor:!1,editorFile:"",editorContents:""});else if(t.scrollToBottom(),"Enter"===A.key){var e=t.parseCommand(t.state.input);if("|||CLEAR|||"===e)return;var i=t.state.history.slice();i.push(t.prompt+t.state.input),i.push(e),t.setState({history:i,input:""}),A.preventDefault()}else"Backspace"===A.key?t.setState({input:t.state.input.slice(0,t.state.input.length-1)}):"Meta"===A.key||(A.keyCode>47||32===A.keyCode)&&t.setState({input:t.state.input+A.key})},t.handleChange=function(A){t.setState({editorContents:A.target.value})},t.focusInput=function(A){t.textInput.current.focus()},t.state={history:[],input:"",editor:!1,editorFile:"",editorContents:"",editorSaved:"",editorMessage:"",editorReadOnly:!1},t.prompt="$ ",t.textInput=g.a.createRef(),t.scrolled=!0,t.wd="/home",t.pwd=t.pwd.bind(Object(c.a)(t)),t.ls=t.ls.bind(Object(c.a)(t)),t.cd=t.cd.bind(Object(c.a)(t)),t.clear=t.clear.bind(Object(c.a)(t)),t.help=t.help.bind(Object(c.a)(t)),t.processPath=t.processPath.bind(Object(c.a)(t)),t.mkdir=t.mkdir.bind(Object(c.a)(t)),t.nano=t.nano.bind(Object(c.a)(t)),t.less=t.less.bind(Object(c.a)(t)),t.cat=t.cat.bind(Object(c.a)(t)),t.mv=t.mv.bind(Object(c.a)(t)),t.cp=t.cp.bind(Object(c.a)(t)),t.rm=t.rm.bind(Object(c.a)(t)),t.touch=t.touch.bind(Object(c.a)(t)),t.commands={help:t.help,pwd:t.pwd,whoami:t.whoami,cd:t.cd,ls:t.ls,clear:t.clear,mkdir:t.mkdir,nano:t.nano,echo:t.echo,less:t.less,cat:t.cat,mv:t.mv,cp:t.cp,rm:t.rm,touch:t.touch},t}return Object(a.a)(e,A),Object(I.a)(e,[{key:"processPath",value:function(A){var e="",t=this.wd.split("/");return A.startsWith("/")?e=A:".."===A?""===(e=t.slice(0,t.length-1).join("/"))&&(e="/"):e="/"===this.wd?this.wd+A:this.wd+"/"+A,e}},{key:"parseCommand",value:function(A){var e=A.split(" ");try{return this.commands[e[0]](e.slice(1))}catch(t){return console.log(t),"Error"}}},{key:"help",value:function(A){return Object.keys(this.commands).join(" ")}},{key:"pwd",value:function(A){return this.wd}},{key:"whoami",value:function(A){return"How am I supposed to know?"}},{key:"ls",value:function(A){return 0===A.length?b(this.wd).contents.map((function(A){return A.name})).join(" "):1===A.length?b(this.processPath(A[0])).contents.map((function(A){return A.name})).join(""):void 0}},{key:"cd",value:function(A){if(null==A[0])this.wd="/home";else{var e=this.processPath(A[0]);try{if("dir"==E(e))return this.wd=e,""}catch(t){return"There is no directory named "+A[0]}}}},{key:"echo",value:function(A){return A.join(" ")}},{key:"clear",value:function(A){return this.setState({history:[],input:""}),"|||CLEAR|||"}},{key:"touch",value:function(A){var e=this,t="";return A.forEach((function(A){var i=e.processPath(A);try{u(i)}catch(g){t+=i+" already exists\n"}})),t}},{key:"mkdir",value:function(A){for(var e="",t=0;t<A.length;t++)try{m(this.processPath(A[t]))}catch(i){e+=A[t]+" already exists\n"}return e}},{key:"cat",value:function(A){var e=this.processPath(A[0]);try{return"file"==E(e)?b(e).contents:A[0]+" is a directory"}catch(t){return t.message}}},{key:"nano",value:function(A){var e=this.processPath(A[0]);if(v(e)){if("dir"===E(e))return A[0]+" is a directory"}else u(e,"");this.setState({editor:!0,editorFile:e,editorContents:b(e).contents,editorMessage:"Save: Ctrl+s Exit: Ctrl+x"})}},{key:"less",value:function(A){var e=this.processPath(A[0]);try{if("dir"===E(e))return A[0]+" is a directory"}catch(t){return t.message}this.setState({editor:!0,editorFile:"",editorContents:b(e).contents,editorReadOnly:!0,editorMessage:"Press 'q' to exit"})}},{key:"cp",value:function(A){var e=this.processPath(A[0]),t=this.processPath(A[1]);try{var i=b(e);if(v(t)){if("file"!=E(t))return A[1]+" is a directory";w(t,i.contents)}else u(t,i.contents)}catch(g){return g.message}}},{key:"mv",value:function(A){var e=this.processPath(A[0]),t=this.processPath(A[1]);try{var i=b(e);if(v(t)){if("file"!=E(t))return A[1]+" is a directory";w(t,i.contents)}else u(t,i.contents);p(e)}catch(g){return g.message}}},{key:"rm",value:function(A){var e=this,t=!1;A.forEach((function(A){if(A.startsWith("-"))"-r"===A&&(t=!0);else{var i=e.processPath(A);try{if("file"==E(i))p(i);else{if(!t)return A+" is a directory. Use 'rm -r' to delete it";f(i)}}catch(g){return g.message}}}))}},{key:"handleScroll",value:function(){this.scrolled=!1}},{key:"scrollToBottom",value:function(){this._scroll.scrollTop=this._scroll.scrollHeight,this.scrolled=!0}},{key:"componentDidMount",value:function(){this.scrollToBottom(),this.focusInput()}},{key:"componentDidUpdate",value:function(){this.scrolled&&this.scrollToBottom(),this.focusInput()}},{key:"render",value:function(){var A=this,e=this.state.editor,t="WindowBody TerminalRoot"+(e?" Editor":"");return e?g.a.createElement("div",{className:"WindowBody TerminalRoot",style:{overflowY:"hidden",display:"flex",flexDirection:"column"},onMouseMove:this.focusInput,ref:function(e){A._scroll=e},onScroll:function(){A.handleScroll()}},g.a.createElement("textarea",{onKeyDown:this.onKeyDown,ref:this.textInput,value:this.state.editorContents,onChange:this.handleChange,readOnly:this.state.editorReadOnly}),g.a.createElement("p",null,this.state.editorMessage)):g.a.createElement("div",{className:t,onMouseMove:this.focusInput,onClick:this.focusInput,ref:function(e){A._scroll=e},onScroll:function(){A.handleScroll()}},this.state.history.map((function(A,e){return g.a.createElement("p",{style:{whiteSpace:"pre-wrap"},key:e},A)})),g.a.createElement("span",{style:{display:"flex"}},g.a.createElement("textarea",{className:"prompt",value:this.prompt,readOnly:!0}),g.a.createElement("textarea",{cols:1,onKeyDown:this.onKeyDown,onChange:function(){},value:this.state.input,ref:this.textInput,spellCheck:!1})))}}]),e}(g.a.Component),D=(t(20),t(29)),W=t.n(D),Q=t(12),k=t.n(Q),z=function(A){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(a.a)(e,A),Object(I.a)(e,[{key:"render",value:function(){var A="";try{A=b("/home/hello.md").contents}catch(e){A="## /home/hello.md does not exist"}return g.a.createElement("div",{style:{backgroundColor:"#ffffff",padding:20}},g.a.createElement(k.a,{source:A}))}}]),e}(g.a.Component),j=t(30),S=t.n(j),O=t(31),x=t.n(O);function Y(A){return g.a.createElement("div",{style:{backgroundColor:"#ffffff",padding:20}},g.a.createElement(k.a,{source:A.source}))}function G(A){return g.a.createElement("div",{className:"Launcher"},g.a.createElement("div",{id:"btn-hello",onClick:function(e){A.addWindow(g.a.createElement(z,null),"Hello World",80,80,500,300)}},g.a.createElement("img",{src:S.a,alt:"Hello World"}),g.a.createElement("p",null,"About")),g.a.createElement("div",{id:"btn-terminal",onClick:function(e){A.addWindow(g.a.createElement(y,null),"Terminal",40,40,500,300)}},g.a.createElement("img",{src:W.a,alt:"Terminal",draggable:!1}),g.a.createElement("p",null,"Terminal")),g.a.createElement("div",{id:"btn-browser",onClick:function(e){A.addWindow(g.a.createElement(Y,{source:"# Coming Soon"}),"Web Browser",100,100,500,300)}},g.a.createElement("img",{src:x.a,alt:"Web Browser"}),g.a.createElement("p",null,"Web Browser")))}t(125);function P(A,e,t,i,g,n){return{program:A,title:e,x:t,y:i,width:g,height:n,clickX:0,clickY:0}}var H=function(A){function e(A){var t;return Object(o.a)(this,e),(t=Object(s.a)(this,Object(r.a)(e).call(this,A))).mouseMove=function(A){t.grabbed>=0?t.moveWindow(A,t.grabbed):t.resize>=0&&t.resizeWindow(A,t.resize)},t.setGrabbed=function(A,e){t.grabbed=e,t.clickX=A.clientX,t.clickY=A.clientY,t.offsetX=t.state.windows[e].x-t.clickX,t.offsetY=t.state.windows[e].y-t.clickY},t.setResize=function(A,e,i){t.resize=e,t.clickX=A.clientX,t.clickY=A.clientY,t.resizeDirection=i,t.resizeX=t.state.windows[e].x,t.resizeY=t.state.windows[e].y,t.resizeWidth=t.state.windows[e].width,t.resizeHeight=t.state.windows[e].height},t.unsetGrabbed=function(A){t.grabbed=-1,t.resize=-1},t.props=A,t.state={windows:[P(g.a.createElement(z,null),"Hello World",200,100,500,300)],width:0,height:0},t.grabbed=-1,t.resize=-1,t.mouseXLast=0,t.mouseYLast=0,t.clickX=0,t.clickY=0,t.offsetX=0,t.offsetY=0,t.resizeDirection="E",t.resizeX=0,t.resizeY=0,t.resizeHeight=0,t.resizeWidth=0,t.mouseMove=t.mouseMove.bind(Object(c.a)(t)),t.setGrabbed=t.setGrabbed.bind(Object(c.a)(t)),t.setResize=t.setResize.bind(Object(c.a)(t)),t.maximizeWindow=t.maximizeWindow.bind(Object(c.a)(t)),t.closeWindow=t.closeWindow.bind(Object(c.a)(t)),t.updateWindowDimensions=t.updateWindowDimensions.bind(Object(c.a)(t)),t.addWindow=t.addWindow.bind(Object(c.a)(t)),t}return Object(a.a)(e,A),Object(I.a)(e,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"moveWindow",value:function(A,e){var t=this.state.windows.slice();t[e].x=A.clientX+this.offsetX,t[e].y=A.clientY+this.offsetY,this.mouseXLast=A.clientX,this.mouseYLast=A.clientY,this.setState({windows:t})}},{key:"resizeWindow",value:function(A,e){var t=this.state.windows.slice();"N"===this.resizeDirection?(t[e].height=this.resizeHeight+this.clickY-A.clientY,t[e].y=this.resizeY-(this.clickY-A.clientY)):"E"===this.resizeDirection?t[e].width=this.resizeWidth+A.clientX-this.clickX:"S"===this.resizeDirection?t[e].height=this.resizeHeight-(this.clickY-A.clientY):"W"===this.resizeDirection?(t[e].width=this.resizeWidth+this.clickX-A.clientX,t[e].x=this.resizeX+(A.clientX-this.clickX)):"NE"===this.resizeDirection?(t[e].height=this.resizeHeight+this.clickY-A.clientY,t[e].y=this.resizeY-(this.clickY-A.clientY),t[e].width=this.resizeWidth+A.clientX-this.clickX):"SE"===this.resizeDirection?(t[e].height=this.resizeHeight-(this.clickY-A.clientY),t[e].width=this.resizeWidth+A.clientX-this.clickX):"SW"===this.resizeDirection?(t[e].height=this.resizeHeight-(this.clickY-A.clientY),t[e].width=this.resizeWidth+this.clickX-A.clientX,t[e].x=this.resizeX+(A.clientX-this.clickX)):"NW"===this.resizeDirection&&(t[e].height=this.resizeHeight+this.clickY-A.clientY,t[e].y=this.resizeY-(this.clickY-A.clientY)),this.setState({windows:t})}},{key:"maximizeWindow",value:function(A){var e=this.state.windows.slice();e[A].height=this.state.height,e[A].width=this.state.width,e[A].x=0,e[A].y=0,this.setState({windows:e})}},{key:"closeWindow",value:function(A){var e=this.state.windows.slice();e.splice(A,1),this.setState({windows:e})}},{key:"addWindow",value:function(A,e,t,i,g,n){var C=P(A,e,t,i,g,n),o=this.state.windows.slice();o.push(C),this.setState({windows:o})}},{key:"render",value:function(){var A=this;return g.a.createElement("div",{id:"Root",onMouseMove:this.mouseMove,onMouseDown:this.onMouseDown,onMouseUp:this.unsetGrabbed},g.a.createElement(G,{addWindow:this.addWindow}),this.state.windows.map((function(e,t){return g.a.createElement(d,{key:t,id:t,title:e.title,x:e.x,y:e.y,width:e.width,height:e.height,setGrab:A.setGrabbed,setResize:A.setResize,maximize:A.maximizeWindow,minimize:A.closeWindow,close:A.closeWindow},e.program)})))}}]),e}(g.a.Component),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(A,e){navigator.serviceWorker.register(A).then((function(A){A.onupdatefound=function(){var t=A.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(A)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(A)))})}})).catch((function(A){console.error("Error during service worker registration:",A)}))}t(32).isMobile?C.a.render(g.a.createElement("div",{className:"MobileError"},"You actually thought this would work on mobile?"),document.getElementById("root")):(null!=localStorage.getItem("webos_version")&&null==localStorage.getItem("webos_reset")&&"0.0.1"===localStorage.getItem("webos_version")||(v("/")&&f("/"),m("/"),m("/home"),m("/bin"),u("/home/hello.md","# Hello World!\nThis is a side project of mine that I am working on just for fun.\n\nThink of it as an operating system, except completely contained in your browser.\n\nFeel free to try it out and check out my Github [here.](https://github.com/DevinVS)\n\n### Features\nMoving/Resizing Windows\n\nA Persistent File System\n\nAn Application Launcher\n\nFunctioning(ish) Terminal (Type 'help' for a list of commands)"),localStorage.setItem("webos_version","0.0.1"),localStorage.removeItem("webos_reset")),C.a.render(g.a.createElement(H,null),document.getElementById("root"))),function(A){if("serviceWorker"in navigator){if(new URL("/browserOS",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/browserOS","/service-worker.js");M?(!function(A,e){fetch(A).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(A){A.unregister().then((function(){window.location.reload()}))})):X(A,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,A),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):X(e,A)}))}}()},20:function(A,e,t){},29:function(A,e,t){A.exports=t.p+"static/media/terminal.6d04cc09.png"},30:function(A,e){A.exports="data:image/png;base64,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bnRzLzEuMS8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDoxZGZhMTIzOS1mNWJlLTQ5OGMtYjBkNy03YzE4ZTRjMWI2NDEiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YmVkZDhkNGEtY2I2Mi00MDgzLTk0ZTctNmQzYjc2OGE1YTVkIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZWMzODYyYTYtZWIwZC00YzVjLWEzYzgtZjY4NmE5YjVjZGUwIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJMaW51eCIKICAgR0lNUDpUaW1lU3RhbXA9IjE1NzQ1NTg3ODYwMzUzMTkiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4xNCIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIj4KICAgPGlwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICA8aXB0Y0V4dDpMb2NhdGlvblNob3duPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25TaG93bj4KICAgPGlwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICA8aXB0Y0V4dDpSZWdpc3RyeUlkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6UmVnaXN0cnlJZD4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MWNmOGIwNDItOTE0Ni00ZDgwLWExMWQtMTE0M2NlNjA1MDYxIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKExpbnV4KSIKICAgICAgc3RFdnQ6d2hlbj0iLTA3OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICAgPHBsdXM6SW1hZ2VTdXBwbGllcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkltYWdlU3VwcGxpZXI+CiAgIDxwbHVzOkltYWdlQ3JlYXRvcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkltYWdlQ3JlYXRvcj4KICAgPHBsdXM6Q29weXJpZ2h0T3duZXI+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpDb3B5cmlnaHRPd25lcj4KICAgPHBsdXM6TGljZW5zb3I+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpMaWNlbnNvcj4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Pu2yejYAAAACYktHRAAp6D+7XgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+MLGAEaGWv9tcEAAA2rSURBVHja7d3BamTHFcbxqqZJGAa8yTYbP0NWeYC8Wx4ni4AXhmwNIYGAScArgfAwiyAGBE1juUllYTEZwUzUavW9t6q+319beSTdc86/vlPdlmorAFLZeQQAAQAgAAAEAIAAABAAAAIAQAAACAAAAQAgAAAEAIAAABAAAAIAQAAACAAAAQAgAAAEAIAAABAAgJXYewST89rf+149wpmp/i6AUacFKwCG476Vpx/ryma7rw0CyOSfT4bu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"},31:function(A,e,t){A.exports=t.p+"static/media/helloWorld.13e8c355.png"},33:function(A,e,t){A.exports=t(127)},38:function(A,e,t){},39:function(A,e,t){},40:function(A,e,t){}},[[33,1,2]]]);
//# sourceMappingURL=main.0a9827c2.chunk.js.map