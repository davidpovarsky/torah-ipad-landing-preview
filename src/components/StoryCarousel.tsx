import { useCallback, useEffect, useMemo, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ArrowLeft, ArrowRight, BookOpen, ChevronLeft, ChevronRight, Highlighter, NotebookPen, Layers3, Search, Sparkles, Library, PenLine, ArrowUpLeft } from 'lucide-react'
import { BorderBeam } from './ui/border-beam'

const slides = [
  { label: 'סביבת לימוד', title: 'פותחים ספר. ונכנסים לעולם.', copy: 'התחושה המוכרת של בית המדרש — עם מרחב חדש למקורות, לרעיונות ולדרך האישית שלך ללמוד.', visual: 'hall', accent: '01' },
  { label: 'השוואת מקורות', title: 'לא לבחור בין שני ספרים.', copy: 'כשמפרש אחד מאיר את השני, הכול צריך להיות מול העיניים. לומדים ברצף בלי לאבד את החוט.', visual: 'compare', accent: '02' },
  { label: 'מחברת חכמה', title: 'הרעיון שלך ראוי למקום משלו.', copy: 'מחשבה באמצע הסוגיה, שאלה להמשך, מראה מקום שצריך לבדוק. סביבה שיכולה לשמור על רצף המחשבה.', visual: 'notes', accent: '03' },
  { label: 'ללמוד בכל מקום', title: 'גם כשהיום ממשיך. הלימוד איתך.', copy: 'מכשיר שתוכנן כקונספט ללוות עיון רציני גם מחוץ לבית המדרש, בלי לאבד את האווירה.', visual: 'desk', accent: '04' },
  { label: 'הכלים שלך', title: 'אותו מסך. יותר אפשרויות.', copy: 'החל מספריית המקורות, דרך חיפוש ועד כתיבה והשוואה — חוויה שנועדה להתאים לקצב הלימוד שלך.', visual: 'tools', accent: '05' },
] as const

function SlideVisual({ kind }: { kind: typeof slides[number]['visual'] }) {
  if (kind === 'hall' || kind === 'desk') return <div className="moments-photo">
    <img src={kind === 'hall' ? './study-hall.jpg' : './study-desk.jpg'} alt={kind === 'hall' ? 'ספרייה תורנית עם ספרים ואייפד' : 'אייפד ומחברת לצד ספרי קודש'} loading="lazy"/>
    <div className="moments-photo-overlay"/><span className="moments-photo-stamp">עולם התורה · חוויית לימוד חדשה</span>
  </div>
  if (kind === 'compare') return <div className="moments-compare" aria-label="הדמיה של שני מקורות לימוד זה לצד זה">
    <div className="moments-compare-outer">
      <div className="moments-mini-bar"><span><Layers3 size={16}/> עיון מקביל</span><span>שני מקורות · מבט אחד</span></div>
      <div className="moments-compare-pages">
        <div><span className="moments-mini-eyebrow">בבא מציעא</span><h4>פרק אלו מציאות</h4><p>שנים אוחזין בטלית, זה אומר אני מצאתיה וזה אומר אני מצאתיה.</p><p className="moments-underline">זה אומר כולה שלי וזה אומר כולה שלי.</p></div>
        <div><span className="moments-mini-eyebrow">דברי הראשונים</span><h4>בפירוש הסוגיה</h4><p>לימוד המקורות לצד דברי המפרשים, מתוך עיון רציף ובהיר.</p><p>מראי מקומות והמשך הבירור באותו מסך.</p></div>
      </div>
    </div>
    <span className="moments-caption">המחשה רעיונית של ממשק לימוד</span>
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
      <span><BookOpen size={31}/><strong>ספרייה</strong></span>
      <span><Search size={31}/><strong>חיפוש</strong></span>
      <span><Layers3 size={31}/><strong>השוואה</strong></span>
      <span><NotebookPen size={31}/><strong>הערות</strong></span>
      <span><Library size={31}/><strong>מאגרים</strong></span>
      <span><Sparkles size={31}/><strong>חוויית עיון</strong></span>
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
        <h2 id="moments-title">כל רגע של לימוד.<br/><em>מקום לגלות עוד.</em></h2>
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
              <a href="#demo" className="moments-link">לגלות את הממשק <ArrowLeft size={17}/></a>
              <span className="moments-hint">תצוגת קונספט · המפרט הסופי כפוף לפיתוח</span>
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
