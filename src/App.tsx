import React from 'react';
import './App.css';
import Router from './shared/Router';
import Layout from './components/layout/Layout';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Layout>
                    <Router />
                </Layout>
            </Provider>
        </div>
    );
}

export default App;
