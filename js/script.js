let cases = document.getElementById("cases");

const result = [
    `
<h2>Case: Blomsterbutikkens Nettside 🌸 </h2>
<ul>
    <li>Tittel: Lag en innbydende nettside for "Blomstrende Glede" – en lokal blomsterbutikk som sprer glede med vakre buketter og blomsterdekorasjoner.</li>
</ul>

<h3>Bakgrunn:</h3>
<ul>
    <li>"Blomstrende Glede" ønsker å utvide sin kundebase ved å ha en nettside der kunder kan se utvalget, lære om tilbud, og kontakte butikken. </li>
    <li>Målet er å lage en enkel, estetisk og brukervennlig nettside som gir et godt førsteinntrykk.</li>
</ul>

<h3>Oppgave:</h3>
<ul>
    <li>Bygg en grunnleggende nettside for blomsterbutikken. Nettsiden skal være brukervennlig, lett å lese og forstå. Gjerne bruk fine farger for å komplimentere blomstene.</li>
</ul>

<h3>Krav til funksjonalitet:</h3>
<h3>1. Hjemmeside:</h3>

<ul>
    <li>En oversiktlig velkomstside med butikkens navn og et kort slagord.</li>
    <li>Inkluder et bannerbilde av blomster (kan bruke et generisk bilde).</li>
    <li>Tekst som forklarer butikkens verdier og hva de tilbyr.</li>
</ul>

<h3>2. Produktliste:</h3>
<ul>
    <li>Vis fram minst tre produkter (f.eks. buketter, dekorasjoner).</li>
    <li>Hver blomst eller bukett skal ha et bilde, navn og en kort beskrivelse.</li>
</ul>

<h3>3. Kontaktinformasjon:</h3>
<ul>
    <li>En egen seksjon eller underside med butikkens adresse, telefonnummer og e-post.</li>
    <li>Valgfritt: Et enkelt kontaktskjema for henvendelser.</li>
</ul>
   `,
    
    `
<h2>Case: Klesbutikkens Nettside 👗</h2>
<ul>
    <li>Tittel: Lag en stilig nettside for “TrendHjørnet” – en lokal klesbutikk som tilbyr moteriktige plagg og personlig veiledning.</li>
</ul>

<h3>Bakgrunn:</h3>
<ul>
    <li>“TrendHjørnet” ønsker å modernisere kundereisen ved å tilby en enkel og inspirerende nettside. </li>
    <li>Målet er å gjøre det enkelt for kunder å se hva som er på lager, få et inntrykk av klesstilen, samt komme i kontakt med butikken.</li>
</ul>
    
<h3>Oppgave:</h3>
<ul>
    <li>Bygg en grunnleggende nettside for “TrendHjørnet”. Nettsiden skal være enkel å navigere og ha et moderne design som fremhever klesplaggene på en innbydende måte.</li>
</ul>

<h3>Krav til funksjonalitet:</h3>
<h3>1.  Hjemmeside:</h3>
<ul>
    <li>En oversiktlig velkomstside med butikkens navn og et kort slagord.</li>
    <li>Et bannerbilde som fanger butikkens stil (kan bruke et generisk motebilde).</li>
    <li>En kort beskrivelse av butikken, verdier og hva som gjør “TrendHjørnet” unikt.</li>
</ul>

<h3>2.  Produktliste:</h3>
<ul>
    <li>Vis frem minst tre ulike klesplagg eller tilbehør.</li>
    <li>Hvert produkt bør ha et bilde, navn og en kort beskrivelse (f.eks. materiale, størrelse, farger).</li>
    <li>Valgfritt: Informer om pris eller eventuelle tilbud.</li>
</ul>

<h3>3.  Kontaktinformasjon:</h3>
<ul>
    <li>En egen seksjon eller underside med butikkens adresse, telefonnummer og e-post.</li>
    <li>Valgfritt: Et enkelt kontaktskjema for spørsmål eller bestillinger.</li>
</ul>
`,
    
    `<h2>Case: Bilforhandlerens Nettside 🚘</h2>
<ul>
    <li>Tittel: Lag en profesjonell nettside for “Veien Auto” – en lokal bilforhandler som tilbyr et bredt utvalg av nye og brukte biler.</li>
</ul>

<h3>Bakgrunn</h3>
<ul>
    <li>“Veien Auto” ønsker å nå flere potensielle kunder digitalt. </li>
    <li>De trenger en moderne og brukervennlig nettside for å vise frem bilutvalget, dele informasjon om tjenester og gjøre det enkelt for kunder å ta kontakt.</li>
</ul>

<h3>Oppgave:</h3>
<ul>
    <li>Bygg en grunnleggende nettside for “Veien Auto”. Nettsiden skal være enkel å navigere og reflektere et solid og pålitelig bilforhandlerkonsept.</li>
</ul>

<h3>Krav til funksjonalitet</h3>
<h3>1.  Hjemmeside:</h3>
<ul>
    <li>Oversiktlig velkomstside med bilforhandlerens navn og et kort slagord.</li>
    <li>Et bannerbilde som viser bilene eller bilforhandlerens lokale.</li>
    <li>Kort tekst om bedriftens filosofi og hva som skiller “Veien Auto” fra andre forhandlere.</li>
</ul>

<h3>2.  Biler i utvalg:</h3>
<ul>
    <li>Presenter minst tre ulike biler (nye eller brukte).</li>
    <li>Hver bil skal ha et bilde, modellnavn og en kort beskrivelse (f.eks. nøkkelinfo om drivstoff, kilometerstand eller unike egenskaper).</li>
    <li>Valgfritt: Oppgi pris og eventuelle finansieringsmuligheter.</li>
</ul>

<h3>3.  Kontaktinformasjon:</h3>
<ul>
    <li>En egen seksjon eller underside med forhandlerens adresse, telefonnummer og e-post.</li>
    <li>Valgfritt: Et enkelt kontaktskjema for testkjøring eller spørsmål.</li>
</ul>
`,
    
    `<h2>Case: Treningssenterets Nettside 🏋️</h2>
<ul>
    <li>Tittel: Lag en inspirerende nettside for “Aktivio” – et treningssenter som fokuserer på personlig oppfølging og gode treningsopplevelser.</li>
</ul>

<h3>Bakgrunn</h3>
<ul>
    <li>"Aktivio" ønsker å tiltrekke seg flere medlemmer ved å ha en oversiktlig og motiverende nettside. </li>
    <li>Målet er å vise frem hvilke tjenester og fasiliteter de tilbyr, samt gi besøkende enkel tilgang til informasjon om medlemskap og timeplan.</li>
</ul>

<h3>Oppgave:</h3>
<ul>
    <li>Bygg en grunnleggende nettside for "Aktivio". Nettsiden skal være brukervennlig, ha et moderne design og motivere besøkende til å ta steget inn i en sunnere livsstil.</li>
</ul>

<h3>Krav til funksjonalitet</h3>
<h3>1.  Hjemmeside:</h3>
<ul>
    <li>En velkomstside med treningssenterets navn og et inspirerende slagord.</li>
    <li>Et bannerbilde eller illustrasjon som fanger essensen av trening og velvære.</li>
    <li>Kort beskrivelse av treningssenterets visjon, tilbud og hva som gjør "Aktivio" unikt.</li>
</ul>

<h3>2.  Tjenester og timeplan:</h3>
<ul>
    <li>Presentér minst tre ulike tilbud (f.eks. styrketrening, gruppetimer, PT-tjenester).</li>
    <li>Hver tjeneste bør ha en kort beskrivelse (hva det går ut på, varighet osv.).</li>
    <li>Valgfritt: En enkel timeplan-oversikt for gruppetrening (dag, klokkeslett og instruktør).</li>
</ul>

<h3>3.  Kontaktinformasjon:</h3>
<ul>
    <li>Egen seksjon eller underside med adresse, telefonnummer og e-post.</li>
    <li>Valgfritt: Et enkelt kontaktskjema for nye medlemmer eller spørsmål.</li>
</ul>
    `,
    
    `
<h2>Case: Matbutikkens Nettside 🍎</h2>
<ul>
    <li>Tittel: Lag en fristende nettside for “Smak & Velvære” – en lokal matbutikk med fokus på ferske råvarer og gode kundeopplevelser.</li>
</ul>

<h3>Bakgrunn</h3>
<ul>
    <li>“Smak & Velvære” ønsker å øke synligheten blant lokalmiljøet og vise frem sitt varesortiment på en mer moderne måte. </li>
    <li>Målet er en innbydende og informativ nettside hvor kunder kan lese om produkter, tilbud og ta kontakt.</li>
</ul>

<h3>Oppgave:</h3>
<ul>
    <li>Bygg en grunnleggende nettside for “Smak & Velvære”. Nettsiden skal være enkel å navigere, oversiktlig og friste besøkende til å handle i butikken.</li>
</ul>
    
<h3>Krav til funksjonalitet</h3>
<h3>1.  Hjemmeside:</h3>
<ul>
    <li>En velkomstseksjon med butikkens navn og et kort slagord.</li>
    <li>Et fristende bannerbilde som fremhever ferske råvarer (frukt, grønnsaker e.l.).</li>
    <li>Kort tekst om butikkens filosofi og satsing på kvalitet.</li>
</ul>
    
<h3>2.  Produktliste / Varesortiment:</h3>
<ul>
    <li>Vis frem minst tre produktkategorier (f.eks. frukt og grønt, lokale spesialiteter, ferske bakevarer).</li>
    <li>Hver kategori eller utvalgte produkter bør ha et kort beskrivende tekst og eventuelt bilder.</li>
    <li>Valgfritt: Nevne spesielle tilbud, kampanjer eller rabatter.</li>
</ul>

<h3>3.  Kontaktinformasjon:</h3>
<ul>
    <li>Egen seksjon eller underside med butikkens adresse, åpningstider, telefonnummer og e-post.</li>
    <li>Valgfritt: Et enkelt kontaktskjema for henvendelser eller bestillinger (f.eks. catering).</li>
</ul>
    `,

    `
<h2>Case: Bærekrafts Nettside ♻️</h2>
<ul>
    <li>Tittel: Lag en inspirerende og informativ nettside for “Grønn Fremtid” – en organisasjon som jobber for bærekraftige løsninger og miljøvennlige tiltak.</li>
</ul>

<h3>Bakgrunn:</h3>
<ul>
    <li>“Grønn Fremtid” ønsker å øke bevisstheten rundt miljøutfordringer og tiltrekke seg støttespillere.</li>
    <li>Målet er å ha en nettside som presenterer prosjektene deres, gir tips til en grønnere hverdag og gjør det enkelt for folk å engasjere seg.</li>
</ul>

<h3>Oppgave:</h3>
<ul>
    <li>Bygg en grunnleggende nettside for “Grønn Fremtid”. Nettsiden skal være brukervennlig, ha en ren og miljøvennlig profil, og gi besøkende lyst til å ta del i organisasjonens arbeid.</li>
</ul>

<h3>Krav til funksjonalitet:</h3>
<h3>1. Hjemmeside:</h3>
<ul>
    <li>En velkomstseksjon med organisasjonens navn og et kort, treffende slagord.</li>
    <li>Et bannerbilde eller illustrasjon som formidler miljøvern og bærekraft (f.eks. natur, planter, fornybar energi).</li>
    <li>Kort tekst som beskriver organisasjonens misjon og visjon.</li>
</ul>

<h3>2. Prosjekter og tiltak:</h3>
<ul>
    <li>Presenter minst tre pågående eller fremhevede prosjekter (f.eks. gjenplanting av skog, strandrydding, solenergi-initiativer).</li>
    <li>Hvert prosjekt bør ha en kort beskrivelse og et bilde eller ikon.</li>
    <li>Valgfritt: Inkluder suksesshistorier, resultater eller statistikk (f.eks. antall trær plantet, kilo plast ryddet).</li>
</ul>

<h3>3. Involvering og tips:</h3>
<ul>
    <li>En seksjon eller underside med konkrete råd for å leve mer bærekraftig (f.eks. resirkuleringstips, energisparing, matvett).</li>
    <li>Valgfritt: Enkle steg for hvordan besøkende kan bli frivillige, donere eller starte egne lokallag.</li>
</ul>

<h3>4. Kontaktinformasjon:</h3>
<ul>
    <li>Egen seksjon eller underside med organisasjonens adresse (om relevant), e-post og telefonnummer.</li>
    <li>Valgfritt: Et enkelt kontaktskjema for donasjonsspørsmål eller generelle henvendelser.</li>
    <li>Linker til sosiale medier (f.eks. Facebook, Instagram, LinkedIn) for oppdateringer og kampanjer.</li>
</ul>
`
    ];
    

            function changeContent(i){
                cases.innerHTML = result[i];
            }