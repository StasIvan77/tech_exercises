import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactsListComponent },
  { path: 'contact/:id', component: ContactDetailComponent } // персональний шлях для деталей контакту з параметром :id
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
