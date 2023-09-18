import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-routes',
  templateUrl: './card-routes.component.html',
  styleUrls: ['./card-routes.component.css']
})
export class CardRoutesComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute, private navegador: Router) {
    // localhost:4200/portifolio/{1}
    // sempre usa o subscribe quando quer resgatar informação [recuperar informação]
    this.activeRoute.params.subscribe(
      resp => console.log(resp)
    )

    this.activeRoute.firstChild?.params.subscribe(
      resp => console.log(resp)
    )

    // localhost:4200/portifolio/1?{name=amanda&token=123}
    this.activeRoute.queryParams.subscribe(
      resp => console.log(resp)
    )
  }

  ngOnInit(): void{
    /* setInterval(() => {
      this.navegador.navigate(['/'])
    },5000); */
  }
}
