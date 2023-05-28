import { Translation } from "@models/translation";

export default function de(): Translation {
	return {
		meta: {
			home: {
				title: "Startseite",
				description: "Ich biete verschiedene IT Dienstleistungen an, um neben meiner schulischen Lehre als Informatiker etwas Geld zu verdienen.",
			},
			about: {
				title: "Über uns",
				description: "Wir sind Chraebsli IT Services",
			},
			projects: {
				title: "Projekte",
				description: "Hier finden Sie eine Übersicht über meine Projekte.",
			},
			services: {
				title: "Dienstleistungen",
				description: "Hier finden Sie eine Übersicht über meine Dienstleistungen.",
			},
			contact: {
				title: "Kontakt",
				description: "Kontaktieren Sie mich, wenn Sie Fragen haben oder ein Projekt mit mir realisieren möchten.",
			},
			imprint: {
				title: "Impressum",
				description: "Hier finden Sie das Impressum dieser Website.",
			},
			error: {
				404: {
					title: "Seite nicht gefunden",
					description: "Die angeforderte Seite konnte nicht gefunden werden.",
				},
			},
		},
		common: {
			projects: {
				title: "Projekte",
				learnMore: "Mehr erfahren",
				imageAlt: "Bild Projekt",
				titles: {
					description: "Beschreibung",
					website: "Website",
					tools: "Tools",
				},
				fischlehrpfad: {
					title: "Fischlehrpfad Burgdorf",
					description: "Der Fischlehrpfad in Burgdorf war mein erstes Webprojekt, das ich im 2. Lehrjahr mit einem Kollegen erstellt habe. Es ist eine kleine Website für einen Fischereiverein.",
					card: {
						description: "Der Fischlehrpfad in Burgdorf war mein erstes Webprojekt, das ich im 2. Lehrjahr mit einem Kollegen erstellt habe. Es ist eine kleine Website für einen Fischereiverein.",
						tags: [ "web", "client", "deployed" ],
					},
					page: {
						description: [
							"Der Fischlehrpfad in Burgdorf war mein erstes grosses Webprojekt, das ich umsetzten durfte. Im 2. Lehrjahr habe ich mit einem Kollegen eine Website für einen Fischereiverein an der Emme in Burgdorf geplant und anschliessend entwickelt.",
							"Der Verein wollte einen Lernpfad über Fische und andere Tierarten in der Emme, bei dem Schulen und Familien etwas über die verschiedenen Tierarten lernen können. Besucher können QR Codes am Weg entlang mit dem Smartphone einscannen und pro Posten dann etwas Neues lernen.",
							"Auf den verschiedenen Seiten gibt es Bilder & Videos, Grafiken, Rätsel und andere dynamischen Elemente, die die Website einzigartig machen.",
							"Da die Website darauf ausgelegt ist, dass man sie nur über die QR Codes erreichen kann, gibt es nur die Startseite, die auch indexiert wird. Deshalb gibt es keine Navigation zu den Posten, sondern nur eine Liste an Links.",
						],
						website: [
							"Die Website wurde im Mai 2022 dem Fischereiverein übergeben und ist über folgenden Link auffindbar: XXXXXXXXXXXXXXXXXXXXX",
							"Eine Übersicht der Seiten findest du hier: YYYYYYYYYYYYYYYYYYYYY",
						],
					},
				},
				portfolio: {
					title: "Portfolio",
					description: "Diese Website ist mein persönliches Portfolio. Im Juni 2023 wurde diese von Grund auf überarbeitet. In einer etwas anderen Form gibt es sie aber schon 1 Jahr länger.",
					card: {
						description: "Diese Website ist mein persönliches Portfolio. Im Juni 2023 wurde diese von Grund auf überarbeitet. In einer etwas anderen Form gibt es sie aber schon 1 Jahr länger.",
						tags: [ "web", "personal", "deployed" ],
					},
					page: {
						description: [
							"Diese Website ist mein persönliches Portfolio. Im Juni 2023 wurde diese dann von Grund auf überarbeitet. Vorher war sie eine Kombination aus Portfolio und einer kommerziellen Website und wurde bereits 1 Jahr vorher veröffentlicht.",
							"Dieses Portfolio habe ich ohne CMS erstellt und wird ständig überarbeitet und es werden auch immer wieder neue Funktionen oder Seiten kommen. Dazu zählen als Beispiel die multilinguale Funktion oder den Darkmode. Beide wurden erst später implementiert.",
							"Mit diesem Portfolio möchte ich mein Können zeigen und auf mich aufmerksam machen.",
						],
						website: [
							"Mein Portfolio findest du unter folgendem Link: ZZZZZZZ",
						],
					},
				},
				"chraebsli-it-services": {
					title: "Chraebsli IT Services",
					description: "Diese Website ist die, die du gerade besuchst. Auf dieser biete ich verschiedene Dienstleistungen an. Sie wurde im Juni 2023 komplett überarbeitet, aber es gab sie schon 1 Jahr vorher.",
					card: {
						description: "Diese Website ist die, die du gerade besuchst. Auf dieser biete ich verschiedene Dienstleistungen an. Sie wurde im Juni 2023 komplett überarbeitet, aber es gab sie schon 1 Jahr vorher.",
						tags: [ "web", "personal", "deployed" ],
					},
					page: {
						description: [
							"Auf dieser Website biete ich verschiedene IT Dienstleistungen an, um neben meiner Lehre als Informatiker etwas Geld zu verdienen. Ich verdiene in meiner Ausbildung nicht, da dies ein spezieller Lehrgang ist, finanziert von Kanon Bern.",
							"Diese Website wurde bereits im Juni 2022 veröffentlicht, aber sie wurde 1 Jahr später, im Juni 2023, überarbeitet. Der Grund war, dass diese Website und mein Portfolio eine einzige Website war und ich das nicht mehr wollte.",
							"Ich überarbeite diese Website öfter und füge neue Funktionen hinzu oder verbessere bestehende. Da diese Seite nicht durch ein CMS verwaltet wird, besteht sie nur aus selbst geschriebenem Code.",
						],
						website: [
							"Da dies die Seite ist, auf der du gerade bist, wird sie nicht verlinkt.",
						],
					},
				},
				sgrumisberg: {
					title: "Schützengesellschaft Rumisberg",
					description: "Die Website für die Schützengesellschaft Rumisberg ist die Erste für einen privaten Kunden. Sie möchten mit einer Website wichtige Information teilen.",
					card: {
						description: "Die Website für die Schützengesellschaft Rumisberg ist die Erste für einen privaten Kunden. Sie möchten mit einer Website wichtige Information teilen.",
						tags: [ "web", "client", "deployed" ],
					},
					page: {
						description: [
							"Der Schützenverein aus meinem Dorf wollte eine Website, um wichtige Informationen mit anderen Mitgliedern zu teilen und für neue Mitglieder attraktiver und moderner wirken. Der Verein hatte jedoch nicht viel Geld, aber ich ging darauf ein, da ich mit diesem Projekt eine Möglichkeit sah, auf mich aufmerksam zu machen.",
							"Die Website habe ich mit dem Open Source CMS Grav erstellt, da ich dieses bereits ein wenig kannte durch das Projekt «Fischlehrpfad». Ich lernte viele neue Funktionen des CMS kennen und lernte viel, primär das selbstständig sein und durch eigene Hand ein Projekt zu erstellen.",
							"Ich musste zudem auch viel Verantwortung tragen und hatte viele Aufgaben. Dazu gehören Domain, DNS Management, Hosting und die Instandhaltung der Website.",
						],
						website: [
							"Die Website wurde Ende Juni freigeschaltet, aber ich bin immer noch teilweise für den Inhalt zuständig. Du kannst sie unter folgendem Link ansehen: AAAAAAAAAAAAAAAAA",
						],
					},
				},
				mgrumisberg: {
					title: "Musikgesellschaft Rumisberg",
					description: "Ein weiteres Webprojekt ist die Website der Musikgesellschaft Rumisberg, in der ich selbst Mitglied bin. Da wir ohnehin eine neue Website benötigten, übernahm ich diese Aufgabe.",
					card: {
						description: "Ein weiteres Webprojekt ist die Website der Musikgesellschaft Rumisberg, in der ich selbst Mitglied bin. Da wir ohnehin eine neue Website benötigten, übernahm ich diese Aufgabe.",
						tags: [ "web", "client", "development" ],
					},
					page: {
						description: [
							"Ein weiteres Webprojekt ist die Website der Musikgesellschaft Rumisberg, in der ich selbst Mitglied bin. Da wir ohnehin eine neue Website benötigten, übernahm ich diese Aufgabe.",
							"Ich arbeitete wieder mit dem CMS Grav, und konnte sogar vieles von der Website der SG Rumisberg übernehmen. Dies erleichterte mir die Arbeit um einiges.",
							"Auch hier lernte ich viel. Obwohl ich recht frei war, wie ich die Website gestalte, habe ich das alte Design komplett überarbeitet und moderner und minimalistischer dargestellt. Hier merkte ich, wie viel Aufwand es ist, eine Website zu designen und zu realisieren.",
						],
						website: [
							"Die Website wurde im September 2022 live geschaltet und wird auch durch mich verwaltet. Sie ist unter folgendem Link zu finden: VVVVVVVVVVVVVVVVVVVVVV",
						],
					},
				},
				homeDashboard: {
					title: "Home Dashboard",
					description: "Das Home Dashboard ist eine Webapplikation mit Next.js. Die Applikation ist eine Anlehnung an Magic Mirror und wurde auch für einen ähnlichen Zweck erstellt.",
					card: {
						description: "Das Home Dashboard ist eine Webapplikation mit Next.js. Die Applikation ist eine Anlehnung an Magic Mirror und wurde auch für einen ähnlichen Zweck erstellt.",
						tags: [ "web", "personal", "development" ],
					},
					page: {
						description: [
							"Das Home Dashboard ist eine Webapplikation mit Next.js. Die Applikation ist eine Anlehnung an Magic Mirror und wurde auch für einen ähnlichen Zweck erstellt und daher dem Design auch fast identisch. Da ich jedoch andere Ideen zum Erweitern hatte, die mit dem Magic Mirror nur sehr mühsam waren, erstellte ich selbst eine Applikation.",
							"Die Applikation zeigt bisher das Wetter zweier Orte an, Zeitangaben und Kalendereinträge an. Sie soll noch mit einer Smarthomesteuerung ergänzt werden und ich möchte ausserdem einen Nachrichtenfeed hinzufügen.",
							"Jedoch hatte ich nicht mehr wirklich Zeit, an der Applikation zu arbeiten und sie zu verbessern, aber es wird zu einem anderen Zeitpunkt wieder an ihr weitergearbeitet und verbessert.",
						],
						website: [
							"Das Repository zur Applikation ist auf GitHub unter folgendem Link: GGGGGGGGGGGGGGGGGGGGG",
						],
					},
				},
			},
			services: {
				title: "Dienstleistungen",
				learnMore: "Mehr erfahren",
				illustration: "Illustration",
				includedFeatures: "Folgende Features sind inbegriffen:",
				website: {
					title: "Website erstellen",
					description: "Ich erstelle für Sie eine Website nach Ihren Wünschen. Dazu kann ich zusätzlich eine Domain registrieren und einen geeigneten Hosting Anbieter finden.",
					features: [ "professionelle Website", "Konfiguration", "Domain & Hosting", "E-Mail Adressen" ],
					card: {
						teaser: "Brauchen Sie eine Website für Ihren Verein, Startup oder für einen persönlichen Zweck?",
						description: "Ich erstelle günstig für Sie die perfekte Website für Ihren Verein, Startup oder für einen persönlichen Zweck nach Ihren Wünschen.",
					},
					page: {
						teaser: "Brauchen Sie eine kleine und einfache Website für Ihren Verein, Startup oder für einen persönlichen Zweck?",
						description: "Dann sind Sie hier richtig. Ich erstelle günstig für Sie die perfekte Website für Ihren Verein, Startup oder für einen persönlichen Zweck nach Ihren Wünschen.\nDas handhaben der Website ist sehr einfach, auch für Sie. Mit dem CMS Grav können Sie ohne grosses technisches Verständnis Seiten oder Inhalte wie Text, Bilder, Videos, Tabellen, etc. erstellen, bearbeiten und löschen. Dazu gibt es eine Seitenstatistik wo Sie die Aufrufe sehen können.",
					},
				},
				webapp: {
					title: "Webapp erstellen",
					description: "Ich erstelle für Sie eine Webapplikation nach Ihren Wünschen. Sie können diese dann zum Beispiel in Ihrer Firma verwenden.",
					features: [ "moderne Webapplikation", "einfach zu bedienen", "einfach erweiterbar", "sichere Daten" ],
					card: {
						teaser: "Benötigen Sie eine Webapp für zum Beispiel bei ihrem Startup Arbeitszeiten zu erfassen?",
						description: "Ich entwickle für Sie die perfekte Webapplikation für Ihr Startup oder für einen persönlichen Zweck mit Login und anderen Funktionen.",
					},
					page: {
						teaser: "Benötigen Sie eine Webapplikation um zum Beispiel bei ihrem Startup Arbeitszeiten oder ähnliches zu erfassen?",
						description: "Ich entwickle für Sie die perfekte Webapplikation um bei Startup oder für einen persönlichen Zweck mit einem Login System und vielen weiteren Funktionen, die Sie möchten.\nDie Webapplikation ist sicher und schnell und hat ein modernes Design nach ihren Vorstellungen. Dazu wird sie auch mit einer mobile Version erreichbar sein für unterwegs. Wenn Sie später weitere Funktionen wünschen, können diese durch den cleveren Aufbau auch durch andere Entwickler erweitert werden.",
					},
				},
				database: {
					title: "Datenbank erstellen",
					description: "Ich erstelle für Sie eine beliebige Datenbank. Dabei kann es sich um eine SQL oder NoSQL Datenbank handeln.",
					features: [
						"vollständiges Datenbanksystem",
						"überlegte Struktur",
						"einfach zu verwalten",
						"schnelle Abfragen",
					],
					card: {
						teaser: "Möchten Sie eine Datenbank erstellen oder von einer anderen Datenbank die Daten übernehmen?",
						description: "Ich erstelle für Sie eine neue Datenbank oder übernehme Daten von einer anderen Datenbank in eine neue, egal ob SQL oder NoSQL.",
					},
					page: {
						teaser: "Möchten Sie eine Datenbank erstellen oder von einer anderen alle Daten in eine neue übernehmen?",
						description: "Ich erstelle für Sie eine neue Datenbank oder übernehme Daten von einer anderen Datenbank in eine neue, egal ob SQL oder NoSQL. Dabei können Sie selbst entscheiden, welche Datenbank Sie verwenden möchten. Es spielt keine Rolle, welche Art von Daten Sie speichern möchten, ob Dokumente oder zum Beispiel ein Login-System.",
					},
				},
				other: {
					title: "andere IT Dienstleistungen",
					description: "Ich biete auch andere IT Dienstleistungen an. Die Möglichkeiten sind nicht begrenzt. Kontaktieren Sie mich bitte.",
					features: [
						"Domain Management & Transfer",
						"Hosting & E-Mail",
						"Supporting",
						"IT Beratung & Schulung",
					],
					card: {
						teaser: "Brauchen Sie eine andere IT Dienstleistung?",
						description: "Ich biete auch andere IT Dienstleistungen an, wie zum Beispiel Domain Management & Transfer, Supporting, IT Beratung und IT Schulung.",
					},
					page: {
						teaser: "Brauchen Sie eine andere IT Dienstleistung?",
						description: "Ich biete auch andere IT Dienstleistungen an, wie zum Beispiel Domain Management & Transfer, Supporting, IT Beratung und IT Schulung. Wenn Sie eine andere IT Dienstleistung benötigen, können Sie mich gerne kontaktieren. Ich freue mich, Ihnen helfen zu können.",
					},
				},
			},
		},
		components: {
			header: {
				title: "chraebsli IT-Services",
				links: {
					about: "Über uns",
					services: "Services",
					projects: "Projekte",
					contact: "Kontakt",
				},
			},
			footer: {
				copyright: "chraebsli IT-Services",
				links: {
					imprint: "Impressum",
					contact: "Kontakt",
					privacy: "Datenschutz",
				},
			},
			cookieDisclaimer: {
				title: "Diese Website verwendet Cookies um die Benutzererfahrung zu verbessern.",
				learnMore: "Mehr erfahren",
				accept: "Akzeptieren",
			},
		},
		pages: {
			error: {
				404: {
					title: "Error 404 - Die Seite existiert nicht.",
					description: "Die angeforderte Seite konnte nicht gefunden werden.",
				},
			},
			home: {
				welcome: "Willkommen bei chraebsli IT-Services!",
				subWelcome: "- IT-Dienstleistungen jeglicher Art -",
				description: "Ich biete verschiedene IT Dienstleistungen an, um neben meiner schulischen Lehre als Informatiker etwas Geld zu verdienen.",
				sections: {
					servicesTitle: "Dienstleistungen",
					servicesDescription: "Ich biete folgende Dienstleistungen an:",
					projectsTitle: "Projekte",
					projectsDescription: "Hier sind einige meiner Projekte:",
					socialTitle: "Soziale Medien",
					socialDescription: "Folge mir auf meinen Social Media Kanälen:",
				},
			},
			about: {
				title: "Über uns",
				description: "Wir sind Chraebsli IT Services",
			},
			contact: {
				title: "Kontakt",
				contactMe: "Bei Fragen oder Anregungen können Sie gerne per Mail due unten stehende Adresse kontaktieren. Im Normalfall werde ich mich innerhalb von 2-4 Tagen bei ihnen melden. <br />	Gerne dürfen Sie mir auch eine Rückmeldung und Verbesserungsvorschläge für diese Website geben.",
				emailAddress: "E-Mail Adresse",
				or: "oder kontaktieren Sie mich mit diesem Formular:",
				form: {
					firstName: "Vorname",
					lastName: "Nachname",
					email: "E-Mail Adresse",
					service: "Dienstleistung",
					message: "Nachricht",
					required: "* Pflichtfeld",
					send: "Senden",
					success: "Danke für Ihre Nachricht. Ich werde mich in Kürze bei Ihnen melden.",
				},
			},
			imprint: {
				title: "Impressum",
				operator: "Betreiber",
				operatorText: "Diese Website wurde erstellt und wird betrieben von:",
				contactMe: "Bitte melden Sie sich bei Fragen oder Anmerkungen an die unten angegebene Email-Adresse.",
				resources: "Ressourcen",
				resourcesText: "Bilder, Grafiken, Videos, und andere Ressourcen wurden von folgenden Quellen verwendet:",
				links: {
					illustrations: "Illustrationen",
					icons: "Icons",
				},
			},
		},
	};
}