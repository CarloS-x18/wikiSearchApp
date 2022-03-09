export interface Articles {
  batchcomplete: string;
  continue:      Continue;
  query:         Query;
}

export interface Continue {
  sroffset: number;
  continue: string;
}

export interface Query {
  searchinfo: Searchinfo;
  search:     Search[];
}

export interface Search {
  ns:      number;
  title:   string;
  pageid:  number;
  snippet: string;
}

export interface Searchinfo {
  totalhits: number;
}
