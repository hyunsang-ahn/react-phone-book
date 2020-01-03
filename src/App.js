import React, {Component } from 'react';
import PhoneForm from './componants/PhoneForm'
import PhoneInfoList from './componants/PhoneInfoList'

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '안현상',
        phone: '010-2020-2222'
      },
      {
        id: 1,
        name: 'hodooo',
        phone: '0101-2030-3333'
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    })
  }
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  render(){
    const { information } = this.state
    return(
      <div>
        <PhoneForm
        onCreate={this.handleCreate} 
        />
        <PhoneInfoList 
        data={this.state.information} 
        onRemove={this.handleRemove}
        />
      </div>
    )
  }
}



export default App;
