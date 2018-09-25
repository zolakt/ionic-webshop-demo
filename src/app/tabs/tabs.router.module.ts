import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: 'tabs',
		component: TabsPage,
		children: [
			{
				path: 'shop',
				outlet: 'shop',
				loadChildren: '../pages/shop/shop.page.module#ShopPageModule'
			},
			{
				path: 'checkout',
				outlet: 'checkout',
				loadChildren: '../pages/checkout/checkout.page.module#CheckoutPageModule'
			}
		]
	},
	{
		path: 'checkout',
		redirectTo: '/tabs/(checkout:checkout)',
		pathMatch: 'full'
	},
	{
		path: 'shop',
		redirectTo: '/tabs/(shop:shop)',
		pathMatch: 'full'
	},
	{
		path: '',
		redirectTo: '/tabs/(shop:shop)',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsPageRoutingModule {}
