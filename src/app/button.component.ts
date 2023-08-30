import { Component, Input, SimpleChanges } from "@angular/core";

@Component({
	selector: 'my-button',
	template: '<button [disabled]="disabled" logger>{{label}}</button>'
})
export class ButtonComponent {
	@Input() public label: string;
	@Input() public disabled: boolean = false;

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes.disabled) {
			console.log('## button disabled: ', changes.disabled.currentValue);
		}
	}
}
