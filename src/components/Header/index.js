import React, { Component } from 'react';
import './style.css';
class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:'',
            display: true,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit(e){
        const { isDisPlay } = this.props;
        isDisPlay(this.state.display);
        this.setState({
            display: !this.state.display
        });
        e.preventDefault();
    }
    render() { 
        return (  
            <div className="Header">
                <div className="AppHeader-inner">
                    <a href="#">
                        知乎
                    </a>
                    <ul className="AppHeader-Tabs">
                        <li className="Tabs-item">首页</li>
                        <li className="Tabs-item">发现</li>
                        <li className="Tabs-item">等你来答</li>
                    </ul>
                    <div className="SearchBar">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" className="SearchBar-tool" onChange={this.handleChange}/>
                            <input type="submit" className="SearchBar-button" value="提问" />
                        </form>
                    </div>
                    <div className="AppHeader-userInfo"></div>
                </div>
            </div>
        );
    }
}
 
export default Header;