export interface UniversityProgram {
  name: string;
  duration?: string;
  details?: string;
  link?: string;
}

export interface University {
  id: number;
  name: string;
  location: string;
  image: string;
  ranking: string;
  description: string;
  programs: string[];
  duration: string;
  type: "bachelors" | "masters";
  category: string;
  overview?: string[];
  strengths?: string[];
  vision?: string;
  programsDetailed?: {
    diplomas?: UniversityProgram[];
    undergraduate?: UniversityProgram[];
    postgraduate?: UniversityProgram[];
    other?: UniversityProgram[];
  };
  languageRequirements?: {
    foundation?: string[];
    undergraduate?: string[];
    postgraduate?: string[];
    note?: string;
  };
  admissions?: {
    undergraduate?: string[];
    postgraduate?: string[];
    matureApplicants?: string;
    notes?: string[];
  };
  contact?: {
    address?: string;
    phone?: string;
    email?: string;
    website?: string;
    mapUrl?: string;
  };
  gallery?: string[];
}
