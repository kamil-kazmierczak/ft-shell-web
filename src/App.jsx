import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { HistoryComponent } from 'ft_history_web/HistoryComponent'

const App = () => (
    <div className="container">
        <h1>Container App</h1>
        <HistoryComponent />
    </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
