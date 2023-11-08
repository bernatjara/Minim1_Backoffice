import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IDenuncia } from 'src/app/models/denuncia';
import { DenunciaService } from 'src/app/services/denuncia.service';

@Component({
  selector: 'app-denuncias-user',
  templateUrl: './denuncias-user.component.html',
  styleUrls: ['./denuncias-user.component.css']
})
export class DenunciasUserComponent implements OnInit {
  id: string = this.route.snapshot.paramMap.get('id')|| " ";
  denuncias: IDenuncia[] = [];

  constructor(
    private denunciaService: DenunciaService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.listOfDenuncias(this.id);
  }

  listOfDenuncias(id: string) {
    this.denunciaService.getDenunciasOfUser(id).subscribe(data => {
      this.denuncias = data.denuncia;
      console.log(this.denuncias);
    }, error => {
      console.log(error);
    })
  }

  goBack(): void {
    this.location.back();
  }

}
