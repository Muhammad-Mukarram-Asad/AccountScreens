// import HKAccountListingContainer from './Screen_Components/second_screen/Inner_item/HKAccountListingContainer/HKAccountListingContainer';
// import HKBottomNav from './Screen_Components/Bottom_Nav/HKBottomNav';
// import HKAccountListing2 from './Screen_Components/second_screen/Inner_item/HKAccountListing';

import './App.css';

 import Onboarding1 from './Screen_Components/Onboarding_Screens/Onboarding1';
 import Onboarding2 from './Screen_Components/Onboarding_Screens/Onboarding2';
 import Onboarding3 from './Screen_Components/Onboarding_Screens/Onboarding3';
// 
 import HKAccountMain from './Screen_Components/main_screen/HKAccountMain';
 import HKAccountItem from './Screen_Components/second_screen/HKAccountItem';
// 
 import AddNewAccount from './Screen_Components/Fourth_Screen/NewAccount/AddNewAccount';
 import SelectAccounts from './Screen_Components/Fourth_Screen/SelectAccount/SelectAccounts';
 import AddBankAccount from './Screen_Components/Fourth_Screen/BankAccount/AddBankAccount';
// 
 import CashAccount from './Screen_Components/Fourth_Screen/CashAccount/Fourth_Screen_Cash_Account';
 import PersonAccount from './Screen_Components/Fourth_Screen/PersonAccount/Fourth_Screen_Person_Account';
 import AccountsDashboard from './Screen_Components/Third_Screen/AccountsDashboard';

 import {Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Onboarding1 />} />
          <Route path="/Onboarding2" element={<Onboarding2 />} />
          <Route path="/Onboarding3" element={<Onboarding3 />} />

          <Route path="/HKAccountMain" element={<HKAccountMain />} />
          <Route path="/secondScreen" element={<HKAccountItem />} />
         
          <Route path="/addAccount" element={<AddNewAccount />} />
          <Route path="/selectAccount" element={<SelectAccounts />} />
          <Route path="/addBankAccount"  element={<AddBankAccount />} />
         
          <Route path="/addCashAccount" element={<CashAccount />} />
          <Route path="/addPersonAccount" element={<PersonAccount />} />

          <Route path="/thirdScreen" element={<AccountsDashboard />} />
        </Routes>

  
    </div>
  );
}

export default App;
