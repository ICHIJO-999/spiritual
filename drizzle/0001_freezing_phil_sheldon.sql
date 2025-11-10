CREATE TABLE `generation_history` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`input_chat_history` text NOT NULL,
	`generated_divination_text` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `generation_history_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `training_data` (
	`id` int AUTO_INCREMENT NOT NULL,
	`customer_id` int NOT NULL,
	`customer_name` text NOT NULL,
	`chat_history` text NOT NULL,
	`divination_text` text NOT NULL,
	`note_link` varchar(512),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `training_data_id` PRIMARY KEY(`id`)
);
