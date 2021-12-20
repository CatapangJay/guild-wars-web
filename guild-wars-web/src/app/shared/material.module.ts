import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { NftCardComponent } from './components/nft-card/nft-card.component';

@NgModule({
  declarations: [
    NftCardComponent
  ],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule],
})
export class MaterialModule {}
