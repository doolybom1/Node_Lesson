import React from 'react';
import BBsListItem from './BBsListItem'
// 아래 3개 다 동일한 코드
// const BBsList = ({bbsList}) => {
//    const bbsMap = bbsList.map( bbs => <li key={bbs._id}>${bbs.b_title}</li> );
//    return <div>{bbsMap}</div>
// };

// const BBsList = ({bbsList}) => {
//     return bbsList.map( bbs => <li key={bbs._id}>${bbs.b_title}</li> );
//  };

const BBsList = ({bbsList, bbs_main_url}) => {
    const bbsMap = bbsList.map(bbs=>{
         return <BBsListItem bbs={bbs} key={bbs._id} bbs_main_url={bbs_main_url}/>
    });
    return(
        <table className='w3-table w3-table-all'>
            <tr>
                <th>날짜</th>
                <th>시간</th>
                <th colSpan='2'>제목</th>
            </tr>
            {bbsMap}
        </table>
    );
};



// const BBsList = ({bbsList}) => 
    // bbsList.map( bbs => <li key={bbs._id}>{bbs.b_date}:{bbs.b_time}:{bbs.b_title}</li> );


export default BBsList;