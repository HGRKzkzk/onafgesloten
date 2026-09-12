export type UitkijkjeVisual = {
  src: string;
  alt: string;
  caption: string;
  sourceUrl: string;
  sourceLabel: string;
};

/*
  Redactionele regel: concreet uitkijkje = concreet toonbaar beeld; anders uitkijkje herkiezen.

  Deze map is een vangnet, geen vindplaats. Ieder uitkijkje draagt inmiddels zijn eigen
  <figure> in de hoofdstuktekst, met een lokaal beeld uit public/images/. De map blijft
  daarom leeg: een uitkijkje zonder eigen beeld hoort zichtbaar te falen (zie
  UitkijkjeVisuals.astro, dat zo'n geval markeert en in de console meldt) in plaats van
  stilzwijgend uit een parallelle lijst te worden aangevuld die naast de tekst uit de pas
  kan gaan lopen.
*/
export const uitkijkjeVisuals: Record<string, UitkijkjeVisual> = {};
