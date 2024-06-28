import { NgFor } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: "sidebar",
    standalone: true,
    imports: [NgFor],
    template: `
    <aside class="sidebar">
        <nav>
            <ul>
                <li *ngFor="let link of links"><a [href]="link.path">{{ link.label }}</a></li>
            </ul>
        </nav>
    </aside>
    `,
})

export class SidebarComponent {
@Input() links: { label: string, path: string }[] = [];
}