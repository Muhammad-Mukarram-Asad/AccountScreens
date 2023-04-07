// import HKAccountListingContainer from './Screen_Components/second_screen/Inner_item/HKAccountListingContainer/HKAccountListingContainer';
// import HKBottomNav from './Screen_Components/Bottom_Nav/HKBottomNav';
// import HKAccountListing2 from './Screen_Components/second_screen/Inner_item/HKAccountListing';

import './App.css';

 import Onboarding1 from './Screen_Components/Onboarding_Screens/OnboardingScreen_1/Onboarding1';
 import Onboarding2 from './Screen_Components/Onboarding_Screens/OnboardingScreen_2/Onboarding2';
 import Onboarding3 from './Screen_Components/Onboarding_Screens/OnboardingScreen_3/Onboarding3';
// 
 import HKAccountMain from './Screen_Components/main_screen/HKAccountMain';
 import HKAccountItem from './Screen_Components/second_screen/HKAccountItem';
// 
 import AddNewAccount from './Screen_Components/Fourth_Screen_Add_Account/Fourth_First_Screen/AddNewAccount';
 import SelectAccount from './Screen_Components/Fourth_Screen_Add_Account/Fourth_Second_Screen/SelectAccount';
 import AddBankAccount from './Screen_Components/Fourth_Screen_Add_Account/Fourth_Third_Screen/AddBankAccount';
// 
 import Fourth_Screen_Cash_Account from './Screen_Components/Fourth_Screen_Add_Account/Fourth_Screen_Cash_Account';
 import Fourth_Screen_Person_Account from './Screen_Components/Fourth_Screen_Add_Account/Fourth_Screen_Person_Account';
 import Main_third_screen from './Screen_Components/Third_Screen/main_third_screen';

 import {Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Onboarding1 /> */}
      {/* <AddNewAccount /> */}
      {/* <SelectAccount /> */}
      {/* <AddBankAccount /> */}
      {/* <Fourth_Screen_Cash_Account /> */}
      {/* <Fourth_Screen_Person_Account /> */}



        <Routes>
          <Route exact path="/" element={<Onboarding1 />} />
          <Route path="/Onboarding2" element={<Onboarding2 />} />
          <Route path="/Onboarding3" element={<Onboarding3 />} />

          <Route path="/HKAccountMain" element={<HKAccountMain />} />
          <Route path="/secondScreen" element={<HKAccountItem />} />
         
          <Route path="/addAccount" element={<AddNewAccount />} />
          <Route path="/selectAccount" element={<SelectAccount />} />
          <Route path="/addBankAccount"  element={<AddBankAccount />} />
         
          <Route path="/addCashAccount" element={<Fourth_Screen_Cash_Account />} />
          <Route path="/addPersonAccount" element={<Fourth_Screen_Person_Account />} />

          <Route path="/thirdScreen" element={<Main_third_screen />} />
        </Routes>

      {/* <HKBottomNav /> */}
  
    </div>
  );
}

export default App;
