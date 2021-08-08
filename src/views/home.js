import { useContext, useEffect, useState } from "react";
import RootContext from "../api";

function Home() {
    const root = useContext(RootContext);
    const [auth, setAuth] = useState(root.auth.login)

    useEffect(() => {
        root.auth.login = auth
    }, [auth]);

    return (
        <div>
            <input
                type="submit"
                onClick={() => setAuth(!auth)}
            />
        </div>
    )
}

export default Home;