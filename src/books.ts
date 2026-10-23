export type Status = 'finished' | 'reading' | 'wishlist' | 'paused' | 'abandoned';
export interface Book { id: string; title: string; author: string; genre: string; status: Status; color: string; ink: string; height: number; width: number; year: number; pages: number; current: number; rating?: number; description: string; }
export const statusLabels: Record<Status,string> = { finished:'Lido', reading:'Lendo', wishlist:'Quero ler', paused:'Pausado', abandoned:'Abandonado' };
const samples:[string,string,string,Status,string,number,number][] = [
 ['O Segundo Sexo','Simone de Beauvoir','Filosofia','reading','#6f2d42',1949,848],
 ['O Estrangeiro','Albert Camus','Ficção','finished','#ac916d',1942,128],
 ['A República','Platão','Filosofia','wishlist','#354d46',-375,432],
 ['Memórias Póstumas','Machado de Assis','Ficção','finished','#844633',1881,224],
 ['Assim Falou Zaratustra','Friedrich Nietzsche','Filosofia','reading','#584e69',1883,352],
 ['O Mito de Sísifo','Albert Camus','Filosofia','wishlist','#bb7e57',1942,160],
 ['A Paixão Segundo G.H.','Clarice Lispector','Ficção','wishlist','#7d4a40',1964,184],
 ['O Mundo de Sofia','Jostein Gaarder','Filosofia','finished','#4c6874',1991,568],
 ['A Sociedade do Cansaço','Byung-Chul Han','Filosofia','finished','#bb9c75',2010,136],
 ['Ética','Baruch Spinoza','Filosofia','paused','#4b5941',1677,392],
 ['Uma Breve História do Tempo','Stephen Hawking','Ciência','wishlist','#6b475d',1988,256],
 ['O Homem que Confundiu Sua Mulher com um Chapéu','Oliver Sacks','Neurociência','wishlist','#b4664f',1985,272]
];
export const books:Book[] = samples.map((s,i)=>({id:'book-'+String(i+1).padStart(2,'0'),title:s[0],author:s[1],genre:s[2],status:s[3],color:s[4],ink:'#f6e5c4',height:170+(i*19)%76,width:28+(i*11)%22,year:s[5],pages:s[6],current:s[3]==='finished'?s[6]:s[3]==='reading'?Math.min(s[6],110+i*14):0,rating:s[3]==='finished'?4+(i%2)*.5:undefined,description:'Uma obra da biblioteca demonstrativa. Na próxima entrega, os dados bibliográficos, leituras e reflexões serão carregados de arquivos Markdown.'}));
