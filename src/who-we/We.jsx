import React from "react";
import { FaPenNib, FaUsers, FaBookOpen } from "react-icons/fa";
import { FaNewspaper, FaBullseye, FaBolt, FaHandshakeSimple, FaArrowsRotate } from "react-icons/fa6";
import TeamMember from "./TeamMember"; // استيراد Component الفريق

export default function We() {
  // بيانات أعضاء الفريق
  const teamMembers = [
    // الصف الأول
    { name: "سالم أحمد", role: "مصور محترف", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
    { name: "محمد علي", role: "مصور بورتريه", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
    { name: "إبراهيم حسن", role: "مصور طبيعة", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
    
    // الصف الثاني
    { name: "داود خالد", role: "مدرب تصوير", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a" },
    { name: "ليث محمود", role: "فنان بصري", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" },
    { name: "جمال عبدالله", role: "مصور ومراجع تقني", image: "https://images.unsplash.com/photo-1463453091185-61582044d556" },
    
    // الصف الثالث
    { name: "خالد الفيصل", role: "مصور فلكي", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" },
    { name: "نادر سعيد", role: "مصور شوارع", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857" },
    { name: "هاني الشمري", role: "مصور طعام", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a" },
    
    // الصف الرابع
    { name: "عمر الراشد", role: "مصور حياة برية", image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128" },
    { name: "فارس العلي", role: "فنان فوتوغرافي", image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61" },
    { name: "سامي الحربي", role: "خبير تعديل صور", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5" },
    
    // الصف الخامس
    { name: "رامي الخطيب", role: "مصور ماكرو", image: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c" },
    { name: "باسم المصري", role: "مصور فني", image: "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9" },
    { name: "منصور الزهراني", role: "مصور زفاف", image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f" },
    
    // الصف السادس
    { name: "فيصل الدوسري", role: "مصور جوي", image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001" },
    { name: "لؤي الصالح", role: "مصور تجاري", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d" },
    { name: "طارق النعيمي", role: "مصور معماري", image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c" },
    
    // الصف السابع
    { name: "أحمد الشهري", role: "مصور رياضي", image: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3" },
    { name: "ماجد القحطاني", role: "مصور استوديو", image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1" },
    { name: "ياسر العتيبي", role: "مصور رحالة", image: "https://images.unsplash.com/photo-1590086782957-93c06ef21604" },
    
    // الصف الثامن
    { name: "دحام الحسيني", role: "فنان بصري", image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3" },
    { name: "نايف المطيري", role: "مصور مواليد", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce" },
    { name: "عبدالله الغامدي", role: "مصور عقارات", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6" },
    
    // الصف التاسع
    { name: "كريم الفهد", role: "خبير تقني", image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6" },
    { name: "سلطان الراجحي", role: "فنان تصوير", image: "https://images.unsplash.com/photo-1557862921-37829c790f19" },
    { name: "فهد السبيعي", role: "مراجع معدات", image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4" },
    
    // الصف العاشر
    { name: "راشد الجاسر", role: "فنان بصري", image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4" }
  ];

  return (
    <>
      {/* القسم الأول - من نحن */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            من نحن
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            مهمتنا هي <span className="gradient-text mr-0.5">الإعلام والإلهام</span>
          </h1>

          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. 
            نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="glass-card p-6 flex flex-col items-center text-center bg-[#161616cc] border-1 border-[#262626] rounded-3xl">
              <FaBookOpen className="text-orange-500 text-3xl mb-2" />
              <div className="text-3xl font-bold gradient-text mb-1 bg-gradient-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">+15</div>
              <div className="text-sm text-neutral-500">تصنيف</div>
            </div>

            <div className="glass-card p-6 flex flex-col items-center text-center bg-[#161616cc] border-1 border-[#262626] rounded-3xl">
              <FaPenNib className="text-orange-500 text-3xl mb-2"/>
              <div className="text-3xl font-bold gradient-text mb-1 bg-gradient-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">+50</div>
              <div className="text-sm text-neutral-500">كاتب خبير</div>
            </div>

            <div className="glass-card p-6 flex flex-col items-center text-center bg-[#161616cc] border-1 border-[#262626] rounded-3xl">
              <FaNewspaper className="text-orange-500 text-3xl mb-2" />
              <div className="text-3xl font-bold gradient-text mb-1 bg-gradient-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">+500</div>
              <div className="text-sm text-neutral-500">مقالة منشورة</div>
            </div>

            <div className="glass-card p-6 flex flex-col items-center text-center bg-[#161616cc] border-1 border-[#262626] rounded-3xl">
              <FaUsers className="text-orange-500 text-3xl mb-2"  />
              <div className="text-3xl font-extrabold gradient-text mb-1 bg-gradient-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">+2مليون</div>
              <div className="text-sm text-neutral-500">قارئ شهرياً</div>
            </div>
          </div>
        </div>
      </section>

      {/* القسم الثاني - قيمنا */}
      <section className="py-20 bg-[#111111] border-y border-[#262626]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <span className="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"></span>
              قيمنا
              <span className="w-1.5 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative flex flex-col justify-center items-center">
                <FaArrowsRotate className="text-orange-500 text-3xl mb-2" />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  دائماً محدث
                </h3>
                <p className="text-neutral-400 text-sm">
                  أحدث الاتجاهات وأفضل الممارسات
                </p>
              </div>
            </div>

            <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative flex flex-col justify-center items-center">
                <FaHandshakeSimple className="text-orange-500 text-3xl mb-2" />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  المجتمع
                </h3>
                <p className="text-neutral-400 text-sm">
                  تعلم مع آلاف المصورين
                </p>
              </div>
            </div>

            <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative flex flex-col justify-center items-center">
                <FaBolt className="text-orange-500 text-3xl mb-2"/>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  تركيز عملي
                </h3>
                <p className="text-neutral-400 text-sm">
                  أمثلة واقعية يمكنك تطبيقها اليوم
                </p>
              </div>
            </div>

            <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative flex flex-col justify-center items-center">
                <FaBullseye className="text-orange-500 text-3xl mb-2" />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  الجودة أولاً
                </h3>
                <p className="text-neutral-400 text-sm">
                  محتوى مدروس ومكتوب بخبرة
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* القسم الثالث - فريقنا (الجديد) */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-orange-500 font-medium mb-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              فريقنا
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">تعرف على كتابنا</h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>

        </div>

      </section>
    <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden">
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]" />
    <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]" />
  </div>
  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
      !لديك اسئله؟ دعنا نتحدث
    </h2>
    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
      نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
      أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a href="/blog" data-discover="true" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300">
        تصفح المقالات
      </a>
      <a href="mailto:hello@adasah.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
          </path>
        </svg>
        تواصل معنا
      </a>
    </div>
  </div>
</section>



    </>
  );
}