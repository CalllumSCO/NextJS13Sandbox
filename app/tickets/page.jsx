import React from 'react'
import TicketList from './TicketList'

export default function page() {
  return (
    <main>
        <nav>
          <div>
            <h2>Tickets</h2>
            <p><small>Cuurently open tickets:</small></p>
          </div>
        </nav>

        <TicketList />
    </main>
  )
}
