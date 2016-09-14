import React,{Component} from 'react';
import ReactDOM from 'react-dom';
const cards = (state, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            let newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date
            })
            return state.concat([newCard])
        default:
            return state || []
    }
}


const store = Redux.createStore(Redux.combineReducers({
    cards

}));

export class App extends React.Component(){
    render(){
        return(
            <div><h1>Hello REACT</h1></div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'))