"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ContactRound,
  UsersRound,
  Scale,
  Settings,
  FileText,
  Bell,
  UserRoundCog,
  ChevronDown
} from "lucide-react";

interface MenuItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { icon: ContactRound, label: "Manage Customers", href: "/customers" },
  { icon: UsersRound, label: "Manage Team", href: "/team" },
  { icon: Scale, label: "Roles & Permissions", href: "/roles" },
  { icon: Settings, label: "Configurations", href: "/configurations" },
  { icon: FileText, label: "Audit Logs", href: "/audit-logs" },
];

const bottomMenuItems: MenuItem[] = [
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: UserRoundCog, label: "Account Settings", href: "/account-settings" },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`bg-sidebar-bg h-screen flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Header */}
      <div className={`py-5 flex items-center gap-3 ${isCollapsed ? "justify-center pr-3 mt-2" : "justify-between px-6"}`}>
        {!isCollapsed && (
          <div className="border border-primary py-2.5 px-6 rounded-sm">
            <p className="font-semibold text-sm/[150%] text-primary font-outfit">
              LOGO
            </p>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex-shrink-0 cursor-pointer"
        >
          <Image
            src="/icons/side-menu-bar.svg"
            alt="Menu"
            width={22}
            height={22}
          />
        </button>
      </div>

      {/* Menu Items */}
      <nav className={`flex-1 py-6 ${isCollapsed ? "px-2" : "px-4"}`}>
        <ul className="space-y-2 relative">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href} className="relative">
                {isActive && (
                  <div className={`absolute top-1/2 -translate-y-1/2 ${isCollapsed ? "-left-2" : "-left-4"}`}>
                    <Image
                      src="/icons/active.svg"
                      alt=""
                      width={12}
                      height={30}
                    />
                  </div>
                )}
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-[#25272E] hover:bg-primary/10"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="text-sm font-medium font-outfit">
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Menu Items */}
      <div className={`pb-4 ${isCollapsed ? "px-2" : "px-4"}`}>
        <ul className="space-y-2 relative">
          {bottomMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href} className="relative">
                {isActive && (
                  <div className={`absolute top-1/2 -translate-y-1/2 ${isCollapsed ? "-left-2" : "-left-4"}`}>
                    <Image
                      src="/icons/active.svg"
                      alt=""
                      width={12}
                      height={30}
                    />
                  </div>
                )}
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-[#444444] hover:bg-primary/10"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="text-sm font-medium font-outfit">
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Profile Section */}
      <div className={`bg-white rounded-lg p-3 ${isCollapsed ? "mx-2 mb-4" : "mx-4 mb-6"}`}>
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex-shrink-0 rounded-full overflow-hidden">
            <Image
              src="/images/side-menu-pfp.png"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold text-fiduciaDark truncate">
                Johndoe@mybank.com
              </p>
              <div className="flex items-center gap-1">
                <p className="text-xs text-fiduciaGrey">Financier Admin</p>
                <ChevronDown className="w-6 h-6 text-primary" />
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
