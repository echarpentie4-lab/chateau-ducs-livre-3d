// 🇬🇧 English translation of the five books (same chapter order as src/data/livres/*.js)
const hint = 'Click the model to take a closer look'
const imprint = 'Nantes, at the Heritage Archivist’s'

export default {
  // ═════════════════════════ THE CHÂTEAU ═════════════════════════
  chateau: {
    meta: {
      shelfTitle: 'The Castle of the Dukes of Brittany',
      coverKicker: 'History of the',
      coverTitle: 'Castle of the Dukes of Brittany',
      spineTitle: 'Castle of the Dukes of Brittany',
      titlePageHeading: 'Heritage of Nantes',
      titlePageTitle: 'The Castle of the Dukes of Brittany',
      titlePageSubtitle: 'A thousand years of history on the banks of the Loire',
      titlePageImprint: 'Nantes, at the Castle Archivist’s',
      runningHead: 'The Castle of the Dukes of Brittany',
    },
    chapters: [
      {
        title: 'By the river',
        subtitle: 'From Antiquity to the 3rd century',
        content: `A very long time ago, where the river Erdre meets the Loire, people settled on a small hill overlooking the marshes. The spot was perfect: water protected it on several sides, and boats could land easily. In Roman times a town grew up here. It took the name of the Gallic people who lived there, the Namnetes: this was the birth of Nantes. Around the 3rd century, to protect itself from attacks, the town surrounded itself with a great stone wall. In one corner of this wall, right by the river, guards could watch every boat that arrived. It was at this very spot that, centuries later, a castle would be born. Each era would build on the traces of the one before, like writing a new page in an old book.`,
        caption: 'The castle on the banks of the Loire — old postcard',
      },
      {
        title: 'The Vikings',
        subtitle: '843 – 937',
        content: `In the year 843, strange ships sailed up the Loire: the longships of the Vikings, warriors from northern Europe. They attacked Nantes by surprise, plundered the town and even fell upon the people who had taken refuge in the cathedral. For almost a hundred years the Vikings kept coming back, and they even ended up settling in the region. The people of Nantes lived in fear. Then came a brave Breton leader, Alan Barbetorte, who had grown up in exile in England. In 937 he returned to Brittany and drove the Vikings out of Nantes. It is said that he had to cut his way through brambles to reach the abandoned cathedral. He made Nantes his capital and strengthened the town’s defences, especially on the river side, where danger had always come from.`,
        caption: 'The Vikings drag their longships onto the shore',
      },
      {
        title: 'The New Tower',
        subtitle: 'Around 1207 – 14th century',
        content: `Around 1207, Lord Guy de Thouars, who ruled Brittany on behalf of his daughter, had a new fortress built by the Loire, in the corner of the old Roman wall. It was called the “Tour Neuve”, the New Tower, to tell it apart from an older castle in the centre of town, the Bouffay. Over the years, the dukes of Brittany — the princes who ruled the region — enlarged it and chose to live there. In the 14th century, Brittany went through a long war between two families who both wanted to rule the duchy. The Montfort family won. The new duke, John IV, strengthened the castle and had a great tower built there, the Old Keep. Its remains can still be seen today in the castle courtyard.`,
        caption: 'Plan of the castle of Nantes in 1600',
      },
      {
        title: 'Francis II, the builder duke',
        subtitle: '1458 – 1466',
        content: `In 1458, Francis II became Duke of Brittany. At that time Brittany was almost an independent country: it had its own currency, its own laws and its own ambassadors. But the King of France, its powerful neighbour, would have liked to control it. In 1466, Francis II decided to build a bigger, stronger and more beautiful castle. From the outside it is a true fortress: high walls, seven great towers and moats filled with water from the Loire. But once over the drawbridge, you discover a real palace in the courtyard, with large windows and beautiful white stone called tuffeau. This is where the duke’s court lived. Feasts, banquets and receptions were held there. The castle showed everyone the wealth and power of Brittany.`,
        caption: 'The entrance towers and the bridge',
      },
      {
        title: 'The fortress of Francis II',
        subtitle: 'Pop-up plate',
        content: `Seven great towers, high curtain walls and moats filled by the Loire: from the outside, it is a fortress. But behind the drawbridge hides a palace of white tuffeau stone, where the duke’s court lives.`,
        hint,
        info: `Built from 1466 by Francis II, the castle combines a military fortress (towers, curtain walls, moats) with a Renaissance palace (the Grand Logis, whose dormer windows are carved like lace).`,
      },
      {
        title: 'Anne of Brittany',
        subtitle: '1477 – 1491',
        content: `On 25 January 1477, a little girl was born in the castle: Anne, daughter of Duke Francis II. As her father had no son, she would one day inherit Brittany. Very soon, princes from all over Europe wanted to marry her, because marrying Anne meant gaining Brittany! But the King of France wanted to seize the duchy. War broke out. In 1488 the Breton army was defeated at Saint-Aubin-du-Cormier. A few weeks later, Francis II died. Anne was only 11 years old, and now she was Duchess of Brittany. She tried to resist, but French troops took Nantes and its castle in 1491. To protect her country, Anne had no choice: in December 1491 she married the King of France, Charles VIII. The young duchess became Queen of France.`,
        caption: 'Anne of Brittany, old engraving',
      },
      {
        title: 'Twice queen',
        subtitle: '1498 – 1514',
        content: `In 1498, King Charles VIII died after hitting his head on a low door at the château of Amboise. Anne returned to Brittany and ruled her duchy once more. But the story was not over: on 8 January 1499 she married the new king, Louis XII, in the chapel of the castle of Nantes. She is the only woman in history to have been Queen of France twice! Anne loved her castle. She had the work begun by her father completed. She had the Grand Logis, the main building, decorated with stone carvings as fine as lace, and built a tower with elegant balconies, the Tower of the Golden Crown. When she died in 1514, her heart was placed in a precious golden box and brought back to Nantes, close to her parents.`,
        caption: 'Anne of Brittany, twice Queen of France',
      },
      {
        title: 'Brittany becomes French',
        subtitle: '1532 – 1598',
        content: `After Anne’s death, her daughter Claude married the future King Francis I. Brittany no longer had a duke of its own. In 1532 it was officially united with France, while keeping certain special rights. The castle no longer belonged to the dukes but to the king, who placed a governor there. A few years later, France was torn apart by the Wars of Religion between Catholics and Protestants. The Governor of Brittany, the Duke of Mercœur, refused to obey King Henry IV. He turned the castle into a citadel and added great bastions, pointed walls that better resisted cannonballs. In 1598 Mercœur finally submitted, and Henry IV came to Nantes. Impressed by the walls, he is said to have exclaimed: “The dukes of Brittany were no small fellows!” That same year he signed the Edict of Nantes there, which brought peace between Catholics and Protestants.`,
        caption: 'The arms of France and Brittany united under the crown',
      },
      {
        title: 'A prison for the king’s enemies',
        subtitle: '1626 – 1661',
        content: `In the 17th century, the castle was no longer a home for princes. With its thick walls and its soldiers, it became a prison for important people who had displeased the king. In 1626 the Count of Chalais was locked up there: he was accused of plotting against the powerful Cardinal Richelieu, and he would be sentenced to death. In 1654 it was the turn of Cardinal de Retz, an enemy of the minister Mazarin. But he had no intention of staying locked up! One August evening he escaped by sliding down a rope from the top of the ramparts, then fled on horseback. He fell and injured his shoulder, but he managed to get away. In 1661 the young King Louis XIV came to Nantes. There he had his finance minister, Nicolas Fouquet, arrested by d’Artagnan, the real musketeer who inspired the famous novel The Three Musketeers.`,
        caption: 'Beneath the castle vaults',
      },
      {
        title: 'Barracks, explosion and museum',
        subtitle: '1800 – 1924',
        content: `Little by little, the castle became a barracks: soldiers lived there, and weapons and gunpowder were stored there. That was dangerous… On 25 May 1800, the gunpowder stored in the Spaniards’ Tower exploded! The tower was completely destroyed, as was the chapel where Anne of Brittany had been married. In 1832 the castle received one last famous prisoner: the Duchess of Berry, arrested after spending long hours hidden behind a fireplace in a house in Nantes. In the 19th century people realised that the castle was a treasure of the past, and it was protected as a historic monument. In 1915 the city of Nantes bought it, and in 1924 opened a museum there. A little later, the arms of the Loire that crossed the city were filled in: the castle, which had always had its feet in the water, found itself in the middle of the city.`,
        caption: 'The explosion of the Spaniards’ Tower, 25 May 1800',
      },
      {
        title: 'The castle today',
        subtitle: 'Since 1990',
        content: `In the early 1990s, the city launched a huge project to restore the castle. For more than fifteen years, architects, stonemasons and historians brought back its splendour: the white stones were cleaned, the roofs and carvings repaired. In 2007 the castle reopened its doors, more beautiful than ever. Today it houses the Nantes History Museum, with 32 rooms telling the story of the city, from the dukes of Brittany to the present day. Anyone can cross the courtyard for free and walk along the ramparts to admire the city. Fortress against enemies, palace of dukes, home of a queen, prison, barracks and then museum: in a thousand years the castle has had many lives. But it is still there, proud and white, watching over Nantes.`,
        caption: 'The castle in the heart of the city',
      },
    ],
  },

  // ═════════════════════════ THE LIEU UNIQUE ═════════════════════════
  lieuUnique: {
    meta: {
      shelfTitle: 'The Lieu Unique',
      coverKicker: 'History of the',
      coverTitle: 'Lieu Unique',
      spineTitle: 'The Lieu Unique — former LU factory',
      titlePageHeading: 'Heritage of Nantes',
      titlePageTitle: 'The Lieu Unique',
      titlePageSubtitle: 'From the LU biscuit factory to a temple of culture',
      titlePageImprint: imprint,
      runningHead: 'The Lieu Unique',
    },
    chapters: [
      {
        title: 'A little Nantes pastry shop',
        subtitle: '1846',
        content: `In 1846, in Nantes, a young pastry cook from Lorraine, Jean-Romain Lefèvre, opened a shop on rue Boileau with his wife, Pauline-Isabelle Utile. Together they made biscuits and dry cakes, which they sold to the people of Nantes. The couple had the idea of combining their two names: Lefèvre and Utile. The initials of these two names give two letters that would become famous throughout France: L and U, “LU”. At that time Nantes was a great port. Sugar arrived from the West Indies, butter and flour came from the countryside of western France: everything was there to make good biscuits. The little shop did well, and customers kept coming back. But no one yet suspected that this neighbourhood pastry shop would become one of the largest biscuit factories in Europe, and give its name to a unique place.`,
        caption: 'The women and men of the LU biscuit factory',
      },
      {
        title: 'The invention of the Petit-Beurre',
        subtitle: '1886',
        content: `In 1886 their son, Louis Lefèvre-Utile, invented a biscuit that would travel around the world: the Petit-Beurre. It is simple, square, golden and crunchy. But its shape hides a fun little secret. It is said that its 4 corners represent the 4 seasons of the year, its 52 teeth recall the 52 weeks, and its 24 little holes stand for the 24 hours of a day. A biscuit for every day of the year! Louis was also a modern and passionate man. He loved photography and understood before anyone else the importance of advertising. He used to say that, to make people want to eat, nothing beats charming the eye. So he called on great artists, such as the painter Alfons Mucha, to design magnificent posters and decorated tin boxes that are still collected today.`,
        caption: 'A young worker in front of the biscuit oven',
      },
      {
        title: 'A factory in the heart of the city',
        subtitle: 'Early 20th century',
        content: `To make ever more biscuits, LU moved into a large factory by the water, along the Saint-Félix canal, right opposite the castle of the dukes of Brittany. Boats and trains brought the raw materials and left loaded with boxes of biscuits for the whole of France. Hundreds, then thousands of workers were employed there. In the neighbourhood, a delicious smell of warm biscuits floated in the air. At the beginning of the 20th century, the architect Auguste Bluysen designed two magnificent towers to frame the factory entrance. They were covered with mosaics and sculptures and topped with domes, like real lighthouses. These towers were not much use… except to show everyone the power of the brand! They were giant advertisements, visible from afar, and the pride of Nantes.`,
        caption: 'The biscuit packing workshop',
      },
      {
        title: 'The biscuit factory in the 20th century',
        subtitle: '20th century',
        content: `For decades, the LU factory ran at full speed. Modern machines gradually replaced handwork, and biscuits came out by the thousand every day. The Petit-Beurre, but also other cakes, became essential snacks for the children of France. But the factory also went through difficult times. During the Second World War, Nantes was heavily bombed in 1943, and the neighbourhood suffered. Later the company changed owners and grew even bigger. Over the 20th century, one of the two beautiful towers disappeared: only one would remain, the one we can still admire today. Little by little, the factory became too small and ill-suited. The city centre was no longer a good place to make biscuits in huge quantities, with lorries having to drive through narrow streets.`,
        caption: 'The factory and its two towers by the water',
      },
      {
        title: 'Departure and silence',
        subtitle: '1986',
        content: `In 1986, production left the centre of Nantes. LU biscuits were now made in a new factory in the countryside, south of the city. The great buildings along the canal were left empty. The machines fell silent, the workers left, the smell of biscuits disappeared. For several years the old factory stood abandoned. Windows broke, dust settled, and many wondered what on earth could be done with these immense halls. Some even thought of demolishing them. But artists saw this place as a wonderful playground. Theatre companies moved in to rehearse, build their sets and invent their shows. Among them was a Nantes company that would become very famous: Royal de Luxe, known for its giants that walk through the streets.`,
        caption: 'The Lefèvre-Utile factory, old postcard',
      },
      {
        title: 'A new idea',
        subtitle: '1990s',
        content: `In the 1990s, the city of Nantes decided to bet on culture to reinvent itself. One man, Jean Blaise, championed a bold project: transforming the old biscuit factory into a great place open to all the arts. For this he called on an unusual architect, Patrick Bouchain. He did not want to erase the factory’s past. On the contrary! He kept the brick walls, the metal beams, the great volumes and the traces of the workers’ labour. He repaired them, cleaned them and made them welcoming, without rebuilding everything. The idea was simple: let the past and the present live together. And since the place had to keep the memory of LU, it was given a clever name using those two famous letters: it would be the “lieu unique”, the unique place. At the same time, the last LU tower was restored with its original decorations and colours.`,
        hint,
        info: `Designed by Auguste Bluysen, the LU tower framed the biscuit factory entrance together with its twin. Restored for the opening of the Lieu Unique, it has regained its mosaics, its dome and its lantern.`,
      },
      {
        title: 'Opening for the year 2000',
        subtitle: 'December 1999',
        content: `At the end of December 1999, as the whole world was getting ready to celebrate the year 2000, the Lieu Unique opened its doors with a great party. The people of Nantes discovered their old factory transformed. Where biscuits used to be made, there were now performance halls, exhibition spaces, a bar, a restaurant, a bookshop and even a nursery for the little ones. To mark the moment, a surprising project was devised: the “Attic of the Century”. Residents were invited to place personal objects, letters or souvenirs in sealed boxes. These boxes were stored in a great wall and will only be opened in 2100, a hundred years later! It is a kind of message sent to the people of Nantes of the future, who will discover how people lived at the end of the 20th century.`,
        caption: 'The dome of the LU tower under construction',
      },
      {
        title: 'A place for all the arts',
        subtitle: 'Today',
        content: `Today the Lieu Unique is a “national stage”, a major cultural centre supported by the State and the city. People come for all sorts of reasons. You can see plays, dance and circus shows, listen to concerts, discover contemporary art exhibitions, attend debates or meet writers. Artists from all over the world come to work and create there. But the Lieu Unique is not only for art lovers. Many people from Nantes simply come for a drink at the bar, for lunch, to leaf through a book or to meet friends. It is a lively place where students, families, artists and the curious cross paths. It is precisely this mix that makes the Lieu Unique… unique!`,
        caption: 'The factory yard, in the days of biscuit crates',
      },
      {
        title: 'The LU tower and its gyrorama',
        subtitle: 'Since 2004',
        content: `The LU tower, sole survivor of the factory’s two towers, has regained all its splendour. With its mosaics, its sculptures and its dome, it stands proudly opposite the castle of the dukes of Brittany. But it hides a surprise! In 2004 it opened to the public with a curious machine installed at the very top: the gyrorama. It is a platform turned by a crank along the windows of the dome, as in a Jules Verne novel. Once aboard, at about 35 metres high, you discover a view over the whole city: the castle, the cathedral, the Loire and the rooftops of Nantes. Inside the tower you can also admire photographs taken by Louis Lefèvre-Utile himself, the inventor of the Petit-Beurre.`,
        caption: 'Model of the LU factory and its two towers',
      },
      {
        title: 'One place, two lives',
        subtitle: 'Yesterday and tomorrow',
        content: `The story of the Lieu Unique shows that a building can have several lives. For more than a century it fed generations of children with its biscuits. Today it feeds their curiosity with shows, works of art and encounters. Instead of destroying its old factories, Nantes chose to transform them and give them a new future. The Lieu Unique paved the way for other projects in the city, such as the Machines of the Isle on the former shipyards. When you pass the LU tower, look up and think of the little pastry shop on rue Boileau, of the inventor of the Petit-Beurre, of the factory workers and of the artists who brought it back to life. And perhaps in 2100 your great-grandchildren will open the boxes of the Attic of the Century to discover our time.`,
        caption: 'The LU tower today',
      },
    ],
  },

  // ═════════════════════════ PASSAGE POMMERAYE ═════════════════════════
  pommeraye: {
    meta: {
      shelfTitle: 'The Passage Pommeraye',
      coverKicker: 'History of the',
      coverTitle: 'Passage Pommeraye',
      spineTitle: 'The Passage Pommeraye',
      titlePageHeading: 'Heritage of Nantes',
      titlePageTitle: 'The Passage Pommeraye',
      titlePageSubtitle: 'A gallery of glass and dreams in the heart of Nantes',
      titlePageImprint: imprint,
      runningHead: 'The Passage Pommeraye',
    },
    chapters: [
      {
        title: 'Nantes, a rich and elegant city',
        subtitle: 'Early 19th century',
        content: `At the beginning of the 19th century, Nantes was a rich city. Its port, one of the busiest in France, made the fortune of many merchants and shipowners. Part of this wealth came from the slave trade and commerce with the colonies, a dark page in the city’s history. In the elegant district around the Graslin theatre, fine white stone buildings with wrought-iron balconies were being built. The streets were lively: people strolled, shopped and showed off in fashionable clothes. But there was a problem: the district was built on a steep slope. Between rue de la Fosse, down near the river, and the Graslin district at the top, you had to climb and descend narrow, steep streets, often muddy in rainy weather.`,
        caption: 'The gallery and its great glass roof',
      },
      {
        title: 'The fashion for covered arcades',
        subtitle: '1840',
        content: `In Paris, a novelty was all the rage: covered arcades. These are indoor streets protected by a glass roof and lined with shops. You can stroll there sheltered from rain, wind and mud while admiring the shop windows. They are the ancestors of our shopping centres! A Nantes notary, Louis Pommeraye, then had an ambitious idea: to build a covered arcade in Nantes. He did not just want a place for trade. He also wanted to link the lower and upper parts of the district, between rue de la Fosse and rue Santeuil, to make life easier for walkers. He teamed up with another investor and two architects, Jean-Baptiste Buron and Hippolyte Durand-Gasselin, to carry out this daring project. Construction began at the end of 1840.`,
        caption: 'The statues of the arcade',
      },
      {
        title: 'An architect’s challenge',
        subtitle: '1840 – 1843',
        content: `Building this arcade was not at all simple. Between its two entrances there is a height difference of more than 9 metres, the equivalent of a three-storey building! How do you make a pleasant gallery on such steep ground? The architects found a clever solution: they built the arcade on several levels. In the centre, a grand staircase links the floors and becomes the centrepiece of the place. Balcony galleries surround this great space, and an immense roof of glass and metal lets in daylight. For the time it was a technical feat. Metal and glass were modern materials, only just beginning to be used in large buildings. The workers laboured for nearly three years to bring this extraordinary project to life.`,
        caption: 'The grand staircase, ink drawing',
      },
      {
        title: 'The inauguration in 1843',
        subtitle: '4 July 1843',
        content: `On 4 July 1843 the Passage Pommeraye was inaugurated. The people of Nantes were amazed to discover a place unlike any other. Under the glass roof, light fell softly on the shops, the staircases and the balustrades. Shopkeepers moved in: there were hatters, milliners, jewellers, sellers of toys, fabrics and perfumes. It was the fashionable place, where people came to stroll on Sundays in their finest clothes. But for Louis Pommeraye the celebration had a bitter taste. Construction had cost much more than planned, and at first the shops did not bring in enough money. The notary lost a large part of his fortune. He had built a masterpiece, but his dream had almost ruined him. Yet his name will forever be linked to this place.`,
        caption: 'The arcade in the 19th century, lithograph',
      },
      {
        title: 'A palace of sculptures',
        subtitle: 'The sculptures of Debay',
        content: `What makes the Passage Pommeraye so special is its decoration. The sculptor Jean-Baptiste Debay installed many statues there. On the balconies of the central gallery, sculpted young children seem to watch over the walkers. Along the walls, figures represent the arts, the sciences, trade and industry, everything that made the city proud in the 19th century. Everywhere you discover details: medallions, carved heads, garlands, columns. The banisters and railings are made of cast iron, adorned with delicate patterns. In the evening, gas lamps lit the arcade and gave it a mysterious atmosphere. Looking up, going down the stairs, peering into the corners, you feel as if you are exploring a little palace full of secrets, where every visit reveals a new detail.`,
        caption: 'The Clock gallery',
      },
      {
        title: 'A place that stands the test of time',
        subtitle: '1976',
        content: `The years went by, but the Passage Pommeraye remained a place loved by the people of Nantes. The shops changed: hatters and milliners gave way to other businesses, following the fashions. The arcade survived the wars, notably the bombings that hit Nantes hard during the Second World War. Little by little, people understood that it was a true heritage treasure. In 1976 it was listed as a historic monument, which means it is protected and can no longer be altered without permission. It was an important recognition. Of all the covered arcades built in France in the 19th century, very few are as original. With its levels, its grand staircase and its sculptures, the Passage Pommeraye is considered one of the most beautiful covered arcades in Europe.`,
        hint,
        info: `Inaugurated on 4 July 1843, the Passage Pommeraye links two streets separated by a drop of more than 9 metres: hence its famous grand staircase, surrounded by balconied galleries and statues and crowned with a glass roof.`,
      },
      {
        title: 'The arcade goes to the movies',
        subtitle: 'Jacques Demy',
        content: `The Passage Pommeraye has also inspired artists, in particular a great filmmaker from Nantes: Jacques Demy. As a child, Demy grew up in Nantes, and he adored this arcade. Once he became a director, he filmed it in several of his films. In “Lola”, released in 1961, the arcade is the setting for important scenes. It also appears in “The Umbrellas of Cherbourg” and in “Une chambre en ville”, a film set entirely in Nantes. Later, Jacques Demy’s wife, the director Agnès Varda, told the story of her husband’s childhood in a film called “Jacquot de Nantes”, where the arcade appears once again. Thanks to cinema, audiences all over the world discovered this magical place. Even today, photographers and directors come here in search of the very special atmosphere of its staircases and glass roof.`,
        caption: 'The grand staircase, old postcard',
      },
      {
        title: 'A major renovation',
        subtitle: 'The restoration',
        content: `Over time, the stone gets dirty, the metal rusts and the glass roof lets water in. To save the arcade, major restoration work was carried out. The sculptures were carefully cleaned, one by one, to regain their whiteness. The cast-iron elements were repaired and repainted, and the glass roof was restored to let in all the light again. The specialist craftspeople worked like surgeons: they had to repair without damaging and respect the original appearance. During the work, the arcade often carried on living, with its shopkeepers and visitors. This kind of project is costly and requires a lot of patience. But the result is worth it: the Passage Pommeraye regained the splendour it had at its inauguration, to the great delight of walkers.`,
        caption: 'The gallery of shops',
      },
      {
        title: 'The arcade today',
        subtitle: 'Today',
        content: `Today the Passage Pommeraye is both a shopping place and a monument to visit. You will find fashion, decoration and gift shops, chocolate makers and designers. It is still just as handy for getting from the bottom to the top of the district, between rue de la Fosse and rue Crébillon, one of the busiest shopping streets in Nantes. Every day thousands of people walk through it: busy residents, amazed tourists, families taking photos on the grand staircase. The arcade is part of the “Voyage à Nantes” route, the green line painted on the ground that guides visitors through the most beautiful places in the city. For many tourists, it is one of the most memorable stops on their discovery of Nantes.`,
        caption: 'The carved arch and its glass roof',
      },
      {
        title: 'A hidden treasure in the heart of the city',
        subtitle: 'Yesterday and tomorrow',
        content: `The Passage Pommeraye tells a beautiful story: that of a man who dared a crazy project, even though it cost him his fortune. He turned a problem, a slope that was too steep, into a work of art where people love to stroll. Nearly two centuries later, his dream is still alive. The sculptures still watch over the walkers, light still pours through the great glass roof, and the staircases still link the lower and upper town. Next time you pass through, take the time to stop. Look up at the statues, observe the details of the balustrades, imagine the ladies in long gowns and the gentlemen in top hats who strolled here in 1843. You will see: the Passage Pommeraye is not just a shortcut, it is a journey through time.`,
        caption: 'The Passage Pommeraye, old postcard',
      },
    ],
  },

  // ═════════════════════════ THE MACHINES OF THE ISLE ═════════════════════════
  machines: {
    meta: {
      shelfTitle: 'The Machines of the Isle',
      coverKicker: 'History of the',
      coverTitle: 'Machines of the Isle',
      spineTitle: 'The Machines of the Isle',
      titlePageHeading: 'Heritage of Nantes',
      titlePageTitle: 'The Machines of the Isle',
      titlePageSubtitle: 'When Jules Verne’s dreams come to life in Nantes',
      titlePageImprint: imprint,
      runningHead: 'The Machines of the Isle',
    },
    chapters: [
      {
        title: 'An island of ships',
        subtitle: '20th century',
        content: `In the middle of the Loire, in Nantes, lies a large island. For more than a century, part of this island was occupied by shipyards, that is, factories where ships were built. Thousands of workers worked there: welders, carpenters, boilermakers, painters… They built huge vessels, cargo ships, liners and even submarines. The noise of hammers and machines echoed day and night. The great cranes towered over the river, and each launch of a new ship was a celebration for the city. The shipyards were the pride and wealth of Nantes. But from the 1970s, shipbuilding went through a crisis. Orders fell, competition from other countries became very strong, and the future of the shipyards became uncertain.`,
        caption: 'Panoramic view of the port of Nantes, old postcard',
      },
      {
        title: 'The end of the shipyards',
        subtitle: '1987',
        content: `In 1987, the last shipyard in Nantes closed its doors. It was a very sad moment for the city. Thousands of people lost their jobs, and a whole part of Nantes’ history seemed to come to a halt. On the island, the immense halls where ships had been built stood empty and silent. The cranes no longer moved, and grass grew between the rails. For years this large site remained somewhat forgotten. But the city of Nantes did not want to abandon it. It launched a major project to transform the island: building new neighbourhoods, parks, schools and offices, while keeping the memory of its working past. It also needed a strong idea, capable of bringing the old halls back to life and attracting people once again to this place so full of history.`,
        caption: 'The shipyard workshops',
      },
      {
        title: 'Two inventors of dreams',
        subtitle: 'The creators',
        content: `This idea would come from two passionate artists: François Delarozière and Pierre Orefice. François Delarozière builds machines for shows. With the street theatre company Royal de Luxe, he had already invented articulated giants that walk through city streets and amaze huge crowds. Pierre Orefice knows how to set up and organise major artistic projects. Together they imagined an incredible place: a workshop where giant machines in the shape of animals would be built, which the public could ride on. Their project was inspired by two great dreamers. The first is Jules Verne, the writer born in Nantes in 1828, who imagined extraordinary voyages to the bottom of the seas and around the world. The second is Leonardo da Vinci, the Renaissance genius who drew flying machines and astonishing mechanisms.`,
        caption: 'François Delarozière and Pierre Orefice in front of the Heron',
      },
      {
        title: 'The machine workshop',
        subtitle: 'The workshop',
        content: `The two artists moved into the old shipyard halls. It was no coincidence: these buildings were made for building metal ships, and they are perfect for making giant machines. In the workshop, a team of specialists set to work: draughtsmen, joiners, welders, mechanics, sculptors. They use wood, steel, leather and hydraulic systems to bring their creatures to life. Each machine starts with drawings and models, then is made piece by piece. What makes this place unique is that the workshop is open to the public. Visitors can watch the builders at work from a walkway. In this way, the skills of the old shipyard workers are passed on, in a sense, to these new craftsmen of dreams.`,
        caption: 'The Heron in flight in the Gallery of Machines',
      },
      {
        title: 'The Great Elephant',
        subtitle: 'Since 2007',
        content: `On 1 July 2007, the Machines of the Isle opened their doors, with a spectacular star: the Great Elephant. It is 12 metres high, 8 metres wide and weighs about 45 tonnes. It is made of wood and steel, and its mechanisms are visible, like those of a giant clock. On its back, a house several storeys high can carry nearly 50 passengers. The elephant walks slowly around the old shipyards for about 45 minutes. It moves its trunk, its ears and its legs, and it even lets out a great trumpeting! Watch out, passers-by: it can also spray them with its trunk. Since 2007 it has carried nearly one and a half million passengers. In 2026, after almost twenty years of walks, it is taking a well-deserved break for a major mechanical overhaul.`,
        caption: 'The Great Elephant in front of the Carousel',
      },
      {
        title: 'The Gallery of Machines',
        subtitle: 'The Gallery',
        content: `Next to the workshop is the Gallery of Machines. It is an exhibition space, but not like any other: here you do not just look. The creatures are set in motion in front of visitors, and some can even pilot them! You meet a giant ant, a spider, a caterpillar, a heron flapping its wings or astonishing sea creatures. The machinists, also called “pilots”, explain how each machine works and invite the public aboard. The Gallery also presents the drawings, models and films that show the stages of creation. You discover that it sometimes takes years of imagination and work to bring a single machine to life. Each season, new creatures may make their appearance.`,
        hint,
        info: `The Great Elephant: 12 metres high, 8 metres wide, about 45 tonnes of wood and steel. On its back, a house several storeys high carries nearly 50 passengers on a 45-minute walk.`,
      },
      {
        title: 'The Carousel of Marine Worlds',
        subtitle: '2012',
        content: `In 2012, a new extraordinary attraction opened on the banks of the Loire: the Carousel of Marine Worlds. This is no ordinary merry-go-round with wooden horses! Almost 25 metres high, it looks like an immense aquarium on three levels. Each level represents an undersea world: the seabed, the abyss and the surface of the oceans. Some thirty strange creatures live there: a giant squid, a lanternfish, a crab, a ray, boats… Visitors do not just go round: they can move the fins, tentacles or claws of the animals using levers and handles. The carousel pays tribute to Jules Verne and his novel “Twenty Thousand Leagues Under the Sea”, in which Captain Nemo explores the depths aboard the submarine Nautilus.`,
        caption: 'The Carousel of Marine Worlds at nightfall',
      },
      {
        title: 'The dream of the Heron Tree',
        subtitle: 'A dreamed-of project',
        content: `The creators of the Machines also imagined an even crazier project: the Heron Tree. It was to be a giant steel tree, about 35 metres high, covered with plants and hanging gardens. At the top, two great mechanical herons would take visitors into the air for a flight over the city. A demonstration branch was built to test the idea, and the public was able to discover it. The tree was to stand near an old granite quarry, transformed into a magnificent garden, the Jardin extraordinaire, with its waterfall and plants from all over the world. But the project was very expensive and sparked much debate. In the end it was abandoned. The Jardin extraordinaire, however, is open to the public. And the dream of the herons lives on in the drawings and in the Gallery.`,
        caption: 'The Heron Tree project',
      },
      {
        title: 'An island with a new life',
        subtitle: 'Today',
        content: `Thanks to the Machines, the Île de Nantes has completely changed. Where ships used to be built, families now stroll, picnic, play and marvel. The old yellow and grey cranes are still there, now symbols of the working past. The halls house cafés, restaurants and play areas. Every year several hundred thousand visitors come from all over France and the world to see the Great Elephant and its friends. The Machines of the Isle have become one of the most famous places in Nantes, alongside the castle of the dukes of Brittany. They show that a city can reinvent itself by mixing art, memory and imagination. The whole neighbourhood has grown up around them, with schools, homes and businesses.`,
        caption: 'The Île de Nantes seen from the sky',
      },
      {
        title: 'Imagination in power',
        subtitle: 'Tomorrow',
        content: `The story of the Machines of the Isle is that of an island that managed to turn its sadness into a dream. When the shipyards closed, Nantes could have forgotten this place. Instead, artists decided to create an imaginary world there, halfway between the novels of Jules Verne, the inventions of Leonardo da Vinci and the skills of the workers of the past. The Machines remind us never to stop imagining. A simple idea drawn on a sheet of paper can become a 45-tonne elephant walking through the city! Next time you meet the Great Elephant or ride the Carousel, think of the workers who built ships here, and of the inventors who brought their island back to life. And who knows: perhaps the next machine will come from your imagination.`,
        caption: 'Nantes and its islands, bird’s-eye view',
      },
    ],
  },

  // ═════════════════════════ THE CATHEDRAL ═════════════════════════
  cathedrale: {
    meta: {
      shelfTitle: 'The Cathedral of Saint Peter and Saint Paul',
      coverKicker: 'History of the',
      coverTitle: 'Cathedral of Saint Peter and Saint Paul',
      spineTitle: 'Cathedral of Saint Peter and Saint Paul',
      titlePageHeading: 'Heritage of Nantes',
      titlePageTitle: 'The Cathedral of Saint Peter and Saint Paul',
      titlePageSubtitle: 'Nearly six centuries of building, prayer and trials',
      titlePageImprint: imprint,
      runningHead: 'Nantes Cathedral',
    },
    chapters: [
      {
        title: 'Before the cathedral',
        subtitle: '4th – 11th century',
        content: `Long before the great cathedral we know today, this spot in Nantes was already a place of prayer. As early as the 4th century, in Roman times, the city’s first Christians built a church here. In the 6th century, Bishop Felix had a cathedral built, consecrated around the year 568. It is described as very beautiful, with a roof that shone in the sun. But in the 9th century the Vikings attacked Nantes and ravaged it. In 843 they entered the cathedral and fell upon the faithful who had taken refuge there, including the bishop. In the 11th century a new cathedral was built in the Romanesque style, with thick walls, rounded arches and small windows. It was on this Romanesque church that, a few centuries later, the Gothic cathedral we admire today would be born.`,
        caption: 'Panorama of the cathedral, before 1930',
      },
      {
        title: 'The first stone',
        subtitle: '14 April 1434',
        content: `In the 15th century, Brittany was a rich and powerful duchy. Duke John V and Bishop Jean de Malestroit wanted a cathedral worthy of their capital, as large and beautiful as those of other European cities. On 14 April 1434, together they laid the first stone of the new cathedral. The idea was clever: instead of destroying everything at once, the Gothic cathedral would be built around the old Romanesque church, little by little, so that the faithful could continue to pray there. The work was entrusted to master builders, first Guillaume de Dammartin, then Mathelin Rodier, the same man who also worked on the castle of the dukes. No one suspected then that this project would last more than four and a half centuries, and that none of those who began it would see it finished.`,
        caption: 'The remains of the Romanesque church brought to light',
      },
      {
        title: 'The Flamboyant Gothic style',
        subtitle: '15th century',
        content: `Nantes cathedral is built in the Gothic style, and more precisely in the “Flamboyant” Gothic style. It is called this because the stone decorations, especially in the windows, look like dancing flames. Gothic made it possible to build very tall, very bright churches, thanks to pointed arches, slender pillars and large windows filled with stained glass. In Nantes, the builders used tuffeau, a soft white stone from the banks of the Loire that is easier to carve. That is why the inside of the cathedral is so light and bright. Its great vault rises to about 37 metres: higher than that of Notre-Dame de Paris! Looking up, you feel that the pillars rise up to the sky, like the trunks of an immense stone forest.`,
        caption: 'The unfinished cathedral, old drawing',
      },
      {
        title: 'The façade and its towers',
        subtitle: '1480 – 1520',
        content: `The builders began with the façade, which was completed around 1480. It is pierced by five carved portals, covered with hundreds of small figures: saints, angels, prophets, scenes from the Bible. It is a real picture book in stone, which allowed the faithful, who often could not read, to learn the religious stories. Above the façade rise two great square towers, completed around 1490. They house the bells of the old Romanesque cathedral, which ring the hours and the feasts. Anne of Brittany, now Queen of France, gave a great stained-glass window for the façade, installed in 1498. Then, around 1520, work stopped. Wars, lack of money and changing times put the work on hold for almost a century. The cathedral long remained unfinished.`,
        caption: 'The nave and its tall pillars, lithograph',
      },
      {
        title: 'The tomb of Duke Francis II',
        subtitle: 'Early 16th century',
        content: `The cathedral holds one of the finest treasures of Renaissance sculpture in France: the tomb of Duke Francis II and his wife, Margaret of Foix, the parents of Anne of Brittany. Anne herself had it made at the beginning of the 16th century to honour her parents’ memory. It was designed by the painter Jean Perréal and carved by Michel Colombe, one of the best sculptors of his time. On the tomb, the duke and duchess lie with their hands joined. At the four corners stand four great statues of women representing the virtues: Justice, Strength, Temperance and Prudence. The last one has an astonishing feature: she has two faces, a young woman’s face in front and an old man’s face behind, to show that we must learn the lessons of the past.`,
        caption: 'The tomb of Francis II, Duke of Brittany',
      },
      {
        title: 'A never-ending project',
        subtitle: '17th – 19th century',
        content: `In the 17th century, work slowly resumed, mostly inside. But the cathedral went through difficult times. During the French Revolution it was closed to worship and turned into a warehouse: its statues were damaged and its precious objects scattered. In 1800, the explosion of a tower in the nearby castle, used to store gunpowder, blew out many stained-glass windows and damaged the roof. In 1802 the cathedral was returned to the faithful. In 1815 the tomb of Francis II, which had stood in another church that was destroyed, was installed in the cathedral. Then, in 1835, it was finally decided to finish the work. The old Romanesque choir was replaced by a Gothic choir, and the crypt of the Romanesque church was rediscovered beneath the floor. The 19th-century workers respected the style imagined by their 15th-century ancestors.`,
        caption: 'Place Saint-Pierre, old postcard',
      },
      {
        title: 'Finished at last!',
        subtitle: '25 December 1891',
        content: `On 25 December 1891, Christmas Day, the cathedral was finally inaugurated by the Bishop of Nantes. It had taken 457 years of work since the first stone was laid in 1434! Dozens of generations of stonemasons, sculptors, carpenters and master glassmakers had followed one another on this site. And yet the result is wonderfully harmonious: it is hard to believe that some parts were built more than four centuries apart. The cathedral was listed as a historic monument as early as 1862. But the 20th century had new trials in store. In 1944, during the Second World War, bombings damaged the building and destroyed some of its stained glass. After the war, the restorers set to work again to heal its wounds.`,
        hint,
        info: `Begun in 1434 and inaugurated in 1891: 457 years of work for this façade with its two square towers, its five carved portals and its tuffeau vault rising to 37 metres.`,
      },
      {
        title: 'The fire of 1972',
        subtitle: '28 January 1972',
        content: `On 28 January 1972, a terrible accident happened. During work on the roof, a fire broke out. The flames devoured the wooden roof frame, and the roof partly collapsed. The firefighters fought all day, and the people of Nantes watched helplessly as their cathedral burned. Fortunately, the stone vaults largely held and protected the interior. But the damage was immense. It took thirteen years of restoration to repair it. To prevent such a tragedy from happening again, the new roof frame was no longer built of wood but of concrete, a material that does not burn. The sculptures and stained glass were restored, and the white stone was cleaned. In the early 2000s, the façade and exterior were renovated in turn. The cathedral regained a dazzling whiteness.`,
        caption: 'The cathedral in flames, painting',
      },
      {
        title: 'The fire of 2020',
        subtitle: '2020 – 2025',
        content: `On 18 July 2020, a new tragedy struck the cathedral. An arson fire broke out inside, early in the morning. The fire destroyed the great organ, an exceptional instrument built in the 17th century, as well as some of the stained glass. The heat and the water from the firefighters’ hoses also damaged the vaults. This fire came only a year after the one at Notre-Dame de Paris, and the whole of France was moved. An immense project then began. Stonemasons, carpenters, master glassmakers and art restorers took turns for five years. The vaults were consolidated, the blackened stones cleaned, and new stained-glass windows created. On 28 September 2025, the cathedral finally reopened its doors to the public during a great celebration. The destroyed great organ has yet to be rebuilt.`,
        caption: 'The roof frame ablaze',
      },
      {
        title: 'A cathedral that is always reborn',
        subtitle: 'Today',
        content: `The Cathedral of Saint Peter and Saint Paul in Nantes has an extraordinary history. It was built over nearly five centuries and damaged by wars, revolutions, an explosion and two great fires. And yet it is still there, standing tall and full of light. Each time, women and men came together to repair it and hand it on to the next generations. Today it welcomes both the faithful who come to pray and visitors who come to admire its architecture. As you enter, look up at the white vault, approach the tomb of Francis II to discover the double face of Prudence, and go down into the crypt to see the traces of the Romanesque cathedral. You will then understand that this monument is not just a stone building: it is the living memory of Nantes.`,
        caption: 'The façade lit up at nightfall',
      },
    ],
  },
}
