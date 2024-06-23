import { getEvents } from "@/db/queries";
import Image from "next/image";

const ListEvents = async () => {

  const events = await getEvents();

  return (
    <>
      {events.map((event) => (
        <div key={event.id} className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">{event.title}</h2>
          <p className="text-sm">Description: {event.description}</p>
          <p className="text-sm">Location: {event.location}</p>
          <Image src={event.imageSrc} alt={event.title} width={200} height={200} />
        </div>
    ))
    }
    </>
  )
}

export default ListEvents;