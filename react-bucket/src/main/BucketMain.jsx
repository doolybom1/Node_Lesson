import React, { Component } from 'react';
import BucketInsert from './BucketInsert'
import BucketList from './BucketList'

class BucketMain extends Component {
    id = 0;
    state = {
        bucketList : [{
            id : 0,
            b_flag : 0,
            b_flag_text : '',
            b_start_date : '2020-03-26',
            b_title : '리액트 정복',
            b_end_date : '',
            b_end_check : false,
            b_cancle : false
        }]
    };

    
    changeFlag = id =>{
        const b_flage = ['☆','★','○','●'];
        this.state.bucketList.map(
            bucket => {
                if(bucket.b_id === id){
                    let flag = ++bucket.b_flag
                    let flagText = b_flage[++flag % 4]
                    this.setState({
                        bucketList : {
                            ...bucket,
                            b_flag_text:flagText,
                            b_flag:flag%4}
                        });
                }
            }
        )
    }
    componentDidMount(){
        const strBucketList = localStorage.bucketList
        if(strBucketList){
            this.setState({
                bucketList : JSON.parse(bucketList)
            });
            this.id = bucketList[bucketList.length]
        }
    }


    componentDidUpdate(preProps, preState){
        const preString = JSON.stringify(preState.bucketList)
        const thisString = JSON.stringify(this.state.bucketList)

        if(preString !== thisString){
            localStorage.bucketList = thisString;
        }
    }
    /*
    bucketList에 항목을 추가하여 전체 컴포넌트에 전파될수 있도록 메서드를 선언

    react 선언적 철학1
    기존의 객체(배열)은 원본을 손상시키지 말자
    => 아래와 같은 기능을 구현하지 마라
        객체 배열에 새로운 항목을 추가 : push()
        객체 배열에서 항목을 제거 : remove()
        객체 배열의 요소중에 어떤 항목변경 할때 : 객체[0] = 새로운 값
    
    => 추가 : 기존객체 + 추가된 항목 생성하여 새로운 객체에 복사
       변경 : 기존객체 변경내용만 변경하여 새로운 객체에 복사
    */

    bucket_add = (b_title)=>{
        const {bucketList} = this.state;
        const date = new Date();
        //const b_start_date = String.format("%s-%02s-%s",date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());

        const bucket = {
            // b_id : ++this.id,
            b_flag: 0,
            b_start_date : date.toString(),
            b_title : b_title,
            b_end_date : '',
            b_end_check : false,
            b_cancle : false
        }
 
        this.setState(
            // id가 ++this.id
            // 나머지 요소가 bucket에서 정의한 형태의 객체를 생성하여 원본의 bucketList에 추가하여 새로운 bucketList를 생성하라
            {bucketList : bucketList.concat( {id:++this.id, ...bucket} )}
        )
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextState.bucketList !== this.state.b_title;
    }

    render() {
        return (
            <div>
                <BucketInsert bucket_add={this.bucket_add}/>
                <BucketList bucketList={this.state.bucketList}/>
            </div>
        );
    }
}

export default BucketMain;