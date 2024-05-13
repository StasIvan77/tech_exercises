import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { Router } from '@angular/router';
import { Contact } from '../shared/contact.model';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

import { merge } from 'rxjs';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule]
})
export class ContactAddComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);

  contactForm!: FormGroup;


  constructor(private contactService: ContactService, private router: Router, private fb: FormBuilder)
   {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
    }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      id: {value: '', disabled: true},
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.email],
      birthDate: [''],
      address: ['']
    });
  }

  errorMessage = '';

  

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }

  addContact(): void {
    if (this.contactForm.valid) {
      // Додати контакт тільки якщо форма є валідною
      this.contactService.addContact(this.contactForm.value);
      this.router.navigate(['/contacts']);
    }
  }

  cancel(): void {
    this.router.navigate(['/contacts']); // Перенаправлення на сторінку зі списком контактів
  }
}
