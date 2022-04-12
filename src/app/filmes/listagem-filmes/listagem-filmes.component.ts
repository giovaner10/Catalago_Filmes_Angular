import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {


  readonly semFoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';
  filmes: Filme[] = [];
  generos: Array<string> = ["Ação", 'Romance', 'Aventura', 'Terror' , 'Ficção cientifica', 'Comedia', 'Aventura', 'Drama']
  filtrosListagem: FormGroup
  pagina: number = 1
  readonly qtdPagina: number = 4
  texto = ''
  genero  = ''

  


  constructor(
    private fb: FormBuilder,
    private filmesService: FilmesService,
    private router: Router) { }

  ngOnInit() {

    this.filtrosListagem = this.fb.group(
      {
        texto: [''],
        genero: ['']
      }
    )

    this.filtrosListagem.get('texto').valueChanges.pipe(debounceTime(500)).subscribe((val: string)=>
    {
      this.texto = val
      this.resetarConsulta()

    }
    )
    this.filtrosListagem.get('genero').valueChanges.subscribe((val: string)=>
    {
      this.genero = val
      this.resetarConsulta()

    }
    )

    this.listarFilmes()

  }

  onScroll(): void{
    this.listarFilmes();
  }

  private listarFilmes(): void{
    this.pagina++
    this.filmesService.listar(this.pagina , this.qtdPagina, this.texto, this.genero).subscribe(
      (filmes: Filme[]) => this.filmes.push(...filmes)
    )
  }

  private resetarConsulta(){
    this.pagina = 0
    this.filmes = []
    this.listarFilmes()
  }
  

  abrir(id: number): void{
    this.router.navigateByUrl('/filmes/' + id)
  }
}
