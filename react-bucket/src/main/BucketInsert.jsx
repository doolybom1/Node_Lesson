import React, { Component } from 'react';

class BucketInsert extends Component {
    state = {
        bucket_title: ''
    }

    /*
        현재 컴포넌트에 선언된 state.bucket_title 변수에 사용자의 입력 문자열을 담는 역할을 수행
    */
    handleOnChange = (event)=>{
        this.setState(
            {bucket_title: event.target.value, 
                [event.target.name] : event.target.value}
        );
    }

    handleOnKeyPress = (ev)=>{
        const {bucket_add} = this.props;
        if(ev.key == 'Enter'){
            //alert(this.state.bucket_title);
            bucket_add(this.state.bucket_title)
            this.setState({
                bucket_title: ""
            })
        }
    }

    render() {
        return (
            <section className='w3-container-fluid'>
                <div className='w3-form-control w3-margin'>
                    {/*
                        input box 처리 방법
                        1. 컴포넌트 자체에 input box의 value로 지정할 state 변수
                        2. value 속성에 state 변수를 지정 => input box는 read only 상태로 변한다
                        3. 사용자의 입력을 받아서 state 변수에 저장할 수 있도록 onChange 이벤트 핸들러를 만든다
                    */}
                    <input 
                        value={this.state.bucket_title} 
                        onChange={this.handleOnChange} 
                        onKeyPress={this.handleOnKeyPress}
                        name='bucket_title'
                        className='w3-input w3-border w3-hovar-gray w3-round' 
                        placeholder='버킷에 추가할 내용을 입력하세요 ...'/>
                </div>
            </section>
        );
    }
}

export default BucketInsert;