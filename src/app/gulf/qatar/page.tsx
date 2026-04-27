import type { Metadata } from "next";
import { GulfPage, type GulfPageData } from "@/components/GulfPage";

export const metadata: Metadata = {
  title: "Study in the UK for Qatari Students | EdOne Group — جامعات بريطانية للطلاب القطريين",
  description:
    "EdOne Group guides Qatari students through UK university admissions — Qatar Foundation scholarships, MOHESR funding, Chevening and Student Route visa support. Expert advice for students from Doha and across Qatar.",
  alternates: {
    canonical: "https://edonegroup.co.uk/gulf/qatar",
  },
  openGraph: {
    title: "Study in the UK for Qatari Students | EdOne Group",
    description:
      "UK university guidance for Qatari students — Qatar Foundation, MOHESR scholarships, Chevening and Student Route visa support.",
    url: "https://edonegroup.co.uk/gulf/qatar",
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
    title: "Qatar-Friendly Environment",
    desc: "Growing Qatari student communities across UK cities. Halal food, prayer facilities, and a welcoming environment in every major UK university city.",
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
    title: "بيئة ملائمة للطلاب القطريين",
    desc: "مجتمعات قطرية متنامية في مدن المملكة المتحدة. طعام حلال ومرافق صلاة وبيئة ترحيبية في كل مدينة جامعية بريطانية كبرى.",
  },
];

const data: GulfPageData = {
  countryEn: "Qatar",
  countryAr: "قطر",
  flag: "🇶🇦",
  taglineEn: "Study in the UK — For Qatari Students",
  taglineAr: "الدراسة في المملكة المتحدة — للطلاب القطريين",
  heroDescEn:
    "EdOne Group guides Qatari students through the UK admissions process — from choosing the right university in Manchester, London or Edinburgh, to meeting entry requirements and securing scholarships.",
  heroDescAr:
    "ترشد مجموعة إيدون الطلاب القطريين خلال عملية القبول البريطانية — من اختيار الجامعة المناسبة في مانشستر أو لندن أو إدنبرة، إلى استيفاء متطلبات القبول والحصول على المنح الدراسية.",
  stats: [
    { labelEn: "Average tuition/year", labelAr: "متوسط الرسوم الدراسية", value: "£14,000–£35,000" },
    { labelEn: "Masters duration", labelAr: "مدة الماجستير", value: "1 Year" },
    { labelEn: "Post-study stay", labelAr: "البقاء بعد التخرج", value: "2 Years" },
    { labelEn: "Government scholarships", labelAr: "المنح الحكومية", value: "Available" },
  ],
  scholarships: [
    {
      nameEn: "Qatar Foundation Scholarships",
      nameAr: "منح مؤسسة قطر",
      descEn:
        "Qatar Foundation supports Qatari nationals to pursue excellence in higher education abroad, including top UK universities.",
      descAr:
        "تدعم مؤسسة قطر المواطنين القطريين لمتابعة التميز في التعليم العالي خارج قطر، بما فيها أفضل الجامعات البريطانية.",
      coverage: "Full tuition + allowances",
      coverageAr: "رسوم كاملة + بدلات",
      eligibility: "Qatari nationals, merit-based",
      eligibilityAr: "المواطنون القطريون، قائم على الجدارة",
    },
    {
      nameEn: "MOHESR Scholarships",
      nameAr: "منح وزارة التعليم والتعليم العالي",
      descEn:
        "Qatar's Ministry of Education and Higher Education scholarship programme for study at accredited international universities.",
      descAr:
        "برنامج منح وزارة التعليم والتعليم العالي القطرية للدراسة في الجامعات الدولية المعتمدة.",
      coverage: "Tuition + living stipend + return flights",
      coverageAr: "رسوم دراسية + بدل معيشة + تذاكر عودة",
      eligibility: "Qatari nationals, strong GPA, ministry approval",
      eligibilityAr: "المواطنون القطريون، معدل تراكمي عالٍ، موافقة الوزارة",
    },
    {
      nameEn: "Chevening Scholarship (UK Government)",
      nameAr: "منحة تشيفنينج (الحكومة البريطانية)",
      descEn:
        "UK government's global scholarship for future leaders. Open to Qatari nationals with 2+ years work experience.",
      descAr:
        "منحة الحكومة البريطانية للقادة المستقبليين. مفتوحة للمواطنين القطريين ذوي خبرة عمل لا تقل عن سنتين.",
      coverage: "Full tuition + living allowance + flights + visa costs",
      coverageAr: "رسوم كاملة + بدل معيشة + تذاكر طيران + تكاليف التأشيرة",
      eligibility:
        "Qatari nationals, Bachelor's degree, 2+ years work experience, leadership potential",
      eligibilityAr:
        "المواطنون القطريون، درجة البكالوريوس، خبرة عملية سنتان أو أكثر، إمكانات قيادية",
    },
  ],
  universities: sharedUniversities,
  withIelts: sharedWithIelts,
  withoutIelts: sharedWithoutIelts,
  fees: sharedFees,
  whyUKEn: sharedWhyUKEn,
  whyUKAr: sharedWhyUKAr,
  slug: "qatar",
};

export default function QatarPage() {
  return <GulfPage data={data} />;
}
