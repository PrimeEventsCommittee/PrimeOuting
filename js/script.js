// Chatbot responses database
const responses = {
    // Greetings
    'hello': "Hello! Welcome to Prime Outing 2025 Chatbot. How can I help you today?",
    'hi': "Hi there! I'm here to assist you with any questions about Prime Outing 2025.",
    'hey': "Hey! Great to see you here. What would you like to know about our events?",
    'good morning': "Good morning! How can I assist you with Prime Outing 2025 today?",
    'good afternoon': "Good afternoon! What can I help you with regarding our events?",
    'good evening': "Good evening! How may I help you with Prime Outing 2025?",

    // Events information
    'what events do you organize': "Prime Events Committee is organizing Prime Outing 2025 to Punarnava Resort Dehradun where we will have a variety of exciting events including:\n\n🎉 Gala Dinner\n🎵 DJ Night\n🏆 Team Bonding Activities\n🎭 Cultural Festivals\n💼 Corporate Events\n🎓 Educational Workshops\n🎊 Seasonal Celebrations\n\nWould you like to know more about any specific type of event?",
    
    'events': "Activities is a Surprise for now",

  
    // Committee information

    'committee': "Prime Events Committee is a dedicated team of event enthusiasts who work together to create memorable experiences. We have different departments including:\n\n🎯 Event Planning\n📢 Marketing & Promotion\n💰 Finance & Budgeting\n🎨 Creative & Design\n📋 Operations & Logistics\n\nEach member brings unique skills to make our events successful!",

    // Contact and general info
    'contact': "You can reach Prime Events Committee through:\n\n📧 Email: PrimeEventCommittee@tsys.com\n!",

    'contact information': "Here are our contact details:\n\n📧 **Email:** PrimeEventCommittee@tsys.com\n",

    'about': "Prime Events Committee 2025 is a premier event management organization dedicated to creating extraordinary experiences. Since our founding, we've successfully organized hundreds of events, from intimate gatherings to large-scale productions.\n\n🌟 **Our Mission:** To bring people together through exceptional events\n🎯 **Our Vision:** To be the leading event committee in our community\n💎 **Our Values:** Excellence, Creativity, Teamwork, and Innovation",

    // Services
    'services': "Prime Events Committee offers comprehensive event management services:\n\n🎯 **Event Planning & Coordination**\n📋 **Venue Selection & Management**\n🎨 **Theme & Decoration Design**\n🍽️ **Catering Coordination**\n🎵 **Entertainment Booking**\n📸 **Photography & Videography**\n📢 **Marketing & Promotion**\n💰 **Budget Management**\n\nWe handle everything from concept to execution!",

    'help': "I'm here to help! You can ask me about:\n\n• Our upcoming events and schedules\n• How to join the committee\n• Event planning services we offer\n• Contact information\n• General information about Prime Events Committee\n\nJust type your question, and I'll do my best to assist you!",

    // Add your custom questions here
    'what is your mission': "Our mission is to bring people together through exceptional events that create lasting memories and strengthen community bonds.",
    

    // Prime Outing 2025 Itinerary Questions
    'what is prime outing 2025': "Prime Outing 2025 is our exciting 2-day trip to Dehradun from October 3-5, 2025! 🏔️\n\n📅 **Duration:** 2 Days, 1 Night\n🏨 **Destination:** Punarnava Resort, Dehradun\n🚌 **Transport:** Comfortable bus journey\n🎉 **Activities:** DJ Night, Team Activities, Great Food & More!\n\nIt's going to be an amazing experience with colleagues!\n\n📧 **Questions?** PrimeEventCommittee@tsys.com",

    'when is the trip': "Prime Outing 2025 is scheduled for **October 3-5, 2025** (2 days, 1 night).\n\n📅 **Start:** October 3rd, 10:00 PM departure\n🏨 **Stay:** October 4th at resort\n🏠 **Return:** October 5th, 7:00 PM arrival to Noida \n\nMark your calendars! 📝\n\n📧 **Questions?** PrimeEventCommittee@tsys.com",

    'trip dates': "Our Prime Outing 2025 dates:\n\n📅 **October 3, 2025 (Friday):** Departure at 10:00 PM\n📅 **October 4, 2025 (Saturday):** Full day at resort\n📅 **October 5, 2025 (Sunday):** Return journey, arrival 7:00 PM",

    'where are we going': "We're heading to the beautiful **Dehradun**! 🏔️\n\n🏨 **Resort:** Punarnava Resort\n🌄 **Location:** Dehradun, Uttarakhand\n⏱️ **Journey Time:** About 8 hours from departure\n🚌 **Mode:** Comfortable bus travel\n\nDehradun offers beautiful mountain views and pleasant weather!",

    'departure time': "**Departure Details for October 3rd:**\n\n🕘 **8:00-9:00 PM:** T-Shirt, Baggage & Attendance\n🕘 **9:30 PM:** Assemble at Stellar IT Park\n🚌 **10:00 PM:** Bus departure for Dehradun\n🍽️ **12:00 AM:** Stop at SukhDev Dhaba for refreshments\n\nPlease arrive on time for a smooth departure! ⏰",

    'what time do we leave': "We depart at **10:00 PM on October 3rd** from Stellar IT Park.\n\n⏰ **Timeline:**\n• 8:00-9:00 PM: T-shirt & Baggage Collection and Attendance Marking\n• 9:30 PM: Assembly at Stellar\n• 10:00 PM: Departure\n\nDon't be late! 🚌",

    'return time': "We'll return on **October 5th at 7:00 PM** to Stellar IT Park.\n\n🏠 **Return Schedule:**\n• 10:30 AM: Departure from resort\n• 3:00-4:30 PM: Lunch break\n• 7:00 PM: Arrival at Stellar IT Park\n\nSafe journey back home! 🏠",

    'what to bring': "**What to Bring for Prime Outing 2025:**\n\n👕 **Clothing:**\n• Comfortable casual wear\n• One set of party clothes for DJ night\n• Light jacket (mountain weather)\n\n🎒 **Essentials:**\n• Personal toiletries\n• Medicines (if any)\n• Power bank & charger\n• Comfortable walking shoes\n• Sunglasses\n\n📱 **Optional:**\n• Camera for memories\n• Books/entertainment for bus journey",

    'dress code': "**Dress Code for Prime Outing 2025:**\n\n👔 **Day Time:** Smart casual, comfortable clothing\n🎉 **DJ Night (Oct 4th):** Party wear, dress to impress!\n🌄 **Activities:** Comfortable clothes & shoes\n🚌 **Travel:** Comfortable clothing for long journey\n\nDress comfortably but look great for photos! 📸",

    'food details': "**Food Schedule - Prime Outing 2025:**\n\n🌙 **October 3rd Night:**\n• 12:00 AM: SukhDev Dhaba (Sandwiches, Parathas, Pakoras, Tea)\n\n🌅 **October 4th:**\n• 8:00-10:00 AM: Breakfast at resort\n• 1:30-3:00 PM: Lunch at resort\n• 5:00-6:00 PM: Hi-Tea\n• 7:30-10:00 PM: Snacks during DJ night\n• 9:00-11:00 PM: Dinner at resort\n\n🌄 **October 5th:**\n• 7:30-9:30 AM: Breakfast at resort\n• 3:00-4:30 PM: Lunch during return journey\n\nDelicious meals throughout! 🍽️",

    'breakfast timing': "**Breakfast Timings:**\n\n🌅 **October 4th:** 8:00 AM to 10:00 AM at resort\n🌄 **October 5th:** 7:30 AM to 9:30 AM at resort\n\nDon't miss the delicious breakfast buffet! 🥞",

    'lunch timing': "**Lunch Timings:**\n\n🍽️ **October 4th:** 1:30 PM to 3:00 PM at resort\n🚌 **October 5th:** 3:00 PM to 4:30 PM (during return journey)\n\nEnjoy hearty meals! 🍛",

    'dinner timing': "**Dinner on October 4th:**\n\n🍽️ **Time:** 9:00 PM to 11:00 PM\n🎉 **Special:** Dinner during/after DJ night\n🏨 **Location:** Resort dining area\n\nGreat food with great music! 🎵",

    'dj night': "**DJ Night - October 4th Evening:**\n\n🎵 **Time:** 7:30 PM to 10:00 PM\n🍿 **Includes:** DJ music + Snacks\n🍽️ **Dinner:** 9:00-11:00 PM during DJ time\n💃 **Dress Code:** Party wear recommended\n🌟 **After Party:** 'Taaron ki chaanv me' (Under the stars) from 11:00 PM\n\nGet ready to dance the night away! 💃🕺",

    'activities': "**Activities during Prime Outing 2025:**\n\n🎯 **October 4th:**\n• 11:30 AM - 1:00 PM: Team building activities 👕 (Wear Prime Outing T-shirts!)\n• 7:30-10:00 PM: DJ Night with music & dancing\n• 11:00 PM onwards: 'Taaron ki chaanv me' (stargazing/bonfire)\n\n📸 **October 5th:**\n• 10:00 AM: Group photo session\n\n⚠️ **Important:** Team T-shirts are MANDATORY for team bonding activities!\n\nFun activities for everyone! 🎉",

    'what activities are planned': "We have exciting activities planned!\n\n🎯 **Team Activities:** 11:30 AM - 1:00 PM on Oct 4th 👕\n   (Remember to wear your Prime Outing T-shirt!)\n🎵 **DJ Night:** 7:30-10:00 PM on Oct 4th\n⭐ **Stargazing:** 11:00 PM onwards on Oct 4th\n📸 **Group Photos:** 10:00 AM on Oct 5th\n\n👕 **T-shirt Required:** For team bonding activities only!\n\nSomething for everyone to enjoy! 😊",

    'check in time': "**Hotel Check-in:**\n\n🏨 **Date:** October 4th\n⏰ **Time:** 6:30 AM (after arrival at 6:00 AM)\n🛏️ **Rooms:** As per accommodation plan\n\nYou'll have time to freshen up before breakfast! 🚿",

    'check out time': "**Hotel Check-out:**\n\n🏨 **Date:** October 5th\n⏰ **Time:** 9:45 AM\n📸 **Group Photo:** 10:00 AM (after checkout)\n🚌 **Departure:** 10:30 AM from resort\n\nPack your bags the night before! 🎒",

    'bus details': "**Bus Journey Details:**\n\n🚌 **Departure:** October 3rd, 10:00 PM from Stellar IT Park\n⏱️ **Journey Time:** ~8 hours with breaks\n🛑 **Stops:** \n• 12:00 AM: SukhDev Dhaba (food break)\n• 4:00-4:30 AM: Restroom break\n\n🏠 **Return:** October 5th, 7:00 PM arrival at Stellar\n\nComfortable bus journey with proper breaks! 🛣️",

    'travel time': "**Travel Duration:**\n\n🚌 **To Dehradun:** ~8 hours (10:00 PM - 6:00 AM)\n• Includes food break at 12:00 AM\n• Restroom break at 4:00-4:30 AM\n\n🏠 **Return Journey:** ~8.5 hours (10:30 AM - 7:00 PM)\n• Includes lunch break at 3:00-4:30 PM\n\nPlan to rest during the journey! 😴",

    'accommodation': "**Accommodation Details:**\n\n🏨 **Resort:** Punarnava Resort, Dehradun\n📅 **Stay:**  1 night (October 4th)\n🛏️ **Check-in:** 6:30 AM on Oct 4th\n🚪 **Check-out:** 9:45 AM on Oct 5th\n\nComfortable rooms with all amenities! 🏨",

    'resort details': "**Punarnava Resort, Dehradun:**\n\n🏔️ **Location:** Beautiful Dehradun hills\n🌿 **Setting:** Peaceful resort environment\n🍽️ **Dining:** Multi-cuisine restaurant\n🎯 **Facilities:** Activity areas, comfortable rooms\n🎵 **Entertainment:** Space for DJ night\n\nPerfect place for a memorable outing! ✨",

    'assembly point': "**Assembly Point:**\n\n📍 **Location:** Stellar IT Park\n⏰ **Assembly Time:** 9:30 PM on October 3rd\n🚌 **Departure:** 10:00 PM sharp\n\n📋 **Before Assembly (8:00-9:00 PM):**\n• T-shirt distribution\n• Baggage collection\n• Attendance marking\n\nDon't be late! ⏰",

    'what time assembly': "**Assembly at Stellar IT Park:**\n\n⏰ **Time:** 9:30 PM on October 3rd\n🚌 **Departure:** 10:00 PM\n📋 **Pre-assembly:** 8:00-9:00 PM for formalities\n\nBe there 15 minutes early! ⏰",

    'night activities': "**Night Activities on October 4th:**\n\n🎵 **7:30-10:00 PM:** DJ Night with snacks\n🍽️ **9:00-11:00 PM:** Dinner (overlapping with DJ)\n⭐ **11:00 PM onwards:** 'Taaron ki chaanv me'\n\nThe night is going to be magical under the stars! ✨🌟",

    'taaron ki chaanv me': "**'Taaron ki Chaanv Me' (Under the Stars):**\n\n⭐ **Time:** 11:00 PM onwards on October 4th\n🌙 **Activity:** Stargazing, bonfire, casual conversations\n🎸 **Vibe:** Relaxed, peaceful time under the night sky\n☕ **Setting:** Outdoor area with mountain views\n\nPerfect way to end the evening! 🌟",

    'snacks timing': "**Snacks Schedule:**\n\n🍿 **October 4th:** 7:30-10:00 PM during DJ night\n☕ **Hi-Tea:** 5:00-6:00 PM (light snacks)\n\nPlenty of delicious snacks throughout! 🥨",

    'restroom breaks': "**Restroom Breaks:**\n\n🚻 **Going:** 4:00-4:30 AM on October 4th\n🍽️ **Return:** During lunch stop 3:00-4:30 PM on October 5th\n\nPlan accordingly for comfortable journey! 🚌",

    'group photo': "**Group Photo Session:**\n\n📸 **Date:** October 5th\n⏰ **Time:** 10:00 AM (after checkout)\n📍 **Location:** Resort premises\n🚌 **After Photo:** Departure at 10:30 AM\n\nDress nicely for memorable photos! 📷✨",

    'itinerary': "**Complete Prime Outing 2025 Itinerary:**\n\n**🗓️ October 3rd (Friday):**\n• 8:00-9:00 PM: T-shirt & baggage collection\n• 9:30 PM: Lights, camera, Assemble! The cast is ready to roll!\n• 10:00 PM: And the journey begins... cue the road trip playlist!\n• 12:00 AM: Midnight munchies at the iconic dhaba – full desi swag!\n\n**🗓️ October 4th (Saturday):**\n• 1:00 AM: Back on the road – doston ke saath, neend gayi bhaad mein!\n• 4:00-4:30 AM: Quick pit stop – freshen up for the next scene!\n• 6:00 AM: Welcome to the set – nature, peace, and pahadi vibes!\n• 6:30 AM: Rooms mil gaye – ab thoda rest, thoda selfie!\n• 8:00-10:00 AM: Nashta Vaasta Kia jaye – energy reload!\n• 11:30 AM-1:00 PM: Adventure mode ON – stunts, games, and full-on Team Bonding Vibes\n• 1:30-3:00 PM: Khana Peena Ho jaye \n• 5:00-6:00 PM: Chai pe charcha – gossip, giggles, and garma garam snacks!\n• 7:30-10:00 PM: Dance floor dhamaka – lights, beats, and Bollywood thumkas\n• 9:00-11:00 PM: Shaam-e-daawat – Khaana Khilaana\n• 11:00 PM+: Taaron ki chaanv me\n\n**🗓️ October 5th (Sunday):**\n• 7:30-9:30 AM: Last meal together – bittersweet bites and memories\n• 9:45 AM: Pack up the memories – but the story continues…\n• 10:00 AM: Say cheese! Freeze the frame – this one's going in the credits!\n• 10:30 AM: Departure\n• 3:00-4:30 PM: One last feast – filmy farewell with foodie feels!\n• 7:00 PM: Back to base – hearts full, phones full, and souls recharged!",

    'complete schedule': "**Full 3-Day Schedule:**\n\n📅 **Day 1 (Oct 3):** Travel day - Evening departure\n📅 **Day 2 (Oct 4):** Full day at resort with activities\n📅 **Day 3 (Oct 5):** Morning at resort, afternoon return\n\nAction-packed 3 days of fun! 🎉",

    // Prime Outing 2025 Contact Information
    'prime outing contact': "**Prime Outing 2025 Contact Information:**\n\n📧 **Email:** PrimeEventCommittee@tsys.com\n📱 **For Questions:** Contact our event team\n🎯 **We can help with:**\n• Registration queries\n• Itinerary questions\n• Special requirements\n• General trip information\n\nFeel free to reach out anytime! 😊",

    'prime outing email': "For all Prime Outing 2025 related queries, please contact us at:\n\n📧 **PrimeEventCommittee@tsys.com**\n\nWe're here to help with any questions about the trip! 🎉",

    // T-shirt Collection & Team Bonding Activity Information
    't shirt collection': "**T-Shirt Collection Details:**\n\n📅 **Date:** October 3rd, 2025\n🕘 **Time:** 8:00 PM to 9:00 PM\n📍 **Location:** Stellar IT Park\n👕 **What:** Customized Prime Outing 2025 T-shirts\n\n🎯 **Important:** These are tailored specifically for each team member!\n\n📋 **Collection Process:**\n• Bring your ID for verification\n• Check your name on the list\n• Collect your personalized T-shirt\n• Confirm size and design\n\n📧 **Questions?** PrimeEventCommittee@tsys.com",

    't shirt details': "**Prime Outing 2025 Custom T-Shirts:**\n\n👕 **Features:**\n• Customized design for Prime Outing 2025\n• Tailored fit for each team member\n• High-quality fabric for comfort\n• Unique team branding\n\n📦 **Collection:**\n• October 3rd: 8:00-9:00 PM at Stellar IT Park\n• Mandatory collection before departure\n• Personalized for each participant\n\n✨ **Special:** These T-shirts are exclusively designed for our team!",

    'when to wear t shirt': "**T-Shirt Wearing Schedule:**\n\n👕 **Mandatory Wearing:**\n📅 **October 4th during Team Bonding Activities**\n🕐 **Time:** 11:30 AM to 1:00 PM\n📍 **Location:** Resort activity area\n\n🎯 **Why Wear T-Shirts:**\n• Team unity and identification\n• Professional group appearance\n• Great for group photos\n• Shows team spirit\n\n📸 **Photo Opportunity:** Perfect for memorable team pictures!\n\n⚠️ **Note:** Please ensure you have your T-shirt ready for the team bonding session!",

    'team bonding activity dress code': "**Team Bonding Activity Dress Code - October 4th:**\n\n👕 **Mandatory:** Prime Outing 2025 Custom T-Shirt\n👖 **Bottom Wear:** Comfortable pants/jeans\n👟 **Footwear:** Comfortable sports shoes\n🧢 **Optional:** Cap or hat for outdoor activities\n\n🕐 **Time:** 11:30 AM - 1:00 PM\n🎯 **Activities:** Team building games and exercises\n📸 **Photos:** Group pictures in matching T-shirts\n\n✨ **Look your best while staying comfortable for activities!**",

    'team bonding t shirt': "**T-Shirts for Team Bonding Activities:**\n\n🎯 **Requirement:** All team members MUST wear the Prime Outing 2025 T-shirts during team bonding activities on October 4th (11:30 AM - 1:00 PM)\n\n👕 **Purpose:**\n• Team unity and coordination\n• Easy identification during activities\n• Professional group appearance\n• Memorable group photos\n\n📋 **Reminder:**\n• Collect your T-shirt on October 3rd (8:00-9:00 PM)\n• Pack it in your overnight bag\n• Wear it during team activities on October 4th\n\n🤝 **Team Spirit:** Let's look amazing together!",

    'what to wear for activities': "**What to Wear for Team Bonding Activities:**\n\n👕 **Top:** Prime Outing 2025 Custom T-shirt (MANDATORY)\n👖 **Bottom:** Comfortable casual pants or jeans\n👟 **Shoes:** Sports shoes or comfortable sneakers\n🧤 **Optional:** Gloves for outdoor activities\n\n🎯 **Activity Schedule:**\n📅 **Date:** October 4th\n🕐 **Time:** 11:30 AM - 1:00 PM\n📍 **Location:** Resort activity grounds\n\n💡 **Tip:** Dress comfortably but look coordinated as a team!",

    'missed t shirt collection': "**Missed T-Shirt Collection?**\n\n⚠️ **Important:** T-shirt collection is mandatory before departure!\n\n🕘 **Collection Time:** 8:00-9:00 PM on October 3rd\n📍 **Location:** Stellar IT Park\n\n🆘 **If You're Late:**\n• Contact event coordinators immediately\n• T-shirts may be available during assembly (9:30 PM)\n• Limited time before departure at 10:00 PM\n\n📧 **Emergency Contact:** PrimeEventCommittee@tsys.com\n📱 **Urgently contact:** Event team on-site\n\n⏰ **Best Option:** Arrive on time for smooth collection!",

    'customize t shirt': "**About Your Customized T-Shirts:**\n\n✨ **Personalization:**\n• Each T-shirt is tailored for individual team members\n• Custom sizing based on pre-collected measurements\n• Prime Outing 2025 exclusive design\n• Team member names/designations may be included\n\n🎨 **Design Features:**\n• Prime Events Committee branding\n• Prime Outing 2025 special edition\n• High-quality printing and fabric\n• Comfortable fit for activities\n\n📦 **Collection:** October 3rd, 8:00-9:00 PM at Stellar IT Park",

    // Additional T-shirt variations for better matching
    'tshirt': "**T-Shirt Collection Details:**\n\n📅 **Date:** October 3rd, 2025\n🕘 **Time:** 8:00 PM to 9:00 PM\n📍 **Location:** Stellar IT Park\n👕 **What:** Customized Prime Outing 2025 T-shirts\n\n🎯 **Important:** These are tailored specifically for each team member!\n\n📋 **Collection Process:**\n• Bring your ID for verification\n• Check your name on the list\n• Collect your personalized T-shirt\n• Confirm size and design\n\n📧 **Questions?** PrimeEventCommittee@tsys.com",

    't-shirt': "**T-Shirt Collection Details:**\n\n📅 **Date:** October 3rd, 2025\n🕘 **Time:** 8:00 PM to 9:00 PM\n📍 **Location:** Stellar IT Park\n👕 **What:** Customized Prime Outing 2025 T-shirts\n\n🎯 **Important:** These are tailored specifically for each team member!\n\n📋 **Collection Process:**\n• Bring your ID for verification\n• Check your name on the list\n• Collect your personalized T-shirt\n• Confirm size and design\n\n📧 **Questions?** PrimeEventCommittee@tsys.com",

    'shirt collection': "**T-Shirt Collection Details:**\n\n📅 **Date:** October 3rd, 2025\n🕘 **Time:** 8:00 PM to 9:00 PM\n📍 **Location:** Stellar IT Park\n👕 **What:** Customized Prime Outing 2025 T-shirts\n\n🎯 **Important:** These are tailored specifically for each team member!\n\n📋 **Collection Process:**\n• Bring your ID for verification\n• Check your name on the list\n• Collect your personalized T-shirt\n• Confirm size and design\n\n📧 **Questions?** PrimeEventCommittee@tsys.com",

    // Missing response keys
    'next event': "Our next major event is **Prime Outing 2025** scheduled for October 3-5, 2025! 🎉\n\nIt's going to be an amazing trip to Dehradun with activities, DJ night, and great food. Don't miss out!\n\n📧 **Questions?** PrimeEventCommittee@tsys.com",
    
    'how can i join the committee': "Great to hear you're interested in joining Prime Events Committee! 🎉\n\nTo join our team:\n• Contact us at PrimeEventCommittee@tsys.com\n• Attend our monthly meetings\n• Show enthusiasm for event planning\n• Bring your creative ideas\n\nWe're always looking for passionate team members!",
    
    'how much do events cost': "Event costs vary based on several factors:\n\n💰 **Factors affecting cost:**\n• Event size and duration\n• Venue requirements\n• Catering needs\n• Entertainment options\n• Decoration themes\n\n📧 **For detailed quotes:** PrimeEventCommittee@tsys.com\n\nWe work with various budgets to create memorable events!",
    
    'what venues do you use': "We work with a variety of excellent venues:\n\n🏢 **Corporate Venues:** Conference halls, hotels\n🌳 **Outdoor Spaces:** Gardens, resorts like Punarnava\n🎭 **Special Venues:** Banquet halls, auditoriums\n🏨 **Hotels & Resorts:** Various locations based on needs\n\nFor Prime Outing 2025, we've selected Punarnava Resort, Dehradun!",
    
    'do you handle weddings': "While our primary focus is corporate and community events, we can certainly discuss wedding planning services!\n\n💒 **We can help with:**\n• Venue coordination\n• Theme planning\n• Vendor management\n• Timeline coordination\n\n📧 **Contact us:** PrimeEventCommittee@tsys.com for wedding consultations!",
    
    'what about corporate events': "Absolutely! Corporate events are one of our specialties:\n\n💼 **Corporate Services:**\n• Team building activities\n• Company outings (like Prime Outing 2025!)\n• Conference organization\n• Award ceremonies\n• Training workshops\n• Networking events\n\n✨ **We make corporate events engaging and memorable!**",
    
    'bus details': "**Bus Journey Information:**\n\n🚌 **Departure:** October 3rd, 10:00 PM from Stellar IT Park\n⏱️ **Journey Duration:** ~8 hours to Dehradun\n🛑 **Scheduled Stops:**\n• 12:00 AM: Food break at SukhDev Dhaba\n• 4:00-4:30 AM: Restroom break\n\n🏠 **Return:** October 5th, 7:00 PM arrival\n\nComfortable buses with proper seating!",

    // Negative responses
    'not going': "Sorry you missed the fun, better luck next time! 😔\n\nWe'll definitely miss having you on this amazing trip to Dehradun. There will be more events in the future, so stay tuned!\n\n📧 **Stay connected:** PrimeEventCommittee@tsys.com for future events",

    // Thank you responses
    'thank you': "You're very welcome! 😊 I'm glad I could help you with Prime Outing 2025 information.\n\nIf you have any more questions about the trip, feel free to ask anytime. Have a great day and see you in Dehradun! 🏔️\n\n📧 **Need more help?** PrimeEventCommittee@tsys.com",

    // Important reminders
    'things to remember': "**📋 IMPORTANT THINGS TO REMEMBER:**\n\n🆔 **1. Documents Required:**\n• Carry one photocopy of your ID & Address Proof (Aadhar Card)\n• Required for smooth check-in at Punarnava Resort\n\n⏰ **2. Timeline Adherence:**\n• Please adhere to timelines for planned execution\n• Report at office at 8:00 PM on October 3rd\n\n🏥 **3. Medical & First Aid:**\n• First-Aid Box available with Event Committee Members\n• Carry your prescribed medicines if on any medication\n• Reach out to Event Committee in emergency\n\n👕 **4. T-Shirt Mandatory:**\n• PRIME TEAM OUTING T-shirt is MANDATORY for Team Building Activities\n\n🏊 **5. Swimming Pool:**\n• Carry swimming costumes if you want to enjoy the pool\n\n🧳 **6. Luggage Management:**\n• Get luggage tags and T-shirts when boarding on October 3rd\n• Label them with your names to avoid misplacement\n\n⚠️ **Follow these guidelines for a smooth and enjoyable trip!**",

    'important reminders': "**📋 IMPORTANT THINGS TO REMEMBER:**\n\n🆔 **1. Documents Required:**\n• Carry one photocopy of your ID & Address Proof (Aadhar Card)\n• Required for smooth check-in at Punarnava Resort\n\n⏰ **2. Timeline Adherence:**\n• Please adhere to timelines for planned execution\n• Report at office at 8:00 PM on October 3rd\n\n🏥 **3. Medical & First Aid:**\n• First-Aid Box available with Event Committee Members\n• Carry your prescribed medicines if on any medication\n• Reach out to Event Committee in emergency\n\n👕 **4. T-Shirt Mandatory:**\n• PRIME TEAM OUTING T-shirt is MANDATORY for Team Building Activities\n\n🏊 **5. Swimming Pool:**\n• Carry swimming costumes if you want to enjoy the pool\n\n🧳 **6. Luggage Management:**\n• Get luggage tags and T-shirts when boarding on October 3rd\n• Label them with your names to avoid misplacement\n\n⚠️ **Follow these guidelines for a smooth and enjoyable trip!**",

    'reminders': "**📋 IMPORTANT THINGS TO REMEMBER:**\n\n🆔 **1. Documents Required:**\n• Carry one photocopy of your ID & Address Proof (Aadhar Card)\n• Required for smooth check-in at Punarnava Resort\n\n⏰ **2. Timeline Adherence:**\n• Please adhere to timelines for planned execution\n• Report at office at 8:00 PM on October 3rd\n\n🏥 **3. Medical & First Aid:**\n• First-Aid Box available with Event Committee Members\n• Carry your prescribed medicines if on any medication\n• Reach out to Event Committee in emergency\n\n👕 **4. T-Shirt Mandatory:**\n• PRIME TEAM OUTING T-shirt is MANDATORY for Team Building Activities\n\n🏊 **5. Swimming Pool:**\n• Carry swimming costumes if you want to enjoy the pool\n\n🧳 **6. Luggage Management:**\n• Get luggage tags and T-shirts when boarding on October 3rd\n• Label them with your names to avoid misplacement\n\n⚠️ **Follow these guidelines for a smooth and enjoyable trip!**",

    // Default responses
    'default': "I'd be happy to help you with that! Could you please be more specific about what you'd like to know? You can ask me about our Prime Outing 2025 trip, itinerary, T-shirt collection, or contact information.",
    
    'unknown': "I'm not sure I understand that question. Here are some things I can help you with:\n\n• Prime Outing 2025 trip information\n• T-shirt collection details\n• Itinerary and timings\n• Activities and events\n• Contact details\n\nFor any other queries, please contact your Line Manager or email PrimeEventCommittee@tsys.com"
};

// Keywords for matching user input
const keywords = {
    greetings: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'],
    events: ['event', 'events', 'organize', 'what do you do', 'activities', 'programs'],
    nextEvent: ['next event', 'upcoming', 'when', 'schedule', 'calendar', 'future events'],
    join: ['join', 'member', 'membership', 'how to join', 'become member', 'participate'],
    committee: ['committee', 'team', 'organization', 'who are you', 'about committee'],
    contact: ['contact', 'reach', 'phone', 'email', 'address', 'location'],
    about: ['about prime events', 'about committee', 'who are you', 'tell me about prime events', 'prime events information'],
    services: ['services', 'what do you offer', 'help with', 'provide', 'offerings'],
    help: ['help', 'assist', 'support', 'what can you do'],
    // Original keyword categories
    pricing: ['cost', 'price', 'budget', 'expensive', 'cheap', 'how much', 'fees'],
    venues: ['venue', 'location', 'place', 'where', 'hall', 'space'],
    weddings: ['wedding', 'marriage', 'bride', 'groom', 'ceremony', 'reception'],
    corporate: ['corporate', 'business', 'company', 'office', 'professional', 'work'],
    
    // Prime Outing 2025 Keywords
    primeOuting: ['prime outing', 'outing', 'trip', 'tour', 'dehradun trip', 'prime outing 2025'],
    dates: ['dates', 'when', 'october', 'date', 'day', 'month', 'october 3', 'october 4', 'october 5'],
    departure: ['departure', 'leave', 'start', 'leaving', 'what time', 'departure time', 'when do we leave'],
    returnTime: ['return', 'come back', 'arrival', 'back', 'return time', 'when do we return'],
    destination: ['where', 'destination', 'location', 'dehradun', 'going', 'place'],
    accommodation: ['hotel', 'stay', 'accommodation', 'resort', 'punarnava', 'room', 'check in', 'check out'],
    food: ['food', 'meals', 'breakfast', 'lunch', 'dinner', 'snacks', 'eating', 'menu'],
    timing: ['time', 'timing', 'schedule', 'when', 'what time'],
    activities: ['activities', 'what to do', 'entertainment', 'fun', 'dj', 'dance'],
    djNight: ['dj', 'dj night', 'dance', 'party', 'music', 'dancing', 'night'],
    transport: ['bus', 'travel', 'journey', 'transport', 'how', 'vehicle'],
    assembly: ['assembly', 'meeting point', 'stellar', 'where to meet', 'gathering'],
    packing: ['bring', 'pack', 'what to bring', 'luggage', 'clothes', 'dress code'],
    itinerary: ['itinerary', 'schedule', 'plan', 'timeline', 'program', 'agenda', 'complete schedule'],
    stargazing: ['taaron ki chaanv', 'stars', 'night', 'stargazing', 'under stars'],
    photos: ['photo', 'pictures', 'group photo', 'photography', 'pics'],
    breaks: ['break', 'stop', 'restroom', 'toilet', 'dhaba', 'sukhdev'],
    
    // T-shirt related keywords
    tshirtCollection: ['t shirt', 't-shirt', 'tshirt', 'shirt', 'collect', 'collection', 'pick up', 'get shirt'],
    teamBondingDress: ['team bonding', 'team activity', 'bonding', 'team building', 'what to wear', 'activity dress'],
    tshirtWearing: ['wear shirt', 'when to wear', 'wearing t shirt', 'shirt wearing', 'dress for activity'],
    customTshirt: ['custom', 'customized', 'tailored', 'personalized', 'special shirt', 'designed'],
    missedCollection: ['missed', 'late', 'forgot', 'didn\'t collect', 'emergency', 'what if'],
    
    // Thank you keywords
    thankYou: ['thank you', 'thanks', 'thank u', 'thx', 'thanx', 'appreciate', 'grateful', 'awesome', 'great help', 'helpful'],
    
    // Reminders keywords
    reminders: ['things to remember', 'reminders', 'important', 'don\'t forget', 'remember', 'guidelines', 'rules', 'tips', 'checklist'],
    
    // Games keywords
    games: ['games', 'game', 'play', 'playing', 'which games', 'what games']
};

// Initialize chatbot
document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    
    // Enter key to send message
    if (userInput) {
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
        
        // Focus on input when page loads
        userInput.focus();
    }
});

function toggleChatbot() {
    const popup = document.getElementById('chatbotPopup');
    const toggleIcon = document.getElementById('toggleIcon');
    const notificationBadge = document.getElementById('notificationBadge');
    
    if (popup.classList.contains('active')) {
        popup.classList.remove('active');
        toggleIcon.innerHTML = '💬';
        if (notificationBadge) {
            notificationBadge.style.display = 'flex';
        }
    } else {
        popup.classList.add('active');
        toggleIcon.innerHTML = '✕';
        if (notificationBadge) {
            notificationBadge.style.display = 'none';
        }
        
        // Focus on input when opening
        const userInput = document.getElementById('userInput');
        if (userInput) {
            setTimeout(() => userInput.focus(), 100);
        }
    }
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // Add user message to chat
    addMessage(message, 'user');
    
    // Clear input
    userInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Generate bot response after a delay
    setTimeout(() => {
        hideTypingIndicator();
        const response = generateResponse(message);
        addMessage(response, 'bot');
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
}

function sendQuickQuestion(question) {
    // Add user message to chat
    addMessage(question, 'user');
    
    // Show typing indicator
    showTypingIndicator();
    
    // Generate bot response after a delay
    setTimeout(() => {
        hideTypingIndicator();
        const response = generateResponse(question);
        addMessage(response, 'bot');
    }, 800 + Math.random() * 800);
}

function addMessage(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    if (sender === 'bot') {
        avatar.textContent = '🤖';
    } else {
        avatar.textContent = '👤';
    }
    
    const content = document.createElement('div');
    content.className = 'message-content';
    
    const paragraph = document.createElement('p');
    paragraph.innerHTML = message.replace(/\n/g, '<br>');
    content.appendChild(paragraph);
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message';
    typingDiv.id = 'typing-indicator';
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = '🤖';
    
    const content = document.createElement('div');
    content.className = 'message-content typing-indicator';
    
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('span');
        content.appendChild(dot);
    }
    
    typingDiv.appendChild(avatar);
    typingDiv.appendChild(content);
    
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function generateResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Check for negative cases first (highest priority)
    if ((message.includes('not going') || message.includes('am not going') || message.includes('not coming') || 
         message.includes('won\'t go') || message.includes('will not go') || message.includes('can\'t go') ||
         message.includes('cannot go') || message.includes('not attending') || message.includes('miss this') ||
         message.includes('skip this') || message.includes('not interested')) && 
        (message.includes('trip') || message.includes('outing') || message.includes('prime') || 
         message.includes('dehradun') || message.includes('october') || message.length < 20)) {
        return responses['not going'];
    }
    
    // Check for specific common questions first
    if (message.includes('when') && (message.includes('going') || message.includes('we are going'))) {
        return responses['when is the trip'];
    }
    
    if (message.includes('where') && (message.includes('stay') || message.includes('staying'))) {
        return responses['accommodation'];
    }
    
    if (message.includes('where') && (message.includes('break') || message.includes('breaks') || message.includes('stop') || message.includes('restroom'))) {
        return responses['restroom breaks'];
    }
    
    // Check for specific T-shirt related questions first (priority)
    if (message.includes('t shirt') || message.includes('t-shirt') || message.includes('tshirt')) {
        if (message.includes('collection') || message.includes('collect') || message.includes('pick up') || message.includes('get')) {
            return responses['t shirt collection'];
        }
        if (message.includes('when to wear') || message.includes('wear') || message.includes('wearing')) {
            return responses['when to wear t shirt'];
        }
        if (message.includes('team bonding') || message.includes('team building') || message.includes('activity') || message.includes('activities')) {
            return responses['team bonding activity dress code'];
        }
        if (message.includes('missed') || message.includes('late') || message.includes('forgot')) {
            return responses['missed t shirt collection'];
        }
        if (message.includes('custom') || message.includes('personalized') || message.includes('tailored')) {
            return responses['customize t shirt'];
        }
        if (message.includes('details') || message.includes('about')) {
            return responses['t shirt details'];
        }
        // Default T-shirt response
        return responses['t shirt collection'];
    }
    
    // Check for games/activities keywords with priority
    if (message.includes('games') || message.includes('game') || message.includes('which games') || 
        message.includes('what games') || (message.includes('play') && (message.includes('we') || message.includes('will')))) {
        return responses['activities'];
    }
    
    // Check for exact direct matches only (more restrictive)
    for (const [key, response] of Object.entries(responses)) {
        // Only match if it's an exact match OR if the key is very specific (length > 10) and message contains it
        if (message === key || (key.length > 10 && message.includes(key))) {
            return response;
        }
    }
    
    // Check keyword categories
    for (const [category, keywordList] of Object.entries(keywords)) {
        for (const keyword of keywordList) {
            if (message.includes(keyword)) {
                switch (category) {
                    case 'greetings':
                        return responses.hello;
                    case 'events':
                        return responses.events;
                    case 'nextEvent':
                        return responses['next event'];
                    case 'join':
                        return responses['how can i join the committee'];
                    case 'committee':
                        return responses.committee;
                    case 'contact':
                        return responses.contact;
                    case 'about':
                        return responses.about;
                    case 'services':
                        return responses.services;
                    case 'help':
                        return responses.help;
                    // Add cases for new keyword categories
                    case 'pricing':
                        return responses['how much do events cost'];
                    case 'venues':
                        return responses['what venues do you use'];
                    case 'weddings':
                        return responses['do you handle weddings'];
                    case 'corporate':
                        return responses['what about corporate events'];
                    
                    // Prime Outing 2025 cases with context checking
                    case 'primeOuting':
                        return responses['what is prime outing 2025'];
                    case 'dates':
                        // Only respond with trip dates if the question is about Prime Outing/trip
                        if (message.includes('trip') || message.includes('outing') || message.includes('prime') || message.includes('october') || message.includes('dehradun') || message.includes('going')) {
                            return responses['when is the trip'];
                        }
                        break; // Let it fall through to unknown if not trip-related
                    case 'departure':
                        return responses['departure time'];
                    case 'returnTime':
                        return responses['return time'];
                    case 'destination':
                        return responses['where are we going'];
                    case 'accommodation':
                        return responses['accommodation'];
                    case 'food':
                        // Only respond with food details if asking about trip/outing food
                        if (message.includes('trip') || message.includes('outing') || message.includes('prime') || message.includes('resort') || message.includes('dehradun')) {
                            return responses['food details'];
                        }
                        break; // Let it fall through to unknown if not trip-related
                    case 'timing':
                        // Only respond with itinerary if asking about trip/outing timing
                        if (message.includes('trip') || message.includes('outing') || message.includes('prime') || message.includes('dehradun') || message.includes('october')) {
                            return responses['itinerary'];
                        }
                        break; // Let it fall through to unknown if not trip-related
                    case 'activities':
                        return responses['activities'];
                    case 'djNight':
                        return responses['dj night'];
                    case 'transport':
                        return responses['bus details'];
                    case 'assembly':
                        return responses['assembly point'];
                    case 'packing':
                        return responses['what to bring'];
                    case 'itinerary':
                        return responses['itinerary'];
                    case 'stargazing':
                        return responses['taaron ki chaanv me'];
                    case 'photos':
                        return responses['group photo'];
                    case 'breaks':
                        return responses['restroom breaks'];
                    
                    // T-shirt related cases
                    case 'tshirtCollection':
                        return responses['t shirt collection'];
                    case 'teamBondingDress':
                        return responses['team bonding activity dress code'];
                    case 'tshirtWearing':
                        return responses['when to wear t shirt'];
                    case 'customTshirt':
                        return responses['customize t shirt'];
                    case 'missedCollection':
                        return responses['missed t shirt collection'];
                    
                    // Thank you case
                    case 'thankYou':
                        return responses['thank you'];
                    
                    // Reminders case
                    case 'reminders':
                        return responses['things to remember'];
                    
                    // Games case
                    case 'games':
                        return responses['activities'];
                }
            }
        }
    }
    
    // If no match found, return default response
    return responses.unknown || responses.default || "I'm sorry, I'm having trouble processing your request. Please try again or contact PrimeEventCommittee@tsys.com";
}

// Add some interactive features
function addRandomTips() {
    const tips = [
        "💡 Tip: Ask me about our upcoming events!",
        "💡 Tip: Want to join? I can guide you through the process!",
        "💡 Tip: Need our contact info? Just ask!",
        "💡 Tip: Curious about our services? I have all the details!"
    ];
    
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every interval
            const randomTip = tips[Math.floor(Math.random() * tips.length)];
            addMessage(randomTip, 'bot');
        }
    }, 30000); // Check every 30 seconds
}
