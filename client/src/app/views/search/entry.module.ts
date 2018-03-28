import { NgModule } from '@angular/core';


import { SearchComponent } from './search.component';
import { EntryRoutingModule } from './entry-routing.module';

@NgModule({
  imports: [
    EntryRoutingModule,

  ],
  declarations: [ SearchComponent ]
})
export class EntryModule { }
