/** Создать основную таблицу статей */
create table if not exists Articles (
	id UUID PRIMARY KEY,
	title TEXT,
	text TEXT,
    createdAt DATETIME,
    updatedAt DATETIME
)
