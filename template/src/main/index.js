{{#if_eq eslintConfig 'standard'}}
'use strict'

{{/if_eq}}
import { app, BrowserWindow } from 'electron'{{#if_eq eslintConfig 'airbnb'}} // eslint-disable-line{{/if_eq}}
const logger = require('electron-log');
const getPort = require('get-port');
const path = require('path');

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\'){{#if_eq eslintConfig 'airbnb'}} // eslint-disable-line{{/if_eq}}
}

const springJarFilename = 'spring-1.0.0.jar'; 

let serverProcess
function startServer(port) {

  logger.info(__opt)

  const server = `${path.join(__opt, springJarFilename)}`;
  serverProcess = require('child_process').spawn('java', ['-jar', server, `--server.port=${port}`]);

  serverProcess.stdout.on('data', data => {
    logger.info('SERVER: ' + data);
  });

  serverProcess.stderr.on('data', data => {
    logger.error('SERVER: ' + data);
  });

  if (serverProcess.pid) {
    logger.info("Server PID: " + serverProcess.pid);
  } else {
    logger.error("Failed to launch server process.")
  }

}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  getPort({ port: 9090 }).then(port => {
    startServer(port);
    global.springServer = {
      'url':`http://localhost:${port}`
    }
  })

  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
    webPreferences: {webSecurity: false}
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
{{#if_eq builder 'builder'}}

app.on('will-quit', () => {
  if (serverProcess) {
    logger.info(`Killing server process ${serverProcess.pid}`);
    const kill = require('tree-kill');
    kill(serverProcess.pid, 'SIGTERM', function (err) {
      if (err) {
        console.log(err.stack)
      }
      logger.info('Server process killed');
        serverProcess = null;
    });
  }
});
/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
{{/if_eq}}
