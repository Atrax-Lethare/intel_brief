        // --- DATA SECTION: DAILY BULLETINS ---
        const newsDB = {
            'Economics': {
                date: 'December 1, 2025',
                lead: {
                    headline: "Q2 GDP Hits 8.2%; October IIP Data Release Today",
                    summary: "The Indian economy grew at an impressive 8.2% in the July-September quarter, fueled by a manufacturing boom. To align data releases, the government has rescheduled the October Industrial Production (IIP) data to be released today.",
                    link: "https://www.thehindu.com/business/Economy/indian-economy-grows-82-in-q2-2025-26/article70334383.ece"
                },
                bullets: [
                    { tag: "Policy", text: "RBI likely to keep repo rate unchanged at 6.5% in Dec meeting despite GDP beat.", link: "https://www.financialexpress.com/policy/economy-rbi-may-cut-rates-by-25-bps-in-december-economists-see-record-low-inflation-strong-gdp-key-triggers-4060783/" },
                    { tag: "Exports", text: "Engineering exports fell 16.7% in October due to US tariffs and weak EU demand.", link: "https://timesofindia.indiatimes.com/business/india-business/us-tariffs-bite-indias-engineering-exports-slump-16-7-in-october-asean-eu-and-uae-shipments-weaken/articleshow/125661032.cms" },
                    { tag: "Auto", text: "November auto sales numbers expected today; SUV segment likely to lead growth.", link: "https://www.financialexpress.com/market/analysts-eye-rbis-december-cut-fii-bets-amp-global-trends-as-key-market-triggers-4061045/" },
                    { tag: "Tax", text: "Govt to introduce Health Security Cess on tobacco to replace GST compensation cess.", link: "https://timesofindia.indiatimes.com/business/india-business/parliament-winter-sessions-economic-agenda-9-bills-listed-for-discussion-insurance-sin-goods-taxation-and-more-in-focus/articleshow/125674626.cms" },
                    { tag: "Insolvency", text: "Manipal Group formally submits EoI to acquire Byju's parent company.", link: "https://www.thehindu.com/news/national/karnataka/manipal-group-submits-eoi-to-participate-in-insolvency-process-ofthink-learn-parent-of-byjus/article70275975.ece" },
                    { tag: "Insurance", text: "Bill to raise FDI cap in insurance to 100% listed for Winter Session.", link: "https://timesofindia.indiatimes.com/business/india-business/parliament-winter-sessions-economic-agenda-9-bills-listed-for-discussion-insurance-sin-goods-taxation-and-more-in-focus/articleshow/125674626.cms" }
                ],
                stat: { label: "Q2 GDP Growth", value: "8.2%", desc: "Real GDP growth for Q2 FY26, driven by a 9.1% surge in manufacturing." }
            },
            'Politics': {
                date: 'December 1, 2025',
                lead: {
                    headline: "Winter Session Begins: Oppn Unites on Electoral Rolls",
                    summary: "Parliament's Winter Session starts today with the Opposition demanding a debate on the 'Special Intensive Revision' (SIR) of electoral rolls and national security. The government has listed 15 bills for passage.",
                    link: "https://www.thehindu.com/news/national/all-party-meeting-opposition-demands-debate-on-sir-national-security-in-parliament/article70341766.ece"
                },
                bullets: [
                    { tag: "Security", text: "Opposition demands discussion on national security following Delhi blast incident.", link: "https://www.thehindu.com/news/national/all-party-meeting-opposition-demands-debate-on-sir-national-security-in-parliament/article70341766.ece" },
                    { tag: "Bills", text: "Atomic Energy Bill and HECI Bill among key legislations listed for the session.", link: "https://m.economictimes.com/news/politics-and-nation/parliament-winter-session-agenda-sin-goods-taxation-atomic-bill-on-table-as-oppn-gears-up-for-showdown-over-sir/articleshow/125675893.cms" },
                    { tag: "Diplomacy", text: "Russian President Putin to visit India on Dec 4-5 for annual summit.", link: "https://www.thehindu.com/news/top-news-of-the-day-indian-economy-growth-82-in-q2-cyclone-ditwah-wreaks-havoc-in-sri-lanka-likely-to-reach-tn-andhra-coast-on-nov-30-and-more/article70334743.ece" },
                    { tag: "Statue", text: "PM Modi unveils 77-ft Lord Ram statue in Goa; emphasizes cultural heritage.", link: "https://www.thehindu.com/news/top-news-of-the-day-indian-economy-growth-82-in-q2-cyclone-ditwah-wreaks-havoc-in-sri-lanka-likely-to-reach-tn-andhra-coast-on-nov-30-and-more/article70334743.ece" },
                    { tag: "Maharashtra", text: "Paid holiday declared on Dec 2 for civic council elections in the state.", link: "https://www.thehindu.com/news/" },
                    { tag: "Farmers", text: "Punjab farmers protest Electricity Bill 2025; demand legal MSP guarantee.", link: "https://indianexpress.com/article/explained/everyday-explainers/inside-punjab-protests-against-centres-new-power-law-concerns-about-cherry-picking-consumers-eroding-subsidies-10389175/" }
                ],
                stat: { label: "Bills Listed", value: "15", desc: "Number of legislative bills the government plans to introduce/pass in the Winter Session." }
            },
            'Technology': {
                date: 'December 1, 2025',
                lead: {
                    headline: "Android 17 'Cinnamon Bun': First Details Emerge",
                    summary: "Google is reportedly working on Android 17, codenamed 'Cinnamon Bun', set for a 2026 release. It promises a 'Material 3' design overhaul, deeper AI integration, and privacy features inspired by iOS.",
                    link: "https://www.indiatoday.in/technology/news/story/google-gears-up-for-android-17-launch-expected-release-date-top-features-and-everything-to-know-2828337-2025-11-30"
                },
                bullets: [
                    { tag: "AI Future", text: "Elon Musk predicts 'work will become optional' due to AI in talk with Nikhil Kamath.", link: "https://indianexpress.com/article/technology/tech-news-technology/elon-musk-predicts-work-will-become-optional-due-to-ai-in-talk-with-nikhil-kamath-10394817/" },
                    { tag: "Deals", text: "iPhone Air gets massive price cut in India as retailers extend Black Friday sales.", link: "https://timesofindia.indiatimes.com/technology/tech-news/iphone-air-price-in-india-drops-check-discounts-on-reliance-digital-amazon-croma-and-flipkart/articleshow/125671937.cms" },
                    { tag: "Medical AI", text: "Apollo Hospitals partners with Google Cloud to build AI-driven clinical intelligence engine.", link: "https://cloud.google.com/blog/products/ai-machine-learning/how-apollo-247-leverages-medlm-with-rag-to-revolutionize-healthcare" },
                    { tag: "Space", text: "ISRO developing 'Soorya' NGLV rocket to replace PSLV/GSLV by 2034.", link: "https://en.wikipedia.org/wiki/Next_Generation_Launch_Vehicle" },
                    { tag: "Telecom", text: "GCWCN 2025 highlights 'Zero-Trust' security models for 6G networks.", link: "https://timesofindia.indiatimes.com/city/pune/gcwcn-2025-showcases-breakthrough-innovations-across-ai-quantum-computing-iot-healthcare-engineering/articleshow/125554437.cms" },
                    { tag: "Cybersec", text: "CERT-In issues high-severity warning for 'Daam' malware targeting Android.", link: "https://www.csk.gov.in/alerts.html" }
                ],
                stat: { label: "Projected Year", value: "2026", desc: "Expected release year for Google's major Android 17 OS update." }
            },
            'Education': {
                date: 'December 1, 2025',
                lead: {
                    headline: "Schools Closed in Chennai Due to Cyclone Alert",
                    summary: "Schools in Chennai, Tirupati, and coastal districts of Tamil Nadu and Andhra Pradesh are closed today due to the approaching Cyclone Ditwah. Authorities have issued red alerts for heavy rainfall in the region.",
                    link: "https://www.jagranjosh.com/articles/school-holiday-on-1-december-2025-monday-schools-closed-in-these-states-due-to-rain-and-regional-festivals-1800005869-1"
                },
                bullets: [
                    { tag: "Reform", text: "HECI Bill to replace UGC/AICTE listed for introduction in Parliament Winter Session.", link: "https://indianexpress.com/article/explained/everyday-explainers/what-is-the-centres-higher-education-commission-of-india-bill-2025-10382060/" },
                    { tag: "Exam", text: "AIBE 20 held yesterday; Bar Council enforced strict 'No Notes' policy.", link: "https://timesofindia.indiatimes.com/education/news/aibe-20-exam-2025-on-november-30-check-exam-day-dos-and-donts-issued-by-bci-here/articleshow/125579919.cms" },
                    { tag: "Ranking", text: "IISc Bangalore tops NIRF 2025 University rankings; IIT Madras leads overall.", link: "https://engineering.careers360.com/articles/iisc-bangalore-nirf-ranking" },
                    { tag: "Skill", text: "CBSE introduces 'Design Thinking' as a skill subject for classes 6-12.", link: "https://www.cbse.gov.in/cbsenew/documents/01_Circular_2025_SKILL_10012025.pdf" },
                    { tag: "Festival", text: "Thiruvananthapuram Revenue District School Youth Festival begins today.", link: "https://timesofindia.indiatimes.com/city/thiruvananthapuram/thiruvananthapuram-revenue-district-school-youth-festival-begins-on-december-1/articleshow/125663044.cms" },
                    { tag: "Policy", text: "AAP teachers' wing opposes HECI Bill, terming it 'marketisation' of education.", link: "https://www.theweek.in/wire-updates/national/2025/12/01/des50-dl-heci-aadta.html" }
                ],
                stat: { label: "Participants", value: "8,299", desc: "Number of students participating in the Thiruvananthapuram School Youth Festival." }
            },
            'Medical': {
                date: 'December 1, 2025',
                lead: {
                    headline: "World AIDS Day: India on Track for 2030 Target",
                    summary: "On World AIDS Day, health authorities highlighted India's success in reducing HIV prevalence. Andhra Pradesh has emerged as a top performer in controlling cases, achieving nearly 77% of its control targets.",
                    link: "https://www.thehindu.com/news/national/andhra-pradesh/andhra-pradesh-stands-first-in-controlling-hiv-cases-says-health-minister/article70342004.ece"
                },
                bullets: [
                    { tag: "Appointment", text: "Manoj Joshi appointed as the new Secretary, Department of Pharmaceuticals.", link: "https://vohnetwork.com/news/policy/manoj-joshi-appointed-pharma-secretary" },
                    { tag: "Quality", text: "CDSCO flags 148 drug samples as 'Not of Standard Quality' in October alert.", link: "https://medicaldialogues.in/news/industry/pharma/cdsco/state-drug-alert-148-medicine-samples-fail-cdsco-quality-tests-in-october-159564" },
                    { tag: "Global", text: "WHO warns of global measles surge; 11 million cases estimated last year.", link: "https://news.un.org/en/story/2025/11/1166471" },
                    { tag: "Attendance", text: "UGC enforces 75% mandatory attendance for college students, including medical streams.", link: "https://www.sundhapolymers.in/college-attendance-rule-2025-ugc-75-percent-mandate/" },
                    { tag: "Tech", text: "Apollo Hospitals uses Google's MedLM AI for clinical decision support.", link: "https://cloud.google.com/blog/products/ai-machine-learning/how-apollo-247-leverages-medlm-with-rag-to-revolutionize-healthcare" },
                    { tag: "Funding", text: "Budget 2025 allocates ₹500 Cr for AI Centres of Excellence in health and education.", link: "https://www.hindustantimes.com/india-news/in-ai-stimulus-india-allots-500-crore-for-centre-of-excellence-in-education-101738435384250.html" }
                ],
                stat: { label: "Target Met", value: "77%", desc: "Percentage of HIV control target achieved by Andhra Pradesh, leading the country." }
            },
            'Engineering': {
                date: 'December 1, 2025',
                lead: {
                    headline: "JEE Main Registrations Hit Record 14.5 Lakh",
                    summary: "The JEE Main Session-1 has witnessed an unprecedented 14.5 lakh registrations, the highest ever. Experts attribute this surge to the continued demand for technical education and government skilling initiatives.",
                    link: "https://timesofindia.indiatimes.com/city/mumbai/engineering-entrance-exam-jee-main-session-1-sees-record-14-5-lakh-applications/articleshow/125622056.cms"
                },
                bullets: [
                    { tag: "Exports", text: "Engineering exports slumped 16.7% in October due to US tariffs.", link: "https://timesofindia.indiatimes.com/business/india-business/us-tariffs-bite-indias-engineering-exports-slump-16-7-in-october-asean-eu-and-uae-shipments-weaken/articleshow/125661032.cms" },
                    { tag: "Innovation", text: "IIT Madras develops Graphene coating to protect underwater glass structures.", link: "https://www.iitd.ac.in/" },
                    { tag: "Robotics", text: "Genrobotics deploys 'Bandicoot' robots in more states to end manual scavenging.", link: "https://sanitation.genrobotics.com/" },
                    { tag: "Infra", text: "Chenab Bridge, world's highest rail bridge, ready for commercial traffic.", link: "https://en.wikipedia.org/wiki/Chenab_Rail_Bridge" },
                    { tag: "Space", text: "ISRO testing semi-cryogenic engine for future NGLV heavy-lift rockets.", link: "https://en.wikipedia.org/wiki/Next_Generation_Launch_Vehicle" },
                    { tag: "Energy", text: "Adani Energy wins transmission project for 2.5 GW renewable zone in Khavda.", link: "https://www.mercomindia.com/adani-energy-bags-transmission-project-to-evacuate-2-5-gw-of-renewable-energy" }
                ],
                stat: { label: "Applicants", value: "14.5 Lakh", desc: "Record number of student registrations for JEE Main Session-1 2025." }
            },
            'Architecture': {
                date: 'December 1, 2025',
                lead: {
                    headline: "Raj Sabhagruh Wins Dezeen Award 2025",
                    summary: "The Raj Sabhagruh in Gujarat, designed by Serie Architects, has won the 2025 Dezeen Award for Best Civic Project. The building is noted for its sustainable use of 8 lakh hand-laid discarded marble bricks.",
                    link: "https://www.freepressjournal.in/mumbai/raj-sabhagruh-wins-2025-dezeen-award-for-best-civic-project"
                },
                bullets: [
                    { tag: "Urban", text: "Bengaluru proposes ₹1.5L crore plan for urban tunnels and elevated corridors.", link: "https://timesofindia.indiatimes.com/city/bengaluru/building-bengaluru-2-0-city-bets-whopping-rs-1-5-lakh-crore-on-its-infrastructure/articleshow/125603009.cms" },
                    { tag: "Design", text: "Architectural Digest features BV Doshi's final project at Vitra Campus.", link: "https://www.zinio.com/in/publications/architectural-digest-india/5361" },
                    { tag: "Event", text: "ACETECH 2025 Expo showcases future building technologies in Mumbai.", link: "https://acetechexpo.com/" },
                    { tag: "Heritage", text: "Odisha launches light & sound show at the iconic Konark Sun Temple.", link: "https://www.prameyanews.com/odisha-unveils-light-and-sound-show-at-konark-sun-temple" },
                    { tag: "Airport", text: "AAI to monitor Chennai Airport T3 construction live to meet 2026 deadline.", link: "https://timesofindia.indiatimes.com/city/chennai/aai-to-monitor-terminal-3-project/articleshow/124882491.cms" },
                    { tag: "Awards", text: "MAD Architects named 'Architect of the Year' at Dezeen Awards 2025.", link: "https://www.dezeen.com/2025/11/25/dezeen-awards-2025-designers-of-the-year-winners-announced/" }
                ],
                stat: { label: "Bricks Used", value: "8 Lakh", desc: "Number of recycled marble bricks used in the award-winning Raj Sabhagruh project." }
            },
            'Sports': {
                date: 'December 1, 2025',
                lead: {
                    headline: "Kohli's 52nd Ton Powers India to Win",
                    summary: "Virat Kohli scored a masterful 135 (his 52nd ODI century) to guide India to a 17-run victory over South Africa in the 1st ODI. Kuldeep Yadav's 4-wicket haul helped defend the total in a thrilling finish.",
                    link: "https://timesofindia.indiatimes.com/sports/cricket/india-vs-south-africa/ind-vs-sa-virat-kohlis-hundred-kuldeep-yadav-four-for-power-indias-17-run-win-in-first-odi/articleshow/125676367.cms"
                },
                bullets: [
                    { tag: "F1", text: "Max Verstappen wins Qatar GP; title race with Norris goes to final round.", link: "https://www.thehindu.com/latest-news/" },
                    { tag: "Hockey", text: "India finishes runner-up at Sultan Azlan Shah Cup, losing 0-1 to Belgium.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "TT", text: "Manika Batra leads India squad at ITTF Mixed Team World Cup in China.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "Football", text: "Rajasthan United FC wins 41st Governor's Gold Cup.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "Badminton", text: "Kidambi Srikanth reaches final of Syed Modi International 2025.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "Cricket", text: "Rohit Sharma breaks Shahid Afridi's record for most ODI sixes (352).", link: "https://timesofindia.indiatimes.com/sports/cricket/india-vs-south-africa/ind-vs-sa-virat-kohlis-hundred-kuldeep-yadav-four-for-power-indias-17-run-win-in-first-odi/articleshow/125676367.cms" }
                ],
                stat: { label: "ODI Tons", value: "52", desc: "Virat Kohli's record-extending number of ODI centuries, cementing his legacy." }
            }
        };





