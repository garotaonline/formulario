import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formu: FormGroup;
  listData: any;

  constructor(
    private fb: FormBuilder){

      this.listData = [];

      this.formu = this.fb.group({
        codigo: ["", [Validators.required]],
        nome: ["", [Validators.required]],
        nascimento: "",
        endereco: "",
        descricao: ""
      })

  }

  public addItem(): void {
    this.listData.push(this.formu.value);
  }

  ngOnInit(): void {
  }
    
  }
