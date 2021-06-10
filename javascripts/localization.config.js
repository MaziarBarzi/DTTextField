(function () {
  'use strict';

  angular
    .module('usn')
    .config(['$translateProvider', localization]);

  function localization($translateProvider) {

    $translateProvider
      .useSanitizeValueStrategy(null)
      .registerAvailableLanguageKeys(['en','de'], {
        'en_*': 'en',
        'de_*': 'de',
        '*': 'en'
      })
      .determinePreferredLanguage()
      .fallbackLanguage('en');

    /*
    $translateProvider.useStaticFilesLoader({
      prefix: '/assets/locales/locale-',
      suffix: '.json'
    })
    */

    $translateProvider.translations('de', {
      // Navigation
      NAV_START: 'Start',
      NAV_PROJECTS: 'Projekte',
      NAV_DONATE: 'Spenden',
      NAV_TREE_OF_LIFE: 'Tree of Life',
      NAV_MYUSN: 'myUSN',
      NAV_INFO: 'Informieren',
      NAV_CONTACT: 'Kontakt',
      NAV_ABOUT: 'Über uns',
      NAV_TRANSPARENCY: 'Transparenz',
      NAV_PRESS: 'Presse',
      NAV_NEWSLETTER: 'Newsletter',
      NAV_TERMS: 'Impressum',
      NAV_PRIVACY: 'Datenschutz',

      ABOUT_LEAD: 'Über uns',
      ABOUT_LEAD_SECONDARY: 'unsere Hintergründe.',
      ABOUT_CONTENT: '' +
      '<p>USN, auch „Ultra Social Network“ genannt, ist eine private und eigenständig handelnde Charity Organisation, die sich weltweit für die Belange von Mensch, Tier und Umwelt einsetzt und dabei 100 Prozent Ihrer Spendengelder in gemeinnützige Projekte investiert. Ziel von USN ist es, den Spendern kontrollierte Bedingungen und maximale Transparenz zu gewährleisten.</p>' +
      '<p>Obwohl USN unabhängig ist, finanzieren wir unsere Projekte jedoch nicht ausschließliche durch direkte und klassische Spenden, sondern bedienen uns gleichzeitig der Unterstützung eines sozialen Netzwerks mit dem Namen „myUSN" (my Ultra Social Network). Wie andere soziale Netzwerke auch, ist myUSN eine kostenlose weltweite Kommunikationsplattform, die über alle Funktionen eines klassischen sozialen Netzwerks verfügt, aber noch viele weitere Anwendungen vorweisen wird. Darüber hinaus gewährleistet myUSN seinen Nutzern vollkommene Datensicherheit und die Möglichkeit werbefrei zu kommunizieren.</p>' +
      '<p>Trifft der Nutzer jedoch die Entscheidung Werbung zuzulassen, so kann er diese nicht nur individuell auf seine Bedürfnisse abstimmen, sondern geniert hierdurch Werbeeinnahmen für myUSN, die in passive Spenden umgewandelt werden. Die Gewinne, die hieraus entstehen, werden wiederum zu 100 Prozent in USN und in Folge dessen zu 100 Prozent in gemeinnützige Projekte investiert. Somit bietet myUSN seinen Nutzern die Möglichkeit, sich gegenseitig auszutauschen und gleichzeitig Gutes zu tun. Die Plattform richtet sich daher an Menschen, die bewusste Entscheidungen treffen bzw. umsichtiger mit sich und der Umwelt umgehen wollen.</p>',

      CONTACT_LEAD: 'Kontakt',
      CONTACT_LEAD_SECONDARY: 'weil Hilfe nicht warten kann.',
      CONTACT_CONTENT: '<p><b>Ultra Social Network </b><br>gemeinnützige GmbH i. Gr.<br>Im Rottfeld 5<br>41564 Kaarst<br></p>' +
      'Email: <a href="mailto:info@ultrasocialnetwork.com">info@ultrasocialnetwork.com</a>' +
      '<p>&nbsp;</p>' +
      '<p>Gründer/Geschäftsführer</p>' +
      '<p>Gerhard F. Schmitz</p>'+
      '<img src="/public/images/usn_kontakt_back.png" class="img-responsive contact-nest" alt="Contact Nests">',

      FOOTER_CONTACT_CONTENT: '<p><b>Ultra Social Network </b><br>gemeinnützige GmbH i. Gr.<br>Im Rottfeld 5 / 41564 Kaarst<br>' +
      'Email: <a href="mailto:info@ultrasocialnetwork.com">info@ultrasocialnetwork.com</a></p>',

      DONATE_LEAD: 'Jeder Cent zählt',
      DONATE_LEAD_SECONDARY: 'helfen Sie uns dabei, die Welt zu einem besseren Ort zu machen.',
      FOOTER_DONATE_ACCOUNT_INFO: '<p>Raiffeisenbank Kaarst eG<br>BIC: GENODED1KAA<br>IBAN: DE83 3706 9405 6016 3740 14<br>USt. Id-Nr.: DE120585377</p>',
      DONATE_CONTENT: '<p>Das USN Spendenkonto für Deutschland:</p><p><b>Ultra Social Network </b><br>gemeinnützige GmbH i. Gr.<br>Im Rottfeld 5<br>41564 Kaarst<br></p><p>Raiffeisenbank Kaarst eG<br>BIC:     GENODED1KAA<br>IBAN:    DE83 3706 9405 6016 3740 14<br>USt. Id-Nr.:   DE120585377</p>',

      INDEX_LEAD: 'Willkommen bei Ultra Social Network',
      INDEX_LEAD_SECONDARY: 'Wir sind ein globales Spendennetzwerk, welches auf einer einzigartigen 100% Spenden Politik agiert. Jeder <i>Cent</i> wird ausschließlich für wohltätige Zwecke verwendet.',
      INDEX_CONTENT: '<b><i>Ultra</i></b> bedeutet im höchsten Maße bzw. Extrem und genau das wollen wir zum Ausdruck bringen.' +
      '<p>Weil Hilfe nicht warten kann, ist es unser Bestreben, mit allen Projekten, die größte Leistung in der kürzesten Zeit zu voll richten. Um den Wettlauf gegen die Zeit jedoch gewinnen zu können sehen wir es als äußerst sinnvoll an, dazu auf alle Mittel zu zugreifen, welche und in der heutigen Zeit zur Verfügung stehen.</p>' +
      '<p>An dieser Stelle möchten wir uns bei Ihnen recht herzlich für Ihr Interesse bedanken. Viel Spaß beim umschauen der verschiedenen Projekte und wir hoffen, dass wir Sie schon bald als ein Ultra im sozialen Sinne begrüßen zu dürfen.</p>',
      INDEX_IMAGE_TOL: '<img src="/public/images/startseite_charity_tol_de.jpg" class="img-responsive" alt="Tree of Life">',
      INDEX_IMAGE_MYUSN: '<img src="/public/images/startseite_charity_myusn_de.jpg" class="img-responsive" alt="My Ultra Social Network">',

      INFO_LEAD: 'Das einzigartige Spendennetzwerk',
      INFO_LEAD_SECONDARY: 'informieren Sie sich über unsere zahlreichen ', // {NAV_PROJECTS} in template
      INFO_TOL_HEADER: 'Tree of Life',
      INFO_TOL_LEAD: 'Die Erde besteht zu einem Drittel aus Wüste, d.h. unser Planet besitzt ca. 50 Millionen Quadratkilometer Wüstenfläche, die zu großen Teilen nicht genutzt wird und stetig wächst. Dieses Potenzial möchten wir uns zu Nutze machen, um gegen den Klimawandel und seine Folgen anzukämpfen.' +
      '<p>Aufgrund dessen haben wir in Eigenregie ein System entwickelt, durch das sowohl Energie gewonnen als auch Salzwasser in trinkbares Süßwasser umgewandelt werden kann. Wir halten dieses Konzept für sehr vielversprechend und möchten Ihnen die Methode daher näher vorstellen.</p>',
      INFO_TOL_CHASER: '' +
      '<p>Ziel ist es, mit diesem System so viel Meerwasser in Süßwasser zu wandeln, dass große Flächen der Wüste wieder begrünt werden können. Sollte dies gelingen, würden hierdurch u.a. folgende Vorteile entstehen:</p>' +
      '<ul><li>Wandlung, Verbesserung des Welt Klimas</li><li>Neues Ackerland für Forst und Landwirtschaft</li><li>Neues Wohnland für Mensch und Tier</li></ul>' +
      '<h3>Wandlung, Verbesserung und Kontrolle des Klimas</h3>' +
      '<p>Durch das Zusammenspiel von Land und Wasser entsteht Leben. Da jedoch vielerorts Wasser fehlt, gibt es auf der Erde noch viele große Flächen, die kaum bis gar kein Leben aufweisen. Sollte es also gelingen, größere Mengen Süßwassers zu diesen Flächen zu leiten, würde hierdurch neues Leben entstehen d.h. es könnte eine ausgewählte Artenvielfalt an Pflanzen geschaffen und neue Wälder herangezogen werden. Sobald diese Waldflächen eine bestimmte Größe erreicht haben, würde das Klima beginnen sich wieder abzukühlen. Darüber hinaus würden die neuen Waldflächen als eine Art grüne Lungen dienen und somit weltweit für eine bessere Luft sorgen. Das Ziel ist es hierbei, genau das richtige Verhältnis zwischen Wald und Wüste zu finden. Dies bedeutet, dass das Klima sowohl durch zusätzliche Pflanzungen als auch durch die Abholzung von Bäumen zum Besseren gewandelt werden kann.</p>' +
      '<h3>Neues Ackerland für Forst und Landwirtschaft</h3>' +
      '<p>Mit den neu gewonnen Wasserreserven und dem fruchtbaren Boden lässt sich des Weiteren Ackerbau betreiben. So können auf den neu geschaffenen Anbauflächen im großen Stil Lebensmittel, wie Gemüse, Obst etc., angebaut werden.</p>' +
      '<h3>Neues Wohnland für Mensch und Tier</h3>' +
      '<p>Wüstenflächen sind heute kaum bis gar nicht besiedelt. Einhergehend mit neuen Bewässerungsmöglichkeiten würde sich die Lebensqualität in der Wüste jedoch drastisch erhöhen. Sollte eine Begrünung der Wüste gelingen, hätten Menschen und Tiere dort alles, was sie zum Leben benötigen. So könnten dort neue Dörfer angesiedelt werden und mit der Zeit ganze Städte entstehen.</p>' +
      '<p>Es muss auch bedacht werden, dass es nicht notwendig ist, die Vegetation permanent zu bewässern, da eine größere Grünfläche die Luft so stark abkühlt, dass es dort zu lokalen Regenfällen kommt. Aufgrund dessen ist es sinnvoll die Wüstenflächen Stück für Stück zu begrünen, so dass die Natur in der Lage ist sich nach und nach selber zu regeln. Dies bedeutet, dass hier, wie bei so viel anderem auch, nur ein Startimpuls gesetzt werden muss.</p>' +
      '<p>Denkt man noch ein Schritt weiter, so kommt man zu dem Ergebnis, dass allein mit dem Ertrag, der sich durch Pflanzen und Tiere erwirtschaften lässt, dieses„ Investment“ in kürzester Zeit wieder herausgeholt werden kann.</p>',
      INFO_TOL_BUTTON: 'Learn more',
      INFO_TOL_VIDEO: '<iframe class="yt-player" id="ytplayer" type="text/html" src="https://www.youtube.com/embed/eNtgaRRzcfQ" frameborder="0" />',

      INFO_MYUSN_HEADER: 'MyUSN <br/><h4 class="myusn-subtitle"> - the ultra social network</h4>',
      INFO_MYUSN_LEAD: '<p>MyUSN ist ein soziales Netzwerk, in dem jeder die Möglichkeit hat, sich global mit anderen Menschen zu verbinden und auszutauschen. Ähnlich wie bei bekannten sozialen Netzwerken kann man sich so, über Text, Bild oder Video austauschen.</p>' +
      '<img src="/public/images/myusn12.jpg" class="img-responsive" alt="MyUSN">' +
      '<p>Auf der Seite myusn.com wird es drei Werbefelder geben. Dabei ist es dem Nutzer freigestellt ob und wenn ja, welche Werbung gezeigt wird. Sollte der Nutzer Werbung zulassen, generiert USN eignes Kapital und genau dieses Geld nutzt USN zunächst um alle Unkosten, wie Gehälter, Serverkosten etc. zu decken. Dies bedeutet, gleich zweierlei. Zum einen kann so jeder Nutzer passiv Geld spenden, ohne eigenes Geld geben zu müssen und zum anderen können so alle aktiven Spenden zu 100% ohne Abzüge in die verschiedenen Hilfsprojekte offeriert werden.</p>',
      INFO_MYUSN_DONATE_IMAGE: '<img src="/public/images/spendenprinzip_de.jpg" class="img-responsive" alt="Spendenprinzip">',
      INFO_MYUSN_CHASER1: '<h3>Das "U" in USN</h3>' +
      '<p>Das Hauptaugenmerk der Seite liegt auf den Aspekt des U Bei MyUSN. Dieses steht für “Ultra” und das ist der entscheidende Punkt. Mit dem Ultra sozialen Netzwerk tritt eine seiteneigene Spendenorganisation in Kraft welche eigenständig die Spendenprojekte organisiert, leitet und ausführt. MyUSN gibt 100% der Einnahmen an die eigenen Spendenorganisation USN weiter.</p>',

      INFO_MYUSN_CHASER2: '<h3>Daten-Sicherheit</h3>' +
      '<p>myUSN soll vollkommenen Datenschutz gewähren und des weiteren über nur einen Account individuell bestimmbare Unterprofile anbieten, in denen sich der Nutzer in verschieden Kreisen unterschiedlich und getrennt voneinander präsentieren kann. Er bestimmt selbst, welche Personen welches Profil samt allen Inhalten sehen dürfen und kann so zum Beispiel eine berufliche von einer privaten Darstellung trennen.</p>' +
      '<h3>Vorteile von myUSN</h3>' +
      '<ul>' +
      '<li>myUSN verbindet und Informiert die Menschen durch Nutzer auf der ganzen Welt</li>' +
      '<li>100% der Gewinne werden unter transparenten und kontrollierten Bedingungen in eigene Projekte von USN gespendet</li>' +
      '<li>es werden keine Daten von Benutzern verkauft oder an dritte weitergegeben</li>' +
      '<li>die Seite ist für jede Person auf der Welt zugängig und dient dem globalem Fortschritt</li>' +
      '<li>die Finanzierung der Seite ergibt sich aus Werbung</li>' +
      '<li>dem Nutzer ist es freigestellt ob Werbung gezeigt wird und wenn ja welche</li>' +
      '<li>Über myUSN sollen zukünftig auch Privatleute ganz einfach die Möglichkeit haben, gemeinnützige Projekte in eigener Regie zu leiten</li>' +
      '</ul>' +
      '<p>Aktuell befindet sich das Soziale Netzwerk noch in der Entwicklung. Dennoch können wir Ihnen bereits jetzt schon die erste Version vorstellen. Des weiterem ist myUSN von seinen Funktionen und Features, recht weit am Anfang. Demzufolge dürfen sich die Nutzer im Laufe der nächsten Zeit noch auf jede Menge praktische Features auf der Seite freuen.</p>' +
      '<p>Wir hoffen Sie auf der Internetseite <a href="http://www.myusn.com">www.myusn.com</a> begrüßen zu dürfen und würden uns über Ihren Besuch und die Nutzung sehr freuen.</p>',

      INFO_MYUSN_BUTTON: 'Learn more',
      INFO_MYUSN_VIDEO: '<iframe class="yt-player" id="ytplayer" type="text/html" src="https://www.youtube.com/embed/L1km8I6A5o8" frameborder="0" allowfullscreen></iframe>',

      NEWSLETTER_LEAD: 'Immer auf dem neusten Stand',
      NEWSLETTER_LEAD_SECONDARY: 'abonnieren Sie unseren wöchentlichen Newsletter, um spannende humanitäre Projekte auf der ganzen Welt zu verfolgen.',
      NEWSLETTER_CONTENT: '',

      PARTNER_LEAD: 'Gemeinsam stark',
      PARTNER_LEAD_SECONDARY: 'die Welt verbessern wir in Zusammenarbeit mit anderen.',

      PRESS_LEAD: 'Vertrauen Sie nicht nur auf das, was wir ihnen sagen',
      PRESS_LEAD_SECONDARY: 'Lesen Sie, was andere über uns sagen.',
      PRESS_CONTENT: '',

      PRIVACY_LEAD: 'Ihre Daten gehören Ihnen',
      PRIVACY_LEAD_SECONDARY: 'Datenschutz ist unser höchstes Gebot und wir werden unter keinen Umständen persönliche Informationen weitergeben.',
      PRIVACY_CONTENT: '<ol>' +
      '<h5><li>Allgemeines</li></h5>' +
      '<p>Für die Ultra Social Network gemeinnützige GmbH, ist der Schutz Ihrer im Rahmen der Nutzung unserer Webseiten, bereitgestellten personenbezogenen Daten ein wichtiges Anliegen. Deshalb möchten wir Sie hier informieren, welche Daten wir gegebenenfalls sammeln und wie wir damit umgehen.</p>' +
      '<p>Rechtsgrundlage ist für uns das Datenschutzgesetz in Deutschland.</p>' +
      '<h5><li>Personenbezogene Daten</li></h5>' +
      '<p>Die von Ihnen zur Verfügung gestellten personenbezogenen Daten verwenden wir im Allgemeinen, um Ihre Anfragen zu beantworten, Ihre Aufträge zu bearbeiten oder Ihnen Zugang zu bestimmten Informationen oder Angeboten zu verschaffen. Darüber hinaus verwenden wir Ihre Daten nur, soweit Sie hierzu ausdrücklich eingewilligt haben.</p>' +
      '<p>Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten (zum Beispiel im Rahmen einer persönlichen Registrierung, Anforderung oder Mitteilung) besteht, so erfolgt die Angabe dieser Daten seitens des Besuchers auf ausdrücklich freiwilliger Basis.</p>' +
      '<h5><li>Erhebung, Verarbeitung und Nutzung der Daten</li></h5>' +
      '<p>Die uns online zur Verfügung gestellten personenbezogenen Daten werden nur für die im konkreten Fall mitgeteilten Zwecke erhoben, verarbeitet und genutzt. Eine darüber hinausgehende Erhebung, Verarbeitung oder Nutzung erfolgt nur dann, wenn dies</p>' +
      '  <ul>' +
      '  <li>für einen weiteren Zweck erfolgt, der in direktem Zusammenhang mit dem ursprünglichen Zweck steht, zu dem die personenbezogenen Daten erhoben wurden</li>' +
      '  <li>für die Vorbereitung, Verhandlung und Erfüllung eines Vertrages mit Ihnen erforderlich ist</li>' +
      '  <li>aufgrund rechtlicher Verpflichtung oder behördlicher oder gerichtlicher Anordnung erforderlich ist</li>' +
      '  <li>zur Begründung oder zum Schutz rechtlicher Ansprüche oder zur Abwehr von Klagen erforderlich ist</li>' +
      '  <li>der Verhinderung von Missbrauch oder sonstiger ungesetzlicher Aktivitäten dient, z. B. vorsätzlicher Angriffe auf unsere Systeme.</li>' +
      '  </ul>' +
      '<h5><li>Protokollierung</li></h5>' +
      '<p>Wenn Sie auf unsere Websites zugreifen, werden kommunikationsbezogene Angaben (z. B. Internet-Protokoll-Adresse) bzw. nutzungsbezogene Angaben (z.B. Angaben zu Nutzungsbeginn und -dauer sowie zu den von Ihnen genutzten Telekommunikationsdiensten) mit technischen Mitteln automatisch erzeugt. Diese können eventuell Rückschlüsse auf personenbezogene Daten zulassen.</p>' +
      '<p>Des Weiteren werden Informationen gesammelt, die nicht einer bestimmten Person zuzuordnen sind (z.B. verwendeter Internet-Browser; Betriebssystem; Domain-Name der Website, von der Sie kamen; Anzahl der Besuche; durchschnittliche Verweildauer; aufgerufene Seiten). Wir verwenden diese Informationen, um die Attraktivität unserer Websites zu ermitteln und deren Leistungsfähigkeit und Inhalte zu verbessern.</p>' +
      '<h5><li>Aktive Komponenten (z.B. Cookies, Javascript etc.)</li></h5>' +
      '<p>Wenn Sie eine unserer Websites besuchen, kann es sein, dass wir Informationen in Form eines "Cookie" auf Ihrem Computer ablegen. Cookies erlauben es uns beispielsweise, eine Website Ihren Interessen anzupassen. Da aus einem Cookie nicht ohne weiteres eine natürliche Person individualisiert werden kann, ist ihre Verwendung zulässig.</p>' +
      '<p>Wenn Sie nicht möchten, dass wir Ihren Computer wiedererkennen, stellen Sie Ihren Internet-Browser bitte so ein, dass er Cookies von Ihrem Computer löscht, alle Cookies blockiert oder Sie warnt, bevor ein Cookie gespeichert wird.</p>' +
      '<h5><li>Sicherheit</li></h5>' +
      '<p>Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre zur Verfügung gestellten Daten durch zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder vor dem Zugriff durch unberechtigte Personen zu schützen. Dabei setzen wir auf Standards und verbessern unsere Maßnahmen entsprechend dem technologischen Fortschritt.</p>' +
      '<p>Dennoch weisen wir daraufhin, dass Daten bei ihrer Übertragung im Internet nach dem derzeitigen Stand der Technik nicht umfassend geschützt werden können.</p>' +
      '<h5><li>E-Mail-Sicherheit</li></h5>' +
      '<p>Wenn Sie uns eine E-Mail senden, so wird Ihre E-Mail-Adresse nur für die Korrespondenz mit Ihnen verwendet. E-Mail-Adressen, die Sie uns im Rahmen einer Newsletter-Bestellung übermitteln, werden ausschließlich für diesen Zweck eingesetzt. Ein Verschlüsselungsverfahren wird nicht eingesetzt.</p>' +
      '<h5><li>Ansprechpartner</li></h5>' +
      '<p>Für Fragen zum Datenschutz wenden Sie sich bitte an den Betriebsbeauftragten für den Datenschutz, bei Ultra social Network gemeinnützige GmbH</p>' +
      '<p>Gerhard F. Schmitz<br>Im Rottfeld 5<br>41564 Kaarst</p>' +
      '<p>E-Mail: <a href="mailto:info@ultrasocialnetwork.com">info@ultrasocialnetwork.com</a></p>' +
      '</ol>',

      TERMS_LEAD: '',
      TERMS_LEAD_SECONDARY: '',
      TERMS_CONTENT: 'Ultra Social Network, gemeinnützige GmbH – ist eine Hilfsorganisation, welche sich global zum Wohle der Menschen, Tiere und Pflanzen einsetzt.' +
      '<p>Ultra Social Network gemeinnützige GmbH<br>Im Rottfeld 5<br>41564 Kaarst</p>' +
      '<h5>Vertreten durch</h5>' +
      '<p>Die gemeinnützige GmbH wird vertreten durch den Geschäftsführer:</p>' +
      '<p>Gerhard F. Schmitz</p>' +
      '<h5>Umsatzsteuer-ID</h5>' +
      '<p>USt-IdNr. : DE120585377</p>' +
      '<h5>Registereintrag</h5>' +
      '<p>Eintragung im Handelsregister<br>' +
      '   Registernummer: 18452<br>' +
      '   Registergericht: Neuss</p>' +
      '<h5>Kapital</h5>' +
      '<p>Stamm- oder Grundkapital: 25.000 €</p>' +
      '<p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz</p>' +
      '<p>DE120585377</p>' +
      '<p>Die Ultra Social Network gemeinnützige GmbH, verfolgt ausschließlich und unmittelbar gemeinnützige, mildtätige und kirchliche Zwecke im Sinne des Abschnitts "steuerbegünstigte Zwecke" der Abgabenordnung.</p>' +
      '<h5>Verantwortlich für den Inhalt</h5>' +
      '<p>Gerhard F. Schmitz</p>' +
      '<h5>Haftungsausschluss</h5>' +
      '<h4>Inhalt unseres Onlineangebotes</h4>' +
      '<p>Ultra Social Network gemeinnützige GmbH, ist ständig bemüht seine Website zu aktualisieren und seine zur Verfügung gestellten Informationen stets vollständig, inhaltlich richtig und aktuell zu halten. Dennoch können auch wir nicht vollständig ausschließen, dass uns dabei Fehler unterlaufen.</p>' +
      '<p>Für die Vollständigkeit, inhaltliche Richtigkeit und Aktualität unserer Informationen auf dieser Website übernehmen wir keine Haftung, es sei denn, die fehlerhaften Informationen wurden durch uns vorsätzlich oder grob fahrlässig eingestellt. Dies gilt auch für Schäden, die aus der Nutzung oder Nichtnutzung der Informationen auf unserer Website entstehen.</p>' +
      '<h4>Haftungsausschluss für Links und Verweise</h4>' +
      '<p>Hiermit erklären wir ausdrücklich, dass wir keinen Einfluss auf die Aktualisierung, die Gestaltung und die Inhalte der bei uns verlinkten Internetseiten haben und zum Zeitpunkt der Linksetzung keine Inhalte auf den verlinkten Seiten erkennbar waren, die gegen geltendes Recht verstoßen. Wir distanzieren uns daher ausdrücklich von sämtlichen Inhalten, die sich hinter den auf unserer Homepage angebrachten Links befinden. Dies gilt insbesondere für die Inhalte der verlinkten Internetseiten, dem sich dahinter befindenden Servern, den weiterführenden Links sowie sämtlichen weiteren fremden Inhalten. Diese Erklärung gilt für alle innerhalb unserer Website gesetzten Links und Verweise. Für rechtswidrige, fehlerhafte oder unvollständige Inhalte der von uns verlinkten Seiten haftet allein der Anbieter dieser Seite. Dies gilt insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung dieser Inhalte entstehen. Sollte eine der von uns verlinkten Seiten Inhalte aufweisen, die gegen geltendes Recht verstoßen, so werden wir den entsprechenden Link von unserer Homepage selbstverständlich entfernen, sobald wir hiervon Kenntnis erlangen.</p>' +
      '<h4>Nutzung von Google Analytics</h4>' +
      '<p>Unsere Homepage benutzt Google Analytics, einen Webanalysedienst von Google. Google Analytics verwendet so genannte Cookies (kleine Textdateien), die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch die Cookie erzeugten Informationen über Ihre Benutzung dieser Homepage werden an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Homepage-Betreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dieses gesetzlich vorgeschrieben ist oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten von Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung in Ihrer Browser-Software verhindern, wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website in vollem Umfang nutzen können. Durch die Nutzung unserer Homepage erklären Sie sich mit der Bearbeitung, der über Sie erhobenen Daten durch Google, in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.</p>' +
      '<p>Hier können Sie ein Browser-Add-on zur Deaktivierung von Google Analytics herunterladen: <a href="https://tools.google.com/dlpage/gaoptout?hl=de">https://tools.google.com/dlpage/gaoptout?hl=de</a></p>' +
      '<h4>Bildnachweise</h4>',

      TRANSPARENCY_LEAD: '100% Transparenz',
      TRANSPARENCY_LEAD_SECONDARY: 'Sie können jederzeit einsehen, wo unsere Resourcen genutzt werden. <br>Bis zum letzten Cent.',
      TRANSPARENCY_CONTENT: '' +
      '<p>Aufgrund der negativen Schlagzeilen und der Vielzahl an Spendenorganisationen ist Transparenz zu einem Qualitätskriterium für eine Organisation mit gemeinnützige Spenden geworden. Durch eine transparente Gestaltung hat jeder einzelne die Möglichkeit sich umfassend über eine Organisation, deren Ziele, Aktivitäten und Erfolge zu informieren und kann persönlich Entscheidung, wen er mit seinem Geld unterstützen möchte.</p>' +
      '<p>Da USN einen großen Wert auf kontrollierte Bedingungen und transparentes Handeln legt, werden auf unserer Homepage alle Hilfsprojekt detailliert und gut verständlich präsentiert, so dass genau hervorgeht, was das Ziel ist, welchen Lösungsweg gewählt wird und welche Erfolge in welchem Zeitraum geleistet werden sollen. Darüber hinaus werden alle Fortschritte in Tages- bzw. Wochenberichten zur Verfügung gestellt, so dass die Öffentlichkeit immer über den aktuellen Stand eines Projektes informiert ist.</p>',

      PROJECTS_WORLD_WIDE: 'Hilfe weltweit',
      PROJECTS_FLORA: 'Flora',
      PROJECTS_WATER: 'Wasser',
      PROJECTS_FAUNA: 'Fauna',
      PROJECTS_DISASTER_PREVENTION: 'Katastrophenschutz',
      PROJECTS_CLIMATE_CHANGE: 'Klimawandel',
      PROJECTS_NUTRITION: 'Ernährung',
      PROJECTS_COUNSELING: 'Seelsorge',
      PROJECTS_EDUCATION: 'Bildung',
      PROJECTS_RESEARCH: 'Forschung',
      PROJECTS_REFUGEE_AID: 'Flüchtlingshilfe',
      PROJECTS_HEALTH: 'Gesundheit',
      PROJECTS_AND_MORE: '... und viele mehr',

      PROJECT_SPECIES_PROTECTION_LEAD: 'Schutz der Flora & Fauna',
      PROJECT_SPECIES_PROTECTION_LEAD_SECONDARY: 'Die Artenvielfalt gilt als Voraussetzung für ein funktionierendes Ökosystem. Aufgrund dessen hat sich USN zum Ziel gesetzt, besonders gefährdete Arten zu schützen und deren Fortbestand zu sichern.',
      PROJECT_SPECIES_PROTECTION_CONTENT: '' +
      '<p>Als Grundlage hierfür sieht USN die Notwendigkeit, sowohl das Bewusstsein der Zivilgesellschaft als auch das der Privatwirtschaft und der Politik zu schärfen, so dass der zunehmend schwindende Lebensraum seltener Tier und Pflanzenarten nicht weiter durch menschliches Handeln zerstört wird.</p>' +
      '<p>In diesem Zusammenhang spielt die nachhaltige Landwirtschaft eine besonders große Rolle. Deren Methoden sollen mit Hilfe von Aufklärungsprojekten bekannt gemacht und durch eine fachlich kompetente und individuell abgestimmte Beratung gefördert werden.</p>' +
      '<p>Des Weiteren möchte USN zusätzlichen Lebensraum für seltene Tier und Pflanzenarten schaffen und bestehenden Lebensraum weiter ausbauen. Dies bedeutet, dass USN sich dafür einsetzt, dass strukturell unterschiedliche Flächen nutzfrei bleiben oder deren Bewirtschaftung eingestellt wird, so dass diese als Schutzgebiete dienen können.' +
      'Hierdurch lassen sich auch Rückzugsorte für die Arten schaffen, die im Zusammenhang mit ihrem Lebensraum besonders hohe Ansprüche stellen.</p>' +
      '<p>Darüber hinaus sollen Naturschutzkonzepte in Agrarlandschaften umgesetzt, aber auch Zoos und botanische Gärten gefördert werden.</p>',


      PROJECT_WATER_LEAD: 'Flüssiges Gold',
      PROJECT_WATER_LEAD_SECONDARY: 'Um die Versorgung mit sauberen Trinkwasser in ärmeren und klimatisch problematischen Regionen zu gewährleisten, gilt der Brunnenbau nach wie vor als bewährte Maßnahme.',
      PROJECT_WATER_CONTENT: '' +
      '<p>Aufgrund dessen möchte auch USN finanzielle Mittel nutzen, um solche Projekte weiterhin zu realisieren und die weltweite Infrastruktur zur Förderung von sauberen Wasser weiter voranzutreiben.</p>' +
      '<p>Da neben dem Trinkwasser noch viel größere Mengen an Süßwasser für die Nahrungsmittelproduktion und somit für die Bekämpfung von Hunger benötigt werden, setzt USN zusätzlich auf innovative Forschungs- und Entwicklungsprojekte. USN möchte in diesem Zusammenhang auf eine Methode zurückgreifen, durch die große Mengen an Meereswasser entsalzt und möglichst effizient in Süßwasser umgewandelt werden können. Das hieraus gewonnen Süßwasser kann wiederum genutzt werden, um Ackerflächen zu bewässern und Brunnen mit Trinkwasser zu versorgen.</p>',


      PROJECT_DISASTER_PREVENTION_LEAD: 'Katastrophen verhindern',
      PROJECT_DISASTER_PREVENTION_LEAD_SECONDARY: 'Im Falle einer Katastrophe entscheiden meist die ersten Stunden über Leben und Tod. Doch oft sind die lokalen Hilfskräfte überfordert und schaffen es daher nur selten Leben zu retten und die Not zu lindern.',
      PROJECT_DISASTER_PREVENTION_CONTENT: '' +
      '<p>Aufgrund dessen wird USN Notfallteams gründen, die von erfahrenen Spezialisten ausgebildete und auf spezielle Katastrophensituationen vorbereitet werden. Durch die Mobilität und die stetige Einsatzbereitschaft dieser Teams soll dafür gesorgt werden, dass im Katastrophenfall die Hilfsmaßnahmen möglichst zeitnah und besonders wirkungsvoll durchgeführt werden können.</p>' +
      '<p>Um dies zu gewährleisten und vorhandene Strukturen nutzen zu können, arbeitet USN eng mit Hilfskräften vor Ort zusammen. Diese können Auskunft über lokale Gegebenheiten geben und viele wichtige Informationen bereitstellen, die dann von den Teams ausgewertet und als Entscheidungsgrundlage für das weitere Vorgehen genutzt werden.</p>' +
      '<p>USN möchte jedoch nicht nur speziell ausgebildeten Teams einsetzen, sondern leistet auch Soforthilfe durch Geld-, Medikamenten- oder Sachspenden und kämpft somit an zwei Fronten. Darüber hinaus investiert USN in Forschung und Aufklärung, um neue Katastrophen zu verhindern oder die Schäden möglichst gering zu halten.</p>',

      PROJECT_CLIMATE_CHANGE_LEAD: 'Den Klimawandel stoppen',
      PROJECT_CLIMATE_CHANGE_LEAD_SECONDARY: 'Betrachtet man die aktuellen Entwicklungen, so steht fest, dass die Gefahr, die durch den Klimawandel droht, nur mit etwas Großem bekämpft werden kann.',
      PROJECT_CLIMATE_CHANGE_CONTENT: '' +
      '<p>Dies bedeutet, dass trotz des weltweit steigenden Energiebedarfs eine drastische Reduktion der Emission erfolgen muss. Neben den gängigen Maßnahmen, wie bspw. der Reduzierung der fossilen Brennstoffe oder der Steigerung der Energieeffizienz, möchte sich USN jedoch insbesondere auf innovative Lösungswege konzentrieren und diese weiter vorantreiben.</p>' +
      '<p>In diesem Zusammenhang hat USN eine Methode entwickelt, durch die große Mengen an Meereswasser entsalzt und zur Bewässerung von Wüstenflächen genutzt werden sollen. Ziel ist es, effizient und nachhaltig Süßwasser zu gewinnen, mit dem große Landstriche an vegetationslosen bzw. -armen Flächen bewässert und schlussendlich in fruchtbares Land gewandelt werden können.</p>' +
      '<p>Als Grundlage hierfür dient die Tatsache, dass die Sahara nicht immer sandig und unbewachsen, sondern über längere Zeiträume auch immer wieder begrünt und sogar bewaldet war. Dies hat zur Folge, dass der Wüstenboden immer noch über einen Lehm- und Nährstoffgehalt verfügt, der ausreicht, um die Flächen bei ausreichender Bewässerung zu begrünen. Durch eine erneute Bewässerung könnte daher ein attraktiver Lebensraum für Pflanzen und Tiere geschaffen werden.</p>' +
      '<p>Darüber hinaus würde solch eine menschlich herbeigeführte Bewaldung bewirken, dass der Atmosphäre eine große Menge an CO2 entzogen, in den Pflanzen gebunden und so der weltweite CO2-Ausstoß kompensiert werden kann. Die Rückkehr der Vegetation würde darüber hinaus bewirken, dass der Ausbreitung der Wüste entgegengewirkt und fruchtbares Ackerland geschaffen werden kann. Da die Bäume hier ganzjährig unter optimalen Bedingung wachsen können, wäre die Speicherung des Kohlenstoffs sogar um einiges höher als durch die Wälder in Mitteleuropa erfolgt.</p>',

      PROJECT_NUTRITION_LEAD: 'Eine Welt ohne Hunger',
      PROJECT_NUTRITION_LEAD_SECONDARY: 'Ziel von USN ist es Hunger zu bekämpfen und dafür zu sorgen, dass auch in Zukunft ausreichend Nahrungsmittel zur Verfügung stehen.',
      PROJECT_NUTRITION_CONTENT: '' +
      '<p>Dies ist jedoch nur möglich, wenn auch in den ländlichen Regionen nachhaltige Landwirtschaft betrieben wird und deren Erzeugnisse auch für die zugänglich sind, die über wenig finanzielle Mittel verfügen.</p>' +
      '<p>Um dieses Ziel zu erreichen, setzt sich USN dafür ein, dass jeder die Möglichkeit bekommt seine Nahrungsmittel selbst anzubauen. In diesem Zusammenhang möchte USN Kleinbauern dabei unterstützen Zugang zu fruchtbaren Land und Produktionsmitteln zu bekommen, um dort Nahrungsmittel zu produzieren. Darüber hinaus sollen die Bauern von fachkundigen Experten geschult werden, wie sie besonders produktiv und nachhaltig produzieren und sich den klimatischen Gegebenheiten anpassen können.</p>' +
      '<p>Neben Ackerflächen möchte USN aber auch Wohnland zur Verfügung stellen. Hierdurch sollen sich Kommunen bilden, die gemeinsame Produktionsmittel nutzen und die Ackerfläche in Zusammenarbeit bestellen Im besten Fall ist die gemeinschaftliche Bewirtschaftung so effizient, dass die Kommunen mehr erzeugen, als sie zu eigenen Grundversorgung benötigen. Durch den Verkauf der überschüssigen Nahrungsmittel können Gewinne erwirtschaftet und in neue Produktionsmittel investiert werden, so dass sich die Kommunen langfristig selbständig finanzieren und wachsen können.</p>',

      PROJECT_COUNSELING_LEAD: 'Psychische Probleme und Krankheiten erfordern schnelle Hilfe',
      PROJECT_COUNSELING_LEAD_SECONDARY: 'aber nur in den seltensten Fällen wird dies gewährleistet. Aus diesen Gründen möchte USN den Betroffenen erste therapeutische Maßnahmen sowohl telefonisch als auch online zur Verfügung stellen.',
      PROJECT_COUNSELING_CONTENT: '' +
      '<p>Mit der Beratung per Telefon, E-Mail oder Chat, die von approbierten Psychologen durchgeführt wird, soll sowohl den Erkrankten als auch deren Angehörigen zur Seite gestanden und sie bis zur ihrer Behandlung therapeutisch begleitet werden. In vielen Fällen führt das Angebot einer Telefonseelsorge oder einer therapeutischen Beratungsstelle im Netzt sogar erst dazu, dass Menschen bereit sind, sich Hilfe zu suchen. Hinzu kommt, dass manche Hilfsbedürftigen stark eingespannt sind oder ihr Wohnung nicht mehr verlassen können und aufgrund dessen auf solche ein Angebot angewiesen sind.</p>' +
      '<p>Im Rahmen von Selbsthilfegruppen und der Kommunikationsplattform myUSN möchte USN den Betroffenen und deren Angehörigen zudem die Möglichkeit bieten, sich Gegenseite auszutauschen und zu stützen.</p>',

      PROJECT_EDUCATION_LEAD: 'Bildung für alle',
      PROJECT_EDUCATION_LEAD_SECONDARY: 'Das Thema Bildung ist gerade deshalb so wichtig, weil sie eine wirksame Waffe gegen viele gesellschaftliche Probleme darstellt und daher das Potenzial besitzt, unsere Erde zu einem besseren Planeten zu machen.',
      PROJECT_EDUCATION_CONTENT: '' +
      '<p>Aufgrund dessen möchte USN den Zugang zu Bildung auch denen ermöglichen, die vom Bildungssystem ihres Landes aufgrund verschiedenster Ursachen ausgeschlossen werden und daher keine Schule besuchen können. USN möchte aber auch denen helfen, die bereits die Möglichkeit besitzen am Unterricht teilzunehmen. Denn in vielen Ländern lässt sowohl die Qualität des Unterrichts als auch die Infrastruktur des Bildungssystems zu wünschen übrig. Ziel ist es, für alle Menschen einen Zugang zu hochwertiger Bildung zu schaffen.</p>' +
      '<p>Um diesen Problemen entgegen zu treten, möchte USN in Zusammenarbeit mit nationalen und internationalen Experten eine Onlineschule entwickeln und für jeden kostfrei zugänglich machen.' +
      'Neben Unterrichtsmaterialien, Übungen und Tests soll die Onlineschule seinen Teilnehmern auch die Möglichkeit bieten mit ausgebildeten Fachkräften zu skypen oder sich mit den Lehrern bzw. den Mitschülern im Chat auszutauschen.' +
      'Um diesen Austausch zu unterstützen und die gegenseitige Vernetzung zu fördern, wird die Onlineschule eng mit myUSN zusammenarbeiten.</p>' +
      '<p>Damit auch Teilnehmer, die keine Möglichkeit haben auf das Internet zuzugreifen, die Onlineschule regelmäßig besuchen können, werden im Rahmen unserer Projekte spezielle Laptops zur Verfügung gestellt. Diese sollen sowohl mit einem Zugang zum Internet und einer gängigen Standardsoftware ausgestattet werden, aber auch robust sein und wenig Energie verbrauchen.' +
      'So lernen die Schüler nicht nur die Dinge, die auf dem Lehrplan stehen, sondern haben auch die Möglichkeit, sich mit der digitalen Welt auseinanderzusetzen und Berührungsängste mit dem Computer abzubauen.</p>' +
      '<p>Um die Qualität des bestehenden Bildungssystems zu verbessern, soll die Ausstattung der Bildungseinrichtungen aufgewertet und neue Schulen gebaut werden. Darüber hinaus ist es das Ziel von USN, dass im Rahmen von Kooperationen mehr gut ausgebildete Lehrkräfte eingestellt, unterstützt und kontinuierlich fortgebildet werden. In diesem Zusammenhang gilt es auch die bestehenden Lehrpläne gemeinsam zu prüfen, zu optimieren und regelmäßig zu evaluieren.</p>',

      PROJECT_RESEARCH_LEAD: 'Forschen für eine bessere Zukunft',
      PROJECT_RESEARCH_LEAD_SECONDARY: 'Viele der weltweiten Probleme und Krisen verlangen nach innovativen Lösungen, die nur mit zielgerichteten Forschungs- und Entwicklungsmaßnahmen einhergehen können.',
      PROJECT_RESEARCH_CONTENT: '' +
      '<p>Um dies zu gewährleisten und alle Projekte sowohl mit innovativen Lösungsansätzen als auch mit technisch-fortschrittliche Methoden voranzutreiben, betreibt USN eine eigenständige und lösungsorientierte Forschungs- und Entwicklungsabteilung. Hier werden jedoch nicht nur bestehende Projekte gefördert, sonder auch neue und vielversprechende Projekte ins Leben gerufen.</p>' +
      '<p>Derzeit liegt der Fokus der Forschungs- und Entwicklungsarbeit von USN ganz klar auf der Beseitigung des weltweiten Wassermangels. In diesem Zusammenhang wurde eine innovative Methode entwickelt, die aus Meerwasser besonders energiesparsam und nachhaltig Süßwasser herstellt und somit die weltweiten Wasservorräte um ein Vielfaches steigern kann. Dies hätte nicht nur zur Folge, dass sich die Versorgung mit sauberen Trinkwasser flächendeckend verbessert, sondern besäße schlussendlich das Potenzial, eine Vielzahl der weltweiten Probleme zu lösen.</p>',

      PROJECT_REFUGEE_AID_LEAD: 'Flüchtlingen helfen',
      PROJECT_REFUGEE_AID_LEAD_SECONDARY: 'Im Zusammenhang mit den aktuellen Flüchtlingsströmen steht unsere Gesellschaft vor vielen Herausforderungen, die es aktuell und in Zukunft zu bewältigen gilt. So ist es auch für USN eine Selbstverständlichkeit aktiv zu werden und das Leid der Menschen jetzt und in Zukunft zu mindern.',
      PROJECT_REFUGEE_AID_CONTENT: '' +
      '<p>Im ersten Schritt soll die Versorgung derjenigen gesichert werden, die sich aktuell auf der Flucht befinden. Dies gilt sowohl für die, die auf der Durchreise sind als auch für die, die einen Asylantrag stellen möchten oder gestellt haben. USN setzt sich einerseits dafür ein, dass bestehende Versorgungsstationen im In-und Ausland mit Arbeitskräften, Lebensmitteln, Sachspenden und Medikamenten unterstützt werden, und möchte andererseits durch eigene Projekte die Versorgung dort vorantreiben, wo noch keine oder nur unzureichend Hilfe geleistet wird. Darüber hinaus sollen die Flüchtlinge, die in Deutschland Hilfe suchen, bei Behördengängen unterstützt, in der deutschen Sprache unterrichtet und an Arbeitgeber vermittelt werden.</p>' +
      '<p>Im zweiten Schritt, d.h. wenn sich sich die Situation in den Krisenregionen wieder beruhigt und einigermaßen stabilisieren hat, möchte USN sich dafür einsetzen, dass für die Flüchtlinge bei der Rückkehr in ihr Heimatland schnellstmöglich menschenwürdige Bedingungen geschaffen werden. Dies bedeutet, dass USN die Menschen beim Wiederaufbau unterstützt und bei der Klärung von Landrechten, dem Bau von Unterkünften sowie bei der Wiederherstellung der Infrastruktur aktiv wird.</p>',

      PROJECT_HEALTH_LEAD: 'Gesundheit von Grund auf',
      PROJECT_HEALTH_LEAD_SECONDARY: 'Da die Gesundheit die Basis für sämtliche gesellschaftliche Entwicklungen darstellt, muss eine medizinische Grundversorgung flächendeckend gesichert und ein Zugang zu Medikamenten aller Art hergestellt werden.',
      PROJECT_HEALTH_CONTENT: '' +
      '<p>Meist sind jedoch sowohl hochwertige Medikament von namenhaften Produzenten als auch Generika sehr teuer, so dass die Bevölkerung in den Entwicklungsländern in vielen Fällen vor dem Problem steht, dass die dringend benötigten Arzneimittel nicht verfügbar oder nur teuer zu erwerben sind. Im Falle einer ernsthaften Erkrankung sind die Menschen daher oftmals gezwungen zu gefälschten Medikamenten zu greifen, die im Regelfall giftige Stoffe beinhalten und somit den gesundheitlichen Zustand noch weiter verschlechtern. Um diesen Teufelskreislaufs zu durchbrechen, möchte USN mit den Produzenten der Pharmaindustrie in direkten Kontakt treten, die Medikamente in größeren Mengen abnehmen und sie dadurch zu bessere Konditionen erhalten.</p>' +
      '<p>In vielen Entwicklungsländern mangelt es jedoch nicht nur an der Medikamentenversorgung, sondern auch am Zugang zu qualitativ hochwertigen Gesundheitsdienstleistungen. Aufgrund dessen möchte USN seine finanziellen Mittel nutzen, um Krankenhäuser zu bauen und bestehende Einrichtungen in Stand zu setzen. Zudem sollen Anreize geschaffen werde, die dem Mangel an fähigen Fachkräften entgegen wirken und somit die Qualität der Behandlungen nachhaltig verbessern.</p>',

      DONATE_DIRECT_HEAD: 'Direkt spenden',
      DONATE_DIRECT_DESC: 'wir sind für jeden Betrag dankbar.',
      DONATE_MANDATORY: 'diese Felder müssen ausgefüllt werden',
      DONATE_TITLE_STEP_1: 'Schritt 1 <span>|</span> Spenden',
      DONATE_TITLE_STEP_2: 'Schritt 2 <span>|</span> Spender',
      DONATE_TITLE_STEP_3: 'Schritt 3 <span>|</span> Abschließen',
      DONATE_STEP_1_BUTTON: 'Weiter zu Schritt 2',
      DONATE_STEP_2_BUTTON: 'Weiter zu Schritt 3',
      DONATE_STEP_3_BUTTON: 'Weiter zu Schritt 4',
      DONATE_AMOUNT: 'Ihr Spendenbetrag',
      DONATE_AMOUNT_AFTER: ',00 €',
      DONATE_PLEASE_SELECT: 'Bitte wählen',
      DONATE_PAYMENT_REASON: 'Ich spende für',
      DONATE_INTERVAL: 'Ich spende',
      DONATE_INTERVAL_ONCE: 'Einmalig',
      DONATE_INTERVAL_MONTHLY: 'Monatlich',
      DONATE_INTERVAL_QUARTERLY: 'Vierteljährlich',
      DONATE_INTERVAL_HALFYEAR: 'Halbjährlich',
      DONATE_INTERVAL_YEARLY: 'Jährlich',
      DONATE_PAYMENT_MODE: 'Zahlungsmethode',
      DONATE_PAYMENT_MODE_CREDITCARD_VISA: 'VISA',
      DONATE_PAYMENT_MODE_CREDITCARD_MASTERCARD: 'Mastercard',
      DONATE_PAYMENT_MODE_CREDITCARD_AMEX: 'American Express',
      DONATE_PAYMENT_MODE_BANKACCOUNT: 'Lastschrifteinzug',
      DONATE_PAYMENT_MODE_PAYPAL: 'Paypal',
      DONATE_CREDITCARD_OWNER: 'Karteninhaber',
      DONATE_CREDITCARD_NUMBER: 'Kartennummer',
      DONATE_CREDITCARD_CVV: 'Karten-Prüf-Nr',
      DONATE_CREDITCARD_CVV_HELP: 'Zur Verarbeitung von Zahlungen mit Kreditkarten benötigen wir die zusätzliche Angabe der Kartenprüfnummer.',
      DONATE_CREDITCARD_VALIDUNTIL: 'Gültig bis',
      DONATE_BANKACCOUNT_IBAN: 'IBAN',
      DONATE_BANKACCOUNT_BANK: 'Bank',
      DONATE_BANKACCOUNT_BANK_DESC: 'wird mittels der IBAN erkannt',
      DONATE_DONATE_AS: 'Spende als',
      DONATE_DONATE_AS_PRIVATE: 'Privateperson',
      DONATE_DONATE_AS_COMPANY: 'Unternehmen',
      DONATE_DONATE_AS_CONGREGATION: 'Kirchengemeinde',
      DONATE_DONATE_AS_SCHOOL: 'Schule / Kindergarte',
      DONATE_DONATOR_TITLE: 'Anrede',
      DONATE_DONATOR_TITLE_MR: 'Herr',
      DONATE_DONATOR_TITLE_MRS: 'Frau',
      DONATE_DONATOR_TITLE_MR_AND_MRS: 'Herr und Frau',
      DONATE_DONATOR_NAME: 'Vorname',
      DONATE_DONATOR_SURNAME: 'Name',
      DONATE_DONATOR_STREET: 'Strasse/Nr.',
      DONATE_DONATOR_ZIPCODE: 'PLZ',
      DONATE_DONATOR_CITY: 'Stadt',
      DONATE_DONATOR_COUNTRY: 'Land',
      DONATE_DONATOR_PHONE: 'Telefon',
      DONATE_DONATOR_MOBILE: 'Mobil-Nr.',
      DONATE_DONATOR_EMAIL: 'E-Mail',
      DONATE_REFERENCE_NO: 'Spender-Nr.',
      DONATE_REFERENCE_NO_WITH_DESC: 'Spender-Nummer<br>(falls zur Hand)',
      DONATE_NEWSLETTER_TITLE: 'Auf dem Laufenden bleiben:',
      DONATE_NEWSLETTER_DESC: 'Ich bestelle den E-Mail-Newsletter, um mich darüber zu informieren, was meine Spenden bewirken.',
      DONATE_SUMMARY_TITLE_1: 'Angaben zur Spende',
      DONATE_SUMMARY_TITLE_2: 'Kontoinhaber',
      DONATE_SEND: 'Spende absenden',

      DONATE_MESSAGE_WARNING: 'Achtung!',
      DONATE_MESSAGE_WARNING_TEXT: 'Ein Fehler ist aufgetreten, Bitte kontaktieren Sie den Support',
      DONATE_MESSAGE_MODAL_TITLE: 'Danksagung zu Ihrer Spende',
      DONATE_MESSAGE_MODAL_CONTENT: '<p>herzlichen Dank  für Ihre großzügige Spende, die Sie für die Aufgaben der Ultra Social Network gGmbH zur Verfügung gestellt haben.</p>' +
      '<p>Mit Ihrer Spende können wir dort helfen, wo Hilfe am dringendsten gebraucht wird.</p>' +
      '<p>Durch Ihre Unterstützung ist es uns möglich, auf die Probleme in der Welt hinzuweisen und diese tatkräftig zu lösen/beseitigen.</p>' +
      '<p>Eine Email zur Bestätigung wurde an sie verschickt</p>',
      DONATE_MESSAGE_MODAL_CLOSE: 'Schließen'
    })

      .translations('en', {
        // Navigation
        NAV_START: 'Start',
        NAV_TREE_OF_LIFE: 'Tree of Life',
        NAV_MYUSN: 'myUSN',
        NAV_PROJECTS: 'Projects',
        NAV_DONATE: 'Donate',
        NAV_INFO: 'Info',
        NAV_CONTACT: 'Contact',
        NAV_ABOUT: 'About us',
        NAV_TRANSPARENCY: 'Transparency',
        NAV_PRESS: 'Press',
        NAV_NEWSLETTER: 'Newsletter',
        NAV_TERMS: 'Terms',
        NAV_PRIVACY: 'Privacy',

        ABOUT_LEAD: 'About USN',
        ABOUT_LEAD_SECONDARY: 'our background',
        ABOUT_CONTENT: '' +
        '<p>USN, also known as „Ultra Social Network“, is a private and independent charity. The organization works worldwide to protect the interests of humans, animals and the environment. USN guarantees that 100% of the donations are spent for charitable projects and wants to ensure controlled conditions and maximum transparency.</p>' +
        '<p>Although USN is acting independently, our projects are also financed by a social network called „myUSN" (my Ultra Social Network). myUSN is a free, worldwide available communication platform which owns all features of a classical social network, but also further functions. Moreover, the network offers its users a high data protection and the possibility to communicate free of advertising.</p>' +
        '<p>In case the user wants to receive advertising, the advert is tailored to his needs. Afterwards, the income, which is generated in this connection, is transformed into a passive donation.</p>' +
        '<p>Subsequently, the profits are completely invest in USN and therefore completely in charitable projects. As a result, myUSN offers the opportunity to interact with other users as well as to support charitable projects. Therefore, the platform is aimed at those people who want to make conscious decisions or want to act more responsibly with the environment.</p>',

        CONTACT_LEAD: 'Contact',
        CONTACT_LEAD_SECONDARY: 'because help cannot wait',
        CONTACT_CONTENT: '<p><b>Ultra Social Network </b><br>Im Rottfeld 5<br>D-41564 Kaarst Germany<br></p>' +
        'Email: <a href="mailto:info@ultrasocialnetwork.com">info@ultrasocialnetwork.com</a>' +
        '<p>&nbsp;</p>' +
        '<p>Founder/CEO</p>' +
        '<p>Gerhard F. Schmitz</p>' +
        '<img src="/public/images/usn_kontakt_back.png" class="img-responsive contact-nest" alt="Contact Nests">',

        FOOTER_CONTACT_CONTENT: '<p><b>Ultra Social Network </b><br>Im Rottfeld 5 / D-41564 Kaarst / Germany<br>' +
        'Email: <a href="mailto:info@ultrasocialnetwork.com">info@ultrasocialnetwork.com</a></p>',

        DONATE_LEAD: 'Every penny counts',
        DONATE_LEAD_SECONDARY: 'help us make the world a better place',
        FOOTER_DONATE_ACCOUNT_INFO: '<p>Raiffeisenbank Kaarst eG<br>BIC: GENODED1KAA<br>IBAN: DE83 3706 9405 6016 3740 14<br>USt. Id-Nr.: DE120585377</p>',
        DONATE_CONTENT: '<p><b>Ultra Social Network </b><br><p>Raiffeisenbank Kaarst eG<br>BIC: GENODED1KAA<br>IBAN: DE83 3706 9405 6016 3740 14<br>USt. Id-Nr.: DE120585377</p>',

        INDEX_LEAD: 'Welcome to Ultra Social Network',
        INDEX_LEAD_SECONDARY: 'We are a global social network, which operates on an unique 100% donations policy. Every <i>penny</i> will strictly be used for charitable purposes.',
        INDEX_CONTENT: '<b><i>Ultra</i></b> means the highest or extreme and that is what we want to express.' +
        '<p>Because help can not wait, it is our aim with all projects, to fully align the greatest power in the shortest time. However in order to win the race against time, we believe it is extremely useful to to access all resources which are available this day and time.</p>' +
        '<p>At this point we would like to thank you for your interest very much. Take a look around our different projects and we hope that we can welcome you as a member in an ultra social meaning soon.</p>',
        INDEX_IMAGE_TOL: '<img src="/public/images/startseite_charity_tol_en.jpg" class="img-responsive" alt="Tree of Life">',
        INDEX_IMAGE_MYUSN: '<img src="/public/images/startseite_charity_myusn_en.jpg" class="img-responsive" alt="My Ultra Social Network">',

        INFO_LEAD: 'The unique social network',
        INFO_LEAD_SECONDARY: 'get an overview over our ', // {NAV_PROJECTS} in template
        INFO_TOL_HEADER: 'Tree of Life',
        INFO_TOL_LEAD: 'The earth consists to one-third of desert. This means, our planet owns approximately 50 million square kilometers desert areas, which are mainly unexploited and constantly growing. We would like to use this potential to fight against the climate change and its consequences.' +
        '<p>In this context, we have developed a system which is able to obtain energy and to convert sea water into fresh water. We are thinking this project is very promising and therefore, we would like to introduce the concept in more detail.</p>',
        INFO_TOL_CHASER: '' +
        '<p>The aim is to desalt lager amounts of sea water which can be used for watering and planting desert areas. If this is successful, the following advantages are offered:</p>' +
        '<ul><li>Change and improvement of the world’s climate</li>' +
        '<li>New land for forestry and farming</li>' +
        '<li>New habits for humans and animals</li></ul>' +
        '<h3>Change, improvement and control of the world’s climate</h3>' +
        '<p>The interaction of land and water creates life. As a consequence, at many places on earth life cannot exist, because there is no water. If its possible to guide large amounts of desalted water to these areas, this would arise new life. This means, a biodiversity of plants and new forests could be created. As soon as the forest areas have reached a certain size the climate would start to cool down again. Furthermore, these areas could serve a green lung and create a better air. The aim is to finde the right balance between forest and desert. This means, planting as well as deforestation could improve the climate.</p>' +
        '<h3>New land for forestry and farming</h3>' +
        '<p>With the new water reserves and the fertile ground agriculture could be practiced. As a consequence, a large amount of food, like vegetables, fruits etc., could be grown.</p>' +
        '<h3>New habits for humans and animals</h3>' +
        '<p>Today desert areas have only a small or a non-existing population. But the new watering possibilities would drastically increase the quality of life. If the greening of these areas is successful, humans and animals have everything they need to survive. As a consequence, settlements could be built and finally new towns could arise.</p>' +
        '<p>It must be considered, that it is not necessary to water the vegetation constantly. This based on the fact, that the large amount of green areas cool down the air to such an extent that local rainfalls occur. In this connection, it makes sense to plant the desert piece by piece and to enable the nature to regulate itself. In this case, like in many other cases, a start impulse is sufficient. Finally, it can be concluded that the income, wich is generated by plant and animals quickly redeem the investment.</p>',

        INFO_TOL_BUTTON: 'Learn more',
        INFO_TOL_VIDEO: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Vlx7ZWCR7h4" frameborder="0" allowfullscreen></iframe>',

        INFO_MYUSN_HEADER: 'MyUSN <br/><h4 class="myusn-subtitle"> - the ultra social network</h4>',
        INFO_MYUSN_LEAD: '<p>My USN is a social network, in which everbody has the opportunity, to connect and exchange globally with other people. Similar to common social networks it is possible to exchange via message, audio or video.</p>' +
        '<img src="/public/images/myusn12.jpg" class="img-responsive" alt="MyUSN">' +
        '<p>On the website myusn.com there will be three different spaces for ads.  In this regard it is up to the user if and in case he agrees which advertisement he wants to show.</p>' +
        '<p>In case the user agrees to receive ads, USN is able to generate own capital and uses this money first of all to cover all costs like salaries, server costs etc. This covers two aspects. On the one hand a user can passively donate money, without the duty to spend his own and on the other hand all active donations can be offered 100% into the several aid projects.</p>',
        INFO_MYUSN_DONATE_IMAGE: '<img src="/public/images/spendenprinzip_en.jpg" class="img-responsive" alt="Spendenprinzip">',
        INFO_MYUSN_CHASER1: '' +
        '<h3>The “U” in USN</h3>' +
        '<p>The main focus of the website lies on the U in myUSN. It stands for U and this is the crucial point. With the ultra social network a website-based charity comes into effect, which autonomically manages, leads and executes the several donation-projects. myUSN gives a 100% of the income to the own charity.</p>',
        INFO_MYUSN_CHASER2: '' +
        '<h3>Data-Security</h3>' +
        '<p>MyUSN shall provide complete privacy protection and further offer only via one account individually determinable subprofiles, in which the user can present himself in different surroundings which are separated from another. The user himself decides which people can see which profile including all the content and is by this for example able to separate a professional display from a private one.</p>' +
        '<h3>Advantages of myUSN</h3>' +
        '<ul>' +
        '<li>my USN connects and informs the people through users in the whole world</li>' +
        '<li>100% of the profits will be donated in USN projects under transparent and controlled conditions</li>' +
        '<li>no user-data will be sold or forwarded to third parties</li>' +
        '<li>the website is accessable to every person in the world and serves the global progress</li>' +
        '<li>the funding of the website results from advertising</li>' +
        '<li>it is the users choice whether ads are shown in the profile and if yes, which ones</li>' +
        '<li>In the future also private persons shall be given the opportunity to initiate and direct their own charitable projects</li>' +
        '</ul>' +
        '<p>The Social Network is currently still in development. Nevertheless we can already introduce you a first version. At the moment myUSN is concerning functions and features still at the beginning. According to that, the users can look forward a lot of practical features on the website in the near future.</p>' +
        '<p>We hope to see you soon on our website <a href="http://www.myusn.com">www.myusn.com</a></p>',

        INFO_MYUSN_BUTTON: 'Learn more',
        INFO_MYUSN_VIDEO: '<iframe class="yt-player" id="ytplayer" type="text/html" src="https://www.youtube.com/embed/L1km8I6A5o8" frameborder="0" allowfullscreen></iframe>',

        NEWSLETTER_LEAD: 'Immer auf dem neusten Stand',
        NEWSLETTER_LEAD_SECONDARY: 'abonnieren Sie unseren wöchentlichen Newsletter, um spannende humanitäre Projekte auf der ganzen Welt zu verfolgen.',
        NEWSLETTER_CONTENT: '',

        PARTNER_LEAD: 'Gemeinsam stark',
        PARTNER_LEAD_SECONDARY: 'die Welt verbessern wir in Zusammenarbeit mit anderen.',

        PRESS_LEAD: 'Vertrauen Sie nicht nur auf das, was wir ihnen sagen',
        PRESS_LEAD_SECONDARY: 'Lesen Sie, was andere über uns sagen.',
        PRESS_CONTENT: '',

        PRIVACY_LEAD: 'Ihre Daten gehören Ihnen',
        PRIVACY_LEAD_SECONDARY: 'Datenschutz ist unser höchstes Gebot und wir werden unter keinen Umständen persönliche Informationen weitergeben.',
        PRIVACY_CONTENT: '<ol>' +
        '<h5><li>Allgemeines</li></h5>' +
        '<p>Für die Ultra Social Network gemeinnützige GmbH, ist der Schutz Ihrer im Rahmen der Nutzung unserer Webseiten, bereitgestellten personenbezogenen Daten ein wichtiges Anliegen. Deshalb möchten wir Sie hier informieren, welche Daten wir gegebenenfalls sammeln und wie wir damit umgehen.</p>' +
        '<p>Rechtsgrundlage ist für uns das Datenschutzgesetz in Deutschland.</p>' +
        '<h5><li>Personenbezogene Daten</li></h5>' +
        '<p>Die von Ihnen zur Verfügung gestellten personenbezogenen Daten verwenden wir im Allgemeinen, um Ihre Anfragen zu beantworten, Ihre Aufträge zu bearbeiten oder Ihnen Zugang zu bestimmten Informationen oder Angeboten zu verschaffen. Darüber hinaus verwenden wir Ihre Daten nur, soweit Sie hierzu ausdrücklich eingewilligt haben.</p>' +
        '<p>Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten (zum Beispiel im Rahmen einer persönlichen Registrierung, Anforderung oder Mitteilung) besteht, so erfolgt die Angabe dieser Daten seitens des Besuchers auf ausdrücklich freiwilliger Basis.</p>' +
        '<h5><li>Erhebung, Verarbeitung und Nutzung der Daten</li></h5>' +
        '<p>Die uns online zur Verfügung gestellten personenbezogenen Daten werden nur für die im konkreten Fall mitgeteilten Zwecke erhoben, verarbeitet und genutzt. Eine darüber hinausgehende Erhebung, Verarbeitung oder Nutzung erfolgt nur dann, wenn dies</p>' +
        '  <ul>' +
        '  <li>für einen weiteren Zweck erfolgt, der in direktem Zusammenhang mit dem ursprünglichen Zweck steht, zu dem die personenbezogenen Daten erhoben wurden</li>' +
        '  <li>für die Vorbereitung, Verhandlung und Erfüllung eines Vertrages mit Ihnen erforderlich ist</li>' +
        '  <li>aufgrund rechtlicher Verpflichtung oder behördlicher oder gerichtlicher Anordnung erforderlich ist</li>' +
        '  <li>zur Begründung oder zum Schutz rechtlicher Ansprüche oder zur Abwehr von Klagen erforderlich ist</li>' +
        '  <li>der Verhinderung von Missbrauch oder sonstiger ungesetzlicher Aktivitäten dient, z. B. vorsätzlicher Angriffe auf unsere Systeme.</li>' +
        '  </ul>' +
        '<h5><li>Protokollierung</li></h5>' +
        '<p>Wenn Sie auf unsere Websites zugreifen, werden kommunikationsbezogene Angaben (z. B. Internet-Protokoll-Adresse) bzw. nutzungsbezogene Angaben (z.B. Angaben zu Nutzungsbeginn und -dauer sowie zu den von Ihnen genutzten Telekommunikationsdiensten) mit technischen Mitteln automatisch erzeugt. Diese können eventuell Rückschlüsse auf personenbezogene Daten zulassen.</p>' +
        '<p>Des Weiteren werden Informationen gesammelt, die nicht einer bestimmten Person zuzuordnen sind (z.B. verwendeter Internet-Browser; Betriebssystem; Domain-Name der Website, von der Sie kamen; Anzahl der Besuche; durchschnittliche Verweildauer; aufgerufene Seiten). Wir verwenden diese Informationen, um die Attraktivität unserer Websites zu ermitteln und deren Leistungsfähigkeit und Inhalte zu verbessern.</p>' +
        '<h5><li>Aktive Komponenten (z.B. Cookies, Javascript etc.)</li></h5>' +
        '<p>Wenn Sie eine unserer Websites besuchen, kann es sein, dass wir Informationen in Form eines "Cookie" auf Ihrem Computer ablegen. Cookies erlauben es uns beispielsweise, eine Website Ihren Interessen anzupassen. Da aus einem Cookie nicht ohne weiteres eine natürliche Person individualisiert werden kann, ist ihre Verwendung zulässig.</p>' +
        '<p>Wenn Sie nicht möchten, dass wir Ihren Computer wiedererkennen, stellen Sie Ihren Internet-Browser bitte so ein, dass er Cookies von Ihrem Computer löscht, alle Cookies blockiert oder Sie warnt, bevor ein Cookie gespeichert wird.</p>' +
        '<h5><li>Sicherheit</li></h5>' +
        '<p>Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre zur Verfügung gestellten Daten durch zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder vor dem Zugriff durch unberechtigte Personen zu schützen. Dabei setzen wir auf Standards und verbessern unsere Maßnahmen entsprechend dem technologischen Fortschritt.</p>' +
        '<p>Dennoch weisen wir daraufhin, dass Daten bei ihrer Übertragung im Internet nach dem derzeitigen Stand der Technik nicht umfassend geschützt werden können.</p>' +
        '<h5><li>E-Mail-Sicherheit</li></h5>' +
        '<p>Wenn Sie uns eine E-Mail senden, so wird Ihre E-Mail-Adresse nur für die Korrespondenz mit Ihnen verwendet. E-Mail-Adressen, die Sie uns im Rahmen einer Newsletter-Bestellung übermitteln, werden ausschließlich für diesen Zweck eingesetzt. Ein Verschlüsselungsverfahren wird nicht eingesetzt.</p>' +
        '<h5><li>Ansprechpartner</li></h5>' +
        '<p>Für Fragen zum Datenschutz wenden Sie sich bitte an den Betriebsbeauftragten für den Datenschutz, bei Ultra social Network gemeinnützige GmbH</p>' +
        '<p>Gerhard F. Schmitz<br>Im Rottfeld 5<br>41564 Kaarst</p>' +
        '<p>E-Mail: <a href="mailto:info@ultrasocialnetwork.com">info@ultrasocialnetwork.com</a></p>' +
        '</ol>',

        TERMS_LEAD: '',
        TERMS_LEAD_SECONDARY: '',
        TERMS_CONTENT: 'Ultra Social Network, gemeinnützige GmbH – ist eine Hilfsorganisation, welche sich global zum Wohle der Menschen, Tiere und Pflanzen einsetzt.' +
        '<p>Ultra Social Network gemeinnützige GmbH<br>Im Rottfeld 5<br>41564 Kaarst</p>' +
        '<h5>Vertreten durch</h5>' +
        '<p>Die gemeinnützige GmbH wird vertreten durch den Geschäftsführer:</p>' +
        '<p>Gerhard F. Schmitz</p>' +
        '<h5>Umsatzsteuer-ID</h5>' +
        '<p>USt-IdNr. : DE120585377</p>' +
        '<h5>Registereintrag</h5>' +
        '<p>Eintragung im Handelsregister<br>' +
        '   Registernummer: 18452<br>' +
        '   Registergericht: Neuss</p>' +
        '<h5>Kapital</h5>' +
        '<p>Stamm- oder Grundkapital: 25.000 €</p>' +
        '<p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz</p>' +
        '<p>DE120585377</p>' +
        '<p>Die Ultra Social Network gemeinnützige GmbH, verfolgt ausschließlich und unmittelbar gemeinnützige, mildtätige und kirchliche Zwecke im Sinne des Abschnitts "steuerbegünstigte Zwecke" der Abgabenordnung.</p>' +
        '<h5>Verantwortlich für den Inhalt</h5>' +
        '<p>Gerhard F. Schmitz</p>' +
        '<h5>Haftungsausschluss</h5>' +
        '<h4>Inhalt unseres Onlineangebotes</h4>' +
        '<p>Ultra Social Network gemeinnützige GmbH, ist ständig bemüht seine Website zu aktualisieren und seine zur Verfügung gestellten Informationen stets vollständig, inhaltlich richtig und aktuell zu halten. Dennoch können auch wir nicht vollständig ausschließen, dass uns dabei Fehler unterlaufen.</p>' +
        '<p>Für die Vollständigkeit, inhaltliche Richtigkeit und Aktualität unserer Informationen auf dieser Website übernehmen wir keine Haftung, es sei denn, die fehlerhaften Informationen wurden durch uns vorsätzlich oder grob fahrlässig eingestellt. Dies gilt auch für Schäden, die aus der Nutzung oder Nichtnutzung der Informationen auf unserer Website entstehen.</p>' +
        '<h4>Haftungsausschluss für Links und Verweise</h4>' +
        '<p>Hiermit erklären wir ausdrücklich, dass wir keinen Einfluss auf die Aktualisierung, die Gestaltung und die Inhalte der bei uns verlinkten Internetseiten haben und zum Zeitpunkt der Linksetzung keine Inhalte auf den verlinkten Seiten erkennbar waren, die gegen geltendes Recht verstoßen. Wir distanzieren uns daher ausdrücklich von sämtlichen Inhalten, die sich hinter den auf unserer Homepage angebrachten Links befinden. Dies gilt insbesondere für die Inhalte der verlinkten Internetseiten, dem sich dahinter befindenden Servern, den weiterführenden Links sowie sämtlichen weiteren fremden Inhalten. Diese Erklärung gilt für alle innerhalb unserer Website gesetzten Links und Verweise. Für rechtswidrige, fehlerhafte oder unvollständige Inhalte der von uns verlinkten Seiten haftet allein der Anbieter dieser Seite. Dies gilt insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung dieser Inhalte entstehen. Sollte eine der von uns verlinkten Seiten Inhalte aufweisen, die gegen geltendes Recht verstoßen, so werden wir den entsprechenden Link von unserer Homepage selbstverständlich entfernen, sobald wir hiervon Kenntnis erlangen.</p>' +
        '<h4>Nutzung von Google Analytics</h4>' +
        '<p>Unsere Homepage benutzt Google Analytics, einen Webanalysedienst von Google. Google Analytics verwendet so genannte Cookies (kleine Textdateien), die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch die Cookie erzeugten Informationen über Ihre Benutzung dieser Homepage werden an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Homepage-Betreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dieses gesetzlich vorgeschrieben ist oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten von Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung in Ihrer Browser-Software verhindern, wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website in vollem Umfang nutzen können. Durch die Nutzung unserer Homepage erklären Sie sich mit der Bearbeitung, der über Sie erhobenen Daten durch Google, in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.</p>' +
        '<p>Hier können Sie ein Browser-Add-on zur Deaktivierung von Google Analytics herunterladen: <a href="https://tools.google.com/dlpage/gaoptout?hl=de">https://tools.google.com/dlpage/gaoptout?hl=de</a></p>' +
        '<h4>Bildnachweise</h4>',

        TRANSPARENCY_LEAD: '100% Transparency',
        TRANSPARENCY_LEAD_SECONDARY: 'take a look over our shoulders',
        TRANSPARENCY_CONTENT: '' +
        '<p>Negative headlines and a large number of charity organizations have made transparency to a quality criterion for non-profit organizations. This means that everyone should be informed about the organization, objectives, activities and success. On this basis, everyone can decide for himself which organization he wants to support.</p>' +
        '<p>USN wants to ensure controlled conditions and maximum transparency. Therefore, we are going to present our projects in a detailed and understandable way. This means that the objectives, the approach and the success will be clearly defined and will be visible to everyone. In addition, all progress will be presented in a daily or monthly report, so that the public is informed about the current state.</p>',

        PROJECTS_WORLD_WIDE: 'Worldwide Help',
        PROJECTS_FLORA: 'Flora',
        PROJECTS_WATER: 'Water',
        PROJECTS_FAUNA: 'Fauna',
        PROJECTS_DISASTER_PREVENTION: 'Civil protection',
        PROJECTS_CLIMATE_CHANGE: 'Climate change',
        PROJECTS_NUTRITION: 'Nutrition',
        PROJECTS_COUNSELING: 'Counseling',
        PROJECTS_EDUCATION: 'Education',
        PROJECTS_RESEARCH: 'Research',
        PROJECTS_REFUGEE_AID: 'Refugee aid',
        PROJECTS_HEALTH: 'Health',
        PROJECTS_AND_MORE: '... and more',

        PROJECT_SPECIES_PROTECTION_LEAD: 'Biodiversity and animal welfare',
        PROJECT_SPECIES_PROTECTION_LEAD_SECONDARY: 'Biodiversity is essential for an intact ecosystem. Therefore, USN aims to protect more vulnerable species and to ensure their continued existence.',
        PROJECT_SPECIES_PROTECTION_CONTENT: '' +
        '<p>In this context, USN wants to strengthen the awareness of the private industry and the government. This is important to protect the habitats of sensitive and rare species. In this connection, a sustainable agriculture plays an important part. These methods should be taught by education campaigns and professional advice.</p>' +
        '<p>Furthermore, USN wants to create additional habitat for rare plant and animal species. The existing habitat should be extended. USN works to ensure that different structural areas remain or become uncultivated. Species with high demands on their habitat should be introduced in those protected areas. In addition, nature conservation concepts should be implemented in agricultural landscape as well as zoos or botanic gardens should be supported.</p>',

        PROJECT_WATER_LEAD: 'Liquid Gold',
        PROJECT_WATER_LEAD_SECONDARY: 'Well construction is still an approved method to ensure the supply of drinking water in poor or climatically unfavourable regions.',
        PROJECT_WATER_CONTENT: '' +
        '<p>Therefore, USN wants to invest financial resources to ensure the realization of those projects and support the pumping of clean water.</p>' +
        '<p>Beside drinkable water, additional water is needed to produce food and to fight against hunger. In this connection, USN is standing for innovative research and development projects. The focus is on a technique which is able to desalt lager amounts of sea water. The fresh water can be used for watering and to supply wells with drinking water.</p>',

        PROJECT_DISASTER_PREVENTION_LEAD: 'Prevent disasters',
        PROJECT_DISASTER_PREVENTION_LEAD_SECONDARY: 'In case of a major crisis, the importance is given to quick and straightforward aid. But usually the local emergency and assistance measures have rarely been successful.',
        PROJECT_DISASTER_PREVENTION_CONTENT: '' +
        '<p>Therefore, USN wants to set up a specially trained team which is prepared for emergency situations. Mobility and continuous availability should guarantee that the aid measures of the team are quick and effective.</p>' +
        '<p>To ensure a quick response and to be able to use existing structures, a close cooperation with the local population is needed. Their informations will be used to decide on further proceedings.</p>' +
        '<p>USN will also provide financial and medical donations as well as donation in kind. To counteract against new disasters, USN will also invest in research and education.</p>',

        PROJECT_CLIMATE_CHANGE_LEAD: 'Stop climate change',
        PROJECT_CLIMATE_CHANGE_LEAD_SECONDARY: 'To combat the climate change, we urgently need something big.',
        PROJECT_CLIMATE_CHANGE_CONTENT: '' +
        '<p>This means that in spite of the increasing need for energy the emissions must be reduced. Apart from proven solutions such as reduction of fossil fuels and increasing energy efficiency, USN especially support innovative solutions.</p>' +
        '<p>In this connection, USN has developed a technique which is able to desalt lager amounts of sea water which can be used for watering desert areas. The aim is to gain drinkable water in a sustainable and efficient way. Furthermore, arid zones should be transformed into fertile land.</p>' +
        '<p>This is based on the fact that the Sahara not always have been sandy and without vegetation, but planted and forested for a long period of time. As a consequence, the desert ground still has a clay and nutrient content which is sufficient for planting. This areas can used to create an attractive  habitat for plants and animals as well as to reduce CO2 emission. Furthermore, the return of the vegetation can counteract the spread of the desert and creates new arable land. In addition, the forest can store more carbon than forests in Central Europe, because in those climate zones the trees can grow all the year around.</p>',
        PROJECT_NUTRITION_LEAD: 'A world without hunger',
        PROJECT_NUTRITION_LEAD_SECONDARY: 'The goal of USN is to fight hunger and ensure that sufficient food is available.',
        PROJECT_NUTRITION_CONTENT: '' +
        '<p>But this is only possible, if sustainable agriculture is practiced in rural areas and the products are also available for poor people.</p>' +
        '<p>With that goal in mind, USN promotes that everyone becomes the possibility to grow his own crops. Therefore, USN wants to support the small farmers to get fertile land and means of production. Furthermore, farmers should be trained to grow food in an efficient and sustainable way as well as to adapt the climatic conditions.</p>' +
        '<p>Apart from arable land, USN wants to offer places to live. The intention is that communities arise and means of production as well as arable land will be shared. In the best-case scenario, the collaborative agriculture produces more than the community needs for self-supply. By the sale of those production surplus, the communities will grow and be self-sustaining in the long run.</p>',

        PROJECT_COUNSELING_LEAD: 'Psychological care',
        PROJECT_COUNSELING_LEAD_SECONDARY: 'In the least number of cases, it is possible to help people with psychological illnesses and mental problems immediately.',
        PROJECT_COUNSELING_CONTENT: '' +
        '<p>However, quick intervention is very important for the further course and a quick recovery. Therefore, USN would like to offer first therapeutic treatments by internet as well as by phone. This means that licensed psychological psychotherapists will provide first aid by phone, e-mail or chat. The aim is to care for the person concerned as well as family and friends. In many cases, the online offer effects that people are willing to get help. Furthermore, a lot of people are rely on such an offer.</p>' +
        '<p>Self-help groups and the communication platform myUSN will give the chance to exchange about their problems and to support each other.</p>',

        PROJECT_EDUCATION_LEAD: 'Education',
        PROJECT_EDUCATION_LEAD_SECONDARY: 'Education is an effective weapon against many social problems and has the potential to make the world a better place.',
        PROJECT_EDUCATION_CONTENT: '' +
        '<p>Therefore, USN aims to increase access to quality basic education for all children. Not least for all those who are excluded from the education system of their country. Furthermore, we also want to support students who have the opportunity to attend lessons, because in many cases education infrastructure and the quality of teaching are in a bad condition. The aim is to enable an access to quality education for each child.</p>' +
        '<p>To counteract this issue USN wants to develop a free accessible online school in collaboration with national an international experts.In addition to education materials, exercises and tests, the online school provides the opportunity to skype with teachers or to chat with classmates. To support this exchange, the school will closely cooperate with myUSN.</p>' +
        '<p>For those children who have any possibility to use the Internet we will provide special laptops. These are supposed to be equipped with an internet access and the latest standard software, but also be energy efficient and robust. In this way, children have the chance to deal with the digital world and to reduce fear of contact.</p>' +
        '<p>To improve the quality of the existing education system, USN wants to built new schools and to upgrade the old ones. Furthermore, USN is going to support the employment of well-trained teachers who will be continuously skilled. In addition, the existing curriculums will be considered, optimized and evaluated.</p>',

        PROJECT_RESEARCH_LEAD: 'Research a better tomorrow',
        PROJECT_RESEARCH_LEAD_SECONDARY: 'Many upcoming global issues require innovative solutions. In this connection, we need targeted research and development activities.',
        PROJECT_RESEARCH_CONTENT: '' +
        '<p>In order to ensure this and to support our projects with innovative solutions and technically advanced methods, USN operates an independent and solution oriented research and development department. The aim ist to promote existing projects and to start new and promising innovations.</p>' +
        '<p>At the moment, the focus is on the elimination of the worldwide lack of water. In this context, USN has developed a technique which is able to desalt lager amounts of sea water. Therefore, the global water stock can be increased and in the best case, a lot of global issues could be solved.</p>',

        PROJECT_REFUGEE_AID_LEAD: 'Refugee aid',
        PROJECT_REFUGEE_AID_LEAD_SECONDARY: 'In connection to the current stream of refugees, our society is facing a huge challenge which must be handled. Therefore, it goes without saying that USN become active and to minimize human suffering.',
        PROJECT_REFUGEE_AID_CONTENT: '' +
        '<p>The first step is to ensure supply of those people who are current on the run. This includes refugees who are in transit as well as people wishing to make an asylum claim. USN wants to support existing supply stations with volunteers, food, donations in kind and medicine. In addition, areas with non-existent or inadequate supply should be improve. Refugees who are searching for help in Germany, should be promoted with government affairs, German lessons and employment services.</p>' +
        '<p>In the second step, USN wants to create humane conditions in the home countries of the refugees. This will only be possible once the political situation in the crisis areas stabilizes. In this context, USN wants to support the returnees with reconstruction, clarification of legal issues, construction of shelters and building infrastructure.</p>',

        PROJECT_HEALTH_LEAD: 'Health for everyone',
        PROJECT_HEALTH_LEAD_SECONDARY: 'Health is the base for all social developments. Therefore, the primary health care and the access to medicines have to be ensure.',
        PROJECT_HEALTH_CONTENT: '' +
        '<p>In the developing countries high quality medicines from well known producers as well as generics are very expensive and rarely available. As a consequence, many people are forced to buy counterfeit pharmaceuticals which often contain toxic ingredients. In order to break the vicious circle and to ensure better prices, USN is going to contact the pharmaceutical industry and to buy large amounts of medicines.</p>' +
        '<p>Furthermore, many people in developing countries have no access to professional health care. Therefore, USN wants to invest its financial resources to build hospitals and to modernize existing ones. Furthermore, incentives should be created to counteract the lack of highly qualified employees and improve the quality of treatments.</p>',

        DONATE_DIRECT_HEAD: 'Donate directly',
        DONATE_DIRECT_DESC: 'we appreciate every cent',
        DONATE_MANDATORY: 'These fields are mandatory and must be filled out',
        DONATE_TITLE_STEP_1: 'Step 1 <span>|</span> Donate',
        DONATE_TITLE_STEP_2: 'Step 2 <span>|</span> Donator',
        DONATE_TITLE_STEP_3: 'Step 3 <span>|</span> Finish',
        DONATE_STEP_1_BUTTON: 'Continue to step 2',
        DONATE_STEP_2_BUTTON: 'Continue to step 3',
        DONATE_STEP_3_BUTTON: 'Continue to step 4',
        DONATE_AMOUNT: 'Donation amount',
        DONATE_AMOUNT_AFTER: '.00 €',
        DONATE_PLEASE_SELECT: 'Please select',
        DONATE_PAYMENT_REASON: 'I donate for',
        DONATE_INTERVAL: 'I donate',
        DONATE_INTERVAL_ONCE: 'Once',
        DONATE_INTERVAL_MONTHLY: 'Monthly',
        DONATE_INTERVAL_QUARTERLY: 'Quarterly',
        DONATE_INTERVAL_HALFYEAR: 'Half-yearly',
        DONATE_INTERVAL_YEARLY: 'Yearly',
        DONATE_PAYMENT_MODE: 'Payment mode',
        DONATE_PAYMENT_MODE_CREDITCARD_VISA: 'VISA',
        DONATE_PAYMENT_MODE_CREDITCARD_MASTERCARD: 'Mastercard',
        DONATE_PAYMENT_MODE_CREDITCARD_AMEX: 'American Express',
        DONATE_PAYMENT_MODE_BANKACCOUNT: 'direct debit',
        DONATE_PAYMENT_MODE_PAYPAL: 'Paypal',
        DONATE_CREDITCARD_OWNER: 'Card owner',
        DONATE_CREDITCARD_NUMBER: 'Card number',
        DONATE_CREDITCARD_CVV: 'CVV Code',
        DONATE_CREDITCARD_CVV_HELP: 'For processing payments by credit card , we need the additional indication of the Verification.',
        DONATE_CREDITCARD_VALIDUNTIL: 'Valid until',
        DONATE_BANKACCOUNT_IBAN: 'IBAN',
        DONATE_BANKACCOUNT_BANK: 'Bank',
        DONATE_BANKACCOUNT_BANK_DESC: 'will be detected from IBAN entry',
        DONATE_DONATE_AS: 'Donate as',
        DONATE_DONATE_AS_PRIVATE: 'Private person',
        DONATE_DONATE_AS_COMPANY: 'Company',
        DONATE_DONATE_AS_CONGREGATION: 'Congregation',
        DONATE_DONATE_AS_SCHOOL: 'School / Kindergarden',
        DONATE_DONATOR_TITLE: 'Title',
        DONATE_DONATOR_TITLE_MR: 'Mr.',
        DONATE_DONATOR_TITLE_MRS: 'Mrs.',
        DONATE_DONATOR_TITLE_MR_AND_MRS: 'Mr. and Mrs.',
        DONATE_DONATOR_NAME: 'Name',
        DONATE_DONATOR_SURNAME: 'Surname',
        DONATE_DONATOR_STREET: 'Street / No.',
        DONATE_DONATOR_ZIPCODE: 'Zipcode',
        DONATE_DONATOR_CITY: 'City',
        DONATE_DONATOR_COUNTRY: 'Country',
        DONATE_DONATOR_PHONE: 'Telephon',
        DONATE_DONATOR_MOBILE: 'Mobile',
        DONATE_DONATOR_EMAIL: 'E-Mail',
        DONATE_REFERENCE_NO: 'Donate ref.',
        DONATE_REFERENCE_NO_WITH_DESC: 'Donate reference<br>(if any)',
        DONATE_NEWSLETTER_TITLE: 'Stay updated',
        DONATE_NEWSLETTER_DESC: 'I order the e-mail newsletter to inform me about the effect of my donations',
        DONATE_SUMMARY_TITLE_1: 'Donator information',
        DONATE_SUMMARY_TITLE_2: 'Account owner',
        DONATE_SEND: 'Send donate',
        DONATE_MESSAGE_WARNING: 'Warning!',
        DONATE_MESSAGE_WARNING_TEXT: 'An Exception has occurred, Please contact Support',
        DONATE_MESSAGE_MODAL_TITLE: 'Thank you for your donation',
        DONATE_MESSAGE_MODAL_CONTENT: '<p>Thank you for your generous donation, which you have provided for Ultra Social Network gGmbH projects.</p>' +
        '<p>With your donation we can help where help is mostly needed.</p>' +
        '<p>Through your support, we are able to point out the problems in the world and solve or eliminate them actively.</p>' +
        '<p>A confirmation email was sent to you</p>',
        DONATE_MESSAGE_MODAL_CLOSE: 'Close'
      });
  }
})();
