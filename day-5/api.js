// Mock API for Mobile Recharge App
class MobileRechargeAPI {
    constructor() {
        this.users = [
            { id: 1, name: 'John Doe', email: 'john@example.com', balance: 500, subscription: 'premium' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com', balance: 750, subscription: 'premium-plus' }
        ];
        this.transactions = [
            { id: 101, amount: 199, type: 'recharge', status: 'success', date: '2024-01-15' }
        ];
        this.currentUser = this.users[0];
    }
    
    async login(email, password) {
        return { success: true, user: this.users[0], token: 'mock-token' };
    }
    
    async register(userData) {
        return { success: true, user: userData, token: 'mock-token' };
    }
    
    async getUserProfile() {
        return { success: true, user: this.currentUser };
    }
    
    async validateNumber(phone, operator) {
        return { success: true, plans: [
            { amount: 199, validity: 28, data: '1GB/day' },
            { amount: 299, validity: 56, data: '2GB/day' }
        ]};
    }
    
    async processRecharge(data) {
        return { success: true, transaction: { id: 102, status: 'success' }};
    }
    
    async upgradeSubscription(planId) {
        return { success: true, subscription: { name: 'Premium' }};
    }
    
    async getAnalytics() {
        return { success: true, analytics: {
            totalUsers: 150,
            totalTransactions: 500,
            totalRevenue: 50000
        }};
    }
    
    async addMoney(amount) {
        this.currentUser.balance += amount;
        return { success: true, newBalance: this.currentUser.balance };
    }
    
    async setupAutoRecharge(settings) {
        return { success: true, message: 'Auto-recharge setup successful' };
    }
    
    async getOffers() {
        return { success: true, offers: [
            { title: 'Cashback Offer', description: '30% cashback' }
        ]};
    }
}

const api = new MobileRechargeAPI();

function showNotification(message, type = 'success') {
    const div = document.createElement('div');
    div.className = `fixed top-4 right-4 p-4 rounded text-white z-50 ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'}`;
    div.textContent = message;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 3000);
}

function showLoading(id) {
    const el = document.getElementById(id);
    if (el) {
        el.innerHTML = 'Loading...';
        el.disabled = true;
    }
}

function hideLoading(id, text) {
    const el = document.getElementById(id);
    if (el) {
        el.innerHTML = text;
        el.disabled = false;
    }
}