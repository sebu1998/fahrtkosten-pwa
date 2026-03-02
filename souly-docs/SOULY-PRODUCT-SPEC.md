# SOULY — Product Specification

> *"Deine tägliche Seelenpflege"* / *"Your daily soul care"*

## Vision

Eine All-in-One Wellness-App die Journal, Essen-Tracking, Fitness und Mental Health Coaching in einer schönen, modernen App vereint. Statt 4 verschiedene Apps brauchen Nutzer nur noch Souly.

---

## Eckdaten

| Bereich | Detail |
|---|---|
| **Name** | Souly |
| **Tagline DE** | Deine tägliche Seelenpflege |
| **Tagline EN** | Your daily soul care |
| **Zielgruppe** | Alle Altersgruppen |
| **Sprachen** | Deutsch + Englisch |
| **USP** | All-in-One statt 4 separate Apps |
| **Plattformen** | iOS + Android |
| **Framework** | React Native + Expo |
| **Backend** | Firebase (Auth, Firestore, Storage, Functions) |
| **Subscriptions** | RevenueCat |
| **KI** | Claude/OpenAI API |
| **Food Data** | Open Food Facts API |

---

## 5 Kernmodule

### 1. Journal
- Tägliche Einträge (Text + Fotos)
- Stimmungs-Tracker (5 Stufen + Custom-Emojis)
- Tags & Kategorien
- Kalenderansicht
- Volltextsuche
- **Free**: 3 Einträge/Woche | **Premium**: Unbegrenzt

### 2. Essen Tracker
- Mahlzeiten loggen (Frühstück, Mittag, Abend, Snacks)
- Food-Suche (Open Food Facts API)
- Barcode-Scanner
- Automatische Kalorien- & Makro-Berechnung
- Tages-/Wochen-Übersicht mit Grafiken
- Wasser-Tracker
- **Free**: Nur Kalorien | **Premium**: Makros, Mikronährstoffe, Trends

### 3. Rezeptbuch
- Eigene Rezepte erstellen
- Zutaten → automatische Nährwertberechnung
- Fotos hinzufügen
- Portionsrechner
- Favoriten & Kategorien
- **Free**: 5 Rezepte | **Premium**: Unbegrenzt

### 4. Fitness Tracker
- Workout erstellen & loggen
- Übungsbibliothek (mit Animationen/GIFs)
- Sets, Reps, Gewicht tracken
- Workout-Verlauf & Fortschritt
- Timer & Pause
- **Free**: 3 Workouts/Woche | **Premium**: Unbegrenzt + Pläne

### 5. KI Mental Health Coach (Hybrid)
- **Chat**: Freundlicher Coach zum Reden
- **Check-ins**: Tägliche Stimmungsabfrage morgens & abends
- **Übungen**: Geführte Atemübungen, Journaling-Prompts, Dankbarkeit
- **Insights**: Personalisierte Empfehlungen basierend auf allen Daten
- **Free**: 3 Nachrichten/Tag + Basis-Check-ins | **Premium**: Unbegrenzt

---

## Abo-Modell

| Plan | Preis | Features |
|---|---|---|
| **Free** | 0€ | Basis-Features aller Module (limitiert) |
| **7-Tage-Trial** | 0€ | Volles Premium, automatisch beim Start |
| **Premium Monthly** | 7,99€/Monat | Alles unbegrenzt |
| **Premium Yearly** | 49,99€/Jahr (~4,17€/Monat) | Alles unbegrenzt, 48% gespart |

**Strategie**: Generous Free + Soft Paywall (wie Calm, Headspace, Yazio)

---

## Tech-Stack

| Bereich | Technologie |
|---|---|
| Framework | React Native + Expo (SDK 52+) |
| Navigation | Expo Router (file-based) |
| State | Zustand |
| Backend | Firebase |
| Auth | Firebase Auth (Email, Google, Apple) |
| Database | Cloud Firestore |
| Storage | Firebase Storage (Fotos) |
| Functions | Firebase Cloud Functions |
| Subscriptions | RevenueCat |
| KI | Claude API / OpenAI API |
| Food API | Open Food Facts |
| Barcode | expo-barcode-scanner |
| Analytics | Firebase Analytics |
| Push | Firebase Cloud Messaging |
| i18n | react-i18next |

---

## Entwicklungs-Phasen

1. **Design** — Figma Wireframes & UI Design
2. **Foundation** — Expo Setup, Auth, Navigation, DB-Schema
3. **Journal** — Einträge, Stimmung, Fotos, Tags
4. **Essen Tracker** — Food-Suche, Barcode, Kalorien, Makros
5. **Rezeptbuch** — Rezepte erstellen, Nährwerte berechnen
6. **Fitness** — Workouts, Übungen, Fortschritt
7. **KI Coach** — Chat, Check-ins, geführte Übungen
8. **Paywall** — RevenueCat, Free/Premium Gates
9. **Polish** — Animations, Onboarding, Push Notifications
10. **Launch** — App Store + Play Store Submission
