import React, { Component } from 'react';
import TodoItem from "./TodoItem";

/*
    LifeCycle method
    code snippet이 생성하는 method는 16.3 이전에 주로 사용하던 method 16.3 이후에는 일부 method가 변경되거나 소멸된다
    소멸되는 method : 성능상의 이슈를 발생시킬수있는 소지가 있어 소멸하거나 다른 method로 대치하기로 결정되었다


    처음 컴포넌트를 생성하고 start를 했을 때
    1. constructor() 가 실행
    2. componentWillMount()
    3. render()
    4. componentDidMount()
*/
class TodoList extends Component {
    // constructor(props) {
    //     super(props);
        
    // }
    
    // 화면에 리스트를 표시하기 위한 todoList 배열이 변경이 되었으냐를 판단해서 render() 함수를 호출할지 안할지를 알려주는 메서드
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todoList !== nextProps.todoList
        //return true;
    }

    render(){
        const {todoList, onToggle, onDelete} = this.props;
        const todoMaps = todoList.map(({id,text,checked}) => (
                <TodoItem id = {id} text={text} checked={checked} onToggle={onToggle} onDelete={onDelete}/>
        ));
        return (
            <div>
                {todoMaps}
            </div>
        );
    }

    // v17 이후에서는 사용불가 상태
    // componentWillMount() {}

    // v17 이후에서는 사용불가 상태
    // componentDidMount() {}

    // v17 이후에서는 사용불가 상태
    // getDeriverdStateFromProps() 으로 변경
    // componentWillReceiveProps(nextProps) {}

    // v17 이후에서는 사용불가 상태
    // getsnapshotBeforUpdate() 으로 변경
    // componentWillUpdate(nextProps, nextState) {}
    
    // v17 이후에서는 사용불가 상태
    // componentDidUpdate(prevProps, prevState) {}

    componentWillUnmount() {

    }

}
export default TodoList;