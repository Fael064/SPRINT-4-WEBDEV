function Footer({ texto, onClick }) {
  return (
    <footer id="pagina">
      <a className="pagina" href="#" onClick={(e) => { e.preventDefault(); onClick(); }}>
        {texto}
      </a>
    </footer>
  );
}

export default Footer;
