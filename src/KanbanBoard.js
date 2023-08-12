import React from 'react';
import Card from './Card';

function KanbanBoard({ tickets, groupOption, orderOption }) {
  let groupedTickets = [...tickets];

  // Grouping logic based on selected option
  if (groupOption === 'status') {
    // Group by status
    groupedTickets = tickets.reduce((groups, ticket) => {
      const status = ticket.status;
      if (!groups[status]) groups[status] = [];
      groups[status].push(ticket);
      return groups;
    }, {});
  } else if (groupOption === 'user') {
    // Group by user
    groupedTickets = tickets.reduce((groups, ticket) => {
      const user = ticket.userId;
      if (!groups[user]) groups[user] = [];
      groups[user].push(ticket);
      return groups;
    }, {});
  }

  // Apply ordering logic based on selected option
  const orderedGroupedTickets = Object.keys(groupedTickets).reduce((sorted, key) => {
    sorted[key] = groupedTickets[key].sort((a, b) => {
      if (orderOption === 'priority') {
        return b.priority - a.priority; // Order by priority (descending)
      } else if (orderOption === 'title') {
        return a.title.localeCompare(b.title); // Order by title (alphabetical)
      }
      return 0;
    });
    return sorted;
  }, {});

  return (
    <div className="KanbanBoard">
      {Object.keys(orderedGroupedTickets).map((group) => (
        <div key={group} className="group">
          <h2>{group}</h2>
          <div className="card-container">
            {orderedGroupedTickets[group].map((ticket) => (
              <Card
                key={ticket.id}
                title={ticket.title}
                id={ticket.id}
                tag={ticket.tag}
                priority={ticket.priority}
                userId={ticket.userId}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
