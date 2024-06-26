import EventsForm from "@/components/EventsForm"
import { auth } from "@clerk/nextjs/server";


const CreateEvent = () => {

  const { userId } = auth();
  console.log(userId);

  return (
    <>
    <section className="bg-primary-50 bg-cover bg-center py-5 md:py-10">
      <h3 className="wrapper h3-bold text-center sm-text-left text-white">Create Event</h3>
    </section>

    <div className="wrapper my-8 ">
      <EventsForm userId={userId} type="Create"/>
    </div>
    </>
  )
}

export default CreateEvent;
