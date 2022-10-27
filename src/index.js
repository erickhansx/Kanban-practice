import './components/global/global.scss';
import { displayCharacters } from './components/home/home.js';
import AddReservation from './modules/AddReservation';

displayCharacters();

if (process.env.NODE_ENV === 'production') {
  console.log('Production Mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development Mode');
}

EventListerners.reserveBtn();
EventListerners.closeBtn();
AddReservation.getDataToUse();
EventListerners.windowLoad()