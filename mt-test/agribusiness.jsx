agribusiness.jsx
import React, { useState } from 'react';
import {
    ShoppingCart,
    Share2,
    BarChart2,
    TrendingUp,
    Copy,
    MessageCircle,
    Facebook
} from 'lucide-react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

// Step 1: AI-Powered Payment Link Generation
const PaymentLinkGeneration = ({ onNext }) => {
    const [generatedLink, setGeneratedLink] = useState('');
    const [copied, setCopied] = useState(false);

    const generatePaymentLink = () => {
        // Simulate AI-powered link generation
        const randomLink = `https://pay.agribiz.com/${Math.random().toString(36).substr(2, 9)}`;
        setGeneratedLink(randomLink);
        onNext();
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(generatedLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleShare = (platform) => {
        const shareText = "Check out this payment link!";
        const encodedLink = encodeURIComponent(generatedLink);

        const shareLinks = {
            whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + " " + generatedLink)}`,
            sms: `sms:?body=${encodeURIComponent(shareText + " " + generatedLink)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`,
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodedLink}`
        };

        if (shareLinks[platform]) {
            window.open(shareLinks[platform], '_blank');
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-5 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Share2 className="mr-3 text-blue-600" /> AI-Powered Payment Links
            </h2>
            <p className="mb-4">
                The system uses AI to dynamically generate shareable payment links based on the conversation you had with your customers.
            </p>
            <button
                onClick={generatePaymentLink}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
            >
                <Share2 className="mr-2" /> Generate Payment Link
            </button>
            {generatedLink && (
                <div className="mt-4">
                    <div className="bg-gray-100 p-2 rounded flex justify-between items-center">
                        <p className="text-sm truncate mr-2">Generated Link: {generatedLink}</p>
                        <button
                            onClick={handleCopyLink}
                            className="text-blue-600 hover:text-blue-800"
                            title="Copy Link"
                        >
                            {copied ? 'Copied!' : <Copy size={20} />}
                        </button>
                    </div>
                    <div className="mt-2 flex space-x-2 justify-center">
                        <button
                            onClick={() => handleShare('whatsapp')}
                            className="text-green-600 hover:text-green-800"
                            title="Share via WhatsApp"
                        >
                            <Share2 size={24} />
                        </button>
                        <button
                            onClick={() => handleShare('sms')}
                            className="text-blue-600 hover:text-blue-800"
                            title="Share via SMS"
                        >
                            <MessageCircle size={24} />
                        </button>
                        <button
                            onClick={() => handleShare('facebook')}
                            className="text-blue-700 hover:text-blue-900"
                            title="Share on Facebook"
                        >
                            <Facebook size={24} />
                        </button>
                        <button
                            onClick={() => handleShare('twitter')}
                            className="text-blue-400 hover:text-blue-600"
                            title="Share on Twitter"
                        >
                            <Share2 size={24} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

// Step 2: AI-Powered Inventory & Sales Integration
const InventoryIntegration = () => {
    const [inventoryData, setInventoryData] = useState([
        { product: 'Tomatoes', currentStock: 500, lowStock: 200 },
        { product: 'Potatoes', currentStock: 350, lowStock: 150 },
        { product: 'Carrots', currentStock: 250, lowStock: 100 }
    ]);

    return (
        <div className="bg-white shadow-md rounded-lg p-5 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BarChart2 className="mr-3 text-orange-600" /> AI-Powered Inventory Integration
            </h2>
            <p className="mb-4">
                When a customer completes a payment, the system automatically updates the inventory in real-time.
            </p>
            <table className="w-full">
                <thead>
                <tr className="bg-gray-100">
                    <th className="p-2 text-left">Product</th>
                    <th className="p-2 text-right">Current Stock</th>
                    <th className="p-2 text-right">Low Stock</th>
                </tr>
                </thead>
                <tbody>
                {inventoryData.map((item) => (
                    <tr key={item.product} className="border-b">
                        <td className="p-2">{item.product}</td>
                        <td className="p-2 text-right">{item.currentStock} kg</td>
                        <td className="p-2 text-right">{item.lowStock} kg</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

// Step 3: AI-Driven Demand Forecasting
const DemandForecasting = () => {
    const [demandForecastData, setDemandForecastData] = useState([
        { month: 'Jan', predictedDemand: 1200, actualSales: 1100 },
        { month: 'Feb', predictedDemand: 1500, actualSales: 1400 },
        { month: 'Mar', predictedDemand: 1800, actualSales: 1700 },
        { month: 'Apr', predictedDemand: 2000, actualSales: 1900 }
    ]);

    return (
        <div className="bg-white shadow-md rounded-lg p-5 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <TrendingUp className="mr-3 text-purple-600" /> AI-Driven Demand Forecasting
            </h2>
            <p className="mb-4">
                The system uses AI to analyze past sales, inventory, and seasonal trends to predict upcoming demand.
            </p>
            <div className="h-[300px]">
                <LineChart width={400} height={300} data={demandForecastData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="predictedDemand" stroke="#8884d8" />
                    <Line type="monotone" dataKey="actualSales" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

// Main Component
const AgribusinessFlowPrototype = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        { component: PaymentLinkGeneration, title: 'AI-Powered Payment Links' },
        { component: InventoryIntegration, title: 'AI-Powered Inventory Integration' },
        { component: DemandForecasting, title: 'AI-Driven Demand Forecasting' }
    ];

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const CurrentStep = steps[currentStep].component;

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center space-y-6">
                <h1 className="text-3xl font-bold text-green-700 flex items-center">
                    <ShoppingCart className="mr-3" /> Agribusiness SME Management
                </h1>
                <CurrentStep onNext={handleNext} />
                {currentStep < steps.length - 1 && (
                    <button
                        onClick={handleNext}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Next Step
                    </button>
                )}
            </div>
        </div>
    );
};

export default AgribusinessFlowPrototype;