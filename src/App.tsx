import {ChangeEvent, useState} from 'react';
import './App.css'
import {Input} from './components/Input';
import {Button} from './components/Button';

function App() {
    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
        ]
    )

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        let newData = {
            message: title
        }
        setMessage([newData, ...message])
        setTitle('')
    }

    return (
        <div className="App">
            <Input  value={title} onChangeInputHandler={onChangeInputHandler}/>
            <Button onClickButtonHandler={onClickButtonHandler} name={'+'}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;