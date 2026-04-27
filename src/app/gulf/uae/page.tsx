import type { Metadata } from "next";
import { GulfPage, type GulfPageData } from "@/components/GulfPage";

export const metadata: Metadata = {
  title: "Study in the UK for Emirati Students | EdOne Group — جامعات بريطانية للطلاب الإماراتيين",
  description:
    "EdOne Group helps Emirati students from Dubai, Abu Dhabi and Sharjah gain entry to leading UK universities. Expert guidance on UAE Ministry scholarships, ADEK funding, Chevening and Student Route visas.",
  alternates: {
    canonical: "https://edonegroup.co.uk/gulf/uae",
  },
  openGraph: {
    title: "Study in the UK for Emirati Students | EdOne Group",
    description:
      "UK university guidance for UAE students — Ministry of Education scholarships, ADEK funding, Chevening and Student Route visa support.",
    url: "https://edonegroup.co.uk/gulf/uae",
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
    title: "UAE-Friendly Environment",
    desc: "Large Emirati and wider Gulf student communities across UK cities. Halal food, prayer facilities, and cultural clubs in every major UK university city.",
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
    title: "بيئة ملائمة للطلاب الإماراتيين",
    desc: "مجتمعات خليجية كبيرة في مدن المملكة المتحدة. طعام حلال ومرافق صلاة وأندية ثقافية في كل مدينة جامعية بريطانية كبرى.",
  },
];

const data: GulfPageData = {
  countryEn: "United Arab Emirates",
  countryAr: "الإمارات العربية المتحدة",
  flag: "🇦🇪",
  taglineEn: "Study in the UK — For Emirati Students",
  taglineAr: "الدراسة في المملكة المتحدة — للطلاب الإماراتيين",
  heroDescEn:
    "EdOne Group helps Emirati students gain entry to leading UK universities. Whether you're from Dubai, Abu Dhabi, Sharjah or anywhere across the Emirates, we make your UK education journey straightforward and successful.",
  heroDescAr:
    "تساعد مجموعة إيدون الطلاب الإماراتيين على القبول في أفضل الجامعات البريطانية. سواء كنت من دبي أو أبوظبي أو الشارقة أو أي مكان في الإمارات، نجعل رحلتك التعليمية في المملكة المتحدة واضحة وناجحة.",
  stats: [
    { labelEn: "Average tuition/year", labelAr: "متوسط الرسوم الدراسية", value: "£14,000–£35,000" },
    { labelEn: "Masters duration", labelAr: "مدة الماجستير", value: "1 Year" },
    { labelEn: "Post-study stay", labelAr: "البقاء بعد التخرج", value: "2 Years" },
    { labelEn: "Government scholarships", labelAr: "المنح الحكومية", value: "Available" },
  ],
  scholarships: [
    {
      nameEn: "UAE Ministry of Education Scholarship",
      nameAr: "منحة وزارة التربية والتعليم الإماراتية",
      descEn:
        "Government scholarships for UAE nationals to study at top universities worldwide, including UK Russell Group universities.",
      descAr:
        "منح حكومية للمواطنين الإماراتيين للدراسة في أفضل الجامعات العالمية، بما فيها جامعات مجموعة راسل البريطانية.",
      coverage: "Full tuition + living costs + flights",
      coverageAr: "رسوم كاملة + تكاليف المعيشة + تذاكر طيران",
      eligibility: "UAE nationals, strong academic record, Emirates ID",
      eligibilityAr: "المواطنون الإماراتيون، سجل أكاديمي متميز، الهوية الإماراتية",
    },
    {
      nameEn: "ADEK Scholarship (Abu Dhabi)",
      nameAr: "منحة أديك (أبوظبي)",
      descEn:
        "Abu Dhabi Department of Education and Knowledge scholarships for Emirati students at accredited UK universities.",
      descAr:
        "منح مجلس أبوظبي للتعليم للطلاب الإماراتيين في الجامعات البريطانية المعتمدة.",
      coverage: "Tuition + monthly stipend + accommodation",
      coverageAr: "رسوم دراسية + راتب شهري + سكن",
      eligibility: "Abu Dhabi residents, UAE nationals, approved university list",
      eligibilityAr: "المقيمون في أبوظبي، المواطنون الإماراتيون، قائمة جامعات معتمدة",
    },
    {
      nameEn: "Chevening Scholarship (UK Government)",
      nameAr: "منحة تشيفنينج (الحكومة البريطانية)",
      descEn:
        "UK government's global scholarship for future leaders. Open to UAE nationals with 2+ years work experience.",
      descAr:
        "منحة الحكومة البريطانية للقادة المستقبليين. مفتوحة للمواطنين الإماراتيين ذوي خبرة عمل لا تقل عن سنتين.",
      coverage: "Full tuition + living allowance + flights + visa costs",
      coverageAr: "رسوم كاملة + بدل معيشة + تذاكر طيران + تكاليف التأشيرة",
      eligibility:
        "UAE nationals, Bachelor's degree, 2+ years work experience, leadership potential",
      eligibilityAr:
        "المواطنون الإماراتيون، درجة البكالوريوس، خبرة عملية سنتان أو أكثر، إمكانات قيادية",
    },
  ],
  universities: sharedUniversities,
  withIelts: sharedWithIelts,
  withoutIelts: sharedWithoutIelts,
  fees: sharedFees,
  whyUKEn: sharedWhyUKEn,
  whyUKAr: sharedWhyUKAr,
  slug: "uae",
};

export default function UAEPage() {
  return <GulfPage data={data} />;
}
