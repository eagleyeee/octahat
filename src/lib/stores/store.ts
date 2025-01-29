import { writable } from 'svelte/store';

type Portfolio = {
	id: number;
	title: string;
	link: string;
	tag: string;
	description: string;
	imageUrl: string;
};

type Portfolios = {
	id: number;
	name: string;
	isActive: boolean;
	portfolio: Portfolio[];
};

export const portfolios = writable<Portfolios[]>([]);
