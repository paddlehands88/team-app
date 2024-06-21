import { getEvents } from "@/db/queries";

const ListEvents = async () => {

  const events = await getEvents();

  return (
    <>
      {events.map((event) => (
        <div key={event.id} className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">{event.title}</h2>
          <p className="text-sm">Date: {event.date}</p>
          <p className="text-sm">Time: {event.time}</p>
        </div>
    ))
    }
    </>
  )
}

export default ListEvents;