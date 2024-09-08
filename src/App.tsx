import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import OperatorTable from "./components/OperatorTable/OperatorTable";
import "./styles/App.scss";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <OperatorTable />
            </div>
        </Provider>
    );
}

export default App;
