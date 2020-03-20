import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import PhoneInsert from './PhoneInsert';
import PhoneList from './PhoneList';

class PhoneMain extends Component {
    id = 2;
    state = {
        phoneList : [
            {id : 0, name : '반정민', phone : '010-111-1111'},
            {id : 1, name : '정성종', phone : '010-522-2222'}
        ]
    }

    state = {
        my_value : ""
    }

    // componentWillMount() {}
    // componentDidMount() {}
    // componentWillReceiveProps(nextProps) {}
    // shouldComponentUpdate(nextProps, nextState) {}
    // componentWillUpdate(nextProps, nextState) {}
    // componentDidUpdate(prevProps, prevState) {}
    // componentWillUnmount() {}

    my_value_change = arg => {
        this.setState({my_value: arg});
    };



    render() {
        return (
            <React.Fragment>
                <header>
                    <h2>MY PHONE BOOK</h2>
                </header>
                <section>
                    <PhoneInsert my_value={this.state.my_value} my_value_change={this.my_value_change}/>
                    <PhoneList phoneList={this.state.phoneList}
                    my_value={this.state.my_value}
                    name = '홍길동'
                    tel = '12345'
                    addr='대전'
                    />
                </section>
            </React.Fragment>
        );
    }
}

// PhoneMain.propTypes = {

// };

export default PhoneMain;