import React from "react";
import { View } from "react-native"
import { Provider } from "react-redux";
import Navigator from "./navigation";
import store from "./redux/store";

function App() {
    return (
        <Provider store = {store} >
            <View style={{ flex: 1 }}>
                <Navigator />
            </View>
        </Provider>
    );
}

export default App;