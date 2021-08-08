import { createContext } from "react";
import AuthAPI from "./auth";

class RootAPI {

    constructor() {
        this.auth = new AuthAPI(this);
        this.loader = {
            show: () => { throw Error("rootapi: loader isn't intiialized") },
            hide: () => { throw Error("rootapi: loader isn't intiialized") }
        }
    }

}

const RootContext = createContext(new RootAPI());
export { RootAPI }
export default RootContext;