
import { IoIosSearch } from "react-icons/io";
import myLogo from "../assets/images/logo-GdqARQRt.png";
import React from "react";
import {Link,NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "الرئيسية",
    "المدونة",
    "من نحن",
  ];

  return (
    <Navbar 
  onMenuOpenChange={setIsMenuOpen} 
  isBordered 
  isBlurred={false} 
  className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 p-1.5"
>
  {/* 1. قسم اللوجو والاسم في اليمين */}
  <NavbarContent justify="start" className="gap-3">
    <NavbarItem>
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-white/10">
        <img alt="Photography Logo" className="w-full h-full object-cover" src={myLogo}/>
      </div>
    </NavbarItem>
    <NavbarItem>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
          عدسة
        </span>
        <span className="text-[10px] sm:text-xs text-orange-400/80 hidden sm:block tracking-wide">
          عالم التصوير الفوتوغرافي
        </span>
      </div>
    </NavbarItem>
  </NavbarContent>

  {/* 2. قسم الروابط الوسطى (في النص تماماً) */}
  <NavbarContent className="hidden sm:flex gap-4 items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]" justify="center">
    <NavbarItem>
      <NavLink to="/" end className={({ isActive }) =>
        `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
        ${isActive ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`
      }>
        الرئيسية
      </NavLink>
    </NavbarItem>
    <NavbarItem>
      <NavLink to="blog" className={({ isActive }) =>
        `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
        ${isActive ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`
      }>
        المدونة
      </NavLink>
    </NavbarItem>
    <NavbarItem>
      <NavLink to="about" className={({ isActive }) =>
        `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
        ${isActive ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`
      }>
        من نحن
      </NavLink>
    </NavbarItem>
  </NavbarContent>

  {/* 3. قسم البحث وزر البدء في الشمال */}
  <NavbarContent justify="end" className="gap-3">
    {/* Menu Toggle للموبايل */}
    <NavbarMenuToggle
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      className="sm:hidden text-white" 
    />
    
    {/* أزرار تظهر فقط في الشاشات الكبيرة */}
    <div className="hidden sm:flex items-center gap-3">
      <div className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"> 
        <IoIosSearch fontSize={"1.5rem"} />
      </div>
      <div className="flex items-center bg-[#F26711] text-white px-5 py-3 font-medium rounded-3xl transition-all duration-200 hover:-translate-y-0.5">
        <a className="text-sm" href="/blog">ابدأ القراءة</a>
      </div>
    </div>
  </NavbarContent>

  {/* القائمة الجانبية للموبايل */}
  <NavbarMenu className="bg-[#0a0a0a]/98 pt-10 border-t border-white/10">
    {menuItems.map((item, index) => (
      <NavbarMenuItem key={`${item}-${index}`}>
        <Link
          className="w-full text-white text-right justify-end py-2 text-lg"
          href="#"
        >
          {item}
        </Link>
      </NavbarMenuItem>
    ))}
  </NavbarMenu>
</Navbar>
  );
}


