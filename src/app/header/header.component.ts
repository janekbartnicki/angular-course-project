import {Component, EventEmitter, Output} from "@angular/core";

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>()
    collapsed = true;

    onFeatureSelected(chosenFeature: string): void {
      this.featureSelected.emit(chosenFeature);
    }
}
