        // --- DATA SECTION: DAILY BULLETINS ---
        const newsDB = {
            'Economics': {
                date: 'November 29, 2025',
                lead: {
                    headline: "Sensex Crosses 85k on Strong GDP Data",
                    summary: "Benchmark indices hit record highs as India's Q2 GDP growth of 8.2% beat street estimates. Banking and Auto stocks led the rally, fuelled by renewed Foreign Portfolio Investor (FPI) buying and expectations of a rate cut by the RBI in December.",
                    link: "https://www.moneycontrol.com"
                },
                bullets: [
                    { tag: "Growth", text: "Manufacturing sector grows at 11.5%, driving the GDP surge.", link: "https://www.thehindu.com/business" },
                    { tag: "Inflation", text: "Retail inflation (CPI) dips to 4.5%, within RBI's tolerance band.", link: "https://rbi.org.in" },
                    { tag: "Trade", text: "Commerce Ministry to unveil new 'E-commerce Export Hubs' policy next week.", link: "https://commerce.gov.in" },
                    { tag: "Energy", text: "Adani Green announces ₹10,000 cr investment in wind-solar hybrid projects.", link: "https://www.adanigreenenergy.com" },
                    { tag: "Telecom", text: "TRAI proposes lowering spectrum usage charges to boost 6G research.", link: "https://trai.gov.in" },
                    { tag: "Startup", text: "Zepto becomes the first quick-commerce startup to turn EBITDA positive.", link: "https://economictimes.indiatimes.com" }
                ],
                stat: { label: "Q2 GDP", value: "8.2%", desc: "Real GDP growth rate for July-September 2025, beating the RBI estimate of 7.2%." }
            },
            'Politics': {
                date: 'November 29, 2025',
                lead: {
                    headline: "Winter Session: Opposition Unites on Federalism",
                    summary: "The I.N.D.I.A bloc has announced a unified strategy to oppose the Electricity Amendment Bill and the proposed HECI Bill in the upcoming Winter Session, terming them as assaults on the federal structure and state autonomy.",
                    link: "https://sansad.in/ls"
                },
                bullets: [
                    { tag: "Bills", text: "Government lists 18 bills for consideration, including the Digital India Act.", link: "https://prsindia.org" },
                    { tag: "Election", text: "EC holds all-party meeting to discuss 'Remote Voting Machines' for migrants.", link: "https://eci.gov.in" },
                    { tag: "Judiciary", text: "President appoints two new judges to the Supreme Court, creating a full bench.", link: "https://doj.gov.in" },
                    { tag: "Diplomacy", text: "External Affairs Minister to visit Tehran to discuss the North-South Corridor.", link: "https://mea.gov.in" },
                    { tag: "States", text: "Governor-Government rift widens in Tamil Nadu over pending bills.", link: "https://www.thehindu.com" },
                    { tag: "Policy", text: "Cabinet approves extension of free foodgrain scheme for another 5 years.", link: "https://pib.gov.in" }
                ],
                stat: { label: "Sitting Days", value: "15", desc: "Total scheduled sittings for the Winter Session of Parliament 2025." }
            },
            'Technology': {
                date: 'November 29, 2025',
                lead: {
                    headline: "Deepfake Regulation: Govt to notify IT Rules Amendment",
                    summary: "The Ministry of Electronics and IT (MeitY) is set to notify amendments to the IT Rules, mandating social media intermediaries to label AI-generated content within 24 hours. Non-compliance could lead to the loss of 'Safe Harbour' protection.",
                    link: "https://meity.gov.in"
                },
                bullets: [
                    { tag: "AI", text: "Google DeepMind unveils 'Gemini-3', claiming 50% faster reasoning than GPT-5.", link: "https://blog.google" },
                    { tag: "Cybersec", text: "CERT-In warns of 'Akira' ransomware targeting Indian healthcare nodes.", link: "https://cert-in.org.in" },
                    { tag: "Space", text: "ISRO announces 'Bharatiya Antariksh Station' module launch timeline.", link: "https://isro.gov.in" },
                    { tag: "Hardware", text: "Tata Electronics begins commercial production of semiconductor chips in Assam.", link: "https://www.tata.com" },
                    { tag: "Crypto", text: "RBI Governor reiterates warning on crypto risks despite global rally.", link: "https://rbi.org.in" },
                    { tag: "App", text: "WhatsApp launches 'Secret Code' feature for locked chats globally.", link: "https://blog.whatsapp.com" }
                ],
                stat: { label: "Internet Users", value: "950M", desc: "Projected active internet users in India by the end of 2025, per IAMAI report." }
            },
            'Education': {
                date: 'November 29, 2025',
                lead: {
                    headline: "HECI to Replace UGC: What Changes for Students?",
                    summary: "The proposed Higher Education Commission of India (HECI) will introduce a single-window system for higher education regulation. Key changes include a focus on learning outcomes over infrastructure norms and the permission for foreign universities to repatriate funds.",
                    link: "https://education.gov.in"
                },
                bullets: [
                    { tag: "Exams", text: "JEE Main 2026 registration sees record 14 lakh applicants.", link: "https://jeemain.nta.nic.in" },
                    { tag: "School", text: "NCERT releases new 'Bridge Course' modules for students transitioning to NEP.", link: "https://ncert.nic.in" },
                    { tag: "Global", text: "Deakin University GIFT City campus receives 5000+ applications for 2026 batch.", link: "https://www.deakin.edu.au" },
                    { tag: "Medical", text: "NMC announces common counselling for NEET PG to reduce seat wastage.", link: "https://www.nmc.org.in" },
                    { tag: "Skill", text: "Skill India partners with Toyota for EV mechanic training programs.", link: "https://msde.gov.in" },
                    { tag: "Research", text: "Government hikes PhD fellowship stipend by 20% effective immediately.", link: "https://dst.gov.in" }
                ],
                stat: { label: "GER Target", value: "50%", desc: "The target Gross Enrolment Ratio in higher education by 2035 under NEP 2020." }
            },
            'Engineering': {
                date: 'November 29, 2025',
                lead: {
                    headline: "Chenab Bridge: World's Highest Rail Bridge Operational",
                    summary: "Indian Railways has officially commenced commercial operations on the Chenab Bridge in J&K. Standing 359 meters above the river bed, it is an engineering marvel that connects the Kashmir valley to the rest of the Indian railway network.",
                    link: "https://indianrailways.gov.in"
                },
                bullets: [
                    { tag: "Metro", text: "Bangalore Metro Yellow Line (Driverless) receives final safety clearance.", link: "https://bmrc.co.in" },
                    { tag: "Tunnel", text: "Zojila Tunnel breakthrough achieved; set to be Asia's longest bi-directional tunnel.", link: "https://nhidcl.com" },
                    { tag: "Auto", text: "Mahindra opens new EV battery testing facility in Tamil Nadu.", link: "https://mahindra.com" },
                    { tag: "Energy", text: "BHEL secures order for thermal power plant expansion in Chhattisgarh.", link: "https://bhel.com" },
                    { tag: "Material", text: "DRDO develops self-healing composite material for aerospace applications.", link: "https://drdo.gov.in" },
                    { tag: "Water", text: "Polavaram project completes spillway installation ahead of monsoon.", link: "https://irrigationap.cgg.gov.in" }
                ],
                stat: { label: "Steel Used", value: "28,000 MT", desc: "Amount of steel used in the Chenab Bridge, capable of withstanding blast and seismic activity." }
            },
            'Architecture': {
                date: 'November 29, 2025',
                lead: {
                    headline: "Pritzker Prize 2025: Focus on Social Housing",
                    summary: "The 2025 Pritzker Architecture Prize has been awarded to a collective focused on sustainable social housing in Latin America. The jury highlighted the shift away from 'Starchitecture' towards adaptive reuse and community-centric design.",
                    link: "https://www.pritzkerprize.com"
                },
                bullets: [
                    { tag: "Urban", text: "New Delhi's Central Vista Redevelopment enters final landscaping phase.", link: "https://centralvista.gov.in" },
                    { tag: "Heritage", text: "ASI completes restoration of the Hoysala Temples in Karnataka.", link: "https://asi.nic.in" },
                    { tag: "Green", text: "Surat Diamond Bourse creates benchmark for solar-passive office design.", link: "https://suratdiamondbourse.in" },
                    { tag: "Award", text: "Indian architect wins Aga Khan Award for rural school project in Bengal.", link: "https://theakdn.org" },
                    { tag: "Tech", text: "3D Printed Post Office in Bengaluru sets record for construction speed.", link: "https://www.larsentoubro.com" },
                    { tag: "Design", text: "Minimalist 'Japandi' style dominates Interior Design Week 2025.", link: "https://www.archdaily.com" }
                ],
                stat: { label: "Net Zero", value: "2070", desc: "India's target year for Net Zero emissions, driving a massive shift in building codes (ECBC)." }
            },
            'Sports': {
                date: 'November 29, 2025',
                lead: {
                    headline: "India Wins T20 Series Against Australia",
                    summary: "A young Indian side led by Suryakumar Yadav clinched the T20 series against Australia with a thrilling victory in the 4th match. Rinku Singh's finishing and Axar Patel's spin web were the highlights, solidifying India's bench strength ahead of the World Cup.",
                    link: "https://bcci.tv"
                },
                bullets: [
                    { tag: "Cricket", text: "Hardik Pandya returns to training at NCA after ankle injury rehab.", link: "https://bcci.tv" },
                    { tag: "Football", text: "Kerala Blasters top ISL table with a 3-0 win over Mohun Bagan.", link: "https://www.indiansuperleague.com" },
                    { tag: "Tennis", text: "Sumit Nagal breaks into ATP Top 80 after Challenger win in Finland.", link: "https://atptour.com" },
                    { tag: "Chess", text: "Praggnanandhaa qualifies for Candidates 2026 after finishing 2nd in Grand Swiss.", link: "https://fide.com" },
                    { tag: "Olympics", text: "Neeraj Chopra confirms participation in Diamond League opener.", link: "https://olympics.com" },
                    { tag: "Badminton", text: "PV Sindhu appoints new South Korean coach to arrest slump in form.", link: "https://bwfbadminton.com" }
                ],
                stat: { label: "Strike Rate", value: "195.4", desc: "Rinku Singh's batting strike rate in the death overs (16-20) this series." }
            }
        };
