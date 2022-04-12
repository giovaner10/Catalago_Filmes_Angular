import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { FilmesService } from "src/app/core/filmes.service";
import { AlertComponent } from "src/app/shared/components/alerta/alerta.component";
import { Alerta } from "src/app/shared/models/alerta";
import { Filme } from "src/app/shared/models/filme";

@Component({
  selector: 'dio-visualizar-filmes',
  templateUrl: './visulizar-filmes.component.html',
  styleUrls: ['./visulizar-filmes.component.scss']
})
export class VisualiarFilmesComponent implements OnInit {
  

  filme : Filme
  id: number
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private rota: ActivatedRoute,
    private filmeService: FilmesService
    ){}
  
  ngOnInit(): void {
    this.id = this.rota.snapshot.params['id']
    this.visualizar(this.id)
  }

  private visualizar(id: number): void{
    this.filmeService.visualizar(id).subscribe(
      (filme: Filme)=> this.filme = filme
    )

  }

  excluir(id: number): void {
    const config = {
      data: {
        titulo: 'Você tem certeza que deseja excluir?',
        descricao: 'Caso você tenha certceza que deseja excluir, clique no botão OK',
        corBtnCancelar: 'primary',
        corBtnSucesso: 'warn',
        possuirBtnFechar: true
      } as Alerta
    };
    const dialogRef = this.dialog.open(AlertComponent, config);
    dialogRef.afterClosed().subscribe((opcao: boolean) => {
      if (opcao) {
        this.filmeService.excluir(id)
        .subscribe(() => this.router.navigateByUrl('/filmes'));
      }
    });
  }


  editar(): void {
    this.router.navigateByUrl('/filmes/cadastro/' + this.id);
  }

}




