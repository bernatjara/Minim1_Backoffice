import { Component } from '@angular/core';
import { DenunciaService } from 'src/app/services/denuncia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-denuncias-create',
  templateUrl: './denuncias-create.component.html',
  styleUrls: ['./denuncias-create.component.css']
})
export class DenunciasCreateComponent {
  denuncia: any={usuarioDenunciado:'', motivo:''}

  constructor(
    private route: ActivatedRoute,
    private denunciaService: DenunciaService,
    private location: Location,
    private router: Router
  ){}

  createDenuncia(){
    if (this.denuncia) {
      const denunciaTO = {
        usuarioDenunciado: this.denuncia.usuarioDenunciado,
        motivo: this.denuncia.motivo
      };
      this.denunciaService.createDenuncia(denunciaTO).subscribe(()=> this.goBack());
    }
  }
  goBack(): void {
    this.location.back();
  }

}
