import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';


export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard  {
  canDeactivate(component: CanComponentDeactivate): Observable<boolean> | Promise<boolean> | boolean {
    // Sprawdzamy, czy komponent ma metodę canDeactivate
    return component.canDeactivate ? component.canDeactivate() : true;
  }
  
}
