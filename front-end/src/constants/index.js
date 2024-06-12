import { automobile1, cleaninghero, doctorhero, electricianhero, gardner, person1, person2, person3, person4, person5, person6, plumberhero, security, woodhero, work1, work2, work3} from '../assets/images/index';
import {adidas, carefree, cocacola, dolce, facebook, instagram, jeep, johnson, mitsubishi, nestle, panasonic, philips} from '../assets/icons/index';

export const navLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "work-with-us", label: "Work with Us" },
    { id: "our-partners", label: "Our Partners" },
    { id: "about-us", label: "About Us" },
    { id: "contact-us", label: "Contact Us" },
];

export const heroData = [
  { image: cleaninghero, text: 'With each sweep and scrub, you transform chaos into clarity, bringing order to the world.' },
  { image: electricianhero, text: 'Every spark you create illuminates not just spaces, but lives with brightness and safety.' },
  { image: plumberhero, text: 'In every leak fixed and every pipe laid, you ensure the flow of comfort and well-being.' },
  { image: woodhero, text: 'Every stroke of your craft breathes life into natures gifts, shaping dreams into tangible beauty.' },
  { image: doctorhero, text: 'Your expertise heals more than just bodies; it mends spirits and brings hope.' },
  { image: automobile1, text: 'Every repair you make not only restores vehicles, but confidence and mobility with precision and care.' },
  { image: gardner, text: 'Every bloom you nurture not only adorns gardens, but hearts with beauty and serenity.' },
  { image: security, text: 'Every safeguard you implement not only secures premises, but peace of mind with vigilance and expertise.' },
];

export const popservicesData = [
  {
    image: cleaninghero,
    name: 'Cleaning',
    details: 'Professional cleaning services for homes, offices, and commercial spaces. We use eco-friendly products and modern equipment to ensure a spotless and hygienic environment.',
  },
  {
    image: electricianhero,
    name: 'Electrician',
    details: 'Expert electrical services for residential and commercial properties. From installations to repairs, we handle everything with precision and safety, ensuring your electrical systems function flawlessly.',
  },
  {
    image: plumberhero,
    name: 'Plumber',
    details: 'Comprehensive plumbing solutions for households and businesses. Our licensed plumbers offer reliable services for fixing leaks, installing fixtures, and maintaining plumbing systems to prevent issues.',
  },
  {
    image: woodhero,
    name: 'Wood Work',
    details: 'Craftsmanship at its finest! Our skilled woodworkers create custom furniture, cabinetry, and decorative pieces tailored to your preferences. Transform your space with timeless woodwork designs.',
  },
  {
    image: doctorhero,
    name: 'Doctor',
    details: 'Expert medical care for individuals and families. Our compassionate doctors provide thorough examinations, accurate diagnoses, and personalized treatment plans to promote wellness and healing.',
  },
];

export const testimonialsData = [
  {
    name: 'Alice Johnson',
    review: 'Great service! The cleaning team was very professional and thorough. My house looks sparkling clean now. I highly recommend them to anyone looking for top-notch cleaning services.',
    image: person6, // Replace with the actual image path
  },
  {
    name: 'Bob Smith',
    review: 'I had a plumbing emergency and called this company. They arrived promptly and fixed the issue in no time. The plumber was friendly and knowledgeable. Im very satisfied with their service.',
    image: person2, // Replace with the actual image path
  },
  {
    name: 'Eva Martinez',
    review: 'I needed some woodwork done in my backyard, and this team did an excellent job. They were efficient and skilled. The final result exceeded my expectations. Will definitely hire them again!',
    image: person3, // Replace with the actual image path
  },
  // Additional fake testimonials from workers
  {
    name: 'Maxwell Johnson',
    review: 'Ive been working with this company for years, and its been a fantastic experience. The management is supportive, and the work environment is great. I highly recommend joining the team!',
    image: person5, // Replace with the actual image path
  },
  {
    name: 'Sophia Rodriguez',
    review: 'As a plumber, Ive had the opportunity to work with various companies, but this one stands out. They value their employees and provide excellent training. Im proud to be part of this team.',
    image: person4 // Replace with the actual image path
  },
  {
    name: 'Liam Thompson',
    review: 'Working as a cleaner for this company has been rewarding. They offer flexible hours, competitive pay, and a supportive team. I enjoy helping customers maintain clean and tidy spaces.',
    image: person1, // Replace with the actual image path
  },
];

export const reasonsToJoin = [
  {
    title: 'Flexible Schedule',
    content: 'Enjoy the freedom of choosing your working hours to maintain a healthy work-life balance.',
    image: work1,
  },
  {
    title: 'Competitive Pay',
    content: 'We offer competitive wages to recognize and reward your hard work and dedication.',
    image: work2,
  },
  {
    title: 'Diverse Opportunities',
    content: 'Explore diverse job opportunities in the home services industry and expand your skills.',
    image: work3,
  },
  // Add more reasons if needed
];

export const partnerLogos = [
  {image: adidas},
  {image: carefree},
  {image: cocacola},
  {image: dolce},
  {image: facebook},
  {image: instagram},
  {image: jeep},
  {image: johnson},
  {image: mitsubishi},
  {image: nestle},
  {image: panasonic},
  {image: philips},
];

export const requirements = [
  {
    heading: "Age",
    details: "You have to be over 18 years of age with a valid CNIC card."
  },
  {
    heading: "Smartphone",
    details: "You will need an Android or iPhone device to work with us."
  },
  {
    heading: "Registered Business",
    details: "You should have a registered business center address such as office, shop, or salon address."
  },
  {
    heading: "Registered Mobile Number",
    details: "You should have a registered mobile number where customers can call after booking the job."
  },
  {
    heading: "Background Check",
    details: "The Background Check process may include drug tests, police reports, credit checks, etc."
  },
  {
    heading: "Experience",
    details: "You should have at least 5 years of experience in the relative field to register with Us."
  }
];

export const countryCities = {
  USA: ["New York", "Los Angeles", "Chicago"],
  Pakistan: ["Karachi", "Lahore", "Islamabad"],
  // Add more countries and their cities as needed
};

// export const residnetialcleaning = [
//   {
//     name: "General Cleaning",
//     description:
//       "Our general cleaning service encompasses a thorough dusting and wiping of surfaces, vacuuming of carpets and rugs, mopping and sweeping floors, cleaning mirrors and glass surfaces, removal of cobwebs, and wiping of baseboards and moldings.",
//     image: cleaninghero,
//   },
//   {
//     name: "Kitchen Cleaning",
//     description:
//       "In our kitchen cleaning service, we meticulously clean countertops and backsplashes, both the inside and outside of kitchen appliances, wash dishes and clean sinks, degrease stove and oven surfaces, wipe microwave interiors and exteriors, and ensure cabinet surfaces are spotless.",
//     image: kitchencleaning,
//   },
//   {
//     name: "Bathroom Cleaning",
//     description:
//       "Our bathroom cleaning service includes scrubbing and disinfecting toilets, sinks, and showers, cleaning and disinfecting bathroom floors, removing soap scum and mildew, cleaning mirrors and glass surfaces, and organizing bathroom cabinets to perfection.",
//     image: bathclean,
//   },
//   {
//     name: "Deep Cleaning",
//     description:
//           "With our deep cleaning service, we delve into the details, cleaning inside appliances like refrigerators and ovens, washing windows and window sills, cleaning light fixtures and ceiling fans, washing blinds and curtains, thoroughly cleaning air vents and ducts, and reaching under and behind furniture for a comprehensive clean.",
//     image: deepclean,
//   },
//   {
//     name: "Specialized Residential Services",
//     description:
//           "We offer specialized services tailored to your needs, including carpet cleaning and stain removal, upholstery cleaning, tile and grout cleaning, hardwood floor cleaning and polishing, pre and post-move cleaning, and post-construction cleaning for newly renovated or built homes.",
//     image: residenclean,
//   }
// ];

// export const commercialcleaning = [
//   {
//     name: "Office Cleaning",
//     description:
//       "Our office cleaning service involves dusting and wiping desks and surfaces, vacuuming and mopping floors, cleaning windows and glass doors, emptying trash and recycling bins, disinfecting commonly touched surfaces, and ensuring restrooms are clean and sanitized.",
//     image: officeclean,
//   },
//   {
//     name: "Retail Space Cleaning",
//     description:
//       "For retail spaces, we provide comprehensive cleaning services such as floor maintenance including sweeping, mopping, and buffing, cleaning display cases and shelves, dusting and wiping merchandise, window cleaning, restroom cleaning and stocking, and efficient trash removal.",
//     image: retailclean,
//   },
//   {
//     name: "Restaurant and Kitchen Cleaning",
//     description:
//       "Our restaurant and kitchen cleaning service includes thorough degreasing of kitchen surfaces and equipment, cleaning kitchen floors and drains, sanitizing food preparation areas, washing dishes and utensils, ensuring dining areas and furniture are clean, and maintaining clean and sanitized restrooms.",
//     image: restaurauntclean,
//   },
//   {
//     name: "Medical Facility Cleaning",
//     description:
//           "In medical facilities, we specialize in disinfecting patient rooms and waiting areas, cleaning medical equipment and surfaces to medical-grade standards, sanitizing restrooms and common areas, handling biohazardous waste disposal, ensuring compliance with healthcare regulations, and performing terminal cleaning for operating rooms.",
//     image: medicalclean,
//   },
//   {
//     name: "Industrial and Warehouse Cleaning",
//     description:
//           "For industrial and warehouse spaces, we provide services such as floor sweeping and scrubbing, cleaning machinery and equipment, removing dust and debris, high-pressure washing for tough stains, organizing inventory areas, and managing waste disposal for a safe and clean workspace.",
//     image: warehouseclean,
//   }
// ];

export const testimonials = [
  {
    name: "Michael Johnson",
    image: person1,
    quote: "I've been using this cleaning service for over a year now, and I couldn't be happier. They always leave my house sparkling clean, and the attention to detail is remarkable!"
  },
  {
    name: "Emily Thompson",
    image: person3,
    quote: "I recently hired this cleaning service for a deep clean of my apartment before moving out. They did an incredible job, and I got my security deposit back without any deductions. Highly recommend!"
  },
  {
    name: "David Wilson",
    image: person2,
    quote: "The team at this cleaning service is professional, efficient, and courteous. They arrive on time and get the job done quickly without compromising on quality. I'm impressed!"
  },
  {
    name: "Sophia Garcia",
    image: person4,
    quote: "I've tried several cleaning services before, but none have matched the level of cleanliness and professionalism that this service provides. I'm a satisfied customer!"
  },
  {
    name: "Daniel Lee",
    image: person5,
    quote: "As a busy professional, having a reliable cleaning service is essential. This cleaning service not only meets but exceeds my expectations every time. Highly recommended for anyone looking for a hassle-free cleaning experience!"
  },
  {
    name: "Olivia Smith",
    image: person6,
    quote: "I was hesitant to hire a cleaning service at first, but after trying this one, I'm a believer! They transformed my messy home into a spotless oasis. I'll definitely be using their services again!"
  }
];

// export const residnetialelectrician = [
//   {
//     name: "Home Wiring and Rewiring",
//     description:
//       "Installation and repair of electrical wiring systems in residential properties.",
//     image: electrician1,
//   },
//   {
//     name: "Electrical Inspections",
//     description:
//       "In our kitchen cleaning service, we meticulously clean countertops and backsplashes, both the inside and outside of kitchen appliances, wash dishes and clean sinks, degrease stove and oven surfaces, wipe microwave interiors and exteriors, and ensure cabinet surfaces are spotless.",
//     image: electrician2,
//   },
//   {
//     name: "Lighting Installation",
//     description:
//       "Installation of indoor and outdoor lighting fixtures, including LED lighting, landscape lighting, and security lighting.",
//     image: electrician3,
//   },
//   {
//     name: "Outlet and Switch Installation",
//     description:
//           "Installation and repair of electrical outlets, switches, and dimmers to enhance convenience and functionality.",
//     image: electricianhero,
//   },
//   {
//     name: "Ceiling Fan Installation",
//     description:
//           "Installation of ceiling fans to improve air circulation and energy efficiency in homes.",
//     image: electrician4,
//   },
//   {
//     name: "Electrical Panel Upgrades",
//     description:
//           "Upgrading electrical panels to accommodate increased power demands and ensure safety.",
//     image: electrician5,
//   },
//   {
//     name: "Appliance Installation",
//     description:
//           "Installation of electrical appliances such as dishwashers, ovens, and washing machines.",
//     image: electrician6,
//   },
// ];

// export const commercialelectrician = [
//   {
//     name: "Office Wiring and Networking",
//     description:
//       " Installation and maintenance of electrical wiring and networking systems in office buildings.",
//     image: electrician7,
//   },
//   {
//     name: "Lighting Design and Installation",
//     description:
//       "Design and installation of energy-efficient lighting solutions for commercial spaces, including offices, retail stores, and warehouses.",
//     image: electrician8,
//   },
//   {
//     name: "Emergency Lighting Installation",
//     description:
//       "Installation of emergency lighting systems to ensure safety and compliance with building codes.",
//     image: electrician9,
//   },
//   {
//     name: "Generator Installation",
//     description:
//           "Installation of backup generators to provide power during outages and emergencies.",
//     image: electrician10,
//   },
//   {
//     name: "HVAC Electrical Services",
//     description:
//           " Electrical services for heating, ventilation, and air conditioning (HVAC) systems, including installation and repair.",
//     image: electrician11,
//   },
//   {
//     name: "Security System Wiring",
//     description:
//           "Wiring and installation of security systems, including CCTV cameras, access control systems, and alarm systems.",
//     image: electrician12,
//   },
//   {
//     name: "Data Center Electrical Services",
//     description:
//           " Electrical services for data centers, including power distribution, backup systems, and cooling solutions.",
//     image: electrician13,
//   },
// ];

export const electricalTestimonials = [
  {
    name: "John Johnson",
    image: person1,
    quote: "I recently had the pleasure of hiring this electrical service to fix some wiring issues in my home. Not only did they arrive promptly, but they also completed the job efficiently and effectively. I'm very satisfied with their work!"
  },
  {
    name: "Sarah Adams",
    image: person6,
    quote: "I needed some electrical upgrades done in my office space, and I'm glad I chose this service for the job. Their team was professional, knowledgeable, and friendly. The upgrades were completed smoothly, and everything works perfectly now!"
  },
  {
    name: "Mark Thompson",
    image: person5,
    quote: "I had a complex electrical problem that other services couldn't figure out, but this service handled it with ease. They diagnosed the issue quickly and provided a cost-effective solution. I highly recommend them for any electrical needs!"
  },
  {
    name: "Jessica Miller",
    image: person4,
    quote: "Finding a reliable electrical service can be challenging, but I struck gold with this one. Their attention to detail and commitment to customer satisfaction are unmatched. I won't hesitate to hire them again for future projects!"
  },
  {
    name: "Ryan Wilson",
    image: person2,
    quote: "I had an emergency electrical issue at my home, and this service came to the rescue. They arrived promptly and resolved the problem efficiently, ensuring the safety of my family. I'm grateful for their prompt and professional service!"
  },
  {
    name: "Emily Thompson",
    image: person3,
    quote: "I recently hired this cleaning service for a deep clean of my apartment before moving out. They did an incredible job, and I got my security deposit back without any deductions. Highly recommend!"
  },
];

// export const residnetialplumber = [
//   {
//     name: "Leak Detection and Repair",
//     description:
//       "Professional detection and repair of leaks in pipes, faucets, or fixtures to prevent water damage.",
//     image: plumb1,
//   },
//   {
//     name: "Drain Cleaning and Unclogging",
//     description:
//       "Thorough cleaning and removal of blockages from drains to restore proper drainage and prevent backups.",
//     image: plumb2,
//   },
//   {
//     name: "Toilet Repair and Installation",
//     description:
//       "Repair of malfunctioning toilets or installation of new toilets for improved efficiency and performance.",
//     image: plumb3,
//   },
//   {
//     name: "Faucet and Fixture Repair/Replacement",
//     description:
//           "Repair or replacement of faucets and fixtures to fix leaks, improve water flow, and enhance aesthetics.",
//     image: plumb4,
//   },
//   {
//     name: "Water Heater Repair and Installation",
//     description:
//           "Repair of faulty water heaters or installation of new units to ensure reliable hot water supply.",
//     image: plumb5,
//   },
//   {
//     name: "Garbage Disposal Repair and Installation",
//     description:
//           "Repair or installation of garbage disposals for efficient disposal of food waste in kitchen sinks.",
//     image: plumb6,
//   },
//   {
//     name: "Pipe Inspection and Repair",
//     description:
//           "Repair or replacement of damaged or clogged sewer lines to restore proper sewage flow.",
//     image: plumb7,
//   },
//   {
//     name: "Sewer Line Repair and Replacement",
//     description:
//           "Inspection of pipes for leaks, corrosion, or damage followed by professional repair to prevent water damage.",
//     image: plumb8,
//   },
//   {
//     name: "Water Pressure Regulation",
//     description:
//           "Adjustment of water pressure to ensure optimal performance of plumbing fixtures and prevent damage.",
//     image: plumb9,
//   },
//   {
//     name: "Plumbing System Maintenance Contracts",
//     description:
//           "Scheduled maintenance services to keep residential plumbing systems in top condition and prevent unexpected breakdowns.",
//     image: plumb10,
//   },
// ];

// export const commercialplumber = [
//   {
//     name: "Commercial Water Heater Repair and Installation",
//     description:
//       " Repair or installation of commercial-grade water heaters to meet high-demand hot water needs.",
//     image: plumb11,
//   },
//   {
//     name: "Backflow Prevention Testing and Installation",
//     description:
//       "Testing and installation of backflow prevention devices to protect potable water sources from contamination.",
//     image: plumb12,
//   },
//   {
//     name: "Grease Trap Cleaning and Maintenance",
//     description:
//       "Regular cleaning and maintenance of grease traps to prevent clogs and ensure compliance with regulations.",
//     image: plumb13,
//   },
//   {
//     name: "Commercial Kitchen Plumbing Services",
//     description:
//           " Installation, repair, and maintenance of plumbing systems in commercial kitchens, including sinks, dishwashers, and grease traps.",
//     image: plumb14,
//   },
//   {
//     name: "Restroom Plumbing Maintenance",
//     description:
//           "Maintenance and repair services for restroom plumbing fixtures, including toilets, urinals, sinks, and faucets.",
//     image: plumb15,
//   },
//   {
//     name: "Pipe Lining and Trenchless Pipe Repair",
//     description:
//           "Non-invasive methods for repairing or reinforcing commercial pipes without excavation, minimizing disruption to operations.",
//     image: plumb16,
//   },
//   {
//     name: "Commercial Boiler Repair and Installation",
//     description:
//           "Repair or installation of commercial boilers for heating and hot water supply in large buildings.",
//     image: plumb17,
//   },
//   {
//     name: "Water Filtration and Purification Systems",
//     description:
//           "Installation of water filtration and purification systems to ensure clean and safe drinking water for employees and customers.",
//     image: plumb18,
//   },
//   {
//     name: "Fire Sprinkler System Installation and Maintenance",
//     description:
//           "Installation and maintenance of fire sprinkler systems to protect commercial properties from fire damage.",
//     image: plumb19,
//   },
//   {
//     name: "Emergency Plumbing Services for Businesses",
//     description:
//           " 24/7 emergency plumbing services to address urgent plumbing issues and minimize downtime for businesses.",
//     image: plumb20,
//   },
// ];

export const plumbingTestimonials = [
  {
    name: "Michael Brown",
    image: person1,
    quote: "I had a leaky faucet that was driving me crazy, but thanks to this plumbing service, it's now working perfectly! The plumber was punctual, courteous, and fixed the issue in no time. I'm extremely satisfied with the service."
  },
  {
    name: "Jennifer Martinez",
    image: person3,
    quote: "I called this plumbing service for an emergency drain clog, and they saved the day! The plumber arrived quickly, assessed the problem, and cleared the clog efficiently. Their professionalism and expertise are commendable!"
  },
  {
    name: "Chris Evans",
    image: person2,
    quote: "I recently renovated my bathroom and needed help with plumbing fixtures installation. This plumbing service exceeded my expectations with their attention to detail and quality workmanship. I couldn't be happier with the results!"
  },
  {
    name: "Amanda Roberts",
    image: person4,
    quote: "I had a burst pipe in my basement, and I was in a panic. Thankfully, I called this plumbing service, and they came to the rescue! The plumber arrived promptly, repaired the pipe, and saved me from a potential disaster. I'm incredibly grateful for their prompt and professional service."
  },
  {
    name: "Kevin Johnson",
    image: person5,
    quote: "I've been using this plumbing service for years, and they've never let me down. Whether it's routine maintenance or emergency repairs, they always deliver top-notch service. I highly recommend them to anyone in need of plumbing assistance!"
  },
  {
    name: "Laura Anderson",
    image: person6,
    quote: "I had a stubborn toilet clog that I couldn't fix myself, so I called this plumbing service for help. The plumber arrived promptly, diagnosed the problem, and fixed it quickly. Their expertise and professionalism are unmatched!"
  },
];

// export const residnetialcarpenter = [
//   {
//     name: "Custom Furniture Design",
//     description:
//       "Craft bespoke furniture pieces tailored to fit the unique style and dimensions of residential spaces, including beds, cabinets, tables, and more.",
//     image: carp2,
//   },
//   {
//     name: "Interior Trim Installation",
//     description:
//       "Enhance the aesthetics of residential interiors with expertly installed trim work, including baseboards, crown molding, wainscoting, and chair rails.",
//     image: carp3,
//   },
//   {
//     name: "Cabinet Installation and Repair",
//     description:
//       "Provide installation services for kitchen cabinets, bathroom vanities, and custom storage solutions, as well as repairs and refinishing for existing cabinetry.",
//     image: carp4,
//   },
//   {
//     name: "Deck Construction and Repair",
//     description:
//           "Build durable and stylish decks for residential properties, offering services from design and material selection to construction and maintenance.",
//     image: carp5,
//   },
//   {
//     name: "Home Renovation Services",
//     description:
//           "Offer comprehensive renovation services for residential properties, including structural modifications, flooring installation, door and window replacement, and more.",
//     image: carp6,
//   },
// ];

// export const commercialcarpenter = [
//   {
//     name: "Office Furniture Installation",
//     description:
//       "Provide installation services for commercial office furniture, including desks, shelving units, partitions, and ergonomic workstations.",
//     image: carp7,
//   },
//   {
//     name: "Retail Display Construction",
//     description:
//       "Build attractive and functional retail displays for storefronts, helping businesses showcase their products effectively and enhance the shopping experience.",
//     image: carp8,
//   },
//   {
//     name: "Restaurant Interior Design",
//     description:
//       "Collaborate with restaurant owners to design and build custom interior elements such as bars, booths, hostess stands, and decorative accents that reflect the restaurant's theme and ambiance.",
//     image: carp9,
//   },
//   {
//     name: "Commercial Renovation Services",
//     description:
//           "Offer renovation and remodeling services for commercial properties, including office spaces, retail stores, restaurants, and more, to optimize functionality and aesthetics.",
//     image: carp10,
//   },
//   {
//     name: "Exterior Signage Installation",
//     description:
//           " Install exterior signage for commercial properties, including storefront signs, directional signs, and advertising displays, using durable materials and precision installation techniques.",
//     image: carp11,
//   },
// ];

export const carpentryTestimonials = [
  {
    name: "Michael Smith",
    image: person1,
    quote: "I recently hired this carpentry service to build custom shelves for my home office. Their attention to detail and craftsmanship exceeded my expectations. I'm thrilled with the result!"
  },
  {
    name: "Emma Davis",
    image: person3,
    quote: "I needed a new deck installed in my backyard, and this carpentry service delivered exceptional results. From the initial consultation to the final installation, their team was professional and efficient. Highly recommended!"
  },
  {
    name: "David Martinez",
    image: person2,
    quote: "I had some old furniture that needed restoration, and I'm glad I chose this carpentry service for the job. They transformed my worn-out pieces into beautiful works of art. I couldn't be happier with the outcome!"
  },
  {
    name: "Sophie Johnson",
    image: person4,
    quote: "I wanted to add a touch of elegance to my kitchen, so I hired this carpentry service to install custom cabinets. Their craftsmanship and attention to detail brought my vision to life. I'm absolutely delighted with the results!"
  },
  {
    name: "Ryan Thompson",
    image: person5,
    quote: "I hired this carpentry service to build a pergola in my backyard, and I'm incredibly impressed with their work. Not only did they complete the project on time, but they also exceeded my expectations in terms of quality and design."
  },
  {
    name: "Olivia White",
    image: person6,
    quote: "I needed some repairs done on my staircase, and this carpentry service did an amazing job. They were prompt, professional, and meticulous in their work. I highly recommend them for any carpentry needs!"
  }
];

// export const residentialMedicalServices = [
//   {
//     name: "Primary Care Physician Visits",
//     description: "Routine check-ups, vaccinations, and general health consultations for individuals and families.",
//     image: doc1,
//   },
//   {
//     name: "Home Health Care",
//     description: "Nursing care, physical therapy, and assistance with daily living activities for individuals recovering from illness or surgery or those with chronic conditions.",
//     image: doc2,
//   },
//   {
//     name: "Pediatric Care",
//     description: "Specialized medical care for infants, children, and adolescents, including vaccinations, well-child visits, and treatment of common childhood illnesses.",
//     image: doc3,
//   },
//   {
//     name: "Geriatric Care",
//     description: "Comprehensive medical care for older adults, including management of chronic conditions, preventive care, and assistance with age-related health issues.",
//     image: doc4,
//   },
//   {
//     name: "Mental Health Counseling",
//     description: "Counseling and therapy services for individuals and families dealing with mental health issues such as anxiety, depression, and stress management.",
//     image: doc5,
//   },
// ];

// export const commercialMedicalServices = [
//   {
//     name: "Occupational Health Services",
//     description: "Comprehensive health assessments and screenings for employees, as well as injury care, ergonomic evaluations, and health promotion programs.",
//     image: doc6,
//   },
//   {
//     name: "Worksite Wellness Programs",
//     description: "Customized wellness initiatives designed to improve employee health and productivity, including fitness challenges, nutrition education, and stress management workshops.",
//     image: doc7,
//   },
//   {
//     name: "Corporate Health Exams",
//     description: "Health evaluations tailored for corporate clients, such as executive physicals, pre-employment screenings, and annual health assessments.",
//     image: doc8,
//   },
//   {
//     name: "Industrial Medicine",
//     description: "Medical services focused on the health and safety of workers in industrial settings, including injury treatment, hazardous exposure management, and fitness-for-duty evaluations.",
//     image: doc9,
//   },
//   {
//     name: "Employee Assistance Programs (EAP)",
//     description: "Confidential counseling and support services for employees dealing with personal or work-related issues, including mental health concerns, substance abuse, and stress management.",
//     image: doc10,
//   },
// ];

export const medicalTestimonials = [
  {
    name: "John Johnson",
    image: person1,
    quote: "I recently underwent treatment at this medical facility, and I must say, the care and attention I received were outstanding. The staff was compassionate, knowledgeable, and dedicated to ensuring my well-being throughout my entire stay."
  },
  {
    name: "Sarah Adams",
    image: person3,
    quote: "My experience with this medical service has been nothing short of exceptional. From the moment I walked in, I felt welcomed and cared for. The doctors and nurses went above and beyond to provide me with the best possible care, and I am truly grateful."
  },
  {
    name: "Mark Thompson",
    image: person2,
    quote: "I've been a patient at this medical facility for several years now, and I couldn't be happier with the level of care I receive. The medical staff is highly skilled and always takes the time to address my concerns and answer my questions. I feel confident knowing that I'm in good hands here."
  },
  {
    name: "Jessica Miller",
    image: person4,
    quote: "I recently had a procedure done at this medical center, and I couldn't be more pleased with the results. The entire team, from the surgeons to the support staff, was incredibly professional and made me feel comfortable every step of the way. I highly recommend this facility to anyone in need of medical care."
  },
  {
    name: "Ryan Wilson",
    image: person5,
    quote: "I've had the pleasure of visiting this medical clinic for various medical needs, and each time, I've been impressed by the level of expertise and compassion shown by the staff. Whether it's a routine check-up or a more complex procedure, I always feel confident in the care I receive here."
  },
  {
    name: "Emily Thompson",
    image: person6,
    quote: "My family and I have been patients at this medical facility for generations, and we wouldn't trust anyone else with our health care needs. The doctors and staff are like family to us, and we appreciate the personalized care and attention we receive every time we visit."
  }
];

// export const residentialMechanicalServices = [
//   {
//     name: "Vehicle Maintenance and Repair",
//     description: "Routine maintenance services such as oil changes, tire rotations, brake inspections, and fluid checks to keep residential vehicles running smoothly.",
//     image: mech1,
//   },
//   {
//     name: "Diagnostic Services",
//     description: "Utilize advanced diagnostic tools to identify and address mechanical issues, including engine problems, electrical malfunctions, and performance issues in personal vehicles.",
//     image: mech2,
//   },
//   {
//     name: "Tune-Ups",
//     description: "Conduct comprehensive tune-ups to optimize engine performance, improve fuel efficiency, and ensure the reliability of residential vehicles.",
//     image: mech3,
//   },
//   {
//     name: "Air Conditioning Service",
//     description: "Offer air conditioning system inspections, repairs, and recharges to maintain comfortable cabin temperatures during hot weather for residential vehicle owners.",
//     image: mech4,
//   },
//   {
//     name: "Battery Replacement",
//     description: "Provide battery testing, diagnostics, and replacement services to ensure reliable starting power for residential vehicles, especially in extreme weather conditions.",
//     image: mech5,
//   },
//   {
//     name: "Car Washing and Detailing",
//     description: "Offer exterior and interior car washing and detailing services to keep residential vehicles clean, polished, and well-maintained.",
//     image: mech6,
//   },
// ];

// export const commercialMechanicalServices = [
//   {
//     name: "Fleet Maintenance",
//     description: "Offer scheduled maintenance programs for commercial vehicle fleets to minimize downtime, reduce operating costs, and maximize productivity.",
//     image: mech7,
//   },
//   {
//     name: "Emergency Repairs",
//     description: "Provide 24/7 emergency mechanical repair services for commercial vehicles, ensuring minimal disruption to business operations in the event of breakdowns or malfunctions.",
//     image: mech8,
//   },
//   {
//     name: "Heavy Equipment Servicing",
//     description: "Perform maintenance and repairs on commercial-grade machinery and heavy equipment used in construction, agriculture, and industrial sectors.",
//     image: mech9,
//   },
//   {
//     name: "Transmission Rebuilds",
//     description: "Specialized rebuilding and repair services for commercial vehicle transmissions to restore functionality and extend the lifespan of transmission systems.",
//     image: mech10,
//   },
//   {
//     name: "Hydraulic System Repairs",
//     description: "Diagnose and repair hydraulic systems in commercial vehicles and equipment, including hydraulic pumps, cylinders, hoses, and valves, to ensure optimal performance and safety.",
//     image: mech11,
//   },
//   {
//     name: "Commercial Vehicle Washing",
//     description: "Provide exterior washing and detailing services for commercial vehicles, including trucks, vans, and buses, to maintain a professional appearance and enhance brand image.",
//     image: mech12,
//   },
// ];

export const autoMobileTestimonials = [
  {
    name: "John Johnson",
    image: person1,
    quote: "I recently had my car serviced at this auto-mobile repair shop, and I couldn't be happier with the results. The mechanics were knowledgeable, efficient, and went above and beyond to ensure my vehicle was in top condition. I highly recommend their services!"
  },
  {
    name: "Sarah Adams",
    image: person3,
    quote: "My experience with this auto-mobile washing service exceeded my expectations. Not only did they thoroughly clean my car inside and out, but the staff was also friendly and professional. I'll definitely be returning for future washes!"
  },
  {
    name: "Mark Thompson",
    image: person2,
    quote: "I've been bringing my car to this auto-mobile repair shop for years, and they never disappoint. The mechanics are skilled, honest, and always take the time to explain the repairs needed. I trust them completely with my vehicle."
  },
  {
    name: "Jessica Miller",
    image: person4,
    quote: "I recently had my car detailed at this auto-mobile washing service, and I was impressed by the level of care and attention to detail. My car looks brand new inside and out! I'll definitely be recommending their services to friends and family."
  },
  {
    name: "Ryan Wilson",
    image: person5,
    quote: "Whenever my car needs maintenance or repairs, I know I can count on this auto-mobile repair shop to get the job done right. The mechanics are skilled, efficient, and always go the extra mile to ensure customer satisfaction. Highly recommended!"
  },
  {
    name: "Emily Thompson",
    image: person6,
    quote: "I've been using this auto-mobile washing service for years, and they consistently deliver excellent results. Not only is my car spotless after each wash, but the staff is also friendly and courteous. I wouldn't trust anyone else with my car!"
  }
];

// export const residentialGardeningServices = [
//   {
//     name: "Lawn Maintenance",
//     description: "Regular mowing, edging, and trimming to keep residential lawns neat and well-groomed.",
//     image: gard1,
//   },
//   {
//     name: "Garden Bed Maintenance",
//     description: "Weeding, mulching, and seasonal planting to maintain the beauty and health of flower beds and garden areas.",
//     image: gard2,
//   },
//   {
//     name: "Tree and Shrub Care",
//     description: "Pruning, shaping, and fertilizing trees and shrubs to enhance their appearance and promote healthy growth.",
//     image: gard3,
//   },
//   {
//     name: "Hardscape Maintenance",
//     description: "Cleaning and upkeep of pathways, driveways, and other hardscape features to ensure safety and aesthetics.",
//     image: gard4,
//   },
//   {
//     name: "Seasonal Cleanup",
//     description: "Leaf removal, debris clearing, and winterization services to prepare residential gardens for changing seasons.",
//     image: gard5,
//   }
// ];

// export const commercialGardeningServices = [
//   {
//     name: "Landscaping Design and Installation",
//     description: "Custom landscape design and installation services tailored to enhance the curb appeal and functionality of commercial properties.",
//     image: gard6,
//   },
//   {
//     name: "Grounds Maintenance",
//     description: "Comprehensive maintenance services for large commercial properties, including lawn care, shrub pruning, and flower bed upkeep.",
//     image: gard7,
//   },
//   {
//     name: "Commercial Lawn Care",
//     description: "Scheduled mowing, fertilization, and irrigation management to maintain lush and healthy lawns for commercial properties.",
//     image: gard8,
//   },
//   {
//     name: "Urban Green Spaces",
//     description: "Maintenance and beautification of parks, green belts, and other public spaces to create inviting environments for communities and visitors.",
//     image: gard9,
//   },
//   {
//     name: "Seasonal Displays",
//     description: "Installation and maintenance of seasonal plantings and floral displays to add color and visual interest to commercial landscapes throughout the year.",
//     image: gard10,
//   }
// ];

export const gardeningTestimonials = [
  {
    name: "David Green",
    image: person1,
    quote: "I recently hired this gardening service to revamp my backyard, and I'm blown away by the transformation! The team was incredibly skilled and worked tirelessly to create a beautiful outdoor space that exceeded my expectations. I can't recommend them enough!"
  },
  {
    name: "Linda Smith",
    image: person3,
    quote: "I'm thrilled with the gardening services provided by this company. They not only planted a variety of beautiful flowers and shrubs but also offered valuable advice on how to maintain my garden. Now, my yard is a vibrant and welcoming oasis!"
  },
  {
    name: "Michael Brown",
    image: person2,
    quote: "I've been relying on this gardening service for regular maintenance of my lawn, and I couldn't be happier with the results. The team is professional, punctual, and always leaves my garden looking pristine. Thank you for your exceptional service!"
  },
  {
    name: "Jennifer Davis",
    image: person4,
    quote: "Thanks to this gardening service, my front yard has become the envy of the neighborhood! From trimming hedges to mulching flower beds, they handled every aspect with precision and care. I'm incredibly impressed and grateful for their expertise."
  },
  {
    name: "Robert Evans",
    image: person5,
    quote: "I recently hired this gardening service to tackle a major landscaping project, and they exceeded all my expectations. Their attention to detail and creative approach resulted in a stunning outdoor space that perfectly complements my home. Highly recommend their services!"
  },
  {
    name: "Samantha White",
    image: person6,
    quote: "I've been using this gardening service for years, and they consistently deliver exceptional results. Whether it's pruning trees or installing irrigation systems, they handle every task with professionalism and expertise. My garden has never looked better!"
  }
];

// export const residentialSecurityServices = [
//   {
//     name: "Alarm Systems Installation and Monitoring",
//     description: "Provide installation and monitoring services for alarm systems designed for residential properties.",
//     image: sec1,
//   },
//   {
//     name: "Surveillance Camera Installation",
//     description: "Offer installation of surveillance cameras tailored for home use, covering both indoor and outdoor areas.",
//     image: sec2,
//   },
//   {
//     name: "Smart Home Integration",
//     description: "Integrate smart home security devices such as doorbell cameras, smart locks, and motion sensors for enhanced residential security.",
//     image: sec3,
//   },
//   {
//     name: "Access Control Systems",
//     description: "Install access control systems like keypad entry or smart locks to manage entry points within a residential property.",
//     image: sec4,
//   },
//   {
//     name: "Intercom Systems",
//     description: "Install intercom systems for communication and verification of visitors before granting access to the residential premises.",
//     image: sec5,
//   },
//   {
//     name: "Security Lighting",
//     description: "Install motion-activated or timed security lighting around the exterior of residential properties to improve visibility and deter intruders.",
//     image: sec6,
//   },
//   {
//     name: "Fence and Gate Installation",
//     description: "Offer installation of fences and gates to secure the perimeter of residential properties and control access points.",
//     image: sec7,
//   }
// ];

// export const commercialSecurityServices = [
//   {
//     name: "Commercial Alarm Systems Installation and Monitoring",
//     description: "Provide installation and monitoring services for alarm systems tailored for commercial properties, including offices, shops, and warehouses.",
//     image: sec8,
//   },
//   {
//     name: "Surveillance Camera Systems",
//     description: "Install comprehensive surveillance camera systems designed for monitoring large commercial spaces, including both indoor and outdoor areas.",
//     image: sec9,
//   },
//   {
//     name: "Access Control Solutions",
//     description: "Implement advanced access control solutions such as biometric scanners or key card systems to manage access to commercial premises.",
//     image: sec10,
//   },
//   {
//     name: "Intrusion Detection Systems",
//     description: "Install and maintain intrusion detection systems to detect unauthorized entry or suspicious activity within commercial properties.",
//     image: sec11,
//   },
//   {
//     name: "Security Guards and Patrol Services",
//     description: "Provide trained security guards and patrol services for commercial properties to deter theft, vandalism, and other security threats.",
//     image: sec12,
//   },
//   {
//     name: "Fire Alarm Systems",
//     description: "Install and maintain fire alarm systems in compliance with commercial building codes and regulations to ensure the safety of occupants.",
//     image: sec13,
//   },
// ];

export const securityTestimonials = [
  {
    name: "John Smith",
    image: person1,
    quote: "I recently had the residential alarm system installed by this company, and I feel much more secure in my home now. The installation process was smooth, and the monitoring service gives me peace of mind knowing that my property is protected 24/7."
  },
  {
    name: "Emily Johnson",
    image: person3,
    quote: "Our office hired this company for access control solutions, and we're extremely satisfied with their service. The team was knowledgeable and professional, and they helped us implement a secure and efficient access system for our employees."
  },
  {
    name: "Mark Davis",
    image: person2,
    quote: "We decided to upgrade our surveillance camera systems for our warehouse, and this company did an excellent job. The new cameras provide crystal-clear footage, and their installation team was efficient and respectful of our workspace."
  },
  {
    name: "Sarah Wilson",
    image: person4,
    quote: "I recently had security guards stationed at my retail store, and their presence has significantly deterred theft and vandalism. The guards are courteous and vigilant, providing a sense of safety for both customers and employees."
  },
  {
    name: "Alex Rodriguez",
    image: person5,
    quote: "We contracted this company for emergency response planning for our corporate headquarters, and they exceeded our expectations. Their comprehensive plan covers various scenarios and ensures that our staff is prepared for any situation."
  },
  {
    name: "Jessica Lee",
    image: person6,
    quote: "I'm impressed with the fire alarm system installation done by this company. Their team was efficient and knowledgeable, and they made sure everything was up to code. Now, I feel confident that our building is equipped to handle emergencies."
  }
];
