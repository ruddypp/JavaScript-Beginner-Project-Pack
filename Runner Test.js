let raceNumber = Math.floor(Math.random() * 1000);
const registedEarly = false;
const raceAge = 18;

if (raceAge > 18 && registedEarly || !registedEarly){
  raceNumber += 1000; }
  if(raceAge > 18 && registedEarly){
    console.log(`Jadwal lari kamu pada pukul 9.30 dan nomor larimu adalah ${raceNumber}`);
  } else if(raceAge > 18  && !registedEarly){
    console.log(`Jadwal lari kamu pada pukul 11.00 dan nomor larimu adalah ${raceNumber}`);
  } else if ( raceAge < 18 ){
    console.log(`Jadwal lari kamu pada pukul 12.30 dan nomor larimu adalah ${raceNumber}`);
  } else{
    console.log('Pergi ke tempat registrasi');
  }

