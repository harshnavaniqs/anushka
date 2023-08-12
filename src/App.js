import React from 'react';
import Card from './Card';
import ButtonGroup from './ButtonGroup';
import './App.css';
import KanbanBoard from './KanbanBoard';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: [],
      DataisLoaded: false,
      groupOption: 'status', // Default grouping by status
      orderOption: 'priority', // Default ordering by priority
    };
  }

  componentDidMount() {
    fetch('https://apimocha.com/quicksell/data')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          tickets: json.tickets,
          DataisLoaded: true,
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { DataisLoaded, tickets, groupOption, orderOption } = this.state;

    if (!DataisLoaded) return <div>Loading...</div>;

    return (
      <div className="App">
        <h1>Kanban Board</h1>
        <ButtonGroup
          groupOption={groupOption}
          setGroupOption={(option) => this.setState({ groupOption: option })}
          orderOption={orderOption}
          setOrderOption={(option) => this.setState({ orderOption: option })}
        />
        <KanbanBoard
          tickets={tickets}
          groupOption={groupOption}
          orderOption={orderOption}
        />
      </div>
    );
  }
}

export default App;
