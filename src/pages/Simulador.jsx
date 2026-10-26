import CalculadoraModuloAutomatico from '../components/CalculadoraModuloAutomatico';
import { useHistorico } from '../hooks/useHistorico';

function Simulador() {
    const { historico, carregando, erro} = useHistorico();
    return <CalculadoraModuloAutomatico />;
}

export default Simulador;
