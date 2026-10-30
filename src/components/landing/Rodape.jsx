import { integrantes } from '../../data/integrantes';

function Rodape() {
    return (
        <footer className="bg-tertiary px-5 py-[25px] text-center text-xs leading-relaxed text-muted md:py-5 md:text-[0.9rem]">
            <p>© 2026 CloudCore - Todos os direitos reservados. </p>
            <p>{integrantes.map((p) => `${p.nome} | RM: ${p.rm}`).join(' | ')}</p>
        </footer>
    );
}

export default Rodape;