import React from 'react';
import {render} from 'react-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";

import './styles/index.css';
import App from './js/App';

const client = new ApolloClient({
        uri: 'https://graphql-product-filter-api.herokuapp.com/',
    //uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
});

render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'),
);


