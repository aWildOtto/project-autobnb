
export class Vote {
	optionId: string;
	up: boolean;
}

export class Comment {
	userId: string;
	message: string;
	date: Date;
}
export class User {
	id: string;
	votes: Vote[];
}
export class Board {
	name: string;
	description: string;
	options: Option[];
	users: User[];
}
export class Option {
	title: string;
	location: string;
	lon?: number;
	lat?: number;
	description: string;
	amenities: string[];
	images: string[];
	comments: Comment[];
}
