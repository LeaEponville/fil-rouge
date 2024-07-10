import { NgFor } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "sidebar",
    standalone: true,
    imports: [NgFor, RouterLink],
    template: `
    <aside class="sidebar">
        <a>Admin/Agent</a>
        <nav>
            <ul>
                <li *ngFor="let link of links"><a [href] [routerLink] ="link.path">{{ link.label }}</a></li>
            </ul>
        </nav>
    </aside>
    `,
})

export class SidebarComponent {
@Input() links: { label: string, path: string }[] = [];
}