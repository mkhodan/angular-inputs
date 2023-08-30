import { Directive, Input } from "@angular/core";

@Directive({
	selector: '[logger]',
	host: {
		'(click)': 'onClick($event)'
	},
})
export class LoggerDirective {
	@Input() public disabled: boolean = false;

	public onClick(): void {
		if (!this.disabled) {
			console.log('## clicked');
		}
	}
}
