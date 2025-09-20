export interface College {
  id: number;
  name: string;
  district: string;
  state: string;
  type: "Government" | "Private";
  courses: string[];
  fees: {
    annual: number;
    currency: string;
  };
  facilities: string[];
  website: string;
  established: number;
  affiliation: string;
  rating: number;
}

export const colleges: College[] = [
  {
    id: 1,
    name: "University of Jammu",
    district: "Jammu",
    state: "Jammu & Kashmir",
    type: "Government",
    courses: ["B.A", "B.Sc", "B.Com", "BBA", "BCA", "B.Tech", "MBBS"],
    fees: { annual: 15000, currency: "INR" },
    facilities: ["Library", "Hostel", "Sports Complex", "Computer Lab", "Cafeteria"],
    website: "https://www.jammuuniversity.ac.in",
    established: 1969,
    affiliation: "UGC Recognized",
    rating: 4.2
  },
  {
    id: 2,
    name: "Kashmir University",
    district: "Srinagar",
    state: "Jammu & Kashmir",
    type: "Government",
    courses: ["B.A", "B.Sc", "B.Com", "B.Tech", "MBBS", "B.Ed"],
    fees: { annual: 12000, currency: "INR" },
    facilities: ["Central Library", "Hostel", "Medical Center", "Labs", "Auditorium"],
    website: "https://www.kashmiruniversity.net",
    established: 1948,
    affiliation: "UGC Recognized",
    rating: 4.1
  },
  {
    id: 3,
    name: "Government Medical College, Jammu",
    district: "Jammu",
    state: "Jammu & Kashmir",
    type: "Government",
    courses: ["MBBS", "B.Sc Nursing", "B.Pharmacy"],
    fees: { annual: 25000, currency: "INR" },
    facilities: ["Hospital", "Library", "Hostel", "Research Labs", "Anatomy Museum"],
    website: "https://www.gmcjammu.nic.in",
    established: 1973,
    affiliation: "MCI Approved",
    rating: 4.3
  },
  {
    id: 4,
    name: "National Institute of Technology, Srinagar",
    district: "Srinagar",
    state: "Jammu & Kashmir",
    type: "Government",
    courses: ["B.Tech", "B.Sc", "BCA"],
    fees: { annual: 45000, currency: "INR" },
    facilities: ["Modern Labs", "Hostel", "Sports Complex", "Library", "Wi-Fi Campus"],
    website: "https://www.nitsri.ac.in",
    established: 1960,
    affiliation: "AICTE Approved",
    rating: 4.4
  },
  {
    id: 5,
    name: "Government College for Women, Srinagar",
    district: "Srinagar",
    state: "Jammu & Kashmir",
    type: "Government",
    courses: ["B.A", "B.Sc", "B.Com", "BCA"],
    fees: { annual: 8000, currency: "INR" },
    facilities: ["Library", "Computer Lab", "Canteen", "Counseling Center", "Career Guidance"],
    website: "https://www.gcwsrinagar.edu.in",
    established: 1950,
    affiliation: "Kashmir University",
    rating: 3.9
  },
  {
    id: 6,
    name: "Government College, Baramulla",
    district: "Baramulla",
    state: "Jammu & Kashmir",
    type: "Government",
    courses: ["B.A", "B.Sc", "B.Com"],
    fees: { annual: 6000, currency: "INR" },
    facilities: ["Library", "Science Labs", "Sports Ground", "NSS Unit"],
    website: "https://www.gcbaramulla.edu.in",
    established: 1965,
    affiliation: "Kashmir University",
    rating: 3.7
  },
  {
    id: 7,
    name: "Government Degree College, Kathua",
    district: "Kathua",
    state: "Jammu & Kashmir",
    type: "Government",
    courses: ["B.A", "B.Sc", "B.Com", "BCA"],
    fees: { annual: 7000, currency: "INR" },
    facilities: ["Library", "Computer Lab", "Chemistry Lab", "Physics Lab", "Playground"],
    website: "https://www.gdckathua.edu.in",
    established: 1975,
    affiliation: "Jammu University",
    rating: 3.8
  },
  {
    id: 8,
    name: "Cluster University of Jammu",
    district: "Jammu",
    state: "Jammu & Kashmir",
    type: "Government",
    courses: ["B.A", "B.Sc", "B.Com", "BBA", "BCA", "Bachelor of Social Work"],
    fees: { annual: 10000, currency: "INR" },
    facilities: ["Modern Campus", "Digital Library", "Innovation Hub", "Student Center"],
    website: "https://www.cujammu.ac.in",
    established: 2017,
    affiliation: "UGC Recognized",
    rating: 4.0
  }
];

export const getCoursesByStream = (stream: string): string[] => {
  const streamCourseMap: Record<string, string[]> = {
    "Science": ["B.Sc", "B.Tech", "MBBS", "B.Pharmacy", "B.Sc Nursing"],
    "Commerce": ["B.Com", "BBA", "B.Com (Hons)", "Bachelor of Accounting"],
    "Arts": ["B.A", "B.A (Hons)", "Bachelor of Social Work", "Bachelor of Journalism", "B.Ed"],
    "Vocational": ["BCA", "Bachelor of Design", "Diploma in IT"]
  };
  
  return streamCourseMap[stream] || [];
};

export const getCollegesByCourse = (course: string): College[] => {
  return colleges.filter(college => 
    college.courses.some(c => c.toLowerCase().includes(course.toLowerCase()))
  );
};

export const getCollegesByDistrict = (district: string): College[] => {
  return colleges.filter(college => 
    college.district.toLowerCase() === district.toLowerCase()
  );
};