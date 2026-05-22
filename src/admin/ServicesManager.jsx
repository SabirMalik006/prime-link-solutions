import React, { useState, useEffect, useRef } from 'react';
import { Save, Upload, Trash2, Edit2, X, Loader, Plus, Image as ImageIcon, Camera, ChevronDown, ChevronUp } from 'lucide-react';
import { API_URL, MEDIA_URL } from '../api/config';
import { useAdmin } from '../context/AdminContext';

export default function ServicesManager() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [editingService, setEditingService] = useState(null);
    const [uploadingImage, setUploadingImage] = useState(null);
    const [savedToast, setSavedToast] = useState(false);
    const [errorToast, setErrorToast] = useState(false);
    const [expandedSections, setExpandedSections] = useState({});
    const [imageErrors, setImageErrors] = useState({});
    const { token } = useAdmin();
    const fileInputRef = useRef(null);

    const defaultServices = [
        {
            id: "telecom",
            title: "Construction Material Supply & Procurement",
            description: "Sourcing and delivering essential building materials to construction sites efficiently and time.",
            details: [
                "Cement, sand, aggregates & on-demand materials",
                "Quality steel reinforcement (rebar)",
                "Construction chemicals, electrical & sanitary supplies",
                "PVC, PPRC pipes, tiles & hardware",
                "Timely delivery with efficient logistics",
                "Bulk supply for all project types",
                "Competitive pricing with assured quality",
                "Complete one-stop material solution",
            ],
            image: "/1.jpeg"
        },
        {
            id: "tower",
            title: "Maintenance & Renovation Services",
            description: "Keeping your properties in peak condition through expert repairs, upgrades, and modern renovations tailored to every need.",
            details: [
                "Interior & exterior painting (residential, commercial & institutional)",
                "Waterproofing & leak protection solutions",
                "Minor repairs, upgrades & finishing works",
                "Full-scale renovation & remodeling projects",
                "Routine maintenance & on-demand workmanship",
                "Timely execution with minimal disruption",
                "Cost-effective solutions with lasting results",
            ],
            image: "/10.jpeg"
        },
        {
            id: "fiber",
            title: "Manufacturing of Telecommunication Towers & Maintenance",
            description: "End-to-end fiber cable laying solutions with trenching, installation and network deployment with precision.",
            details: [
                "Design and manufacturing of high-quality telecom towers",
                "Built for durability, safety, and long-term performance",
                "Repainting services for structural upkeep",
                "Corrosion protection for extended lifespan",
                "Structural repair and restoration work",
                "Ensuring uninterrupted network reliability",
                "Ongoing maintenance and technical support",
            ],
            image: "/2.jpeg"
        },
        {
            id: "fibernetwork",
            title: "Optical Fiber Cable Laying & Maintenance",
            description: "Proactive fiber network maintenance ensuring optimal performance, quick fault resolution and long-term network stability.",
            details: [
                "End-to-end fiber cable laying solutions",
                "Trenching, installation & network deployment with precision",
                "Maintenance services for optimal performance",
                "Quick fault detection and resolution to reduce downtime",
                "Ensuring long-term network stability through proactive upkeep",
            ],
            image: "/5.jpeg"
        },
        {
            id: "cctv",
            title: "CCTV, Access Control, Maintenance Procurement & Monitoring Systems",
            description: "Securing and monitoring your premises with advanced CCTV, access control, and smart procurement systems for seamless oversight and protection.",
            details: [
                "Advanced CCTV surveillance for real-time monitoring",
                "High-quality security fencing for strength and durability",
                "Comprehensive perimeter security to prevent unauthorized access",
                "Integrated detection, monitoring & rapid response systems",
                "Customized security solutions for all site types",
                "Reliable protection with 24/7 monitoring support",
                "Cost-effective and scalable security systems",
                "Ensuring complete safety and operational confidence",
            ],
            image: "/3.jpeg"
        },
        {
            id: "access",
            title: "Site Safety & Fire Fighting Equipment",
            description: "Safeguarding lives and assets with industry-grade fire fighting equipment and comprehensive site safety solutions.",
            details: [
                "Construction site safety equipment for hazard-free operations",
                "Certified fire safety systems (extinguisher, alarms & protection systems)",
                "Personal protective equipment (PPE) for workforce safety compliance",
                "End-to-end safety solutions with installation, inspection & maintenance",
                "Quick deployment for on-site safety readiness",
                "Cost-effective safety solutions for all project types",
                "Ensuring safe and compliant work environment",
            ],
            image: "/9.jpeg"
        },
        {
            id: "procurement",
            title: "Procurement",
            description: "Complete procurement solutions for power, IT, surveillance and Audio & Visual (SMDs) equipment tailored to client specs and OEM standards.",
            details: [
                "Enterprise power & energy solutions (UPS, batteries, PDUs, stabilizers & backup systems)",
                "IT, computing & AI-ready infrastructure (desktops, laptops, servers, storage & networking)",
                "Surveillance & access control systems (CCTV, ANPR, RFID & perimeter security devices)",
                "Audio-visual & conferencing solutions (PA systems, LED displays, SMDs, video walls & digital signage)",
                "End-to-end customized procurement as per client specs & OEM standards",
                "Project-based sourcing for specialized technical equipment",
                "Reliable supply chain with quality assurance",
                "Complete procurement solutions for all industries",
            ],
            image: "/8.jpeg"
        },
        {
            id: "construction",
            title: "Smart Infrastructure",
            description: "Building intelligent systems that connect technology and infrastructure for smarter, more efficient operations.",
            details: [
                "Technology-enabled civil construction with ICT, power & monitoring integration",
                "RFID-based access & mobility systems with ANPR, RFID & real-time reporting",
                "Centralized surveillance & security infrastructure with command center integration",
                "Smart energy & utility management with intelligent monitoring & backup systems",
                "Automated control systems for improved efficiency and operations",
                "Secure, scalable solution for modern infrastructure projects",
                "End-to-end smart infrastructure deployment and support",
            ],
            image: "/4.jpeg"
        },
    ];

    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = async () => {
        try {
            const response = await fetch(`${API_URL}/services`);
            if (response.ok) {
                const data = await response.json();
                if (data.length > 0) {
                    setServices(data);
                    setLoading(false);
                    return;
                }
            }
        } catch (err) {
            console.log('Using local services data');
        }
        setServices(defaultServices);
        setLoading(false);
    };

    const handleImageUpload = () => {
        if (editingService) {
            fileInputRef.current.click();
        }
    };

    const onImageSelect = async (e) => {
        const file = e.target.files[0];
        if (!file || !editingService) return;

        setUploadingImage(true);
        const formData = new FormData();
        formData.append('image', file);
        formData.append('serviceId', editingService);

        try {
            const response = await fetch(`${API_URL}/services/upload-image`, {
                method: 'POST',
                headers: { 'x-auth-token': token },
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                setServices(prev => prev.map(s =>
                    s.id === editingService ? { ...s, image: data.url } : s
                ));
                showToast('success', 'Image uploaded successfully!');
            } else {
                showToast('error', 'Failed to upload image');
            }
        } catch (err) {
            showToast('error', 'Error uploading image');
        } finally {
            setUploadingImage(false);
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    };

    const handleSaveService = async () => {
        if (!editingService) return;
        
        const service = services.find(s => s.id === editingService);
        if (!service) return;
        
        setSaving(true);
        try {
            const response = await fetch(`${API_URL}/services/${service.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify(service)
            });

            if (response.ok) {
                showToast('success', 'Service saved successfully!');
                setEditingService(null);
            } else {
                showToast('error', 'Failed to save service');
            }
        } catch (err) {
            showToast('error', 'Error saving service');
        } finally {
            setSaving(false);
        }
    };

    const handleEditClick = (serviceId) => {
        setEditingService(serviceId);
        setExpandedSections(prev => ({ ...prev, [serviceId]: true }));
    };

    const handleCancelEdit = () => {
        setEditingService(null);
        loadServices();
    };

    const addDetail = () => {
        if (!editingService) return;
        setServices(prev => prev.map(s =>
            s.id === editingService
                ? { ...s, details: [...s.details, "New detail item"] }
                : s
        ));
    };

    const updateDetail = (detailIndex, value) => {
        if (!editingService) return;
        setServices(prev => prev.map(s =>
            s.id === editingService
                ? { ...s, details: s.details.map((d, i) => i === detailIndex ? value : d) }
                : s
        ));
    };

    const removeDetail = (detailIndex) => {
        if (!editingService) return;
        setServices(prev => prev.map(s =>
            s.id === editingService
                ? { ...s, details: s.details.filter((_, i) => i !== detailIndex) }
                : s
        ));
    };

    const updateField = (field, value) => {
        if (!editingService) return;
        setServices(prev => prev.map(s =>
            s.id === editingService ? { ...s, [field]: value } : s
        ));
    };

    const showToast = (type, message) => {
        if (type === 'success') {
            setSavedToast(message);
            setTimeout(() => setSavedToast(false), 3000);
        } else {
            setErrorToast(message);
            setTimeout(() => setErrorToast(false), 3000);
        }
    };

    const toggleSection = (serviceId) => {
        setExpandedSections(prev => ({
            ...prev,
            [serviceId]: !prev[serviceId]
        }));
    };

    const handleImageError = (serviceId) => {
        setImageErrors(prev => ({ ...prev, [serviceId]: true }));
    };

    const getImageUrl = (service) => {
        if (imageErrors[service.id]) {
            return 'https://placehold.co/400x300/e2e8f0/64748b?text=No+Image';
        }
        if (service.image && service.image.startsWith('http')) {
            return service.image;
        }
        return `${MEDIA_URL}${service.image}`;
    };

    if (loading) {
        return (
            <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl shadow-sm p-12 text-center">
                <Loader className="animate-spin mx-auto text-[#1e3a5c]" size={40} />
                <p className="mt-4 text-gray-500">Loading services...</p>
            </div>
        );
    }

    const editingServiceData = services.find(s => s.id === editingService);

    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-4 sm:p-6 min-h-screen">
            <div className="space-y-6 max-w-full overflow-x-hidden">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-gray-200">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#0e2540] to-[#1a3a5c] bg-clip-text text-transparent">Services Manager</h2>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">Manage all your services - titles, descriptions, images and key details</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/80 rounded-full shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs sm:text-sm text-gray-600">{services.length} Active Services</span>
                    </div>
                </div>

                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={onImageSelect}
                    className="hidden"
                />

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {services.map((service) => {
                        const isEditing = editingService === service.id;
                        return (
                            <div key={service.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                {/* Service Header */}
                                <div className="bg-gradient-to-r from-[#0e2540] to-[#1a3a5c] px-4 sm:px-6 py-4 sm:py-5">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                        <div className="flex items-center gap-4 w-full sm:w-auto">
                                            {/* Image */}
                                            <div className="relative group flex-shrink-0">
                                                <img
                                                    src={getImageUrl(service)}
                                                    alt={service.title}
                                                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover border-2 border-white/20"
                                                    onError={() => handleImageError(service.id)}
                                                />
                                                {isEditing && (
                                                    <button
                                                        onClick={handleImageUpload}
                                                        disabled={uploadingImage}
                                                        className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center transition-opacity disabled:opacity-50"
                                                    >
                                                        {uploadingImage ? (
                                                            <Loader size={16} className="animate-spin text-white" />
                                                        ) : (
                                                            <Camera size={16} className="text-white" />
                                                        )}
                                                    </button>
                                                )}
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h3 className="text-sm sm:text-base font-bold text-white truncate" title={service.title}>
                                                    {service.title.length > 50 ? service.title.substring(0, 50) + '...' : service.title}
                                                </h3>
                                                <p className="text-white/50 text-xs mt-0.5">ID: {service.id}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                                            {isEditing ? (
                                                <div className="flex gap-2 w-full sm:w-auto">
                                                    <button
                                                        onClick={handleSaveService}
                                                        disabled={saving}
                                                        className="flex-1 sm:flex-none px-3 sm:px-4 py-1.5 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-1"
                                                    >
                                                        {saving ? <Loader size={14} className="animate-spin" /> : <Save size={14} />}
                                                        Save
                                                    </button>
                                                    <button
                                                        onClick={handleCancelEdit}
                                                        className="flex-1 sm:flex-none px-3 sm:px-4 py-1.5 bg-gray-500 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            ) : (
                                                <>
                                                    <button
                                                        onClick={() => handleEditClick(service.id)}
                                                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                                                        title="Edit Service"
                                                    >
                                                        <Edit2 size={16} className="text-white" />
                                                    </button>
                                                    <button
                                                        onClick={() => toggleSection(service.id)}
                                                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                                                    >
                                                        {expandedSections[service.id] ? (
                                                            <ChevronUp size={16} className="text-white" />
                                                        ) : (
                                                            <ChevronDown size={16} className="text-white" />
                                                        )}
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Service Body */}
                                {(expandedSections[service.id] !== false || isEditing) && (
                                    <div className="p-4 sm:p-6 space-y-5">
                                        {/* Title */}
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Title</label>
                                            <input
                                                type="text"
                                                value={service.title}
                                                onChange={(e) => isEditing && updateField('title', e.target.value)}
                                                disabled={!isEditing}
                                                className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/20 transition-colors ${!isEditing ? 'bg-gray-50 text-gray-600 cursor-default' : 'bg-white'}`}
                                            />
                                        </div>

                                        {/* Description */}
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Description</label>
                                            <textarea
                                                value={service.description}
                                                onChange={(e) => isEditing && updateField('description', e.target.value)}
                                                disabled={!isEditing}
                                                rows="3"
                                                className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/20 transition-colors resize-none ${!isEditing ? 'bg-gray-50 text-gray-600 cursor-default' : 'bg-white'}`}
                                            />
                                        </div>

                                        {/* Key Details */}
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Key Details</label>
                                            <div className="space-y-2.5">
                                                {service.details.map((detail, idx) => (
                                                    <div key={idx} className="flex items-start gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0 mt-2"></span>
                                                        {isEditing ? (
                                                            <>
                                                                <input
                                                                    type="text"
                                                                    value={detail}
                                                                    onChange={(e) => updateDetail(idx, e.target.value)}
                                                                    className="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#c9a84c]"
                                                                />
                                                                <button
                                                                    onClick={() => removeDetail(idx)}
                                                                    className="p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
                                                                >
                                                                    <X size={14} />
                                                                </button>
                                                            </>
                                                        ) : (
                                                            <span className="text-sm text-gray-600">{detail}</span>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                            {isEditing && (
                                                <button
                                                    onClick={addDetail}
                                                    className="mt-3 flex items-center gap-1.5 text-sm text-[#c9a84c] hover:text-[#d4b85c] transition-colors font-medium"
                                                >
                                                    <Plus size={16} />
                                                    Add Detail
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Success Toast */}
                {savedToast && (
                    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl shadow-lg animate-slideIn z-50 flex items-center gap-2 text-sm sm:text-base">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{savedToast}</span>
                    </div>
                )}

                {/* Error Toast */}
                {errorToast && (
                    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-red-500 to-rose-600 text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl shadow-lg animate-slideIn z-50 flex items-center gap-2 text-sm sm:text-base">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>{errorToast}</span>
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(100%);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .animate-slideIn {
                    animation: slideIn 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}