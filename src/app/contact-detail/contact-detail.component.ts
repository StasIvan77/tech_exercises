import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/contact.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactService } from '../shared/contact.service';
import {MatIconModule} from '@angular/material/icon'
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
  standalone: true,
  imports: [MatIconModule,
    CommonModule
  ]
})
export class ContactDetailComponent implements OnInit {
  contact: Contact | undefined = undefined;
  
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) { }

  goBackToList(): void {
    this.router.navigate(['/contacts']);
  }

  ngOnInit(): void {
    
    

    this.route.params.subscribe(params => {
      const id = +params['id'];
      console.log('my id', id );
     // console.log('my product by id', this.productService.getProductById(this.id) );
     this.contact = this.contactService.getContactById(id.toString());   

     // console.log('my product', this.product);
    })
  
  }
}
