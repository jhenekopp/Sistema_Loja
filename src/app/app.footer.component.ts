import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer clearfix">
            <img src="assets/layout/images/logo-izzy-makers-black.png">
            <div class="layout-footer-right">
                <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    `
})
export class AppFooterComponent {

}
