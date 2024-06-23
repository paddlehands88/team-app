import { timestamp, pgTable, serial, text, boolean } from "drizzle-orm/pg-core";

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  location: text("location").notNull(),
  imageSrc: text("image_src").notNull(),
  startDateTime: timestamp("start_date_time").notNull(),
  endDateTime: timestamp("end_date_time").notNull(),
  categoryId: text("category_id").notNull(),
  price: text("price"),
  isFree: boolean("is_free"),
  url: text("url").notNull(),

  
});