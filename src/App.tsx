import React from 'react';
import './App.css';
import Router from './shared/Router';
import Layout from './components/layout/Layout';

function App() {
    return (
        <div className="App">
            <Layout>
                <Router />
            </Layout>
        </div>
    );
}

export default App;
