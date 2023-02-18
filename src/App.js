import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import ServicesOfCountry from './Pages/ServicesOfCountry'
import SportClub from './Pages/SportClub'
import ShopAndMool from './Pages/ShopAndMool'
import Shops from './components/Shops'
import PrivDoc from './components/PrivDoc'
import Club from './components/Club'
import Hospitals from './components/Hospitals'
import Schools from './components/Schools'
import Crafts from './components/Crafts'
import Industry from './components/Industry'
import Ampulance from './components/Ampulance'
import Place from './components/Place'
import Evalutions from './components/Evalutions'
import Ambulances from './Pages/Ambulances'
import AllCrafts from './Pages/AllCrafts'
import AllPrivDoc from './Pages/AllPrivDoc'
import ElctricWorker from './components/ElctricWorker'
import Plumber from './components/Plumber'
import TilerWorker from './components/TilerWorker'
import CarpenterWorker from './components/CarpenterWorker'
import BakerWorker from './components/BakerWorker'
import DriverWorker from './components/DriverWorker'
import PaintWorker from './components/PaintWorker'
import PatnaDoctor from './components/PatnaDoctor'
import Gldya from './components/Gldya'
import Graha from './components/Graha'
import Asnan from './components/Asnan'
import AnfWhngra from './components/AnfWhngra'
import Ezam from './components/Ezam'
import SadrDoc from './components/SadrDoc'
import Elasab from './components/Elasab'
import Hopital from './Pages/Hospital'
import DrCar from './components/DrCar'
import School from './Pages/School'
import KindyDis from './components/KindyDis'
import GastDis from './components/GastDis'
import ObsGy from './components/ObsGy'
import Blood from './components/Blood'
import Geld from './components/Geld'
import PublicDis from './components/PublicDis'
import Nose from './components/Nose'
import LungDis from './components/LungDis'
import SchoolDetails from './components/SchoolDetails'
import AboNage from './components/AboNage'
import AboNagePrimary from './components/AboNagePrimary'
import HeadPrimary from './components/HeadPrimary'
import HeadSec from './components/HeadSec'
import ManPrimary from './components/ManPrimary'
import WomanPrimary from './components/WomanPrimary'
import DenyPrimary from './components/DenyPrimary'
import DenySec from './components/DenySec'
function App() {
  return (
    <>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='ServicesOfCountry' element={<ServicesOfCountry/>} />
        <Route path='SportClub' element={<SportClub/>} />
        <Route path='ShopAndMool' element={<ShopAndMool/>} />
        <Route path='Ambulances' element={<Ambulances/>}/>
        <Route path='Shops' element={<Shops/>}/>
        <Route path='PrivDoc' element={<PrivDoc/>}/>
        <Route path='SPCL' element={<Club/>} />
        <Route path='Hospital' element={<Hospitals/>} />
        <Route path='School' element={<Schools/>} />
        <Route path='work' element={<Crafts/>} />
        <Route path='Industry' element={<Industry/>} />
        <Route path='Ampulance' element={<Ampulance/>} />
        <Route path='Place' element={<Place/>} />
        <Route path='Evalutions' element={<Evalutions/>} />
        <Route path='AllCrafts' element={<AllCrafts/>} />
        <Route path='AllPrivDoc' element={<AllPrivDoc/>}/>
        <Route path='ElctricWorker' element={<ElctricWorker/>}/>
        <Route path='PlumberWorker' element={<Plumber/>}/>
        <Route path='TilerWorker' element={<TilerWorker/>}/>
        <Route path='CarpenterWorker' element={<CarpenterWorker/>}/>
        <Route path='BakerWorker' element={<BakerWorker/>}/>
        <Route path='DriverWorker' element={<DriverWorker/>}/>
        <Route path='PaintWorker' element={<PaintWorker/>}/>
        <Route path='Patna' element={<PatnaDoctor/>}/>
        <Route path='Gldya' element={<Gldya/>} />
        <Route path='Graha' element={<Graha/>} />
        <Route path='Asnan' element={<Asnan/>} />
        <Route path='AnfWhngra' element={<AnfWhngra/>}/>
        <Route path='Ezam' element={<Ezam/>}/>
        <Route path='Sadr' element={<SadrDoc/>}/>
        <Route path='Elasab' element={<Elasab/>}/>
        <Route path='Hosp' element={<Hopital/>}/>
        <Route path='DrCar' element={<DrCar/>} />
        <Route path='KindyDis' element={<KindyDis/>} />
        <Route path='GastDis' element={<GastDis/>} />
        <Route path='ObsGy' element={<ObsGy/>} />
        <Route path='Blood' element={<Blood/>} />
        <Route path='Geld' element={<Geld/>} />
        <Route path='PublicDis' element={<PublicDis/>} />
        <Route path='Nose' element={<Nose/>} />
        <Route path='LungDis' element={<LungDis/>} />
        <Route path='SchoolS' element={<School/>}/>
        <Route path='SchoolDetails' element={<SchoolDetails/>}/>
        <Route path='AboNage' element={<AboNage/>}/>
        <Route path='AboNagePrimary' element={<AboNagePrimary/>}/>
        <Route path='HeadPrimary' element={<HeadPrimary/>}/>
        <Route path='HeadSec' element={<HeadSec/>}/>
        <Route path='ManPrimary' element={<ManPrimary/>}/>
        <Route path='WomanPrimary' element={<WomanPrimary/>}/>
        <Route path='DenyPrimary' element={<DenyPrimary/>}/>
        <Route path='DenySec' element={<DenySec/>}/>
       </Routes>

      <Footer/>
    </>
  )
}

export default App