const {BrowserWindow, remote, app, ipcMain} = require('electron')
const path = require('path')

const{getConnection} = require("./database")

function signIn(newUser){
    const conn = getConnection();
    console.log(newUser)
}

let window

function createWindow(){
   window = new BrowserWindow({
        width: 800,
        height:600,
        webPreferences:{
            nodeIntegration: true,
            preload: `${__dirname}/preload.js`
        }
    })
    console.log("hi 3", window)
    window.loadFile('src/ui/index.html')
}

app.whenReady().then(() => {
    console.log("hi 2")
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createWindow()
        }
    })
})

module.exports = {
    createWindow,
    signIn
}