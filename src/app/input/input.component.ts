import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = 'placeholder';
  @Input() value: string = '';
  @Input() label: string = 'example label';
}
