export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "admission",
    name: "Admission FAQs",
    icon: "📋",
    description: "Questions about university admission and programs",
    items: [
      {
        id: "admission-1",
        category: "admission",
        question: "What is the eligibility criteria for Cyprus universities?",
        answer:
          "Generally, students need to have completed their 12th grade (NEB certification) with a minimum GPA. Some universities may have specific subject requirements depending on the program. Our counselors can help you determine eligibility for each university.",
      },
      {
        id: "admission-2",
        category: "admission",
        question: "How do I apply to Cyprus universities?",
        answer:
          "Contact us for a free consultation. We assess your profile, recommend suitable universities and programs, help prepare documents, and submit applications directly to the universities on your behalf.",
      },
      {
        id: "admission-3",
        category: "admission",
        question: "What documents are required for admission?",
        answer:
          "Typically required documents include: academic transcripts, 12th pass certificate, passport copy, recommendation letters, statement of purpose, and English language proficiency proof (if required).",
      },
      {
        id: "admission-4",
        category: "admission",
        question: "How long does the admission process take?",
        answer:
          "The admission process typically takes 4-8 weeks from application submission to final acceptance, depending on the university and program.",
      },
      {
        id: "admission-5",
        category: "admission",
        question: "Can I apply to multiple universities at once?",
        answer:
          "Yes, we recommend applying to multiple universities based on your profile and preferences. This increases your chances of getting admission with better scholarship offers.",
      },
    ],
  },
  {
    id: "visa",
    name: "Visa FAQs",
    icon: "🛂",
    description: "Information about visa processing and requirements",
    items: [
      {
        id: "visa-1",
        category: "visa",
        question: "How long does visa processing take?",
        answer:
          "Cyprus student visa processing typically takes 4-8 weeks from application submission. The duration may vary based on the completeness of documents and embassy workload.",
      },
      {
        id: "visa-2",
        category: "visa",
        question: "What are the main reasons for visa rejection?",
        answer:
          "Common reasons include: incomplete documentation, insufficient financial proof, lack of English proficiency, poor academic records, or suspicion of study intent. Our team helps avoid these issues.",
      },
      {
        id: "visa-3",
        category: "visa",
        question: "What documents are needed for student visa?",
        answer:
          "Required documents include: valid passport, university acceptance letter, proof of financial support, academic transcripts, sponsor affidavit, travel insurance, and bank statements.",
      },
      {
        id: "visa-4",
        category: "visa",
        question: "How should I prepare for the visa interview?",
        answer:
          "Prepare by: understanding your course details, knowing about the university, having financial documents ready, practicing answers about your study plans, and maintaining confidence. We provide interview coaching.",
      },
      {
        id: "visa-5",
        category: "visa",
        question: "Can I work while on a student visa?",
        answer:
          "Yes, international students can work up to 20 hours per week during academic sessions and full-time during holidays. This is permitted by Cyprus authorities for international students.",
      },
      {
        id: "visa-6",
        category: "visa",
        question: "What is the validity period of student visa?",
        answer:
          "Student visas are typically valid for the duration of your study program. Upon graduation, you may apply for a residence permit or return to your home country.",
      },
    ],
  },
  {
    id: "financial",
    name: "Financial FAQs",
    icon: "💰",
    description: "Questions about fees, scholarships, and financial matters",
    items: [
      {
        id: "financial-1",
        category: "financial",
        question: "What are the accepted payment methods?",
        answer:
          "Most universities accept bank transfers, credit cards, and checks. Some may offer installment plans. We can guide you on the specific payment method accepted by your university.",
      },
      {
        id: "financial-2",
        category: "financial",
        question: "What is the refund policy for tuition fees?",
        answer:
          "Refund policies vary by university. Generally, fees are non-refundable after a certain date (usually after course starts). Some universities offer partial refunds for specific circumstances. Check with your university.",
      },
      {
        id: "financial-3",
        category: "financial",
        question: "Are scholarships available for international students?",
        answer:
          "Yes, most Cyprus universities offer merit-based and need-based scholarships. We provide guidance on available scholarships and help you apply for them to reduce your financial burden.",
      },
      {
        id: "financial-4",
        category: "financial",
        question: "How much can I earn from part-time work?",
        answer:
          "Working 20 hours per week at typical rates (€5-7/hour) can earn you €400-560 per month, which covers significant living expenses. Full-time work during holidays can provide additional income.",
      },
      {
        id: "financial-5",
        category: "financial",
        question: "What is the average cost of studying in Cyprus?",
        answer:
          "Tuition fees range from €3,000-15,000 per year depending on the program. Living expenses are approximately €500-800 per month. Total annual cost is roughly €6,000-18,000.",
      },
      {
        id: "financial-6",
        category: "financial",
        question: "Do universities offer installment payment plans?",
        answer:
          "Some universities offer installment plans for tuition fees. This is something we can negotiate on your behalf with the university.",
      },
    ],
  },
  {
    id: "life-in-cyprus",
    name: "Life in Cyprus FAQs",
    icon: "🏖️",
    description: "Information about living as a student in Cyprus",
    items: [
      {
        id: "life-1",
        category: "life-in-cyprus",
        question: "What are the accommodation options in Cyprus?",
        answer:
          "Options include university hostels, private apartments, shared flats, and homestays. University hostels are affordable (€200-300/month), while private apartments cost €400-700/month depending on location.",
      },
      {
        id: "life-2",
        category: "life-in-cyprus",
        question: "What food options are available for international students?",
        answer:
          "Cyprus has diverse food options including local Cypriot cuisine, Mediterranean food, Indian, Chinese, and other international cuisines. University cafeterias also provide affordable meal plans.",
      },
      {
        id: "life-3",
        category: "life-in-cyprus",
        question: "How is transportation in Cyprus?",
        answer:
          "Transportation is convenient with buses, mini-buses (shared taxis), and taxis. Student bus passes are affordable. Universities often provide shuttle services. Car rentals are also available.",
      },
      {
        id: "life-4",
        category: "life-in-cyprus",
        question: "Is Cyprus safe for international students?",
        answer:
          "Yes, Cyprus is very safe with low crime rates. It consistently ranks as one of the safest countries in Europe. International students can safely move around cities at any time.",
      },
      {
        id: "life-5",
        category: "life-in-cyprus",
        question: "What about language barriers?",
        answer:
          "While the local language is Greek, English is widely spoken in urban areas, universities, and tourist zones. Most education is in English. Learning basic Greek is helpful but not essential.",
      },
      {
        id: "life-6",
        category: "life-in-cyprus",
        question: "What is the weather like in Cyprus?",
        answer:
          "Cyprus has a Mediterranean climate with mild winters (8-15°C) and hot summers (25-35°C). Summers are dry and sunny, perfect for beach activities. The weather is generally pleasant year-round.",
      },
      {
        id: "life-7",
        category: "life-in-cyprus",
        question: "Are there social activities for students?",
        answer:
          "Yes, universities have active student clubs, sports facilities, cultural events, and social gatherings. Cyprus also has beaches, historical sites, and vibrant nightlife for recreation.",
      },
    ],
  },
];

export const getAllFAQs = (): FAQItem[] => {
  return faqCategories.flatMap((category) => category.items);
};

export const searchFAQs = (query: string): FAQItem[] => {
  const normalizedQuery = query.toLowerCase();
  return getAllFAQs().filter(
    (item) =>
      item.question.toLowerCase().includes(normalizedQuery) ||
      item.answer.toLowerCase().includes(normalizedQuery)
  );
};

export const getFAQsByCategory = (categoryId: string): FAQItem[] => {
  const category = faqCategories.find((cat) => cat.id === categoryId);
  return category ? category.items : [];
};
