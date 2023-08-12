import React from "react";
import Card from "./Card";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://apimocha.com/quicksell/data")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          tickets: json.tickets,
          DataisLoaded: true,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    const { DataisLoaded, tickets } = this.state;

    if (!DataisLoaded) return <div>Loading...</div>;

    return (
      <div className="App">
        <h1>Kanban Board</h1>
        <div className="card-container">
          {tickets.map((ticket) => (
            <div className=" colour">
            <Card
              key={ticket.id}
              id={ticket.id}
              title={ticket.title}
              priority={ticket.priority}
              userId={ticket.userId}
            /></div>
          ))}

        </div>
      </div>
    );
  }
}

export default App;
