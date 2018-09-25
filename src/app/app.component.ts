import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	pages: any[] = [
		{ title: 'Tutorial', component: 'TutorialPage' },
		{ title: 'Welcome', component: 'WelcomePage' },
		{ title: 'Tabs', component: 'TabsPage' },
		{ title: 'Cards', component: 'CardsPage' },
		{ title: 'Content', component: 'ContentPage' },
		{ title: 'Login', component: 'LoginPage' },
		{ title: 'Signup', component: 'SignupPage' },
		{ title: 'Master Detail', component: 'ListMasterPage' },
		{ title: 'Menu', component: 'MenuPage' },
		{ title: 'Settings', component: 'SettingsPage' },
		{ title: 'Search', component: 'SearchPage' }
	];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}
