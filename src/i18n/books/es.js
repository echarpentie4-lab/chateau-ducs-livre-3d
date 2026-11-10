// 🇪🇸 Traducción al español de los cinco libros (mismo orden de capítulos que src/data/livres/*.js)
const hint = 'Haz clic en la maqueta para verla más de cerca'
const imprint = 'En Nantes, en casa del Archivero del Patrimonio'

export default {
  // ═════════════════════════ EL CASTILLO ═════════════════════════
  chateau: {
    meta: {
      shelfTitle: 'El Castillo de los Duques de Bretaña',
      coverKicker: 'Historia del',
      coverTitle: 'Castillo de los Duques de Bretaña',
      spineTitle: 'Castillo de los Duques de Bretaña',
      titlePageHeading: 'Patrimonio de Nantes',
      titlePageTitle: 'El Castillo de los Duques de Bretaña',
      titlePageSubtitle: 'Mil años de historia a orillas del Loira',
      titlePageImprint: 'En Nantes, en casa del Archivero del Castillo',
      runningHead: 'El Castillo de los Duques de Bretaña',
    },
    chapters: [
      {
        title: 'A orillas del río',
        subtitle: 'De la Antigüedad al siglo III',
        content: `Hace mucho tiempo, en el lugar donde el río Erdre se une al Loira, unos hombres se instalaron en una pequeña colina que domina las marismas. El sitio era perfecto: el agua lo protegía por varios lados y los barcos podían atracar con facilidad. En la época romana, aquí creció una ciudad. Lleva el nombre del pueblo galo que la habitaba, los namnetes: es el nacimiento de Nantes. Hacia el siglo III, para protegerse de los ataques, la ciudad se rodea de una gran muralla de piedra. En un rincón de esa muralla, justo a orillas del río, los guardias pueden vigilar todos los barcos que llegan. Precisamente en ese lugar, siglos más tarde, nacerá un castillo. Cada época construirá sobre las huellas de la anterior, como quien escribe una nueva página en un viejo libro.`,
        caption: 'El castillo a orillas del Loira — postal antigua',
      },
      {
        title: 'Los vikingos',
        subtitle: '843 – 937',
        content: `En el año 843, unos barcos extraños remontan el Loira: son los drakares de los vikingos, guerreros llegados del norte de Europa. Atacan Nantes por sorpresa, saquean la ciudad y hasta se ensañan con los habitantes refugiados en la catedral. Durante casi cien años, los vikingos vuelven una y otra vez y terminan incluso por instalarse en la región. Los nanteses viven con miedo. Entonces llega un valiente jefe bretón, Alano Barbatorta, que había crecido en el exilio en Inglaterra. En 937 regresa a Bretaña y expulsa a los vikingos de Nantes. Se cuenta que tuvo que abrirse paso entre las zarzas para llegar a la catedral abandonada. Hace de Nantes su capital y refuerza las defensas de la ciudad, sobre todo del lado del río, por donde siempre habían llegado los peligros.`,
        caption: 'Los vikingos varan sus drakares en la orilla',
      },
      {
        title: 'La Torre Nueva',
        subtitle: 'Hacia 1207 – siglo XIV',
        content: `Hacia 1207, el señor Guy de Thouars, que gobierna Bretaña en nombre de su hija, manda construir una nueva fortaleza a orillas del Loira, en el rincón de la antigua muralla romana. La llaman la «Torre Nueva», para distinguirla de un castillo más antiguo situado en el centro de la ciudad, el Bouffay. Con los años, los duques de Bretaña, es decir, los príncipes que gobiernan la región, la amplían y prefieren vivir en ella. En el siglo XIV, Bretaña atraviesa una larga guerra entre dos familias que quieren gobernar el ducado. Gana la familia de Montfort. El nuevo duque, Juan IV, refuerza el castillo y manda construir una gran torre, el Viejo Torreón. Todavía hoy pueden verse sus restos en el patio del castillo.`,
        caption: 'Plano del castillo de Nantes en 1600',
      },
      {
        title: 'Francisco II, el duque constructor',
        subtitle: '1458 – 1466',
        content: `En 1458, Francisco II se convierte en duque de Bretaña. En aquella época, Bretaña es casi un país independiente: tiene su propia moneda, sus propias leyes y sus embajadores. Pero el rey de Francia, su poderoso vecino, querría controlarla. En 1466, Francisco II decide construir un castillo más grande, más sólido y más hermoso. Visto desde fuera, es una verdadera fortaleza: altas murallas, siete grandes torres y fosos llenos con el agua del Loira. Pero una vez cruzado el puente levadizo, se descubre en el patio un auténtico palacio, con grandes ventanas y hermosas piedras blancas llamadas tuffeau. Allí vive la corte del duque. Se celebran fiestas, banquetes y recepciones. Este castillo muestra a todos la riqueza y el poder de Bretaña.`,
        caption: 'Las torres de la entrada y el puente',
      },
      {
        title: 'La fortaleza de Francisco II',
        subtitle: 'Lámina desplegable',
        content: `Siete grandes torres, altas cortinas y fosos llenos por el Loira: visto desde fuera, es una fortaleza. Pero tras el puente levadizo se esconde un palacio de tuffeau blanco, donde vive la corte del duque.`,
        hint,
        info: `Construido a partir de 1466 por Francisco II, el castillo combina una fortaleza militar (torres, cortinas, fosos) y un palacio renacentista (el Grand Logis, con buhardillas talladas como encaje).`,
      },
      {
        title: 'Ana de Bretaña',
        subtitle: '1477 – 1491',
        content: `El 25 de enero de 1477 nace en el castillo una niña: Ana, la hija del duque Francisco II. Como su padre no tiene hijos varones, ella heredará un día Bretaña. Muy pronto, los príncipes de toda Europa quieren casarse con ella, ¡porque casarse con Ana significa obtener Bretaña! Pero el rey de Francia quiere apoderarse del ducado. Estalla la guerra. En 1488, el ejército bretón es derrotado en Saint-Aubin-du-Cormier. Pocas semanas después, Francisco II muere. Ana solo tiene 11 años y ya es duquesa de Bretaña. Intenta resistir, pero las tropas francesas toman Nantes y su castillo en 1491. Para proteger su país, Ana no tiene elección: en diciembre de 1491 se casa con el rey de Francia, Carlos VIII. La joven duquesa se convierte en reina de Francia.`,
        caption: 'Ana de Bretaña, grabado antiguo',
      },
      {
        title: 'Dos veces reina',
        subtitle: '1498 – 1514',
        content: `En 1498, el rey Carlos VIII muere tras golpearse la cabeza contra una puerta baja del castillo de Amboise. Ana regresa a Bretaña y vuelve a gobernar su ducado. Pero la historia no ha terminado: el 8 de enero de 1499 se casa con el nuevo rey, Luis XII, en la capilla del castillo de Nantes. ¡Es así la única mujer de la historia que ha sido dos veces reina de Francia! Ana ama su castillo. Manda terminar las obras empezadas por su padre. Hace decorar el Grand Logis, el edificio principal, con esculturas de piedra finas como el encaje, y construir una torre de elegantes balcones, la torre de la Corona de Oro. Cuando muere en 1514, su corazón se coloca en un precioso cofre de oro y se lleva a Nantes, junto a sus padres.`,
        caption: 'Ana de Bretaña, dos veces reina de Francia',
      },
      {
        title: 'Bretaña se vuelve francesa',
        subtitle: '1532 – 1598',
        content: `Tras la muerte de Ana, su hija Claudia se casa con el futuro rey Francisco I. Bretaña ya no tiene duque propio. En 1532 se une oficialmente a Francia, conservando ciertos derechos particulares. El castillo ya no pertenece a los duques, sino al rey, que coloca en él a un gobernador. Unos años más tarde, Francia se desgarra en las guerras de religión entre católicos y protestantes. El gobernador de Bretaña, el duque de Mercœur, se niega a obedecer al rey Enrique IV. Transforma el castillo en ciudadela y añade grandes bastiones, muros en punta que resisten mejor las balas de cañón. En 1598, Mercœur por fin se somete y Enrique IV viene a Nantes. Impresionado por las murallas, habría exclamado: «¡Los duques de Bretaña no eran unos cualquiera!». Ese mismo año firma en Nantes el edicto de Nantes, que devuelve la paz entre católicos y protestantes.`,
        caption: 'Las armas de Francia y de Bretaña unidas bajo la corona',
      },
      {
        title: 'Una prisión para los enemigos del rey',
        subtitle: '1626 – 1661',
        content: `En el siglo XVII, el castillo ya no es una casa de príncipes. Con sus gruesos muros y sus soldados, se convierte en prisión para los personajes importantes que han disgustado al rey. En 1626 encierran allí al conde de Chalais: lo acusan de conspirar contra el poderoso cardenal Richelieu, y será condenado a muerte. En 1654 le toca al cardenal de Retz, enemigo del ministro Mazarino. ¡Pero él no piensa quedarse encerrado! Una tarde de agosto se escapa deslizándose por una cuerda desde lo alto de las murallas y huye a caballo. Se cae y se hiere el hombro, pero logra escapar. En 1661, el joven rey Luis XIV viene a Nantes. Allí manda arrestar a su ministro de finanzas, Nicolas Fouquet, por d’Artagnan, el verdadero mosquetero que inspiró la célebre novela Los tres mosqueteros.`,
        caption: 'Bajo las bóvedas del castillo',
      },
      {
        title: 'Cuartel, explosión y museo',
        subtitle: '1800 – 1924',
        content: `Poco a poco, el castillo se convierte en cuartel: allí viven soldados y se almacenan armas y pólvora. Es peligroso… ¡El 25 de mayo de 1800, la pólvora guardada en la torre de los Españoles explota! La torre queda totalmente destruida, igual que la capilla donde se había casado Ana de Bretaña. En 1832, el castillo recibe a una última prisionera célebre: la duquesa de Berry, detenida tras pasar largas horas escondida detrás de una chimenea en una casa de Nantes. En el siglo XIX se comprende que el castillo es un tesoro del pasado, y se protege como monumento histórico. En 1915 la ciudad de Nantes lo compra, y en 1924 abre allí un museo. Un poco más tarde se cubren los brazos del Loira que atravesaban la ciudad: el castillo, que siempre había tenido los pies en el agua, queda en pleno centro urbano.`,
        caption: 'La explosión de la torre de los Españoles, 25 de mayo de 1800',
      },
      {
        title: 'El castillo hoy',
        subtitle: 'Desde 1990',
        content: `A principios de los años noventa, la ciudad emprende una inmensa obra para restaurar el castillo. Durante más de quince años, arquitectos, canteros e historiadores le devuelven su esplendor: se limpian las piedras blancas y se reparan los tejados y las esculturas. En 2007 el castillo reabre sus puertas, más hermoso que nunca. Hoy alberga el museo de historia de Nantes, con 32 salas que cuentan la vida de la ciudad, desde los duques de Bretaña hasta nuestros días. Cualquiera puede cruzar el patio gratis y pasear por las murallas para admirar la ciudad. Fortaleza contra los enemigos, palacio de los duques, casa de una reina, prisión, cuartel y luego museo: en mil años, el castillo ha tenido muchas vidas. Pero sigue ahí, orgulloso y blanco, velando por Nantes.`,
        caption: 'El castillo en el corazón de la ciudad',
      },
    ],
  },

  // ═════════════════════════ LIEU UNIQUE ═════════════════════════
  lieuUnique: {
    meta: {
      shelfTitle: 'El Lieu Unique',
      coverKicker: 'Historia del',
      coverTitle: 'Lieu Unique',
      spineTitle: 'El Lieu Unique — antigua fábrica LU',
      titlePageHeading: 'Patrimonio de Nantes',
      titlePageTitle: 'El Lieu Unique',
      titlePageSubtitle: 'De la galletera LU al templo de la cultura',
      titlePageImprint: imprint,
      runningHead: 'El Lieu Unique',
    },
    chapters: [
      {
        title: 'Una pequeña pastelería nantesa',
        subtitle: '1846',
        content: `En 1846, en Nantes, un joven pastelero llegado de Lorena, Jean-Romain Lefèvre, abre una tienda en la calle Boileau con su esposa, Pauline-Isabelle Utile. Juntos fabrican galletas y pasteles secos que venden a los nanteses. La pareja tiene la idea de unir sus dos apellidos: Lefèvre y Utile. Las iniciales de estos dos nombres forman dos letras que se harán famosas en toda Francia: L y U, «LU». En aquella época, Nantes es un gran puerto. El azúcar llega de las Antillas, la mantequilla y la harina vienen de los campos del oeste: todo está reunido para hacer buenas galletas. La pequeña tienda funciona bien y los clientes vuelven. Pero nadie sospecha todavía que esta pastelería de barrio se convertirá en una de las mayores fábricas de galletas de Europa y dará nombre a un lugar único.`,
        caption: 'Las obreras y obreros de la galletera LU',
      },
      {
        title: 'La invención del Petit-Beurre',
        subtitle: '1886',
        content: `En 1886, su hijo, Louis Lefèvre-Utile, inventa una galleta que dará la vuelta al mundo: el Petit-Beurre. Es sencilla, cuadrada, dorada y crujiente. Pero su forma esconde un pequeño secreto divertido. Se dice que sus 4 esquinas representan las 4 estaciones del año, que sus 52 dientes recuerdan las 52 semanas y que sus 24 agujeritos corresponden a las 24 horas del día. ¡Una galleta para todos los días del año! Louis es también un hombre moderno y apasionado. Le encanta la fotografía y comprende antes que nadie la importancia de la publicidad. Decía que, para abrir el apetito, nada mejor que seducir la mirada. Por eso recurre a grandes artistas, como el pintor Alfons Mucha, para dibujar magníficos carteles y cajas de metal decoradas que todavía hoy se coleccionan.`,
        caption: 'Una joven obrera ante el horno de galletas',
      },
      {
        title: 'Una fábrica en el corazón de la ciudad',
        subtitle: 'Principios del siglo XX',
        content: `Para fabricar cada vez más galletas, LU se instala en una gran fábrica junto al agua, a lo largo del canal Saint-Félix, justo enfrente del castillo de los duques de Bretaña. Los barcos y los trenes traen las materias primas y se van cargados de cajas de galletas para toda Francia. Cientos y luego miles de obreros y obreras trabajan allí. En el barrio flota en el aire un delicioso olor a galleta caliente. A principios del siglo XX, el arquitecto Auguste Bluysen diseña dos torres magníficas para enmarcar la entrada de la fábrica. Están cubiertas de mosaicos y esculturas y coronadas por cúpulas, como verdaderos faros. Estas torres no sirven para gran cosa… ¡salvo para mostrar a todos el poder de la marca! Son anuncios gigantes, visibles desde lejos, que hacen el orgullo de Nantes.`,
        caption: 'El taller de empaquetado de galletas',
      },
      {
        title: 'La galletera en el siglo XX',
        subtitle: 'Siglo XX',
        content: `Durante decenas de años, la fábrica LU funciona a pleno rendimiento. Las máquinas modernas sustituyen poco a poco el trabajo manual y las galletas salen por miles cada día. El Petit-Beurre, pero también otras galletas, se convierten en meriendas imprescindibles para los niños de Francia. Pero la fábrica atraviesa también momentos difíciles. Durante la Segunda Guerra Mundial, Nantes sufre duros bombardeos en 1943 y el barrio padece. Más tarde, la empresa cambia de dueños y crece todavía más. A lo largo del siglo XX desaparece una de las dos hermosas torres: solo quedará una, la que aún podemos admirar hoy. Poco a poco, la fábrica se vuelve demasiado pequeña y poco adecuada. El centro de la ciudad ya no es un buen lugar para fabricar galletas en grandes cantidades, con camiones que deben circular por calles estrechas.`,
        caption: 'La fábrica y sus dos torres junto al agua',
      },
      {
        title: 'La partida y el silencio',
        subtitle: '1986',
        content: `En 1986, la producción abandona el centro de Nantes. Las galletas LU se fabrican ahora en una nueva fábrica en el campo, al sur de la ciudad. Los grandes edificios junto al canal quedan vacíos. Las máquinas se callan, los obreros se van, el olor a galleta desaparece. Durante varios años, la antigua fábrica queda abandonada. Los cristales se rompen, el polvo se acumula y muchos se preguntan qué se podrá hacer con estas inmensas naves. Algunos incluso piensan en derribarlas. Pero los artistas ven en este lugar un formidable terreno de juego. Compañías de teatro se instalan allí para ensayar, construir sus decorados e inventar sus espectáculos. Entre ellas, una compañía nantesa que se hará muy famosa: Royal de Luxe, conocida por sus gigantes que caminan por las calles.`,
        caption: 'La fábrica Lefèvre-Utile, postal antigua',
      },
      {
        title: 'Una nueva idea',
        subtitle: 'Años noventa',
        content: `En los años noventa, la ciudad de Nantes decide apostar por la cultura para reinventarse. Un hombre, Jean Blaise, impulsa un proyecto audaz: transformar la antigua galletera en un gran lugar abierto a todas las artes. Para ello recurre a un arquitecto original, Patrick Bouchain. Este no quiere borrar el pasado de la fábrica. ¡Al contrario! Conserva los muros de ladrillo, las vigas metálicas, los grandes volúmenes y las huellas del trabajo de los obreros. Los repara, los limpia y los hace acogedores, sin reconstruirlo todo. La idea es sencilla: hacer convivir el pasado y el presente. Y como el lugar debe conservar el recuerdo de LU, se le busca un nombre ingenioso con esas dos célebres letras: será el «lieu unique», el lugar único. Al mismo tiempo, la última torre LU se restaura con sus decoraciones y colores originales.`,
        hint,
        info: `Diseñada por Auguste Bluysen, la torre LU enmarcaba con su gemela la entrada de la galletera. Restaurada para la apertura del Lieu Unique, ha recuperado sus mosaicos, su cúpula y su linterna.`,
      },
      {
        title: 'La apertura para el año 2000',
        subtitle: 'Diciembre de 1999',
        content: `A finales de diciembre de 1999, mientras el mundo entero se prepara para celebrar la llegada del año 2000, el Lieu Unique abre sus puertas con una gran fiesta. Los nanteses descubren su antigua fábrica transformada. Donde antes se fabricaban galletas, ahora hay salas de espectáculos, espacios de exposición, un bar, un restaurante, una librería e incluso una guardería para los más pequeños. Para marcar el momento se imagina un proyecto sorprendente: el «Desván del siglo». Los habitantes pueden depositar objetos personales, cartas o recuerdos en cajas cerradas. Estas cajas se guardan en un gran muro y no se abrirán hasta 2100, ¡cien años después! Es una especie de mensaje enviado a los nanteses del futuro, que descubrirán cómo se vivía a finales del siglo XX.`,
        caption: 'La cúpula de la torre LU en obras',
      },
      {
        title: 'Un lugar para todas las artes',
        subtitle: 'Hoy',
        content: `Hoy, el Lieu Unique es una «escena nacional», es decir, un gran centro cultural apoyado por el Estado y la ciudad. Se viene por todo tipo de razones. Se pueden ver obras de teatro, espectáculos de danza y de circo, escuchar conciertos, descubrir exposiciones de arte contemporáneo, asistir a debates o conocer a escritores. Artistas del mundo entero vienen a trabajar y a crear sus obras. Pero el Lieu Unique no está reservado a los amantes del arte. Muchos nanteses vienen simplemente a tomar algo en el bar, a comer, a hojear un libro o a reunirse con amigos. Es un lugar vivo, donde se cruzan estudiantes, familias, artistas y curiosos. Es justamente esta mezcla la que hace que el Lieu Unique sea… ¡único!`,
        caption: 'El patio de la fábrica, en tiempos de las cajas de galletas',
      },
      {
        title: 'La torre LU y su gyrorama',
        subtitle: 'Desde 2004',
        content: `La torre LU, única superviviente de las dos torres de la fábrica, ha recuperado todo su esplendor. Con sus mosaicos, sus esculturas y su cúpula, se alza orgullosa frente al castillo de los duques de Bretaña. ¡Pero esconde una sorpresa! En 2004 se abre al público con una curiosa máquina instalada en lo más alto: el gyrorama. Es una plataforma que se hace girar con una manivela a lo largo de las ventanas de la cúpula, como en una novela de Julio Verne. A bordo, a unos 35 metros de altura, se descubre una vista de toda la ciudad: el castillo, la catedral, el Loira y los tejados de Nantes. Dentro de la torre también se pueden admirar fotografías tomadas por el propio Louis Lefèvre-Utile, el inventor del Petit-Beurre.`,
        caption: 'Maqueta de la fábrica LU y sus dos torres',
      },
      {
        title: 'Un lugar, dos vidas',
        subtitle: 'Ayer y mañana',
        content: `La historia del Lieu Unique demuestra que un edificio puede tener varias vidas. Durante más de un siglo alimentó a generaciones de niños con sus galletas. Hoy alimenta su curiosidad con espectáculos, obras y encuentros. En lugar de destruir sus viejas fábricas, Nantes eligió transformarlas y ofrecerles un nuevo futuro. El Lieu Unique abrió el camino a otros proyectos en la ciudad, como las Máquinas de la Isla en los antiguos astilleros. Cuando pases delante de la torre LU, levanta la vista y piensa en la pequeña pastelería de la calle Boileau, en el inventor del Petit-Beurre, en los obreros de la fábrica y en los artistas que la despertaron. Y quizá en 2100 tus bisnietos abran las cajas del Desván del siglo para descubrir nuestra época.`,
        caption: 'La torre LU hoy',
      },
    ],
  },

  // ═════════════════════════ PASSAGE POMMERAYE ═════════════════════════
  pommeraye: {
    meta: {
      shelfTitle: 'El Pasaje Pommeraye',
      coverKicker: 'Historia del',
      coverTitle: 'Pasaje Pommeraye',
      spineTitle: 'El Pasaje Pommeraye',
      titlePageHeading: 'Patrimonio de Nantes',
      titlePageTitle: 'El Pasaje Pommeraye',
      titlePageSubtitle: 'Una galería de cristal y de sueños en el corazón de Nantes',
      titlePageImprint: imprint,
      runningHead: 'El Pasaje Pommeraye',
    },
    chapters: [
      {
        title: 'Nantes, ciudad rica y elegante',
        subtitle: 'Principios del siglo XIX',
        content: `A principios del siglo XIX, Nantes es una ciudad rica. Su puerto, uno de los más activos de Francia, hace la fortuna de numerosos comerciantes y armadores. Una parte de esa riqueza procede de la trata de esclavos y del comercio con las colonias, una página oscura de la historia de la ciudad. En el elegante barrio que rodea el teatro Graslin se construyen hermosos edificios de piedra blanca, con balcones de hierro forjado. Las calles están animadas: la gente pasea, hace compras y se luce con trajes a la moda. Pero surge un problema: el barrio está construido sobre una pendiente muy empinada. Entre la calle de la Fosse, abajo junto al río, y el barrio Graslin, arriba, hay que subir y bajar calles estrechas y escarpadas, a menudo embarradas cuando llueve.`,
        caption: 'La galería y su gran cubierta de cristal',
      },
      {
        title: 'La moda de los pasajes cubiertos',
        subtitle: '1840',
        content: `En París causa furor una novedad: los pasajes cubiertos. Son calles interiores protegidas por un techo de cristal y bordeadas de tiendas. Se puede pasear por ellas al abrigo de la lluvia, el viento y el barro, admirando los escaparates. ¡Son los antepasados de nuestros centros comerciales! Un notario nantés, Louis Pommeraye, tiene entonces una idea ambiciosa: construir un pasaje cubierto en Nantes. No solo quiere un lugar de comercio. También quiere unir la parte baja y la parte alta del barrio, entre la calle de la Fosse y la calle Santeuil, para facilitar la vida a los paseantes. Se asocia con otro inversor y con dos arquitectos, Jean-Baptiste Buron e Hippolyte Durand-Gasselin, para llevar a cabo este audaz proyecto. Las obras comienzan a finales de 1840.`,
        caption: 'Las estatuas del pasaje',
      },
      {
        title: 'Un desafío de arquitectos',
        subtitle: '1840 – 1843',
        content: `Construir este pasaje no es nada sencillo. Entre sus dos entradas hay más de 9 metros de desnivel, ¡el equivalente a un edificio de tres plantas! ¿Cómo hacer una galería agradable en un terreno tan empinado? Los arquitectos encuentran una solución ingeniosa: construyen el pasaje en varios niveles. En el centro, una gran escalera une los pisos y se convierte en la pieza maestra del lugar. Galerías con balcones rodean este gran espacio, y un inmenso techo de cristal y metal deja entrar la luz del día. Para la época es una proeza técnica. El metal y el cristal son materiales modernos que apenas empiezan a usarse en los grandes edificios. Los obreros trabajan durante casi tres años para dar vida a este proyecto fuera de lo común.`,
        caption: 'La gran escalera, dibujo a tinta',
      },
      {
        title: 'La inauguración en 1843',
        subtitle: '4 de julio de 1843',
        content: `El 4 de julio de 1843 se inaugura el pasaje Pommeraye. Los nanteses descubren maravillados este lugar que no se parece a ningún otro. Bajo la cubierta de cristal, la luz cae suavemente sobre las tiendas, las escaleras y las balaustradas. Los comerciantes se instalan: hay sombrereros, modistas, joyeros, vendedores de juguetes, de telas o de perfumes. Es el lugar de moda, donde se viene a pasear el domingo con la mejor ropa. Pero para Louis Pommeraye la fiesta tiene un sabor amargo. La obra ha costado mucho más de lo previsto y, al principio, las tiendas no dan suficiente dinero. El notario pierde una gran parte de su fortuna. Ha construido una obra maestra, pero su sueño casi lo arruina. Sin embargo, su nombre quedará para siempre unido a este lugar.`,
        caption: 'El pasaje en el siglo XIX, litografía',
      },
      {
        title: 'Un palacio de esculturas',
        subtitle: 'Las esculturas de Debay',
        content: `Lo que hace tan especial al pasaje Pommeraye es su decoración. El escultor Jean-Baptiste Debay instaló en él numerosas estatuas. En los balcones de la galería central, unos niños esculpidos parecen velar por los paseantes. A lo largo de los muros, varios personajes representan las artes, las ciencias, el comercio y la industria, todo lo que enorgullecía a la ciudad en el siglo XIX. Por todas partes se descubren detalles: medallones, cabezas esculpidas, guirnaldas, columnas. Las barandillas y los antepechos son de hierro fundido, adornados con delicados motivos. Por la noche, las lámparas de gas iluminaban el pasaje y le daban un ambiente misterioso. Al levantar la vista, al bajar las escaleras, al mirar en los rincones, se tiene la impresión de explorar un pequeño palacio lleno de secretos, donde cada visita permite descubrir un nuevo detalle.`,
        caption: 'La galería del Reloj',
      },
      {
        title: 'Un lugar que atraviesa el tiempo',
        subtitle: '1976',
        content: `Pasan los años, pero el pasaje Pommeraye sigue siendo un lugar querido por los nanteses. Las tiendas cambian: los sombrereros y las modistas dejan su sitio a otros comercios, al ritmo de las modas. El pasaje sobrevive a las guerras, sobre todo a los bombardeos que golpean duramente a Nantes durante la Segunda Guerra Mundial. Poco a poco se comprende que es un verdadero tesoro del patrimonio. En 1976 se declara monumento histórico, lo que significa que está protegido y ya no puede modificarse sin autorización. Es un reconocimiento importante. De todos los pasajes cubiertos construidos en Francia en el siglo XIX, muy pocos son tan originales. Con sus niveles, su gran escalera y sus esculturas, el pasaje Pommeraye está considerado uno de los pasajes cubiertos más bellos de Europa.`,
        hint,
        info: `Inaugurado el 4 de julio de 1843, el pasaje Pommeraye une dos calles separadas por más de 9 metros de desnivel: de ahí su célebre gran escalera, rodeada de galerías con balcones y estatuas y coronada por una cubierta de cristal.`,
      },
      {
        title: 'El pasaje en el cine',
        subtitle: 'Jacques Demy',
        content: `El pasaje Pommeraye también ha inspirado a los artistas, en particular a un gran cineasta nantés: Jacques Demy. De niño, Demy creció en Nantes y le encantaba este pasaje. Ya convertido en director, lo filmó en varias de sus películas. En «Lola», estrenada en 1961, el pasaje sirve de decorado a escenas importantes. También aparece en «Los paraguas de Cherburgo» y en «Une chambre en ville», una película que transcurre por completo en Nantes. Más tarde, la esposa de Jacques Demy, la directora Agnès Varda, contó la infancia de su marido en una película titulada «Jacquot de Nantes», donde el pasaje vuelve a estar presente. Gracias al cine, espectadores de todo el mundo descubrieron este lugar mágico. Aún hoy, fotógrafos y directores vienen a buscar el ambiente tan particular de sus escaleras y de su cubierta de cristal.`,
        caption: 'La gran escalera, postal antigua',
      },
      {
        title: 'Una gran renovación',
        subtitle: 'La restauración',
        content: `Con el tiempo, la piedra se ensucia, el metal se oxida y la cubierta de cristal deja pasar el agua. Para salvar el pasaje se llevan a cabo importantes obras de restauración. Las esculturas se limpian con cuidado, una por una, para recuperar su blancura. Los elementos de hierro fundido se reparan y se vuelven a pintar, y la cubierta de cristal se pone a punto para dejar entrar de nuevo toda la luz. Los artesanos especializados trabajan como cirujanos: hay que reparar sin dañar y respetar el aspecto original. Durante las obras, el pasaje suele seguir viviendo, con sus comerciantes y visitantes. Este tipo de obra es cara y exige mucha paciencia. Pero el resultado merece la pena: el pasaje Pommeraye recupera el brillo que tenía en tiempos de su inauguración, para gran alegría de los paseantes.`,
        caption: 'La galería de las tiendas',
      },
      {
        title: 'El pasaje hoy',
        subtitle: 'Hoy',
        content: `Hoy, el pasaje Pommeraye es a la vez un lugar de compras y un monumento que se visita. Hay tiendas de moda, de decoración, de regalos, chocolateros y creadores. Sigue siendo igual de práctico para pasar de la parte baja a la parte alta del barrio, entre la calle de la Fosse y la calle Crébillon, una de las calles comerciales más animadas de Nantes. Cada día lo atraviesan miles de personas: vecinos con prisa, turistas maravillados, familias que se hacen fotos en la gran escalera. El pasaje forma parte del recorrido del «Voyage à Nantes», la línea verde pintada en el suelo que guía a los visitantes por los lugares más bellos de la ciudad. Para muchos turistas, es una de las etapas más memorables de su descubrimiento de Nantes.`,
        caption: 'El arco esculpido y su cubierta de cristal',
      },
      {
        title: 'Un tesoro escondido en el corazón de la ciudad',
        subtitle: 'Ayer y mañana',
        content: `El pasaje Pommeraye cuenta una bonita historia: la de un hombre que se atrevió con un proyecto loco, aunque le costara su fortuna. Transformó un problema, una pendiente demasiado empinada, en una obra de arte por la que encanta pasear. Casi dos siglos después, su sueño sigue vivo. Las esculturas siguen velando por los paseantes, la luz sigue atravesando la gran cubierta de cristal y las escaleras siguen uniendo la parte baja y la parte alta de la ciudad. La próxima vez que pases por allí, tómate tiempo para detenerte. Levanta la vista hacia las estatuas, observa los detalles de las balaustradas, imagina a las damas con largos vestidos y a los caballeros con sombrero de copa que paseaban por allí en 1843. Verás: el pasaje Pommeraye no es solo un atajo, es un viaje en el tiempo.`,
        caption: 'El pasaje Pommeraye, postal antigua',
      },
    ],
  },

  // ═════════════════════════ LAS MÁQUINAS DE LA ISLA ═════════════════════════
  machines: {
    meta: {
      shelfTitle: 'Las Máquinas de la Isla',
      coverKicker: 'Historia de las',
      coverTitle: 'Máquinas de la Isla',
      spineTitle: 'Las Máquinas de la Isla',
      titlePageHeading: 'Patrimonio de Nantes',
      titlePageTitle: 'Las Máquinas de la Isla',
      titlePageSubtitle: 'Cuando los sueños de Julio Verne cobran vida en Nantes',
      titlePageImprint: imprint,
      runningHead: 'Las Máquinas de la Isla',
    },
    chapters: [
      {
        title: 'Una isla de barcos',
        subtitle: 'Siglo XX',
        content: `En medio del Loira, en Nantes, hay una gran isla. Durante más de un siglo, una parte de esta isla estuvo ocupada por astilleros, es decir, fábricas donde se construían barcos. Miles de obreros trabajaban allí: soldadores, carpinteros, caldereros, pintores… Fabricaban inmensos navíos, cargueros, transatlánticos e incluso submarinos. El ruido de los martillos y de las máquinas resonaba día y noche. Las grandes grúas se alzaban sobre el río, y cada botadura de un nuevo barco era una fiesta para la ciudad. Los astilleros eran el orgullo y la riqueza de Nantes. Pero a partir de los años setenta, la construcción naval atraviesa una crisis. Los pedidos disminuyen, la competencia de otros países se vuelve muy fuerte y el futuro de los astilleros se vuelve incierto.`,
        caption: 'Vista panorámica del puerto de Nantes, postal antigua',
      },
      {
        title: 'El fin de los astilleros',
        subtitle: '1987',
        content: `En 1987, el último astillero de Nantes cierra sus puertas. Es un momento muy triste para la ciudad. Miles de personas pierden su trabajo, y toda una parte de la historia nantesa parece detenerse. En la isla, las inmensas naves donde se construían los barcos quedan vacías y silenciosas. Las grúas ya no se mueven y la hierba crece entre los raíles. Durante años, este gran terreno queda algo olvidado. Pero la ciudad de Nantes no quiere abandonar este lugar. Lanza un gran proyecto para transformar la isla: construir nuevos barrios, parques, escuelas y oficinas, y conservar la memoria del pasado obrero. También hace falta encontrar una idea fuerte, capaz de devolver la vida a las antiguas naves y de atraer de nuevo a los habitantes a este lugar cargado de historia.`,
        caption: 'Los talleres de los astilleros',
      },
      {
        title: 'Dos inventores de sueños',
        subtitle: 'Los creadores',
        content: `Esa idea vendrá de dos artistas apasionados: François Delarozière y Pierre Orefice. François Delarozière es constructor de máquinas de espectáculo. Con la compañía de teatro callejero Royal de Luxe ya ha inventado gigantes articulados que caminan por las calles de las ciudades y maravillan a multitudes inmensas. Pierre Orefice, por su parte, sabe montar y organizar grandes proyectos artísticos. Juntos imaginan un lugar increíble: un taller donde se construirían máquinas gigantes con forma de animales, a las que el público podría subirse. Su proyecto se inspira en dos grandes soñadores. El primero es Julio Verne, el escritor nacido en Nantes en 1828, que imaginó viajes extraordinarios al fondo de los mares y alrededor del mundo. El segundo es Leonardo da Vinci, el genio del Renacimiento, que dibujaba máquinas voladoras y mecanismos asombrosos.`,
        caption: 'François Delarozière y Pierre Orefice ante la Garza',
      },
      {
        title: 'El taller de las máquinas',
        subtitle: 'El taller',
        content: `Los dos artistas se instalan en las antiguas naves de los astilleros. No es casualidad: estos edificios se hicieron para construir barcos de metal, y son perfectos para fabricar máquinas gigantes. En el taller, un equipo de especialistas se pone manos a la obra: dibujantes, ebanistas, soldadores, mecánicos, escultores. Utilizan madera, acero, cuero y sistemas hidráulicos para dar vida a sus criaturas. Cada máquina empieza con dibujos y maquetas, y luego se fabrica pieza a pieza. Lo que hace único a este lugar es que el taller está abierto al público. Los visitantes pueden observar a los constructores trabajando desde una pasarela. Así, el saber hacer de los antiguos obreros de los astilleros se transmite, en cierto modo, a estos nuevos artesanos del sueño.`,
        caption: 'La Garza en vuelo en la Galería de las Máquinas',
      },
      {
        title: 'El Gran Elefante',
        subtitle: 'Desde 2007',
        content: `El 1 de julio de 2007, las Máquinas de la Isla abren sus puertas con una estrella espectacular: el Gran Elefante. Mide 12 metros de alto, 8 metros de ancho y pesa unas 45 toneladas. Está hecho de madera y acero, y sus mecanismos son visibles, como los de un reloj gigante. Sobre su lomo, una casa de varios pisos puede acoger a casi 50 pasajeros. El elefante pasea lentamente alrededor de los antiguos astilleros durante unos 45 minutos. Mueve la trompa, las orejas y las patas, ¡y hasta lanza un gran barrito! Cuidado, transeúntes: también puede rociarlos con su trompa. Desde 2007 ha transportado a casi un millón y medio de pasajeros. En 2026, tras casi veinte años de paseos, se toma un merecido descanso para una gran revisión mecánica.`,
        caption: 'El Gran Elefante ante el Carrusel',
      },
      {
        title: 'La Galería de las Máquinas',
        subtitle: 'La Galería',
        content: `Junto al taller se encuentra la Galería de las Máquinas. Es un lugar de exposición, pero no como los demás: aquí no basta con mirar. Las criaturas se ponen en movimiento delante de los visitantes, ¡y algunos hasta pueden pilotarlas! Uno se encuentra con una hormiga gigante, una araña, una oruga, una garza que bate las alas o asombrosos animales marinos. Los maquinistas, a los que también se llama «pilotos», explican cómo funciona cada máquina e invitan al público a subir a bordo. La Galería presenta también los dibujos, las maquetas y las películas que muestran las etapas de creación. Así se descubre que a veces hacen falta años de imaginación y de trabajo para dar vida a una sola máquina. Cada temporada pueden aparecer nuevas criaturas.`,
        hint,
        info: `El Gran Elefante: 12 metros de alto, 8 de ancho, unas 45 toneladas de madera y acero. Sobre su lomo, una casa de varios pisos lleva a casi 50 pasajeros en un paseo de 45 minutos.`,
      },
      {
        title: 'El Carrusel de los Mundos Marinos',
        subtitle: '2012',
        content: `En 2012 abre a orillas del Loira una nueva atracción extraordinaria: el Carrusel de los Mundos Marinos. ¡No es un tiovivo corriente con caballos de madera! Con casi 25 metros de altura, parece un inmenso acuario de tres pisos. Cada piso representa un mundo submarino: el fondo del mar, los abismos y la superficie de los océanos. Allí viven una treintena de criaturas extrañas: un calamar gigante, un pez linterna, un cangrejo, una raya, barcos… Los visitantes no se limitan a dar vueltas: pueden mover las aletas, los tentáculos o las pinzas de los animales con palancas y manivelas. Este carrusel rinde homenaje a Julio Verne y a su novela «Veinte mil leguas de viaje submarino», en la que el capitán Nemo explora las profundidades a bordo del submarino Nautilus.`,
        caption: 'El Carrusel de los Mundos Marinos al caer la noche',
      },
      {
        title: 'El sueño del Árbol de las Garzas',
        subtitle: 'Un proyecto soñado',
        content: `Los creadores de las Máquinas imaginaron también un proyecto todavía más loco: el Árbol de las Garzas. Se trataba de un árbol gigante de acero, de unos 35 metros de altura, cubierto de plantas y de jardines colgantes. En lo alto, dos grandes garzas mecánicas debían llevar a los visitantes por los aires para sobrevolar la ciudad. Se construyó una rama de demostración para probar la idea, y el público pudo descubrirla. El árbol debía instalarse cerca de una antigua cantera de granito, transformada en un magnífico jardín, el Jardin extraordinaire, con su cascada y sus plantas venidas del mundo entero. Pero el proyecto era muy caro y suscitó muchos debates. Finalmente se abandonó. El Jardin extraordinaire, en cambio, sí está abierto al público. Y el sueño de las garzas sigue vivo en los dibujos y en la Galería.`,
        caption: 'El proyecto del Árbol de las Garzas',
      },
      {
        title: 'Una isla que cambió de vida',
        subtitle: 'Hoy',
        content: `Gracias a las Máquinas, la isla de Nantes ha cambiado por completo. Donde antes se construían barcos, ahora la gente pasea en familia, hace picnics, juega y se maravilla. Las antiguas grúas amarillas y grises siguen allí, convertidas en símbolos del pasado obrero. Las naves acogen cafés, restaurantes y zonas de juego. Cada año, varios cientos de miles de visitantes llegan de toda Francia y del mundo entero para ver al Gran Elefante y a sus amigos. Las Máquinas de la Isla se han convertido en uno de los lugares más famosos de Nantes, al mismo nivel que el castillo de los duques de Bretaña. Demuestran que una ciudad puede reinventarse mezclando el arte, la memoria y la imaginación. Todo el barrio se ha desarrollado a su alrededor, con escuelas, viviendas y empresas.`,
        caption: 'La isla de Nantes vista desde el cielo',
      },
      {
        title: 'La imaginación al poder',
        subtitle: 'Mañana',
        content: `La historia de las Máquinas de la Isla es la de una isla que supo transformar su tristeza en sueño. Cuando cerraron los astilleros, Nantes podría haber olvidado este lugar. En lugar de eso, unos artistas decidieron hacer nacer allí un mundo imaginario, a medio camino entre las novelas de Julio Verne, los inventos de Leonardo da Vinci y el saber hacer de los obreros de antaño. Las Máquinas nos recuerdan que nunca hay que dejar de imaginar. ¡Una simple idea dibujada en una hoja de papel puede convertirse en un elefante de 45 toneladas que camina por la ciudad! La próxima vez que te cruces con el Gran Elefante o subas al Carrusel, piensa en los obreros que construían barcos aquí y en los inventores que devolvieron la vida a su isla. Y quién sabe: quizá la próxima máquina salga de tu imaginación.`,
        caption: 'Nantes y sus islas, vista a vuelo de pájaro',
      },
    ],
  },

  // ═════════════════════════ LA CATEDRAL ═════════════════════════
  cathedrale: {
    meta: {
      shelfTitle: 'La Catedral de San Pedro y San Pablo',
      coverKicker: 'Historia de la',
      coverTitle: 'Catedral de San Pedro y San Pablo',
      spineTitle: 'Catedral de San Pedro y San Pablo',
      titlePageHeading: 'Patrimonio de Nantes',
      titlePageTitle: 'La Catedral de San Pedro y San Pablo',
      titlePageSubtitle: 'Casi seis siglos de construcción, de oraciones y de pruebas',
      titlePageImprint: imprint,
      runningHead: 'La Catedral de Nantes',
    },
    chapters: [
      {
        title: 'Antes de la catedral',
        subtitle: 'Siglos IV – XI',
        content: `Mucho antes de la gran catedral que conocemos hoy, este lugar de Nantes ya era un sitio de oración. Desde el siglo IV, en la época romana, los primeros cristianos de la ciudad construyen aquí una iglesia. En el siglo VI, el obispo Félix manda edificar una catedral, consagrada hacia el año 568. Se describe como muy hermosa, con un tejado que brilla al sol. Pero en el siglo IX los vikingos atacan Nantes y la arrasan. En 843 entran en la catedral y se ensañan con los fieles que se habían refugiado en ella, entre ellos el obispo. En el siglo XI se construye una nueva catedral de estilo románico, con muros gruesos, arcos de medio punto y ventanas pequeñas. Sobre esta iglesia románica nacerá, unos siglos más tarde, la catedral gótica que admiramos hoy.`,
        caption: 'Panorámica de la catedral, antes de 1930',
      },
      {
        title: 'La primera piedra',
        subtitle: '14 de abril de 1434',
        content: `En el siglo XV, Bretaña es un ducado rico y poderoso. El duque Juan V y el obispo Jean de Malestroit quieren una catedral digna de su capital, tan grande y hermosa como las de otras ciudades de Europa. El 14 de abril de 1434 colocan juntos la primera piedra de la nueva catedral. La idea es ingeniosa: en lugar de destruirlo todo de golpe, se construirá la catedral gótica alrededor de la antigua iglesia románica, poco a poco, para que los fieles puedan seguir rezando en ella. La obra se confía a maestros de obras, primero Guillaume de Dammartin y después Mathelin Rodier, el mismo que trabaja también en el castillo de los duques. Nadie sospecha entonces que esta obra durará más de cuatro siglos y medio, y que ninguno de quienes la empezaron la verá terminada.`,
        caption: 'Los restos de la iglesia románica sacados a la luz',
      },
      {
        title: 'El estilo gótico flamígero',
        subtitle: 'Siglo XV',
        content: `La catedral de Nantes está construida en estilo gótico, y más precisamente en gótico «flamígero». Se llama así porque las decoraciones de piedra, sobre todo en las ventanas, parecen llamas que bailan. El gótico permite construir iglesias muy altas y muy luminosas, gracias a los arcos apuntados, los pilares finos y las grandes ventanas con vidrieras. En Nantes, los constructores utilizan tuffeau, una piedra blanca y blanda de las orillas del Loira, más fácil de esculpir. Por eso el interior de la catedral es tan claro y luminoso. Su gran bóveda se eleva a unos 37 metros de altura: ¡más que la de Notre-Dame de París! Al levantar la vista, uno tiene la impresión de que los pilares suben hasta el cielo, como los troncos de un inmenso bosque de piedra.`,
        caption: 'La catedral inacabada, dibujo antiguo',
      },
      {
        title: 'La fachada y sus torres',
        subtitle: '1480 – 1520',
        content: `Los constructores empiezan por la fachada, que se termina hacia 1480. Está perforada por cinco portadas esculpidas, cubiertas de cientos de pequeños personajes: santos, ángeles, profetas, escenas de la Biblia. Es un verdadero libro de imágenes en piedra, que permitía a los fieles, a menudo incapaces de leer, conocer las historias religiosas. Sobre la fachada se alzan dos grandes torres cuadradas, terminadas hacia 1490. Albergan las campanas de la antigua catedral románica, que tocan las horas y las fiestas. Ana de Bretaña, convertida en reina de Francia, regala una gran vidriera para la fachada, instalada en 1498. Luego, hacia 1520, la obra se detiene. Las guerras, la falta de dinero y los cambios de época interrumpen los trabajos durante casi un siglo. La catedral permanece mucho tiempo inacabada.`,
        caption: 'La nave y sus altos pilares, litografía',
      },
      {
        title: 'La tumba del duque Francisco II',
        subtitle: 'Principios del siglo XVI',
        content: `La catedral alberga uno de los tesoros más bellos de la escultura renacentista en Francia: la tumba del duque Francisco II y de su esposa, Margarita de Foix, los padres de Ana de Bretaña. Fue la propia Ana quien la mandó hacer, a principios del siglo XVI, para honrar la memoria de sus padres. La diseñó el pintor Jean Perréal y la esculpió Michel Colombe, uno de los mejores escultores de su tiempo. Sobre la tumba, el duque y la duquesa yacen con las manos juntas. En las cuatro esquinas se alzan cuatro grandes estatuas de mujeres que representan las virtudes: la Justicia, la Fortaleza, la Templanza y la Prudencia. Esta última tiene una particularidad asombrosa: tiene dos caras, una de mujer joven delante y otra de anciano detrás, para mostrar que hay que saber aprender de las lecciones del pasado.`,
        caption: 'La tumba de Francisco II, duque de Bretaña',
      },
      {
        title: 'Una obra que nunca termina',
        subtitle: 'Siglos XVII – XIX',
        content: `En el siglo XVII, los trabajos se reanudan lentamente, sobre todo en el interior. Pero la catedral atraviesa momentos difíciles. Durante la Revolución francesa se cierra al culto y se transforma en almacén: sus estatuas se dañan y sus objetos preciosos se dispersan. En 1800, la explosión de una torre del castillo vecino, que servía para almacenar pólvora, revienta numerosas vidrieras y daña el tejado. En 1802, la catedral se devuelve a los fieles. En 1815, la tumba de Francisco II, que estaba en otra iglesia destruida, se instala en la catedral. Luego, en 1835, por fin se decide terminar la obra. El antiguo coro románico se sustituye por un coro gótico, y se redescubre la cripta de la iglesia románica bajo el suelo. Los obreros del siglo XIX respetan el estilo imaginado por sus antepasados del siglo XV.`,
        caption: 'La plaza Saint-Pierre, postal antigua',
      },
      {
        title: '¡Por fin terminada!',
        subtitle: '25 de diciembre de 1891',
        content: `El 25 de diciembre de 1891, día de Navidad, la catedral es por fin inaugurada por el obispo de Nantes. ¡Han hecho falta 457 años de obras desde la colocación de la primera piedra en 1434! Decenas de generaciones de canteros, escultores, carpinteros y maestros vidrieros se han sucedido en esta obra. Y sin embargo, el resultado es de una gran armonía: cuesta creer que algunas partes se construyeron con más de cuatro siglos de diferencia. La catedral fue declarada monumento histórico ya en 1862. Pero el siglo XX le reserva nuevas pruebas. En 1944, durante la Segunda Guerra Mundial, los bombardeos dañan el edificio y destruyen una parte de sus vidrieras. Tras la guerra, los restauradores vuelven al trabajo para curar sus heridas.`,
        hint,
        info: `Iniciada en 1434 e inaugurada en 1891: 457 años de obras para esta fachada de dos torres cuadradas, sus cinco portadas esculpidas y su bóveda de tuffeau que alcanza 37 metros.`,
      },
      {
        title: 'El incendio de 1972',
        subtitle: '28 de enero de 1972',
        content: `El 28 de enero de 1972 se produce un terrible accidente. Durante unas obras en el tejado se declara un incendio. Las llamas devoran la armadura de madera y el tejado se derrumba en parte. Los bomberos luchan todo el día, y los nanteses miran, impotentes, cómo arde su catedral. Por suerte, las bóvedas de piedra resisten en gran parte y protegen el interior. Pero los daños son inmensos. Harán falta trece años de restauración para repararlos. Para evitar que se repita una tragedia así, la nueva armadura ya no se construye en madera, sino en hormigón, un material que no arde. Se restauran las esculturas y las vidrieras, y se limpia la piedra blanca. A principios de los años 2000, la fachada y el exterior se renuevan a su vez. La catedral recupera entonces una blancura deslumbrante.`,
        caption: 'La catedral en llamas, pintura',
      },
      {
        title: 'El incendio de 2020',
        subtitle: '2020 – 2025',
        content: `El 18 de julio de 2020, una nueva tragedia golpea la catedral. Al amanecer se declara en el interior un incendio provocado. El fuego destruye el gran órgano, un instrumento excepcional construido en el siglo XVII, así como una parte de las vidrieras. El calor y el agua de las mangueras de los bomberos dañan también las bóvedas. Este incendio ocurre solo un año después del de Notre-Dame de París, y toda Francia se conmueve. Empieza entonces una obra inmensa. Canteros, carpinteros, maestros vidrieros y restauradores de arte se turnan durante cinco años. Se consolidan las bóvedas, se limpian las piedras ennegrecidas y se crean nuevas vidrieras. El 28 de septiembre de 2025, la catedral por fin reabre sus puertas al público durante una gran celebración. El gran órgano destruido aún debe reconstruirse.`,
        caption: 'La armadura en llamas',
      },
      {
        title: 'Una catedral que siempre renace',
        subtitle: 'Hoy',
        content: `La catedral de San Pedro y San Pablo de Nantes tiene una historia fuera de lo común. Se construyó durante casi cinco siglos y fue dañada por guerras, revoluciones, una explosión y dos grandes incendios. Y, sin embargo, sigue ahí, en pie y luminosa. Cada vez, mujeres y hombres se movilizaron para repararla y transmitirla a las generaciones siguientes. Hoy acoge tanto a los fieles que vienen a rezar como a los visitantes que vienen a admirar su arquitectura. Al entrar, levanta la vista hacia la bóveda blanca, acércate a la tumba de Francisco II para descubrir el doble rostro de la Prudencia y baja a la cripta para ver las huellas de la catedral románica. Entonces comprenderás que este monumento no es solo un edificio de piedra: es la memoria viva de Nantes.`,
        caption: 'La fachada iluminada al caer la noche',
      },
    ],
  },
}
