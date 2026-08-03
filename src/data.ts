import type { ChangelogEntry } from "./types";

/**
 * The PowerTrainer changelog — the single source of truth, authored newest-first.
 *
 * To publish a new entry:
 *   1. Prepend a new ChangelogEntry to this array (newest at the top).
 *   2. Bump the package version (npm version patch | minor | major).
 *   3. npm publish.
 *   4. Update `@powertrainer/changelog` in fe-web and fe-landing, then deploy.
 *
 * Every string is written in all six supported locales (en, cs, de, fr, ru, uk) —
 * the same coverage both consuming apps ship. `en` is the only required one and
 * `localize()` falls back to it, but new entries should fill in all six.
 *
 * Register, matching both apps: DE informal (du), FR vous, CS/RU/UK formal (vy/вы/ви).
 *
 * See README.md for the full checklist.
 */
export const changelogEntries: ChangelogEntry[] = [
    {
        version: "1.10.0",
        date: "2026-07-27",
        title: {
            en: "Track your own progress, no trainer required",
            cs: "Sledujte svůj pokrok, trenéra nepotřebujete",
            de: "Verfolge deinen Fortschritt — ganz ohne Trainer",
            fr: "Suivez vos progrès, sans entraîneur",
            ru: "Следите за своим прогрессом — тренер не нужен",
            uk: "Стежте за своїм прогресом — тренер не потрібен",
        },
        changes: [
            {
                type: "added",
                text: {
                    en: "Athletes can now log their own competitions, personal bests, and video on their own trainings — all the things that used to require a trainer to set up for you.",
                    cs: "Sportovci si nově mohou sami zaznamenat vlastní soutěže, osobní rekordy a video u svých tréninků — všechno, co dřív musel nastavit trenér.",
                    de: "Athleten können jetzt eigene Wettkämpfe, persönliche Bestleistungen und Videos zu ihren eigenen Trainings selbst erfassen — alles, was früher ein Trainer für dich einrichten musste.",
                    fr: "Les athlètes peuvent désormais enregistrer eux-mêmes leurs compétitions, leurs records personnels et des vidéos sur leurs propres entraînements — tout ce qui nécessitait auparavant l'intervention d'un entraîneur.",
                    ru: "Спортсмены теперь могут сами записывать собственные соревнования, личные рекорды и видео в своих тренировках — всё то, что раньше должен был настраивать тренер.",
                    uk: "Спортсмени тепер можуть самі записувати власні змагання, особисті рекорди та відео у своїх тренуваннях — усе те, що раніше мав налаштовувати тренер.",
                },
            },
            {
                type: "added",
                text: {
                    en: "Add your own custom exercises and tutorials to the exercise database — write your own instructions, or link a video, for movements the public database doesn't cover.",
                    cs: "Do databáze cviků si nově můžete přidat vlastní cviky a tutoriály — napište si vlastní instrukce nebo přiložte video k cvikům, které veřejná databáze neobsahuje.",
                    de: "Füge der Übungsdatenbank eigene Übungen und Tutorials hinzu — schreib deine eigenen Anleitungen oder verlinke ein Video für Bewegungen, die die öffentliche Datenbank nicht abdeckt.",
                    fr: "Ajoutez vos propres exercices et tutoriels à la base d'exercices — rédigez vos consignes ou associez une vidéo aux mouvements que la base publique ne couvre pas.",
                    ru: "Добавляйте в базу упражнений собственные упражнения и уроки — напишите свои инструкции или приложите видео к движениям, которых нет в публичной базе.",
                    uk: "Додавайте до бази вправ власні вправи та уроки — напишіть свої інструкції або додайте відео до рухів, яких немає в публічній базі.",
                },
            },
            {
                type: "added",
                text: {
                    en: "New Solo plan for athletes — one subscription unlocks unlimited self-tracked competitions and personal bests, unlimited custom exercises and tutorials, and unlimited video on your own trainings.",
                    cs: "Nový plán Solo pro sportovce — jedno předplatné odemkne neomezené vlastní soutěže a osobní rekordy, neomezené vlastní cviky a tutoriály a neomezené video u vlastních tréninků.",
                    de: "Neuer Solo-Tarif für Athleten — ein Abonnement schaltet unbegrenzt eigene Wettkämpfe und Bestleistungen, unbegrenzt eigene Übungen und Tutorials sowie unbegrenzt Videos zu deinen eigenen Trainings frei.",
                    fr: "Nouveau forfait Solo pour les athlètes — un seul abonnement débloque un nombre illimité de compétitions et de records personnels, d'exercices et de tutoriels personnalisés, et de vidéos sur vos propres entraînements.",
                    ru: "Новый план Solo для спортсменов — одна подписка снимает ограничения на собственные соревнования и личные рекорды, свои упражнения и уроки, а также видео в собственных тренировках.",
                    uk: "Новий план Solo для спортсменів — одна підписка знімає обмеження на власні змагання та особисті рекорди, свої вправи й уроки, а також відео у власних тренуваннях.",
                },
            },
            {
                type: "added",
                text: {
                    en: "A new usage panel under Settings → Subscription shows exactly how much of your free allowance you've used for each feature, with a link to upgrade when you're close to a limit.",
                    cs: "Nový panel v Nastavení → Předplatné ukazuje, kolik jste už využili z bezplatného limitu u každé funkce, a odkaz na upgrade, když se limitu blížíte.",
                    de: "Eine neue Übersicht unter Einstellungen → Abonnement zeigt dir genau, wie viel deines kostenlosen Kontingents du je Funktion schon genutzt hast — inklusive Upgrade-Link, wenn du dich einem Limit näherst.",
                    fr: "Un nouveau panneau dans Paramètres → Abonnement indique précisément la part de votre quota gratuit déjà utilisée pour chaque fonctionnalité, avec un lien pour passer à l'offre supérieure lorsque vous approchez d'une limite.",
                    ru: "Новая панель в разделе Настройки → Подписка показывает, сколько бесплатного лимита вы уже израсходовали по каждой функции, и даёт ссылку на переход к более высокому плану, когда лимит близко.",
                    uk: "Нова панель у розділі Налаштування → Підписка показує, скільки безкоштовного ліміту ви вже витратили за кожною функцією, і дає посилання на перехід до вищого плану, коли ліміт близько.",
                },
            },
        ],
    },
    {
        version: "1.9.0",
        date: "2026-07-21",
        title: {
            en: "Upgrade your plan in a couple of taps",
            cs: "Vylepšete svůj plán během pár kliknutí",
            de: "Wechsle deinen Tarif mit ein paar Klicks",
            fr: "Changez de forfait en quelques clics",
            ru: "Смените план за пару кликов",
            uk: "Змініть план за пару кліків",
        },
        changes: [
            {
                type: "added",
                text: {
                    en: "New Studio plan — coach up to 50 athletes on a single subscription, for growing teams that have outgrown Pro.",
                    cs: "Nový plán Studio — trénujte až 50 sportovců v rámci jednoho předplatného. Ideální pro rostoucí týmy, kterým už Pro nestačí.",
                    de: "Neuer Studio-Tarif — betreue bis zu 50 Athleten mit einem einzigen Abonnement. Ideal für wachsende Teams, denen Pro nicht mehr reicht.",
                    fr: "Nouveau forfait Studio — accompagnez jusqu'à 50 athlètes avec un seul abonnement. Idéal pour les équipes en croissance qui ont dépassé Pro.",
                    ru: "Новый план Studio — ведите до 50 спортсменов в рамках одной подписки. Идеально для растущих команд, которым уже мало Pro.",
                    uk: "Новий план Studio — ведіть до 50 спортсменів у межах однієї підписки. Ідеально для команд, що зростають і яким уже замало Pro.",
                },
            },
            {
                type: "added",
                text: {
                    en: "You can now upgrade to a higher plan directly from Settings → Subscription. Before you confirm, you'll see exactly what you'll pay today — the unused time on your current plan is credited automatically and only the difference is charged.",
                    cs: "Na vyšší plán teď přejdete přímo v Nastavení → Předplatné. Než platbu potvrdíte, uvidíte přesně, kolik dnes zaplatíte — nevyužitý čas ze stávajícího plánu se automaticky odečte a doúčtuje se jen rozdíl.",
                    de: "Du kannst jetzt direkt unter Einstellungen → Abonnement auf einen höheren Tarif wechseln. Vor der Bestätigung siehst du genau, was du heute zahlst — die nicht genutzte Zeit deines aktuellen Tarifs wird automatisch angerechnet und nur die Differenz berechnet.",
                    fr: "Vous pouvez désormais passer à un forfait supérieur directement dans Paramètres → Abonnement. Avant de confirmer, vous voyez exactement ce que vous paierez aujourd'hui — le temps non utilisé de votre forfait actuel est crédité automatiquement et seule la différence est facturée.",
                    ru: "Перейти на более высокий план теперь можно прямо в разделе Настройки → Подписка. Перед подтверждением вы увидите точную сумму к оплате сегодня — неиспользованное время текущего плана засчитывается автоматически, и списывается только разница.",
                    uk: "Перейти на вищий план тепер можна просто в розділі Налаштування → Підписка. Перед підтвердженням ви побачите точну суму до сплати сьогодні — невикористаний час поточного плану зараховується автоматично, і списується лише різниця.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "Plan upgrades take effect immediately — your new athlete limit is available the moment your payment goes through, with no waiting for the next billing cycle.",
                    cs: "Vylepšení plánu se projeví okamžitě — nový limit sportovců máte k dispozici hned po zaplacení, bez čekání na další zúčtovací období.",
                    de: "Tarifwechsel greifen sofort — dein neues Athletenlimit steht bereit, sobald die Zahlung durch ist, ganz ohne Warten auf den nächsten Abrechnungszeitraum.",
                    fr: "Les changements de forfait prennent effet immédiatement — votre nouvelle limite d'athlètes est disponible dès que le paiement est validé, sans attendre le cycle de facturation suivant.",
                    ru: "Смена плана вступает в силу сразу — новый лимит спортсменов доступен в момент прохождения платежа, без ожидания следующего расчётного периода.",
                    uk: "Зміна плану набуває чинності одразу — новий ліміт спортсменів доступний у момент проходження платежу, без очікування наступного розрахункового періоду.",
                },
            },
        ],
    },
    {
        version: "1.8.1",
        date: "2026-07-16",
        title: {
            en: "Complete your training without scrolling",
            cs: "Dokončete trénink bez zbytečného scrollování",
            de: "Schließe dein Training ohne Scrollen ab",
            fr: "Terminez votre entraînement sans faire défiler",
            ru: "Завершайте тренировку без лишней прокрутки",
            uk: "Завершуйте тренування без зайвого прокручування",
        },
        changes: [
            {
                type: "improved",
                text: {
                    en: "The “Complete training” button now stays pinned to the bottom of the screen as you scroll through a training's detail, so it's always within reach instead of hidden at the very end.",
                    cs: "Tlačítko „Dokončit trénink“ nyní zůstává ukotvené u spodního okraje obrazovky, když procházíte detail tréninku — máte ho tak vždy po ruce a není schované úplně na konci.",
                    de: "Die Schaltfläche „Training abschließen“ bleibt jetzt am unteren Bildschirmrand fixiert, während du durch die Trainingsdetails scrollst — so ist sie immer griffbereit statt ganz am Ende versteckt.",
                    fr: "Le bouton « Terminer l'entraînement » reste désormais fixé en bas de l'écran pendant que vous faites défiler le détail d'un entraînement — il est donc toujours à portée de main au lieu d'être caché tout en bas.",
                    ru: "Кнопка «Завершить тренировку» теперь закреплена внизу экрана, пока вы прокручиваете детали тренировки, — она всегда под рукой, а не спрятана в самом конце.",
                    uk: "Кнопка «Завершити тренування» тепер закріплена внизу екрана, поки ви прокручуєте деталі тренування, — вона завжди під рукою, а не схована в самому кінці.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "On phones, tapping into a text field no longer zooms the page in, so forms stay put and are easier to fill out.",
                    cs: "Na telefonu se po klepnutí do textového pole už stránka nezvětší (nezoomuje) — formuláře tak zůstávají na místě a snáz se vyplňují.",
                    de: "Auf dem Handy zoomt die Seite nicht mehr hinein, wenn du in ein Textfeld tippst — Formulare bleiben an Ort und Stelle und lassen sich leichter ausfüllen.",
                    fr: "Sur téléphone, toucher un champ de texte ne zoome plus la page — les formulaires restent en place et sont plus faciles à remplir.",
                    ru: "На телефоне при нажатии на текстовое поле страница больше не увеличивается — формы остаются на месте и заполнять их удобнее.",
                    uk: "На телефоні при натисканні на текстове поле сторінка більше не збільшується — форми залишаються на місці, і заповнювати їх зручніше.",
                },
            },
            {
                type: "fixed",
                text: {
                    en: "The complete and feedback controls now appear only on trainings you created or that are assigned to you, so they no longer show up when viewing someone else's training.",
                    cs: "Tlačítko pro dokončení a hodnocení se nyní zobrazují jen u tréninků, které jste vytvořili nebo které vám byly přiřazeny — u cizích tréninků se už neukazují.",
                    de: "Die Schaltflächen zum Abschließen und für Feedback erscheinen jetzt nur noch bei Trainings, die du erstellt hast oder die dir zugewiesen sind — bei fremden Trainings tauchen sie nicht mehr auf.",
                    fr: "Les boutons de validation et de retour n'apparaissent plus que sur les entraînements que vous avez créés ou qui vous sont assignés — ils ne s'affichent plus sur l'entraînement de quelqu'un d'autre.",
                    ru: "Кнопки завершения и обратной связи теперь показываются только у тренировок, которые вы создали или которые вам назначены, — у чужих тренировок они больше не появляются.",
                    uk: "Кнопки завершення та зворотного зв'язку тепер показуються лише в тренуваннях, які ви створили або які вам призначено, — у чужих тренуваннях вони більше не з'являються.",
                },
            },
        ],
    },
    {
        version: "1.8.0",
        date: "2026-07-14",
        title: {
            en: "Never start from scratch with a new client",
            cs: "Se svým novým klientem nezačínáte od nuly",
            de: "Mit einem neuen Klienten fängst du nie bei null an",
            fr: "Ne repartez jamais de zéro avec un nouveau client",
            ru: "С новым клиентом вы не начинаете с нуля",
            uk: "З новим клієнтом ви не починаєте з нуля",
        },
        changes: [
            {
                type: "added",
                text: {
                    en: "When an athlete joins your group, you can now see their previous trainings, performances, and competitions from any trainer who has coached them — no more starting from a blank slate with a new client.",
                    cs: "Když se k vám sportovec připojí, uvidíte nově jeho předchozí tréninky, výkony a soutěže od jakéhokoli trenéra, který ho trénoval — s novým klientem už nezačínáte od nuly.",
                    de: "Wenn ein Athlet deiner Gruppe beitritt, siehst du jetzt seine früheren Trainings, Leistungen und Wettkämpfe von jedem Trainer, der ihn betreut hat — mit einem neuen Klienten fängst du nicht mehr bei null an.",
                    fr: "Lorsqu'un athlète rejoint votre groupe, vous voyez désormais ses entraînements, performances et compétitions antérieurs, quel que soit l'entraîneur qui l'a accompagné — fini le départ de zéro avec un nouveau client.",
                    ru: "Когда спортсмен вступает в вашу группу, вы теперь видите его прошлые тренировки, результаты и соревнования от любого тренера, который его вёл, — с новым клиентом больше не нужно начинать с чистого листа.",
                    uk: "Коли спортсмен приєднується до вашої групи, ви тепер бачите його минулі тренування, результати та змагання від будь-якого тренера, який його вів, — з новим клієнтом більше не треба починати з чистого аркуша.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "Trainings, performances, and competitions created by another trainer are now clearly labeled with their author's name and shown read-only, so you can always tell your own entries apart from a client's history with someone else.",
                    cs: "Tréninky, výkony a soutěže vytvořené jiným trenérem jsou nově označené jménem autora a zobrazují se pouze pro čtení — své záznamy tak vždy snadno odlišíte od historie klienta s jiným trenérem.",
                    de: "Trainings, Leistungen und Wettkämpfe, die ein anderer Trainer angelegt hat, sind jetzt klar mit dem Namen des Autors gekennzeichnet und schreibgeschützt — so unterscheidest du deine eigenen Einträge immer von der Historie des Klienten bei jemand anderem.",
                    fr: "Les entraînements, performances et compétitions créés par un autre entraîneur portent désormais clairement le nom de leur auteur et sont en lecture seule — vous distinguez ainsi toujours vos propres entrées de l'historique du client avec quelqu'un d'autre.",
                    ru: "Тренировки, результаты и соревнования, созданные другим тренером, теперь помечены именем автора и доступны только для чтения — свои записи вы всегда легко отличите от истории клиента с кем-то другим.",
                    uk: "Тренування, результати та змагання, створені іншим тренером, тепер позначені іменем автора й доступні лише для читання — свої записи ви завжди легко відрізните від історії клієнта з кимось іншим.",
                },
            },
            {
                type: "added",
                text: {
                    en: "Athletes can now see all the trainer groups they belong to under Settings, and leave any group at any time — leaving immediately removes that trainer's access to their history.",
                    cs: "Sportovci nově v Nastavení uvidí všechny trenérské skupiny, do kterých patří, a mohou kdykoli libovolnou skupinu opustit — opuštěním trenérovi okamžitě odeberou přístup ke své historii.",
                    de: "Athleten sehen jetzt unter Einstellungen alle Trainergruppen, denen sie angehören, und können jede Gruppe jederzeit verlassen — damit entziehen sie dem Trainer sofort den Zugriff auf ihre Historie.",
                    fr: "Les athlètes voient désormais dans les Paramètres tous les groupes d'entraîneurs auxquels ils appartiennent et peuvent quitter n'importe quel groupe à tout moment — le quitter retire immédiatement l'accès de cet entraîneur à leur historique.",
                    ru: "Спортсмены теперь видят в настройках все тренерские группы, в которых состоят, и могут в любой момент покинуть любую из них — при этом доступ тренера к их истории прекращается сразу.",
                    uk: "Спортсмени тепер бачать у налаштуваннях усі тренерські групи, до яких належать, і можуть будь-коли покинути будь-яку з них — при цьому доступ тренера до їхньої історії припиняється одразу.",
                },
            },
            {
                type: "added",
                text: {
                    en: "Before accepting a new trainer's invitation, athletes now see exactly what that trainer will be able to see, so they know what they're agreeing to.",
                    cs: "Před přijetím pozvánky od nového trenéra sportovci nově uvidí přesně, co bude moct trenér vidět, takže vědí, s čím souhlasí.",
                    de: "Bevor Athleten die Einladung eines neuen Trainers annehmen, sehen sie jetzt genau, was dieser Trainer einsehen kann — so wissen sie, wozu sie zustimmen.",
                    fr: "Avant d'accepter l'invitation d'un nouvel entraîneur, les athlètes voient désormais exactement ce que celui-ci pourra consulter, et savent donc à quoi ils consentent.",
                    ru: "Перед принятием приглашения от нового тренера спортсмены теперь видят, что именно этот тренер сможет просматривать, — и понимают, на что соглашаются.",
                    uk: "Перед прийняттям запрошення від нового тренера спортсмени тепер бачать, що саме цей тренер зможе переглядати, — і розуміють, на що погоджуються.",
                },
            },
        ],
    },
    {
        version: "1.7.1",
        date: "2026-07-12",
        title: {
            en: "Log your own metrics and safer published trainings",
            cs: "Zapisujte vlastní metriky a bezpečnější zveřejněné tréninky",
            de: "Eigene Messwerte erfassen und sicherere veröffentlichte Trainings",
            fr: "Enregistrez vos propres mesures et publiez vos entraînements en toute sécurité",
            ru: "Записывайте свои метрики и безопаснее публикуйте тренировки",
            uk: "Записуйте власні метрики та безпечніше публікуйте тренування",
        },
        changes: [
            {
                type: "added",
                text: {
                    en: "Athletes can now add their own columns to the set log — track extra metrics beyond what the trainer prescribed, such as weight or RPE, when logging your results (up to 3 columns in total).",
                    cs: "Sportovci si nově mohou do záznamu sérií přidat vlastní sloupce — při zapisování výsledků tak zaznamenáte i další metriky nad rámec předpisu od trenéra, například váhu nebo RPE (celkem max. 3 sloupce).",
                    de: "Athleten können dem Satzprotokoll jetzt eigene Spalten hinzufügen — erfasse beim Eintragen deiner Ergebnisse zusätzliche Messwerte über die Vorgaben des Trainers hinaus, etwa Gewicht oder RPE (insgesamt bis zu 3 Spalten).",
                    fr: "Les athlètes peuvent désormais ajouter leurs propres colonnes au journal des séries — enregistrez des mesures supplémentaires au-delà de ce que l'entraîneur a prescrit, comme la charge ou le RPE (jusqu'à 3 colonnes au total).",
                    ru: "Спортсмены теперь могут добавлять собственные столбцы в журнал подходов — записывайте дополнительные метрики сверх того, что задал тренер, например вес или RPE (всего до 3 столбцов).",
                    uk: "Спортсмени тепер можуть додавати власні стовпці до журналу підходів — записуйте додаткові метрики понад те, що задав тренер, наприклад вагу або RPE (загалом до 3 стовпців).",
                },
            },
            {
                type: "improved",
                text: {
                    en: "Published trainings are now protected from accidental edits — the editor opens them read-only with a notice, and making changes requires unpublishing first.",
                    cs: "Zveřejněné tréninky jsou nově chráněné před nechtěnými úpravami — editor je otevře pouze pro čtení s upozorněním a pro změny je potřeba nejprve zrušit zveřejnění.",
                    de: "Veröffentlichte Trainings sind jetzt vor versehentlichen Änderungen geschützt — der Editor öffnet sie schreibgeschützt mit einem Hinweis, und für Änderungen musst du die Veröffentlichung zuerst zurücknehmen.",
                    fr: "Les entraînements publiés sont désormais protégés des modifications accidentelles — l'éditeur les ouvre en lecture seule avec un avertissement, et toute modification exige de les dépublier d'abord.",
                    ru: "Опубликованные тренировки теперь защищены от случайных правок — редактор открывает их только для чтения с предупреждением, а для изменений нужно сначала снять публикацию.",
                    uk: "Опубліковані тренування тепер захищені від випадкових правок — редактор відкриває їх лише для читання з попередженням, а для змін потрібно спершу зняти публікацію.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "Past trainings can no longer be published or unpublished — like editing, these actions are only available for upcoming trainings.",
                    cs: "Tréninky v minulosti už nelze zveřejnit ani skrýt — stejně jako úpravy jsou tyto akce dostupné jen pro nadcházející tréninky.",
                    de: "Vergangene Trainings lassen sich nicht mehr veröffentlichen oder zurückziehen — wie das Bearbeiten stehen diese Aktionen nur für bevorstehende Trainings zur Verfügung.",
                    fr: "Les entraînements passés ne peuvent plus être publiés ni dépubliés — comme la modification, ces actions ne sont disponibles que pour les entraînements à venir.",
                    ru: "Прошедшие тренировки больше нельзя опубликовать или снять с публикации — как и редактирование, эти действия доступны только для предстоящих тренировок.",
                    uk: "Минулі тренування більше не можна опублікувати або зняти з публікації — як і редагування, ці дії доступні лише для майбутніх тренувань.",
                },
            },
        ],
    },
    {
        version: "1.7.0",
        date: "2026-07-10",
        title: {
            en: "Autosave and draft trainings",
            cs: "Automatické ukládání a koncepty tréninků",
            de: "Autosave und Trainingsentwürfe",
            fr: "Enregistrement automatique et brouillons d'entraînement",
            ru: "Автосохранение и черновики тренировок",
            uk: "Автозбереження та чернетки тренувань",
        },
        changes: [
            {
                type: "improved",
                text: {
                    en: "Trainings now save automatically as you build them — every change is stored as you go, so you no longer need to save manually and won't lose your work if you leave the page or close the tab.",
                    cs: "Tréninky se nově ukládají automaticky během tvorby — každá změna se průběžně uloží, takže už nemusíte ukládat ručně a o svou práci nepřijdete, ani když stránku opustíte nebo zavřete okno.",
                    de: "Trainings werden jetzt beim Erstellen automatisch gespeichert — jede Änderung wird laufend gesichert, du musst nicht mehr manuell speichern und verlierst deine Arbeit nicht, wenn du die Seite verlässt oder den Tab schließt.",
                    fr: "Les entraînements sont désormais enregistrés automatiquement au fur et à mesure — chaque modification est sauvegardée en continu, vous n'avez plus besoin d'enregistrer manuellement et ne perdez pas votre travail si vous quittez la page ou fermez l'onglet.",
                    ru: "Тренировки теперь сохраняются автоматически по мере составления — каждое изменение записывается сразу, поэтому вручную сохранять не нужно, и работа не потеряется, если вы уйдёте со страницы или закроете вкладку.",
                    uk: "Тренування тепер зберігаються автоматично під час складання — кожна зміна записується одразу, тож зберігати вручну не потрібно, і робота не втратиться, якщо ви підете зі сторінки або закриєте вкладку.",
                },
            },
            {
                type: "added",
                text: {
                    en: "Trainers can now build a training as a private draft — take your time putting it together, and your athlete won't see it until it's ready.",
                    cs: "Trenéři mohou nově sestavit trénink jako soukromý koncept — připravte ho v klidu a sportovec ho uvidí, až bude připravený.",
                    de: "Trainer können ein Training jetzt als privaten Entwurf anlegen — nimm dir Zeit beim Zusammenstellen, dein Athlet sieht es erst, wenn es fertig ist.",
                    fr: "Les entraîneurs peuvent désormais construire un entraînement sous forme de brouillon privé — prenez le temps de le préparer, votre athlète ne le verra qu'une fois prêt.",
                    ru: "Тренеры теперь могут составить тренировку как приватный черновик — готовьте её спокойно, спортсмен увидит её, только когда она будет готова.",
                    uk: "Тренери тепер можуть скласти тренування як приватну чернетку — готуйте його спокійно, спортсмен побачить його лише тоді, коли воно буде готове.",
                },
            },
            {
                type: "added",
                text: {
                    en: "Publish a training when it's ready to share with your athlete, and unpublish it anytime to hide it again — both right from the calendar.",
                    cs: "Až je trénink připravený sdílet se sportovcem, zveřejněte ho — a kdykoli ho můžete opět skrýt zrušením zveřejnění, obojí přímo z kalendáře.",
                    de: "Veröffentliche ein Training, sobald es bereit ist, und nimm die Veröffentlichung jederzeit zurück, um es wieder auszublenden — beides direkt aus dem Kalender.",
                    fr: "Publiez un entraînement lorsqu'il est prêt à être partagé avec votre athlète, et dépubliez-le à tout moment pour le masquer à nouveau — le tout directement depuis le calendrier.",
                    ru: "Опубликуйте тренировку, когда она готова к отправке спортсмену, и в любой момент снимите публикацию, чтобы снова её скрыть, — и то и другое прямо из календаря.",
                    uk: "Опублікуйте тренування, коли воно готове до надсилання спортсмену, і будь-коли зніміть публікацію, щоб знову його приховати, — і те, і те просто з календаря.",
                },
            },
        ],
    },
    {
        version: "1.6.0",
        date: "2026-07-08",
        title: {
            en: "Explore the exercise database",
            cs: "Prozkoumejte databázi cviků",
            de: "Entdecke die Übungsdatenbank",
            fr: "Explorez la base d'exercices",
            ru: "Изучите базу упражнений",
            uk: "Дослідіть базу вправ",
        },
        changes: [
            {
                type: "added",
                text: {
                    en: "Athletes now have a new Exercises section — browse the public exercise database and open any exercise to see its details and demonstration video.",
                    cs: "Sportovci mají nově k dispozici sekci Cviky — procházejte veřejnou databázi cviků a každý cvik si otevřete i s detailem a ukázkovým videem.",
                    de: "Athleten haben jetzt einen neuen Bereich „Übungen“ — durchstöbere die öffentliche Übungsdatenbank und öffne jede Übung mit Details und Demo-Video.",
                    fr: "Les athlètes disposent désormais d'une section Exercices — parcourez la base d'exercices publique et ouvrez n'importe quel exercice pour voir son détail et sa vidéo de démonstration.",
                    ru: "У спортсменов появился новый раздел «Упражнения» — просматривайте публичную базу упражнений и открывайте любое упражнение с описанием и демонстрационным видео.",
                    uk: "У спортсменів з'явився новий розділ «Вправи» — переглядайте публічну базу вправ і відкривайте будь-яку вправу з описом і демонстраційним відео.",
                },
            },
            {
                type: "added",
                text: {
                    en: "Find exercises quickly: search by name and filter by muscle group, movement pattern, exercise type, or plane of motion.",
                    cs: "Cviky rychle dohledáte: vyhledávejte podle názvu a filtrujte podle svalové skupiny, pohybového vzoru, typu cviku nebo roviny pohybu.",
                    de: "Finde Übungen schnell: Suche nach Namen und filtere nach Muskelgruppe, Bewegungsmuster, Übungstyp oder Bewegungsebene.",
                    fr: "Trouvez rapidement un exercice : cherchez par nom et filtrez par groupe musculaire, schéma de mouvement, type d'exercice ou plan de mouvement.",
                    ru: "Быстро находите упражнения: ищите по названию и фильтруйте по группе мышц, паттерну движения, типу упражнения или плоскости движения.",
                    uk: "Швидко знаходьте вправи: шукайте за назвою та фільтруйте за групою м'язів, патерном руху, типом вправи або площиною руху.",
                },
            },
            {
                type: "added",
                text: {
                    en: "Star exercises as favorites — they are offered first when you pick exercises while creating your own training.",
                    cs: "Označte si cviky hvězdičkou jako oblíbené — při výběru cviků do vlastního tréninku se pak nabízejí jako první.",
                    de: "Markiere Übungen als Favoriten — beim Zusammenstellen eines eigenen Trainings werden sie zuerst vorgeschlagen.",
                    fr: "Marquez des exercices comme favoris — ils sont proposés en premier lorsque vous choisissez des exercices pour votre propre entraînement.",
                    ru: "Отмечайте упражнения как избранные — при выборе упражнений для собственной тренировки они предлагаются первыми.",
                    uk: "Позначайте вправи як улюблені — під час вибору вправ для власного тренування вони пропонуються першими.",
                },
            },
        ],
    },
    {
        version: "1.5.0",
        date: "2026-07-01",
        title: {
            en: "Plan your own trainings",
            cs: "Plánujte si vlastní tréninky",
            de: "Plane deine eigenen Trainings",
            fr: "Planifiez vos propres entraînements",
            ru: "Планируйте собственные тренировки",
            uk: "Плануйте власні тренування",
        },
        changes: [
            {
                type: "added",
                text: {
                    en: "You can now create your own trainings directly on your calendar — plan a workout for any day yourself, without waiting for a trainer to assign one.",
                    cs: "Nově si můžete vytvářet vlastní tréninky přímo ve svém kalendáři — naplánujte si trénink na libovolný den sami, bez čekání na přiřazení od trenéra.",
                    de: "Du kannst jetzt eigene Trainings direkt in deinem Kalender anlegen — plane selbst eine Einheit für einen beliebigen Tag, ohne auf die Zuweisung eines Trainers zu warten.",
                    fr: "Vous pouvez désormais créer vos propres entraînements directement dans votre calendrier — planifiez vous-même une séance n'importe quel jour, sans attendre qu'un entraîneur vous en assigne une.",
                    ru: "Теперь вы можете создавать собственные тренировки прямо в своём календаре — запланируйте занятие на любой день сами, не дожидаясь назначения от тренера.",
                    uk: "Тепер ви можете створювати власні тренування просто у своєму календарі — заплануйте заняття на будь-який день самі, не чекаючи призначення від тренера.",
                },
            },
            {
                type: "added",
                text: {
                    en: "Manage your own trainings freely: edit them, duplicate them, drag them to another day, or delete them anytime.",
                    cs: "Své tréninky si spravujete podle sebe: upravte je, zkopírujte, přetáhněte na jiný den nebo je kdykoli smažte.",
                    de: "Verwalte deine eigenen Trainings frei: bearbeite sie, dupliziere sie, zieh sie auf einen anderen Tag oder lösche sie jederzeit.",
                    fr: "Gérez librement vos propres entraînements : modifiez-les, dupliquez-les, faites-les glisser vers un autre jour ou supprimez-les à tout moment.",
                    ru: "Управляйте своими тренировками свободно: редактируйте, копируйте, перетаскивайте на другой день или удаляйте в любой момент.",
                    uk: "Керуйте своїми тренуваннями вільно: редагуйте, копіюйте, перетягуйте на інший день або видаляйте будь-коли.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "Trainings assigned by your trainer appear on the same calendar, labelled with their author and kept view-only, so your own plans and your trainer's never get mixed up.",
                    cs: "Tréninky přiřazené trenérem se zobrazují ve stejném kalendáři, označené jménem autora, a zůstávají jen ke čtení, takže se vaše vlastní plány a plány od trenéra nikdy nepomíchají.",
                    de: "Vom Trainer zugewiesene Trainings erscheinen im selben Kalender, mit dem Namen des Autors gekennzeichnet und nur zum Ansehen — so vermischen sich deine eigenen Pläne und die deines Trainers nie.",
                    fr: "Les entraînements assignés par votre entraîneur apparaissent dans le même calendrier, signés par leur auteur et en lecture seule — vos propres plans et ceux de votre entraîneur ne se mélangent jamais.",
                    ru: "Тренировки, назначенные тренером, отображаются в том же календаре с указанием автора и только для просмотра — ваши планы и планы тренера никогда не перепутаются.",
                    uk: "Тренування, призначені тренером, відображаються в тому ж календарі із зазначенням автора й лише для перегляду — ваші плани та плани тренера ніколи не переплутаються.",
                },
            },
        ],
    },
    {
        version: "1.4.0",
        date: "2026-06-25",
        title: {
            en: "Your trainings on a calendar",
            cs: "Vaše tréninky v kalendáři",
            de: "Deine Trainings im Kalender",
            fr: "Vos entraînements dans un calendrier",
            ru: "Ваши тренировки в календаре",
            uk: "Ваші тренування в календарі",
        },
        changes: [
            {
                type: "improved",
                text: {
                    en: "Your trainings now live on a calendar instead of a plain list — browse any month on desktop or any week on mobile.",
                    cs: "Vaše tréninky se nově zobrazují v kalendáři místo jednoduchého seznamu — procházejte libovolný měsíc na počítači nebo týden na mobilu.",
                    de: "Deine Trainings liegen jetzt in einem Kalender statt in einer einfachen Liste — blättere am Desktop durch jeden Monat oder am Handy durch jede Woche.",
                    fr: "Vos entraînements se trouvent désormais dans un calendrier plutôt que dans une simple liste — parcourez n'importe quel mois sur ordinateur ou n'importe quelle semaine sur mobile.",
                    ru: "Ваши тренировки теперь показываются в календаре, а не простым списком — листайте любой месяц на компьютере или любую неделю на телефоне.",
                    uk: "Ваші тренування тепер показуються в календарі, а не простим списком — гортайте будь-який місяць на комп'ютері або будь-який тиждень на телефоні.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "Opening a training now takes you to its full detail page, and going back returns you to the exact month or week you were viewing.",
                    cs: "Otevření tréninku vás nově přenese na celou stránku s detailem a po návratu zpět se vrátíte přesně na měsíc nebo týden, který jste si prohlíželi.",
                    de: "Beim Öffnen eines Trainings landest du jetzt auf seiner vollständigen Detailseite, und zurück geht es genau zu dem Monat oder der Woche, die du gerade angesehen hast.",
                    fr: "Ouvrir un entraînement vous amène désormais à sa page de détail complète, et le retour vous ramène exactement au mois ou à la semaine que vous consultiez.",
                    ru: "Открытие тренировки теперь ведёт на её полную страницу с деталями, а возврат возвращает вас точно к тому месяцу или неделе, которые вы просматривали.",
                    uk: "Відкриття тренування тепер веде на його повну сторінку з деталями, а повернення повертає вас точно до того місяця чи тижня, які ви переглядали.",
                },
            },
        ],
    },
    {
        version: "1.3.0",
        date: "2026-06-17",
        title: {
            en: "Trainings 2.0 is now standard",
            cs: "Tréninky 2.0 jsou nově standardem",
            de: "Trainings 2.0 ist jetzt Standard",
            fr: "Entraînements 2.0 devient la norme",
            ru: "Тренировки 2.0 теперь стандарт",
            uk: "Тренування 2.0 тепер стандарт",
        },
        changes: [
            {
                type: "improved",
                text: {
                    en: "Trainings 2.0 is out of beta and is now the standard way to train. When you create a training it's always built set by set — the separate Classic option is gone.",
                    cs: "Tréninky 2.0 opouštějí beta verzi a stávají se standardním způsobem tréninku. Nový trénink se nově vždy sestavuje sérii po sérii — samostatná volba Klasický trénink už není.",
                    de: "Trainings 2.0 verlässt die Beta und ist jetzt der Standard. Ein neues Training wird immer Satz für Satz aufgebaut — die separate Option „Klassisch“ entfällt.",
                    fr: "Entraînements 2.0 sort de la bêta et devient la façon standard de s'entraîner. Un nouvel entraînement se construit toujours série par série — l'option Classique distincte a disparu.",
                    ru: "Тренировки 2.0 вышли из беты и стали стандартным способом тренироваться. Новая тренировка всегда составляется подход за подходом — отдельного варианта «Классическая» больше нет.",
                    uk: "Тренування 2.0 вийшли з бети та стали стандартним способом тренуватися. Нове тренування завжди складається підхід за підходом — окремого варіанта «Класичне» більше немає.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "All your existing trainings have been automatically upgraded to the new set-based format — there's nothing you need to do, and your uploaded videos stay attached.",
                    cs: "Všechny vaše stávající tréninky byly automaticky převedeny do nového formátu se sériemi — nemusíte nic dělat a vaše nahraná videa zůstávají na svém místě.",
                    de: "Alle deine bestehenden Trainings wurden automatisch in das neue satzbasierte Format überführt — du musst nichts tun, und deine hochgeladenen Videos bleiben erhalten.",
                    fr: "Tous vos entraînements existants ont été automatiquement convertis au nouveau format par séries — vous n'avez rien à faire, et vos vidéos envoyées restent attachées.",
                    ru: "Все ваши существующие тренировки автоматически переведены в новый формат с подходами — делать ничего не нужно, а загруженные видео остаются на месте.",
                    uk: "Усі ваші наявні тренування автоматично переведено в новий формат із підходами — робити нічого не потрібно, а завантажені відео залишаються на місці.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "Every training now opens in the same editor and the same view, so the experience is consistent everywhere.",
                    cs: "Každý trénink se nově otevírá ve stejném editoru a zobrazení, takže máte všude jednotné prostředí.",
                    de: "Jedes Training öffnet sich jetzt im selben Editor und in derselben Ansicht — so ist die Bedienung überall einheitlich.",
                    fr: "Chaque entraînement s'ouvre désormais dans le même éditeur et la même vue, pour une expérience homogène partout.",
                    ru: "Каждая тренировка теперь открывается в одном и том же редакторе и представлении, поэтому опыт везде одинаковый.",
                    uk: "Кожне тренування тепер відкривається в тому самому редакторі та вигляді, тож досвід усюди однаковий.",
                },
            },
        ],
    },
    {
        version: "1.2.0",
        date: "2026-06-14",
        title: {
            en: "Trainings 2.0 (beta)",
            cs: "Tréninky 2.0 (beta)",
            de: "Trainings 2.0 (Beta)",
            fr: "Entraînements 2.0 (bêta)",
            ru: "Тренировки 2.0 (бета)",
            uk: "Тренування 2.0 (бета)",
        },
        changes: [
            {
                type: "added",
                text: {
                    en: "Introducing Trainings 2.0 (beta): build workouts set by set, giving each set its own reps, weight, and difficulty target instead of a single prescription for the whole exercise.",
                    cs: "Představujeme Tréninky 2.0 (beta): sestavujte tréninky sérii po sérii — každá série může mít vlastní cíl pro opakování, váhu i obtížnost místo jednoho zadání pro celý cvik.",
                    de: "Wir stellen vor: Trainings 2.0 (Beta) — baue Einheiten Satz für Satz auf und gib jedem Satz eigene Wiederholungen, Gewicht und Zielintensität statt einer einzigen Vorgabe für die ganze Übung.",
                    fr: "Découvrez Entraînements 2.0 (bêta) : construisez vos séances série par série, en donnant à chaque série ses propres répétitions, sa charge et son objectif de difficulté, au lieu d'une consigne unique pour tout l'exercice.",
                    ru: "Представляем Тренировки 2.0 (бета): составляйте занятия подход за подходом, задавая каждому подходу свои повторения, вес и целевую сложность вместо одного задания на всё упражнение.",
                    uk: "Представляємо Тренування 2.0 (бета): складайте заняття підхід за підходом, задаючи кожному підходу свої повторення, вагу та цільову складність замість одного завдання на всю вправу.",
                },
            },
            {
                type: "added",
                text: {
                    en: "Athletes can log what they actually performed for each individual set, making progress tracking far more precise.",
                    cs: "Atleti mohou zaznamenat, co skutečně odcvičili, pro každou jednotlivou sérii, takže sledování pokroku je mnohem přesnější.",
                    de: "Athleten können für jeden einzelnen Satz festhalten, was sie tatsächlich geleistet haben — das macht die Fortschrittsverfolgung deutlich präziser.",
                    fr: "Les athlètes peuvent enregistrer ce qu'ils ont réellement réalisé pour chaque série, ce qui rend le suivi des progrès bien plus précis.",
                    ru: "Спортсмены могут записывать, что действительно выполнили, по каждому отдельному подходу — это делает отслеживание прогресса гораздо точнее.",
                    uk: "Спортсмени можуть записувати, що справді виконали, за кожним окремим підходом — це робить відстеження прогресу значно точнішим.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "Trainings 2.0 is in beta and works as a new training type. When creating a training you can choose between Classic training and Training 2.0. Each has its own editor and its own view. Everything will gradually be unified into Training 2.0.",
                    cs: "Tréninky 2.0 jsou v beta verzi a fungují jako nový typ tréninku. Při vytváření tréninku máte na výběr Klasický trénink a Trénink 2.0. Každý z těchto tréninků má svůj vlastní editor a své zobrazení. Postupně bude vše sjednoceno do podoby Trénink 2.0.",
                    de: "Trainings 2.0 ist in der Beta und funktioniert als neuer Trainingstyp. Beim Anlegen eines Trainings kannst du zwischen Klassischem Training und Training 2.0 wählen. Jedes hat seinen eigenen Editor und seine eigene Ansicht. Nach und nach wird alles zu Training 2.0 zusammengeführt.",
                    fr: "Entraînements 2.0 est en bêta et fonctionne comme un nouveau type d'entraînement. À la création, vous pouvez choisir entre l'entraînement Classique et l'Entraînement 2.0. Chacun a son propre éditeur et sa propre vue. Tout sera progressivement unifié vers l'Entraînement 2.0.",
                    ru: "Тренировки 2.0 находятся в бете и работают как новый тип тренировки. При создании тренировки можно выбрать между классической тренировкой и Тренировкой 2.0. У каждой свой редактор и своё представление. Постепенно всё будет объединено в Тренировку 2.0.",
                    uk: "Тренування 2.0 перебувають у беті й працюють як новий тип тренування. Під час створення тренування можна обрати між класичним тренуванням і Тренуванням 2.0. Кожне має власний редактор і власний вигляд. Поступово все буде об'єднано в Тренування 2.0.",
                },
            },
        ],
    },
    {
        version: "1.1.0",
        date: "2026-06-08",
        title: {
            en: "A calendar of our own",
            cs: "Vlastní kalendář",
            de: "Ein eigener Kalender",
            fr: "Un calendrier bien à nous",
            ru: "Собственный календарь",
            uk: "Власний календар",
        },
        changes: [
            {
                type: "improved",
                text: {
                    en: "The training calendar has been rebuilt from the ground up — faster and lighter, with a dedicated month view on desktop and a streamlined week view on mobile.",
                    cs: "Tréninkový kalendář jsme přepracovali od základu — je rychlejší a lehčí, s vlastním měsíčním zobrazením na počítači a zjednodušeným týdenním zobrazením na mobilu.",
                    de: "Der Trainingskalender wurde von Grund auf neu gebaut — schneller und leichter, mit einer eigenen Monatsansicht am Desktop und einer aufgeräumten Wochenansicht am Handy.",
                    fr: "Le calendrier d'entraînement a été reconstruit de zéro — plus rapide et plus léger, avec une vue mensuelle dédiée sur ordinateur et une vue hebdomadaire épurée sur mobile.",
                    ru: "Тренировочный календарь полностью переписан — он быстрее и легче, с собственным месячным видом на компьютере и упрощённым недельным на телефоне.",
                    uk: "Тренувальний календар повністю переписано — він швидший і легший, із власним місячним виглядом на комп'ютері та спрощеним тижневим на телефоні.",
                },
            },
            {
                type: "added",
                text: {
                    en: "Drag and drop a training onto another day to reschedule it instantly.",
                    cs: "Přetáhněte trénink na jiný den a okamžitě jej přeplánujte.",
                    de: "Zieh ein Training per Drag-and-drop auf einen anderen Tag, um es sofort umzuplanen.",
                    fr: "Faites glisser un entraînement vers un autre jour pour le replanifier instantanément.",
                    ru: "Перетащите тренировку на другой день, чтобы мгновенно её перенести.",
                    uk: "Перетягніть тренування на інший день, щоб миттєво його перенести.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "Smoother drag-and-drop animations make moving trainings around feel effortless.",
                    cs: "Plynulejší animace přetahování usnadňují přesouvání tréninků.",
                    de: "Flüssigere Drag-and-drop-Animationen lassen das Verschieben von Trainings mühelos wirken.",
                    fr: "Des animations de glisser-déposer plus fluides rendent le déplacement des entraînements naturel.",
                    ru: "Более плавные анимации перетаскивания делают перенос тренировок совсем лёгким.",
                    uk: "Плавніші анімації перетягування роблять перенесення тренувань зовсім легким.",
                },
            },
        ],
    },
    {
        version: "1.0.1",
        date: "2026-06-04",
        title: {
            en: "Trainings & calendar redesign",
            cs: "Nový vzhled tréninků a kalendáře",
            de: "Trainings und Kalender im neuen Design",
            fr: "Refonte des entraînements et du calendrier",
            ru: "Новый вид тренировок и календаря",
            uk: "Новий вигляд тренувань і календаря",
        },
        changes: [
            {
                type: "improved",
                text: {
                    en: "The trainings and calendar screens got a UX/UI rework — cleaner layout, clearer training events, and much better behavior on mobile, including a redesigned week view.",
                    cs: "Obrazovky tréninků a kalendáře prošly úpravou UX/UI — přehlednější rozvržení, jasnější zobrazení tréninků a mnohem lepší chování na mobilu včetně přepracovaného týdenního zobrazení.",
                    de: "Die Trainings- und Kalenderansichten wurden in UX/UI überarbeitet — aufgeräumteres Layout, klarere Trainingseinträge und ein deutlich besseres Verhalten am Handy inklusive neu gestalteter Wochenansicht.",
                    fr: "Les écrans des entraînements et du calendrier ont été retravaillés en UX/UI — mise en page plus claire, événements d'entraînement plus lisibles et bien meilleur comportement sur mobile, avec une vue hebdomadaire repensée.",
                    ru: "Экраны тренировок и календаря переработаны по UX/UI — более понятная вёрстка, яснее отображение тренировок и значительно лучшее поведение на телефоне, включая переработанный недельный вид.",
                    uk: "Екрани тренувань і календаря перероблено за UX/UI — зрозуміліша верстка, ясніше відображення тренувань і значно краща поведінка на телефоні, включно з переробленим тижневим виглядом.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "Smoother exercise detail view and a tidier trainings overview.",
                    cs: "Vylepšený detail tréninku a přehled tréninků.",
                    de: "Flüssigere Übungsdetailansicht und eine aufgeräumtere Trainingsübersicht.",
                    fr: "Vue de détail d'exercice plus fluide et aperçu des entraînements plus ordonné.",
                    ru: "Более плавный детальный вид упражнения и аккуратнее обзор тренировок.",
                    uk: "Плавніший детальний вигляд вправи та охайніший огляд тренувань.",
                },
            },
        ],
    },
    {
        version: "1.0.0",
        date: "2026-06-04",
        title: {
            en: "Subscriptions & plans",
            cs: "Předplatné a plány",
            de: "Abonnements und Tarife",
            fr: "Abonnements et forfaits",
            ru: "Подписки и планы",
            uk: "Підписки та плани",
        },
        changes: [
            {
                type: "added",
                text: {
                    en: "Subscriptions are here — upgrade to the Pro plan with secure Stripe checkout and manage your billing anytime from the customer portal.",
                    cs: "Předplatné je tady — přejděte na plán Pro přes zabezpečenou platbu Stripe a fakturaci kdykoli spravujte v zákaznickém portálu.",
                    de: "Abonnements sind da — wechsle über die sichere Stripe-Bezahlung auf den Pro-Tarif und verwalte deine Abrechnung jederzeit im Kundenportal.",
                    fr: "Les abonnements sont là — passez au forfait Pro via le paiement sécurisé Stripe et gérez votre facturation à tout moment depuis le portail client.",
                    ru: "Подписки уже здесь — перейдите на план Pro через защищённую оплату Stripe и управляйте счетами в любой момент в клиентском портале.",
                    uk: "Підписки вже тут — перейдіть на план Pro через захищену оплату Stripe і керуйте рахунками будь-коли в клієнтському порталі.",
                },
            },
            {
                type: "added",
                text: {
                    en: "Free and Pro plans for trainers: Pro raises the number of active athletes you can coach.",
                    cs: "Plány Free a Pro pro trenéry: Pro zvyšuje počet aktivních atletů, které můžete trénovat.",
                    de: "Free- und Pro-Tarife für Trainer: Pro erhöht die Zahl der aktiven Athleten, die du betreuen kannst.",
                    fr: "Forfaits Free et Pro pour les entraîneurs : Pro augmente le nombre d'athlètes actifs que vous pouvez accompagner.",
                    ru: "Планы Free и Pro для тренеров: Pro увеличивает число активных спортсменов, которых вы можете вести.",
                    uk: "Плани Free і Pro для тренерів: Pro збільшує кількість активних спортсменів, яких ви можете вести.",
                },
            },
            {
                type: "added",
                text: {
                    en: "A new Subscription page shows your current plan, its status, and your payment details at a glance.",
                    cs: "Nová stránka Předplatné přehledně zobrazuje váš aktuální plán, jeho stav a platební údaje.",
                    de: "Eine neue Abonnement-Seite zeigt deinen aktuellen Tarif, dessen Status und deine Zahlungsdaten auf einen Blick.",
                    fr: "Une nouvelle page Abonnement affiche d'un coup d'œil votre forfait actuel, son statut et vos informations de paiement.",
                    ru: "Новая страница «Подписка» показывает ваш текущий план, его статус и платёжные данные в одном месте.",
                    uk: "Нова сторінка «Підписка» показує ваш поточний план, його статус і платіжні дані в одному місці.",
                },
            },
            {
                type: "added",
                text: {
                    en: "If a payment fails, you get an in-app notification with a one-click link to update your payment method.",
                    cs: "Když platba selže, dostanete upozornění v aplikaci s odkazem na rychlou aktualizaci platební metody.",
                    de: "Schlägt eine Zahlung fehl, bekommst du eine Benachrichtigung in der App mit einem Ein-Klick-Link, um deine Zahlungsmethode zu aktualisieren.",
                    fr: "Si un paiement échoue, vous recevez une notification dans l'application avec un lien en un clic pour mettre à jour votre moyen de paiement.",
                    ru: "Если платёж не прошёл, вы получите уведомление в приложении со ссылкой для быстрого обновления способа оплаты.",
                    uk: "Якщо платіж не пройшов, ви отримаєте сповіщення в застосунку з посиланням для швидкого оновлення способу оплати.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "A grace period keeps your access running while a failed payment is retried, so your coaching never stops abruptly.",
                    cs: "Ochranná lhůta udrží váš přístup v provozu během opakování neúspěšné platby, takže vaše trénování náhle neskončí.",
                    de: "Eine Kulanzfrist hält deinen Zugang aufrecht, während eine fehlgeschlagene Zahlung erneut versucht wird — dein Coaching endet also nie abrupt.",
                    fr: "Un délai de grâce maintient votre accès pendant les nouvelles tentatives de paiement, afin que votre coaching ne s'interrompe jamais brutalement.",
                    ru: "Льготный период сохраняет доступ, пока повторяются попытки списания, так что ваша работа не прервётся внезапно.",
                    uk: "Пільговий період зберігає доступ, поки повторюються спроби списання, тож ваша робота не перерветься раптово.",
                },
            },
        ],
    },
];

/**
 * Changelog entries sorted newest-first by date. Defensive — the array above is
 * authored newest-first too, but this guarantees order regardless of edits.
 */
export const getChangelog = (): ChangelogEntry[] =>
    [...changelogEntries].sort((a, b) => b.date.localeCompare(a.date));
