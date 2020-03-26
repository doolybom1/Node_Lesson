import React, { Component } from 'react';
import BucketItem from './BucketItem'

class BucketList extends Component {
    render() {
        const {bucketList} = this.props;
        const list = bucketList.map(bucket =>(
                <BucketItem key={bucket.id} bucketItem={bucket}/>
            ));
            /*
            const list1 = bucketList.map(bucket=>{
                return <BucketItem key={bucket.id} bucketItem={bucket}/>
            });
        
            // 기본 함수 코드
            const f1 = function(arg1, arg2){
                return arg1 + arg2;
            };
            
            const f2 = (arg1, arg2)=>{
                return arg1 + arg2;
            };
            
            const f3 = (arg1, arg2)=>{
                arg1 + arg2;
            };*/

        return (
            <section className='w3-container-fluid'>
                <table className='w3-table w3-table-all'>
                    <tr>
                        <th>FLAG</th>
                        <th>추가일자</th>
                        <th>BUCKET</th>
                        <th>완료</th>
                        <th>취소</th>
                    </tr>
                    {list}
                </table>
            </section>
        );
    }
}

export default BucketList;