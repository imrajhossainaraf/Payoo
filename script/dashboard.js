// Dashboard functionality - Production Ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize dashboard
  initializeDashboard();
  
  // Load saved data
  loadUserData();
  
  // Quick Action Buttons
  setupQuickActions();
  
  // Navigation Menu
  setupNavigation();
  
  // Profile Menu
  setupProfileMenu();
  
  // Quick Links
  setupQuickLinks();
  
  // Forms
  setupForms();
  
  // Search Functionality
  setupSearch();
  
  // Auto-save functionality
  setupAutoSave();
});

// Initialize Dashboard
function initializeDashboard() {
  console.log('Dashboard initialized');
  
  // Check if user is logged in
  const userData = getStoredData('userData');
  if (!userData) {
    // Redirect to login if not authenticated
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
    return;
  }
  
  // Update user name if available
  if (userData.name) {
    const welcomeText = document.querySelector('h1');
    if (welcomeText) {
      welcomeText.innerHTML = `Welcome back, <span class="tech-text-green">${userData.name}</span>`;
    }
  }
}

// Data Storage Functions
function getStoredData(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
}

function setStoredData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('Error writing to localStorage:', error);
    showNotification('Error saving data. Please try again.', 'error');
    return false;
  }
}

// Load User Data
function loadUserData() {
  const userData = getStoredData('userData') || {
    name: 'John Doe',
    balance: 4500.00,
    savings: 12350.00,
    credit: 2450.00,
    investment: 25800.00,
    transactions: []
  };
  
  // Update balance display
  updateBalanceDisplay(userData.balance);
  
  // Load transactions if available
  if (userData.transactions && userData.transactions.length > 0) {
    // Transactions are already in HTML, so we just ensure they're displayed
  }
  
  // Store initial data if not exists
  if (!getStoredData('userData')) {
    setStoredData('userData', userData);
  }
}

// Update Balance Display
function updateBalanceDisplay(balance) {
  const balanceElement = document.querySelector('.gradient-card h2');
  if (balanceElement) {
    balanceElement.textContent = `$${balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
}

// Quick Actions Setup
function setupQuickActions() {
  // Add Money
  const addMoneyBtn = document.getElementById('addMoneyBtn');
  if (addMoneyBtn) {
    addMoneyBtn.addEventListener('click', () => {
      document.getElementById('addMoneyModal').showModal();
    });
  }

  // Send Money
  const sendMoneyBtn = document.getElementById('sendMoneyBtn');
  if (sendMoneyBtn) {
    sendMoneyBtn.addEventListener('click', () => {
      document.getElementById('sendMoneyModal').showModal();
    });
  }

  // Cash Out
  const cashOutBtn = document.getElementById('cashOutBtn');
  if (cashOutBtn) {
    cashOutBtn.addEventListener('click', () => {
      document.getElementById('cashOutModal').showModal();
    });
  }

  // Pay Bill
  const payBillBtn = document.getElementById('payBillBtn');
  if (payBillBtn) {
    payBillBtn.addEventListener('click', () => {
      document.getElementById('payBillModal').showModal();
    });
  }

  // Get Bonus
  const getBonusBtn = document.getElementById('getBonusBtn');
  if (getBonusBtn) {
    getBonusBtn.addEventListener('click', () => {
      document.getElementById('getBonusModal').showModal();
    });
  }

  // View Transactions
  const viewTransactionsBtn = document.getElementById('viewTransactionsBtn');
  if (viewTransactionsBtn) {
    viewTransactionsBtn.addEventListener('click', () => {
      showAllTransactions();
    });
  }

  // View All Transactions Button
  const viewAllTransactionsBtn = document.getElementById('viewAllTransactionsBtn');
  if (viewAllTransactionsBtn) {
    viewAllTransactionsBtn.addEventListener('click', () => {
      showAllTransactions();
    });
  }
}

// Navigation Menu Setup
function setupNavigation() {
  const navDashboard = document.getElementById('navDashboard');
  const navAccounts = document.getElementById('navAccounts');
  const navTransactions = document.getElementById('navTransactions');
  const navSettings = document.getElementById('navSettings');
  const navSupport = document.getElementById('navSupport');

  if (navDashboard) {
    navDashboard.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showNotification('Navigated to Dashboard', 'success');
    });
  }

  if (navAccounts) {
    navAccounts.addEventListener('click', () => {
      showNotification('My Accounts feature coming soon!', 'info');
    });
  }

  if (navTransactions) {
    navTransactions.addEventListener('click', () => {
      showAllTransactions();
    });
  }

  if (navSettings) {
    navSettings.addEventListener('click', () => {
      showNotification('Settings page coming soon!', 'info');
    });
  }

  if (navSupport) {
    navSupport.addEventListener('click', () => {
      showNotification('Support Center: support@payoo.com | +1-800-PAYOO', 'info');
    });
  }
}

// Profile Menu Setup
function setupProfileMenu() {
  const profileBtn = document.getElementById('profileBtn');
  const securityBtn = document.getElementById('securityBtn');
  const settingsBtn = document.getElementById('settingsBtn');

  if (profileBtn) {
    profileBtn.addEventListener('click', () => {
      showNotification('Profile page coming soon!', 'info');
    });
  }

  if (securityBtn) {
    securityBtn.addEventListener('click', () => {
      document.getElementById('securityModal').showModal();
    });
  }

  if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
      showNotification('Settings page coming soon!', 'info');
    });
  }
}

// Quick Links Setup
function setupQuickLinks() {
  const statementsBtn = document.getElementById('statementsBtn');
  const cardsBtn = document.getElementById('cardsBtn');
  const privacyBtn = document.getElementById('privacyBtn');
  const supportCenterBtn = document.getElementById('supportCenterBtn');
  const manageSecurityBtn = document.getElementById('manageSecurityBtn');

  if (statementsBtn) {
    statementsBtn.addEventListener('click', () => {
      showNotification('Downloading statements...', 'info');
      // Simulate download
      setTimeout(() => {
        showNotification('Statements downloaded successfully!', 'success');
      }, 1500);
    });
  }

  if (cardsBtn) {
    cardsBtn.addEventListener('click', () => {
      showNotification('Card management page coming soon!', 'info');
    });
  }

  if (privacyBtn) {
    privacyBtn.addEventListener('click', () => {
      showNotification('Privacy settings page coming soon!', 'info');
    });
  }

  if (supportCenterBtn) {
    supportCenterBtn.addEventListener('click', () => {
      showNotification('Support Center: support@payoo.com | +1-800-PAYOO', 'info');
    });
  }

  if (manageSecurityBtn) {
    manageSecurityBtn.addEventListener('click', () => {
      document.getElementById('securityModal').showModal();
    });
  }
}

// Forms Setup
function setupForms() {
  // Add Money Form
  const addMoneyForm = document.getElementById('addMoneyForm');
  if (addMoneyForm) {
    addMoneyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleAddMoney();
    });
  }

  // Send Money Form
  const sendMoneyForm = document.getElementById('sendMoneyForm');
  if (sendMoneyForm) {
    sendMoneyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSendMoney();
    });
  }

  // Cash Out Form
  const cashOutForm = document.getElementById('cashOutForm');
  if (cashOutForm) {
    cashOutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleCashOut();
    });
  }

  // Pay Bill Form
  const payBillForm = document.getElementById('payBillForm');
  if (payBillForm) {
    payBillForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handlePayBill();
    });
  }

  // Get Bonus Form
  const getBonusForm = document.getElementById('getBonusForm');
  if (getBonusForm) {
    getBonusForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleGetBonus();
    });
  }
}

// Handle Add Money
function handleAddMoney() {
  const amount = parseFloat(document.getElementById('addMoneyAmount').value);
  const method = document.getElementById('addMoneyMethod').value;
  const pin = document.getElementById('addMoneyPin').value;

  // Validation
  if (!amount || amount <= 0) {
    showNotification('Please enter a valid amount', 'error');
    return;
  }

  if (!method) {
    showNotification('Please select a payment method', 'error');
    return;
  }

  if (!pin || pin.length !== 4) {
    showNotification('Please enter a valid 4-digit PIN', 'error');
    return;
  }

  if (pin !== '1234') {
    showNotification('Invalid PIN. Please try again.', 'error');
    return;
  }

  // Get current user data
  const userData = getStoredData('userData') || { balance: 4500.00, transactions: [] };
  
  // Simulate processing
  showNotification('Processing your request...', 'info');
  
  setTimeout(() => {
    // Update balance
    userData.balance += amount;
    
    // Add transaction
    const transaction = {
      id: Date.now(),
      name: 'Bank Deposit',
      type: 'Credit',
      amount: amount,
      reference: method,
      date: new Date().toISOString(),
      status: 'Completed'
    };
    userData.transactions.unshift(transaction);
    
    // Save to localStorage
    setStoredData('userData', userData);
    
    // Update UI
    updateBalance(amount);
    addTransactionToTable(transaction);
    
    // Close modal and reset form
    document.getElementById('addMoneyModal').close();
    document.getElementById('addMoneyForm').reset();
    showNotification(`Successfully added $${amount.toFixed(2)} to your account!`, 'success');
  }, 2000);
}

// Handle Send Money
function handleSendMoney() {
  const number = document.getElementById('sendMoneyNumber').value.trim();
  const amount = parseFloat(document.getElementById('sendMoneyAmount').value);
  const pin = document.getElementById('sendMoneyPin').value;

  // Validation
  if (!number || number.length !== 11) {
    showNotification('Please enter a valid 11-digit mobile number', 'error');
    return;
  }

  if (!amount || amount <= 0) {
    showNotification('Please enter a valid amount', 'error');
    return;
  }

  if (!pin || pin.length !== 4) {
    showNotification('Please enter a valid 4-digit PIN', 'error');
    return;
  }

  if (pin !== '1234') {
    showNotification('Invalid PIN. Please try again.', 'error');
    return;
  }

  // Get current user data
  const userData = getStoredData('userData') || { balance: 4500.00, transactions: [] };
  
  // Check sufficient balance
  if (userData.balance < amount) {
    showNotification('Insufficient balance. Please check your account balance.', 'error');
    return;
  }

  // Simulate processing
  showNotification('Processing your request...', 'info');
  
  setTimeout(() => {
    // Update balance
    userData.balance -= amount;
    
    // Add transaction
    const transaction = {
      id: Date.now(),
      name: 'Send Money',
      type: 'Debit',
      amount: -amount,
      reference: number,
      date: new Date().toISOString(),
      status: 'Completed'
    };
    userData.transactions.unshift(transaction);
    
    // Save to localStorage
    setStoredData('userData', userData);
    
    // Update UI
    updateBalance(-amount);
    addTransactionToTable(transaction);
    
    // Close modal and reset form
    document.getElementById('sendMoneyModal').close();
    document.getElementById('sendMoneyForm').reset();
    showNotification(`Successfully sent $${amount.toFixed(2)} to ${number}!`, 'success');
  }, 2000);
}

// Handle Cash Out
function handleCashOut() {
  const amount = parseFloat(document.getElementById('cashOutAmount').value);
  const agent = document.getElementById('cashOutAgent').value.trim();
  const pin = document.getElementById('cashOutPin').value;

  // Validation
  if (!amount || amount <= 0) {
    showNotification('Please enter a valid amount', 'error');
    return;
  }

  if (!agent) {
    showNotification('Please enter agent number', 'error');
    return;
  }

  if (!pin || pin.length !== 4) {
    showNotification('Please enter a valid 4-digit PIN', 'error');
    return;
  }

  if (pin !== '1234') {
    showNotification('Invalid PIN. Please try again.', 'error');
    return;
  }

  const charge = parseFloat((amount * 0.015).toFixed(2)); // 1.5% charge
  const total = amount + charge;

  // Get current user data
  const userData = getStoredData('userData') || { balance: 4500.00, transactions: [] };
  
  // Check sufficient balance
  if (userData.balance < total) {
    showNotification(`Insufficient balance. You need $${total.toFixed(2)} (including $${charge.toFixed(2)} charge).`, 'error');
    return;
  }

  // Simulate processing
  showNotification('Processing your cash out request...', 'info');
  
  setTimeout(() => {
    // Update balance
    userData.balance -= total;
    
    // Add transaction
    const transaction = {
      id: Date.now(),
      name: 'Cash Out',
      type: 'Debit',
      amount: -total,
      reference: agent,
      date: new Date().toISOString(),
      status: 'Completed'
    };
    userData.transactions.unshift(transaction);
    
    // Save to localStorage
    setStoredData('userData', userData);
    
    // Update UI
    updateBalance(-total);
    addTransactionToTable(transaction);
    
    // Close modal and reset form
    document.getElementById('cashOutModal').close();
    document.getElementById('cashOutForm').reset();
    showNotification(`Cash out successful! Amount: $${amount.toFixed(2)}, Charge: $${charge.toFixed(2)}, Total: $${total.toFixed(2)}`, 'success');
  }, 2000);
}

// Handle Pay Bill
function handlePayBill() {
  const type = document.getElementById('payBillType').value;
  const account = document.getElementById('payBillAccount').value.trim();
  const amount = parseFloat(document.getElementById('payBillAmount').value);
  const pin = document.getElementById('payBillPin').value;

  // Validation
  if (!type) {
    showNotification('Please select a bill type', 'error');
    return;
  }

  if (!account) {
    showNotification('Please enter account number', 'error');
    return;
  }

  if (!amount || amount <= 0) {
    showNotification('Please enter a valid amount', 'error');
    return;
  }

  if (!pin || pin.length !== 4) {
    showNotification('Please enter a valid 4-digit PIN', 'error');
    return;
  }

  if (pin !== '1234') {
    showNotification('Invalid PIN. Please try again.', 'error');
    return;
  }

  // Get current user data
  const userData = getStoredData('userData') || { balance: 4500.00, transactions: [] };
  
  // Check sufficient balance
  if (userData.balance < amount) {
    showNotification('Insufficient balance. Please check your account balance.', 'error');
    return;
  }

  // Simulate processing
  showNotification('Processing your bill payment...', 'info');
  
  setTimeout(() => {
    // Update balance
    userData.balance -= amount;
    
    // Add transaction
    const transaction = {
      id: Date.now(),
      name: `${type.charAt(0).toUpperCase() + type.slice(1)} Bill`,
      type: 'Debit',
      amount: -amount,
      reference: account,
      date: new Date().toISOString(),
      status: 'Completed'
    };
    userData.transactions.unshift(transaction);
    
    // Save to localStorage
    setStoredData('userData', userData);
    
    // Update UI
    updateBalance(-amount);
    addTransactionToTable(transaction);
    
    // Close modal and reset form
    document.getElementById('payBillModal').close();
    document.getElementById('payBillForm').reset();
    showNotification(`Successfully paid $${amount.toFixed(2)} for ${type} bill!`, 'success');
  }, 2000);
}

// Handle Get Bonus
function handleGetBonus() {
  const pin = document.getElementById('getBonusPin').value;

  // Validation
  if (!pin || pin.length !== 4) {
    showNotification('Please enter a valid 4-digit PIN', 'error');
    return;
  }

  if (pin !== '1234') {
    showNotification('Invalid PIN. Please try again.', 'error');
    return;
  }

  // Get current user data
  const userData = getStoredData('userData') || { balance: 4500.00, transactions: [] };
  
  // Check if bonus already claimed today
  const today = new Date().toDateString();
  const bonusClaimed = userData.transactions.some(t => 
    t.name === 'Bonus Reward' && new Date(t.date).toDateString() === today
  );
  
  if (bonusClaimed) {
    showNotification('Bonus already claimed today. Please try again tomorrow.', 'error');
    return;
  }

  // Simulate processing
  showNotification('Claiming your bonus...', 'info');
  
  setTimeout(() => {
    const bonusAmount = 25.00;
    
    // Update balance
    userData.balance += bonusAmount;
    
    // Add transaction
    const transaction = {
      id: Date.now(),
      name: 'Bonus Reward',
      type: 'Credit',
      amount: bonusAmount,
      reference: 'Cashback',
      date: new Date().toISOString(),
      status: 'Completed'
    };
    userData.transactions.unshift(transaction);
    
    // Save to localStorage
    setStoredData('userData', userData);
    
    // Update UI
    updateBalance(bonusAmount);
    addTransactionToTable(transaction);
    
    // Close modal and reset form
    document.getElementById('getBonusModal').close();
    document.getElementById('getBonusForm').reset();
    showNotification(`Bonus of $${bonusAmount.toFixed(2)} successfully added to your account!`, 'success');
  }, 2000);
}

// Update Balance
function updateBalance(amount) {
  const userData = getStoredData('userData') || { balance: 4500.00 };
  userData.balance += amount;
  setStoredData('userData', userData);
  updateBalanceDisplay(userData.balance);
}

// Add Transaction to Table
function addTransactionToTable(transaction) {
  const tbody = document.querySelector('table tbody');
  if (!tbody) return;

  const date = new Date(transaction.date).toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });
  
  const iconClass = transaction.type === 'Credit' ? 'bg-green-500' : 'bg-red-500';
  const icon = transaction.type === 'Credit' ? 'fa-arrow-down' : 'fa-arrow-up';
  const amountClass = transaction.type === 'Credit' ? 'tech-text-green' : 'tech-text-red';
  const amountSign = transaction.type === 'Credit' ? '+' : '-';
  const badgeClass = transaction.type === 'Credit' ? 'badge-success' : 'badge-error';

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>
      <div class="flex items-center gap-3">
        <div class="avatar">
          <div class="w-10 rounded-full ${iconClass} ${transaction.type === 'Credit' ? 'text-black' : 'text-white'} flex items-center justify-center">
            <i class="fas ${icon}"></i>
          </div>
        </div>
        <div>
          <div class="font-bold">${transaction.name}</div>
          <div class="text-sm opacity-50">${transaction.reference}</div>
        </div>
      </div>
    </td>
    <td>
      <span class="badge ${badgeClass}">${transaction.type}</span>
    </td>
    <td class="${amountClass} font-semibold">${amountSign}$${Math.abs(transaction.amount).toFixed(2)}</td>
    <td>${date}</td>
    <td>
      <span class="badge badge-success badge-sm">${transaction.status}</span>
    </td>
  `;

  tbody.insertBefore(row, tbody.firstChild);
}

// Show All Transactions
function showAllTransactions() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => {
    const transactionsSection = document.querySelector('.lg\\:col-span-2');
    if (transactionsSection) {
      transactionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    showNotification('Viewing all transactions', 'info');
  }, 300);
}

// Search Functionality
function setupSearch() {
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      document.getElementById('searchModal').showModal();
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 100);
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (query.length > 0) {
        performSearch(query, searchResults);
      } else {
        searchResults.innerHTML = '';
      }
    });
  }
}

// Perform Search
function performSearch(query, resultsContainer) {
  const searchItems = [
    { name: 'Add Money', type: 'Service', action: () => document.getElementById('addMoneyModal').showModal() },
    { name: 'Send Money', type: 'Service', action: () => document.getElementById('sendMoneyModal').showModal() },
    { name: 'Cash Out', type: 'Service', action: () => document.getElementById('cashOutModal').showModal() },
    { name: 'Pay Bill', type: 'Service', action: () => document.getElementById('payBillModal').showModal() },
    { name: 'Transactions', type: 'Service', action: () => showAllTransactions() },
    { name: 'Settings', type: 'Menu', action: () => showNotification('Settings page coming soon!', 'info') },
    { name: 'Security', type: 'Menu', action: () => document.getElementById('securityModal').showModal() },
    { name: 'Profile', type: 'Menu', action: () => showNotification('Profile page coming soon!', 'info') },
  ];

  const filtered = searchItems.filter(item => 
    item.name.toLowerCase().includes(query) || item.type.toLowerCase().includes(query)
  );

  resultsContainer.innerHTML = '';

  if (filtered.length === 0) {
    resultsContainer.innerHTML = '<p class="text-center opacity-70">No results found</p>';
    return;
  }

  filtered.forEach(item => {
    const div = document.createElement('div');
    div.className = 'p-3 bg-base-300 rounded cursor-pointer hover:bg-base-200 transition';
    div.innerHTML = `
      <div class="font-semibold">${item.name}</div>
      <div class="text-sm opacity-70">${item.type}</div>
    `;
    div.addEventListener('click', () => {
      document.getElementById('searchModal').close();
      item.action();
    });
    resultsContainer.appendChild(div);
  });
}

// Auto-save functionality
function setupAutoSave() {
  // Auto-save every 30 seconds
  setInterval(() => {
    const userData = getStoredData('userData');
    if (userData) {
      setStoredData('userData', userData);
    }
  }, 30000);
}

// Show Notification
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.tech-notification');
  existingNotifications.forEach(n => n.remove());

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `tech-notification alert alert-${type === 'error' ? 'error' : type === 'success' ? 'success' : 'info'} fixed top-20 right-4 z-50 shadow-lg max-w-md`;
  notification.innerHTML = `
    <div class="flex items-center gap-2">
      <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
      <span>${message}</span>
    </div>
  `;

  document.body.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Error handling for unhandled errors
window.addEventListener('error', function(e) {
  console.error('Unhandled error:', e.error);
  showNotification('An unexpected error occurred. Please refresh the page.', 'error');
});

// Prevent form submission on Enter key in search
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && e.target.id === 'searchInput') {
    e.preventDefault();
  }
});
