        // --- DATA SECTION: DAILY BULLETINS ---
        const newsDB = {
            // --- PASTE THIS BLOCK IN newsDB['Economics'] ---
            'Economics': {
                date: 'November 29, 2025',
                lead: {
                    headline: "Q2 GDP Surprises Upside at 8.2%",
                    summary: "India's economic engine roared in the second quarter of 2025-26, registering an 8.2% growth rate against a projected 7.5%. The surge is credited to a manufacturing renaissance and resilient domestic consumption, despite global inflationary pressures.",
                    link: "https://www.thehindu.com/news/top-news-of-the-day-indian-economy-growth-82-in-q2-cyclone-ditwah-wreaks-havoc-in-sri-lanka-likely-to-reach-tn-andhra-coast-on-nov-30-and-more/article70334743.ece"
                },
                bullets: [
                    { tag: "Analysis", text: "SBI Research attributes growth to 'GST rationalization' and festival demand.", link: "https://www.livemint.com/market/stock-market-news/india-q2-gdp-live-india-gdp-growth-economic-growth-india-inflation-gst-rate-cut-28-november-2025-11764321645658.html" },
                    { tag: "Cyclone", text: "Cyclone Ditwah likely to impact coastal agriculture supply chains in Q3.", link: "https://www.thehindu.com/news/top-news-of-the-day-indian-economy-growth-82-in-q2-cyclone-ditwah-wreaks-havoc-in-sri-lanka-likely-to-reach-tn-andhra-coast-on-nov-30-and-more/article70334743.ece" },
                    { tag: "Forex", text: "HDFC Bank launches 'SmartHub Vyapar 2.0' for MSME digital payments.", link: "https://v.hdfcbank.com/festive-treats-2025/smarthub_vyapaar.html" },
                    { tag: "Tax", text: "GST Council exempts health insurance premiums from 18% GST.", link: "https://www.sbigeneral.in/blog/general-insurance/general-articles/gst-reforms-2025-health-insurance" },
                    { tag: "Exports", text: "Electronics exports surge led by Apple's iPhone manufacturing expansion.", link: "https://www.livemint.com" },
                    { tag: "Insolvency", text: "Manipal Group submits EoI for Byju's insolvency process.", link: "https://www.thehindu.com/news/national/karnataka/manipal-group-submits-eoi-to-participate-in-insolvency-process-ofthink-learn-parent-of-byjus/article70275975.ece" }
                ],
                stat: { label: "Q2 GDP Growth", value: "8.2%", desc: "The highest quarterly growth recorded in the last 6 quarters, driven by manufacturing." }
            },
            // --- PASTE THIS BLOCK IN newsDB['Politics'] ---
            'Politics': {
                date: 'November 29, 2025',
                lead: {
                    headline: "Winter Session: HECI & Power Bills on Agenda",
                    summary: "The Parliament's Winter Session is set for a showdown. The government plans to table the Higher Education Commission of India (HECI) Bill to replace UGC, while the Opposition is mobilizing against the Electricity Amendment Bill, citing federal overreach.",
                    link: "https://indianexpress.com/article/education/winter-session-parliament-to-take-up-bill-replacing-ugc-aicte-ncte-with-single-regulator-10381204/"
                },
                bullets: [
                    { tag: "Protest", text: "Punjab farmers and engineers protest against Electricity Bill 2025.", link: "https://indianexpress.com/article/explained/everyday-explainers/inside-punjab-protests-against-centres-new-power-law-concerns-about-cherry-picking-consumers-eroding-subsidies-10389175/" },
                    { tag: "Election", text: "Trinamool delegation meets EC alleges 'deaths due to electoral roll revision'.", link: "https://www.thehindu.com/news/top-news-of-the-day-indian-economy-growth-82-in-q2-cyclone-ditwah-wreaks-havoc-in-sri-lanka-likely-to-reach-tn-andhra-coast-on-nov-30-and-more/article70334743.ece" },
                    { tag: "Aadhaar", text: "UP Govt clarifies Aadhaar is not valid proof of Date of Birth.", link: "https://indianexpress.com/article/india/express-catch-up-5-stories-you-must-read-today-november-28-10391432/" },
                    { tag: "Statue", text: "PM Modi unveils 77-ft Lord Ram statue in Goa; emphasizes cultural heritage.", link: "https://www.thehindu.com/news/top-news-of-the-day-indian-economy-growth-82-in-q2-cyclone-ditwah-wreaks-havoc-in-sri-lanka-likely-to-reach-tn-andhra-coast-on-nov-30-and-more/article70334743.ece" },
                    { tag: "Diplomacy", text: "Russian President Putin to visit India on Dec 4-5 for Annual Summit.", link: "https://www.thehindu.com/news/top-news-of-the-day-indian-economy-growth-82-in-q2-cyclone-ditwah-wreaks-havoc-in-sri-lanka-likely-to-reach-tn-andhra-coast-on-nov-30-and-more/article70334743.ece" },
                    { tag: "Reshuffle", text: "Major bureaucratic reshuffle: Amit Agrawal appointed Telecom Secretary.", link: "https://egov.eletsonline.com/2025/11/bureaucratic-reshuffle-at-centre-amit-agrawal-made-secretary-telecom/" }
                ],
                stat: { label: "Bills Listed", value: "18", desc: "Number of legislative bills listed for introduction and passing in the Winter Session." }
            },
            // --- PASTE THIS BLOCK IN newsDB['Technology'] ---
            'Technology': {
                date: 'November 29, 2025',
                lead: {
                    headline: "GCWCN 2025: AI & Quantum Leaps",
                    summary: "The Global Conference on Wireless, Computing & Networking (GCWCN 2025) in Pune concluded with breakthrough papers on 'Neuromorphic LLM Pipelines' and 'Quantum-Federated Threat Detection,' positioning India as a rising hub for deep-tech research.",
                    link: "https://timesofindia.indiatimes.com/city/pune/gcwcn-2025-showcases-breakthrough-innovations-across-ai-quantum-computing-iot-healthcare-engineering/articleshow/125554437.cms"
                },
                bullets: [
                    { tag: "Innovation", text: "New 'RAG-driven IoT Sensor Analytics' proposed for predictive maintenance.", link: "https://timesofindia.indiatimes.com/city/pune/gcwcn-2025-showcases-breakthrough-innovations-across-ai-quantum-computing-iot-healthcare-engineering/articleshow/125554437.cms" },
                    { tag: "HealthTech", text: "AI framework developed for early diagnosis of Neuro-Cardiac disorders.", link: "https://timesofindia.indiatimes.com/city/pune/gcwcn-2025-showcases-breakthrough-innovations-across-ai-quantum-computing-iot-healthcare-engineering/articleshow/125554437.cms" },
                    { tag: "Cybersec", text: "CERT-In issues alerts for multiple Android malware strains including 'Daam'.", link: "https://www.csk.gov.in/alerts.html" },
                    { tag: "Research", text: "1312 papers submitted globally to GCWCN, highlighting intense R&D interest.", link: "https://timesofindia.indiatimes.com/city/pune/gcwcn-2025-showcases-breakthrough-innovations-across-ai-quantum-computing-iot-healthcare-engineering/articleshow/125554437.cms" },
                    { tag: "Hardware", text: "Neuromorphic computing gains traction for energy-efficient AI.", link: "https://timesofindia.indiatimes.com/city/pune/gcwcn-2025-showcases-breakthrough-innovations-across-ai-quantum-computing-iot-healthcare-engineering/articleshow/125554437.cms" },
                    { tag: "Space", text: "ISRO develops new semi-cryogenic engine for Next-Gen Launch Vehicle.", link: "https://en.wikipedia.org/wiki/Next_Generation_Launch_Vehicle" }
                ],
                stat: { label: "Paper Submissions", value: "1,312", desc: "Total research papers submitted to GCWCN 2025, reflecting a massive spike in academic output." }
            },
            // --- PASTE THIS BLOCK IN newsDB['Education'] ---
            'Education': {
                date: 'November 29, 2025',
                lead: {
                    headline: "End of an Era: UGC to be Replaced by HECI",
                    summary: "The Ministry of Education is set to introduce the Higher Education Commission of India (HECI) Bill. This single regulator will subsume UGC, AICTE, and NCTE, aiming to streamline accreditation and standards in line with NEP 2020.",
                    link: "https://www.indiatoday.in/education-today/news/story/ugc-aicte-set-to-be-replaced-as-single-higher-education-regulator-moves-forward-2824637-2025-11-23"
                },
                bullets: [
                    { tag: "Protest", text: "Indian Statistical Institute (ISI) students protest against new governance bill.", link: "https://indianexpress.com/article/explained/what-is-the-indian-statistical-institute-bill-2025-and-why-there-are-protests-against-it-10391211/" },
                    { tag: "Policy", text: "HECI will not regulate Medical and Legal education streams.", link: "https://timesofindia.indiatimes.com/education/news/parliament-expected-to-introduce-heci-bill-aiming-to-unify-indias-higher-education-how-it-will-impact-institutions/articleshow/125506626.cms" },
                    { tag: "Funding", text: "Financial grant powers likely to remain with the Ministry, not HECI.", link: "https://indianexpress.com/article/education/winter-session-parliament-to-take-up-bill-replacing-ugc-aicte-ncte-with-single-regulator-10381204/" },
                    { tag: "Ranking", text: "IISc Bangalore ranks 1st in University category in NIRF 2025.", link: "https://engineering.careers360.com/articles/iisc-bangalore-nirf-ranking" },
                    { tag: "Skill", text: "CBSE introduces 'Design Thinking' and 'AI' as skill subjects for Class 6-12.", link: "https://www.cbse.gov.in/cbsenew/documents/01_Circular_2025_SKILL_10012025.pdf" },
                    { tag: "Insolvency", text: "Manipal Group eyes acquisition of Aakash via Byju's insolvency process.", link: "https://www.thehindu.com/news/national/karnataka/manipal-group-submits-eoi-to-participate-in-insolvency-process-ofthink-learn-parent-of-byjus/article70275975.ece" }
                ],
                stat: { label: "Regulators Merged", value: "3", desc: "UGC, AICTE, and NCTE will be merged into one body: HECI." }
            },
            // --- PASTE THIS BLOCK IN newsDB['Engineering'] ---
            'Engineering': {
                date: 'November 29, 2025',
                lead: {
                    headline: "Grid Modernization: The Smart Meter Push",
                    summary: "The Electricity Amendment Bill 2025 pushes for the deployment of smart meters and competition in power distribution. While engineering firms see this as a massive upgrade opportunity, state utilities are resisting the operational overhaul.",
                    link: "https://indianexpress.com/article/explained/everyday-explainers/inside-punjab-protests-against-centres-new-power-law-concerns-about-cherry-picking-consumers-eroding-subsidies-10389175/"
                },
                bullets: [
                    { tag: "Research", text: "IIT Madras develops 'Graphene coating' to protect underwater glass structures.", link: "https://www.iitd.ac.in/" },
                    { tag: "Civil", text: "Chenab Bridge, world's highest rail bridge, opens for commercial traffic.", link: "https://en.wikipedia.org/wiki/Chenab_Rail_Bridge" },
                    { tag: "Robotics", text: "Genrobotics unveils 'Bandicoot 3.0' for automated sewer cleaning.", link: "https://sanitation.genrobotics.com/" },
                    { tag: "Energy", text: "Adani Green bags transmission project for 2.5 GW Khavda renewable zone.", link: "https://www.mercomindia.com/adani-energy-bags-transmission-project-to-evacuate-2-5-gw-of-renewable-energy" },
                    { tag: "Space", text: "ISRO tests 2000kN semi-cryogenic engine for future heavy-lift launches.", link: "https://en.wikipedia.org/wiki/Next_Generation_Launch_Vehicle" },
                    { tag: "Tunnel", text: "Dholera SIR operationalizes India's first dedicated utility tunnel network.", link: "https://www.dholeraprime.com/ahmedabad-dholera-expressway-november-2025-work-progress-update/" }
                ],
                stat: { label: "Dist. Losses", value: "₹6.9L Cr", desc: "Accumulated losses of power distribution companies, prompting the urgent engineering and policy overhaul." }
            },
            // --- PASTE THIS BLOCK IN newsDB['Architecture'] ---
            'Architecture': {
                date: 'November 29, 2025',
                lead: {
                    headline: "Monumental Design: 77-ft Lord Ram Statue Unveiled",
                    summary: "Prime Minister Modi unveiled a massive 77-foot bronze statue of Lord Ram in Goa. The structure, designed to withstand coastal winds, blends traditional iconography with modern structural stability, marking a new addition to India's 'Statue Diplomacy'.",
                    link: "https://www.thehindu.com/news/top-news-of-the-day-indian-economy-growth-82-in-q2-cyclone-ditwah-wreaks-havoc-in-sri-lanka-likely-to-reach-tn-andhra-coast-on-nov-30-and-more/article70334743.ece"
                },
                bullets: [
                    { tag: "Event", text: "ACETECH Expo 2025 showcases latest building materials in Mumbai.", link: "https://acetechexpo.com/" },
                    { tag: "Urban", text: "Bengaluru proposes '15-minute city' plan to decongest traffic hotspots.", link: "https://timesofindia.indiatimes.com/city/bengaluru/building-bengaluru-2-0-city-bets-whopping-rs-1-5-lakh-crore-on-its-infrastructure/articleshow/125603009.cms" },
                    { tag: "Heritage", text: "Odisha unveils light and sound show at Konark Sun Temple.", link: "https://www.prameyanews.com/odisha-unveils-light-and-sound-show-at-konark-sun-temple" },
                    { tag: "Airport", text: "AAI to monitor Chennai Airport Terminal 3 project live to meet 2026 deadline.", link: "https://timesofindia.indiatimes.com/city/chennai/aai-to-monitor-terminal-3-project/articleshow/124882491.cms" },
                    { tag: "Expo", text: "Saifee Burhani Expo connects architects with smart home innovators.", link: "https://globy.com/events-calendar/listing/country/india/topic/architecture" },
                    { tag: "Design", text: "IIT Bombay renaming proposal sparks debate on institutional identity.", link: "https://indianexpress.com/article/education/today-news-headlines-for-school-assembly-27-november-2025-constitution-day-iit-bombay-renaming-proposed-protests-at-vit-over-jaundice-outbreak-govt-to-revise-sc-st-scholarship-rules-10387703/" }
                ],
                stat: { label: "Exhibitors", value: "4,095+", desc: "Number of brands showcasing at ACETECH 2025, reflecting the boom in the construction sector." }
            },
            // --- PASTE THIS BLOCK IN newsDB['Sports'] ---
            'Sports': {
                date: 'November 29, 2025',
                lead: {
                    headline: "U-19 Asia Cup: Ayush Mhatre to Lead India",
                    summary: "The junior selection committee has retained Ayush Mhatre as captain for the upcoming U-19 Asia Cup in Dubai. All eyes will be on 13-year-old sensation Vaibhav Sooryavanshi, who has been fast-tracked into the squad after impressive domestic performances.",
                    link: "https://www.thehindu.com/news/top-news-of-the-day-indian-economy-growth-82-in-q2-cyclone-ditwah-wreaks-havoc-in-sri-lanka-likely-to-reach-tn-andhra-coast-on-nov-30-and-more/article70334743.ece"
                },
                bullets: [
                    { tag: "Hockey", text: "Swiss Hockey coach praises Indian junior team's 'new confidence'.", link: "https://www.thehindu.com/news/top-news-of-the-day-indian-economy-growth-82-in-q2-cyclone-ditwah-wreaks-havoc-in-sri-lanka-likely-to-reach-tn-andhra-coast-on-nov-30-and-more/article70334743.ece" },
                    { tag: "F1", text: "Max Verstappen wins Las Vegas GP; Norris disqualified for skid block wear.", link: "https://www.theguardian.com/sport/2025/nov/23/max-verstappen-wins-f1-las-vegas-gp-lando-norris-second" },
                    { tag: "Chess", text: "World Champion Gukesh D suffers shock defeat in FIDE World Cup.", link: "https://www.indiatoday.in/sports/other-sports/story/fide-world-cup-2025-gukesh-knocked-out-third-round-frederik-svane-upset-2815932-2025-11-08" },
                    { tag: "Tourism", text: "Tourists rescued from 'Sky Dining' adventure sport facility in Munnar.", link: "https://www.thehindu.com/news/top-news-of-the-day-indian-economy-growth-82-in-q2-cyclone-ditwah-wreaks-havoc-in-sri-lanka-likely-to-reach-tn-andhra-coast-on-nov-30-and-more/article70334743.ece" },
                    { tag: "Cricket", text: "BCCI retains Ayush Mhatre as U-19 captain for Asia Cup.", link: "https://www.thehindu.com/news/top-news-of-the-day-indian-economy-growth-82-in-q2-cyclone-ditwah-wreaks-havoc-in-sri-lanka-likely-to-reach-tn-andhra-coast-on-nov-30-and-more/article70334743.ece" },
                    { tag: "Global", text: "Imran Khan's son seeks international help citing father's safety.", link: "https://www.thehindu.com/news/top-news-of-the-day-indian-economy-growth-82-in-q2-cyclone-ditwah-wreaks-havoc-in-sri-lanka-likely-to-reach-tn-andhra-coast-on-nov-30-and-more/article70334743.ece" }
                ],
                stat: { label: "Captain Age", value: "19", desc: "Ayush Mhatre, leading the next generation of Indian cricketers in the continental championship." }
            }
        };