import React from 'react'

import { Calendar, Event, EventProps, SlotInfo, View } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { localizer } from '../../constant'

const DDCalendar = withDragAndDrop(Calendar)

type Props = {
  events: Event[]
  view?: View
  onEventResize?: ((args: { event: Event; start: string | Date; end: string | Date; isAllDay: boolean }) => void) | undefined
  onSelectSlot?: ((slotInfo: SlotInfo) => void) | undefined
}

export const DragDropCalendar = (props: Props) => {
  const { events, view = 'week', onEventResize, onSelectSlot } = props

  console.log('>>>>>', events)
  return (
    <DDCalendar
      dayLayoutAlgorithm="no-overlap"
      defaultView={view}
      events={events}
      localizer={localizer}
      onEventResize={onEventResize}
      resizable
      selectable
      onSelectSlot={onSelectSlot}
      style={{ flex: 1, maxHeight: '90vh' }}
    />
  )
}
