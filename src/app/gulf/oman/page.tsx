import type { Metadata } from "next";
import { GulfPage, type GulfPageData } from "@/components/GulfPage";

export const metadata: Metadata = {
  title: "Study in the UK for Omani Students | EdOne Group — جامعات بريطانية للطلاب العُمانيين",
  description:
    "EdOne Group supports Omani students from Muscat and Salalah in securing places at leading UK universities. Expert guidance on Ministry of Higher Education scholarships, PDO funding, visas and applications.",
  alternates: {
    canonical: "https://edonegroup.co.uk/gulf/oman",
  },
  openGraph: {
    title: "Study in the UK for Omani Students | EdOne Group",
    description:
      "UK university guidance for Omani students — Ministry of Higher Education scholarships, PDO funding, Chevening and Student Route visa support.",
    url: "https://edonegroup.co.uk/gulf/oman",
  },
};

const sharedWithIelts = {
  scoreEn: "IELTS 6.0–7.0",
  notesEn:
    "Most UK postgraduate programmes require IELTS 6.5 overall, with no band below 6.0. Undergraduate typically 6.0.",
  scoreAr: "IELTS 6.0–7.0",
  notesAr:
    "تشترط معظم البرامج البريطانية لمرحلة الدراسات العليا معدل IELTS 6.5 بشكل عام، بدون درجة أقل من 6.0. والبكالوريوس عادةً 6.0.",
};

const sharedWithoutIelts = [
  {
    optionEn: "Pre-sessional English",
    descEn:
      "6–12 week English language course at your target UK university. Pass and proceed directly to your degree.",
    optionAr: "دورة الإنجليزية التمهيدية",
    descAr:
      "دورة لغة إنجليزية 6–12 أسبوعاً في جامعتك البريطانية. اجتازها والتحق مباشرةً بدرجتك.",
  },
  {
    optionEn: "University Internal Test",
    descEn:
      "Some universities accept their own English tests (e.g. OIETC, Duolingo, PTE Academic) as alternatives to IELTS.",
    optionAr: "اختبار الجامعة الداخلي",
    descAr:
      "تقبل بعض الجامعات اختباراتها الخاصة (مثل Duolingo أو PTE) بديلاً عن IELTS.",
  },
  {
    optionEn: "Medium of Instruction Letter",
    descEn:
      "If your degree was taught in English, some universities waive the IELTS requirement with a letter from your institution.",
    optionAr: "خطاب لغة التدريس",
    descAr:
      "إذا كانت دراستك باللغة الإنجليزية، تقبل بعض الجامعات خطاباً من مؤسستك بدلاً من IELTS.",
  },
];

const sharedFees = [
  { levelEn: "Undergraduate", levelAr: "البكالوريوس", range: "£14,000–£25,000/year" },
  {
    levelEn: "Postgraduate (Taught)",
    levelAr: "الدراسات العليا (تدريسي)",
    range: "£16,000–£35,000/year",
  },
  { levelEn: "MBA", levelAr: "ماجستير إدارة الأعمال", range: "£20,000–£60,000/year" },
  { levelEn: "PhD (Research)", levelAr: "الدكتوراه (بحثي)", range: "£17,000–£30,000/year" },
];

const sharedUniversities = [
  { name: "University of Manchester", rank: "Top 30 world", known: "Business, Engineering & Sciences" },
  { name: "University of Edinburgh", rank: "Top 20 world", known: "Medicine, Law & Arts" },
  { name: "UCL", rank: "Top 10 world", known: "Engineering, Sciences & Architecture" },
  { name: "King's College London", rank: "Top 40 world", known: "Law, Medicine & Dentistry" },
  { name: "University of Birmingham", rank: "Top 100 world", known: "Finance, MBA & Computer Science" },
  { name: "University of Exeter", rank: "Top 200 world", known: "Business, Law & Life Sciences" },
];

const sharedWhyUKEn = [
  {
    title: "World-Class Universities",
    desc: "4 of the world's top 10 universities are in the UK. A UK degree is recognised worldwide and respected across Gulf employers.",
  },
  {
    title: "1-Year Masters",
    desc: "UK Masters take just 1 year vs 2 years in the US or Canada — saving you a year of time and tuition.",
  },
  {
    title: "Graduate Route",
    desc: "Stay 2 years after graduation to work in the UK. No job offer needed. Build your career before returning home.",
  },
  {
    title: "Oman-Friendly Environment",
    desc: "Omani student societies and Gulf communities across UK cities. Halal food, prayer facilities, and a welcoming environment at every major UK university.",
  },
];

const sharedWhyUKAr = [
  {
    title: "جامعات عالمية المستوى",
    desc: "4 من أفضل 10 جامعات في العالم موجودة في المملكة المتحدة. الدرجة العلمية البريطانية معترف بها عالمياً ومحترمة من قِبل أصحاب العمل في دول الخليج.",
  },
  {
    title: "ماجستير في سنة واحدة",
    desc: "يستغرق الماجستير في المملكة المتحدة سنة واحدة فقط مقابل سنتين في الولايات المتحدة أو كندا — مما يوفر عليك سنة كاملة من الوقت والرسوم.",
  },
  {
    title: "مسار الخريجين",
    desc: "ابقَ سنتين بعد التخرج للعمل في المملكة المتحدة. لا تحتاج إلى عرض عمل. ابنِ مسيرتك المهنية قبل العودة إلى الوطن.",
  },
  {
    title: "بيئة ملائمة للطلاب العُمانيين",
    desc: "جمعيات طلابية عُمانية ومجتمعات خليجية في المدن البريطانية. طعام حلال ومرافق صلاة وبيئة مرحّبة في كل جامعة بريطانية كبرى.",
  },
];

const data: GulfPageData = {
  countryEn: "Oman",
  countryAr: "سلطنة عُمان",
  flag: "🇴🇲",
  taglineEn: "Study in the UK — For Omani Students",
  taglineAr: "الدراسة في المملكة المتحدة — للطلاب العُمانيين",
  heroDescEn:
    "EdOne Group supports Omani students in securing places at leading UK universities. From Muscat to Salalah, we provide expert guidance on applications, entry requirements, and Omani government scholarship programmes.",
  heroDescAr:
    "تدعم مجموعة إيدون الطلاب العُمانيين في الحصول على أماكن في الجامعات البريطانية الرائدة. من مسقط إلى صلالة، نقدم إرشادات متخصصة بشأن التقديم ومتطلبات القبول وبرامج المنح الحكومية العُمانية.",
  stats: [
    { labelEn: "Average tuition/year", labelAr: "متوسط الرسوم الدراسية", value: "£14,000–£35,000" },
    { labelEn: "Masters duration", labelAr: "مدة الماجستير", value: "1 Year" },
    { labelEn: "Post-study stay", labelAr: "البقاء بعد التخرج", value: "2 Years" },
    { labelEn: "Government scholarships", labelAr: "المنح الحكومية", value: "Available" },
  ],
  scholarships: [
    {
      nameEn: "Ministry of Higher Education Scholarship (Oman)",
      nameAr: "منحة وزارة التعليم العالي والبحث العلمي والابتكار",
      descEn:
        "Oman's government scholarship for Omani nationals to study at accredited UK universities across priority disciplines including engineering, medicine, and business.",
      descAr:
        "منحة الحكومة العُمانية للمواطنين العُمانيين للدراسة في الجامعات البريطانية المعتمدة في التخصصات ذات الأولوية كالهندسة والطب وإدارة الأعمال.",
      coverage: "Full tuition + monthly allowance + return flights + health insurance",
      coverageAr: "رسوم كاملة + بدل شهري + تذاكر ذهاب وإياب + تأمين صحي",
      eligibility: "Omani nationals, strong GPA, ministry-approved institutions",
      eligibilityAr: "المواطنون العُمانيون، معدل تراكمي عالٍ، مؤسسات معتمدة من الوزارة",
    },
    {
      nameEn: "Petroleum Development Oman (PDO) Scholarship",
      nameAr: "منحة تنمية نفط عُمان",
      descEn:
        "Engineering and science scholarships by PDO for Omani students at UK universities with a focus on petroleum and engineering disciplines.",
      descAr:
        "منح هندسية وعلمية من تنمية نفط عُمان للطلاب العُمانيين في الجامعات البريطانية مع التركيز على تخصصات النفط والهندسة.",
      coverage: "Full tuition + stipend + guaranteed internship",
      coverageAr: "رسوم كاملة + راتب شهري + تدريب مضمون",
      eligibility: "Engineering/Geoscience students, Omani nationals",
      eligibilityAr: "طلاب الهندسة وعلوم الأرض، المواطنون العُمانيون",
    },
    {
      nameEn: "Chevening Scholarship (UK Government)",
      nameAr: "منحة تشيفنينج (الحكومة البريطانية)",
      descEn:
        "UK government's global scholarship for future leaders. Open to Omani nationals with 2+ years work experience.",
      descAr:
        "منحة الحكومة البريطانية للقادة المستقبليين. مفتوحة للمواطنين العُمانيين ذوي خبرة عمل لا تقل عن سنتين.",
      coverage: "Full tuition + living allowance + flights + visa costs",
      coverageAr: "رسوم كاملة + بدل معيشة + تذاكر طيران + تكاليف التأشيرة",
      eligibility:
        "Omani nationals, Bachelor's degree, 2+ years work experience, leadership potential",
      eligibilityAr:
        "المواطنون العُمانيون، درجة البكالوريوس، خبرة عملية سنتان أو أكثر، إمكانات قيادية",
    },
  ],
  universities: sharedUniversities,
  withIelts: sharedWithIelts,
  withoutIelts: sharedWithoutIelts,
  fees: sharedFees,
  whyUKEn: sharedWhyUKEn,
  whyUKAr: sharedWhyUKAr,
  slug: "oman",
};

export default function OmanPage() {
  return <GulfPage data={data} />;
}
