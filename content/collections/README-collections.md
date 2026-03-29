# Shopify Collections — Opprett i Shopify Admin

Opprett følgende collections med angitte betingelser i Shopify Admin:

## Hovedkategorier (automatisert)

| Handle               | Tittel          | Betingelse                                    |
|----------------------|-----------------|-----------------------------------------------|
| arbeidstoy           | Arbeidstøy      | Product tag is equal to `arbeidstoy`          |
| arbeidstoy-bukser    | Arbeidsbukser   | Product tag = `arbeidstoy` AND tag = `bukser` |
| arbeidstoy-jakker    | Arbeidsjakker   | Product tag = `arbeidstoy` AND tag = `jakker` |
| arbeidstoy-overdeler | Overdeler       | Product tag = `arbeidstoy` AND tag = `overdeler` |
| arbeidstoy-kjeledress| Kjeledresser    | Product tag = `arbeidstoy` AND tag = `kjeledress`|
| arbeidstoy-synlighet | Synlighetsklær  | Product tag = `arbeidstoy` AND tag = `synlighet` |
| arbeidstoy-tilbehor  | Tilbehør        | Product tag = `arbeidstoy` AND tag = `tilbehor`  |
| profilklaer          | Profilklær      | Product tag is equal to `profilklaer`         |
| profilklaer-t-skjorter | T-skjorter    | Product tag = `profilklaer` AND tag = `t-skjorte`|
| profilklaer-piker    | Pikéer          | Product tag = `profilklaer` AND tag = `pike`  |
| profilklaer-gensere  | Gensere         | Product tag = `profilklaer` AND tag = `genser`|
| profilklaer-jakker   | Jakker          | Product tag = `profilklaer` AND tag = `jakker`|
| profilklaer-caps     | Caps & luer     | Product tag = `profilklaer` AND tag = `caps`  |
| verneutstyr          | Verneutstyr     | Product tag is equal to `verneutstyr`         |
| sport-fritid         | Sport & Fritid  | Product tag is equal to `sport`               |
| gaveartikler         | Gaveartikler    | Product tag is equal to `gave`                |

## Merkevare-collections (automatisert)

| Handle               | Tittel          | Betingelse                                    |
|----------------------|-----------------|-----------------------------------------------|
| merkevare-payper     | Payper          | Product vendor is equal to `Payper`           |
| merkevare-lbrador    | L.Brador        | Product vendor is equal to `L.Brador`         |
| merkevare-roly       | Roly            | Product vendor is equal to `Roly`             |
| merkevare-zeus       | Zeus Sport      | Product vendor is equal to `Zeus Sport`       |
| merkevare-skydda     | Skydda          | Product vendor is equal to `Skydda`           |
| merkevare-stamina    | Stamina         | Product vendor is equal to `Stamina`          |
| merkevare-hazchem    | Hazchem         | Product vendor is equal to `Hazchem`          |
| merkevare-getforce   | GET FORCE       | Product vendor is equal to `GET FORCE`        |

## Tagging-konvensjon for produkter

- **Kategoritagger:** arbeidstoy, profilklaer, verneutstyr, sport, gave
- **Typetagger:** bukser, jakker, overdeler, t-skjorte, pike, genser, caps
- **Egenskapstagger:** synlighet, vanntett, stretch, cordura, ull-blanding
- **Kjønn:** herre, dame, unisex, barn
- **Sesong:** vår-sommer, høst-vinter, helårs
- **Trykkvennlig:** trykk-broderi, trykk-screen, trykk-transfer, trykk-dtf

## Collection-beskrivelser

Beskrivelsene er allerede inkludert i spesifikasjonen og bør limes inn i
SEO-beskrivelsesfeltet for hver collection i Shopify Admin. Se seksjonene
i page-spec for full tekst.
