import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  component: Datenschutz,
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – Abdelhady Grünpflege" },
      {
        name: "description",
        content:
          "Datenschutzerklärung von Abdelhady Grünpflege gemäß DSGVO – Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function Datenschutz() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <Link to="/" className="text-sm text-primary hover:underline">
          ← Zurück zur Startseite
        </Link>
        <h1 className="mt-6 text-3xl md:text-4xl font-bold">Datenschutzerklärung</h1>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">1. Verantwortlicher</h2>
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO)
            und anderer nationaler Datenschutzgesetze sowie sonstiger
            datenschutzrechtlicher Bestimmungen ist:
          </p>
          <p>
            Abdelhady Grünpflege<br />
            Inhaber: Nour Aldeen Abdelhady<br />
            Am Willenbach 3/1<br />
            74229 Oedheim<br />
            Deutschland
          </p>
          <p>
            Telefon:{" "}
            <a href="tel:+4915155510325" className="text-primary hover:underline">
              0151 55510325
            </a>
            <br />
            E-Mail:{" "}
            <a
              href="mailto:n@abdelhady-gruenpflege.de"
              className="text-primary hover:underline"
            >
              n@abdelhady-gruenpflege.de
            </a>
            <br />
            Wirtschafts-IdNr: DE420812382
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">2. Allgemeine Hinweise zur Datenverarbeitung</h2>
          <p>
            Wir verarbeiten personenbezogene Daten unserer Nutzer
            grundsätzlich nur, soweit dies zur Bereitstellung einer
            funktionsfähigen Website sowie unserer Inhalte und Leistungen
            erforderlich ist. Die Verarbeitung erfolgt regelmäßig nur nach
            Einwilligung der Nutzer oder in den Fällen, in denen eine
            vorherige Einholung einer Einwilligung aus tatsächlichen Gründen
            nicht möglich ist und die Verarbeitung der Daten durch
            gesetzliche Vorschriften gestattet ist.
          </p>
          <p>
            Diese Website verwendet aus Sicherheitsgründen eine
            SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
            Sie an der Adresszeile des Browsers (https://) sowie am
            Schloss-Symbol.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">3. Hosting</h2>
          <p>
            Diese Website wird bei einem externen Dienstleister gehostet
            (Hoster). Die personenbezogenen Daten, die auf dieser Website
            erfasst werden, werden auf den Servern des Hosters gespeichert.
            Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen,
            Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
            Namen, Websitezugriffe und sonstige Daten, die über eine Website
            generiert werden, handeln.
          </p>
          <p>
            Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
            gegenüber unseren potenziellen und bestehenden Kunden (Art. 6
            Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
            und effizienten Bereitstellung unseres Online-Angebots durch
            einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
          <p>
            Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies
            zur Erfüllung seiner Leistungspflichten erforderlich ist und
            unsere Weisungen in Bezug auf diese Daten befolgen. Mit dem
            Hoster wurde ein Vertrag über die Auftragsverarbeitung gemäß
            Art. 28 DSGVO geschlossen.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">4. Server-Log-Dateien</h2>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch
            Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
            automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
            nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf
            Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber
            hat ein berechtigtes Interesse an der technisch fehlerfreien
            Darstellung und der Optimierung seiner Website – hierzu müssen
            die Server-Log-Dateien erfasst werden.
          </p>
          <p>
            Die Server-Log-Dateien werden in der Regel nach 7 bis 14 Tagen
            gelöscht, sofern keine sicherheitsrelevanten Vorfälle eine
            längere Speicherung erfordern.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">5. Kontaktaufnahme</h2>
          <p>
            Wenn Sie uns per Kontaktformular, E-Mail, Telefon oder WhatsApp
            Anfragen zukommen lassen, werden Ihre Angaben inklusive der von
            Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
            Anfrage und für den Fall von Anschlussfragen bei uns
            gespeichert.
          </p>
          <p>
            <strong>Kontaktformular:</strong> Über das Kontaktformular
            werden folgende Daten erhoben: Name, E-Mail-Adresse,
            Telefonnummer und Ihre Nachricht. Diese Daten werden
            ausschließlich zur Bearbeitung Ihrer Anfrage und zur
            Angebotserstellung verwendet.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
            Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
            Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
            Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
            Verarbeitung auf unserem berechtigten Interesse an der
            effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6
            Abs. 1 lit. f DSGVO) bzw. auf Ihrer Einwilligung (Art. 6 Abs. 1
            lit. a DSGVO).
          </p>
          <p>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
            bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung
            zur Speicherung widerrufen oder der Zweck für die
            Datenspeicherung entfällt (z. B. nach abgeschlossener
            Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
            insbesondere Aufbewahrungsfristen – bleiben unberührt.
          </p>
          <p>
            <strong>Hinweis zu WhatsApp:</strong> Wenn Sie uns über
            WhatsApp kontaktieren, werden Ihre Daten zudem durch den
            Anbieter WhatsApp Ireland Limited verarbeitet. Bitte beachten
            Sie hierzu die Datenschutzerklärung von WhatsApp.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">6. Cookies</h2>
          <p>
            Diese Website verwendet ausschließlich technisch notwendige
            Cookies, die für den Betrieb der Website erforderlich sind. Es
            findet kein Tracking statt, und es werden keine Analyse- oder
            Marketing-Cookies eingesetzt. Eine Einwilligung zur Verwendung
            dieser technisch notwendigen Cookies ist nach § 25 Abs. 2 Nr. 2
            TDDDG (Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz)
            nicht erforderlich.
          </p>
          <p>
            Die Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit.
            f DSGVO. Unser berechtigtes Interesse liegt in der technisch
            fehlerfreien und optimierten Bereitstellung unserer Dienste.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">7. Ihre Rechte als betroffene Person</h2>
          <p>
            Sie haben uns gegenüber folgende Rechte hinsichtlich der Sie
            betreffenden personenbezogenen Daten:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            <li>
              Recht auf Widerruf einer erteilten Einwilligung mit Wirkung
              für die Zukunft (Art. 7 Abs. 3 DSGVO)
            </li>
          </ul>
          <p>
            Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die
            oben unter Ziffer 1 genannten Kontaktdaten.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">8. Beschwerderecht bei der Aufsichtsbehörde</h2>
          <p>
            Sie haben gemäß Art. 77 DSGVO das Recht, sich bei einer
            Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
            personenbezogenen Daten durch uns zu beschweren. Zuständige
            Aufsichtsbehörde für uns ist:
          </p>
          <p>
            Der Landesbeauftragte für den Datenschutz und die
            Informationsfreiheit Baden-Württemberg<br />
            Lautenschlagerstraße 20<br />
            70173 Stuttgart<br />
            Telefon: 0711/615541-0<br />
            E-Mail: poststelle@lfdi.bwl.de
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">9. Datensicherheit</h2>
          <p>
            Wir treffen nach Maßgabe des Art. 32 DSGVO unter
            Berücksichtigung des Stands der Technik, der
            Implementierungskosten und der Art, des Umfangs, der Umstände
            und der Zwecke der Verarbeitung sowie der unterschiedlichen
            Eintrittswahrscheinlichkeit und Schwere des Risikos für die
            Rechte und Freiheiten natürlicher Personen geeignete technische
            und organisatorische Maßnahmen, um ein dem Risiko angemessenes
            Schutzniveau zu gewährleisten.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">10. Speicherdauer</h2>
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellen
            Speicherfristen angegeben sind, verbleiben Ihre
            personenbezogenen Daten bei uns, bis der Zweck für die
            Datenverarbeitung entfällt. Sofern Sie ein berechtigtes
            Löschersuchen geltend machen oder eine Einwilligung zur
            Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
            sofern keine anderen rechtlich zulässigen Gründe für die
            Speicherung Ihrer personenbezogenen Daten bestehen
            (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen).
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">11. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig. Durch die
            Weiterentwicklung unserer Website oder aufgrund geänderter
            gesetzlicher bzw. behördlicher Vorgaben kann es notwendig
            werden, diese Datenschutzerklärung zu ändern. Die jeweils
            aktuelle Datenschutzerklärung kann jederzeit auf dieser Website
            abgerufen werden.
          </p>
        </section>

        <p className="mt-10 text-sm text-muted-foreground">
          Stand: {new Date().getFullYear()}
        </p>
      </main>
    </div>
  );
}
