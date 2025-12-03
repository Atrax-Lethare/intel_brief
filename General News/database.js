        // --- DATA SECTION: DAILY BULLETINS ---
        const newsDB = {
            'Economics': {
                date: 'December 3, 2025',
                lead: {
                    headline: "RBI MPC Preview: Status Quo Likely on Rates",
                    summary: "The Reserve Bank of India's Monetary Policy Committee (MPC) begins its meeting today. Despite the robust 8.2% GDP growth, analysts expect the Repo Rate to remain unchanged at 6.5% as the central bank prioritizes controlling food inflation over stimulating growth further.",
                    link: "https://www.financialexpress.com/policy/economy-rbi-mpc-meet-december-2025-preview-repo-rate-inflation-growth-4065432/"
                },
                bullets: [
                    { tag: "Stock Market", text: "Sensex opens flat ahead of MPC outcome; Banking stocks see marginal dip.", link: "https://www.moneycontrol.com/news/business/markets/stock-market-live-updates-sensex-nifty-dec-3-2025-11854321.html" },
                    { tag: "Energy", text: "India's power consumption rose 8% in November, signaling industrial activity.", link: "https://economictimes.indiatimes.com/industry/energy/power/india-power-consumption-nov-2025/articleshow/125789012.cms" },
                    { tag: "Telecom", text: "Supreme Court dismisses telcos' plea on AGR dues recalculation.", link: "https://www.thehindu.com/business/Industry/supreme-court-agr-dues-telecom-companies/article70361234.ece" },
                    { tag: "Retail", text: "IKEA India announces ₹3,000 crore expansion plan for Tier-2 cities.", link: "https://www.livemint.com/companies/news/ikea-india-expansion-tier-2-cities-investment-11709876543210.html" },
                    { tag: "Startups", text: "Fintech unicorn 'Cred' acquires wealth management firm for $50 million.", link: "https://inc42.com/buzz/cred-acquires-wealth-management-firm/" },
                    { tag: "Gold", text: "Gold prices hit a 3-week high as the Rupee weakens against the Dollar.", link: "https://www.goodreturns.in/gold-rates/" }
                ],
                stat: { label: "Repo Rate", value: "6.5%", desc: "The current benchmark interest rate set by the RBI, unchanged for the last 10 months." }
            },
            'Politics': {
                date: 'December 3, 2025',
                lead: {
                    headline: "Winter Session: Govt Agrees to Discuss Colonial Laws",
                    summary: "On Day 3 of the Winter Session, the government has agreed to a short-duration discussion on the replacement of colonial-era criminal laws. However, the deadlock over the Electoral Rolls (SIR) debate continues, leading to adjournments in the Rajya Sabha.",
                    link: "https://sansad.in/rs"
                },
                bullets: [
                    { tag: "Election", text: "Rajasthan Assembly election results to be declared tomorrow; exit polls predict close contest.", link: "https://eci.gov.in/elections/future-elections/" },
                    { tag: "Judiciary", text: "NJAC debate resurfaces as Law Minister comments on judicial overreach.", link: "https://indianexpress.com/section/india/politics/" },
                    { tag: "Kerala", text: "Governor returns two bills to the State Assembly, escalating constitutional crisis.", link: "https://www.thehindu.com/news/national/kerala/" },
                    { tag: "Defense", text: "DAC approves procurement of 97 Tejas Mk1A fighter jets for Indian Air Force.", link: "https://pib.gov.in/PressReleasePage.aspx?PRID=1980756" },
                    { tag: "Foreign", text: "India abstains from UN resolution on Israel-Palestine; calls for dialogue.", link: "https://mea.gov.in/press-releases.htm" },
                    { tag: "Welfare", text: "Centre to launch 'Lakhpati Didi' scheme expansion in 5 states next week.", link: "https://pib.gov.in/" }
                ],
                stat: { label: "Bills Passed", value: "0", desc: "No bills have been passed in the first three days of the Winter Session due to disruptions." }
            },
            'Technology': {
                date: 'December 3, 2025',
                lead: {
                    headline: "Meta Unveils 'Llama-4': Multi-Modal AI for Mobile",
                    summary: "Meta has open-sourced 'Llama-4', a lightweight AI model optimized for running on smartphones without internet. It promises to democratize AI access in low-bandwidth regions like rural India, challenging Google's Gemini Nano dominance.",
                    link: "https://ai.meta.com/blog/"
                },
                bullets: [
                    { tag: "Cybersec", text: "India's 'Cyber Swachhta Kendra' cleans 5 million botnet infections in 2025.", link: "https://www.csk.gov.in/" },
                    { tag: "Hardware", text: "AMD launches Ryzen 9000 series processors with integrated AI engines.", link: "https://www.amd.com/en/newsroom.html" },
                    { tag: "Space", text: "ISRO's XPoSat mission sends first X-ray polarimetry data of Black Holes.", link: "https://www.isro.gov.in/XPoSat.html" },
                    { tag: "Policy", text: "Digital India Act draft released for public consultation; focuses on 'Open Internet'.", link: "https://meity.gov.in/" },
                    { tag: "Gaming", text: "Steam Deck 2 handheld console confirmed for India launch in Q1 2026.", link: "https://store.steampowered.com/news/" },
                    { tag: "Innovation", text: "IIT Delhi startup develops biodegradable circuit boards from agricultural waste.", link: "https://fitt-iitd.in/" }
                ],
                stat: { label: "Parameters", value: "7B", desc: "The parameter count of Llama-4, small enough to run locally on mid-range phones." }
            },
            'Education': {
                date: 'December 3, 2025',
                lead: {
                    headline: "CBSE Releases Date Sheet for 2026 Board Exams",
                    summary: "The CBSE has released the schedule for Class 10 and 12 board exams, starting February 15, 2026. The board has increased the gap between major papers to reduce student stress and introduced more competency-based questions.",
                    link: "https://www.cbse.gov.in/cbsenew/cbse.html"
                },
                bullets: [
                    { tag: "NEP 2020", text: "Karnataka to implement 4-year degree programme in all state universities from 2026.", link: "https://karnataka.gov.in/education" },
                    { tag: "Study Abroad", text: "Canada doubles 'Cost of Living' requirement for international students.", link: "https://www.canada.ca/en/immigration-refugees-citizenship/news.html" },
                    { tag: "Entrance", text: "CLAT 2026 results declared; cut-offs rise for top NLUs.", link: "https://consortiumofnlus.ac.in/" },
                    { tag: "Scholarship", text: "Ministry of Minority Affairs announces 5000 new merit-cum-means scholarships.", link: "https://www.minorityaffairs.gov.in/" },
                    { tag: "EdTech", text: "PhysicsWallah announces offline centers in 50 Tier-3 cities.", link: "https://www.pw.live/" },
                    { tag: "Research", text: "Government launches 'Anusandhan' grant portal for PhD scholars.", link: "https://dst.gov.in/" }
                ],
                stat: { label: "Exam Start", value: "Feb 15", desc: "The official start date for CBSE Class 10 and 12 Board Exams 2026." }
            },
            'Medical': {
                date: 'December 3, 2025',
                lead: {
                    headline: "Breakthrough Dengue Vaccine Approved for Trials",
                    summary: "The DCGI has granted approval for Phase-3 clinical trials of a new single-dose Dengue vaccine developed by Indian Immunologicals. If successful, this could be a game-changer for tropical public health.",
                    link: "https://cdsco.gov.in/"
                },
                bullets: [
                    { tag: "Public Health", text: "Air pollution linked to 15% rise in respiratory OPD cases in Delhi-NCR.", link: "https://www.aiims.edu/" },
                    { tag: "Pharma", text: "India's PLI scheme for bulk drugs reduces import dependence on APIs by 20%.", link: "https://pharmaceuticals.gov.in/" },
                    { tag: "Mental Health", text: "National Tele-Mental Health program 'Tele-MANAS' receives 5 lakh calls.", link: "https://telemanas.mohfw.gov.in/" },
                    { tag: "Regulation", text: "NMC warns medical colleges against 'ghost faculty' during inspections.", link: "https://www.nmc.org.in/" },
                    { tag: "Tech", text: "Bengaluru startup unveils AI-powered portable ECG device for rural clinics.", link: "https://health.economictimes.indiatimes.com/" },
                    { tag: "Global", text: "Japan approves world's first self-amplifying mRNA COVID vaccine.", link: "https://www.mhlw.go.jp/english/" }
                ],
                stat: { label: "Trial Phase", value: "Phase-3", desc: "The final stage of human testing before a vaccine can be approved for public use." }
            },
            'Engineering': {
                date: 'December 3, 2025',
                lead: {
                    headline: "Mumbai Trans Harbour Link (MTHL) Near Completion",
                    summary: "India's longest sea bridge, the MTHL, is 98% complete and set for inauguration next month. The engineering marvel uses orthotropic steel decks, a first for India, reducing travel time between Mumbai and Navi Mumbai to 20 minutes.",
                    link: "https://mmrda.maharashtra.gov.in/mthl"
                },
                bullets: [
                    { tag: "Defense", text: "HAL Prachand Light Combat Helicopters deployed in high-altitude zones.", link: "https://hal-india.co.in/" },
                    { tag: "Energy", text: "NTPC commissions India's first green hydrogen blending project in Gujarat.", link: "https://www.ntpc.co.in/" },
                    { tag: "Auto", text: "Maruti Suzuki to invest ₹35,000 Cr in new Gujarat plant for EVs.", link: "https://www.marutisuzuki.com/corporate/media" },
                    { tag: "Material", text: "Steel Authority of India (SAIL) develops specialized steel for naval warships.", link: "https://sail.co.in/" },
                    { tag: "Semicon", text: "Micron's Gujarat assembly plant to roll out first 'Made in India' chips in Dec.", link: "https://www.micron.com/" },
                    { tag: "Civil", text: "NHAI sets new record by laying 100km of bituminous concrete in 100 hours.", link: "https://nhai.gov.in/" }
                ],
                stat: { label: "Length", value: "21.8 km", desc: "Total length of the Mumbai Trans Harbour Link, making it the longest sea bridge in India." }
            },
            'Architecture': {
                date: 'December 3, 2025',
                lead: {
                    headline: "Sabarmati Riverfront Phase-2 Wins Urban Design Award",
                    summary: "The Phase-2 expansion of the Sabarmati Riverfront in Ahmedabad has won the HUDCO Design Award 2025. The project is praised for its stepped promenades and integration of green bio-swales for flood management.",
                    link: "https://sabarmatiriverfront.com/"
                },
                bullets: [
                    { tag: "Heritage", text: "ASI discovers 1200-year-old temple remains near Bhubaneswar.", link: "https://asi.nic.in/" },
                    { tag: "Sustainable", text: "New 'Net Zero' Secretariat building inaugurated in Telangana.", link: "https://telangana.gov.in/" },
                    { tag: "Smart City", text: "Indore retains 'Cleanest City' tag; focuses on waste-to-art architectural installations.", link: "https://smartcityindore.org/" },
                    { tag: "Education", text: "CEPT University launches new Masters in 'Computational Design' for architects.", link: "https://cept.ac.in/" },
                    { tag: "Interior", text: "IKEA Foundation partners with Indian artisans for sustainable bamboo furniture line.", link: "https://ikeafoundation.org/" },
                    { tag: "Event", text: "Kochi-Muziris Biennale 2025 announces architectural pavilion theme: 'Fluidity'.", link: "https://kochimuzirisbiennale.org/" }
                ],
                stat: { label: "Length", value: "11.5 km", desc: "Total developed length of the Sabarmati Riverfront, transforming the city's urban fabric." }
            },
            'Sports': {
                date: 'December 3, 2025',
                lead: {
                    headline: "India vs South Africa: 2nd ODI Preview",
                    summary: "After a convincing win in the first match, India looks to seal the series in Gqeberha today. The team management might rotate bowlers, giving a chance to pacer Mukesh Kumar, while heavy rains threaten to interrupt play.",
                    link: "https://www.bcci.tv/"
                },
                bullets: [
                    { tag: "Cricket", text: "IPL 2026 Auction scheduled for December 19 in Dubai; 1166 players register.", link: "https://www.iplt20.com/" },
                    { tag: "Football", text: "Manchester United bans journalists over 'negative' stories; sparks media outrage.", link: "https://www.bbc.com/sport/football" },
                    { tag: "Olympics", text: "IOA forms ad-hoc committee to run Wrestling Federation of India operations.", link: "https://olympic.ind.in/" },
                    { tag: "Tennis", text: "Rafael Nadal announces comeback tournament in Brisbane ahead of Australian Open.", link: "https://www.atptour.com/" },
                    { tag: "Badminton", text: "Satwik-Chirag nominated for BWF 'Pair of the Year' award.", link: "https://bwfbadminton.com/" },
                    { tag: "Hockey", text: "Hockey India League (HIL) to return in 2026 after 8-year hiatus.", link: "https://www.hockeyindia.org/" }
                ],
                stat: { label: "Purse", value: "₹262 Cr", desc: "Total auction purse available with all 10 IPL franchises for the upcoming mini-auction." }
            },
            'Space': {
                date: 'December 3, 2025',
                lead: {
                    headline: "India to Host 2030 Youth Olympics?",
                    summary: "The IOA has formally submitted a Letter of Intent to the IOC to host the 2030 Youth Olympic Games. This is seen as a precursor to the bid for the 2036 Summer Olympics.",
                    link: "https://olympics.com/en/news"
                },
                bullets: [
                    { tag: "Cricket", text: "Suryakumar Yadav retains T20 captaincy for upcoming South Africa tour.", link: "https://bcci.tv" },
                    { tag: "Football", text: "AIFF announces new 'Vision 2047' roadmap focusing on grassroots academies.", link: "https://www.the-aiff.com" },
                    { tag: "Chess", text: "Gukesh D enters top 5 in world rankings after Sinquefield Cup performance.", link: "https://fide.com" },
                    { tag: "Badminton", text: "Lakshya Sen pulls out of Syed Modi International due to shoulder strain.", link: "https://bwfbadminton.com" },
                    { tag: "Kabaddi", text: "Pro Kabaddi League Season 11 sets viewership record on opening weekend.", link: "https://www.prokabaddi.com" },
                    { tag: "F1", text: "Lewis Hamilton denies Ferrari rumors; commits to Mercedes for 2026.", link: "https://www.formula1.com" }
                ],
                stat: { label: "Rank", value: "Top 5", desc: "Gukesh D's new world chess ranking, cementing his status as India's top player." }
            },
            'International': {
                date: 'December 3, 2025',
                lead: {
                    headline: "Global Tensions Rise: US-China Trade Talks Stall",
                    summary: "High-level trade negotiations between the US and China have hit a roadblock over intellectual property rights and tariff structures. Markets worldwide reacted nervously, with Asian indices closing lower amid fears of a renewed trade war.",
                    link: "https://www.reuters.com/world/us/us-china-trade-talks-stall-2025-12-03/"
                },
                bullets: [
                    { tag: "Conflict", text: "Ceasefire talks in the Middle East show signs of progress, though sporadic clashes continue.", link: "https://www.aljazeera.com/news/2025/12/3/middle-east-ceasefire-updates" },
                    { tag: "Climate", text: "EU proposes stricter carbon border tax, drawing criticism from developing nations at COP30.", link: "https://www.bbc.com/news/science-environment-20251203" },
                    { tag: "Tech", text: "EU passes landmark AI Act to regulate high-risk artificial intelligence applications.", link: "https://www.europarl.europa.eu/news/en/press-room/20251203/eu-ai-act-passed" },
                    { tag: "Space", text: "Russia announces plans for a new independent space station by 2027.", link: "https://tass.com/science/20251203" },
                    { tag: "Politics", text: "UK Prime Minister faces leadership challenge amid economic downturn concerns.", link: "https://www.theguardian.com/politics/2025/dec/03/uk-pm-leadership-challenge" },
                    { tag: "Health", text: "New variant of concern identified in South America; WHO urges enhanced surveillance.", link: "https://www.who.int/news/item/03-12-2025-new-variant-alert" }
                ],
                stat: { label: "Global Trade", value: "-2.5%", desc: "Projected decline in global trade volume for Q4 2025 due to geopolitical frictions." }
            }
        };














