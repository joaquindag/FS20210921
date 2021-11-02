import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CategoriasViewModelService } from './servicios.service';

@Component({
  selector: 'categoria',
  templateUrl: './tmpl-anfitrion.component.html',
  styleUrls: ['./componente.component.scss']
})
export class CategoriasComponent implements OnInit {

  constructor(protected vm: CategoriasViewModelService) { }
  public get VM(): CategoriasViewModelService { return this.vm; }
  ngOnInit(): void {
    this.vm.load();
  }
  ngOnDestroy(): void {
    this.vm.clear()
  }

}
@Component({
  selector: 'app-botones',
  template: `
    <div class="btn-group" role="group">
      <button class="btn btn-info" *ngIf="hasView" (click)="view.emit(null)"><i class="fas fa-eye"></i></button>
      <button class="btn btn-success" *ngIf="hasEdit" (click)="edit.emit(null)"><i class="fas fa-pen"></i></button>
      <button class="btn btn-danger" *ngIf="hasDelete" (click)="delete.emit(null)"><i class="far fa-trash-alt"></i></button>
    </div>
  `
})
export class BotonesComponent implements OnInit, OnDestroy {
  @Output() view: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  get hasView(): boolean { return this.view.observers.length > 0; }
  get hasEdit(): boolean { return this.edit.observers.length > 0; }
  get hasDelete(): boolean { return this.delete.observers.length > 0; }

  constructor(protected vm: CategoriasViewModelService) { }
  ngOnInit(): void { }
  ngOnDestroy(): void {  }
}
@Component({
  selector: 'app-categorias-list',
  templateUrl: './tmpl-list.con-rutas.component.html',
  styleUrls: ['./componente.component.scss']
})
export class CategoriasListComponent implements OnInit {
  constructor(protected vm: CategoriasViewModelService) { }
  public get VM(): CategoriasViewModelService { return this.vm; }
  ngOnInit(): void {
    //this.vm.list();
    this.vm.load();
  }
}

@Component({
  selector: 'app-categorias-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss']
})
export class CategoriasAddComponent implements OnInit {
  constructor(protected vm: CategoriasViewModelService) { }
  public get VM(): CategoriasViewModelService { return this.vm; }
  ngOnInit(): void {
    this.VM.add();
  }
}

@Component({
  selector: 'app-categorias-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss']
})
export class CategoriasEditComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(protected vm: CategoriasViewModelService,
    protected route: ActivatedRoute, protected router: Router) { }
  public get VM(): CategoriasViewModelService { return this.vm; }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = parseInt(params?.get('id') ?? '');
        if (id) {
          this.vm.edit(id);
        } else {
          this.router.navigate(['/404.html']);
        }
      });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}

@Component({
  selector: 'app-categorias-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.scss']
})
export class CategoriasViewComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(protected vm: CategoriasViewModelService,
    protected route: ActivatedRoute, protected router: Router) { }
  public get VM(): CategoriasViewModelService { return this.vm; }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = parseInt(params?.get('id') ?? '');
        if (id) {
          this.vm.view(id);
        } else {
          this.router.navigate(['/404.html']);
        }
      });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}

export const CATEGORIAS_COMPONENTES = [
  CategoriasComponent, CategoriasListComponent, CategoriasAddComponent,
  CategoriasEditComponent, CategoriasViewComponent, BotonesComponent,
];

