// eslint-disable-next-line @typescript-eslint/no-var-requires
const gracefulFs = import('graceful-fs');
const fs = import('fs');
gracefulFs.then(mod => mod.gracefulify(fs));

// eslint-disable-next-line import/first
import ElectronLauncherApp from './ElectronLauncherApp'

new ElectronLauncherApp().start()
