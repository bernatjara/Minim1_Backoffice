import { Component, OnInit } from '@angular/core';
import { IDenuncia } from 'src/app/models/denuncia';
import { DenunciaService } from 'src/app/services/denuncia.service';

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.component.html',
  styleUrls: ['./denuncias.component.css']
})
export class DenunciasComponent implements OnInit {
  denuncias: IDenuncia[] = [];

  constructor(private denunciaService: DenunciaService) {}

  ngOnInit(): void {
    this.getDenuncias();
  }

  getDenuncias(): void{
    this.denunciaService.getDenuncias().subscribe(denuncias => {
      this.denuncias = denuncias
    },
    err => {
      console.error(err);
    });
  }

  delete(denuncia: IDenuncia): void {
    if(confirm("Are you sure?") == true){
      this.denuncias = this.denuncias.filter(d => d !== denuncia);
      this.denunciaService.deleteDenuncia(denuncia._id).subscribe();
    }
  }

}
