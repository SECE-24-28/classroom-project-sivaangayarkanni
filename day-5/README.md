# Day 5 - Mock API Implementation

This folder contains the mock API implementation for the Mobile Recharge App.

## File: api.js

The api.js file provides a complete mock backend API with the following features:

### Core API Methods:
- `login(email, password)` - User authentication
- `register(userData)` - User registration
- `getUserProfile()` - Get current user profile
- `validateNumber(phone, operator)` - Validate phone number and get plans
- `processRecharge(data)` - Process recharge transaction
- `upgradeSubscription(planId)` - Upgrade subscription plan
- `getAnalytics()` - Get analytics data
- `addMoney(amount)` - Add money to wallet
- `setupAutoRecharge(settings)` - Setup auto-recharge
- `getOffers()` - Get available offers

### Helper Functions:
- `showNotification(message, type)` - Display toast notifications
- `showLoading(id)` - Show loading state
- `hideLoading(id, text)` - Hide loading state

## Usage:
```javascript
// Login example
const result = await api.login('user@example.com', 'password123');

// Recharge example
const recharge = await api.processRecharge({
    amount: 199,
    phone: '9876543210',
    operator: 'airtel'
});
```

All API methods return promises and simulate real API behavior with mock data.
