import { Navigate } from "react-router-dom";

function RotaPrivada ({ usuarioLogado, children}) {
    if (!usuarioLogado) {
        return <Navigate to='/' replace />;
    }
    return children;
}

export default RotaPrivada;