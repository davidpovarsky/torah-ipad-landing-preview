import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, BookOpen, Link2, PenLine, Sparkles, Network, BookMarked, ChevronLeft } from 'lucide-react'
import { BorderBeam } from './ui/border-beam'
import ScrollFloat from './ScrollFloat'

type AppKey = 'otzaria' | 'pinkha' | 'hanlin'
const apps = [
  {
    id:'otzaria' as AppKey,
    number:'01', name:'אוצריא', subtitle:'ספרייה, חיפוש ועיון',
    heading:'הספרים. המקורות. עומק הלימוד.',
    copy:'ספריית ספרים תורנית, קורא בעברית, תוכן עניינים, חיפוש בתוך הספר ובספרייה, וכלי לימוד לעבודה עם קטע נבחר, הערות וקישורים בין מקורות.',
    status:'צילומי מסך מגרסת בדיקה אמיתית',
    bullets:['ספרייה ותוכן עניינים','חיפוש תורני ותוצאות עם הקשר','כלי לימוד והערות'],
    Icon:BookOpen
  },
  {
    id:'pinkha' as AppKey,
    number:'02', name:'Pinkha · Anytype', subtitle:'חידושים, מאמרים ומחקרים',
    heading:'מה שלמדת הופך לתורה שלך.',
    copy:'סביבת הכתיבה מבוססת Anytype, עם סוגי מסמכים נפרדים לחידוש, מאמר ומחקר. מערכת הקישור למקורות וקטעים תורניים נמצאת בפיתוח ובהרחבת בדיקות.',
    status:'המחשת ממשק על בסיס המימוש והתכנון',
    bullets:['כתיבה ועריכת מסמכים','סוגי תוכן: חידוש, מאמר ומחקר','קישורים למקורות ברמת מסמך או בלוק — בפיתוח'],
    Icon:PenLine
  },
  {
    id:'hanlin' as AppKey,
    number:'03', name:'Hanlin AI', subtitle:'סוכן, כלים וידע',
    heading:'השאלות שלך פותחות דרך חדשה.',
    copy:'סביבת צ׳אט עם סוכן AI וכלים הניתנים להפעלה מתוך האפליקציה. מנועי היכולות, Skills ומיני־אפליקציות נמצאים בתהליכי פיתוח ובדיקות; החיבור בין היישומים נבנה בהדרגה.',
    status:'הדמיית חוויית עבודה · לא צילום מסך',
    bullets:['צ׳אט וכלים לסוכן','Skills ומיני־אפליקציות','חיבור ישיר למקורות — בתהליכי פיתוח ובדיקה'],
    Icon:Sparkles
  }
] as const

function PinkhaPreview() {
 return <div className="suite-pinkha-mock" aria-label="המחשה של עורך Pinkha למסמכי תורה">
   <div className="suite-editor-top"><span className="suite-editor-dots">•••</span><span>מחברת הלימוד</span><span>פרויקט הדגמה</span></div>
   <div className="suite-editor-body">
     <span className="suite-editor-emoji">✍</span>
     <div className="suite-editor-label">מחקר · טיוטה</div>
     <h4>עיונים בסוגיית השבת אבידה</h4>
     <div className="suite-editor-tags"><span><Link2 size={13}/> בבא מציעא</span><span>חושן משפט</span><span className="suite-pill-plus">מקורות +</span></div>
     <p>כשמעיינים בסוגיה, השאלות מתפתחות מתוך המקורות. כאן אפשר לאסוף רעיונות, לסדר את העיון ולתת מקום למהלך המחשבה.</p>
     <div className="suite-editor-quote">מהו גדר החיוב, ומה בין מציאה לאבידה מדעת?</div>
     <p>נקודות לבדיקה והמשך מחקר:</p>
     <div className="suite-editor-row"><span/> להשוות את לשון הראשונים</div>
     <div className="suite-editor-row"><span/> לחזור למראה המקום</div>
   </div>
   <span className="suite-mock-label">הדמיה להמחשה · קישוריות מקורות בשלבי פיתוח</span>
 </div>
}

function HanlinPreview(){
 return <div className="suite-hanlin-mock" aria-label="המחשת צ׳אט עם סוכן Hanlin AI">
   <div className="suite-hanlin-top"><div className="suite-hanlin-mark"><Sparkles size={19}/></div><div><b>Hanlin AI</b><span>סוכן וכלי עבודה</span></div><span className="suite-hanlin-model">Workspace <ChevronLeft size={13}/></span></div>
   <div className="suite-hanlin-chat">
     <div className="suite-hanlin-user">עזור לי להכין ראשי פרקים לחבורה על השבת אבידה.</div>
     <div className="suite-hanlin-assistant">
       <span className="suite-hanlin-thinking"><Sparkles size={15}/> דוגמה למהלך עבודה</span>
       <p>אפשר לפתוח את החבורה בשלושה צירים:</p>
       <div className="suite-hanlin-line"><span>01</span><b>יסוד המצווה</b><small>השבת אבידה וסימנים</small></div>
       <div className="suite-hanlin-line"><span>02</span><b>שיטות הראשונים</b><small>הגדרת האחריות</small></div>
       <div className="suite-hanlin-line"><span>03</span><b>שאלות לעיון</b><small>השוואה וסיכום</small></div>
       <div className="suite-hanlin-chip"><Network size={13}/> כלים · חיפוש · קבצים</div>
     </div>
   </div>
   <div className="suite-hanlin-composer"><span>שאל שאלה, הוסף מקור או קובץ…</span><span>＋</span></div>
   <span className="suite-mock-label">תסריט המחשה · לא תשובת AI אמיתית</span>
 </div>
}

function AppVisual({ active }: {active:AppKey}){
 if(active==='otzaria') return <div className="suite-real-screen">
   <div className="suite-real-screen-toolbar"><span><BookMarked size={17}/> אוצריא באייפד</span><span>צילום מסך של גרסת בדיקה</span></div>
   <img src="./product/otzaria-reader.webp" alt="צילום מסך אמיתי של קורא אוצריא באייפד: ספר פתוח, תוכן עניינים וספרייה תורנית" loading="lazy"/>
   <span className="suite-real-screen-caption">קריאת ספר · תוכן עניינים · ספרייה</span>
 </div>
 if(active==='pinkha') return <PinkhaPreview/>
 return <HanlinPreview/>
}

export default function ProductSuite(){
 const [active,setActive]=useState<AppKey>('otzaria')
 const current=apps.find(x=>x.id===active) || apps[0]
 const Icon=current.Icon
 return <section className="suite-section" id="apps" aria-labelledby="suite-title">
   <div className="wrap suite-header">
     <div className="suite-kicker"><span>שלושה כלים · חזון אחד</span><span className="suite-kicker-line"/></div>
     <ScrollFloat effect="float" splitBy="words" textClassName="suite-title" animationDuration={0.7} scrollStart="top 95%" scrollEnd="bottom 55%">לא עוד מכשיר. סביבת לימוד שלמה.</ScrollFloat>
     <p id="suite-title" className="suite-subtitle">פותחים ספר, מעמיקים במקורות, כותבים חידוש וממשיכים לחשוב עם כלים מתקדמים — כל אפליקציה תורמת חלק אחר למסע. האינטגרציה בין היישומים עדיין בפיתוח.</p>
   </div>
   <div className="wrap suite-panel">
     <div className="suite-selector" role="tablist" aria-label="אפליקציות לימוד">
       {apps.map(a=>{const AIcon=a.Icon;return <button key={a.id} type="button" role="tab" aria-selected={active===a.id} aria-controls="suite-visual" className={'suite-select-item '+(active===a.id?'is-current':'')} onClick={()=>setActive(a.id)}>
         <span className="suite-select-number">{a.number}</span><span className="suite-select-icon">{a.id === "otzaria" ? <img src="./product/otzaria-icon.webp" alt="" width={30} height={30}/> : <AIcon size={22}/>}</span>
         <span className="suite-select-label"><strong>{a.name}</strong><small>{a.subtitle}</small></span><ArrowLeft size={17}/>
       </button>})}
     </div>
     <div className="suite-main" id="suite-visual" role="tabpanel">
       <div className="suite-main-text">
         <div className="suite-main-eyebrow"><Icon size={16}/>{current.name}</div>
         <AnimatePresence mode="wait" initial={false}>
          <motion.div key={active} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.34,ease:[0.22,1,0.36,1]}}>
           <h3>{current.heading}</h3>
           <p>{current.copy}</p>
           <ul className="suite-features">{current.bullets.map(x=><li key={x}><span className="suite-feature-check">✓</span>{x}</li>)}</ul>
          </motion.div>
         </AnimatePresence>
         <span className="suite-status"><span className="suite-status-dot"/>{current.status}</span>
       </div>
       <div className="suite-preview-frame">
         <AnimatePresence mode="wait" initial={false}><motion.div key={active} className="suite-preview-motion" initial={{opacity:0,scale:0.97}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:1.02}} transition={{duration:0.46,ease:[0.22,1,0.36,1]}}><AppVisual active={active}/></motion.div></AnimatePresence>
         <BorderBeam size={200} duration={18} colorFrom="#805610" colorTo="#9C27B0"/>
       </div>
     </div>
   </div>
   <div className="wrap suite-endline"><span>אוצריא · Pinkha · Hanlin AI</span><span>תיעוד אמיתי לצד המחשות מסומנות</span></div>
 </section>
}
