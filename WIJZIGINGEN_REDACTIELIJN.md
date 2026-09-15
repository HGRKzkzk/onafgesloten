# Redactionele lijn voor Wijzigingen

## Doel

De publieke pagina **Wijzigingen** is geen volledig logboek van commits, redactierondes of technische werkzaamheden. Zij bewaart alleen veranderingen die voor een terugkerende lezer betekenisvol zijn voor wat *Onafgesloten Vorm* zegt, omvat of van zichzelf vraagt.

Het publieke nulpunt is **14 september 2026**. Eerdere werkversies worden niet retrospectief gereconstrueerd.

## Hoofdregel

Neem een verandering op wanneer een lezer die alleen de vorige publieke toestand kende, door de wijziging een relevant ander beeld van het werk zou moeten krijgen.

De hoeveelheid werk achter een wijziging is geen criterium. Alleen de betekenis ervan voor de publieke tekst telt.

## Beslisvragen

Een wijziging hoort in **Wijzigingen** wanneer één of meer van deze vragen overtuigend met **ja** worden beantwoord:

1. Verandert hierdoor wat het werk inhoudelijk beweert, afwijst of nadrukkelijk openlaat?
2. Verandert de reikwijdte: waar, op wie of op welke soorten situaties het werk van toepassing wordt geacht?
3. Wordt een belangrijk begrip, hoofdstuk, toetsgeval of denklijn toegevoegd of geschrapt?
4. Verandert de architectuur zo dat een terugkerende lezer het werk merkbaar anders moet lezen of begrijpen?
5. Zou iemand die alleen de vorige publieke versie kende zonder vermelding van deze wijziging een relevant verkeerd of verouderd beeld van de huidige tekst kunnen houden?

Een enkel **ja** is geen automatische verplichting. De vragen bepalen de drempel; redactioneel oordeel blijft nodig.

## In beginsel wel opnemen

- toevoeging of schrapping van een hoofdstuk, toetsgeval of dragende denklijn;
- introductie, inhoudelijke herdefinitie of afscheid van een kernbegrip;
- wezenlijke verschuiving van een centrale claim of normatieve positie;
- duidelijke verbreding of begrenzing van de reikwijdte;
- herordening die de argumentatieve of leesroute merkbaar verandert;
- correctie van een eerder publiek ingenomen positie wanneer die correctie inhoudelijk gewicht heeft.

## In beginsel niet opnemen

- spelling, grammatica en kleine tekstcorrecties;
- stilistische aanscherping zonder inhoudelijke verschuiving;
- kleine verduidelijkingen die de bestaande positie niet veranderen;
- broncorrecties of bronaanvullingen die de inhoudelijke conclusie niet wijzigen;
- layout, typografie, navigatie en andere presentatie-aanpassingen;
- deployment, build, hosting en andere technische infrastructuur;
- interne documentatie en werkafspraken;
- wijzigingen die vooral veel werk hebben gekost maar voor de publieke tekst weinig betekenen.

## Grensgevallen

Bij twijfel is terughoudendheid de standaard. **Wijzigingen** moet een leesbare geschiedenis van inhoudelijke ontwikkeling blijven en geen tweede Git-log worden.

Twee kleine aanpassingen hoeven niet afzonderlijk vermeld te worden wanneer zij samen één grotere verschuiving vormen. Omgekeerd kan één korte tekstwijziging wel opname verdienen wanneer zij een centrale positie werkelijk verandert.

Een publieke entry beschrijft bij voorkeur **wat inhoudelijk is verschoven en waarom dat voor het werk uitmaakt**, niet via welke commits of technische stappen dat is gebeurd.

## Redactionele toets voor voorbeelden

Een voorbeeld verdient zijn plaats niet doordat het alleen laat zien dat een abstracte gedachte begrijpelijk is. Het moet iets zichtbaar maken wat zonder dat voorbeeld werkelijk moeilijker te zien is.

Een voorbeeld kan dus tegelijk verduidelijken, maar verduidelijking alleen is onvoldoende reden om het op te nemen. Als de lezer de abstracte stap al goed kan volgen en het voorbeeld alleen herhaalt *dit bedoel ik*, maakt het de tekst langer en didactischer zonder nieuw zicht te openen. In dat geval heeft schrappen de voorkeur.

Dezelfde toets geldt voor concretiseringen en uitkijkjes: zij moeten niet alleen illustreren wat de hoofdtekst al zegt, maar een consequentie, grensgeval, spanning, schaal of perspectief zichtbaar maken die zonder die toevoeging minder goed waarneembaar zou zijn.

## Werkafspraak bij PR's

Bij iedere PR met substantiële inhoudelijke gevolgen wordt expliciet kort beoordeeld of **Wijzigingen** mee moet veranderen.

- **Ja:** voeg in dezelfde PR of in een direct gekoppelde vervolg-PR een beknopte publieke entry toe.
- **Nee:** geen entry nodig; dit hoeft niet apart verantwoord te worden tenzij het een evident grensgeval is.

De publieke changelog blijft daarmee selectief. Git bewaart de volledige technische geschiedenis; **Wijzigingen** bewaart alleen de betekenisvolle publieke ontwikkelingsgeschiedenis.
