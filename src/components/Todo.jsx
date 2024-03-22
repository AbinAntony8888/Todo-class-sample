import { Component } from "react";

export default class Todo extends Component {
  state = {
    input: "",
    items: [],
  };
  handleChang = (para1) => {
    this.setState({ input: para1.target.value });
  };
  storeItems = (para2) => {
    para2.preventDefault();

    const { input } = this.state;
    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };
  deleteItem = (key) => {
    const allItem = this.state.items;
    allItem.splice(key, 1);
    this.setState({
      items: allItem,
    });
  };
  
  render() {
    const { input, items } = this.state;
    return (
      <div>
        <h1 className="todo">ToDo App</h1>
        <form action="" onSubmit={this.storeItems}>
          <input type="text" className="inp1" value={input} onChange={this.handleChang} />
          <button >add</button>
        </form>

        <ol>
          {items.map((data,index) => (
            <li>
              <input type="checkbox"/>
              <input  value={data} />
              <i onClick={() => this.deleteItem(index)}>
                <button>Delete</button>
          {/* <button onClick={clearTodos}> clear all</button> */}

              </i>
            </li>
          ))}
          
        </ol>
      </div>
    );
  }
}
