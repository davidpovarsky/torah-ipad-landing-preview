import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowDownLeft, ArrowLeft, ArrowUpLeft, BookOpen, BookMarked, BookText, Check, FileSearch, LibraryBig, Menu, NotebookPen, PenLine, Search, Sparkles, X, Link2 } from 'lucide-react'
import LightRays from './components/LightRays'
import BlurText from './components/BlurText'
import ScrollFloat from './components/ScrollFloat'
import SpotlightCard from './components/SpotlightCard'
import { BorderBeam } from './components/ui/border-beam'
import ProductSuite from './components/ProductSuite'
import HorizontalJourney from './components/HorizontalJourney'
import StoryCarousel from './components/StoryCarousel'
import './immersive.css'
import './otzaria-theme.css'

const panels = [
 {tab:'קריאה',title:'פותחים ספר. ונכנסים לעומק.',lead:'הקורא של אוצריא מציג טקסטים תורניים בעברית עם ניווט בין ספרים, תוכן עניינים ומסך לימוד שמכבד את צורת הקריאה.',image:'./product/otzaria-portrait.webp',alt:'צילום מסך אמיתי של קורא אוצריא באייפד: ספר פתוח והספרייה לצד הטקסט',icon:BookOpen},
 {tab:'חיפוש',title:'מוצאים את המקור. ממשיכים לעיין.',lead:'מסך החיפוש של אוצריא מציג תוצאות מתוך ספרים תורניים, הקשרים וטקסטים רלוונטיים להמשך הבירור.',image:'./product/otzaria-search.webp',alt:'צילום מסך של חיפוש אמיתי באוצריא ותוצאות מתוך ספרים',icon:Search},
 {tab:'כלי לימוד',title:'לומדים עם הקשר וכלים.',lead:'בתצוגת כלי הלימוד אפשר לפגוש מפרשים, קישורים, הערות וטקסט שנבחר. חלק מההתנהגויות עדיין בתהליך בדיקות ושיפור.',image:'./product/otzaria-inspector.webp',alt:'צילום מסך של כלי הלימוד וה־Inspector באוצריא',icon:FileSearch},
] as const

function Device(){
 return <div className="device device-real">
   <span className="device-camera" aria-hidden="true"/>
   <img className="real-device-screenshot" src="./product/otzaria-reader.webp" alt="צילום מסך אמיתי של אוצריא באייפד עם ספר פתוח, ספרייה ותוכן עניינים" fetchPriority="high"/>
 </div>
}

function Header(){
 const [open,setOpen]=useState(false)
 return <header className="topbar">
   <a className="brand" href="#top" aria-label="האייפד של הלומד — חזרה לראש העמוד"><span className="brand-symbol">ע</span><span>האייפד של הלומד</span></a>
   <nav className={'main-nav '+(open?'is-open':'')} aria-label="ניווט באתר">
     <a href="#vision" onClick={()=>setOpen(false)}>הרעיון</a>
     <a href="#apps" onClick={()=>setOpen(false)}>האפליקציות</a>
     <a href="#journey" onClick={()=>setOpen(false)}>מסע הלימוד</a>
     <a href="#demo" onClick={()=>setOpen(false)}>ממשק אוצריא</a>
   </nav>
   <a className="header-cta" href="#apps">הכירו את הכלים <ArrowUpLeft size={15}/></a>
   <button type="button" className="mobile-menu" aria-label={open?'סגירת תפריט':'פתיחת תפריט'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </header>
}

export default function App(){
 const [selected,setSelected]=useState(0)
 return <div className="site site-otzaria" id="top" dir="rtl">
  <div className="noise-overlay" aria-hidden="true"/>
  <Header/>
  <main>
   <section className="hero" aria-labelledby="hero-title">
     <div className="hero-light" aria-hidden="true"><LightRays raysOrigin="top-center" raysColor="#a47c47" raysSpeed={0.27} lightSpread={0.85} rayLength={1.8} glow={0.25} haze={0.12} intensity={0.49} followMouse={true} mouseInfluence={0.1} fadeDistance={1.5} opacity={0.65}/></div>
     <div className="hero-grid wrap">
       <div className="hero-copy">
         <div className="eyebrow"><span className="eyebrow-mark"/> אוצריא · Pinkha · Hanlin AI</div>
         <h1 id="hero-title"><span className="hero-small">כל עולמו של הלומד</span><span className="hero-emphasis">נפגש על<br/>אייפד אחד.</span></h1>
         <BlurText text="ספרים ומקורות באוצריא. חידושים ומחקרים ב־Pinkha. וסוכן AI וכלי עבודה ב־Hanlin. שלוש אפליקציות שמעצבות יחד את החזון של סביבת לימוד חדשה." animateBy="words" effect="blur" trigger="load" delay={42} blur={0} distance={9} stepDuration={0.35} className="hero-description"/>
         <div className="hero-actions">
           <a className="button-primary" href="#apps">הכירו את האפליקציות <ArrowDownLeft size={18}/></a>
           <a className="button-text" href="#demo">ראו את אוצריא בפעולה <ArrowLeft size={16}/></a>
         </div>
         <div className="hero-footnote"><span className="fine-line"/><span>גרסת תצוגה · המוצרים והחיבורים ביניהם בפיתוח</span></div>
       </div>
       <div className="hero-product">
         <div className="hero-halo"/>
         <div className="hero-device"><Device/></div>
         <div className="hero-tile hero-tile-one"><BookOpen size={17}/><div><b>אוצריא</b><small>ספרייה, קריאה וחיפוש</small></div></div>
         <div className="hero-tile hero-tile-two"><NotebookPen size={17}/><div><b>Pinkha + Hanlin</b><small>כתיבה · מקורות · AI</small></div></div>
         <span className="product-caption">צילום אמיתי מגרסת בדיקה של אוצריא באייפד</span>
       </div>
     </div>
     <a className="scroll-cue" href="#vision"><span>גללו להכיר את הרעיון</span><ArrowDownLeft size={15}/></a>
   </section>
   <section className="vision-section" id="vision">
     <div className="section-kicker">01 / החזון</div>
     <div className="vision-copy wrap">
       <p className="small-label">שומרים על בית המדרש. מרחיבים את האפשרויות.</p>
       <ScrollFloat effect="float" splitBy="words" textClassName="vision-title" scrollStart="top 94%" scrollEnd="bottom 52%" animationDuration={0.8}>הלימוד נשאר במרכז. כל השאר נבנה סביבו.</ScrollFloat>
       <p className="vision-description">לא להחליף ספרים במשהו זר. להעמיד לרשות הלומד ספרייה, מקום מסודר לכתוב בו את מחשבותיו, וסוכן AI עם כלי עבודה — בסביבה אחת שנבנית בהדרגה עבור לימוד רציני, עיון ומחקר.</p>
     </div>
     <div className="image-story wrap">
       <div className="story-visual"><img src="./study-hall.jpg" alt="הדמיית אייפד לצד ספרים על שולחן בבית מדרש" loading="lazy"/><div className="story-image-vignette"/><span className="story-photo-label">הדמיית אווירה — לא צילום המוצר הסופי</span></div>
       <div className="story-copy">
         <span className="mini-line"/>
         <h3>שלושה כלים.<br/><em>כיוון אחד.</em></h3>
         <p>אוצריא למקורות. Pinkha לכתיבה ולארגון הידע. Hanlin לשאלות ולכלים. כל אחד קיים כמסלול פיתוח נפרד; החיבור ביניהם הוא חלק מהחזון ולא מוצג כאן כמוצר שכבר הושלם.</p>
         <a className="inline-link" href="#apps">היכרות עם כל אפליקציה <ArrowLeft size={16}/></a>
       </div>
     </div>
   </section>
   <ProductSuite/>
   <section className="moment-strip" aria-label="סביבת לימוד תורנית">
     <div className="wrap"><div className="moment-frame">
       <img src="./study-desk.jpg" alt="הדמיה של שולחן לימוד עם גמרא ואייפד" loading="lazy" decoding="async"/><div className="moment-shade" aria-hidden="true"/>
       <div className="moment-copy"><p className="small-label">לימוד שנמשך איתך</p>
         <ScrollFloat effect="float" splitBy="words" textClassName="moment-title" scrollStart="top 96%" scrollEnd="bottom 58%" animationDuration={0.8}>עולם של ספרים. מרחב של מחשבה.</ScrollFloat>
         <p>בבית המדרש, ליד השולחן ובכל מקום שבו מתעוררת שאלה — אותם ספרים, אותן מחשבות וכלים שמתאימים לדרך הלימוד שלך.</p>
         <a className="inline-link" href="#journey">בואו למסע הלימוד <ArrowLeft size={16}/></a>
         <span className="moment-caption">תמונת אווירה להמחשה</span>
       </div>
     </div></div>
   </section>
   <section className="features-section" id="features">
     <div className="wrap">
       <div className="section-kicker">02 / מה כבר נמצא בפרויקטים</div>
       <div className="section-heading-row">
         <div><p className="small-label">לא מילים באוויר</p><h2>ספרים. כתיבה.<br/><span>כלי AI.</span></h2></div>
         <p>המוצרים מפותחים בפועל, אבל בשלבים שונים. התצוגות באתר מבדילות בין צילום מסך אמיתי להמחשה של פיצ'ר או תהליך שעדיין בבדיקה.</p>
       </div>
       <div className="features-grid">
         <SpotlightCard className="feature-card" spotlightColor="rgba(128,86,16,.3)" borderGlow={0.25} ambient>
           <div className="feature-no">01</div><div className="feature-icon"><LibraryBig size={22}/></div><h3>אוצריא</h3>
           <p>ספרייה תורנית, מסכי קריאה בעברית, חיפוש, תוכן עניינים וכלי עיון שניתן לראות בצילומי האפליקציה.</p>
           <div className="feature-decoration"><BookOpen/><BookMarked/><BookText/></div>
         </SpotlightCard>
         <SpotlightCard className="feature-card" spotlightColor="rgba(128,86,16,.3)" borderGlow={0.25} ambient>
           <div className="feature-no">02</div><div className="feature-icon"><NotebookPen size={22}/></div><h3>Pinkha</h3>
           <p>עורך מבוסס Anytype, סוגי כתיבה לחידוש, מאמר ומחקר וקישור למקורות תורניים בשלבי הרחבה ובדיקת iPad.</p>
           <div className="feature-decoration"><PenLine/><Link2/><Check/></div>
         </SpotlightCard>
         <SpotlightCard className="feature-card" spotlightColor="rgba(156,39,176,.24)" borderGlow={0.25} ambient>
           <div className="feature-no">03</div><div className="feature-icon"><Sparkles size={22}/></div><h3>Hanlin AI</h3>
           <p>סביבת סוכן וצ׳אט עם כלים, Skills ומיני־אפליקציות; אפשרויות החיבור וההתאמה למכשיר נבדקות ומפותחות.</p>
           <div className="feature-decoration"><Search/><span className="feature-note">כלים ומיומנויות</span><Sparkles/></div>
         </SpotlightCard>
       </div>
       <p className="features-disclaimer">תצוגת מוצר בפיתוח · אין לראות בתיאור התחייבות לזמינות, לתכונה סופית או לאינטגרציה בין האפליקציות.</p>
     </div>
   </section>
   <HorizontalJourney/>
   <section className="experience-stage" id="demo">
     <div className="wrap">
       <div className="section-kicker">05 / אוצריא — מתוך האפליקציה</div>
       <div className="experience-intro"><p className="small-label">צילומי מסך אמיתיים מגרסת הבדיקה</p>
         <h2>לא דמיון.<br/><span>כך נראה הלימוד.</span></h2>
         <p>בחרו בין מסכי הקריאה, החיפוש וכלי העיון של אוצריא באייפד.</p>
       </div>
       <div className="showcase-shell">
         <BorderBeam colorFrom="#805610" colorTo="#d7ccc8" size={190} duration={13}/>
         <div className="showcase-menu">
          {panels.map((p,i)=><button type="button" key={p.tab} className={'showcase-tab '+(selected===i?'active':'')} onClick={()=>setSelected(i)} aria-pressed={selected===i}><p.icon size={17}/>{p.tab}</button>)}
         </div>
         <div className="showcase-grid">
           <div className="showcase-copy">
             <div className="showcase-count">0{selected+1} / 03</div>
             <AnimatePresence mode="wait" initial={false}><motion.div key={selected} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.32}}>
               <h3>{panels[selected].title}</h3><p>{panels[selected].lead}</p>
             </motion.div></AnimatePresence>
             <div className="showcase-caption"><span className="caption-dot"/>אוצריא באייפד · גרסת בדיקה</div>
           </div>
           <div className="showcase-device">
             <AnimatePresence mode="wait" initial={false}><motion.div key={selected} className="actual-shot-frame" initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:1.02}} transition={{duration:.4}}>
               <img src={panels[selected].image} alt={panels[selected].alt} loading="lazy"/>
             </motion.div></AnimatePresence>
           </div>
         </div>
       </div>
     </div>
   </section>
   <StoryCarousel/>
   <section className="audience-section" id="audience">
     <div className="wrap">
       <div className="section-kicker">07 / למי זה נבנה</div>
       <div className="audience-layout">
         <div className="audience-title"><p className="small-label">הכלי צריך להתאים ללומד. לא להפך.</p><h2>לכל מי<br/>שהלימוד <em>בוער בו.</em></h2><p>אברכים, לומדים וחוקרים — אנשים שרוצים להתעמק בסוגיה, לכתוב, לסדר את הידע ולהמשיך לחקור.</p></div>
         <div className="audience-items">
           <div className="audience-item"><span>א</span><div><h3>אברכים ולומדי בית המדרש</h3><p>ספרייה, עיון רציף וחיפוש בתוך המקורות.</p></div><ArrowUpLeft size={18}/></div>
           <div className="audience-item"><span>ב</span><div><h3>כותבי חידושים ומאמרים</h3><p>כתיבה, ארגון מחשבות וקשרים למראי מקומות.</p></div><ArrowUpLeft size={18}/></div>
           <div className="audience-item"><span>ג</span><div><h3>חוקרים ויוצרי ידע תורני</h3><p>מחקר מורכב, חיפוש, תיעוד וכלי סוכן מתקדמים.</p></div><ArrowUpLeft size={18}/></div>
         </div>
       </div>
     </div>
   </section>
   <section className="final-section" id="contact">
     <div className="final-light" aria-hidden="true"><LightRays raysOrigin="bottom-center" raysColor="#927b54" lightSpread={.7} intensity={.42} glow={.3} raysSpeed={.18} followMouse={false}/></div>
     <div className="final-inner wrap">
       <span className="final-symbol">ע</span><p className="small-label">חזון שהופך לכלים אמיתיים</p>
       <h2>יותר מקום <em>ללמוד.</em><br/>יותר עומק לחשוב.</h2>
       <p>אוצריא, Pinkha ו־Hanlin — שלושה מסלולי פיתוח בדרך לסביבת לימוד תורנית מתקדמת.</p>
       <a className="button-primary" href="#apps">גלו את שלוש האפליקציות <ArrowUpLeft size={16}/></a>
     </div>
   </section>
  </main>
  <footer className="footer"><div className="wrap footer-row">
   <span>האייפד של הלומד · תצוגת קונספט</span><span>יכולות ותצוגות בכפוף לגרסאות הפיתוח והבדיקות</span>
   <a href="https://zayitapp.com/" target="_blank" rel="noreferrer">Powered by the technologies that drive Zayit — zayitapp.com</a>
  </div></footer>
 </div>
}
