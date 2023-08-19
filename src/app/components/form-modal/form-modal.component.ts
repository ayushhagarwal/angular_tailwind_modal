import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
})
export class FormModalComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
}
