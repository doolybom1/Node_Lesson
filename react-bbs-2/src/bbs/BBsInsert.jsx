import React, { Component } from 'react';
import axios from 'axios';

class BBsInsert extends Component {
    state = {
        b_title : ""
    };
    // 그 문자를 b_title에 저장하라
    handleChange = (e)=>{
        this.setState( {...this.state, b_title: e.target.value} );
    }

    bbsAxiosSubmit = (ev)=>{
        ev.preventDefault();
        const {bbs_insert_url} = this.props
        axios.post(bbs_insert_url,{'b_title': this.state.b_title})
        .then(result=>console.log(result))
        .catch(err=>console.log(err));
    };

    // ajax를 이용하여 서버에 데이터 보내기
    bbsInsertSubmit = (ev) => {
        // 기본적으로 수행되는 이벤트를 수행하지 마라
        ev.preventDefault();
        
        const {bbs_insert_url} = this.props
        let data = new FormData();
        data.append('b_title', this.state.b_title);

        fetch(bbs_insert_url, {
            method:'POST',
            headers:{
                Accept : "application/json",
                "Content-Type": "application/json"
            },

            // JSON.stringify : JSON 객체를 Serialize된 문자열로 변환
            // JSON.parse와 반대되는 개념
            // JSON.parse : JSON 형태의 문자열로 수신된 값을 JSON 객체 변환
            body: JSON.stringify({
                b_title: this.state.b_title
            }) 
           // body:data
        })

        // 표준 js에서는 return false를 마지막에 써주면 submit() 이벤트를 중단할 수 있었는데
        // react에서는 아무런 효과를 내지 못한다. 그래서, 이벤트 시작되는 부분에 이벤트 버블링을 방지하는 코드를 넣어주어야 한다
         return false;
    };

    render() {
        return (
            <form onSubmit={this.bbsInsertSubmit} className='w3-container'>
                <div className='w3-col s9 w3-padding'>
                    <input value={this.state.b_title} onChange={this.handleChange} className='w3-input w3-border w3-col-6'/>
                </div>
                <div className='w3-col s3 w3-padding'>
                    <button type='submit' className='w3-button w3-blue w3-col-2'>저장</button>
                </div>
            </form>
        );
    }
}
export default BBsInsert
