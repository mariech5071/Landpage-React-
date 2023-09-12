import './App.css';
import DropdownIndex from './Components/DropdownIndex/DropdownIndex';
import OurServices from './Components/OurServices/OurServices';
import OurTools from './Components/OurTools/OurTools';
import MeetTheTeam from './Components/MeetTheTeam/MeetTheTeam';
import Button from './Components/Home/Button'

function App() {
  return (
    <div >
      <div className='home-background'>
        <DropdownIndex></DropdownIndex>
        <p className='home-text-big'><span class='transform'>Transform </span> your ideas into brand new solutions</p>
        <p className='home-text-small' >We can leverage your products & services to the next level.</p>
        <Button></Button>
      </div>
        <OurServices></OurServices>
        <OurTools></OurTools>
        <MeetTheTeam></MeetTheTeam>
    </div>
  )
     
}

export default App;
