import React, { Component } from 'react'

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //리로드 방지용
        this.props.onCreate(this.state)
        //상태값을 부모에게 전달한다 onCreate를 통해서
        this.setState({
            name:'',
            phone:""
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                placeholder = "이름"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
                />
                <input
                placeholder = "전화번호"
                value={this.state.phone}
                onChange={this.handleChange}
                name="phone"
                />
                <div>
                    {this.state.name}
                    {this.state.phone}
                </div>
                <button type="submit">등록</button>
            </form>
        )
    }
}

export default PhoneForm