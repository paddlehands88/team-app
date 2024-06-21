"use client"

type EventsFormProps = {
  userId: string | null,
  type: "Create" | "Update"
}

const EventsForm = ({userId, type}: EventsFormProps) => {
  return (
    <div>EventsForm {type}</div>
  )
}

export default EventsForm