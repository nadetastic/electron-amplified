# Electron Amplified

Much of the logic is split up between the following files:

### main.js
Contains:
- The imports/requires for Amplify
- Listeners for `ipcMain`

### preload.js
Setups up my amplify context bridge that send `ipc` requests to `main.js`

### renderer.js
Sets up client-side/html listeners that invoke `ipc` via `preload.js`


[More on IPC](https://www.electronjs.org/docs/latest/tutorial/ipc)