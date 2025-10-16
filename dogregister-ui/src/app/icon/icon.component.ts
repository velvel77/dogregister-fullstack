import { Component, Inject, Input } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'app-icon',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    template: `
    <ng-container *ngIf="isBrowser">
      <lucide-angular
        [name]="name"
        [size]="size"
        [strokeWidth]="strokeWidth">
      </lucide-angular>
    </ng-container>
  `
})
export class IconComponent {
    @Input() name!: string;              // e.g. 'x', 'trash-2', 'plus'
    @Input() size: number | string = 20;
    @Input() strokeWidth: number | string = 2;

    isBrowser = false;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        // ✅ Moved here so it runs after `platformId` is available
        this.isBrowser = isPlatformBrowser(this.platformId);
    }
}
