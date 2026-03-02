import React from "react";
import allData from "./posts";
import { useState, useMemo, useRef } from "react";
import { s } from "framer-motion/client";
import { Link } from 'react-router-dom';
export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const postsPerPage = 6;
  const searchInputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const postsList = allData.posts || [];
  const[displayRows,setDisplayRows] = useState(false)
  


  const filteredPosts = useMemo(() => {
    let filtered =
      selectedCategory === "all"
        ? postsList
        : postsList.filter((post) => post.category === selectedCategory);

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [postsList, selectedCategory, searchTerm]);

  // حساب إجمالي الصفحات بناءً على طول المصفوفة الحقيقي
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // حساب فترات العرض للمقالات (Pagination Logic)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // الآن slice ستعمل بشكل صحيح لأن postsList مصفوفة (Array)
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // دوال التنقل
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // دالة أرقام الصفحات
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisible = 5;
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pageNumbers.push(i);
        pageNumbers.push("...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pageNumbers;
  };
  return (
    <main className="flex-grow pt-20">
      <div className="min-h-screen bg-[#0a0a0a]">
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label inline-flex items-center gap-2 mb-6">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              مدونتنا
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              استكشف <span className="gradient-text">مقالاتنا</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </div>
        <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:w-80">
                <input
                  ref={searchInputRef}
                  placeholder="ابحث في المقالات..."
                  className="input-dark w-full px-5 py-3 pr-12 rounded-xl  text-neutral-400"
                  type="text"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedCategory === "all"
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                  }`}
                >
                  جميع المقالات
                </button>

                <button
                  onClick={() => {
                    setSelectedCategory("إضاءة");
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedCategory === "إضاءة"
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                  }`}
                >
                  إضاءة
                </button>
                <button
                  onClick={() => {
                    setSelectedCategory("بورتريه");
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedCategory === "بورتريه"
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                  }`}
                >
                  بورتريه
                </button>
                <button
                  onClick={() => {
                    setSelectedCategory("مناظر طبيعية");
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedCategory === "مناظر طبيعية"
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                  }`}
                >
                  مناظر طبيعية
                </button>
                <button
                  onClick={() => {
                    setSelectedCategory("تقنيات");
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedCategory === "تقنيات"
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                  }`}
                >
                  تقنيات
                </button>
                <button
                  onClick={() => {
                    setSelectedCategory("معدات");
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedCategory === "معدات"
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                  }`}
                >
                  معدات
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[146px]">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-400">
              عرض{" "}
              <span className="font-bold text-white">
                {filteredPosts.length}
              </span>{" "}
              مقالات
              {selectedCategory !== "all" && ` في قسم "${selectedCategory}"`}
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                <button
                  onClick={() => setDisplayRows(false)}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    !displayRows 
                      ? 'bg-orange-500 text-white' 
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  title="عرض شبكي"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setDisplayRows(true)}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    displayRows 
                      ? 'bg-orange-500 text-white' 
                      : 'text-neutral-400 hover:text-white'
                  }`} 
                  title="عرض قائمة"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {currentPosts?.length > 0 ? (
    displayRows ? (
      // عرض القائمة (صف واحد)
      currentPosts.map((post, index) => (
        <article
          key={post.id}
          className="group bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden col-span-full"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Link to={`/blog/${post.slug}`} className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-72 lg:w-80 h-52 md:h-auto flex-shrink-0 overflow-hidden">
              <img
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={post.image}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="flex-1 p-6 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-sm text-neutral-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime}
                </span>
                <span className="flex items-center gap-1 text-sm text-neutral-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(post.date).toLocaleDateString("ar-EG", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
                </span>
              </div>
              
              <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                {post.title}
              </h2>
              
              <p className="text-neutral-400 mb-4 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <img
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]"
                    src={post.author.avatar}
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{post.author.name}</p>
                    <p className="text-xs text-neutral-500">{post.author.role}</p>
                  </div>
                </div>
                
                <span className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  اقرأ المقال
                  <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </article>
      ))
    ) : (
      // عرض شبكي (كروت)
      currentPosts.map((post, index) => (
        <article
          key={post.id}
          className="group card overflow-hidden"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Link to={`/blog/${post.slug}`} className="block">
            <div className="relative h-52 overflow-hidden">
              <img
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                src={post.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {post.readTime}
                </span>
                <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                <span>
                  {new Date(post.date).toLocaleDateString("ar-EG", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                {post.title}
              </h3>
              <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                <div className="flex items-center gap-3">
                  <img
                    alt={post.author.name}
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                    src={post.author.avatar}
                  />
                  <div>
                    <p className="text-sm font-medium text-white">
                      {post.author.name}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {post.author.role}
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                  <svg
                    className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </article>
      ))
    )
  ) : (
    // رسالة "لا توجد مقالات"
    <div className="col-span-full text-center py-20">
      <div className="w-24 h-24 bg-[#161616] border border-[#262626] rounded-full flex items-center justify-center mx-auto mb-6">
        <svg
          className="w-12 h-12 text-neutral-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">
        لا توجد مقالات
      </h3>
      <p className="text-neutral-400 mb-6">
        حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
      </p>
      <button
        onClick={() => {
          setSelectedCategory("all");
          setSearchTerm("");
          setCurrentPage(1);
        }}
        className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 inline-flex items-center gap-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        إعادة تعيين الفلاتر
      </button>
    </div>
  )}
</div>

          <div className="flex justify-center items-center gap-2 mt-12">
            {/* زر السابق */}
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`p-3 rounded-xl border transition-all duration-300 ${
                currentPage === 1
                  ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                  : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
              }`}
            >
              <svg
                className="w-5 h-5 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* أزرار الصفحات */}
            <div className="flex items-center gap-1">
              {getPageNumbers().map((page, index) =>
                page === "..." ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="px-3 py-2 text-neutral-500"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                      currentPage === page
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            {/* زر التالي */}
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-xl border transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                  : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
              }`}
            >
              <svg
                className="w-5 h-5 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <p className="text-center text-neutral-500 mt-4 text-sm">
            صفحة {currentPage} من {totalPages}
          </p>
        </div>
      </div>
    </main>
  );
}
