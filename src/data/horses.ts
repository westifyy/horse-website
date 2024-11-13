import { arabian } from './horses/arabian';
import { missouriFoxTrotter } from './horses/missouri-fox-trotter';
import { turkoman } from './horses/turkoman';
import { breton } from './horses/breton';
import { norfolkRoadster } from './horses/norfolk-roadster';
import { mustang } from './horses/mustang';
import type { HorseBreed } from '../types/horse';

export const horses: HorseBreed[] = [
  arabian,
  missouriFoxTrotter,
  turkoman,
  breton,
  norfolkRoadster,
  mustang
];