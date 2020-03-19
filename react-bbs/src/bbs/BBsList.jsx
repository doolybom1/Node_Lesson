import React from 'react';

// 아래 3개 다 동일한 코드
// const BBsList = ({bbsList}) => {
//    const bbsMap = bbsList.map( bbs => <li key={bbs._id}>${bbs.b_title}</li> );
//    return <div>{bbsMap}</div>
// };

// const BBsList = ({bbsList}) => {
//     return bbsList.map( bbs => <li key={bbs._id}>${bbs.b_title}</li> );
//  };

const BBsList = ({bbsList}) => {
    const bbsMap = bbsList.map(bbs=>{
         return(
             <tr key={bbs._id}>
                 <td>{bbs.b_date}</td>
                 <td>{bbs.b_time}</td>
                 <td>{bbs.b_title}</td>
             </tr>
         );
    });
    return(
        <table className='w3-table w3-table-all'>
            <tr>
                <th>날짜</th>
                <th>시간</th>
                <th>제목</th>
            </tr>
            {bbsMap}
        </table>
    );
};



// const BBsList = ({bbsList}) => 
    // bbsList.map( bbs => <li key={bbs._id}>{bbs.b_date}:{bbs.b_time}:{bbs.b_title}</li> );


export default BBsList;