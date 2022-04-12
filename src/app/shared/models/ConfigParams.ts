import { CampoGenerico } from "./campoGenerico";

export interface ConfigPrams {
  qtdPagina: any;
  texto: any;
  genero: any;
  pagina?: number;
  limite?: number;
  pesquisa?: string;
  campo?: CampoGenerico;
}