
export class Vote {
	optionId: string;
	up: boolean;
}
export class User {
	id: string;
	votes: Vote[];
}
export class Board {
	name: string;
	description: string;
	options: Option[];
	Users: User[];
}
export class Option {
	title: string;
	location: string;
	lon?: number;
	lat?: number;
	description: string;
	amenities: string[];
	images: string[];
}
