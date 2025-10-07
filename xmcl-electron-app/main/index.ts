// eslint-disable-next-line @typescript-eslint/no-var-requires
const gracefulFs = await import('graceful-fs');
const fs = await import('fs');
gracefulFs.gracefulify(fs);

// eslint-disable-next-line import/first
import ElectronLauncherApp from './ElectronLauncherApp'

new ElectronLauncherApp().start()
