import path from 'path';
import { Role } from './data/enum';
export const SRC = path.resolve(import.meta.dirname);
export const DB = path.resolve(SRC, './database/sqlite/');

export const AUTH_STRATEGY = 'local';
export const DEFAULT_AUTH_ROLE: `${Role.USER}`= "USER"