// Mock leads for demo mode - Location-specific examples
export const mockLeads = {
  Austin: [
    {
      posterName: "Marcus Thompson",
      groupName: "Austin Property Owners Network",
      city: "Austin",
      postText: "URGENT - I can't do this anymore. Managing 4 Airbnbs is killing me. Guests messaging at 3am, constant cleanings, endless maintenance issues. Just had another guest complain about WiFi while I'm trying to enjoy my daughter's birthday. I need a property manager who specializes in STR NOW. These properties are in downtown Austin and South Congress. Who can take over ASAP? Money isn't the issue - my sanity is. Please help!",
      postUrl: "https://facebook.com/groups/austin-property/posts/947382",
      timestamp: new Date('2025-06-17T14:32:00Z').toISOString(),
      summary: "Overwhelmed owner of 4 Austin Airbnbs desperately seeking immediate property management help due to burnout from 24/7 guest demands.",
      intentScore: 92,
      intentCategory: "High Intent",
      persona: "burned_out_host",
      personaType: "Burned-Out Host",
      urgency: "urgent",
      matchedIntent: "immediate_need",
      propertyDetails: {
        propertyCount: 4,
        propertyType: "Airbnb/STR",
        location: "Downtown Austin & South Congress",
        rentalType: "STR"
      },
      outreachMessage: "Hi Marcus! I understand the STR burnout - managing 4 properties solo is overwhelming. I specialize in Austin Airbnbs and can take over immediately. Let's talk today?",
      riskFlags: [],
      nextSteps: ["Send DM immediately", "Offer same-day consultation"]
    },
    {
      posterName: "Sarah Chen",
      groupName: "Austin Real Estate Investors",
      city: "Austin",
      postText: "Been running STRs in East Austin for 2 years but the city regulations are getting crazy. Plus dealing with party guests every weekend is exhausting. Thinking about converting to long-term rentals but not sure I want to deal with tenant issues either. Maybe time to get a property manager? Anyone using one for LTR in Austin? Worth the 8-10% fee?",
      postUrl: "https://facebook.com/groups/austin-investors/posts/558291",
      timestamp: new Date('2025-06-17T09:15:00Z').toISOString(),
      summary: "Austin STR owner considering switch to LTR due to regulations and burnout, exploring property management options but concerned about fees.",
      intentScore: 65,
      intentCategory: "Good Prospect",
      persona: "switching_strategy",
      personaType: "Strategy Switcher",
      urgency: "medium",
      matchedIntent: "exploring_options",
      propertyDetails: {
        propertyCount: null,
        propertyType: "STR properties",
        location: "East Austin",
        rentalType: "STR"
      },
      outreachMessage: "Hi Sarah! Many Austin STR owners are making the switch. A good PM can handle the transition and typically pays for itself through better tenant screening and retention. Let's discuss Austin-specific strategies?",
      riskFlags: ["price_sensitive"],
      nextSteps: ["Share STR to LTR transition guide", "Offer fee structure comparison"]
    },
    {
      posterName: "Jessica Martinez",
      groupName: "Austin Property Owners Network",
      city: "Austin",
      postText: "First time landlord here! Just bought a duplex in North Austin (78758). Living in one side, planning to rent the other. How do you all handle maintenance requests? Do I need to be on call 24/7? Not sure if I should try managing myself or hire someone. What's normal in Austin?",
      postUrl: "https://facebook.com/groups/austin-property/posts/773625",
      timestamp: new Date('2025-06-17T16:45:00Z').toISOString(),
      summary: "New Austin duplex owner seeking basic landlord advice, very early in process, lives on-site which reduces PM need.",
      intentScore: 35,
      intentCategory: "Low Interest",
      persona: "new_investor",
      personaType: "New Landlord",
      urgency: "low",
      matchedIntent: "general_inquiry",
      propertyDetails: {
        propertyCount: 1,
        propertyType: "Duplex (owner-occupied)",
        location: "North Austin (78758)",
        rentalType: "LTR"
      },
      outreachMessage: "Welcome to landlording, Jessica! Since you live on-site, self-managing one unit is definitely doable. Happy to share Austin landlord resources and tips for getting started!",
      riskFlags: ["early_stage", "owner_occupied", "single_unit"],
      nextSteps: ["Provide new landlord checklist", "Offer future PM services as portfolio grows"]
    },
    {
      posterName: "Robert Taylor",
      groupName: "Austin Rental Property Owners",
      city: "Austin",
      postText: "Moving to California next month for a new job but keeping my 3 rentals in Austin (2 in Hyde Park, 1 in Mueller). Current tenants are great but I'm worried about managing from 1,500 miles away. My handyman is retiring too. How do other remote landlords handle Austin properties? Considering a PM but hate giving up control.",
      postUrl: "https://facebook.com/groups/austin-rentals/posts/885743",
      timestamp: new Date('2025-06-17T11:20:00Z').toISOString(),
      summary: "Austin landlord relocating to California, owns 3 properties in prime neighborhoods, concerned about remote management.",
      intentScore: 78,
      intentCategory: "High Intent",
      persona: "remote_owner",
      personaType: "Remote Owner",
      urgency: "high",
      matchedIntent: "remote_management",
      propertyDetails: {
        propertyCount: 3,
        propertyType: "Residential rentals",
        location: "Hyde Park & Mueller",
        rentalType: "LTR"
      },
      outreachMessage: "Hi Robert! Managing Austin properties from California is challenging. I work with several remote owners and provide detailed monthly reports so you stay in control. Let's chat before your move?",
      riskFlags: ["control_concerns"],
      nextSteps: ["Schedule call before move", "Emphasize communication and transparency"]
    }
  ],
  Denver: [
    {
      posterName: "Rachel Patel",
      groupName: "Denver Short-Term Rental Alliance",
      city: "Denver",
      postText: "I'm DONE. Just got another violation notice from the city about my STR license renewal. Between the new Denver regulations, snow removal complaints, and guests who can't figure out how to work the thermostat at high altitude, I need OUT. Have 5 properties - 3 in LoDo, 2 near Wash Park. Need a PM who knows Denver STR rules inside and out. This is urgent - I'm about to lose my license if I don't get compliant ASAP!",
      postUrl: "https://facebook.com/groups/denver-str/posts/445892",
      timestamp: new Date('2025-06-17T08:45:00Z').toISOString(),
      summary: "Denver STR owner with 5 properties facing compliance issues and city violations, urgently needs PM familiar with local regulations.",
      intentScore: 94,
      intentCategory: "High Intent",
      persona: "burned_out_host",
      personaType: "Burned-Out Host",
      urgency: "urgent",
      matchedIntent: "immediate_need",
      propertyDetails: {
        propertyCount: 5,
        propertyType: "STR properties",
        location: "LoDo & Washington Park",
        rentalType: "STR"
      },
      outreachMessage: "Hi Rachel! I specialize in Denver STR compliance and can get your properties up to code immediately. I know the licensing process inside out. Let's fix this today before any penalties!",
      riskFlags: ["compliance_issues"],
      nextSteps: ["Emergency consultation today", "STR compliance audit"]
    },
    {
      posterName: "Michael Brooks",
      groupName: "Denver Real Estate Investors",
      city: "Denver",
      postText: "Own a few rentals in Denver proper plus a cabin in Evergreen that I Airbnb. The mountain property is killing me - every week it's either the hot tub, the driveway needs plowing, or guests getting altitude sickness. Denver properties are easier but still a hassle coordinating everything. Been self-managing for 5 years... starting to wonder if it's worth saving the PM fees anymore. What's the going rate in Denver metro these days?",
      postUrl: "https://facebook.com/groups/denver-investors/posts/772341",
      timestamp: new Date('2025-06-17T13:20:00Z').toISOString(),
      summary: "Experienced Denver landlord with metro and mountain properties experiencing maintenance fatigue, considering PM after 5 years of self-managing.",
      intentScore: 62,
      intentCategory: "Good Prospect",
      persona: "burned_out_host",
      personaType: "Tired Landlord",
      urgency: "medium",
      matchedIntent: "exploring_options",
      propertyDetails: {
        propertyCount: null,
        propertyType: "Mixed (rentals + mountain STR)",
        location: "Denver metro & Evergreen",
        rentalType: "mixed"
      },
      outreachMessage: "Hi Michael! Managing mountain properties remotely is especially tough. Many Denver investors find PMs actually increase profits through better maintenance coordination and occupancy. Let's review your portfolio?",
      riskFlags: ["price_shopping", "long_term_diy"],
      nextSteps: ["Portfolio analysis", "Mountain property management pitch"]
    },
    {
      posterName: "Amy Sullivan",
      groupName: "Denver Property Owners Forum",
      city: "Denver",
      postText: "Hi all! Just inherited my grandmother's house in Park Hill. It's been sitting empty for 6 months while we dealt with the estate. Beautiful 1920s bungalow but needs some work. Debating whether to sell or rent it out. If I rent, do most people self-manage or hire a company? Also worried about Denver's rental licensing requirements I keep hearing about. Any advice?",
      postUrl: "https://facebook.com/groups/denver-property/posts/339281",
      timestamp: new Date('2025-06-17T15:10:00Z').toISOString(),
      summary: "Inherited vintage Denver home, undecided on renting vs selling, needs education on licensing and property management basics.",
      intentScore: 32,
      intentCategory: "Low Interest",
      persona: "new_investor",
      personaType: "Inherited Property",
      urgency: "low",
      matchedIntent: "general_inquiry",
      propertyDetails: {
        propertyCount: 1,
        propertyType: "1920s bungalow",
        location: "Park Hill",
        rentalType: "unknown"
      },
      outreachMessage: "Hi Amy! Park Hill is a great rental market. Happy to share info on Denver's rental license process and what renovations typically yield the best ROI. Many inherited property owners find PMs helpful for navigating regulations.",
      riskFlags: ["may_sell", "needs_renovation", "early_stage"],
      nextSteps: ["Rental vs sale analysis", "Licensing education"]
    },
    {
      posterName: "Carlos Rodriguez",
      groupName: "Colorado Real Estate Investors Network",
      city: "Denver",
      postText: "Time to face reality - I can't scale anymore while self-managing. Currently have 8 units (mix of condos and duplexes) from Capitol Hill to Aurora. Just got approved for financing on a 6-unit in Five Points but I'm already working 40+ hours/week on the properties I have. Need a PM who can handle my current portfolio AND help me grow. Looking for someone who gets investor mindset, not just collecting rent. Who's the best in Denver?",
      postUrl: "https://facebook.com/groups/colorado-rein/posts/667234",
      timestamp: new Date('2025-06-17T10:30:00Z').toISOString(),
      summary: "Successful Denver investor with 8 units ready to scale, needs PM partner who understands growth strategy and investor goals.",
      intentScore: 88,
      intentCategory: "High Intent",
      persona: "scaling_portfolio",
      personaType: "Scaling Investor",
      urgency: "high",
      matchedIntent: "growth_partner",
      propertyDetails: {
        propertyCount: 8,
        propertyType: "Mixed condos and duplexes",
        location: "Capitol Hill to Aurora",
        rentalType: "LTR"
      },
      outreachMessage: "Hi Carlos! Congrats on the Five Points deal! I partner with several Denver investors on portfolio growth - from acquisition analysis to maximizing NOI. Let's discuss how PM can accelerate your scaling goals.",
      riskFlags: [],
      nextSteps: ["Growth strategy session", "Portfolio takeover plan"]
    }
  ],
  Miami: [
    {
      posterName: "David Kim",
      groupName: "Miami Beach Condo Owners Association",
      city: "Miami",
      postText: "HELP!! My PM company just shut down (Miami Luxury Rentals - anyone else affected?). I have 3 beachfront condos with guests checking in THIS WEEK and no one to manage them. I'm in NYC and can't fly down. The cleaning crew doesn't speak English, the building has strict rules about visitor parking, and hurricane season is starting. Need a PM who knows Miami Beach condo regulations and can take over IMMEDIATELY. Will pay premium for quick response!",
      postUrl: "https://facebook.com/groups/miamibeach-condos/posts/998123",
      timestamp: new Date('2025-06-17T07:15:00Z').toISOString(),
      summary: "NYC-based owner with 3 Miami Beach condos in crisis after PM company closure, needs immediate takeover before guest arrivals.",
      intentScore: 96,
      intentCategory: "High Intent",
      persona: "remote_owner",
      personaType: "Crisis Management",
      urgency: "urgent",
      matchedIntent: "emergency_need",
      propertyDetails: {
        propertyCount: 3,
        propertyType: "Beachfront condos",
        location: "Miami Beach",
        rentalType: "STR"
      },
      outreachMessage: "Hi David! I can take over your properties today and handle the incoming guests. I'm familiar with Miami Beach condo rules and have Spanish-speaking staff. Let's connect ASAP to save these bookings!",
      riskFlags: ["emergency_situation"],
      nextSteps: ["Immediate phone call", "Emergency takeover protocol"]
    },
    {
      posterName: "Jennifer Lopez",
      groupName: "Miami Real Estate Investors",
      city: "Miami",
      postText: "Anyone else tired of Miami traffic? I own 4 rentals - 2 in Brickell, 1 in Wynwood, 1 in Coral Gables. Spending half my life driving between properties for minor issues. Last week: 3 hours in traffic just to reset a breaker in Coral Gables. Tenants are good but maintenance coordination is killing me. How much are PMs charging in Miami now? Worried about those fees eating into my profits but this isn't sustainable.",
      postUrl: "https://facebook.com/groups/miami-investors/posts/445672",
      timestamp: new Date('2025-06-17T14:45:00Z').toISOString(),
      summary: "Miami investor with 4 properties across the city frustrated by traffic and maintenance coordination, exploring PM options but fee-conscious.",
      intentScore: 68,
      intentCategory: "Good Prospect",
      persona: "burned_out_host",
      personaType: "Logistics Frustrated",
      urgency: "medium",
      matchedIntent: "exploring_options",
      propertyDetails: {
        propertyCount: 4,
        propertyType: "Residential rentals",
        location: "Brickell, Wynwood, Coral Gables",
        rentalType: "LTR"
      },
      outreachMessage: "Hi Jennifer! Miami traffic is brutal for property management. Our team handles all maintenance calls so you never have to drive to properties. Most clients find we save them 20+ hours/month. Let's talk ROI?",
      riskFlags: ["price_sensitive", "profit_focused"],
      nextSteps: ["Time & cost savings analysis", "Local team emphasis"]
    },
    {
      posterName: "Patricia White",
      groupName: "Miami Property Owners Network",
      city: "Miami",
      postText: "Hi everyone! We're snowbirds who own a house in Coconut Grove. Usually here November-April but thinking about renting it out May-October when we're back in Michigan. Never been landlords before. Is it worth it for just 6 months/year? Do property managers handle seasonal rentals? Also worried about hurricanes when we're not here. What do other seasonal owners do?",
      postUrl: "https://facebook.com/groups/miami-property/posts/776234",
      timestamp: new Date('2025-06-17T11:55:00Z').toISOString(),
      summary: "Seasonal Miami residents considering part-year rental of Coconut Grove home, concerned about remote management and hurricanes.",
      intentScore: 38,
      intentCategory: "Low Interest",
      persona: "new_investor",
      personaType: "Seasonal Owner",
      urgency: "low",
      matchedIntent: "general_inquiry",
      propertyDetails: {
        propertyCount: 1,
        propertyType: "Single family home",
        location: "Coconut Grove",
        rentalType: "seasonal"
      },
      outreachMessage: "Hi Patricia! Many snowbirds successfully rent May-October in Miami. PMs handle seasonal rentals and provide hurricane preparation/monitoring. Happy to explain how we protect properties during storm season!",
      riskFlags: ["seasonal_only", "hurricane_concerns", "first_time_landlord"],
      nextSteps: ["Seasonal rental education", "Hurricane protocol discussion"]
    },
    {
      posterName: "Eduardo Silva",
      groupName: "South Florida International Investors",
      city: "Miami",
      postText: "Based in São Paulo managing Miami properties is impossible. Have 6 condos - 3 in Aventura, 2 Downtown, 1 Sunny Isles. Current PM is terrible - doesn't respond to emails, sends reports in broken English, tenants complaining constantly. Lost $15k last month from vacancy because they didn't list the property quickly. Need professional PM who understands international clients, sends proper reports, and actually ANSWERS emails. Recommendations please!",
      postUrl: "https://facebook.com/groups/intl-miami-investors/posts/234561",
      timestamp: new Date('2025-06-17T09:30:00Z').toISOString(),
      summary: "Brazilian investor with 6 Miami condos frustrated with current PM's poor communication and costly mistakes, seeking professional replacement.",
      intentScore: 91,
      intentCategory: "High Intent",
      persona: "bad_pm_experience",
      personaType: "International Investor",
      urgency: "high",
      matchedIntent: "switching_pm",
      propertyDetails: {
        propertyCount: 6,
        propertyType: "Condos",
        location: "Aventura, Downtown, Sunny Isles",
        rentalType: "LTR"
      },
      outreachMessage: "Hi Eduardo! I work with many Brazilian investors and understand the importance of clear communication and detailed reporting. We provide monthly reports in Portuguese if needed. Let's discuss a smooth transition from your current PM.",
      riskFlags: ["bad_pm_experience"],
      nextSteps: ["Bilingual communication emphasis", "PM transition plan"]
    }
  ]
};
