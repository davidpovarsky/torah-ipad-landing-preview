import { useState } from 'react'
import { ArrowDownLeft, ArrowLeft, ArrowUpLeft, BookOpen, BookMarked, Bookmark, Check, ChevronLeft, Columns3, FileSearch, Highlighter, LibraryBig, Menu, NotebookPen, PenLine, Search, X } from 'lucide-react'
import LightRays from './components/LightRays'
import BlurText from './components/BlurText'
import ScrollFloat from './components/ScrollFloat'
import SpotlightCard from './components/SpotlightCard'
import { BorderBeam } from './components/ui/border-beam'
import HorizontalJourney from './components/HorizontalJourney'
import StoryCarousel from './components/StoryCarousel'
import './immersive.css'

const panels = [
  { tab: 'לימוד', title: 'הדף במרכז', lead: 'מקום שקט לקרוא, להתעמק ולחזור אל הסוגיה.', icon: BookOpen },
  { tab: 'מקורות', title: 'לראות את ההקשרים', lead: 'לחשוב על הסוגיה עם ספרים ומראי מקומות לצידה.', icon: Columns3 },
  { tab: 'מחקר', title: 'לגלות קשרים חדשים', lead: 'רעיונות, הערות וכיוונים לעבודת העיון שלך.', icon: FileSearch },
] as const

const sampleLines = [
  'שניים אוחזין בטלית, זה אומר אני מצאתיה וזה אומר אני מצאתיה.',
  'זה אומר כולה שלי וזה אומר כולה שלי, זה ישבע שאין לו בה פחות מחציה',
  'וזה ישבע שאין לו בה פחות מחציה, ויחלוקו.',
  'היו שנים רוכבין על גבי בהמה, או שהיה אחד רוכב ואחד מנהיג',
  'זה אומר כולה שלי וזה אומר כולה שלי, זה ישבע שאין לו בה פחות מחציה.',
]

function StudyScreen({ view = 0 }: { view?: number }) {
  return <div className="study-os" dir="rtl" aria-label="הדמיה עיצובית של ממשק אייפד ללימוד תורה">
    <div className="study-status"><span>9:41</span><span className="os-mini">●●●  ▰</span></div>
    <div className="study-toolbar">
      <div className="study-toolbar-brand"><span className="os-logo">ע</span><span>ספריית הלימוד</span></div>
      <span className="os-toolbar-actions"><Search size={15}/><Bookmark size={15}/><Columns3 size={15}/></span>
    </div>
    <div className="study-layout">
      <aside className="study-sidebar">
        <div className="study-sidebar-label">הספרייה שלי</div>
        {['תלמוד בבלי','ראשונים','אחרונים','הלכה למעשה','מחברות'].map((label,i) =>
          <div className={'study-side-row '+(i===(view===2?4:0)?'selected':'')} key={label}>
            <BookOpen size={13}/><span>{label}</span>
          </div>
        )}
        <div className="study-side-bottom"><span>סביבת עיון אישית</span><span className="green-dot"/></div>
      </aside>
      <section className="study-content">
        <div className="study-breadcrumb">ספרייה <ChevronLeft size={10}/> תלמוד בבלי <ChevronLeft size={10}/> בבא מציעא</div>
        <div className="study-doc-head"><span>בבא מציעא</span><small>דף ב, עמוד א</small></div>
        <div className="study-rule"/>
        {view === 2 ? <div className="study-note"><span className="note-label">מחברת העיון</span><h4>נקודות למחשבה</h4><p>מה יסוד טענת המוחזקות? עיון בדברי הראשונים והשוואת השיטות.</p><div className="note-rule"/><p>מראה מקום: בבא מציעא ב ע״א</p><div className="note-rule short"/></div> :
          <div className="gemara-text">
            <p><strong>מתני׳</strong> {sampleLines[0]} {sampleLines[1]}</p>
            <p className={view===1?'passage-highlight':''}>{sampleLines[2]}</p>
            <p>{sampleLines[3]} {sampleLines[4]}</p>
          </div>
        }
        {view === 1 && <div className="source-pop"><span>מראי מקומות</span><strong>רש״י · תוספות · רמב״ם</strong></div>}
        <div className="study-bottom-bar"><Highlighter size={13}/><PenLine size={13}/><BookMarked size={13}/><span>אזור המחשה בלבד</span></div>
      </section>
    </div>
  </div>
}

function Device({ view=0, small=false }: { view?: number; small?: boolean }) {
  return <div className={'device '+(small?'device-small':'')}>
    <div className="device-camera"/>
    <StudyScreen view={view}/>
  </div>
}

function Header() {
  const [menuOpen,setMenuOpen]=useState(false)
  return <header className="topbar">
    <a className="brand" href="#top" aria-label="חזרה לראש העמוד"><span className="brand-symbol">ע</span><span>האייפד של הלומד</span></a>
    <nav className={'main-nav '+(menuOpen?'is-open':'')} aria-label="ניווט ראשי">
      <a href="#vision" onClick={()=>setMenuOpen(false)}>החזון</a>
      <a href="#journey" onClick={()=>setMenuOpen(false)}>חוויית הלימוד</a>
      <a href="#audience" onClick={()=>setMenuOpen(false)}>למי זה מתאים</a>
    </nav>
    <a className="header-cta" href="#journey">הצצה למוצר <ArrowUpLeft size={15}/></a>
    <button className="mobile-menu" type="button" aria-label="פתיחת תפריט" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
  </header>
}

function App() {
  const [selected,setSelected] = useState(0)
  return <div className="site" id="top" dir="rtl">
    <div className="noise-overlay" aria-hidden="true"/>
    <Header/>
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-light" aria-hidden="true">
          <LightRays raysOrigin="top-center" raysColor="#d3a76b" raysSpeed={0.36} lightSpread={0.85} rayLength={1.9} glow={0.32} haze={0.16} intensity={0.55} followMouse={true} mouseInfluence={0.18} fadeDistance={1.5} opacity={0.72}/>
        </div>
        <div className="hero-grid wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-mark"/> רעיון חדש לעולם הלימוד</div>
            <h1 id="hero-title"><span className="hero-small">כשהעולם של תורה</span><span className="hero-emphasis">פוגש אפשרויות<br/> חדשות.</span></h1>
            <BlurText text="אייפד שנועד להעניק ללומד מרחב של עיון, מחשבה וגילוי — בלי לוותר על התחושה של בית המדרש." animateBy="words" effect="blur" trigger="load" delay={40} blur={0} distance={10} stepDuration={0.35} className="hero-description"/>
            <div className="hero-actions">
              <a className="button-primary" href="#journey">גלו את חוויית הלימוד <ArrowDownLeft size={18}/></a>
              <a className="button-text" href="#vision">מה עומד מאחורי הרעיון <ArrowLeft size={16}/></a>
            </div>
            <div className="hero-footnote"><span className="fine-line"/><span>מחשבה מסורתית. חוויה עכשווית.</span></div>
          </div>
          <div className="hero-product">
            <div className="hero-halo"/>
            <div className="hero-device"><Device/></div>
            <div className="hero-tile hero-tile-one"><BookOpen size={17}/><div><b>עיון בספרים</b><small>דף פתוח. מחשבה פתוחה.</small></div></div>
            <div className="hero-tile hero-tile-two"><NotebookPen size={17}/><div><b>לכתוב, לשמור, לחזור</b><small>רעיונות ליד המקור</small></div></div>
            <span className="product-caption">הדמיה עיצובית להמחשת החזון</span>
          </div>
        </div>
        <a className="scroll-cue" href="#vision"><span>גללו וגלו</span><ArrowDownLeft size={15}/></a>
      </section>

      <section className="vision-section" id="vision">
        <div className="section-kicker">01 / החזון</div>
        <div className="vision-copy wrap">
          <p className="small-label">לא עוד גאדג׳ט.</p>
          <ScrollFloat effect="float" splitBy="words" textClassName="vision-title" scrollStart="top 94%" scrollEnd="bottom 52%" animationDuration={0.8}>מקום חדש להיות בו עם הסוגיה.</ScrollFloat>
          <p className="vision-description">אנחנו אוהבים את הספר הפתוח, את העיון השקט ואת הרגע שבו שני מקורות מתחברים לרעיון אחד. האייפד הזה נולד מתוך השאלה: איך מעניקים ללומד כלי עכשווי שמכבד בדיוק את העולם הזה?</p>
        </div>
        <div className="image-story wrap">
          <div className="story-visual">
            <img src="./study-hall.jpg" alt="הדמיית אייפד לצד ספרים פתוחים על שולחן לימוד בבית מדרש" loading="lazy"/>
            <div className="story-image-vignette"/>
            <span className="story-photo-label">המחשה חזותית · סביבת לימוד</span>
          </div>
          <div className="story-copy">
            <span className="mini-line"/>
            <h3>הטכנולוגיה בצד.<br/><em>התורה במרכז.</em></h3>
            <p>לא צריך לשנות את הדרך שבה לומדים כדי ליהנות מכלים חדשים. צריך לעצב אותם סביב הקשב, ההרגלים והצרכים האמיתיים של הלומד.</p>
            <a className="inline-link" href="#journey">ראו את הרעיון בפעולה <ArrowLeft size={16}/></a>
          </div>
        </div>
      </section>


      <section className="moment-strip" aria-label="&#x5de;&#x5d1;&#x5d8; &#x5d0;&#x5dc; &#x5d7;&#x5d5;&#x5d5;&#x5d9;&#x5d9;&#x5ea; &#x5d4;&#x5dc;&#x5d9;&#x5de;&#x5d5;&#x5d3;">
        <div className="wrap">
          <div className="moment-frame">
            <img src="./study-desk.jpg" alt="&#x5d0;&#x5d9;&#x5d9;&#x5e4;&#x5d3; &#x5e2;&#x5dc; &#x5e9;&#x5d5;&#x5dc;&#x5d7;&#x5df; &#x5dc;&#x5d9;&#x5de;&#x5d5;&#x5d3; &#x5dc;&#x5e6;&#x5d3; &#x5d2;&#x5de;&#x5e8;&#x5d0; &#x5e4;&#x5ea;&#x5d5;&#x5d7;&#x5d4;, &#x5e1;&#x5e4;&#x5e8;&#x5d9;&#x5dd; &#x5d5;&#x5e2;&#x5d8;" loading="lazy" decoding="async"/>
            <div className="moment-shade" aria-hidden="true"/>
            <div className="moment-copy">
              <p className="small-label">&#x5d4;&#x5e8;&#x5d2;&#x5e2; &#x5e9;&#x5d1;&#x5d5; &#x5d4;&#x5db;&#x5d5;&#x5dc; &#x5de;&#x5ea;&#x5d7;&#x5d1;&#x5e8;</p>
              <ScrollFloat effect="float" splitBy="words" textClassName="moment-title" scrollStart="top 96%" scrollEnd="bottom 58%" animationDuration={0.8}>&#x5e2;&#x5d5;&#x5dc;&#x5dd; &#x5e9;&#x5dc; &#x5e1;&#x5e4;&#x5e8;&#x5d9;&#x5dd;. &#x5d1;&#x5d9;&#x5d3;&#x5d9;&#x5d9;&#x5dd; &#x5e9;&#x5dc;&#x5da;.</ScrollFloat>
              <p>&#x5d4;&#x5d0;&#x5d5;&#x5d5;&#x5d9;&#x5e8;&#x5d4; &#x5e9;&#x5dc; &#x5d1;&#x5d9;&#x5ea; &#x5d4;&#x5de;&#x5d3;&#x5e8;&#x5e9;, &#x5d4;&#x5e2;&#x5d5;&#x5de;&#x5e7; &#x5e9;&#x5dc; &#x5d4;&#x5e1;&#x5e4;&#x5e8;&#x5d9;&#x5dd;, &#x5d5;&#x5d4;&#x5e0;&#x5d5;&#x5d7;&#x5d5;&#x5ea; &#x5e9;&#x5dc; &#x5db;&#x5dc;&#x5d9; &#x5d0;&#x5d7;&#x5d3; &#x5e9;&#x5de;&#x5d0;&#x5e4;&#x5e9;&#x5e8; &#x5dc;&#x5d4;&#x5de;&#x5e9;&#x5d9;&#x5da; &#x5d0;&#x5ea; &#x5d4;&#x5e2;&#x5d9;&#x5d5;&#x5df; &#x5d1;&#x5db;&#x5dc; &#x5de;&#x5e7;&#x5d5;&#x5dd;.</p>
              <a className="inline-link" href="#journey">&#x5d2;&#x5dc;&#x5d5; &#x5d0;&#x5ea; &#x5d7;&#x5d5;&#x5d5;&#x5d9;&#x5d9;&#x5ea; &#x5d4;&#x5dc;&#x5d9;&#x5de;&#x5d5;&#x5d3; <ArrowLeft size={16}/></a>
              <span className="moment-caption">&#x5d4;&#x5d3;&#x5de;&#x5d9;&#x5d9;&#x5ea; &#x5e7;&#x5d5;&#x5e0;&#x5e1;&#x5e4;&#x5d8; &#x5dc;&#x5d4;&#x5de;&#x5d7;&#x5e9;&#x5d4; &#x5d1;&#x5dc;&#x5d1;&#x5d3;</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="wrap">
          <div className="section-kicker">02 / עולם של אפשרויות</div>
          <div className="section-heading-row"><div><p className="small-label">לכל שלב בלימוד</p><h2>כל מה שחשוב.<br/><span>בלי מה שמפריע.</span></h2></div><p>שלוש נקודות מבט על חוויית לימוד דיגיטלית שנבנית סביב ספרים, מחקר ומחשבה.</p></div>
          <div className="features-grid">
            <SpotlightCard className="feature-card" spotlightColor="rgba(209,165,97,.21)" borderGlow={0.25} ambient>
              <div className="feature-no">01</div><div className="feature-icon"><LibraryBig size={22}/></div>
              <h3>עולם הספרים</h3><p>להרגיש את הספרייה סביבך — עם דרך פשוטה לעבור בין טקסטים ולשמור על רצף הלימוד.</p>
              <div className="feature-decoration"><BookOpen/><BookMarked/><BookOpen/></div>
            </SpotlightCard>
            <SpotlightCard className="feature-card" spotlightColor="rgba(209,165,97,.21)" borderGlow={0.25} ambient>
              <div className="feature-no">02</div><div className="feature-icon"><FileSearch size={22}/></div>
              <h3>עיון שמעמיק</h3><p>מקורות זה לצד זה, הקשרים ודפוסי חשיבה שמזמינים לחקור עוד קצת.</p>
              <div className="feature-decoration"><Search/><span>בבא מציעא</span><ChevronLeft/></div>
            </SpotlightCard>
            <SpotlightCard className="feature-card" spotlightColor="rgba(209,165,97,.21)" borderGlow={0.25} ambient>
              <div className="feature-no">03</div><div className="feature-icon"><NotebookPen size={22}/></div>
              <h3>המחשבה שלך</h3><p>מקום לרשום, לארגן ולשוב אל שאלות, מחשבות וחידושים בזמן שמתאים לך.</p>
              <div className="feature-decoration"><PenLine/><span className="feature-note">הערת לימוד אישית</span><Check/></div>
            </SpotlightCard>
          </div>
          <p className="features-disclaimer">הדגמות רעיוניות בלבד. היכולות והיישומים הסופיים ייקבעו בהתאם לתצורת המוצר.</p>
        </div>
      </section>

<section className="experience-section" id="experience"><div className="wrap"><div className="section-kicker">03 / לגלות מקרוב</div>
</div></section>

      <HorizontalJourney/>
      <section className="experience-stage" id="demo">
        <div className="wrap">
          <div className="section-kicker">04 / לגלות מקרוב</div>
          <div className="experience-intro"><p className="small-label">הצצה למסך הלימוד</p><h2>מרגיש מוכר.<br/><span>פותח עולם חדש.</span></h2><p>בחרו מה להציג וגלו איך עשויה להיראות סביבת עיון שמחברת ספר, מקור ומחשבה.</p></div>
          <div className="showcase-shell">
            <BorderBeam colorFrom="#e8c48c" colorTo="#765631" size={190} duration={12}/>
            <div className="showcase-menu">
              {panels.map((panel,index)=><button type="button" key={panel.tab} className={'showcase-tab '+(selected===index?'active':'')} onClick={()=>setSelected(index)} aria-pressed={selected===index}><panel.icon size={17}/>{panel.tab}</button>)}
            </div>
            <div className="showcase-grid">
              <div className="showcase-copy">
                <div className="showcase-count">0{selected+1} / 03</div>
                <h3>{panels[selected].title}</h3>
                <p>{panels[selected].lead}</p>
                <div className="showcase-caption"><span className="caption-dot"/>ממשק הדמיה, לא צילום של מוצר מוגמר</div>
              </div>
              <div className="showcase-device"><Device view={selected} small/></div>
            </div>
          </div>
        </div>
      </section>
      <StoryCarousel/>
      <section className="audience-section" id="audience">
        <div className="wrap">
          <div className="section-kicker">07 / למי זה מתאים</div>
          <div className="audience-layout">
            <div className="audience-title"><p className="small-label">כי לכל לימוד יש קצב משלו</p><h2>לכל מי<br/>שרוצה <em>להעמיק.</em></h2><p>החזון מתחיל באדם שלומד: ברצון להבין, לברר, לקשר ולגלות.</p></div>
            <div className="audience-items">
              <div className="audience-item"><span>א</span><div><h3>לאברכים ולבני ישיבה</h3><p>לימוד יום־יומי, חזרה ועיון בסוגיות.</p></div><ArrowUpLeft size={18}/></div>
              <div className="audience-item"><span>ב</span><div><h3>לתלמידי חכמים ולמגידי שיעורים</h3><p>הכנת שיעורים ומפגש נוח עם מקורות.</p></div><ArrowUpLeft size={18}/></div>
              <div className="audience-item"><span>ג</span><div><h3>ללומדים ולחוקרים</h3><p>עבודה מסודרת עם טקסטים, שאלות ורעיונות.</p></div><ArrowUpLeft size={18}/></div>
            </div>
          </div>
        </div>
      </section>
      <section className="final-section" id="contact">
        <div className="final-light" aria-hidden="true"><LightRays raysOrigin="bottom-center" raysColor="#cfa66c" lightSpread={0.7} intensity={0.45} glow={0.3} raysSpeed={0.2} followMouse={false}/></div>
        <div className="final-inner wrap">
          <span className="final-symbol">ע</span><p className="small-label">מסע חדש בעולם הלימוד</p>
          <h2>יותר מקום <em>לתורה.</em><br/>יותר מקום למחשבה.</h2>
          <p>בין הדף הישן למסך החדש — יש אפשרות ליצור משהו מיוחד.</p>
          <a className="button-primary" href="#top">חזרה לתחילת החוויה <ArrowUpLeft size={16}/></a>
        </div>
      </section>
    </main>
    <footer className="footer">
      <div className="wrap footer-row"><span>האייפד של הלומד · תצוגת קונספט</span><span>התמונות והממשקים הם המחשה רעיונית בלבד.</span><a href="https://zayitapp.com/" target="_blank" rel="noreferrer">Powered by the technologies that drive Zayit — https://zayitapp.com/</a></div>
    </footer>
  </div>
}
export default App
