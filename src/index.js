import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AuthorList from "./Author/List_authors/Author-list";
import Author from "./Author/Author/Author";
import AuthorNew from "./Author/New_author/Author-new";
import AuthorRemove from "./Author/Remove_author/Author-remove";
import Booklist from "./Book/List_books/Book-list";
import BookNew from "./Book/New_book/Book-new";
import Book from "./Book/Book/Book";


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/author" exact={true} component={AuthorList} />
            <Route path="/author/:id" exact={true} component={Author} />
            <Route path="/author/search/:name" exact={false} component={Author} />
            <Route path="/new/Author" exact={true} component={AuthorNew} />
            <Route path="/del/Author/:id" exact={true} component={AuthorRemove} />
            <Route path="/Book" exact={true} component={Booklist} />
            <Route path="/new/Book" exact={true} component={BookNew} />
            <Route path="/book/:id" exact={true} component={Book} />
            <Route path="/book/?name=:name" exact={true} component={Book} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
