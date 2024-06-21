import { date, pgTable, serial, text, time } from "drizzle-orm/pg-core";

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  imageSrc: text("image_src").notNull(),
  date: date("date").notNull(),
  time: time("time").notNull(),
});