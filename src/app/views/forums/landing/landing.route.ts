import { RouteRecordRaw } from 'vue-router';
import { routeForumsLandingActive } from './active/active.route';
import { routeForumsLandingOverview } from './overview/overview.route';

export const routeForumsLanding: RouteRecordRaw = {
	path: '',
	component: () => import('./landing.vue'),
	children: [routeForumsLandingOverview, routeForumsLandingActive],
};
