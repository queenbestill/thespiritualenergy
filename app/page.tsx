const WAITLIST_URL = "https://tally.so/r/o9bZyN";

function CTA({ children = "QUIERO DESCUBRIR QUÉ HAY MÁS ALLÁ" }: { children?: React.ReactNode }) {
  return <a className="button" href={WAITLIST_URL} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">↗</span></a>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#" aria-label="The Spiritual Energy, inicio"><span className="brand-mark">✳</span> the spiritual energy</a>
        <a className="nav-link" href="#comienzo">Acceso anticipado <span>↗</span></a>
      </nav>

      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="dot" /> UNA INVITACIÓN A EXPLORAR</p>
          <h1>¿Sientes que<br />hay <em>algo más?</em></h1>
          <p className="hero-sub">Una nueva forma de explorar lo que significa vivir, conectar y crecer.</p>
          <CTA />
          <p className="micro">Forma parte de la primera etapa.</p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun-halo"><div className="inner-orbit"><div className="sun-core" /></div></div>
          <span className="orbit-dot dot-one" /><span className="orbit-dot dot-two" /><span className="orbit-dot dot-three" />
          <span className="art-note note-one">curiosidad</span><span className="art-note note-two">presencia</span>
          <span className="art-note note-three">conexión</span>
        </div>
        <div className="hero-bottom"><span>01 / UNA NUEVA PERSPECTIVA</span><span>DESLIZA PARA DESCUBRIR ↓</span></div>
      </section>

      <section className="intro section wrap">
        <p className="eyebrow">UNA SENSACIÓN DIFÍCIL DE EXPLICAR</p>
        <div className="intro-grid">
          <h2>Hay preguntas<br />que merecen<br /><em>más espacio.</em></h2>
          <div className="body-copy">
            <p>Cumples, produces, avanzas. Y aun así, hay una parte de ti que siente que algo está cambiando. Que hay preguntas que todavía no te has hecho y experiencias que aún no has descubierto.</p>
            <p>Quizás no sepas exactamente qué estás buscando. Pero sabes que hay algo más.</p>
          </div>
        </div>
      </section>

      <section className="contrast">
        <div className="wrap contrast-inner">
          <p className="eyebrow">UNA PAUSA PARA MIRAR DE OTRA MANERA</p>
          <h2>Estamos conectados.<br /><em>¿Pero estamos conectando?</em></h2>
          <div className="contrast-grid">
            <p>Nos enseñaron a hacer. Llenamos agendas, resolvemos, respondemos, producimos. Y, casi sin darnos cuenta, dejamos de prestar atención a cómo vivimos.</p>
            <p>Tenemos acceso a miles de respuestas, pero cada vez menos tiempo para las preguntas importantes. Y encontrar conexiones que nos nutran no siempre es fácil.</p>
          </div>
          <div className="pullquote"><span>“</span><p>Quizás no estés buscando cambiar tu vida. Quizás estés buscando descubrir otra manera de experimentarla.</p></div>
        </div>
      </section>

      <section className="different section wrap">
        <div className="section-heading">
          <p className="eyebrow">LO QUE ESTAMOS EXPLORANDO</p>
          <h2>Algo diferente<br />está tomando <em>forma.</em></h2>
        </div>
        <div className="different-content">
          <p>Estamos trabajando en una propuesta que explora la espiritualidad, el crecimiento y la conexión desde una mirada abierta y contemporánea.</p>
          <p>Todavía no queremos ponerle una etiqueta. Preferimos empezar por lo importante: escuchar, hacernos preguntas y descubrir qué necesitamos realmente.</p>
          <div className="beliefs">
            <article><span>01</span><h3>Hay más de una manera de crecer.</h3><p>Cada persona tiene su propio camino y su propio ritmo.</p></article>
            <article><span>02</span><h3>La conexión transforma la experiencia.</h3><p>Lo que compartimos puede abrir perspectivas inesperadas.</p></article>
            <article><span>03</span><h3>Lo profundo no tiene prisa.</h3><p>Hay cosas que necesitan espacio para desplegarse.</p></article>
          </div>
        </div>
      </section>

      <section className="discover">
        <div className="wrap discover-inner">
          <div><p className="eyebrow">UNA POSIBILIDAD</p><h2>¿Qué podrías<br /><em>descubrir?</em></h2></div>
          <div className="discover-list">
            {["Conocerte desde otra perspectiva","Explorar más allá de lo convencional","Encontrar nuevas formas de conexión","Dar espacio a lo que realmente importa"].map((item, i) => <div className="discover-item" key={item}><span>0{i + 1}</span><p>{item}</p><span>↗</span></div>)}
          </div>
        </div>
      </section>

      <section className="join section wrap" id="comienzo">
        <div className="join-orb" aria-hidden="true"><span>✳</span></div>
        <div className="join-copy">
          <p className="eyebrow">EL COMIENZO ES COMPARTIDO</p>
          <h2>Sé parte<br />del <em>comienzo.</em></h2>
          <p>No queremos asumir qué necesitas ni decidir por ti qué debería ser esta experiencia. Queremos escucharte y aprender de las personas que sienten curiosidad por explorar algo diferente.</p>
          <div className="steps">
            <div><span>01</span><p>Te unes a la lista de acceso anticipado.</p></div>
            <div><span>02</span><p>Nos cuentas qué estás buscando y qué te gustaría experimentar.</p></div>
            <div><span>03</span><p>Recibes novedades e invitaciones para participar en las primeras etapas.</p></div>
          </div>
          <CTA>QUIERO FORMAR PARTE <span>↗</span></CTA>
          <p className="micro">Quienes formen parte de esta primera lista recibirán una invitación especial durante la etapa inicial.</p>
        </div>
      </section>

      <section className="about">
        <div className="wrap about-inner">
          <p className="eyebrow">UNA NOTA PERSONAL</p>
          <div><h2>Todo empieza<br />con una <em>pregunta.</em></h2>
            <p>Este proyecto nace de una inquietud personal: siento que hay dimensiones de la experiencia humana a las que podríamos dar mucho más espacio.</p>
            <p>Me interesa explorar cómo nos relacionamos con nosotros mismos, con los demás y con el mundo. Me mueven la curiosidad, el aprendizaje continuo, las conversaciones que hacen pensar y las nuevas maneras de vivir.</p>
            <p className="signature">No tengo todas las respuestas. Precisamente por eso, quiero empezar haciendo las preguntas adecuadas.</p>
          </div>
        </div>
      </section>

      <footer className="footer wrap">
        <div><a className="brand" href="#"><span className="brand-mark">✳</span> the spiritual energy</a><p>Una invitación a descubrir.</p></div>
        <div className="footer-cta"><h2>¿Sientes que hay<br /><em>algo más?</em></h2><CTA>QUIERO DESCUBRIRLO <span>↗</span></CTA></div>
        <div className="footer-bottom"><span>© 2026 THE SPIRITUAL ENERGY</span><span>HECHO DESDE LA CURIOSIDAD ✳</span></div>
      </footer>
    </main>
  );
}
