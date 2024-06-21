//import { getEvents } from "@/db/queries";
import ListEvents from "@/components/ListEvents";
import Image from "next/image";

const EventsPage = () => {

  //const events = await getEvents();

  return (
    <main className="max-w-[1024px] mx-auto flex-1 w-full flex flex-col p-4 gap-2">
      {/* <div className="relative w-[1024px] h-[694px]">
        <Image src="/Hero.png" alt="Hero Image" fill /> 
      </div> */}
      <h1 className="text-2xl font-bold text-white">Upcoming Events</h1>
      <ListEvents />
    </main>
)};

export default EventsPage;
