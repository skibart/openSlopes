import { ResortItem } from '../../models/resort';

export const filters = [
  (item: ResortItem) => item.region,
  (item: ResortItem) => item.region === 'malopolskie',
  (item: ResortItem) => item.region === 'slaskie',
  (item: ResortItem) => item.region === 'podkarpackie',
  (item: ResortItem) => item.region === 'swietokrzyskie',
  (item: ResortItem) => item.region === 'lubelskie',
  (item: ResortItem) => item.region === 'dolnoslaskie',
  (item: ResortItem) => item.region === 'czechy',
  (item: ResortItem) => item.region === 'slowacja',
];
