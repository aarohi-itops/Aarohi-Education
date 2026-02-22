export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  details: string;
  fullDetails: {
    overview: string;
    keyActivities: string[];
    duration: string;
    deliverables: string[];
  };
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Initial Inquiry & Counseling",
    description: "Get expert guidance and counselor assignment",
    icon: "💬",
    details: "Free consultation, assessment of profile, counselor assignment",
    fullDetails: {
      overview:
        "Start your journey with a free, personalized consultation with our expert education counselors.",
      keyActivities: [
        "Free one-on-one consultation session",
        "Academic profile assessment and evaluation",
        "Career objectives discussion and alignment",
        "University and program recommendations",
        "Personal counselor assignment for ongoing support",
        "Timeline and roadmap creation",
      ],
      duration: "1-2 weeks",
      deliverables: [
        "Personalized assessment report",
        "List of recommended universities",
        "Admission timeline and checklist",
        "Assigned counselor contact information",
      ],
    },
  },
  {
    number: "02",
    title: "University/College Selection",
    description: "Choose the right program and institution",
    icon: "🎓",
    details: "Selection criteria, program matching, requirements evaluation",
    fullDetails: {
      overview:
        "Carefully match your profile with the best universities and programs based on multiple criteria.",
      keyActivities: [
        "Academic background assessment",
        "Career objectives alignment",
        "Field of study matching with your interests",
        "Entry requirements evaluation",
        "Visa compliance verification",
        "University comparison and analysis",
        "Scholarship eligibility assessment",
      ],
      duration: "2-3 weeks",
      deliverables: [
        "Shortlist of 3-5 suitable universities",
        "Program details and specifications",
        "Admission requirements checklist",
        "Fee structure and scholarship information",
        "University ranking and accreditation details",
      ],
    },
  },
  {
    number: "03",
    title: "Document Preparation",
    description: "Prepare all required documents",
    icon: "📋",
    details: "Document checklist, translation, verification",
    fullDetails: {
      overview:
        "Efficiently prepare and organize all required documents for application submission.",
      keyActivities: [
        "Comprehensive document checklist creation",
        "Academic transcripts collection and verification",
        "Certificate translation to English",
        "Reference letter coordination",
        "Statement of purpose writing guidance",
        "English proficiency test arrangement (IELTS/TOEFL)",
        "Passport and identification verification",
        "Document notarization and attestation",
      ],
      duration: "3-4 weeks",
      deliverables: [
        "Complete verified document package",
        "English translations of all documents",
        "Reference letters from recommenders",
        "Statement of purpose (SOP)",
        "English proficiency certificates",
        "Organized digital and physical copies",
      ],
    },
  },
  {
    number: "04",
    title: "Application Submission",
    description: "Submit applications directly",
    icon: "📨",
    details: "Online application, application tracking, status updates",
    fullDetails: {
      overview:
        "We submit applications directly to universities on your behalf and track progress.",
      keyActivities: [
        "Online application portal registration",
        "Form filling and submission",
        "Document upload and verification",
        "Application fee payment processing",
        "Direct university communication",
        "Application status tracking",
        "Follow-up with universities",
        "Additional information submission if required",
      ],
      duration: "2-3 weeks",
      deliverables: [
        "Application confirmation from universities",
        "Application reference numbers",
        "Timeline for admission decision",
        "Regular status updates",
        "Communication with admission offices",
      ],
    },
  },
  {
    number: "05",
    title: "Visa Processing",
    description: "Navigate the visa application",
    icon: "✈️",
    details: "Visa guidance, interview preparation, document submission",
    fullDetails: {
      overview:
        "Complete support through the student visa application and approval process.",
      keyActivities: [
        "Visa requirement explanation and guidance",
        "Financial document preparation (bank statements, sponsor affidavit)",
        "Health insurance arrangement",
        "Medical examination coordination",
        "Visa application form preparation",
        "Embassy appointment scheduling",
        "Interview preparation and coaching",
        "Document submission to embassy",
        "Visa approval tracking",
      ],
      duration: "4-8 weeks",
      deliverables: [
        "Student visa approval",
        "Visa sticker in passport",
        "Visa approval letter",
        "Immigration guidelines document",
        "Pre-arrival information packet",
      ],
    },
  },
  {
    number: "06",
    title: "Departure & Support",
    description: "Begin your overseas journey",
    icon: "🌍",
    details: "Pre-departure orientation, accommodation, settling support",
    fullDetails: {
      overview:
        "We provide comprehensive support to ensure smooth transition to Cyprus.",
      keyActivities: [
        "Pre-departure orientation session",
        "Accommodation booking and confirmation",
        "Airport pickup arrangement",
        "Travel documents verification",
        "Baggage packing guidelines",
        "University orientation schedule",
        "Local SIM card and banking setup",
        "Arrival and settling assistance",
        "Ongoing post-arrival support",
      ],
      duration: "2-4 weeks before departure",
      deliverables: [
        "Accommodation confirmation",
        "Airport pickup details",
        "University orientation schedule",
        "Local contact information",
        "Emergency helpline access",
        "Post-arrival support team contact",
        "Insurance documentation",
      ],
    },
  },
];
