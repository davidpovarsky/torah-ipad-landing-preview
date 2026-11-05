import { useCallback, useEffect, useMemo, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ArrowLeft, ArrowRight, BookOpen, ChevronLeft, ChevronRight, Highlighter, NotebookPen, Layers3, Search, Sparkles, Library, PenLine, ArrowUpLeft } from 'lucide-react'
import { BorderBeam } from './ui/border-beam'

const slides = [
  { label: 'אוצריא · הספרייה', title: 'ספרים אמיתיים. לימוד עמוק.', copy: 'ממשק אוצריא באייפד: מדפי ספרים, קורא, תוכן עניינים וחיפוש. מתוך גרסת הבדיקה, ולא הדמיה מומצאת.', visual: 'hall', accent: '01', status:'צילום אווירה להמחשה · צילום ממשק אמיתי בהמשך', href:'#demo' },
  { label: 'אוצריא · כלי לימוד', title: 'מפרשים וקישורים מתוך הטקסט.', copy: 'צילום מסך של כלי הלימוד: קטע נבחר, כלי עיון והקשרים בין מקורות. חלק מהזרימות עדיין עוברות בדיקות.', visual: 'compare', accent: '02', status:'צילום מסך אמיתי של גרסת בדיקה', href:'#demo' },
  { label: 'Pinkha · חידושים', title: 'מקום לחידוש שנולד בלימוד.', copy: 'עורך מבוסס Anytype עם מסמכי חידוש, מאמר ומחקר. קישור מקורות ואחסון נבדקים ומתפתחים.', visual: 'notes', accent: '03', status:'המחשה של סביבת כתיבה · פיתוח פעיל', href:'#apps' },
  { label: 'האייפד · בכל מקום', title: 'בכל מקום שבו לומדים.', copy: 'שולחן עמוס ספרים או פינה שקטה בדרך — החזון הוא מכשיר שמשרת את דרך הלימוד, בלי שהטכנולוגיה תעמוד במרכז.', visual: 'desk', accent: '04', status:'תמונת אווירה קונספטואלית', href:'#apps' },
  { label: 'Hanlin AI · הסוכן', title: 'כלים חדשים לשאול ולחשוב.', copy: 'סוכן AI, צ׳אט, Skills ומיני־אפליקציות. החיבור למקורות התורניים ולאפליקציות נבנה בשלבים, ללא הבטחה לזמינות של הכול כעת.', visual: 'tools', accent: '05', status:'המחשת יכולות · סביבת פיתוח ובדיקה', href:'#apps' },
] as const

function SlideVisual({ kind }: { kind: typeof slides[number]['visual'] }) {
  if (kind === 'hall' || kind === 'desk') return <div className="moments-photo">
    <img src={kind === 'hall' ? './study-hall.jpg' : './study-desk.jpg'} alt={kind === 'hall' ? 'ספרייה תורנית עם ספרים ואייפד' : 'אייפד ומחברת לצד ספרי קודש'} loading="lazy"/>
    <div className="moments-photo-overlay"/><span className="moments-photo-stamp">עולם התורה · חוויית לימוד חדשה</span>
  </div>
  if (kind === 'compare') return <div className="moments-compare moments-compare-real" aria-label="צילום מסך אמיתי של כלי הלימוד של אוצריא">
    <img src="./product/otzaria-inspector.webp" className="moments-real-screenshot" alt="ממשק אוצריא באייפד עם כלי לימוד וקטע מקור שנבחר" loading="lazy"/>
    <span className="moments-real-label">אוצריא · צילום אמיתי מגרסת בדיקה</span>
  </div>
  if (kind === 'notes') return <div className="moments-notes">
    <div className="moments-note-paper"><span><NotebookPen size={19}/> מחברת העיון</span>
      <h4>נקודה למחשבה</h4><p>מה ההבדל בין מציאה שאבדה לבין דבר שהונח מדעת?</p>
      <div className="moments-rule"/><div className="moments-rule short"/>
      <div className="moments-note-meta"><Highlighter size={15}/> נשמר לעיון הבא</div>
    </div>
    <div className="moments-note-tile"><PenLine size={19}/><span>מסמנים את הרעיון. ממשיכים בסוגיה.</span></div>
  </div>
  return <div className="moments-tools">
    <div className="moments-tools-grid">
      <span><BookOpen size={31}/><strong>אוצריא</strong></span>
      <span><Search size={31}/><strong>מקורות</strong></span>
      <span><Layers3 size={31}/><strong>Pinkha</strong></span>
      <span><NotebookPen size={31}/><strong>חידושים</strong></span>
      <span><Library size={31}/><strong>Hanlin</strong></span>
      <span><Sparkles size={31}/><strong>כלים ו-AI</strong></span>
    </div>
  </div>
}

export default function StoryCarousel() {
  const autoplay = useMemo(() => Autoplay({ delay: 6800, stopOnInteraction: true, stopOnMouseEnter: true, playOnInit: typeof window === 'undefined' ? false : !window.matchMedia('(prefers-reduced-motion: reduce)').matches }), [])
  const [emblaRef, emblaApi] = useEmblaCarousel({ direction: 'rtl', loop: true, align: 'center', dragFree: false }, [autoplay])
  const [selected, setSelected] = useState(0)
  const [canPrev, setCanPrev] = useState(true)
  const [canNext, setCanNext] = useState(true)

  const update = useCallback(() => {
    if (!emblaApi) return
    setSelected(emblaApi.selectedScrollSnap())
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    update()
    emblaApi.on('select', update)
    emblaApi.on('reInit', update)
    return () => {
      emblaApi.off('select', update)
      emblaApi.off('reInit', update)
    }
  }, [emblaApi, update])

  return <section className="moments-section" id="moments" aria-labelledby="moments-title">
    <div className="wrap moments-header">
      <div><span className="section-kicker">06 / בתוך חוויית הלימוד</span>
        <span className="small-label">לומדים מתוך הסיפור</span>
        <h2 id="moments-title">המוצר שכבר נבנה.<br/><em>והחזון שממשיך לצמוח.</em></h2>
      </div>
      <div className="moments-header-aside"><p>לא רק עמוד ארוך. סיפור שאפשר לדפדף בו, לחזור אליו ולגלות בכל פעם זווית אחרת.</p><div className="moments-navigation" dir="ltr">
        <button type="button" onClick={() => emblaApi?.scrollNext()} disabled={!canNext} aria-label="לכרטיס הבא"><ChevronLeft size={22}/></button>
        <span aria-live="polite">{String(selected + 1).padStart(2, '0')} <i>/</i> 05</span>
        <button type="button" onClick={() => emblaApi?.scrollPrev()} disabled={!canPrev} aria-label="לכרטיס הקודם"><ChevronRight size={22}/></button>
      </div></div>
    </div>
    <div className="moments-carousel" dir="rtl" ref={emblaRef} aria-roledescription="carousel" aria-label="גלריית חוויות לימוד">
      <div className="moments-container">
        {slides.map((slide, index) => <div className="moments-slide" key={slide.label} role="group" aria-roledescription="slide" aria-label={'פריט ' + (index + 1) + ' מתוך ' + slides.length}>
          <div className="moments-card">
            <div className="moments-card-copy"><span className="moments-number">{slide.accent} / 05 <ArrowUpLeft size={16}/></span>
              <span className="moments-eyebrow">{slide.label}</span>
              <h3>{slide.title}</h3><p>{slide.copy}</p>
              <a href={slide.href} className="moments-link">לגלות את הכלים <ArrowLeft size={17}/></a>
              <span className="moments-hint">{slide.status}</span>
            </div>
            <div className="moments-card-visual"><SlideVisual kind={slide.visual}/></div>
            <BorderBeam size={180} duration={14} colorFrom="#dbb981" colorTo="#655039" />
          </div>
        </div>)}
      </div>
    </div>
    <div className="moments-footer wrap"><div className="moments-dots" aria-label="ניווט בין כרטיסים">{slides.map((item, i) => <button type="button" key={item.label} className={'moments-dot ' + (selected === i ? 'is-active' : '')} onClick={() => emblaApi?.scrollTo(i)} aria-label={'עבור לכרטיס ' + (i+1)} aria-current={selected===i?'true':undefined}/>)}</div>
      <span>גררו לצדדים או השתמשו בחצים <ArrowRight size={17}/></span></div>
  </section>
}
