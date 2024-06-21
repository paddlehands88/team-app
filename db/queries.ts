import { queryClient } from "./queryClient";
import db from "./drizzle";
import { cache } from "react";


export const getEvents = cache(async () => {
  const data = await db.query.events.findMany();
  console.log(data);
  return data;
});

