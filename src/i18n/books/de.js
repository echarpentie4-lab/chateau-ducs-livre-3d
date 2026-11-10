// 🇩🇪 Deutsche Übersetzung der fünf Bücher (gleiche Kapitelreihenfolge wie src/data/livres/*.js)
const hint = 'Klicken Sie auf das Modell, um es genauer zu betrachten'
const imprint = 'Nantes, beim Archivar des Kulturerbes'

export default {
  // ═════════════════════════ DAS SCHLOSS ═════════════════════════
  chateau: {
    meta: {
      shelfTitle: 'Das Schloss der Herzöge der Bretagne',
      coverKicker: 'Geschichte des',
      coverTitle: 'Schlosses der Herzöge der Bretagne',
      spineTitle: 'Schloss der Herzöge der Bretagne',
      titlePageHeading: 'Kulturerbe von Nantes',
      titlePageTitle: 'Das Schloss der Herzöge der Bretagne',
      titlePageSubtitle: 'Tausend Jahre Geschichte am Ufer der Loire',
      titlePageImprint: 'Nantes, beim Archivar des Schlosses',
      runningHead: 'Das Schloss der Herzöge der Bretagne',
    },
    chapters: [
      {
        title: 'Am Ufer des Flusses',
        subtitle: 'Von der Antike bis zum 3. Jahrhundert',
        content: `Vor sehr langer Zeit, dort wo der Fluss Erdre in die Loire mündet, ließen sich Menschen auf einem kleinen Hügel über den Sümpfen nieder. Der Ort war ideal: Das Wasser schützte ihn von mehreren Seiten, und Boote konnten leicht anlegen. In römischer Zeit wuchs hier eine Stadt heran. Sie trägt den Namen des gallischen Volkes, das sie bewohnte, der Namneten: Das ist die Geburt von Nantes. Um das 3. Jahrhundert umgibt sich die Stadt zum Schutz vor Angriffen mit einer großen Steinmauer. In einer Ecke dieser Mauer, direkt am Fluss, können die Wachen alle ankommenden Schiffe beobachten. Genau an dieser Stelle wird Jahrhunderte später ein Schloss entstehen. Jede Epoche wird auf den Spuren der vorherigen bauen, so wie man eine neue Seite in ein altes Buch schreibt.`,
        caption: 'Das Schloss am Ufer der Loire — alte Postkarte',
      },
      {
        title: 'Die Wikinger',
        subtitle: '843 – 937',
        content: `Im Jahr 843 fahren seltsame Schiffe die Loire hinauf: die Drachenboote der Wikinger, Krieger aus dem Norden Europas. Sie überfallen Nantes, plündern die Stadt und greifen sogar die Bewohner an, die in der Kathedrale Zuflucht gesucht haben. Fast hundert Jahre lang kehren die Wikinger immer wieder zurück und lassen sich schließlich sogar in der Gegend nieder. Die Menschen in Nantes leben in Angst. Dann kommt ein mutiger bretonischer Anführer, Alain Barbetorte, der im Exil in England aufgewachsen war. Im Jahr 937 kehrt er in die Bretagne zurück und vertreibt die Wikinger aus Nantes. Man erzählt, er habe sich durch Dornengestrüpp kämpfen müssen, um die verlassene Kathedrale zu erreichen. Er macht Nantes zu seiner Hauptstadt und verstärkt die Verteidigung der Stadt, vor allem auf der Flussseite, von wo die Gefahren immer gekommen waren.`,
        caption: 'Die Wikinger ziehen ihre Drachenboote ans Ufer',
      },
      {
        title: 'Der Neue Turm',
        subtitle: 'Um 1207 – 14. Jahrhundert',
        content: `Um 1207 lässt der Herr Guy de Thouars, der die Bretagne im Namen seiner Tochter regiert, eine neue Festung an der Loire errichten, in der Ecke der alten römischen Mauer. Man nennt sie die „Tour Neuve“, den Neuen Turm, um sie von einer älteren Burg im Stadtzentrum, dem Bouffay, zu unterscheiden. Im Laufe der Jahre vergrößern die Herzöge der Bretagne, also die Fürsten, die die Region regieren, die Festung und wohnen lieber dort. Im 14. Jahrhundert erlebt die Bretagne einen langen Krieg zwischen zwei Familien, die beide das Herzogtum regieren wollen. Die Familie Montfort gewinnt. Der neue Herzog, Johann IV., verstärkt das Schloss und lässt dort einen großen Turm bauen, den Alten Bergfried. Seine Überreste sind noch heute im Schlosshof zu sehen.`,
        caption: 'Plan des Schlosses von Nantes im Jahr 1600',
      },
      {
        title: 'Franz II., der Bauherzog',
        subtitle: '1458 – 1466',
        content: `Im Jahr 1458 wird Franz II. Herzog der Bretagne. Zu dieser Zeit ist die Bretagne fast ein unabhängiges Land: Sie hat ihre eigene Währung, ihre eigenen Gesetze und ihre Botschafter. Doch der König von Frankreich, ihr mächtiger Nachbar, würde sie gern beherrschen. 1466 beschließt Franz II., ein größeres, stärkeres und schöneres Schloss zu bauen. Von außen ist es eine echte Festung: hohe Mauern, sieben dicke Türme und Wassergräben, gefüllt mit dem Wasser der Loire. Doch hat man die Zugbrücke überquert, entdeckt man im Hof einen wahren Palast mit großen Fenstern und schönen weißen Steinen, dem sogenannten Tuffeau. Hier lebt der Hof des Herzogs. Man feiert Feste, Bankette und Empfänge. Das Schloss zeigt allen den Reichtum und die Macht der Bretagne.`,
        caption: 'Die Türme des Eingangs und die Brücke',
      },
      {
        title: 'Die Festung Franz’ II.',
        subtitle: 'Aufklapptafel',
        content: `Sieben dicke Türme, hohe Kurtinen und Gräben voller Loirewasser: Von außen ist es eine Festung. Doch hinter der Zugbrücke verbirgt sich ein Palast aus weißem Tuffstein, in dem der Hof des Herzogs lebt.`,
        hint,
        info: `Ab 1466 von Franz II. erbaut, vereint das Schloss eine militärische Festung (Türme, Kurtinen, Gräben) mit einem Renaissancepalast (dem Grand Logis, dessen Gauben wie Spitze gemeißelt sind).`,
      },
      {
        title: 'Anne de Bretagne',
        subtitle: '1477 – 1491',
        content: `Am 25. Januar 1477 wird im Schloss ein kleines Mädchen geboren: Anne, die Tochter von Herzog Franz II. Da ihr Vater keinen Sohn hat, wird sie eines Tages die Bretagne erben. Schon bald wollen Fürsten aus ganz Europa sie heiraten, denn wer Anne heiratet, bekommt die Bretagne! Doch der König von Frankreich will sich das Herzogtum aneignen. Der Krieg bricht aus. 1488 wird das bretonische Heer bei Saint-Aubin-du-Cormier geschlagen. Wenige Wochen später stirbt Franz II. Anne ist erst 11 Jahre alt und schon Herzogin der Bretagne. Sie versucht Widerstand zu leisten, doch französische Truppen nehmen Nantes und sein Schloss 1491 ein. Um ihr Land zu schützen, bleibt Anne keine Wahl: Im Dezember 1491 heiratet sie den König von Frankreich, Karl VIII. Die junge Herzogin wird Königin von Frankreich.`,
        caption: 'Anne de Bretagne, alter Stich',
      },
      {
        title: 'Zweimal Königin',
        subtitle: '1498 – 1514',
        content: `1498 stirbt König Karl VIII., nachdem er sich im Schloss Amboise den Kopf an einer niedrigen Tür gestoßen hat. Anne kehrt in die Bretagne zurück und regiert erneut ihr Herzogtum. Doch die Geschichte ist noch nicht zu Ende: Am 8. Januar 1499 heiratet sie den neuen König, Ludwig XII., in der Kapelle des Schlosses von Nantes. Damit ist sie die einzige Frau der Geschichte, die zweimal Königin von Frankreich war! Anne liebt ihr Schloss. Sie lässt die von ihrem Vater begonnenen Arbeiten vollenden. Sie lässt das Grand Logis, das Hauptgebäude, mit Steinskulpturen so fein wie Spitze verzieren und einen Turm mit eleganten Balkonen bauen, den Turm der Goldenen Krone. Als sie 1514 stirbt, wird ihr Herz in ein kostbares goldenes Kästchen gelegt und nach Nantes gebracht, zu ihren Eltern.`,
        caption: 'Anne de Bretagne, zweimal Königin von Frankreich',
      },
      {
        title: 'Die Bretagne wird französisch',
        subtitle: '1532 – 1598',
        content: `Nach Annes Tod heiratet ihre Tochter Claude den späteren König Franz I. Die Bretagne hat keinen eigenen Herzog mehr. 1532 wird sie offiziell mit Frankreich vereinigt und behält einige besondere Rechte. Das Schloss gehört nicht mehr den Herzögen, sondern dem König, der dort einen Gouverneur einsetzt. Einige Jahre später wird Frankreich von den Religionskriegen zwischen Katholiken und Protestanten zerrissen. Der Gouverneur der Bretagne, der Herzog von Mercœur, weigert sich, König Heinrich IV. zu gehorchen. Er verwandelt das Schloss in eine Zitadelle und fügt große Bastionen hinzu, spitz zulaufende Mauern, die Kanonenkugeln besser standhalten. 1598 unterwirft sich Mercœur endlich, und Heinrich IV. kommt nach Nantes. Beeindruckt von den Mauern soll er ausgerufen haben: „Die Herzöge der Bretagne waren keine kleinen Gesellen!“ Im selben Jahr unterzeichnet er in Nantes das Edikt von Nantes, das Frieden zwischen Katholiken und Protestanten bringt.`,
        caption: 'Die Wappen Frankreichs und der Bretagne vereint unter der Krone',
      },
      {
        title: 'Ein Gefängnis für die Feinde des Königs',
        subtitle: '1626 – 1661',
        content: `Im 17. Jahrhundert ist das Schloss kein Fürstensitz mehr. Mit seinen dicken Mauern und seinen Soldaten wird es zum Gefängnis für wichtige Persönlichkeiten, die beim König in Ungnade gefallen sind. 1626 wird der Graf von Chalais hier eingesperrt: Man wirft ihm eine Verschwörung gegen den mächtigen Kardinal Richelieu vor, und er wird zum Tode verurteilt. 1654 ist der Kardinal von Retz an der Reihe, ein Feind des Ministers Mazarin. Doch er hat nicht vor, eingesperrt zu bleiben! An einem Augustabend flieht er, indem er sich an einem Seil von der Höhe der Wälle hinablässt, und galoppiert davon. Er stürzt und verletzt sich an der Schulter, doch die Flucht gelingt. 1661 kommt der junge König Ludwig XIV. nach Nantes. Dort lässt er seinen Finanzminister Nicolas Fouquet von d’Artagnan verhaften, dem echten Musketier, der den berühmten Roman Die drei Musketiere inspirierte.`,
        caption: 'Unter den Gewölben des Schlosses',
      },
      {
        title: 'Kaserne, Explosion und Museum',
        subtitle: '1800 – 1924',
        content: `Nach und nach wird das Schloss zur Kaserne: Soldaten wohnen dort, Waffen und Schießpulver werden gelagert. Das ist gefährlich … Am 25. Mai 1800 explodiert das Pulver im Turm der Spanier! Der Turm wird völlig zerstört, ebenso die Kapelle, in der Anne de Bretagne geheiratet hatte. 1832 nimmt das Schloss eine letzte berühmte Gefangene auf: die Herzogin von Berry, die verhaftet wurde, nachdem sie sich stundenlang hinter einem Kamin in einem Haus in Nantes versteckt hatte. Im 19. Jahrhundert erkennt man, dass das Schloss ein Schatz der Vergangenheit ist, und es wird als historisches Denkmal geschützt. 1915 kauft die Stadt Nantes es, und 1924 eröffnet sie dort ein Museum. Etwas später werden die Loirearme, die durch die Stadt flossen, zugeschüttet: Das Schloss, das immer mit den Füßen im Wasser stand, liegt nun mitten in der Stadt.`,
        caption: 'Die Explosion des Turms der Spanier, 25. Mai 1800',
      },
      {
        title: 'Das Schloss heute',
        subtitle: 'Seit 1990',
        content: `Anfang der 1990er-Jahre startet die Stadt eine riesige Baustelle, um das Schloss zu restaurieren. Mehr als fünfzehn Jahre lang geben ihm Architekten, Steinmetze und Historiker seinen Glanz zurück: Die weißen Steine werden gereinigt, die Dächer und Skulpturen repariert. 2007 öffnet das Schloss wieder seine Tore, schöner als je zuvor. Heute beherbergt es das Geschichtsmuseum von Nantes mit 32 Sälen, die vom Leben der Stadt erzählen, von den Herzögen der Bretagne bis heute. Jeder kann den Hof kostenlos durchqueren und auf den Wällen spazieren, um die Stadt zu bewundern. Festung gegen Feinde, Palast der Herzöge, Heim einer Königin, Gefängnis, Kaserne und schließlich Museum: In tausend Jahren hatte das Schloss viele Leben. Aber es steht noch immer da, stolz und weiß, und wacht über Nantes.`,
        caption: 'Das Schloss im Herzen der Stadt',
      },
    ],
  },

  // ═════════════════════════ LIEU UNIQUE ═════════════════════════
  lieuUnique: {
    meta: {
      shelfTitle: 'Der Lieu Unique',
      coverKicker: 'Geschichte des',
      coverTitle: 'Lieu Unique',
      spineTitle: 'Der Lieu Unique — ehemalige LU-Fabrik',
      titlePageHeading: 'Kulturerbe von Nantes',
      titlePageTitle: 'Der Lieu Unique',
      titlePageSubtitle: 'Von der LU-Keksfabrik zum Tempel der Kultur',
      titlePageImprint: imprint,
      runningHead: 'Der Lieu Unique',
    },
    chapters: [
      {
        title: 'Eine kleine Konditorei in Nantes',
        subtitle: '1846',
        content: `1846 eröffnet in Nantes ein junger Konditor aus Lothringen, Jean-Romain Lefèvre, mit seiner Frau Pauline-Isabelle Utile einen Laden in der Rue Boileau. Gemeinsam backen sie Kekse und trockenes Gebäck, das sie an die Menschen in Nantes verkaufen. Das Paar hat die Idee, seine beiden Namen zu verbinden: Lefèvre und Utile. Die Anfangsbuchstaben dieser Namen ergeben zwei Buchstaben, die in ganz Frankreich berühmt werden: L und U, „LU“. Zu dieser Zeit ist Nantes ein großer Hafen. Zucker kommt von den Antillen, Butter und Mehl aus dem Umland Westfrankreichs: Alles ist da, um gute Kekse zu backen. Der kleine Laden läuft gut, und die Kunden kommen wieder. Doch noch ahnt niemand, dass diese Konditorei aus dem Viertel eine der größten Keksfabriken Europas werden und einem einzigartigen Ort ihren Namen geben wird.`,
        caption: 'Die Arbeiterinnen und Arbeiter der Keksfabrik LU',
      },
      {
        title: 'Die Erfindung des Petit-Beurre',
        subtitle: '1886',
        content: `1886 erfindet ihr Sohn Louis Lefèvre-Utile einen Keks, der um die Welt gehen wird: den Petit-Beurre. Er ist einfach, viereckig, goldbraun und knusprig. Doch seine Form verbirgt ein lustiges kleines Geheimnis. Man erzählt, seine 4 Ecken stehen für die 4 Jahreszeiten, seine 52 Zacken für die 52 Wochen und seine 24 kleinen Löcher für die 24 Stunden eines Tages. Ein Keks für jeden Tag des Jahres! Louis ist auch ein moderner und leidenschaftlicher Mann. Er liebt die Fotografie und versteht vor allen anderen, wie wichtig Werbung ist. Er sagte, um Lust aufs Essen zu machen, gehe nichts über die Verführung des Auges. Deshalb beauftragt er große Künstler wie den Maler Alfons Mucha, prächtige Plakate und verzierte Blechdosen zu gestalten, die man noch heute sammelt.`,
        caption: 'Eine junge Arbeiterin vor dem Keksofen',
      },
      {
        title: 'Eine Fabrik im Herzen der Stadt',
        subtitle: 'Anfang des 20. Jahrhunderts',
        content: `Um immer mehr Kekse herzustellen, zieht LU in eine große Fabrik am Wasser, entlang des Saint-Félix-Kanals, direkt gegenüber dem Schloss der Herzöge der Bretagne. Schiffe und Züge bringen die Rohstoffe und fahren beladen mit Keksdosen für ganz Frankreich wieder ab. Hunderte, dann Tausende Arbeiterinnen und Arbeiter sind hier beschäftigt. Im Viertel liegt ein köstlicher Duft von warmen Keksen in der Luft. Anfang des 20. Jahrhunderts entwirft der Architekt Auguste Bluysen zwei prächtige Türme, die den Fabrikeingang einrahmen. Sie sind mit Mosaiken und Skulpturen geschmückt und von Kuppeln gekrönt, wie echte Leuchttürme. Diese Türme haben eigentlich keinen Zweck … außer allen die Macht der Marke zu zeigen! Es sind riesige Werbeschilder, weithin sichtbar, der Stolz von Nantes.`,
        caption: 'Die Packerei der Kekse',
      },
      {
        title: 'Die Keksfabrik im 20. Jahrhundert',
        subtitle: '20. Jahrhundert',
        content: `Jahrzehntelang läuft die LU-Fabrik auf Hochtouren. Moderne Maschinen ersetzen nach und nach die Handarbeit, und täglich kommen Tausende Kekse heraus. Der Petit-Beurre, aber auch andere Kekse werden für die Kinder Frankreichs zum unverzichtbaren Nachmittagssnack. Doch die Fabrik erlebt auch schwere Zeiten. Im Zweiten Weltkrieg wird Nantes 1943 schwer bombardiert, und das Viertel leidet. Später wechselt das Unternehmen die Besitzer und wächst weiter. Im Laufe des 20. Jahrhunderts verschwindet einer der beiden schönen Türme: Es bleibt nur einer, den man noch heute bewundern kann. Nach und nach wird die Fabrik zu klein und unpraktisch. Die Innenstadt ist kein guter Ort mehr, um Kekse in riesigen Mengen herzustellen, wenn Lastwagen durch enge Straßen fahren müssen.`,
        caption: 'Die Fabrik und ihre zwei Türme am Wasser',
      },
      {
        title: 'Der Abschied und die Stille',
        subtitle: '1986',
        content: `1986 verlässt die Produktion das Zentrum von Nantes. Die LU-Kekse werden nun in einer neuen Fabrik auf dem Land, südlich der Stadt, hergestellt. Die großen Gebäude am Kanal stehen leer. Die Maschinen verstummen, die Arbeiter gehen, der Keksduft verschwindet. Mehrere Jahre lang bleibt die alte Fabrik verlassen. Fensterscheiben zerbrechen, Staub legt sich nieder, und viele fragen sich, was man mit diesen riesigen Hallen anfangen soll. Manche denken sogar daran, sie abzureißen. Doch Künstler sehen darin einen wunderbaren Spielplatz. Theatergruppen ziehen ein, um zu proben, ihre Bühnenbilder zu bauen und ihre Stücke zu erfinden. Darunter ist eine Truppe aus Nantes, die sehr berühmt werden wird: Royal de Luxe, bekannt für ihre Riesen, die durch die Straßen laufen.`,
        caption: 'Die Fabrik Lefèvre-Utile, alte Postkarte',
      },
      {
        title: 'Eine neue Idee',
        subtitle: '1990er-Jahre',
        content: `In den 1990er-Jahren beschließt die Stadt Nantes, auf Kultur zu setzen, um sich neu zu erfinden. Ein Mann, Jean Blaise, verfolgt ein kühnes Projekt: die alte Keksfabrik in einen großen Ort für alle Künste zu verwandeln. Dafür holt er einen ungewöhnlichen Architekten, Patrick Bouchain. Dieser will die Vergangenheit der Fabrik nicht auslöschen. Im Gegenteil! Er behält die Backsteinmauern, die Stahlträger, die großen Räume und die Spuren der Arbeit der Arbeiter. Er repariert sie, reinigt sie und macht sie einladend, ohne alles neu zu bauen. Die Idee ist einfach: Vergangenheit und Gegenwart sollen zusammen leben. Und da der Ort die Erinnerung an LU bewahren soll, bekommt er einen cleveren Namen mit den beiden berühmten Buchstaben: der „lieu unique“, der einzigartige Ort. Gleichzeitig wird der letzte LU-Turm mit seinen ursprünglichen Verzierungen und Farben restauriert.`,
        hint,
        info: `Von Auguste Bluysen entworfen, rahmte der LU-Turm zusammen mit seinem Zwilling den Eingang der Keksfabrik ein. Für die Eröffnung des Lieu Unique restauriert, hat er seine Mosaiken, seine Kuppel und seine Laterne zurückerhalten.`,
      },
      {
        title: 'Die Eröffnung zum Jahr 2000',
        subtitle: 'Dezember 1999',
        content: `Ende Dezember 1999, als sich die ganze Welt auf das Jahr 2000 vorbereitet, öffnet der Lieu Unique mit einem großen Fest seine Türen. Die Menschen in Nantes entdecken ihre verwandelte alte Fabrik. Wo früher Kekse gebacken wurden, gibt es jetzt Theatersäle, Ausstellungsräume, eine Bar, ein Restaurant, eine Buchhandlung und sogar eine Krippe für die Kleinsten. Zu diesem Anlass wird ein erstaunliches Projekt erdacht: der „Speicher des Jahrhunderts“. Die Bewohner dürfen persönliche Gegenstände, Briefe oder Erinnerungen in verschlossene Kisten legen. Diese Kisten werden in einer großen Wand aufbewahrt und erst im Jahr 2100 geöffnet, hundert Jahre später! Eine Art Botschaft an die Menschen in Nantes der Zukunft, die entdecken werden, wie man Ende des 20. Jahrhunderts lebte.`,
        caption: 'Die Kuppel des LU-Turms im Bau',
      },
      {
        title: 'Ein Ort für alle Künste',
        subtitle: 'Heute',
        content: `Heute ist der Lieu Unique eine „scène nationale“, also ein großes Kulturzentrum, das vom Staat und der Stadt unterstützt wird. Man kommt aus allen möglichen Gründen hierher. Man kann Theaterstücke, Tanz- und Zirkusvorstellungen sehen, Konzerte hören, Ausstellungen zeitgenössischer Kunst entdecken, an Debatten teilnehmen oder Schriftsteller treffen. Künstler aus aller Welt kommen, um hier zu arbeiten und ihre Werke zu schaffen. Doch der Lieu Unique ist nicht nur Kunstliebhabern vorbehalten. Viele Menschen aus Nantes kommen einfach, um an der Bar etwas zu trinken, zu Mittag zu essen, in einem Buch zu blättern oder Freunde zu treffen. Es ist ein lebendiger Ort, an dem sich Studierende, Familien, Künstler und Neugierige begegnen. Genau diese Mischung macht den Lieu Unique … einzigartig!`,
        caption: 'Der Fabrikhof zur Zeit der Keksdosen',
      },
      {
        title: 'Der LU-Turm und sein Gyrorama',
        subtitle: 'Seit 2004',
        content: `Der LU-Turm, der einzige verbliebene der zwei Fabriktürme, hat seinen ganzen Glanz zurückgewonnen. Mit seinen Mosaiken, Skulpturen und seiner Kuppel steht er stolz gegenüber dem Schloss der Herzöge der Bretagne. Doch er birgt eine Überraschung! 2004 öffnet er sich dem Publikum mit einer seltsamen Maschine ganz oben: dem Gyrorama. Es ist eine Plattform, die man mit einer Kurbel an den Fenstern der Kuppel entlang dreht, wie in einem Roman von Jules Verne. An Bord entdeckt man in etwa 35 Metern Höhe einen Blick über die ganze Stadt: das Schloss, die Kathedrale, die Loire und die Dächer von Nantes. Im Inneren des Turms kann man auch Fotografien bewundern, die Louis Lefèvre-Utile selbst aufgenommen hat, der Erfinder des Petit-Beurre.`,
        caption: 'Modell der LU-Fabrik und ihrer zwei Türme',
      },
      {
        title: 'Ein Ort, zwei Leben',
        subtitle: 'Gestern und morgen',
        content: `Die Geschichte des Lieu Unique zeigt, dass ein Gebäude mehrere Leben haben kann. Mehr als ein Jahrhundert lang hat es Generationen von Kindern mit seinen Keksen ernährt. Heute nährt es ihre Neugier mit Aufführungen, Werken und Begegnungen. Statt ihre alten Fabriken abzureißen, hat Nantes beschlossen, sie zu verwandeln und ihnen eine neue Zukunft zu schenken. Der Lieu Unique hat den Weg für andere Projekte in der Stadt geebnet, wie die Machines de l’Île auf den ehemaligen Werften. Wenn Sie am LU-Turm vorbeigehen, schauen Sie nach oben und denken Sie an die kleine Konditorei in der Rue Boileau, an den Erfinder des Petit-Beurre, an die Arbeiter der Fabrik und an die Künstler, die sie wieder zum Leben erweckt haben. Und vielleicht öffnen Ihre Urenkel im Jahr 2100 die Kisten des Speichers des Jahrhunderts, um unsere Zeit zu entdecken.`,
        caption: 'Der LU-Turm heute',
      },
    ],
  },

  // ═════════════════════════ PASSAGE POMMERAYE ═════════════════════════
  pommeraye: {
    meta: {
      shelfTitle: 'Die Passage Pommeraye',
      coverKicker: 'Geschichte der',
      coverTitle: 'Passage Pommeraye',
      spineTitle: 'Die Passage Pommeraye',
      titlePageHeading: 'Kulturerbe von Nantes',
      titlePageTitle: 'Die Passage Pommeraye',
      titlePageSubtitle: 'Eine Galerie aus Glas und Träumen im Herzen von Nantes',
      titlePageImprint: imprint,
      runningHead: 'Die Passage Pommeraye',
    },
    chapters: [
      {
        title: 'Nantes, eine reiche und elegante Stadt',
        subtitle: 'Anfang des 19. Jahrhunderts',
        content: `Anfang des 19. Jahrhunderts ist Nantes eine reiche Stadt. Ihr Hafen, einer der aktivsten Frankreichs, macht viele Kaufleute und Reeder wohlhabend. Ein Teil dieses Reichtums stammt aus dem Sklavenhandel und dem Handel mit den Kolonien, ein dunkles Kapitel der Stadtgeschichte. Im eleganten Viertel um das Théâtre Graslin entstehen schöne Häuser aus weißem Stein mit schmiedeeisernen Balkonen. Die Straßen sind belebt: Man flaniert, kauft ein und zeigt sich in modischer Kleidung. Doch es gibt ein Problem: Das Viertel liegt an einem steilen Hang. Zwischen der Rue de la Fosse unten am Fluss und dem Viertel Graslin oben muss man enge, steile Gassen hinauf- und hinabsteigen, die bei Regen oft schlammig sind.`,
        caption: 'Die Galerie und ihr großes Glasdach',
      },
      {
        title: 'Die Mode der überdachten Passagen',
        subtitle: '1840',
        content: `In Paris begeistert eine Neuheit die Menschen: die überdachten Passagen. Das sind Innenstraßen unter einem Glasdach, gesäumt von Läden. Man kann dort geschützt vor Regen, Wind und Schlamm spazieren und die Schaufenster bewundern. Sie sind die Vorfahren unserer Einkaufszentren! Ein Notar aus Nantes, Louis Pommeraye, hat daraufhin eine ehrgeizige Idee: eine überdachte Passage in Nantes zu bauen. Er will nicht nur einen Ort des Handels schaffen. Er will auch das untere und das obere Viertel verbinden, zwischen der Rue de la Fosse und der Rue Santeuil, um den Spaziergängern das Leben zu erleichtern. Er tut sich mit einem weiteren Investor und zwei Architekten zusammen, Jean-Baptiste Buron und Hippolyte Durand-Gasselin, um dieses kühne Projekt zu verwirklichen. Ende 1840 beginnen die Bauarbeiten.`,
        caption: 'Die Statuen der Passage',
      },
      {
        title: 'Eine Herausforderung für Architekten',
        subtitle: '1840 – 1843',
        content: `Diese Passage zu bauen ist alles andere als einfach. Zwischen ihren beiden Eingängen liegen mehr als 9 Meter Höhenunterschied, so viel wie ein dreistöckiges Haus! Wie baut man eine angenehme Galerie auf einem so steilen Gelände? Die Architekten finden eine geschickte Lösung: Sie bauen die Passage auf mehreren Ebenen. In der Mitte verbindet eine große Treppe die Stockwerke und wird zum Herzstück des Ortes. Galerien mit Balkonen umgeben diesen großen Raum, und ein riesiges Dach aus Glas und Metall lässt das Tageslicht herein. Für die damalige Zeit ist das eine technische Meisterleistung. Metall und Glas sind moderne Materialien, die man gerade erst in großen Gebäuden zu verwenden beginnt. Die Arbeiter schuften fast drei Jahre lang, um dieses außergewöhnliche Projekt zu verwirklichen.`,
        caption: 'Die große Treppe, Tuschezeichnung',
      },
      {
        title: 'Die Einweihung 1843',
        subtitle: '4. Juli 1843',
        content: `Am 4. Juli 1843 wird die Passage Pommeraye eingeweiht. Staunend entdecken die Menschen in Nantes diesen Ort, der keinem anderen gleicht. Unter dem Glasdach fällt das Licht sanft auf die Läden, Treppen und Balustraden. Die Händler ziehen ein: Es gibt Hutmacher, Modistinnen, Juweliere, Spielzeug-, Stoff- und Parfümhändler. Es ist der angesagte Ort, an dem man sonntags in seinen schönsten Kleidern flaniert. Doch für Louis Pommeraye hat das Fest einen bitteren Beigeschmack. Der Bau hat viel mehr gekostet als geplant, und die Läden bringen anfangs nicht genug Geld ein. Der Notar verliert einen großen Teil seines Vermögens. Er hat ein Meisterwerk geschaffen, doch sein Traum hat ihn fast ruiniert. Dennoch bleibt sein Name für immer mit diesem Ort verbunden.`,
        caption: 'Die Passage im 19. Jahrhundert, Lithografie',
      },
      {
        title: 'Ein Palast der Skulpturen',
        subtitle: 'Die Skulpturen von Debay',
        content: `Was die Passage Pommeraye so besonders macht, ist ihre Ausschmückung. Der Bildhauer Jean-Baptiste Debay hat dort zahlreiche Statuen aufgestellt. Auf den Balkonen der zentralen Galerie scheinen gemeißelte Kinder über die Spaziergänger zu wachen. Entlang der Wände stellen Figuren die Künste, die Wissenschaften, den Handel und die Industrie dar, alles, worauf die Stadt im 19. Jahrhundert stolz war. Überall entdeckt man Details: Medaillons, gemeißelte Köpfe, Girlanden, Säulen. Die Geländer und Brüstungen sind aus Gusseisen und mit feinen Mustern verziert. Abends beleuchten Gaslampen die Passage und verleihen ihr eine geheimnisvolle Stimmung. Wenn man nach oben schaut, die Treppen hinabsteigt und in die Ecken blickt, hat man das Gefühl, einen kleinen Palast voller Geheimnisse zu erkunden, in dem man bei jedem Besuch ein neues Detail entdeckt.`,
        caption: 'Die Galerie der Uhr',
      },
      {
        title: 'Ein Ort, der die Zeit überdauert',
        subtitle: '1976',
        content: `Die Jahre vergehen, doch die Passage Pommeraye bleibt ein Ort, den die Menschen in Nantes lieben. Die Läden wechseln: Hutmacher und Modistinnen weichen anderen Geschäften, im Rhythmus der Moden. Die Passage übersteht die Kriege, insbesondere die Bombardierungen, die Nantes im Zweiten Weltkrieg schwer treffen. Nach und nach begreift man, dass sie ein wahrer Schatz des Kulturerbes ist. 1976 wird sie unter Denkmalschutz gestellt, das heißt, sie ist geschützt und darf ohne Genehmigung nicht mehr verändert werden. Das ist eine wichtige Anerkennung. Unter allen überdachten Passagen, die im 19. Jahrhundert in Frankreich gebaut wurden, sind nur sehr wenige so originell. Mit ihren Ebenen, ihrer großen Treppe und ihren Skulpturen gilt die Passage Pommeraye als eine der schönsten überdachten Passagen Europas.`,
        hint,
        info: `Am 4. Juli 1843 eingeweiht, verbindet die Passage Pommeraye zwei Straßen mit mehr als 9 Metern Höhenunterschied: daher ihre berühmte große Treppe, umgeben von Balkongalerien und Statuen und gekrönt von einem Glasdach.`,
      },
      {
        title: 'Die Passage im Kino',
        subtitle: 'Jacques Demy',
        content: `Die Passage Pommeraye hat auch Künstler inspiriert, besonders einen großen Filmemacher aus Nantes: Jacques Demy. Demy wuchs als Kind in Nantes auf und liebte diese Passage. Als Regisseur hat er sie in mehreren seiner Filme gedreht. In „Lola“, 1961 erschienen, dient die Passage als Kulisse für wichtige Szenen. Sie erscheint auch in „Die Regenschirme von Cherbourg“ und in „Une chambre en ville“, einem Film, der vollständig in Nantes spielt. Später erzählte Jacques Demys Frau, die Regisseurin Agnès Varda, die Kindheit ihres Mannes in einem Film namens „Jacquot de Nantes“, in dem die Passage wieder zu sehen ist. Dank des Kinos haben Zuschauer auf der ganzen Welt diesen magischen Ort entdeckt. Noch heute kommen Fotografen und Regisseure, um die besondere Stimmung seiner Treppen und seines Glasdachs einzufangen.`,
        caption: 'Die große Treppe, alte Postkarte',
      },
      {
        title: 'Eine große Renovierung',
        subtitle: 'Die Restaurierung',
        content: `Mit der Zeit verschmutzt der Stein, das Metall rostet und das Glasdach wird undicht. Um die Passage zu retten, werden umfangreiche Restaurierungsarbeiten durchgeführt. Die Skulpturen werden sorgfältig, eine nach der anderen, gereinigt, um ihre weiße Farbe zurückzuerhalten. Die Gusseisenteile werden repariert und neu gestrichen, und das Glasdach wird instand gesetzt, damit wieder das ganze Licht hereinfällt. Die spezialisierten Handwerker arbeiten wie Chirurgen: Sie müssen reparieren, ohne zu beschädigen, und das ursprüngliche Aussehen bewahren. Während der Arbeiten lebt die Passage oft weiter, mit ihren Händlern und Besuchern. Eine solche Baustelle ist teuer und verlangt viel Geduld. Doch das Ergebnis lohnt sich: Die Passage Pommeraye erstrahlt wieder wie zur Zeit ihrer Einweihung, zur großen Freude der Spaziergänger.`,
        caption: 'Die Galerie der Läden',
      },
      {
        title: 'Die Passage heute',
        subtitle: 'Heute',
        content: `Heute ist die Passage Pommeraye zugleich Einkaufsort und Denkmal, das man besichtigt. Es gibt Mode-, Deko- und Geschenkläden, Chocolatiers und Designer. Sie ist noch immer praktisch, um vom unteren in den oberen Teil des Viertels zu gelangen, zwischen der Rue de la Fosse und der Rue Crébillon, einer der belebtesten Einkaufsstraßen von Nantes. Jeden Tag durchqueren sie Tausende Menschen: eilige Einheimische, staunende Touristen, Familien, die auf der großen Treppe Fotos machen. Die Passage gehört zur Route des „Voyage à Nantes“, der grünen Linie auf dem Boden, die Besucher zu den schönsten Orten der Stadt führt. Für viele Touristen ist sie eine der eindrucksvollsten Stationen ihrer Entdeckung von Nantes.`,
        caption: 'Der gemeißelte Bogen und sein Glasdach',
      },
      {
        title: 'Ein verborgener Schatz im Herzen der Stadt',
        subtitle: 'Gestern und morgen',
        content: `Die Passage Pommeraye erzählt eine schöne Geschichte: die eines Mannes, der ein verrücktes Projekt wagte, auch wenn es ihn sein Vermögen kostete. Er verwandelte ein Problem, einen zu steilen Hang, in ein Kunstwerk, in dem man gern flaniert. Fast zwei Jahrhunderte später lebt sein Traum noch immer. Die Skulpturen wachen weiter über die Spaziergänger, das Licht fällt noch immer durch das große Glasdach, und die Treppen verbinden weiterhin die untere und die obere Stadt. Wenn Sie das nächste Mal hindurchgehen, nehmen Sie sich Zeit, stehen zu bleiben. Schauen Sie hinauf zu den Statuen, betrachten Sie die Details der Balustraden, stellen Sie sich die Damen in langen Kleidern und die Herren mit Zylinder vor, die hier 1843 flanierten. Sie werden sehen: Die Passage Pommeraye ist nicht nur eine Abkürzung, sie ist eine Reise in die Vergangenheit.`,
        caption: 'Die Passage Pommeraye, alte Postkarte',
      },
    ],
  },

  // ═════════════════════════ MACHINES DE L’ÎLE ═════════════════════════
  machines: {
    meta: {
      shelfTitle: 'Die Maschinen der Insel',
      coverKicker: 'Geschichte der',
      coverTitle: 'Maschinen der Insel',
      spineTitle: 'Die Maschinen der Insel',
      titlePageHeading: 'Kulturerbe von Nantes',
      titlePageTitle: 'Die Maschinen der Insel',
      titlePageSubtitle: 'Wenn die Träume von Jules Verne in Nantes lebendig werden',
      titlePageImprint: imprint,
      runningHead: 'Die Maschinen der Insel',
    },
    chapters: [
      {
        title: 'Eine Insel der Schiffe',
        subtitle: '20. Jahrhundert',
        content: `Mitten in der Loire, in Nantes, liegt eine große Insel. Mehr als ein Jahrhundert lang war ein Teil dieser Insel von Werften belegt, also Fabriken, in denen Schiffe gebaut wurden. Tausende Arbeiter waren dort beschäftigt: Schweißer, Zimmerleute, Kesselschmiede, Maler … Sie bauten riesige Schiffe, Frachter, Passagierdampfer und sogar U-Boote. Der Lärm der Hämmer und Maschinen hallte Tag und Nacht. Die großen Kräne ragten über den Fluss, und jeder Stapellauf eines neuen Schiffes war ein Fest für die Stadt. Die Werften waren der Stolz und der Reichtum von Nantes. Doch ab den 1970er-Jahren gerät der Schiffbau in eine Krise. Die Aufträge gehen zurück, die Konkurrenz aus anderen Ländern wird sehr stark, und die Zukunft der Werften wird ungewiss.`,
        caption: 'Panoramablick auf den Hafen von Nantes, alte Postkarte',
      },
      {
        title: 'Das Ende der Werften',
        subtitle: '1987',
        content: `1987 schließt die letzte Werft von Nantes ihre Tore. Es ist ein sehr trauriger Moment für die Stadt. Tausende Menschen verlieren ihre Arbeit, und ein ganzer Teil der Geschichte von Nantes scheint stillzustehen. Auf der Insel stehen die riesigen Hallen, in denen die Schiffe gebaut wurden, leer und still. Die Kräne bewegen sich nicht mehr, und zwischen den Schienen wächst Gras. Jahrelang bleibt das große Gelände ein wenig vergessen. Doch die Stadt Nantes will diesen Ort nicht verfallen lassen. Sie startet ein großes Projekt, um die Insel zu verwandeln: neue Viertel, Parks, Schulen und Büros bauen und die Erinnerung an die Arbeitervergangenheit bewahren. Man braucht auch eine starke Idee, die die alten Hallen wiederbelebt und die Menschen wieder an diesen geschichtsträchtigen Ort lockt.`,
        caption: 'Die Werkstätten der Werften',
      },
      {
        title: 'Zwei Erfinder von Träumen',
        subtitle: 'Die Schöpfer',
        content: `Diese Idee kommt von zwei leidenschaftlichen Künstlern: François Delarozière und Pierre Orefice. François Delarozière baut Maschinen für Aufführungen. Mit der Straßentheatertruppe Royal de Luxe hat er bereits bewegliche Riesen erfunden, die durch die Straßen der Städte laufen und riesige Menschenmengen begeistern. Pierre Orefice versteht es, große künstlerische Projekte aufzubauen und zu organisieren. Gemeinsam stellen sie sich einen unglaublichen Ort vor: eine Werkstatt, in der riesige Maschinen in Tiergestalt gebaut werden, auf die das Publikum steigen kann. Ihr Projekt ist von zwei großen Träumern inspiriert. Der erste ist Jules Verne, der 1828 in Nantes geborene Schriftsteller, der sich außergewöhnliche Reisen auf den Meeresgrund und um die Welt ausdachte. Der zweite ist Leonardo da Vinci, das Genie der Renaissance, das Flugmaschinen und erstaunliche Mechanismen zeichnete.`,
        caption: 'François Delarozière und Pierre Orefice vor dem Reiher',
      },
      {
        title: 'Die Werkstatt der Maschinen',
        subtitle: 'Die Werkstatt',
        content: `Die beiden Künstler ziehen in die alten Hallen der Werften. Das ist kein Zufall: Diese Gebäude wurden für den Bau von Metallschiffen errichtet, und sie eignen sich perfekt für riesige Maschinen. In der Werkstatt macht sich ein Team von Fachleuten an die Arbeit: Zeichner, Schreiner, Schweißer, Mechaniker, Bildhauer. Sie verwenden Holz, Stahl, Leder und Hydrauliksysteme, um ihre Kreaturen zum Leben zu erwecken. Jede Maschine beginnt mit Zeichnungen und Modellen und wird dann Stück für Stück gebaut. Das Besondere an diesem Ort ist, dass die Werkstatt für das Publikum offen ist. Die Besucher können den Konstrukteuren von einem Laufsteg aus bei der Arbeit zusehen. So wird das Können der alten Werftarbeiter gewissermaßen an diese neuen Handwerker der Träume weitergegeben.`,
        caption: 'Der Reiher im Flug in der Galerie der Maschinen',
      },
      {
        title: 'Der Große Elefant',
        subtitle: 'Seit 2007',
        content: `Am 1. Juli 2007 öffnen die Machines de l’Île ihre Tore, mit einem spektakulären Star: dem Großen Elefanten. Er ist 12 Meter hoch, 8 Meter breit und wiegt etwa 45 Tonnen. Er besteht aus Holz und Stahl, und seine Mechanik ist sichtbar wie die einer riesigen Uhr. Auf seinem Rücken bietet ein mehrstöckiges Haus Platz für fast 50 Passagiere. Der Elefant spaziert etwa 45 Minuten lang langsam um die alten Werften. Er bewegt Rüssel, Ohren und Beine und stößt sogar ein lautes Trompeten aus! Vorsicht, Passanten: Er kann sie auch mit seinem Rüssel bespritzen. Seit 2007 hat er fast anderthalb Millionen Passagiere befördert. 2026, nach fast zwanzig Jahren Spaziergängen, gönnt er sich eine verdiente Pause für eine große mechanische Überholung.`,
        caption: 'Der Große Elefant vor dem Karussell',
      },
      {
        title: 'Die Galerie der Maschinen',
        subtitle: 'Die Galerie',
        content: `Neben der Werkstatt befindet sich die Galerie der Maschinen. Sie ist ein Ausstellungsort, aber kein gewöhnlicher: Hier schaut man nicht nur zu. Die Kreaturen werden vor den Besuchern in Bewegung gesetzt, und manche dürfen sie sogar steuern! Man begegnet einer Riesenameise, einer Spinne, einer Raupe, einem Reiher, der mit den Flügeln schlägt, oder erstaunlichen Meerestieren. Die Maschinisten, die man auch „Piloten“ nennt, erklären, wie jede Maschine funktioniert, und laden das Publikum ein, an Bord zu gehen. Die Galerie zeigt auch die Zeichnungen, Modelle und Filme, die die Entstehungsschritte zeigen. So entdeckt man, dass es manchmal Jahre der Fantasie und Arbeit braucht, um eine einzige Maschine zum Leben zu erwecken. Jede Saison können neue Kreaturen auftauchen.`,
        hint,
        info: `Der Große Elefant: 12 Meter hoch, 8 Meter breit, etwa 45 Tonnen Holz und Stahl. Auf seinem Rücken trägt ein mehrstöckiges Haus fast 50 Passagiere auf einem 45-minütigen Spaziergang.`,
      },
      {
        title: 'Das Karussell der Meereswelten',
        subtitle: '2012',
        content: `2012 öffnet am Ufer der Loire eine neue außergewöhnliche Attraktion: das Karussell der Meereswelten. Es ist kein gewöhnliches Karussell mit Holzpferden! Fast 25 Meter hoch, sieht es aus wie ein riesiges Aquarium auf drei Ebenen. Jede Ebene stellt eine Unterwasserwelt dar: den Meeresgrund, die Tiefsee und die Meeresoberfläche. Rund dreißig seltsame Kreaturen leben dort: ein Riesenkalmar, ein Laternenfisch, eine Krabbe, ein Rochen, Schiffe … Die Besucher drehen sich nicht nur im Kreis: Sie können mit Hebeln und Griffen die Flossen, Tentakel oder Scheren der Tiere bewegen. Das Karussell ist eine Hommage an Jules Verne und seinen Roman „Zwanzigtausend Meilen unter dem Meer“, in dem Kapitän Nemo an Bord des U-Boots Nautilus die Tiefen erkundet.`,
        caption: 'Das Karussell der Meereswelten bei Einbruch der Nacht',
      },
      {
        title: 'Der Traum vom Reiherbaum',
        subtitle: 'Ein geträumtes Projekt',
        content: `Die Schöpfer der Maschinen haben sich auch ein noch verrückteres Projekt ausgedacht: den Reiherbaum. Es sollte ein riesiger Baum aus Stahl werden, etwa 35 Meter hoch, bedeckt mit Pflanzen und hängenden Gärten. An der Spitze sollten zwei große mechanische Reiher die Besucher zu einem Flug über die Stadt in die Luft tragen. Ein Vorführast wurde gebaut, um die Idee zu testen, und das Publikum konnte ihn entdecken. Der Baum sollte neben einem alten Granitsteinbruch stehen, der in einen wunderbaren Garten verwandelt wurde, den Jardin extraordinaire, mit seinem Wasserfall und Pflanzen aus aller Welt. Doch das Projekt war sehr teuer und löste viele Debatten aus. Schließlich wurde es aufgegeben. Der Jardin extraordinaire ist jedoch für das Publikum geöffnet. Und der Traum von den Reihern lebt in den Zeichnungen und in der Galerie weiter.`,
        caption: 'Das Projekt des Reiherbaums',
      },
      {
        title: 'Eine Insel mit neuem Leben',
        subtitle: 'Heute',
        content: `Dank der Maschinen hat sich die Île de Nantes völlig verändert. Wo früher Schiffe gebaut wurden, spazieren heute Familien, picknicken, spielen und staunen. Die alten gelben und grauen Kräne sind noch da, sie sind zu Symbolen der Arbeitervergangenheit geworden. Die Hallen beherbergen Cafés, Restaurants und Spielbereiche. Jedes Jahr kommen mehrere Hunderttausend Besucher aus ganz Frankreich und der ganzen Welt, um den Großen Elefanten und seine Freunde zu sehen. Die Machines de l’Île sind zu einem der berühmtesten Orte von Nantes geworden, ebenso wie das Schloss der Herzöge der Bretagne. Sie zeigen, dass sich eine Stadt neu erfinden kann, indem sie Kunst, Erinnerung und Fantasie verbindet. Das ganze Viertel hat sich um sie herum entwickelt, mit Schulen, Wohnungen und Unternehmen.`,
        caption: 'Die Île de Nantes aus der Luft',
      },
      {
        title: 'Die Macht der Fantasie',
        subtitle: 'Morgen',
        content: `Die Geschichte der Machines de l’Île ist die einer Insel, die ihre Traurigkeit in einen Traum zu verwandeln wusste. Als die Werften schlossen, hätte Nantes diesen Ort vergessen können. Stattdessen beschlossen Künstler, dort eine Fantasiewelt entstehen zu lassen, irgendwo zwischen den Romanen von Jules Verne, den Erfindungen Leonardo da Vincis und dem Können der Arbeiter von früher. Die Maschinen erinnern uns daran, niemals aufzuhören zu träumen. Eine einfache Idee, auf ein Blatt Papier gezeichnet, kann zu einem 45 Tonnen schweren Elefanten werden, der durch die Stadt läuft! Wenn Sie das nächste Mal dem Großen Elefanten begegnen oder auf das Karussell steigen, denken Sie an die Arbeiter, die hier Schiffe bauten, und an die Erfinder, die ihre Insel wiederbelebt haben. Und wer weiß: Vielleicht entspringt die nächste Maschine Ihrer Fantasie.`,
        caption: 'Nantes und seine Inseln aus der Vogelperspektive',
      },
    ],
  },

  // ═════════════════════════ DIE KATHEDRALE ═════════════════════════
  cathedrale: {
    meta: {
      shelfTitle: 'Die Kathedrale Saint-Pierre-et-Saint-Paul',
      coverKicker: 'Geschichte der',
      coverTitle: 'Kathedrale Saint-Pierre et Saint-Paul',
      spineTitle: 'Kathedrale Saint-Pierre-et-Saint-Paul',
      titlePageHeading: 'Kulturerbe von Nantes',
      titlePageTitle: 'Die Kathedrale Saint-Pierre-et-Saint-Paul',
      titlePageSubtitle: 'Fast sechs Jahrhunderte Bau, Gebet und Prüfungen',
      titlePageImprint: imprint,
      runningHead: 'Die Kathedrale von Nantes',
    },
    chapters: [
      {
        title: 'Vor der Kathedrale',
        subtitle: '4. – 11. Jahrhundert',
        content: `Lange vor der großen Kathedrale, die wir heute kennen, war dieser Ort in Nantes bereits ein Ort des Gebets. Schon im 4. Jahrhundert, in römischer Zeit, bauten die ersten Christen der Stadt hier eine Kirche. Im 6. Jahrhundert ließ Bischof Felix eine Kathedrale errichten, die um das Jahr 568 geweiht wurde. Sie wird als sehr schön beschrieben, mit einem Dach, das in der Sonne glänzte. Doch im 9. Jahrhundert griffen die Wikinger Nantes an und verwüsteten die Stadt. 843 drangen sie in die Kathedrale ein und fielen über die Gläubigen her, die dort Zuflucht gesucht hatten, darunter der Bischof. Im 11. Jahrhundert wurde eine neue Kathedrale im romanischen Stil gebaut, mit dicken Mauern, Rundbögen und kleinen Fenstern. Auf dieser romanischen Kirche sollte einige Jahrhunderte später die gotische Kathedrale entstehen, die wir heute bewundern.`,
        caption: 'Blick auf die Kathedrale, vor 1930',
      },
      {
        title: 'Der Grundstein',
        subtitle: '14. April 1434',
        content: `Im 15. Jahrhundert ist die Bretagne ein reiches und mächtiges Herzogtum. Herzog Johann V. und Bischof Jean de Malestroit wollen eine Kathedrale, die ihrer Hauptstadt würdig ist, so groß und schön wie die anderer Städte Europas. Am 14. April 1434 legen sie gemeinsam den Grundstein der neuen Kathedrale. Die Idee ist klug: Statt alles auf einmal abzureißen, baut man die gotische Kathedrale nach und nach um die alte romanische Kirche herum, damit die Gläubigen weiter dort beten können. Die Arbeiten werden Baumeistern anvertraut, zuerst Guillaume de Dammartin, dann Mathelin Rodier, demselben, der auch am Schloss der Herzöge arbeitet. Niemand ahnt damals, dass diese Baustelle mehr als viereinhalb Jahrhunderte dauern wird und keiner derer, die sie begonnen haben, sie vollendet sehen wird.`,
        caption: 'Die freigelegten Überreste der romanischen Kirche',
      },
      {
        title: 'Der flamboyante gotische Stil',
        subtitle: '15. Jahrhundert',
        content: `Die Kathedrale von Nantes ist im gotischen Stil erbaut, genauer gesagt im „flamboyanten“ Stil, der Flammengotik. Man nennt ihn so, weil die Steinverzierungen, vor allem in den Fenstern, wie tanzende Flammen aussehen. Die Gotik ermöglicht sehr hohe und helle Kirchen, dank Spitzbögen, schlanker Pfeiler und großer Fenster mit Glasmalereien. In Nantes verwenden die Baumeister Tuffeau, einen weißen und weichen Stein von den Ufern der Loire, der sich leichter bearbeiten lässt. Deshalb ist das Innere der Kathedrale so hell und lichtdurchflutet. Ihr großes Gewölbe erhebt sich auf etwa 37 Meter Höhe: höher als das von Notre-Dame de Paris! Wenn man nach oben schaut, hat man den Eindruck, dass die Pfeiler bis in den Himmel steigen, wie die Stämme eines riesigen Waldes aus Stein.`,
        caption: 'Die unvollendete Kathedrale, alte Zeichnung',
      },
      {
        title: 'Die Fassade und ihre Türme',
        subtitle: '1480 – 1520',
        content: `Die Baumeister beginnen mit der Fassade, die um 1480 fertig ist. Sie hat fünf skulptierte Portale, bedeckt mit Hunderten kleiner Figuren: Heilige, Engel, Propheten, Szenen aus der Bibel. Ein wahres Bilderbuch aus Stein, durch das die Gläubigen, die oft nicht lesen konnten, die religiösen Geschichten kennenlernten. Über der Fassade erheben sich zwei große quadratische Türme, die um 1490 vollendet werden. Sie beherbergen die Glocken der alten romanischen Kathedrale, die die Stunden und Feste läuten. Anne de Bretagne, inzwischen Königin von Frankreich, stiftet ein großes Kirchenfenster für die Fassade, das 1498 eingesetzt wird. Dann, um 1520, stockt die Baustelle. Kriege, Geldmangel und der Wandel der Zeit unterbrechen die Arbeiten fast ein Jahrhundert lang. Die Kathedrale bleibt lange unvollendet.`,
        caption: 'Das Kirchenschiff und seine hohen Pfeiler, Lithografie',
      },
      {
        title: 'Das Grabmal von Herzog Franz II.',
        subtitle: 'Anfang des 16. Jahrhunderts',
        content: `Die Kathedrale birgt einen der schönsten Schätze der Renaissance-Bildhauerei in Frankreich: das Grabmal von Herzog Franz II. und seiner Frau Marguerite de Foix, den Eltern von Anne de Bretagne. Anne selbst ließ es Anfang des 16. Jahrhunderts anfertigen, um das Andenken ihrer Eltern zu ehren. Es wurde vom Maler Jean Perréal entworfen und von Michel Colombe gemeißelt, einem der besten Bildhauer seiner Zeit. Auf dem Grabmal liegen der Herzog und die Herzogin mit gefalteten Händen. An den vier Ecken stehen vier große Frauenstatuen, die die Tugenden darstellen: Gerechtigkeit, Stärke, Mäßigung und Klugheit. Die Klugheit hat eine erstaunliche Besonderheit: Sie hat zwei Gesichter, vorn das einer jungen Frau und hinten das eines alten Mannes, um zu zeigen, dass man aus der Vergangenheit lernen muss.`,
        caption: 'Das Grabmal von Franz II., Herzog der Bretagne',
      },
      {
        title: 'Eine Baustelle ohne Ende',
        subtitle: '17. – 19. Jahrhundert',
        content: `Im 17. Jahrhundert werden die Arbeiten langsam wieder aufgenommen, vor allem im Inneren. Doch die Kathedrale erlebt schwere Zeiten. Während der Französischen Revolution wird sie für den Gottesdienst geschlossen und in ein Lagerhaus verwandelt: Ihre Statuen werden beschädigt und ihre wertvollen Gegenstände verstreut. Im Jahr 1800 bläst die Explosion eines Turms des benachbarten Schlosses, in dem Pulver lagerte, zahlreiche Kirchenfenster heraus und beschädigt das Dach. 1802 wird die Kathedrale den Gläubigen zurückgegeben. 1815 wird das Grabmal von Franz II., das in einer anderen, zerstörten Kirche stand, in der Kathedrale aufgestellt. Dann, 1835, beschließt man endlich, die Baustelle zu vollenden. Der alte romanische Chor wird durch einen gotischen Chor ersetzt, und man entdeckt unter dem Boden die Krypta der romanischen Kirche wieder. Die Arbeiter des 19. Jahrhunderts respektieren den Stil, den ihre Vorfahren im 15. Jahrhundert erdacht hatten.`,
        caption: 'Die Place Saint-Pierre, alte Postkarte',
      },
      {
        title: 'Endlich vollendet!',
        subtitle: '25. Dezember 1891',
        content: `Am 25. Dezember 1891, am Weihnachtstag, wird die Kathedrale endlich vom Bischof von Nantes eingeweiht. Seit der Grundsteinlegung 1434 waren 457 Jahre Bauzeit nötig! Dutzende Generationen von Steinmetzen, Bildhauern, Zimmerleuten und Glasmalern haben sich auf dieser Baustelle abgelöst. Und doch ist das Ergebnis von großer Harmonie: Man kann kaum glauben, dass manche Teile mehr als vier Jahrhunderte auseinander gebaut wurden. Die Kathedrale wurde bereits 1862 unter Denkmalschutz gestellt. Doch das 20. Jahrhundert hält neue Prüfungen für sie bereit. 1944, während des Zweiten Weltkriegs, beschädigen Bombardierungen das Gebäude und zerstören einen Teil der Kirchenfenster. Nach dem Krieg machen sich die Restauratoren wieder an die Arbeit, um ihre Wunden zu heilen.`,
        hint,
        info: `1434 begonnen und 1891 eingeweiht: 457 Jahre Bauzeit für diese Fassade mit ihren zwei quadratischen Türmen, ihren fünf skulptierten Portalen und ihrem Tuffsteingewölbe, das 37 Meter hoch aufragt.`,
      },
      {
        title: 'Der Brand von 1972',
        subtitle: '28. Januar 1972',
        content: `Am 28. Januar 1972 geschieht ein schreckliches Unglück. Bei Arbeiten am Dach bricht ein Feuer aus. Die Flammen verschlingen den hölzernen Dachstuhl, und das Dach stürzt teilweise ein. Die Feuerwehrleute kämpfen den ganzen Tag, und die Menschen in Nantes sehen hilflos zu, wie ihre Kathedrale brennt. Zum Glück halten die Steingewölbe größtenteils stand und schützen das Innere. Doch die Schäden sind gewaltig. Es braucht dreizehn Jahre Restaurierung, um sie zu beheben. Damit sich ein solches Unglück nicht wiederholt, wird der neue Dachstuhl nicht mehr aus Holz, sondern aus Beton gebaut, einem Material, das nicht brennt. Die Skulpturen und Kirchenfenster werden restauriert, und der weiße Stein wird gereinigt. Anfang der 2000er-Jahre werden die Fassade und das Äußere renoviert. Die Kathedrale erstrahlt wieder in leuchtendem Weiß.`,
        caption: 'Die Kathedrale in Flammen, Gemälde',
      },
      {
        title: 'Der Brand von 2020',
        subtitle: '2020 – 2025',
        content: `Am 18. Juli 2020 trifft ein neues Unglück die Kathedrale. Am frühen Morgen bricht im Inneren ein vorsätzlich gelegtes Feuer aus. Es zerstört die große Orgel, ein außergewöhnliches Instrument aus dem 17. Jahrhundert, sowie einen Teil der Kirchenfenster. Die Hitze und das Löschwasser beschädigen auch die Gewölbe. Dieser Brand ereignet sich nur ein Jahr nach dem von Notre-Dame de Paris, und ganz Frankreich ist erschüttert. Eine riesige Baustelle beginnt. Steinmetze, Zimmerleute, Glasmaler und Kunstrestauratoren lösen sich fünf Jahre lang ab. Die Gewölbe werden gefestigt, die geschwärzten Steine gereinigt und neue Kirchenfenster geschaffen. Am 28. September 2025 öffnet die Kathedrale bei einer großen Feier endlich wieder für das Publikum. Die zerstörte große Orgel muss noch neu gebaut werden.`,
        caption: 'Der brennende Dachstuhl',
      },
      {
        title: 'Eine Kathedrale, die immer wieder aufersteht',
        subtitle: 'Heute',
        content: `Die Kathedrale Saint-Pierre-et-Saint-Paul von Nantes hat eine außergewöhnliche Geschichte. Sie wurde fast fünf Jahrhunderte lang gebaut und von Kriegen, Revolutionen, einer Explosion und zwei großen Bränden beschädigt. Und doch steht sie noch immer, aufrecht und lichtdurchflutet. Jedes Mal haben sich Frauen und Männer zusammengetan, um sie zu reparieren und an die nächsten Generationen weiterzugeben. Heute empfängt sie sowohl Gläubige, die zum Beten kommen, als auch Besucher, die ihre Architektur bewundern. Schauen Sie beim Eintreten hinauf zum weißen Gewölbe, nähern Sie sich dem Grabmal von Franz II., um das doppelte Gesicht der Klugheit zu entdecken, und steigen Sie in die Krypta hinab, um die Spuren der romanischen Kathedrale zu sehen. Dann werden Sie verstehen, dass dieses Denkmal nicht nur ein Bauwerk aus Stein ist: Es ist das lebendige Gedächtnis von Nantes.`,
        caption: 'Die beleuchtete Fassade bei Einbruch der Nacht',
      },
    ],
  },
}
