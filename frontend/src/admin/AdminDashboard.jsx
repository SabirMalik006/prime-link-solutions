import React, { useState, useEffect } from 'react';
import { useAdmin } from '../context/AdminContext';
import GalleryManager from './GalleryManager';
import ContentManager from './ContentManager';
import ServicesManager from './ServicesManager';
import { LogOut, Image, FileText, Grid, ExternalLink, Loader } from 'lucide-react';

export default function AdminDashboard() {
    const { logout, isAuthenticated } = useAdmin();
    const [activeTab, setActiveTab] = useState('services');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    if (!isAuthenticated) {
        return null;
    }

    const tabs = [
        { id: 'services', label: 'Services', icon: Grid },
        { id: 'content', label: 'Content', icon: FileText },
        { id: 'gallery', label: 'Gallery', icon: Image },
    ];

    const currentTab = tabs.find(tab => tab.id === activeTab);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Admin Header - Responsive */}
            <div className="bg-[#0e2540] text-white sticky top-0 z-50 shadow-lg">
                <div className="px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                        {/* Logo and Title */}
                        <div className="flex items-center justify-between w-full sm:w-auto">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#c9a84c] rounded-lg flex items-center justify-center">
                                    <span className="text-[#0e2540] font-bold text-sm">H</span>
                                </div>
                                <div>
                                    <h1 className="text-base sm:text-lg md:text-xl font-bold">Admin Dashboard</h1>
                                    <p className="text-white/60 text-xs hidden sm:block">Manage your website content</p>
                                </div>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="sm:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {mobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>

                        {/* Actions - Desktop */}
                        <div className="hidden sm:flex items-center gap-3">
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 text-xs md:text-sm font-medium border border-white/20 hover:border-white/40"
                            >
                                <ExternalLink size={14} />
                                View Site
                            </a>
                            <button
                                onClick={logout}
                                className="flex items-center gap-2 px-3 py-1.5 bg-red-500/80 hover:bg-red-500 rounded-lg transition-colors text-xs md:text-sm font-medium"
                            >
                                <LogOut size={16} />
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* Mobile Actions Menu */}
                    {mobileMenuOpen && (
                        <div className="sm:hidden mt-3 pt-3 border-t border-white/20 space-y-2">
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 text-sm font-medium"
                            >
                                <ExternalLink size={14} />
                                View Main Site
                            </a>
                            <button
                                onClick={logout}
                                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-red-500/80 hover:bg-red-500 rounded-lg transition-colors text-sm font-medium"
                            >
                                <LogOut size={16} />
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-full mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
                {/* Tabs - Responsive */}
                <div className="mb-6 sm:mb-8">
                    {/* Desktop Tabs */}
                    <div className="hidden sm:flex justify-center gap-2 md:gap-4 border-b border-gray-200">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 font-semibold transition-all duration-200 text-sm md:text-base relative group ${isActive
                                            ? 'text-[#c9a84c]'
                                            : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    <Icon size={16} className="md:w-[18px] md:h-[18px]" />
                                    <span>{tab.label}</span>
                                    {isActive && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c9a84c] rounded-full"></div>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Mobile Tabs - Scrollable */}
                    <div className="sm:hidden">
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${isActive
                                                ? 'bg-[#c9a84c] text-[#0e2540] shadow-md'
                                                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                            }`}
                                    >
                                        <Icon size={14} />
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Active Tab Indicator - Mobile */}
                    <div className="sm:hidden mt-2 text-center">
                        <p className="text-xs text-gray-500">
                            Current: <span className="text-[#c9a84c] font-semibold">{currentTab?.label}</span>
                        </p>
                    </div>
                </div>

                {/* Tab Content - Responsive Container */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-x-auto">
                    <div className="p-3 sm:p-4 md:p-6">
                        {activeTab === 'content' && <ContentManager />}
                        {activeTab === 'services' && <ServicesManager />}
                        {activeTab === 'gallery' && <GalleryManager />}
                    </div>
                </div>
            </div>

            <style>{`
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
    .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
`}</style>
        </div>
    );
}