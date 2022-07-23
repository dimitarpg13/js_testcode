// import whole module as namespace object 'path'
import * as path from 'path';
// import a single export of module file-tools.mjs
import {isTextFilePath} from './file-tools.mjs';

console.log(isTextFilePath('./file-tools.mjs'));


