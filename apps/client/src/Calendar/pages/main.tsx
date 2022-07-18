import React from 'react'
import { Event, SlotInfo } from 'react-big-calendar'
import { DragDropCalendar } from '../components'

export const CalendarMainPage = () => {
  const [events, setEvents] = React.useState<Event[]>([])

  const onEventResize = (/* { event, start, end, isAllDay }*/ evt: any) => {
    console.log('Event Resize =>', evt )
  }

  const handleSelectSlot = (slot: SlotInfo) => {
    console.log('slot => ', slot)
    setEvents(old => [
      ...old,
      {
        title: 'one Event',
        start: slot.start,
        end: slot.end,
        id: new Date().getTime(),
      } as Event,
    ])
  }

  return <DragDropCalendar events={events} onEventResize={onEventResize} onSelectSlot={handleSelectSlot} />
}
