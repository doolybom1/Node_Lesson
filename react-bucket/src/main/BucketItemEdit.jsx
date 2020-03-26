import Moment from "react-moment";
import React, { Component } from 'react';

class BucketItemEdit extends Component {
    changeEdit = ()=>{

    }

    state = {
        bucket_title : ""
    };

    /*
        view 모드에서 edit 모드로 변경될때 input box에 view 모드에서 보았던 문자열을 state 변수에 담아 주는 부분
    */
    componentDidUpdate(preProps, preState){
    }

    render() {
    const { bucketItem} = this.props;
     <React.Fragment>
            <td>{bucketItem.b_flag_text}</td>
            <td>
            <Moment format="YYYY-MM-DD">{bucketItem.b_start_date}</Moment>
            </td>
            <td onClick={this.changeEdit}>
                <input onChange={this.onChange} value={this.state.b_title} onKeyPress={onKeyPress}/>
            </td>
     </React.Fragment>
    }
}

export default BucketItemEdit;


