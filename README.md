# האייפד של הלומד — אתר קונספט
זהו עותק ניסיוני ועצמאי של רעיון לשיווק אייפד מותאם ללימוד תורה, עיון ומחקר.
הממשקים והתמונות להמחשה בלבד. אין כאן התחייבות למפרט, למחיר או לזמינות.

## הפעלה
- `npm ci`
- `npm run dev`
- `npm run build`

## רכיבי אנימציה קיימים בלבד
- React Bits: LightRays, BlurText, ScrollFloat, SpotlightCard
- Magic UI: BorderBeam
- לא נכתבו אנימציות מותאמות אישית בפרויקט. נעשה רק שימוש והתאמת פרמטרים של הרכיבים.

## רישוי וייחוס
Derived from Zayit website: https://github.com/kdroidFilter/Zayit/tree/master/website
The original Zayit Public License 1.0, including the AGPLv3 base and attribution requirements, is preserved in `LICENSE`.
Powered by the technologies that drive Zayit — https://zayitapp.com/

React Bits: https://reactbits.dev/
Magic UI: https://magicui.design/
Any third-party library files keep their upstream terms. This is an unaffiliated concept, not an official Zayit product.

## Immersive scrolling concept
- Pinned horizontal chapter narrative: GSAP ScrollTrigger and @gsap/react, four conceptual experiences.
- Responsive fallback: native RTL horizontal scrolling with snap points on touch devices or when reduced motion is preferred.
- Interactive stories: Embla Carousel and its Autoplay plugin, five draggable RTL slides with accessible navigation.
- Existing upstream components from React Bits (BlurText, ScrollFloat, LightRays and SpotlightCard) and Magic UI (BorderBeam).
- The photographs and interface previews are conceptual illustrations; no product features or availability are promised.
- All effects that move content are driven by these installed animation libraries; no new home-grown keyframe animations.

Run `npm ci`, `npm run lint` and `npm run build` to verify the site.


## Product-grounded Torah iPad concept (November 2026)
This marketing preview is informed by three real development efforts:
- **Otzaria / Maktabah:** real Hebrew iPad screenshots in `public/product/otzaria-*.webp`, optimized from a local iPad QA screenshot set. The screenshot is test-build evidence, not a production-release assertion.
- **Pinkha × Anytype:** the website demonstrates the existing Anytype-based writing direction (חידוש, מאמר, מחקר) and labels source-linking work as under development. The Pinkha editor graphic is an illustrative mockup, not a screenshot.
- **Hanlin AI:** agent chat, tools and Skills are represented through an illustrative conversation. The interaction and multi-app integration shown in marketing remain aspirational and are explicitly marked as such.

The color system in `src/otzaria-theme.css` is based on the actual Otzaria Flutter project palette: `#2C1B02` (light-mode default dark brown), `#805610` (brown swatch), `#D7CCC8` (parchment), `#9C27B0` (dark-mode seed purple) and `#242424` (dark scaffold). Complementary editorial parchment/gold tones are used for contrast.

No code from the source iPad apps is bundled into this marketing website. No signed build, complete integration, or release-ready status is claimed. The scroll-pinned story continues to use GSAP ScrollTrigger; the draggable story carousel uses Embla; the animated content switches use Motion and pre-existing component libraries. Keep marketing claims distinct from physical-device QA and release status.
