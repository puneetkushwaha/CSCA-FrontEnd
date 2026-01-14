import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, CreditCard, User, Mail, Phone, MapPin, Building2, ArrowLeft, Shield, CheckCircle2 } from 'lucide-react';

const Checkout = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    // Redirect if cart is empty
    useEffect(() => {
        if (cartItems.length === 0) {
            navigate('/certifications');
        }
    }, [cartItems, navigate]);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        country: 'India',
        organization: '',
    });

    const [errors, setErrors] = useState({});
    const [isProcessing, setIsProcessing] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/[- ]/g, ''))) {
            newErrors.phone = 'Phone number must be 10 digits';
        }
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.state.trim()) newErrors.state = 'State is required';
        if (!formData.pincode.trim()) {
            newErrors.pincode = 'Pincode is required';
        } else if (!/^\d{6}$/.test(formData.pincode)) {
            newErrors.pincode = 'Pincode must be 6 digits';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handleCheckout = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsProcessing(true);

        // Load Razorpay script
        const isLoaded = await loadRazorpayScript();

        if (!isLoaded) {
            alert('Failed to load Razorpay SDK. Please check your internet connection.');
            setIsProcessing(false);
            return;
        }

        // Razorpay options
        const options = {
            key: 'rzp_test_YOUR_KEY_HERE', // Replace with your Razorpay key
            amount: cartTotal * 100, // Amount in paise
            currency: 'INR',
            name: 'CSCA Certifications',
            description: 'Certification Purchase',
            image: '/logo.png', // Your logo
            prefill: {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                contact: formData.phone,
            },
            notes: {
                address: formData.address,
                city: formData.city,
                state: formData.state,
                pincode: formData.pincode,
                organization: formData.organization,
            },
            theme: {
                color: '#DC2626', // Red color matching your theme
            },
            handler: function (response) {
                // Payment successful
                console.log('Payment successful:', response);
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);

                // Clear cart and redirect
                clearCart();
                navigate('/dashboard');
            },
            modal: {
                ondismiss: function () {
                    setIsProcessing(false);
                    console.log('Payment cancelled by user');
                }
            }
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
        setIsProcessing(false);
    };

    const taxAmount = (cartTotal * 0.18).toFixed(2); // 18% GST
    const finalTotal = (parseFloat(cartTotal) + parseFloat(taxAmount)).toFixed(2);

    return (
        <div className="min-h-screen bg-black text-white py-20">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </button>
                    <h1 className="text-4xl font-black text-white mb-2">Checkout</h1>
                    <p className="text-gray-400">Complete your certification purchase</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Form */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Personal Information */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-red-600/20 p-2 rounded-lg">
                                    <User className="w-5 h-5 text-red-500" />
                                </div>
                                <h2 className="text-xl font-bold">Personal Information</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-400 mb-2">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-black/50 border ${errors.firstName ? 'border-red-500' : 'border-white/10'} rounded-xl text-white focus:outline-none focus:border-red-500 transition-colors`}
                                        placeholder="John"
                                    />
                                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-400 mb-2">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-black/50 border ${errors.lastName ? 'border-red-500' : 'border-white/10'} rounded-xl text-white focus:outline-none focus:border-red-500 transition-colors`}
                                        placeholder="Doe"
                                    />
                                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-400 mb-2">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full pl-12 pr-4 py-3 bg-black/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl text-white focus:outline-none focus:border-red-500 transition-colors`}
                                            placeholder="john.doe@example.com"
                                        />
                                    </div>
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-400 mb-2">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`w-full pl-12 pr-4 py-3 bg-black/50 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl text-white focus:outline-none focus:border-red-500 transition-colors`}
                                            placeholder="9876543210"
                                        />
                                    </div>
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-400 mb-2">
                                        Organization (Optional)
                                    </label>
                                    <div className="relative">
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                        <input
                                            type="text"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleInputChange}
                                            className="w-full pl-12 pr-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-red-500 transition-colors"
                                            placeholder="Your Company Name"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Billing Address */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-red-600/20 p-2 rounded-lg">
                                    <MapPin className="w-5 h-5 text-red-500" />
                                </div>
                                <h2 className="text-xl font-bold">Billing Address</h2>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-400 mb-2">
                                        Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-black/50 border ${errors.address ? 'border-red-500' : 'border-white/10'} rounded-xl text-white focus:outline-none focus:border-red-500 transition-colors`}
                                        placeholder="Street address, P.O. box"
                                    />
                                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-400 mb-2">
                                            City <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 bg-black/50 border ${errors.city ? 'border-red-500' : 'border-white/10'} rounded-xl text-white focus:outline-none focus:border-red-500 transition-colors`}
                                            placeholder="Mumbai"
                                        />
                                        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-400 mb-2">
                                            State <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 bg-black/50 border ${errors.state ? 'border-red-500' : 'border-white/10'} rounded-xl text-white focus:outline-none focus:border-red-500 transition-colors`}
                                            placeholder="Maharashtra"
                                        />
                                        {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-400 mb-2">
                                            Pincode <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="pincode"
                                            value={formData.pincode}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 bg-black/50 border ${errors.pincode ? 'border-red-500' : 'border-white/10'} rounded-xl text-white focus:outline-none focus:border-red-500 transition-colors`}
                                            placeholder="400001"
                                            maxLength="6"
                                        />
                                        {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-400 mb-2">
                                            Country <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-red-500 transition-colors"
                                            placeholder="India"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-24">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-red-600/20 p-2 rounded-lg">
                                    <ShoppingBag className="w-5 h-5 text-red-500" />
                                </div>
                                <h2 className="text-xl font-bold">Order Summary</h2>
                            </div>

                            {/* Cart Items */}
                            <div className="space-y-3 mb-6 max-h-[300px] overflow-y-auto custom-scrollbar">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-3 p-3 bg-black/50 rounded-xl border border-white/5">
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} p-0.5 shrink-0`}>
                                            <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                                                {React.cloneElement(item.icon, { className: "w-5 h-5 text-white" })}
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-bold text-sm text-white truncate">{item.title}</h3>
                                            <p className="text-xs text-gray-400">{item.code}</p>
                                            <div className="flex justify-between items-center mt-1">
                                                <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                                                <span className="text-sm font-bold text-white">₹{(item.price * item.quantity).toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Price Breakdown */}
                            <div className="space-y-3 pt-4 border-t border-white/10">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Subtotal</span>
                                    <span className="text-white font-bold">₹{cartTotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">GST (18%)</span>
                                    <span className="text-white font-bold">₹{parseFloat(taxAmount).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-lg font-black pt-3 border-t border-white/10">
                                    <span className="text-white">Total</span>
                                    <span className="text-red-500">₹{parseFloat(finalTotal).toLocaleString()}</span>
                                </div>
                            </div>

                            {/* Security Notice */}
                            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Shield className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="text-sm font-bold text-green-400 mb-1">Secure Payment</h3>
                                        <p className="text-xs text-gray-400">Your payment information is encrypted and secure with Razorpay</p>
                                    </div>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <button
                                onClick={handleCheckout}
                                disabled={isProcessing}
                                className="w-full mt-6 py-4 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-black uppercase tracking-widest text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] flex items-center justify-center gap-2 group"
                            >
                                {isProcessing ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <CreditCard className="w-4 h-4" />
                                        Pay ₹{parseFloat(finalTotal).toLocaleString()}
                                    </>
                                )}
                            </button>

                            <p className="text-xs text-gray-500 text-center mt-4">
                                By completing this purchase, you agree to our Terms of Service and Privacy Policy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
