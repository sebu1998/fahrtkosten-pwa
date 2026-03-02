# SOULY — Figma Design Briefing

Dieses Dokument dient als vollständige Referenz für das UI/UX Design der Souly App in Figma.

---

## 1. Design System

### 1.1 Farbpalette

#### Primary (Violett)
```
Violet 50:   #F5F3FF   — Hintergründe, Hover-States
Violet 100:  #EDE9FE   — Leichte Akzente, Tags
Violet 200:  #DDD6FE   — Sekundäre Buttons, Badges
Violet 300:  #C4B5FD   — Icons (inaktiv)
Violet 400:  #A78BFA   — Sekundärfarbe, Grafiken
Violet 500:  #8B5CF6   — Hover auf Primary Buttons
Violet 600:  #7C3AED   — PRIMARY — Buttons, Links, Akzente
Violet 700:  #6D28D9   — Active/Pressed States
Violet 800:  #5B21B6   — Dark Mode Primary
Violet 900:  #4C1D95   — Dark Mode Akzente
```

#### Neutrals
```
White:       #FFFFFF   — Cards, Modals
Warm White:  #FAFAF9   — Page Background
Stone 100:   #F5F5F4   — Input Backgrounds, Dividers
Stone 200:   #E7E5E4   — Borders, Separators
Stone 300:   #D6D3D1   — Disabled States
Stone 400:   #A8A29E   — Placeholder Text
Stone 500:   #78716C   — Secondary Text
Stone 600:   #57534E   — Body Text
Stone 800:   #292524   — Headings
Stone 900:   #1C1917   — Primary Text
```

#### Semantische Farben
```
Success:     #10B981   — Emerald 500 (Ziele erreicht, positive Trends)
Warning:     #F59E0B   — Amber 500 (Limits fast erreicht)
Error:       #EF4444   — Red 500 (Fehler, Validierung)
Info:        #3B82F6   — Blue 500 (Hinweise, Tipps)
```

#### Stimmungs-Farben (Mood Tracker)
```
Großartig:   #10B981   — Emerald 500 + 😄
Gut:         #34D399   — Emerald 400 + 🙂
Neutral:     #FBBF24   — Amber 400 + 😐
Schlecht:    #FB923C   — Orange 400 + 😟
Sehr schlecht: #EF4444 — Red 500 + 😢
```

#### Modul-Farben (für Icons & Akzente pro Modul)
```
Journal:     #7C3AED   — Violet 600
Essen:       #10B981   — Emerald 500
Rezepte:     #F59E0B   — Amber 500
Fitness:     #3B82F6   — Blue 500
Coach:       #EC4899   — Pink 500
```

### 1.2 Typografie

**Font-Familie**: Inter (Google Fonts — kostenlos, excellent readability)

| Stil | Größe | Gewicht | Line Height | Verwendung |
|---|---|---|---|---|
| H1 | 28px | Bold (700) | 36px | Screen-Titel |
| H2 | 24px | SemiBold (600) | 32px | Sections |
| H3 | 20px | SemiBold (600) | 28px | Card-Titel, Unterabschnitte |
| H4 | 17px | SemiBold (600) | 24px | Listen-Items, Labels |
| Body Large | 17px | Regular (400) | 26px | Haupttext, Journal-Einträge |
| Body | 15px | Regular (400) | 22px | Standard-Text |
| Body Small | 13px | Regular (400) | 18px | Sekundärtext, Timestamps |
| Caption | 11px | Medium (500) | 16px | Labels, Badges, Chips |
| Button | 15px | SemiBold (600) | 20px | Button-Text |
| Tab | 11px | Medium (500) | 16px | Tab-Bar Labels |

### 1.3 Spacing System (8px Grid)

```
4px   — xs   — Inline-Spacing, Icon-Text Gap
8px   — sm   — Compact spacing innerhalb von Components
12px  — md   — Standard inner padding
16px  — lg   — Card padding, List-Item padding
20px  — xl   — Section spacing
24px  — 2xl  — Screen padding (horizontal)
32px  — 3xl  — Section gaps
40px  — 4xl  — Große Abstände
48px  — 5xl  — Abstand vor Footer
```

### 1.4 Border Radius

```
4px   — Small   — Chips, Tags, Badges
8px   — Medium  — Inputs, kleine Buttons
12px  — Large   — Cards, große Buttons
16px  — XL      — Modals, Bottom Sheets
24px  — Full    — Avatare, Mood-Picker
9999px — Pill   — Pill-Buttons, Tabs
```

### 1.5 Schatten (Elevation)

```
Shadow SM:  0 1px 2px rgba(0,0,0,0.05)          — Inputs, Chips
Shadow MD:  0 4px 6px -1px rgba(0,0,0,0.1)       — Cards, erhöhte Elemente
Shadow LG:  0 10px 15px -3px rgba(0,0,0,0.1)     — Modals, Dropdowns
Shadow XL:  0 20px 25px -5px rgba(0,0,0,0.1)     — Bottom Sheets
```

### 1.6 Icons

**Empfehlung**: Lucide Icons (lucide.dev)
- Stil: Outline, 24x24px, 1.5px Stroke
- Konsistent, modern, große Bibliothek
- Open Source

**Tab-Bar Icons** (Bottom Navigation):
- Home: `Home` / `LayoutDashboard`
- Journal: `BookHeart` / `NotebookPen`
- Nutrition: `Apple` / `UtensilsCrossed`
- Fitness: `Dumbbell` / `Activity`
- Profile: `User` / `CircleUser`

---

## 2. Component Library

### 2.1 Buttons

#### Primary Button
```
- Background: Violet 600 (#7C3AED)
- Text: White, 15px SemiBold
- Padding: 12px 24px
- Border Radius: 12px
- Height: 48px
- Hover: Violet 500
- Pressed: Violet 700
- Disabled: Stone 300 bg, Stone 400 text
```

#### Secondary Button
```
- Background: Violet 50 (#F5F3FF)
- Text: Violet 600, 15px SemiBold
- Border: 1px Violet 200
- Padding: 12px 24px
- Border Radius: 12px
- Height: 48px
```

#### Ghost Button
```
- Background: Transparent
- Text: Violet 600, 15px SemiBold
- No border
- Padding: 12px 24px
```

#### Danger Button
```
- Background: Red 500 (#EF4444)
- Text: White, 15px SemiBold
- Für: Löschen, Abbrechen
```

#### FAB (Floating Action Button)
```
- Background: Violet 600
- Icon: White, 24px
- Size: 56x56px
- Border Radius: 16px
- Shadow: Shadow LG
- Position: Bottom Right, 24px Margin
```

### 2.2 Cards

#### Standard Card
```
- Background: White
- Border Radius: 12px
- Padding: 16px
- Shadow: Shadow MD
- Kein Border
```

#### Journal Entry Card
```
- Standard Card +
- Mood Indicator (farbiger Dot links oben)
- Datum + Uhrzeit (Caption, Stone 500)
- Text Preview (Body, max 3 Zeilen)
- Tags (Chips unten)
- Optional: Foto-Thumbnail (rechts, 64x64, rounded 8px)
```

#### Meal Card (Nutrition)
```
- Standard Card +
- Mahlzeit-Typ Icon + Label (z.B. 🍳 Frühstück)
- Food-Items Liste
- Kalorien-Summe (rechts, Bold, Violet 600)
- Makro-Bar (kleiner farbiger Fortschrittsbalken)
```

#### Workout Card
```
- Standard Card +
- Workout-Name (H4)
- Dauer + Übungszahl (Caption)
- Datum (Caption, Stone 500)
- Fortschritts-Indikator (optional)
```

### 2.3 Input Fields

#### Text Input
```
- Background: Stone 100
- Border: 1px Stone 200 (Focus: Violet 600)
- Border Radius: 8px
- Padding: 12px 16px
- Height: 48px
- Placeholder: Stone 400
- Text: Stone 900, 15px Regular
- Label: über dem Input, 13px Medium, Stone 600
```

#### Text Area (Journal)
```
- Wie Text Input, aber multi-line
- Min Height: 120px
- Max Height: 400px (scrollbar)
```

#### Search Input
```
- Wie Text Input +
- Search Icon links (Stone 400)
- Clear Button rechts (X Icon)
- Border Radius: 9999px (Pill)
```

### 2.4 Mood Picker

```
Layout: Horizontal, 5 Kreise nebeneinander
Jeder Kreis:
  - Size: 56x56px
  - Background: jeweilige Mood-Farbe (leicht, 10% opacity)
  - Emoji: 28px zentriert
  - Label darunter: 11px, Caption

  Selected State:
  - Background: jeweilige Mood-Farbe (100%)
  - Scale: 1.1
  - Shadow: Shadow MD in Mood-Farbe

  Emojis: 😄 🙂 😐 😟 😢
  Labels: Großartig / Gut / Okay / Schlecht / Mies
```

### 2.5 Nutrition Components

#### Makro-Ring (Donut Chart)
```
- Kreisförmig, 3 Ringe (Protein, Carbs, Fett)
- Protein: Blue 500
- Carbs: Amber 500
- Fett: Red 400
- Zentrum: Kalorien-Zahl (H2) + "kcal" (Caption)
- Size: 160x160px
```

#### Makro-Bar (klein)
```
- Horizontal, 3 Segmente
- Height: 6px
- Border Radius: Full
- Gleiche Farben wie Ring
```

#### Food Item Row
```
- Left: Food Name (Body) + Menge (Caption, Stone 500)
- Right: Kalorien (Body, SemiBold)
- Height: 56px
- Divider: 1px Stone 200 unten
- Swipe Left: Delete (Red)
```

### 2.6 Tags / Chips

```
- Background: Violet 100 (oder Modul-Farbe Light)
- Text: Violet 700, 11px Medium
- Padding: 4px 10px
- Border Radius: 4px
- Optional: X-Button zum Entfernen
```

### 2.7 Bottom Sheet

```
- Background: White
- Border Radius: 16px 16px 0 0
- Handle: 36x4px, Stone 300, zentriert oben, 8px top margin
- Padding: 24px
- Shadow: Shadow XL
- Backdrop: Black 50% opacity
```

### 2.8 Tab Bar (Bottom Navigation)

```
- Background: White
- Height: 83px (inkl. Safe Area)
- Content Height: 49px
- Shadow: Shadow SM (nach oben)
- Border Top: 1px Stone 200

Tab Item:
  - Icon: 24x24px
  - Label: 11px Medium
  - Inactive: Stone 400
  - Active: Violet 600
  - Spacing Icon-Label: 4px

  5 Tabs: Home, Journal, Nutrition, Fitness, Profil
```

### 2.9 Navigation Header

```
- Background: White (oder transparent über Content)
- Height: 44px (ohne Status Bar)
- Title: H4, zentriert
- Left: Back Arrow oder Menu
- Right: Action Icons (max 2)
- Border Bottom: 1px Stone 200 (optional)
```

---

## 3. Screen-by-Screen Design Specs

### 3.1 Splash Screen
```
┌─────────────────────────┐
│                         │
│                         │
│                         │
│        [Souly Logo]     │
│                         │
│   Deine tägliche        │
│   Seelenpflege          │
│                         │
│                         │
│                         │
└─────────────────────────┘

- Background: Gradient Violet 600 → Violet 800
- Logo: Weiß, zentriert
- Tagline: Weiß, 17px, unter Logo
- Animation: Logo fade-in + leichter Scale
```

### 3.2 Onboarding (3 Slides)
```
Slide 1: Journal & Mood
┌─────────────────────────┐
│                         │
│    [Illustration]       │
│    Person schreibt      │
│    Tagebuch             │
│                         │
│  Deine Gedanken,        │
│  dein Safe Space         │
│                         │
│  Halte deine Gedanken   │
│  und Stimmungen fest.   │
│                         │
│     ● ○ ○               │
│                         │
│  [    Weiter     ]      │
│                         │
└─────────────────────────┘

Slide 2: Nutrition & Fitness
- Illustration: Person mit gesundem Essen + Hanteln
- Headline: "Essen & Fitness im Griff"
- Text: "Tracke Kalorien, entdecke Rezepte und logge Workouts."

Slide 3: AI Coach
- Illustration: Freundlicher AI-Avatar
- Headline: "Dein persönlicher Coach"
- Text: "KI-gestützter Mental Health Coach, der dich täglich begleitet."
- Button: "Los geht's" (statt "Weiter")

Design-Notes:
- Illustrationen: Moderne, flat/outline Illustrationen in Violet-Tönen
- Dots Indicator: unten zentriert
- Skip-Button: oben rechts, Ghost
- Button: Primary, volle Breite
```

### 3.3 Login / Register
```
┌─────────────────────────┐
│                         │
│      [Souly Logo]       │
│                         │
│  Willkommen zurück!     │
│                         │
│  ┌───────────────────┐  │
│  │ E-Mail            │  │
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │ Passwort       👁 │  │
│  └───────────────────┘  │
│                         │
│  [   Anmelden    ]      │
│                         │
│  Passwort vergessen?    │
│                         │
│  ─── oder ───           │
│                         │
│  [G] Mit Google         │
│  [] Mit Apple          │
│                         │
│  Noch kein Account?     │
│  Registrieren           │
│                         │
└─────────────────────────┘

- Background: Warm White
- Logo: kleiner als Splash, Violet 600
- Social Buttons: Secondary Style, volle Breite
- Links: Violet 600, unterstrichen
```

### 3.4 Onboarding Quiz
```
Screen 1: "Was sind deine Ziele?"
  - Multi-Select Chips/Cards:
    □ Tagebuch führen
    □ Gesünder essen
    □ Abnehmen / Zunehmen
    □ Fitter werden
    □ Mental Health verbessern
    □ Besserer Schlaf

Screen 2: "Erzähl uns von dir"
  - Geschlecht (Optional)
  - Geburtsjahr
  - Größe (cm)
  - Gewicht (kg)

Screen 3: "Kalorienziel berechnen"
  - Aktivitätslevel (Slider oder Cards)
  - Ziel: Abnehmen / Halten / Zunehmen
  - → Automatische Berechnung anzeigen
  - "Du solltest ca. 2.100 kcal/Tag essen"

Screen 4: "Benachrichtigungen"
  - Morgen Check-in (Toggle + Uhrzeit)
  - Mahlzeiten-Erinnerung (Toggle)
  - Workout-Erinnerung (Toggle)
  - [Benachrichtigungen erlauben]

Design-Notes:
- Progress Bar oben (Violet 600)
- Back-Button links
- "Überspringen" rechts oben
- Jeder Screen hat großen "Weiter" Button unten
```

### 3.5 Home Dashboard
```
┌─────────────────────────┐
│ Hallo, Sebastian 👋     │  ← H2 + Greeting
│ Montag, 3. März         │  ← Caption, Stone 500
├─────────────────────────┤
│ ┌─────────────────────┐ │
│ │ 🔥 12 Tage Streak   │ │  ← Streak Banner
│ │ Weiter so!           │ │     Violet Gradient BG
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ Wie geht's dir?     │ │  ← Quick Mood Check
│ │ 😄 🙂 😐 😟 😢      │ │     Mood Picker inline
│ └─────────────────────┘ │
│                         │
│ Heute                   │  ← Section Header
│ ┌──────┐ ┌──────┐      │
│ │ 1450 │ │  45  │      │  ← Stat Cards (2x2 Grid)
│ │ kcal │ │ min  │      │
│ │Gegess│ │Worko │      │
│ └──────┘ └──────┘      │
│ ┌──────┐ ┌──────┐      │
│ │ 1.2L │ │  😊  │      │
│ │Wasser│ │Stimm │      │
│ └──────┘ └──────┘      │
│                         │
│ Quick Actions           │  ← Section Header
│ [+ Eintrag] [+ Essen]  │  ← Pill Buttons
│ [+ Workout] [💬 Coach]  │
│                         │
│ ┌─────────────────────┐ │
│ │ 💬 Souly Coach       │ │  ← Coach Card
│ │ "Hast du heute schon│ │     Gradient BG
│ │  an etwas Positives │ │
│ │  gedacht?"          │ │
│ │ [Jetzt chatten →]   │ │
│ └─────────────────────┘ │
│                         │
│ Letzte Einträge         │  ← Section Header
│ ┌─────────────────────┐ │
│ │ Journal Entry Card   │ │  ← Letzte 2 Einträge
│ └─────────────────────┘ │
│                         │
│ [🏠] [📓] [🍎] [💪] [👤] │  ← Tab Bar
└─────────────────────────┘

Design-Notes:
- Scrollable, kein Fixed Header (collapsible)
- Stat Cards: leichte Modul-Farben als BG
- Coach Card: Violet Gradient, White Text
- Alles hat sanfte Animations (fade-in on scroll)
```

### 3.6 Journal — Feed
```
┌─────────────────────────┐
│ ← Journal          🔍 📅│  ← Header + Search + Calendar
├─────────────────────────┤
│ Stimmungs-Verlauf       │
│ [Mini-Chart letzte 7T]  │  ← Line Chart, Mood Colors
│                         │
│ Heute                   │  ← Date Divider
│ ┌─────────────────────┐ │
│ │🟢 Guter Tag          │ │  ← Entry Card
│ │ Heute war ein...     │ │
│ │ #dankbar #arbeit  📷 │ │
│ │ 14:30                │ │
│ └─────────────────────┘ │
│                         │
│ Gestern                 │
│ ┌─────────────────────┐ │
│ │🟡 Geht so            │ │
│ │ War ein anstreng...  │ │
│ │ #stress              │ │
│ │ 22:15                │ │
│ └─────────────────────┘ │
│                         │
│                    [+]  │  ← FAB
│ [🏠] [📓] [🍎] [💪] [👤] │
└─────────────────────────┘

- Sortierung: Neueste zuerst
- Pull-to-Refresh
- Infinite Scroll
- FAB: Neuer Eintrag
```

### 3.7 Journal — Neuer Eintrag
```
┌─────────────────────────┐
│ ← Neuer Eintrag  Speich.│
├─────────────────────────┤
│                         │
│ Wie geht's dir?         │
│ 😄  🙂  😐  😟  😢     │  ← Mood Picker
│                         │
│ ┌─────────────────────┐ │
│ │                     │ │
│ │ Schreib deine       │ │  ← Text Area
│ │ Gedanken...         │ │
│ │                     │ │
│ │                     │ │
│ │                     │ │
│ └─────────────────────┘ │
│                         │
│ 📷 Fotos                │
│ [+] [img1] [img2]      │  ← Foto Row (horizontal scroll)
│                         │
│ 🏷️ Tags                 │
│ [dankbar] [arbeit] [+]  │  ← Tag Chips
│                         │
│ 📅 Di, 3. März 2026     │  ← Datum (änderbar)
│ 🕐 14:30                │  ← Uhrzeit (änderbar)
│                         │
└─────────────────────────┘

- Keyboard-aware scrolling
- Auto-Save Draft
- "Speichern" Button: disabled bis Text oder Mood eingegeben
```

### 3.8 Journal — Kalenderansicht
```
┌─────────────────────────┐
│ ← Kalender       < Mär >│
├─────────────────────────┤
│ Mo Di Mi Do Fr Sa So    │
│ .. .. .. .. ..  1  2    │
│  3  4  5  6  7  8  9    │  ← Tage mit Mood-Farb-Dot
│ 10 11 12 13 14 15 16    │
│ 17 18 19 20 21 22 23    │
│ 24 25 26 27 28 29 30    │
│ 31 .. .. .. .. .. ..    │
├─────────────────────────┤
│ 3. März                 │  ← Einträge des gewählten Tags
│ ┌─────────────────────┐ │
│ │ Journal Entry Card   │ │
│ └─────────────────────┘ │
│                         │
└─────────────────────────┘

- Jeder Tag: kleiner farbiger Dot = Stimmung
- Tage ohne Einträge: kein Dot
- Tap auf Tag: zeigt Einträge unten
- Swipe: Monat wechseln
```

### 3.9 Nutrition — Tagesübersicht
```
┌─────────────────────────┐
│ ← Ernährung    < Heute >│
├─────────────────────────┤
│                         │
│    ┌──────────────┐     │
│    │   [Donut]    │     │  ← Makro-Ring
│    │    1450      │     │
│    │    kcal      │     │
│    │  von 2100    │     │
│    └──────────────┘     │
│                         │
│ Protein  Carbs   Fett   │
│  85g     165g    52g    │  ← Makro Bars
│ [====  ] [=====] [=== ] │
│ /120g    /250g   /70g   │
│                         │
│ 💧 Wasser: 1.2L / 2.5L  │  ← Water Tracker
│ [○ ○ ○ ○ ● ● ● ●]     │     Tap to add
│                         │
│ 🍳 Frühstück    480 kcal│  ← Meal Section
│ ┌─────────────────────┐ │
│ │ Haferflocken   250  │ │
│ │ Banane         105  │ │
│ │ Milch          125  │ │
│ │ [+ Hinzufügen]      │ │
│ └─────────────────────┘ │
│                         │
│ 🥗 Mittagessen   --- kcal│
│ [+ Mahlzeit hinzufügen] │
│                         │
│ 🍽️ Abendessen    --- kcal│
│ [+ Mahlzeit hinzufügen] │
│                         │
│ 🍪 Snacks        --- kcal│
│ [+ Snack hinzufügen]    │
│                         │
│ [🏠] [📓] [🍎] [💪] [👤] │
└─────────────────────────┘

- Swipe Left/Right: Tag wechseln
- Donut animiert sich beim Laden
- Meal Sections: klappbar
- Swipe auf Food Item: Löschen
```

### 3.10 Nutrition — Food Suche
```
┌─────────────────────────┐
│ ← Food hinzufügen       │
├─────────────────────────┤
│ ┌─────────────────────┐ │
│ │ 🔍 Lebensmittel...  │ │  ← Search Input
│ └─────────────────────┘ │
│                         │
│ [📷 Barcode scannen]    │  ← Barcode Button
│                         │
│ Letzte                  │
│ ┌─────────────────────┐ │
│ │ Haferflocken   350/100g│ │
│ │ Banane         89/Stk │ │
│ │ Vollmilch      64/100ml│ │
│ └─────────────────────┘ │
│                         │
│ Suchergebnisse          │
│ ┌─────────────────────┐ │
│ │ [Food Item Row]      │ │
│ │ [Food Item Row]      │ │
│ │ [Food Item Row]      │ │
│ └─────────────────────┘ │
│                         │
└─────────────────────────┘

Nach Tap auf Item:

┌─────────────────────────┐
│ ← Haferflocken          │
├─────────────────────────┤
│ [Foto falls vorhanden]  │
│                         │
│ Menge                   │
│ ┌──────┐ [Gramm ▼]     │  ← Input + Unit Picker
│ │ 50   │                │
│ └──────┘                │
│                         │
│ Nährwerte (für 50g)     │
│ Kalorien:    175 kcal   │
│ Protein:     6.5g       │
│ Kohlenhydrate: 30g      │
│ Fett:        3.5g       │
│ Ballaststoffe: 5g       │
│                         │
│ Mahlzeit                │
│ (●) Frühstück           │
│ ( ) Mittagessen         │
│ ( ) Abendessen          │
│ ( ) Snack               │
│                         │
│ [   Hinzufügen   ]     │  ← Primary Button
│                         │
└─────────────────────────┘
```

### 3.11 Nutrition — Barcode Scanner
```
┌─────────────────────────┐
│ ← Scanner          🔦   │
├─────────────────────────┤
│                         │
│    ┌───────────────┐    │
│    │               │    │
│    │   [Camera     │    │  ← Kamera-View
│    │    Feed]      │    │
│    │               │    │
│    │   ┌───────┐   │    │  ← Scan-Bereich
│    │   │ █████ │   │    │     Animierter Rahmen
│    │   │ █████ │   │    │
│    │   └───────┘   │    │
│    │               │    │
│    └───────────────┘    │
│                         │
│  Richte die Kamera auf  │
│  den Barcode             │
│                         │
│  [Manuell eingeben]     │  ← Fallback
│                         │
└─────────────────────────┘

- Scan-Bereich: animierter Rahmen (Violet 600)
- Vibration bei erfolgreichem Scan
- Auto-Redirect zu Food Detail
```

### 3.12 Rezeptbuch — Übersicht
```
┌─────────────────────────┐
│ ← Rezeptbuch        🔍  │
├─────────────────────────┤
│ [Alle] [Frühstück]      │
│ [Mittag] [Abend] [Snack]│  ← Filter Tabs (horizontal scroll)
│                         │
│ ┌──────────┐ ┌────────┐ │
│ │ [Foto]   │ │ [Foto] │ │  ← Recipe Grid (2 Spalten)
│ │ Overnight│ │ Protein│ │
│ │ Oats     │ │ Bowl   │ │
│ │ 350 kcal │ │ 520kcal│ │
│ │ ⏱ 10 min │ │ ⏱ 15min│ │
│ └──────────┘ └────────┘ │
│ ┌──────────┐ ┌────────┐ │
│ │ [Foto]   │ │ [Foto] │ │
│ │ Wrap     │ │ Salat  │ │
│ └──────────┘ └────────┘ │
│                         │
│                    [+]  │  ← FAB
│ [🏠] [📓] [🍎] [💪] [👤] │
└─────────────────────────┘

- Masonry oder gleichmäßiges Grid
- Foto: 1:1 Aspect Ratio, Rounded 8px oben
- Kein Foto: Placeholder mit Violet Gradient + Icon
```

### 3.13 Rezeptbuch — Neues Rezept
```
┌─────────────────────────┐
│ ← Neues Rezept   Speich.│
├─────────────────────────┤
│ [📷 Foto hinzufügen]    │  ← Großer Foto-Upload Bereich
│                         │
│ Rezeptname              │
│ ┌─────────────────────┐ │
│ │ z.B. Overnight Oats │ │
│ └─────────────────────┘ │
│                         │
│ Kategorie               │
│ [Frühstück ▼]           │
│                         │
│ Portionen               │
│ [- ] 2 [ +]             │  ← Stepper
│                         │
│ Zubereitung (min)       │
│ ┌─────────────────────┐ │
│ │ 15                  │ │
│ └─────────────────────┘ │
│                         │
│ Zutaten                 │
│ ┌─────────────────────┐ │
│ │ Haferflocken  50g   │ │  ← Jede Zutat = Food-Suche
│ │ Milch         200ml │ │
│ │ Banane        1 Stk │ │
│ │ [+ Zutat hinzufügen]│ │
│ └─────────────────────┘ │
│                         │
│ Nährwerte pro Portion   │
│ ┌─────────────────────┐ │  ← Automatisch berechnet
│ │ 350 kcal            │ │
│ │ P: 12g C: 55g F: 8g│ │
│ └─────────────────────┘ │
│                         │
│ Zubereitung             │
│ ┌─────────────────────┐ │
│ │ 1. Haferflocken...  │ │  ← Text Area für Anleitung
│ │ 2. Milch dazu...    │ │
│ └─────────────────────┘ │
│                         │
└─────────────────────────┘
```

### 3.14 Fitness — Übersicht
```
┌─────────────────────────┐
│ ← Fitness           📊  │
├─────────────────────────┤
│ Diese Woche             │
│ ┌─────────────────────┐ │
│ │ 3/5 Workouts        │ │  ← Progress Ring
│ │ [Ring]  185 min     │ │
│ │         12 Übungen  │ │
│ └─────────────────────┘ │
│                         │
│ Letzte Workouts         │
│ ┌─────────────────────┐ │
│ │ 💪 Push Day          │ │
│ │ Heute · 45 min      │ │
│ │ 6 Übungen           │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ 🦵 Leg Day           │ │
│ │ Gestern · 55 min    │ │
│ │ 7 Übungen           │ │
│ └─────────────────────┘ │
│                         │
│ Übungsbibliothek →      │  ← Link
│                         │
│                    [+]  │  ← FAB: Neues Workout
│ [🏠] [📓] [🍎] [💪] [👤] │
└─────────────────────────┘
```

### 3.15 Fitness — Workout aktiv
```
┌─────────────────────────┐
│ Push Day           ✕    │  ← Close (mit "Wirklich beenden?")
├─────────────────────────┤
│         12:45           │  ← Timer (groß, H1)
│                         │
│ Übung 3/6               │
│ ┌─────────────────────┐ │
│ │ Bankdrücken         │ │
│ │ [Animation/GIF]     │ │
│ └─────────────────────┘ │
│                         │
│ Set 1: 80kg × 10 ✓     │  ← Abgehakte Sets
│ Set 2: 80kg × 8  ✓     │
│ Set 3:                  │  ← Aktives Set
│ ┌───────┐ × ┌───────┐  │
│ │ 80 kg │   │ 8 reps│  │
│ └───────┘   └───────┘  │
│                         │
│ [  Set abschließen  ]  │
│                         │
│ [Pause ⏸] [Nächste →]  │
│                         │
└─────────────────────────┘

Pause-Timer (Bottom Sheet):
- Countdown von z.B. 90s
- Skip Button
- "+30s" Button
```

### 3.16 KI Coach — Chat
```
┌─────────────────────────┐
│ ← Souly Coach      ⚙️   │
├─────────────────────────┤
│                         │
│  ┌──────────────────┐   │
│  │ Hey! Wie geht es │   │  ← AI Bubble (links)
│  │ dir heute? Ich   │   │     Violet 50 BG
│  │ sehe du hattest  │   │
│  │ gestern einen    │   │
│  │ tollen Streak 🔥 │   │
│  └──────────────────┘   │
│                         │
│       ┌─────────────┐   │
│       │ Mir geht's  │   │  ← User Bubble (rechts)
│       │ gut, danke! │   │     Violet 600 BG, white text
│       └─────────────┘   │
│                         │
│  ┌──────────────────┐   │
│  │ Freut mich! 😊   │   │
│  │ Hast du Lust auf │   │
│  │ eine kurze       │   │
│  │ Dankbarkeits-    │   │
│  │ übung?           │   │
│  │                  │   │
│  │ [Ja, gerne!]     │   │  ← Quick Reply Buttons
│  │ [Später]         │   │
│  └──────────────────┘   │
│                         │
│ ┌─────────────────┐ [→] │  ← Input + Send
│ │ Nachricht...    │     │
│ └─────────────────┘     │
└─────────────────────────┘

Design-Notes:
- AI Avatar: Souly Logo (klein, 32x32) neben AI Bubbles
- Quick Replies: Secondary Buttons inline
- Typing Indicator: 3 animierte Dots
- Premium Gate: nach 3 Nachrichten Paywall anzeigen
```

### 3.17 KI Coach — Täglicher Check-in
```
┌─────────────────────────┐
│                    ✕    │
├─────────────────────────┤
│                         │
│   Guten Morgen! ☀️      │  ← H1
│                         │
│   Wie hast du           │
│   geschlafen?           │
│                         │
│   😴  😊  😐  😫  😵   │  ← Sleep Quality Picker
│                         │
│   Wie fühlst du dich    │
│   gerade?               │
│                         │
│   😄  🙂  😐  😟  😢   │  ← Mood Picker
│                         │
│   Worauf freust du      │
│   dich heute?           │
│   ┌─────────────────┐   │
│   │                 │   │  ← Optional Text Input
│   └─────────────────┘   │
│                         │
│   [   Guten Start!  ]  │  ← Primary Button
│                         │
└─────────────────────────┘

- Full-Screen Modal
- Sanfte Gradient-Hintergrund (Violet 50 → White)
- Abend-Version: andere Fragen (Was war gut heute? etc.)
```

### 3.18 KI Coach — Atemübung
```
┌─────────────────────────┐
│ ← Atemübung        ✕    │
├─────────────────────────┤
│                         │
│                         │
│      ┌─────────┐       │
│     ╱           ╲      │
│    │             │      │  ← Animierter Kreis
│    │  Einatmen   │      │     Expandiert/Kontrahiert
│    │    4s       │      │
│     ╲           ╱      │
│      └─────────┘       │
│                         │
│                         │
│   4-7-8 Atemtechnik    │  ← H3
│                         │
│   Einatmen: 4 Sekunden │
│   Halten:   7 Sekunden │
│   Ausatmen: 8 Sekunden │
│                         │
│   Runde 3 von 5        │  ← Progress
│   [● ● ● ○ ○]         │
│                         │
│   [   Pause   ]        │
│                         │
└─────────────────────────┘

- Kreis-Animation: smooth, beruhigend
- Farbe wechselt: Einatmen=Violet, Halten=Blue, Ausatmen=Emerald
- Optionaler Sound/Vibration
- Abschluss-Screen mit Congratulations
```

### 3.19 Paywall
```
┌─────────────────────────┐
│                    ✕    │
├─────────────────────────┤
│                         │
│   Schalte alles frei    │  ← H1
│   mit Souly Premium ✨   │
│                         │
│   ✅ Unbegrenztes Journal│
│   ✅ Voller KI-Coach     │
│   ✅ Alle Makro-Details  │
│   ✅ Unbegrenzte Rezepte │
│   ✅ Workout-Pläne       │
│   ✅ Detaillierte Trends │
│                         │
│   ┌─────────────────┐   │
│   │ ⭐ JAHRESABO     │   │  ← Empfohlen (hervorgehoben)
│   │ 49,99€/Jahr     │   │     Violet Border, Badge "Spar 48%"
│   │ = 4,17€/Monat   │   │
│   └─────────────────┘   │
│   ┌─────────────────┐   │
│   │ Monatsabo       │   │  ← Weniger prominent
│   │ 7,99€/Monat     │   │
│   └─────────────────┘   │
│                         │
│   [  Jetzt starten  ]  │  ← Primary Button
│                         │
│   Jederzeit kündbar     │  ← Caption, beruhigend
│   Datenschutz · AGB     │
│                         │
└─────────────────────────┘

- Background: Subtle Violet Gradient
- Feature Icons: Checkmarks in Emerald
- Jahresabo: Violet Border + "Beliebteste" Badge
- Social Proof optional: "Über X Nutzer vertrauen Souly"
```

### 3.20 Profil & Einstellungen
```
┌─────────────────────────┐
│ Profil                  │
├─────────────────────────┤
│                         │
│      [Avatar]           │  ← 80x80, rund
│    Sebastian            │  ← H2
│    Premium Mitglied ✨   │  ← Badge
│                         │
│ Persönliche Daten       │  ← Section
│ ┌─────────────────────┐ │
│ │ Name         Sebast.│ │
│ │ E-Mail       s@...  │ │
│ │ Größe        180 cm │ │
│ │ Gewicht      78 kg  │ │
│ │ Ziel      2100 kcal │ │
│ └─────────────────────┘ │
│                         │
│ App                     │
│ ┌─────────────────────┐ │
│ │ Sprache     Deutsch │ │
│ │ Dark Mode      [○]  │ │
│ │ Benachrichtigungen → │ │
│ └─────────────────────┘ │
│                         │
│ Abo                     │
│ ┌─────────────────────┐ │
│ │ Premium Yearly   ✨  │ │
│ │ Verlängert am 3.3.27│ │
│ │ [Abo verwalten]     │ │
│ └─────────────────────┘ │
│                         │
│ [Abmelden]              │  ← Red, Ghost Button
│                         │
│ [🏠] [📓] [🍎] [💪] [👤] │
└─────────────────────────┘
```

---

## 4. User Flows

### 4.1 Erster Start (First Launch)
```
Splash → Onboarding (3 Slides) → Register/Login → Onboarding Quiz →
7-Day Trial Banner → Home Dashboard
```

### 4.2 Täglicher Flow
```
Push Notification (Morgen Check-in) → Check-in ausfüllen → Home Dashboard →
Frühstück loggen → Mittag loggen → Workout starten →
Journal Eintrag schreiben → Abend Check-in
```

### 4.3 Food hinzufügen
```
Nutrition Tab → Mahlzeit wählen → Food Suche ODER Barcode →
Menge eingeben → Hinzufügen → Zurück zu Tagesübersicht
```

### 4.4 Premium Upgrade
```
Feature nutzen (gesperrt) → Paywall → Plan wählen →
App Store / Play Store Payment → Bestätigung → Feature freigeschaltet
```

### 4.5 Rezept erstellen
```
Rezeptbuch → [+] → Name + Kategorie → Zutaten suchen & hinzufügen →
Nährwerte automatisch berechnet → Anleitung schreiben →
Foto hinzufügen → Speichern
```

---

## 5. Animations & Micro-Interactions

| Element | Animation |
|---|---|
| Mood Picker | Scale bounce bei Auswahl + Farbwechsel |
| Donut Chart | Kreisförmige Fill-Animation beim Laden |
| Streak Counter | Feuer-Animation + Zähler hochzählen |
| Cards | Fade-in + leichter Slide-up beim Erscheinen |
| FAB | Scale-in beim Tab-Wechsel |
| Tab Bar | Leichter Bounce bei Icon-Tap |
| Coach Typing | 3 Dots pulsierende Animation |
| Atemübung | Smooth Expand/Contract Kreis |
| Water Tracker | Wellen-Animation beim Hinzufügen |
| Check-in | Confetti bei Abschluss |
| Paywall | Feature-Checks nacheinander einblenden |

---

## 6. Figma Struktur (Empfehlung)

```
📁 Souly
├── 📄 Cover
├── 📄 Design System
│   ├── Colors
│   ├── Typography
│   ├── Icons
│   ├── Spacing & Grid
│   └── Shadows & Radius
├── 📄 Components
│   ├── Buttons
│   ├── Inputs
│   ├── Cards
│   ├── Navigation
│   ├── Mood Picker
│   ├── Nutrition Components
│   ├── Tags & Chips
│   └── Bottom Sheets
├── 📄 Screens — Auth
│   ├── Splash
│   ├── Onboarding
│   ├── Login
│   ├── Register
│   └── Onboarding Quiz
├── 📄 Screens — Home
│   └── Dashboard
├── 📄 Screens — Journal
│   ├── Feed
│   ├── New Entry
│   ├── Entry Detail
│   └── Calendar View
├── 📄 Screens — Nutrition
│   ├── Day View
│   ├── Food Search
│   ├── Food Detail
│   ├── Barcode Scanner
│   └── Water Tracker
├── 📄 Screens — Recipes
│   ├── Overview
│   ├── New Recipe
│   └── Recipe Detail
├── 📄 Screens — Fitness
│   ├── Overview
│   ├── New Workout
│   ├── Active Workout
│   └── Exercise Library
├── 📄 Screens — Coach
│   ├── Chat
│   ├── Morning Check-in
│   ├── Evening Check-in
│   ├── Breathing Exercise
│   └── Gratitude Exercise
├── 📄 Screens — Profile
│   ├── Profile Overview
│   ├── Edit Profile
│   ├── Settings
│   └── Notifications
├── 📄 Screens — Paywall
│   └── Premium Offer
└── 📄 Prototyping
    ├── First Launch Flow
    ├── Daily Flow
    └── Premium Upgrade Flow
```

---

## 7. Design Do's & Don'ts

### Do's ✅
- Konsistente 8px Grid verwenden
- Viel Whitespace — die App soll "atmen"
- Sanfte Schatten statt harter Borders
- Konsistente Icon-Größen (24px)
- Touch Targets mindestens 44x44px
- Safe Areas beachten (Notch, Home Indicator)
- Skeleton Loading States für alle Listen
- Empty States mit Illustrationen

### Don'ts ❌
- Nicht mehr als 2-3 Farben pro Screen
- Keine zu kleinen Texte (min 11px)
- Keine aggressiven Rottöne (außer Fehler)
- Kein Overdesign — Clean & Simple
- Keine Werbung (nur eigene Paywall)
- Nicht zu viele CTAs pro Screen
