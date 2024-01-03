import fsp from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';

export const router = new Map();

const prefix = '/routes';
const separator = '/';
const controllerFileName = 'index.js';

const basePath = path.join(process.cwd(), prefix);

function trimIndexJsFromPath(path) {
  if (path.endsWith('/index.js')) {
    return path.slice(0, -'/index.js'.length);
  }
  return path;
}

async function loadRoutes() {
  async function recursiveRead(dir) {
    const entries = await fsp.readdir(dir, { withFileTypes: true });
    const files = entries.filter(dirent => dirent.isFile() && dirent.name === controllerFileName);
    const folders = entries.filter(dirent => dirent.isDirectory());

    for (const file of files) {
      const filePath = path.join(dir, file.name);
      const relativePath = filePath.substring(process.cwd().length);
      const parsedPath = relativePath.substring(prefix.length).replaceAll(path.sep, separator);
      let resolvedPath = parsedPath === '' ? separator : parsedPath;
      if (resolvedPath !== separator) {
        resolvedPath = trimIndexJsFromPath(resolvedPath);
        if (resolvedPath === '') {
          resolvedPath = separator; 
        }
      }
      const modulePath = pathToFileURL(filePath)
      try {
        const module = await import(modulePath);
        router.set(resolvedPath, module);
      } catch (error) {
        console.error(`Failed to import module at ${modulePath}:`, error);
      }
    }

    for (const folder of folders) {
      await recursiveRead(path.join(dir, folder.name));
    }
  }

  await recursiveRead(basePath);
}

loadRoutes().then(() => {
  console.log('Routes loaded');
}).catch(error => {
  console.error('Failed to load routes:', error);
});
