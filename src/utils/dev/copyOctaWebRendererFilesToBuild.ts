import { copyFile } from 'fs';
import { readdir } from 'fs/promises';
import { join, resolve } from 'path';

const fileTypeToCopy = ["js", "css"];
const mainWindowRendererAssetsPath = "src/renderer/mainWindow/assets";
const buildRenderersPath = "out/renderer/assets/";

export const copyOctaWebRendererFilesToBuild = () => {
  readdir(join(resolve("./"), mainWindowRendererAssetsPath))
    .then((list) => {
      list.forEach((fileName) => {
        if ((fileTypeToCopy.includes(fileName.split(".").at(-1)!) === false)) {
          return;
        }

        copyFile(join(resolve("./"), mainWindowRendererAssetsPath, fileName), join(resolve("./"), buildRenderersPath, fileName), (err) => {
          if (err) console.log(err);
        });
      });
    });
};
