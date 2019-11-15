import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header></Header>
                <div>
                    <Route path="/" exact component={StreamList}></Route>
                    <Route path="/streams/new" exact component={StreamCreate}></Route>
                    <Route path="/streams/edit" exact component={StreamEdit}></Route>
                    <Route path="/streams/delete" exact component={StreamDelete}></Route>
                    <Route path="/streams/show" exact component={StreamShow}></Route>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;