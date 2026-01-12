import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, ChevronDown, ShoppingCart, User, Globe, Search, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();
    const { toggleCart, cartCount } = useCart();
    const { user, logout } = useAuth();

    // Region Selector Logic
    const [isRegionOpen, setIsRegionOpen] = useState(false);
    const [regionSearch, setRegionSearch] = useState('');
    const [selectedRegion, setSelectedRegion] = useState({ code: 'IND', name: 'India', flag: 'in' });
    const regionRef = useRef(null);

    // Close region dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (regionRef.current && !regionRef.current.contains(event.target)) {
                setIsRegionOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const countries = [
        { code: 'AFG', name: 'Afghanistan', flag: 'af' }, { code: 'ALB', name: 'Albania', flag: 'al' }, { code: 'DZA', name: 'Algeria', flag: 'dz' },
        { code: 'AND', name: 'Andorra', flag: 'ad' }, { code: 'AGO', name: 'Angola', flag: 'ao' }, { code: 'ARG', name: 'Argentina', flag: 'ar' },
        { code: 'ARM', name: 'Armenia', flag: 'am' }, { code: 'AUS', name: 'Australia', flag: 'au' }, { code: 'AUT', name: 'Austria', flag: 'at' },
        { code: 'AZE', name: 'Azerbaijan', flag: 'az' }, { code: 'BHS', name: 'Bahamas', flag: 'bs' }, { code: 'BHR', name: 'Bahrain', flag: 'bh' },
        { code: 'BGD', name: 'Bangladesh', flag: 'bd' }, { code: 'BRB', name: 'Barbados', flag: 'bb' }, { code: 'BLR', name: 'Belarus', flag: 'by' },
        { code: 'BEL', name: 'Belgium', flag: 'be' }, { code: 'BLZ', name: 'Belize', flag: 'bz' }, { code: 'BEN', name: 'Benin', flag: 'bj' },
        { code: 'BTN', name: 'Bhutan', flag: 'bt' }, { code: 'BOL', name: 'Bolivia', flag: 'bo' }, { code: 'BIH', name: 'Bosnia and Herzegovina', flag: 'ba' },
        { code: 'BWA', name: 'Botswana', flag: 'bw' }, { code: 'BRA', name: 'Brazil', flag: 'br' }, { code: 'BRN', name: 'Brunei', flag: 'bn' },
        { code: 'BGR', name: 'Bulgaria', flag: 'bg' }, { code: 'BFA', name: 'Burkina Faso', flag: 'bf' }, { code: 'BDI', name: 'Burundi', flag: 'bi' },
        { code: 'CPV', name: 'Cabo Verde', flag: 'cv' }, { code: 'KHM', name: 'Cambodia', flag: 'kh' }, { code: 'CMR', name: 'Cameroon', flag: 'cm' },
        { code: 'CAN', name: 'Canada', flag: 'ca' }, { code: 'CAF', name: 'Central African Republic', flag: 'cf' }, { code: 'TCD', name: 'Chad', flag: 'td' },
        { code: 'CHL', name: 'Chile', flag: 'cl' }, { code: 'CHN', name: 'China', flag: 'cn' }, { code: 'COL', name: 'Colombia', flag: 'co' },
        { code: 'COM', name: 'Comoros', flag: 'km' }, { code: 'COG', name: 'Congo', flag: 'cg' }, { code: 'CRI', name: 'Costa Rica', flag: 'cr' },
        { code: 'HRV', name: 'Croatia', flag: 'hr' }, { code: 'CUB', name: 'Cuba', flag: 'cu' }, { code: 'CYP', name: 'Cyprus', flag: 'cy' },
        { code: 'CZE', name: 'Czech Republic', flag: 'cz' }, { code: 'DNK', name: 'Denmark', flag: 'dk' }, { code: 'DJI', name: 'Djibouti', flag: 'dj' },
        { code: 'DOM', name: 'Dominican Republic', flag: 'do' }, { code: 'ECU', name: 'Ecuador', flag: 'ec' }, { code: 'EGY', name: 'Egypt', flag: 'eg' },
        { code: 'SLV', name: 'El Salvador', flag: 'sv' }, { code: 'GNQ', name: 'Equatorial Guinea', flag: 'gq' }, { code: 'ERI', name: 'Eritrea', flag: 'er' },
        { code: 'EST', name: 'Estonia', flag: 'ee' }, { code: 'ETH', name: 'Ethiopia', flag: 'et' }, { code: 'FJI', name: 'Fiji', flag: 'fj' },
        { code: 'FIN', name: 'Finland', flag: 'fi' }, { code: 'FRA', name: 'France', flag: 'fr' }, { code: 'GAB', name: 'Gabon', flag: 'ga' },
        { code: 'GMB', name: 'Gambia', flag: 'gm' }, { code: 'GEO', name: 'Georgia', flag: 'ge' }, { code: 'DEU', name: 'Germany', flag: 'de' },
        { code: 'GHA', name: 'Ghana', flag: 'gh' }, { code: 'GRC', name: 'Greece', flag: 'gr' }, { code: 'GRD', name: 'Grenada', flag: 'gd' },
        { code: 'GTM', name: 'Guatemala', flag: 'gt' }, { code: 'GIN', name: 'Guinea', flag: 'gn' }, { code: 'GUY', name: 'Guyana', flag: 'gy' },
        { code: 'HTI', name: 'Haiti', flag: 'ht' }, { code: 'HND', name: 'Honduras', flag: 'hn' }, { code: 'HUN', name: 'Hungary', flag: 'hu' },
        { code: 'ISL', name: 'Iceland', flag: 'is' }, { code: 'IND', name: 'India', flag: 'in' }, { code: 'IDN', name: 'Indonesia', flag: 'id' },
        { code: 'IRN', name: 'Iran', flag: 'ir' }, { code: 'IRQ', name: 'Iraq', flag: 'iq' }, { code: 'IRL', name: 'Ireland', flag: 'ie' },
        { code: 'ISR', name: 'Israel', flag: 'il' }, { code: 'ITA', name: 'Italy', flag: 'it' }, { code: 'JAM', name: 'Jamaica', flag: 'jm' },
        { code: 'JPN', name: 'Japan', flag: 'jp' }, { code: 'JOR', name: 'Jordan', flag: 'jo' }, { code: 'KAZ', name: 'Kazakhstan', flag: 'kz' },
        { code: 'KEN', name: 'Kenya', flag: 'ke' }, { code: 'KIR', name: 'Kiribati', flag: 'ki' }, { code: 'KWT', name: 'Kuwait', flag: 'kw' },
        { code: 'KGZ', name: 'Kyrgyzstan', flag: 'kg' }, { code: 'LAO', name: 'Laos', flag: 'la' }, { code: 'LVA', name: 'Latvia', flag: 'lv' },
        { code: 'LBN', name: 'Lebanon', flag: 'lb' }, { code: 'LSO', name: 'Lesotho', flag: 'ls' }, { code: 'LBR', name: 'Liberia', flag: 'lr' },
        { code: 'LBY', name: 'Libya', flag: 'ly' }, { code: 'LIE', name: 'Liechtenstein', flag: 'li' }, { code: 'LTU', name: 'Lithuania', flag: 'lt' },
        { code: 'LUX', name: 'Luxembourg', flag: 'lu' }, { code: 'MDG', name: 'Madagascar', flag: 'mg' }, { code: 'MWI', name: 'Malawi', flag: 'mw' },
        { code: 'MYS', name: 'Malaysia', flag: 'my' }, { code: 'MDV', name: 'Maldives', flag: 'mv' }, { code: 'MLI', name: 'Mali', flag: 'ml' },
        { code: 'MLT', name: 'Malta', flag: 'mt' }, { code: 'MHL', name: 'Marshall Islands', flag: 'mh' }, { code: 'MRT', name: 'Mauritania', flag: 'mr' },
        { code: 'MUS', name: 'Mauritius', flag: 'mu' }, { code: 'MEX', name: 'Mexico', flag: 'mx' }, { code: 'FSM', name: 'Micronesia', flag: 'fm' },
        { code: 'MDA', name: 'Moldova', flag: 'md' }, { code: 'MCO', name: 'Monaco', flag: 'mc' }, { code: 'MNG', name: 'Mongolia', flag: 'mn' },
        { code: 'MNE', name: 'Montenegro', flag: 'me' }, { code: 'MAR', name: 'Morocco', flag: 'ma' }, { code: 'MOZ', name: 'Mozambique', flag: 'mz' },
        { code: 'MMR', name: 'Myanmar', flag: 'mm' }, { code: 'NAM', name: 'Namibia', flag: 'na' }, { code: 'NRU', name: 'Nauru', flag: 'nr' },
        { code: 'NPL', name: 'Nepal', flag: 'np' }, { code: 'NLD', name: 'Netherlands', flag: 'nl' }, { code: 'NZL', name: 'New Zealand', flag: 'nz' },
        { code: 'NIC', name: 'Nicaragua', flag: 'ni' }, { code: 'NER', name: 'Niger', flag: 'ne' }, { code: 'NGA', name: 'Nigeria', flag: 'ng' },
        { code: 'NOR', name: 'Norway', flag: 'no' }, { code: 'OMN', name: 'Oman', flag: 'om' }, { code: 'PAK', name: 'Pakistan', flag: 'pk' },
        { code: 'PLW', name: 'Palau', flag: 'pw' }, { code: 'PAN', name: 'Panama', flag: 'pa' }, { code: 'PNG', name: 'Papua New Guinea', flag: 'pg' },
        { code: 'PRY', name: 'Paraguay', flag: 'py' }, { code: 'PER', name: 'Peru', flag: 'pe' }, { code: 'PHL', name: 'Philippines', flag: 'ph' },
        { code: 'POL', name: 'Poland', flag: 'pl' }, { code: 'PRT', name: 'Portugal', flag: 'pt' }, { code: 'QAT', name: 'Qatar', flag: 'qa' },
        { code: 'ROU', name: 'Romania', flag: 'ro' }, { code: 'RUS', name: 'Russia', flag: 'ru' }, { code: 'RWA', name: 'Rwanda', flag: 'rw' },
        { code: 'KNA', name: 'Saint Kitts and Nevis', flag: 'kn' }, { code: 'LCA', name: 'Saint Lucia', flag: 'lc' }, { code: 'VCT', name: 'Saint Vincent', flag: 'vc' },
        { code: 'WSM', name: 'Samoa', flag: 'ws' }, { code: 'SMR', name: 'San Marino', flag: 'sm' }, { code: 'STP', name: 'Sao Tome', flag: 'st' },
        { code: 'SAU', name: 'Saudi Arabia', flag: 'sa' }, { code: 'SEN', name: 'Senegal', flag: 'sn' }, { code: 'SRB', name: 'Serbia', flag: 'rs' },
        { code: 'SYC', name: 'Seychelles', flag: 'sc' }, { code: 'SLE', name: 'Sierra Leone', flag: 'sl' }, { code: 'SGP', name: 'Singapore', flag: 'sg' },
        { code: 'SVK', name: 'Slovakia', flag: 'sk' }, { code: 'SVN', name: 'Slovenia', flag: 'si' }, { code: 'SLB', name: 'Solomon Islands', flag: 'sb' },
        { code: 'SOM', name: 'Somalia', flag: 'so' }, { code: 'ZAF', name: 'South Africa', flag: 'za' }, { code: 'KOR', name: 'South Korea', flag: 'kr' },
        { code: 'ESP', name: 'Spain', flag: 'es' }, { code: 'LKA', name: 'Sri Lanka', flag: 'lk' }, { code: 'SDN', name: 'Sudan', flag: 'sd' },
        { code: 'SUR', name: 'Suriname', flag: 'sr' }, { code: 'SWE', name: 'Sweden', flag: 'se' }, { code: 'CHE', name: 'Switzerland', flag: 'ch' },
        { code: 'SYR', name: 'Syria', flag: 'sy' }, { code: 'TWN', name: 'Taiwan', flag: 'tw' }, { code: 'TJK', name: 'Tajikistan', flag: 'tj' },
        { code: 'TZA', name: 'Tanzania', flag: 'tz' }, { code: 'THA', name: 'Thailand', flag: 'th' }, { code: 'TLS', name: 'Timor-Leste', flag: 'tl' },
        { code: 'TGO', name: 'Togo', flag: 'tg' }, { code: 'TON', name: 'Tonga', flag: 'to' }, { code: 'TTO', name: 'Trinidad and Tobago', flag: 'tt' },
        { code: 'TUN', name: 'Tunisia', flag: 'tn' }, { code: 'TUR', name: 'Turkey', flag: 'tr' }, { code: 'TKM', name: 'Turkmenistan', flag: 'tm' },
        { code: 'TUV', name: 'Tuvalu', flag: 'tv' }, { code: 'UGA', name: 'Uganda', flag: 'ug' }, { code: 'UKR', name: 'Ukraine', flag: 'ua' },
        { code: 'ARE', name: 'United Arab Emirates', flag: 'ae' }, { code: 'GBR', name: 'United Kingdom', flag: 'gb' }, { code: 'USA', name: 'United States', flag: 'us' },
        { code: 'URY', name: 'Uruguay', flag: 'uy' }, { code: 'UZB', name: 'Uzbekistan', flag: 'uz' }, { code: 'VUT', name: 'Vanuatu', flag: 'vu' },
        { code: 'VEN', name: 'Venezuela', flag: 've' }, { code: 'VNM', name: 'Vietnam', flag: 'vn' }, { code: 'YEM', name: 'Yemen', flag: 'ye' },
        { code: 'ZMB', name: 'Zambia', flag: 'zm' }, { code: 'ZWE', name: 'Zimbabwe', flag: 'zw' }
    ];

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(regionSearch.toLowerCase()) ||
        country.code.toLowerCase().includes(regionSearch.toLowerCase())
    );

    const navLinks = [
        {
            name: 'Explore Careers',
            path: '/explore-careers',
            dropdown: [
                { name: 'Explore Industries', path: '/explore-industries' },
                { name: 'Explore Tech Careers', path: '/explore-tech-careers' },
                { name: 'Careers+', path: '/careers-plus' }
            ]
        },
        { name: 'Certifications', path: '/certifications' },
        { name: 'Enterprise', path: '/enterprise' },
        { name: 'Partner', path: '/partners-ecosystem' },
        {
            name: 'Academic',
            path: '/programs',
            dropdown: [
                { name: 'Higher Education', path: '/academic/higher-education' },
                { name: 'Secondary Education', path: '/academic/secondary-education' },
                { name: 'Instructors', path: '/academic/instructors' },
                { name: 'Students', path: '/academic/students' }
            ]
        },
        {
            name: 'Resources',
            path: '/resources',
            dropdown: [
                { name: 'Blog', path: '/resources/blog' },
                { name: 'Research', path: '/resources/research' },
                { name: 'Case Studies', path: '/resources/case-studies' },
                { name: 'View All Resources', path: '/resources' }
            ]
        },
        { name: 'Shop', path: '/pricing' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed inset-x-0 z-50 transition-all duration-700 px-4 md:px-8 py-4 ${isScrolled ? 'top-0' : 'top-9'}`}
        >
            {/* Added relative positioned wrapper to contain absolute dropdowns correctly */}
            <div className={`max-w-[1440px] mx-auto relative transition-all duration-500`}>

                {/* Desktop Navigation Container */}
                <div className={`relative px-6 md:px-8 h-12 md:h-16 rounded-[2rem] border transition-all duration-500 w-fit mx-auto flex justify-center items-center gap-8
                    ${isScrolled
                        ? 'bg-black/50 backdrop-blur-xl border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)]'
                        : 'bg-black/20 backdrop-blur-lg border-white/5'
                    }`}>

                    {/* Logo Section */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2 group/logo relative z-[60]">
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-600 blur-md opacity-20 group-hover/logo:opacity-50 transition-opacity animate-pulse"></div>
                            <Shield className="h-6 w-6 text-red-600 relative z-10 fill-red-600/10" />
                        </div>
                        <span className="font-black text-xl tracking-tighter text-white leading-none">CSCA</span>
                    </Link>

                    {/* Desktop Menu Links */}
                    <div className="hidden xl:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {link.dropdown ? (
                                    <Link
                                        to={link.path}
                                        className={`flex items-center gap-1 px-3 py-2 text-[11px] font-bold uppercase tracking-wide transition-all duration-300 rounded-lg hover:bg-white/5 cursor-pointer
                                            ${activeDropdown === link.name || isActive(link.path) ? 'text-red-500' : 'text-gray-300 hover:text-white'}`}
                                    >
                                        {link.name}
                                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180 text-red-500' : 'opacity-50'}`} />
                                    </Link>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={`flex items-center gap-1 px-3 py-2 text-[11px] font-bold uppercase tracking-wide transition-all duration-300 rounded-lg hover:bg-white/5
                                            ${isActive(link.path) || activeDropdown === link.name ? 'text-red-500' : 'text-gray-300 hover:text-white'}`}
                                    >
                                        {link.name}
                                    </Link>
                                )}

                                {/* Dropdown Menu */}
                                {link.dropdown && activeDropdown === link.name && (
                                    <div className="absolute top-full left-0 mt-2 w-56 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,1)] overflow-hidden animate-in fade-in slide-in-from-top-2 z-50">
                                        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
                                        <div className="p-2">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.path}
                                                    className="block px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Utilities Section */}
                    <div className="hidden md:flex items-center gap-6 pl-6 border-l border-white/10">

                        {/* Region Selector */}
                        <div className="relative z-[60]" ref={regionRef}>
                            <button
                                onClick={() => setIsRegionOpen(!isRegionOpen)}
                                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
                            >
                                <img
                                    src={`https://flagcdn.com/w40/${selectedRegion.flag}.png`}
                                    alt={selectedRegion.name}
                                    className="w-5 h-3.5 object-cover rounded-[1px]"
                                />
                                <span>{selectedRegion.code}</span>
                                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isRegionOpen ? 'rotate-180 text-red-500' : 'opacity-50'}`} />
                            </button>

                            {/* Region Dropdown */}
                            {isRegionOpen && (
                                <div className="absolute right-0 top-full mt-4 w-72 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden animate-in fade-in slide-in-from-top-2 z-[70]">
                                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
                                    <div className="p-3 border-b border-white/10 bg-white/5">
                                        <div className="relative">
                                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500" />
                                            <input
                                                type="text"
                                                placeholder="Search country..."
                                                value={regionSearch}
                                                onChange={(e) => setRegionSearch(e.target.value)}
                                                className="w-full bg-black/50 border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-600"
                                                autoFocus
                                            />
                                        </div>
                                    </div>
                                    <div className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent p-1">
                                        {filteredCountries.map((country) => (
                                            <button
                                                key={country.code}
                                                onClick={() => {
                                                    setSelectedRegion(country);
                                                    setIsRegionOpen(false);
                                                }}
                                                className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-colors group
                                                    ${selectedRegion.code === country.code ? 'bg-red-600/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={`https://flagcdn.com/w40/${country.flag}.png`}
                                                        alt={country.name}
                                                        className="w-5 h-3.5 object-cover rounded-[1px] opacity-70 group-hover:opacity-100 transition-opacity"
                                                    />
                                                    <span className={`font-mono text-[10px] ${selectedRegion.code === country.code ? 'text-red-500' : 'opacity-40 group-hover:opacity-100'}`}>{country.code}</span>
                                                    <span>{country.name}</span>
                                                </div>
                                                {selectedRegion.code === country.code && <Check className="w-3 h-3 text-red-500" />}
                                            </button>
                                        ))}
                                        {filteredCountries.length === 0 && (
                                            <div className="p-4 text-center text-xs text-gray-500">No countries found</div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Cart */}
                        <button
                            onClick={toggleCart}
                            className="relative group text-gray-400 hover:text-white transition-colors"
                        >
                            <ShoppingCart className="w-4 h-4" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[9px] font-black w-3.5 h-3.5 flex items-center justify-center rounded-full border border-black group-hover:scale-110 transition-transform">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* Auth Section */}
                        {!user ? (
                            <Link to="/login" className="flex items-center gap-2 text-[10px] font-bold uppercase text-gray-400 hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded-lg hover:bg-white/5 hover:border-white/20">
                                <User className="w-3.5 h-3.5" />
                                Login
                            </Link>
                        ) : (
                            <div className="relative group/profile">
                                <button className="flex items-center gap-2 text-[10px] font-bold uppercase text-gray-400 hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded-lg hover:bg-white/5 hover:border-white/20">
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-red-600 to-red-400 flex items-center justify-center border border-white/10 shadow-lg shadow-red-900/20">
                                        <span className="text-[9px] text-white font-black">
                                            {user.firstName ? user.firstName[0] : (user.displayName ? user.displayName[0] : 'U')}
                                        </span>
                                    </div>
                                    <span className="max-w-[100px] truncate">{user.firstName || user.displayName || 'Authorized'}</span>
                                    <ChevronDown className="w-3 h-3 opacity-50 group-hover/profile:rotate-180 transition-transform" />
                                </button>

                                <div className="absolute right-0 top-full mt-2 w-56 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] opacity-0 invisible group-hover/profile:opacity-100 group-hover/profile:visible transition-all duration-300 z-[100] translate-y-2 group-hover/profile:translate-y-0">
                                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
                                    <div className="p-4 border-b border-white/5">
                                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Signed in as</p>
                                        <p className="text-xs font-bold text-white truncate">{user.email}</p>
                                    </div>
                                    <div className="p-2">
                                        <Link to="/profile" className="flex items-center gap-3 px-3 py-2 text-[10px] font-bold uppercase text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                            <User className="w-3.5 h-3.5" />
                                            Edit Profile
                                        </Link>
                                        <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2 text-[10px] font-bold uppercase text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                            <Shield className="w-3.5 h-3.5" />
                                            Dashboard
                                        </Link>
                                        <div className="h-px bg-white/5 my-1 mx-2"></div>
                                        <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-2 text-[10px] font-bold uppercase text-red-500 hover:text-red-400 hover:bg-red-500/5 rounded-lg transition-colors">
                                            <X className="w-3.5 h-3.5" />
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex xl:hidden items-center ml-auto">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-red-500 focus:outline-none p-2">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="xl:hidden mt-2 mx-4 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-y-auto max-h-[85vh] animate-in fade-in slide-in-from-top-2">
                    <div className="p-4 space-y-1">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.dropdown ? (
                                    <>
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-4 py-3 text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                        <div className="pl-6 space-y-1 pb-2">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.path}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-white transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-lg
                                            ${isActive(link.path) ? 'bg-red-600/10 text-red-500' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}

                        <div className="h-px bg-white/10 my-2"></div>

                        {/* Region Mobile (Simplified) */}
                        <div className="px-4 py-2 flex items-center justify-between text-gray-400">
                            <span className="text-xs font-bold uppercase tracking-wider">Region</span>
                            <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4" />
                                <span className="text-xs font-mono">{selectedRegion.code}</span>
                            </div>
                        </div>

                        <div className="p-2 space-y-2">
                            {!user ? (
                                <Link to="/login" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 rounded-lg text-xs font-bold uppercase text-white hover:bg-white/10">
                                    <User className="w-3 h-3" /> Login
                                </Link>
                            ) : (
                                <>
                                    <div className="px-4 py-3 bg-white/5 rounded-lg border border-white/10">
                                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Signed in as</p>
                                        <p className="text-xs font-bold text-white truncate">{user.email}</p>
                                    </div>
                                    <Link to="/profile" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 rounded-lg text-xs font-bold uppercase text-white hover:bg-white/10">
                                        <User className="w-3 h-3" /> Profile
                                    </Link>
                                    <Link to="/dashboard" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 rounded-lg text-xs font-bold uppercase text-white hover:bg-white/10">
                                        <Shield className="w-3 h-3" /> Dashboard
                                    </Link>
                                    <button onClick={() => { logout(); setIsOpen(false); }} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-600/10 rounded-lg text-xs font-bold uppercase text-red-500 hover:bg-red-600/20">
                                        Logout
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
