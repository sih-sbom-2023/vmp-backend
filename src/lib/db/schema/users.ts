import { mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users",{
  id: varchar("id", { length: 36 }).notNull().primaryKey(),
})