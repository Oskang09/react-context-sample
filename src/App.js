import RootAPI, { RootContext } from "./api";
import Home from "./views/home";


function App() {
    const root = new RootAPI();

    return (
        <RootContext.Provider value={root}>
            <Home />
        </RootContext.Provider>
    )
}

export default App;