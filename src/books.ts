import notionBooks from './data/notion-books.json';
export type Status = 'finished' | 'reading' | 'wishlist' | 'paused' | 'abandoned';
export interface Book { id:string; title:string; author:string; genre:string; genres:string[]; status:Status; color:string; ink:string; height:number; width:number; year:number; pages:number; current:number; rating?:number; spineTitle?:string; description:string; format:string[]; owned:boolean; notionUrls:string[]; startedAt:string|null; finishedAt:string|null; }
export const statusLabels:Record<Status,string>={finished:'Lido',reading:'Lendo',wishlist:'Quero ler',paused:'Pausado',abandoned:'Abandonado'};
export const books:Book[]=notionBooks as Book[];
