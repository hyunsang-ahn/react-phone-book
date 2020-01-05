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
    ],
    keyword: ''
  }
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,

    })
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
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
        ? { ...info, ...data }
        //새 객체를 만들어서 기존의 값과 전달받는 data를 덮어씌움
        : info
        //기존의 값을 그대로 유지함.
      )
    })
  }
  render(){
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    )
    return(
      <div>
        <PhoneForm
        onCreate={this.handleCreate} 
        />
        <p>
          <input
            placeholder="검색할 이름을 입력하세요"
            onChange={this.handleChange}
            value={keyword}
            />

        </p>
        <hr/>
        <PhoneInfoList 
        data={filteredList} 
        onRemove={this.handleRemove}
        onUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}



export default App;
