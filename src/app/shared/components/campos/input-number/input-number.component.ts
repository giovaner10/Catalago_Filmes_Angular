import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, AbstractControl } from "@angular/forms";
import { ValidarCamposService } from "../validar-campos.service";

@Component({
    selector: 'dio-input-number',
    templateUrl: './input-number.component.html',
    styleUrls: ['./input-number.component.css']
})

export class InputNumberComponent {

    @Input() titulo: string
    @Input() formGroup: FormGroup
    @Input () controlName: string
    @Input () maximo: string
    @Input () minimo: string
    @Input () step: 1


    constructor(public validacao: ValidarCamposService){}


    get formControl(): AbstractControl{
        return this.formGroup.controls[this.controlName]
    }
 }
    