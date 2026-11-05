import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { BookOpen, Layers3, Search, NotebookPen, ArrowLeft, ArrowDown, MousePointer2, LibraryBig, Sparkles, MoveHorizontal } from 'lucide-react'
import { BorderBeam } from './ui/border-beam'
import ScrollFloat from './ScrollFloat'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const chapters = [
  { number: '01', label: 'אוצריא · קורא וספרייה', title: 'כל הספרים. מול העיניים.', description: 'קורא עברי, ספרייה תורנית, ניווט וחיפוש. כאן אתם רואים צילום אמיתי של גרסת אוצריא על iPad.', Icon: LibraryBig, kind: 'library', note: 'צילום ממשק מגרסת בדיקה' },
  { number: '02', label: 'Pinkha · כתיבה תורנית', title: 'חידוש. מאמר. מחקר.', description: 'סביבת כתיבה מבוססת Anytype, עם סוגי מסמכים נפרדים. קישור למקורות ברמת המסמך והבלוק מתפתח ונבדק.', Icon: NotebookPen, kind: 'sources', note: 'המחשה מבוססת המימוש והתכנון' },
  { number: '03', label: 'Hanlin · סוכן AI', title: 'גם לשאלות יש מקום.', description: 'צ׳אט עם סוכן AI, כלים ו-Skills. היכולת לעבוד עם מקורות תורניים ועם אפליקציות נוספות נמצאת בשלבי פיתוח.', Icon: Search, kind: 'search', note: 'הדמיה של תהליך עבודה' },
  { number: '04', label: 'האייפד של הלומד · החזון', title: 'לומדים. כותבים. ממשיכים.', description: 'שלוש אפליקציות עצמאיות שמתקרבות לסביבת לימוד אחת. שילובן ההדוק הוא יעד פיתוח — לא פונקציה שכבר הושלמה.', Icon: Layers3, kind: 'place', note: 'חזון המוצר הכולל' },
] as const

function ConceptVisual({ kind }: { kind: typeof chapters[number]['kind'] }) {
  if (kind === 'library') return <div className="journey-photo">
    <img src="./product/otzaria-reader.webp" alt="צילום ממשק אוצריא אמיתי על iPad: קורא ספר ותוכן עניינים" loading="lazy"/>
    <div className="journey-photo-gradient"/>
    <div className="journey-photo-insight"><BookOpen size={19}/><span>אוצריא · צילום מסך אמיתי</span></div>
  </div>
  if (kind === 'sources') return <div className="journey-ui-visual">
    <div className="j-ui-top"><span className="j-ui-dot"/><span>סביבת עיון</span><span className="j-ui-top-label">הדמיית ממשק</span></div>
    <div className="j-ui-columns">
      <div className="j-ui-sheet j-ui-sheet-main">
        <div className="j-ui-eyebrow">Pinkha · מסמך כתיבה</div><h4>חידוש בסוגיה</h4><div className="j-ui-rule"/>
        <p>סביבת כתיבה עם טקסטים ומקורות לעיון.</p>
        <p className="j-ui-highlight">מהלך המחשבה מקבל מקום מסודר משלו.</p>
        <p>אפשר להעמיק ולחזור אל נקודות הדיון.</p>
      </div>
      <div className="j-ui-sheet j-ui-sheet-side">
        <div className="j-ui-eyebrow">מקורות והקשרים</div><h4>מקורות +</h4><div className="j-ui-rule"/>
        <p>קישור מקורות תורניים למסמכים נמצא בפיתוח ובבדיקה.</p>
        <span className="j-ui-label">סוגי מסמכים</span>
        <div className="j-ui-result"><BookOpen size={15}/> תוספות</div><div className="j-ui-result"><BookOpen size={15}/> ראשונים</div>
      </div>
    </div>
    <div className="j-ui-bottom"><span><Layers3 size={15}/> כתיבה ומקורות</span><span>תצוגת קונספט להמחשה</span></div>
  </div>
  if (kind === 'search') return <div className="journey-search-visual">
    <div className="j-search-halo"/>
    <div className="j-search-panel">
      <div className="j-search-query"><Search size={21}/><span>סכם את הנושא לחבורה</span><span className="j-search-hint">Hanlin AI</span></div>
      <div className="j-search-result"><span>01</span><div><strong>ארגון השאלה</strong><p>מגדירים נושא והקשר ללימוד</p></div><ArrowLeft size={17}/></div>
      <div className="j-search-result"><span>02</span><div><strong>כלים ו-Skills</strong><p>פעולות מתוך סביבת הסוכן</p></div><ArrowLeft size={17}/></div>
      <div className="j-search-result"><span>03</span><div><strong>המשך העבודה</strong><p>תכנון העבודה מול מקורות והערות</p></div><ArrowLeft size={17}/></div>
    </div><span className="j-search-disclaimer">הדמיה רעיונית · לא שיחת סוכן אמיתית</span>
  </div>
  return <div className="journey-photo journey-photo-place">
    <img src="./study-desk.jpg" alt="אייפד עם ספרים פתוחים ועט על שולחן לימוד" loading="lazy"/>
    <div className="journey-photo-gradient"/>
    <div className="journey-photo-insight"><Sparkles size={18}/><span>ללמוד. לכתוב. לחשוב.</span></div>
  </div>
}

export default function HorizontalJourney() {
  const outerRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
      const stage = stageRef.current
      const track = trackRef.current
      const viewport = viewportRef.current
      if (!stage || !track || !viewport) return
      const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth + 70)
      const animation = gsap.to(track, {
        x: () => distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: stage,
          pin: true,
          start: 'top top',
          end: () => '+=' + Math.max(distance(), 450),
          scrub: 0.75,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      })
      return () => { animation.scrollTrigger?.kill(); animation.kill() }
    })
    return () => mm.revert()
  }, { scope: outerRef })

  return <section ref={outerRef} className="journey-section" id="journey" aria-labelledby="journey-title">
    <div className="wrap journey-heading">
      <span className="section-kicker">04 / מסע בתוך הלימוד</span>
      <div className="journey-heading-grid">
        <div><p className="small-label"><Sparkles size={15}/> לא עוד רשימת תכונות</p>
          <h2 id="journey-title">מרגישים את <em>הלימוד.</em><br/>לא רק רואים אותו.</h2></div>
        <div className="journey-intro"><p>ארבע תחנות בחוויה אחת. גללו כדי לגלות איך כלי אחד יכול ללוות את הלומד — מהרגע שבו פותחים ספר ועד הרעיון שנשאר איתו.</p><span><MousePointer2 size={16}/> גלילה אנכית הופכת למסע אופקי</span></div>
      </div>
    </div>
    <div className="journey-stage" ref={stageRef}>
      <div className="journey-ambient" aria-hidden="true"/>
      <div className="journey-topline wrap"><span>חוויית לימוד בתנועה</span><span className="journey-topline-rule"/><span>01 — 04</span><MoveHorizontal size={16}/></div>
      <div className="journey-viewport" ref={viewportRef}>
        <div className="journey-track" ref={trackRef} dir="rtl">
          {chapters.map((chapter) => {
            const Icon = chapter.Icon
            return <article key={chapter.number} dir="rtl" className={'journey-card journey-card-' + chapter.kind}>
              <div className="journey-card-copy">
                <div className="journey-card-index"><span>{chapter.number} / 04</span><span className="journey-index-line"/><Icon size={20}/></div>
                <span className="journey-card-label">{chapter.label}</span>
                <h3>{chapter.title}</h3>
                <p>{chapter.description}</p>
                <div className="journey-card-bottom"><span><ArrowDown size={15}/>{chapter.note}</span><small>הדמיית קונספט</small></div>
              </div>
              <div className="journey-card-art"><ConceptVisual kind={chapter.kind}/><BorderBeam size={150} duration={17} colorFrom="#d9b982" colorTo="#56402b"/></div>
            </article>
          })}
        </div>
      </div>
      <div className="journey-bottom wrap"><span>01 &nbsp; ━━━━━ &nbsp; 04</span><span>ממשיכים בגלילה</span><ArrowLeft size={17}/></div>
    </div>
    <div className="wrap journey-closing"><ScrollFloat effect="float" splitBy="words" textClassName="journey-close-head" scrollStart="top 90%" scrollEnd="bottom 50%" animationDuration={0.7}>כי לימוד טוב לא עוצר בדף.</ScrollFloat><p>הוא ממשיך עם השאלות, המחשבות והגילויים שבדרך.</p></div>
  </section>
}
