export default function de() {
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
					description: "Die Website des Fischlehrpfad Burgdorf wurde mit Grav erstellt. Es ist meine erste Website, die ich erstellt habe.",
					card: {
						description: "Der Fischlehrpfad war mein erstes Projekt. Ich habe es im 2. Lehrjahr mit einem Kollegen entwickelt. Das Projekt ist eine kleine Website für einen Fischereiverein. Sie wurde mit dem CMS Grav entwickelt.",
						tags: [ "web", "client", "deployed" ],
					},
					page: {
						description: "Der Fischlehrpfad war mein erstes grösseres Projekt, das ich entwickelt habe. Im 2. Lehrjahr meiner Ausbildung habe ich mit einem Kollegen das Projekt für den Fischereiverein an der Emme in Burgdorf geplant und anschliessend entwickelt. Der Verein wollte einen Lernpfad über Fische und andere Tierarten in der Emme erstellen, bei dem Schulen und Familien etwas über die verschiedenen Tierarten lernen können.",
						website: "Der Besucher kann einen QR-Code an einem Posten einscannen und wird auf die jeweilige Seite weitergeleitet. Auf dieser Seite befinden sich Inhalte wie Text, Bilder, Videos, Audios bei denen man etwas lernt. Es hat aber auch interaktive Elemente, wie zB ein Slider, ein Quiz und andere, bei dem man dann das gelernte überprüfen kann.",
					},
				},
				personal: {
					title: "eigene Website",
					description: "Diese Website, die Sie gerade besuchen, wurde mit React und TypeScript erstellt.",
					card: {
						description: "Dieses Projekt ist die Website auf der sie sich befinden. Ich habe diese Website selber designed und anschliessen programmiert. Dazu habe ich TypeScript mit React verwendet, die ich währenddessen erlernt habe.",
						tags: [ "web", "personal", "development" ],
					},
					page: {
						description: "Ich wollte schon längere Zeit eine eigene Website haben, die ich ohne CMS entwickelt habe. So kann ich zusätzlich lernen, was mich interessiert und bin frei, wie ich es umsetzten möchte. Ich habe mehrmals angefangen aber immer wieder aufgehört, weil ich keine Zeit mehr hatte. Schlussendlich konnte ich mich überreden und war motiviert, mit der JavaScript Bibliothek React die Website zu erstellen.",
						website: "Auf meiner Website biete ich Dienstleistungen an, um in meiner Freizeit zu arbeiten und mich weiterzubilden. Zusätzlich möchte ich Geld verdienen, da ich in meiner Ausbildung kein Lohn erhalte. Ich möchte auch meine vergangenen Projekte zeigen, die ich erstellt habe und so meine Erfahrung zeigen.",
					},
				},
				sgrumisberg: {
					title: "Schützengesellschaft Rumisberg",
					description: "Die Website der Schützengesellschaft Rumisberg wurde mit Grav erstellt. Die Website war für meinen ersten Kunden",
					card: {
						description: "Die erste Website für einen privaten Kunden. Sie ist für ein Verein aus meinem Dorf, der eine Website für ihren Schützenverein eröffnen wollte. Ich habe die Website mit dem CMS Grav entwickelt und konnte viele Erfahrungen sammeln.",
						tags: [ "web", "client", "deployed" ],
					},
					page: {
						description: "Diese Website ist die erste Website, die ich für einen privaten Kunden entwickelt habe. Der Kunde ist ein Verein aus meinem Dorf, der eine neue Website möchte. Sie wollen ihren Verein vorstellen und Bilder von Events teilen.",
						website: "Die Website simpel gestaltet, da auch ältere Mitglieder auf der Seite zurecht kommen und die Inhalte einfach finden können. Die verschiedenen Seiten enthalten Inhalte von Events, Bilder, Ranglisten, etc. Auf ein paar Seiten gibt es auch Inhalte über den Verein und wie man ein Mitglied werden kann.",
					},
				},
				mgrumisberg: {
					title: "Musikgesellschaft Rumisberg",
					description: "Die Website der Musikgesellschaft Rumisberg wurde mit Grav erstellt. Die Website war für einen Verein, dem ich angehöre.",
					card: {
						description: "Das ist eine Website für die Musikgesellschaft Rumisberg, in der ich aktiv als Musikant bin. Unsere alte Website war mühsam zu verwalten und deshalb sollte ich eine neue erstellen. Ich habe mich wieder für das CMS Grav entschieden.",
						tags: [ "web", "client", "development" ],
					},
					page: {
						description: "Diese Website ist für die Musikgesellschaft Rumisberg, in der ich seit mehreren Jahren Mitglied bin. Unsere alte Website war schwierig zu verwalten und ändern. Aus diesem Grund sollte ich eine neue Website erstellen, die einfach zu verwalten ist.\n Dieses Projekt ist in Entwicklung.",
						website: "Auf der Website sollen Daten für unsere Auftritte gelistet und wir möchten unseren Verein vorstellen. Es soll aber auch eine Art blogging Beiträge geben, bei denen wir Aktuelles aus dem Verein öffentlich teilen wollen. Dazu gehört zB das Teilen von Erfolgen und Veränderungen.",
					},
				},
				homeDashboard: {
					title: "Home Dashboard",
					description: "Home Dashboard ist die erste Webapp, die ich erstellt habe. Darauf wird das aktuelle Wetter angezeigt, sowie aktuelle Termine.",
					card: {
						description: "Dieses Projekt ist ein Dashboard für mein Smart Home. Die Daten werden mit einer API von Next.js verarbeitet und anschliessend mit TypeScript React bereitgestellt. Es gibt Elemente für Zeit, Wetter und Kalender. Weitere kommen.",
						tags: [ "web", "personal", "development" ],
					},
					page: {
						description: "Vor etwas längerer Zeit hatte ich im Internet das Projekt Magic Mirror gesehen. Meine Mutter hat dann etwas Geld ausgegeben für einen TouchScreen und einen Raspberry Pi, auf dem die Software laufen soll. Den Bildschirm haben wir beim Eingang der Wohnung aufgehängt. Da aber viele Features nicht existieren die wir wollten, habe ich angefangen, selber so ein Dashboard zu erstellen.",
						website: "Es soll ein Dashboard sein, welches die wichtigsten Informationen anzeigt. Dazu gehören Zeit & Datum, Wetter und die wichtigsten Termine. Außerdem soll die digitale Einkaufsliste angezeigt werden. Auch die Lampen wollen wir über dieses Dashboard steuern können, die bereits über die Google Home App verbunden sind. Weitere Features sind in Planung.",
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