const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('amplifyContext',{
    currentUser: async () => await ipcRenderer.invoke('currentUser'),
    check: () => console.log(Amplify.configure()),
    login: (user) => ipcRenderer.invoke('login',user)
})

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
})


