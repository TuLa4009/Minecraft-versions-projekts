
const translations = {
  lv: {
    intro: {
      greeting: "Labdien!",
      text: "Tas ir programmēšanas projekts, kura mērķis ir pastāstīt spēlētājiem par visām Minecraft versijām, sākot no 1.0. Tā ir lieliska iespēja atcerēties, ko kompānija Mojang pievienoja spēlei kopš 2011. gada. Pēc informācijas izlasīšanas jūs varat izpildīt testu un uzzināt, cik labi pārzināt Minecraft pasauli. Ceram, ka būs interesanti!"
    },

    v1_0: {
      title: "1.0 – Adventure Update",
      text: `Apraksts: Spēles oficiālā versija, pievienota beigas (fināls) un zāļu pagatavošana.
Bloki: Burvju galds, vārīšanas stends, pazemes ķieģeļi, pūķa ola.
Mobi: Endera pūķis, iedzīvotājs, sēņu govs, sniegavīrs, zvīņainis, magmakubs.
Struktūras: Cietoksnis ar portālu uz Endera pasauli, elles cietoksnis, ciems.`
    },

    v1_2: {
      title: "1.2 - Jungle Update",
      text: `Apraksts: Pievienotas biezas džungļi un jauni palīgi.
Bloki: Džungļu koksne un no tās veidoti bloki, akmens ķieģeļi un to paveidi, sarkana akmens lampa.
Mobi: Ocelots, kaķis, dzelzs golems.
Struktūras: Tuksneša akas.`
    },

    v1_3: {
      title: "1.3 - Trade Update",
      text: `Apraksts: Tirdzniecības mehānikas pievienošana.
Bloki: Smaragda rūda, smaragdi, Ender lāde, spriegojamais sensors.
Mobi: Nav.
Struktūras: Tuksneša templis, džungļu templis.`
    },

    v1_4: {
        title: "1.4 - Pretty Scary Update",
        text: `Apraksts: Halovīnu atjauninājums ar raganām un jaunu bosu.
Bloki: Bāka, kalve, komandu bloks, puķu pods, rāmis, glezna.
Mobi: Izžūdinātājs, skelets-izžūdinātājs, ragana, sikspārnis.
Struktūras: Raganas būda.`
    },
    v1_5: {
        title: "1.5 - Redstone Update",
        text: `Apraksts: Mehānismu pievienošana un sarkanā akmens attīstība.
Bloki: Piltuve, kompilators, izmetējs, gaismas sensors, sarkanā akmens bloks, kvarcs un no tā veidoti bloki, lāde-loks.
Mobi: Nav.
Struktūras: Nav.`
    },
    v1_6: {
        title: "1.6 - Horse Update",
        text: `Apraksts: Jājamdzīvnieku un to atribūtu parādīšanās.
Bloki: Sienas kūlis, ogļu bloks, māls un no tā veidoti bloki, paklājs, birka.
Mobi: Zirgs, ēzelis, mūlis, zirga skelets, zirga zombijs.
Struktūras: Nav.`
    },
    v1_7: {
        title: "1.7 - The Update that Changed the World",
        text: `Apraksts: Vērienīgas izmaiņas pasaules ģenerēšanā un daudzu biomu pievienošana.
Bloki: Dažādu krāsu stikli, akācijas un koka bloki, tumšais ozols un koka bloki, jauni ziedi, biezais ledus.
Mobi: Nav.
Struktūras: Jauni biomi (Meza, Ledus virsotnes, Tumšais mežs utt.).`
    },
    v1_8: {
        title: "1.8 - Bountiful Update",
        text: `Apraksts: Vērienīgs zemūdens pasaules, fermu un mehānismu atjauninājums.
Bloki: Prismarīns un no tā veidoti bloki, jūras laterna, diorīts, andezīts, granīts, gļotu bloks, barjera.
Mobi: Sargs, senais sargs, trusis, endermīts.
Struktūras: Zemūdens cietoksnis.`
    },
    v1_9: {
        title: "1.9 - Combat Update",
        text: `Apraksts: Kaujas sistēmas pārstrādāšana un Kraja pasaules paplašināšana.
Bloki: Horusa augi, purpura bloks, Kraja stienis.
Mobi: Šalkers.
Struktūras: Kraja pilsētas, Iglu.`
    },
    v1_10: {
        title: "1.10 - Frostburn Update",
        text: `Apraksts: Karsto un aukstu biomu atjauninājums.
Bloki: Magmas bloks, kaulu bloks, sarkana elles ķieģeļa, elles izauguma bloks.
Mobi: Baltā lācis, kadavrs, ziemas kalns.
Struktūras: Atliekas (skeleti zem zemes).`
    },
    v1_11: {
        title: "1.11 - Exploration Update",
        text: `Apraksts: Pasaules izpēte un kartogrāfija.
Bloki: Šalkera kaste, novērotājs.
Mobi: Lama, burvis, izspiedējs, kaitnieks.
Struktūras: Meža savrupmāja.`
    },
    v1_12: {
        title: "1.12 - World of Color Update",
        text:`Apraksts: Krāsu atjauninājums celtniekiem.
Bloki: Dažādu krāsu betons, glazētā keramika.
Mobi: Papagailis.
Struktūras: Nav.`
    },
    v1_13: {
        title: "1.13 - Update Aquatic",
        text: `Apraksts: Okeānu pārstrādāšana un jūras dzīvības un ūdens fizikas pievienošana.
Bloki: Koraļļi, laminārija, jūras gurķis, zils ledus, bruņurupuča ola.
Mobi: Delfīns, jūras bruņurupucis, fantoms, noslīcis, menca, lasis, adatu zivs, tropu zivs.
Struktūras: Nogrimis kuģis, okeāna drupas, aisbergi.`
    },
    v1_14: {    
        title: "1.14 - Village & Pillage",
        text:`Apraksts: Iedzīvotāju un to profesiju atjauninājums, iedzīvotāju AI pārstrādāšana un reidu sistēmas izveide.
Bloki: Ugunskurs, bambuss, būvniecības sastatnes, asināmais akmens, aušanas stends, muca, kūpinātava, kausēšanas krāsns, kalēja galds.
Mobi: Laupītājs, postītājs, panda lapsa, ceļojošais tirgotājs.
Struktūras: Laupītāju priekšpostenis.`
    },
    v1_15: {
        title: "1.15 - Buzzy Bees",
        text:`Apraksts: Plaša kļūdu labojumu un bišu atjauninājums.
Bloki: Stropi, bišu ligzda, medus bloks, bišu šūnu bloks.
Mobi: Bite.
Struktūras: Nav.`
    },
    v1_16: {
        title: "1.16 - Nether Update",
        text:`Apraksts: Nether pārstrādāšana.
Bloki: Netherīts, senie atlūzas, purpura/deformēta koksne un bloki no tās, dvēseļu augsne, sēņu gaisma, raudošais obsidiāns.
Mobi: Piglins, nežēlīgais piglins, hoglins, zoglins, lavamērītājs, dvēseļu augsne.
Struktūras: Piglinu bastions, iznīcinātie portāli un jauni elles biomi.`
    },
    v1_17: {
        title: "1.17 - Caves & Cliffs Part I",
        text:`Apraksts: Pirmā daļa no alu un klintīm atjauninājuma, pārstrādāta pasaules nejaušā ģenerēšana.
Bloki: Varš, ametists, dziļais slāneklis, tufa, kalcīts, pūkains sniegs, sūnas, stalaktīts/stalagmīts.
Mobi: Aksolotls, spīdošais sēpija, āzis.
Struktūras: Jauni alu biomi, ametista geoda.`
    },
    v1_18: {
        title: "1.18 - Caves & Cliffs Part II",
        text:`Apraksts: Pirmā daļa no alu un klintīm atjauninājuma, pārstrādāta pasaules nejaušā ģenerēšana.
Bloki: Varš, ametists, dziļais slāneklis, tufa, kalcīts, pūkains sniegs, sūnas, stalaktīts/stalagmīts.
Mobi: Aksolotls, spīdošais sēpija, āzis.
Struktūras: Jauni alu biomi, ametista geoda.`
    },
    v1_19: {
        title: "1.19 - The Wild Update",
        text:`Apraksts: Mangrovju mežu un drūmā pazemes biomu pievienošana.
Bloki: Skalku bloki (sensors, katalizators, kliedzējs), dubļi, mangrovju koks, žabgaismas.
Mobi: Sargātājs (Varden), Klusais (Elle), varde, krupis.
Struktūras: Senā pilsēta.`
    },
    v1_20: {
        title: "1.20 - Trails & Tales",
        text:`Apraksts: Arheoloģija, bruņu pielāgošana.
Bloki: Ķiršu koks, bambusa koks, aizdomīgs smilts/grants, vāzes.
Mobi: Kamielis, ožotājs, bruņurupucis.
Struktūras: Arheoloģijas drupas.`
    },
    v1_21: {
        title: "1.21 - Update of Updates",
        text:`Apraksts: Procedurāli ģenerēti pazemes ar kaujas pārbaudījumiem un vara mehānismiem.
Bloki: Vara lampa, vara režģis, vara durvis/lūkas, automātiskais darbgalds, jauni spawneri.
Mobi: Brīze, purvājs.
Struktūras: Pārbaudījumu kameras.`
    }
    },

  ru: {

    intro: {
      greeting: "Здравствуйте!",
      text: "Это программный проект, цель которого — рассказать игрокам обо всех версиях Minecraft, начиная с 1.0. После изучения информации вы можете пройти тест и проверить свои знания."
    },

    v1_0: {
      title: "1.0 - Adventure Update",
      text: `Описание: Официальный релиз игры, добавление концовки (финала) и зельеварения.
Блоки: Стол зачарования, варочная стойка, кирпичи Нижнего мира, яйцо дракона.
Мобы: Дракон Края, житель, грибная корова, снеговик, чешуйница, магмакуб.
Структуры: Крепость с порталом в Край, адская крепость, деревня.`
    },

    v1_2: {
      title: "1.2 - Jungle Update",
      text: `Описание: Добавление густых джунглей и новых помощников.
Блоки: Древесина джунглей и блоки из неё, каменные кирпичи и подвиды, лампа из красного камня.
Мобы: Оцелот, кошка, железный голем.
Структуры: Колодец пустыни.`
    },

    v1_3: {
      title: "1.3 - Trade Update",
      text: `Описание: Добавление механики торговли.
Блоки: Изумрудная руда, изумруды, эндер-сундук, натяжной датчик.
Мобы: Нет.
Структуры: Храм в пустыне, храм в джунглях.`
    },

    v1_4: {
      title: "1.4 - Pretty Scary Update",
      text: `Описание: Хэллоуинское обновление с ведьмами и новым боссом.
Блоки: Маяк, наковальня, командный блок, цветочный горшок, рамка, картина.
Мобы: Иссушитель, скелет-иссушитель, ведьма, летучая мышь.
Структуры: Хижина ведьмы.`
    },

    v1_5: {
      title: "1.5 - Redstone Update",
      text: `Описание: Добавление механизмов и развитие красного камня.
Блоки: Воронка, компаратор, выбрасыватель, датчик света, блок красного камня, кварц и блоки из него, сундук-ловушка.
Мобы: Нет.
Структуры: Нет.`
    },

    v1_6: {
      title: "1.6 - Horse Update",
      text: `Описание: Появление ездовых животных и атрибутов для них.
Блоки: Сноп сена, угольный блок, глина и блоки из неё, ковёр, бирка.
Мобы: Лошадь, осёл, мул, скелет-лошадь, зомби-лошадь.
Структуры: Нет.`
    },

    v1_7: {
      title: "1.7 - The Update that Changed the World",
      text: `Описание: Масштабное изменение генерации мира и добавление множества биомов.
Блоки: Разноцветные стёкла, акация, тёмный дуб, новые цветы, плотный лёд.
Мобы: Нет.
Структуры: Новые биомы (Меза, Ледяные пики, Тёмный лес и т.д.).`
    },

    v1_8: {
      title: "1.8 - Bountiful Update",
      text: `Описание: Подводный мир, фермы и механизмы.
Блоки: Призмарин, морской фонарь, диорит, андезит, гранит, блок слизи, барьер.
Мобы: Страж, древний страж, кролик, эндермит.
Структуры: Подводная крепость.`
    },

    v1_9: {
      title: "1.9 - Combat Update",
      text: `Описание: Переработка боевой системы и Край.
Блоки: Хорус, пурпурный блок, стержень Края.
Мобы: Шалкер.
Структуры: Города Края, Иглу.`
    },

    v1_10: {
      title: "1.10 - Frostburn Update",
      text: `Описание: Горячие и холодные биомы.
Блоки: Блок магмы, костный блок, адский кирпич, нарост Нижнего мира.
Мобы: Белый медведь, кадавр, зимогор.
Структуры: Останки.`
    },

    v1_11: {
      title: "1.11 - Exploration Update",
      text: `Описание: Исследование мира и картография.
Блоки: Ящик шалкера, наблюдатель.
Мобы: Лама, заклинатель, поборник, досаждатель.
Структуры: Лесной особняк.`
    },

    v1_12: {
      title: "1.12 - World of Color Update",
      text: `Описание: Цветное обновление.
Блоки: Бетон, глазурованная керамика.
Мобы: Попугай.
Структуры: Нет.`
    },

    v1_13: {
      title: "1.13 - Aquatic Update",
      text: `Описание: Океаны и водная физика.
Блоки: Кораллы, ламинария, морской огурец, синий лёд, черепашье яйцо.
Мобы: Дельфин, черепаха, фантом, утопленник, рыбы.
Структуры: Корабли, руины, айсберги.`
    },

    v1_14: {
      title: "1.14 - Village & Pillage Update",
      text: `Описание: Жители и рейды.
Блоки: Костёр, бамбук, леса, точило, бочка, коптильня, плавильня.
Мобы: Разбойник, разоритель, панда, лиса, торговец.
Структуры: Аванпост.`
    },

    v1_15: {
      title: "1.15 - Buzzy Bees Update",
      text: `Описание: Пчёлы и исправления.
Блоки: Улей, пчелиное гнездо, мёд, соты.
Мобы: Пчела.
Структуры: Нет.`
    },

    v1_16: {
      title: "1.16 - Nether Update",
      text: `Описание: Переработка Нижнего мира.
Блоки: Незерит, древние обломки, багровая и искажённая древесина, почва душ, плачущий обсидиан.
Мобы: Пиглины, хоглины, зоглины.
Структуры: Бастионы, разрушенные порталы, биомы ада.`
    },

    v1_17: {
      title: "1.17 - Caves & Cliffs I",
      text: `Описание: Пещеры и генерация мира.
Блоки: Медь, аметист, сланец, мох, снег.
Мобы: Аксолотль, козёл.
Структуры: Геоды.`
    },

    v1_18: {
      title: "1.18 - Caves & Cliffs II",
      text: `Описание: Высота мира и генерация.
Блоки: Нет.
Мобы: Нет.
Структуры: Пещеры.`
    },

    v1_19: {
      title: "1.19 - The Wild Update",
      text: `Описание: Мангры и тьма.
Блоки: Скалк, грязь, мангровое дерево.
Мобы: Варден, лягушка.
Структуры: Древний город.`
    },

    v1_20: {
      title: "1.20 - Trails & Tales",
      text: `Описание: Археология и кастомизация.
Блоки: Вишня, бамбук, подозрительный песок, вазы.
Мобы: Верблюд, нюхач.
Структуры: Руины.`
    },

    v1_21: {
      title: "1.21 - Tricky Trials",
      text: `Описание: Испытания и медь.
Блоки: Медные блоки, лампы, двери, верстак.
Мобы: Бриз.
Структуры: Камеры испытаний.`
    }

  },
  en: {
  intro: {
      greeting: "Hello!",
      text: "This is a programming project aimed at telling players about all Minecraft versions starting from 1.0. After reading the information, you can take a test and check your knowledge."
    },

    v1_0: {
      title: "1.0 - Adventure Update",
      text: `Description: Official game release, addition of the ending and potion brewing.
Blocks: Enchanting table, brewing stand, Nether bricks, dragon egg.
Mobs: Ender Dragon, Villager, Mushroom Cow, Snow Golem, Silverfish, Magma Cube.
Structures: Stronghold with a portal to The End, Nether Fortress, Village.`
    },

    v1_2: {
      title: "1.2 - Jungle Update",
      text: `Description: Adds dense jungles and new helpers.
Blocks: Jungle wood and blocks made from it, stone bricks and variants, redstone lamp.
Mobs: Ocelot, Cat, Iron Golem.
Structures: Desert Well.`
    },

    v1_3: {
      title: "1.3 - Trade Update",
      text: `Description: Adds trading mechanics.
Blocks: Emerald ore, emeralds, Ender chest, tripwire sensor.
Mobs: None.
Structures: Desert temple, Jungle temple.`
    },

    v1_4: {
      title: "1.4 - Pretty Scary Update",
      text: `Description: Halloween update featuring witches and a new boss.
Blocks: Beacon, Anvil, Command Block, Flower Pot, Item Frame, Painting.
Mobs: Wither, Wither Skeleton, Witch, Bat.
Structures: Witch Hut.`
    },

    v1_5: {
      title: "1.5 - Redstone Update",
      text: `Description: Addition of mechanisms and redstone development.
Blocks: Hopper, Comparator, Dispenser, Daylight Sensor, Redstone Block, Quartz and quartz blocks, Trap Chest.
Mobs: None.
Structures: None.`
    },

    v1_6: {
      title: "1.6 - Horse Update",
      text: `Description: Introduction of mounts and their equipment.
Blocks: Hay Bale, Coal Block, Clay and clay blocks, Carpet, Name Tag.
Mobs: Horse, Donkey, Mule, Skeleton Horse, Zombie Horse.
Structures: None.`
    },

    v1_7: {
      title: "1.7 - The Update that Changed the World",
      text: `Description: Major changes to world generation and new biomes.
Blocks: Colored glass, acacia and dark oak wood blocks, new flowers, packed ice.
Mobs: None.
Structures: New biomes (Mesa, Ice Peaks, Dark Forest, etc.).`
    },

    v1_8: {
      title: "1.8 - Bountiful Update",
      text: `Description: Underwater world, farms and mechanisms update.
Blocks: Prismarine, Sea Lantern, Diorite, Andesite, Granite, Slime Block, Barrier.
Mobs: Guardian, Elder Guardian, Rabbit, Endermite.
Structures: Ocean Monument.`
    },

    v1_9: {
      title: "1.9 - Combat Update",
      text: `Description: Combat system overhaul and expansion of The End.
Blocks: Chorus Plant, Purpur Block, End Rod.
Mobs: Shulker.
Structures: End Cities, Igloo.`
    },

    v1_10: {
      title: "1.10 - Frostburn Update",
      text: `Description: Hot and cold biome update.
Blocks: Magma Block, Bone Block, Nether Brick, Nether Wart Block.
Mobs: Polar Bear, Husk, Stray.
Structures: Fossils (underground skeletons).`
    },

    v1_11: {
      title: "1.11 - Exploration Update",
      text: `Description: World exploration and cartography.
Blocks: Shulker Box, Observer.
Mobs: Llama, Evoker, Vindicator, Vex.
Structures: Woodland Mansion.`
    },

    v1_12: {
      title: "1.12 - World of Color Update",
      text: `Description: Color update for builders.
Blocks: Colored concrete, glazed terracotta.
Mobs: Parrot.
Structures: None.`
    },

    v1_13: {
      title: "1.13 - Aquatic Update",
      text: `Description: Ocean overhaul and aquatic life.
Blocks: Coral, Kelp, Sea Pickle, Blue Ice, Turtle Egg.
Mobs: Dolphin, Turtle, Phantom, Drowned, Cod, Salmon, Pufferfish, Tropical Fish.
Structures: Shipwreck, Ocean Ruins, Icebergs.`
    },

    v1_14: {
      title: "1.14 - Village & Pillage Update",
      text: `Description: Villagers and professions overhaul, AI rework and raid system.
Blocks: Campfire, Bamboo, Scaffolding, Grindstone, Loom, Barrel, Smoker, Blast Furnace, Smithing Table.
Mobs: Pillager, Ravager, Panda, Fox, Wandering Trader.
Structures: Pillager Outpost.`
    },

    v1_15: {
      title: "1.15 - Buzzy Bees Update",
      text: `Description: Bug fixes and bees update.
Blocks: Beehive, Bee Nest, Honey Block, Honeycomb Block.
Mobs: Bee.
Structures: None.`
    },

    v1_16: {
      title: "1.16 - Nether Update",
      text: `Description: Nether overhaul.
Blocks: Netherite, Ancient Debris, Crimson/Warped wood and blocks, Soul Soil, Shroomlight, Crying Obsidian.
Mobs: Piglin, Zombified Piglin, Hoglin, Zoglin, Strider.
Structures: Bastion Remnants, Ruined Portals, new Nether biomes.`
    },

    v1_17: {
      title: "1.17 - Caves & Cliffs Part I",
      text: `Description: First part of caves and cliffs update.
Blocks: Copper, Amethyst, Deepslate, Tuff, Calcite, Powder Snow, Moss, Dripstone.
Mobs: Axolotl, Glow Squid, Goat.
Structures: Amethyst Geode, new cave biomes.`
    },

    v1_18: {
      title: "1.18 - Caves & Cliffs Part II",
      text: `Description: World height increase and generation changes.
Blocks: None.
Mobs: None.
Structures: New cave biomes.`
    },

    v1_19: {
      title: "1.19 - The Wild Update",
      text: `Description: Mangrove forests and deep dark biome.
Blocks: Sculk blocks, Mud, Mangrove wood, Froglight.
Mobs: Warden, Allay, Frog, Tadpole.
Structures: Ancient City.`
    },

    v1_20: {
      title: "1.20 - Trails & Tales Update",
      text: `Description: Archaeology and armor customization.
Blocks: Cherry wood, Bamboo wood, Suspicious sand/gravel, Vases.
Mobs: Camel, Sniffer, Armadillo.
Structures: Archaeology ruins.`
    },

    v1_21: {
      title: "1.21 - Tricky Trials Update",
      text: `Description: Procedural combat dungeons and copper mechanics.
Blocks: Copper lamp, copper grate, copper doors/hatches, auto-crafter, new spawners.
Mobs: Breeze, Bogged.
Structures: Trial Chambers.`
    }
}
};