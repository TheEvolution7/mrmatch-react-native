import {makeAutoObservable} from 'mobx';

class UserStore {
  interests = [];
  languages = [];
  religion = '';
  zodiac = '';
  education = '';
  familyPlan = '';
  vaccine = '';
  personalType = '';
  communStyle = '';
  loveStyle = '';
  bloodType = '';
  pets = '';
  drinking = '';
  smoking = '';
  workout = '';
  dietary = '';
  social = '';
  sleeping = '';
  musicRef = [];
  movieRef = [];
  bookRef = [];
  travelRef = [];
  modalType = '';
  titleModal = '';

  constructor() {
    // Make state observable and actions reactive
    makeAutoObservable(this);
  }

  addInterest(interest) {
    if (!this.interests.includes(interest)) {
      this.interests.push(interest);
    }
  }

  removeInterest(interest) {
    this.interests = this.interests.filter(item => item !== interest);
  }

  setInterest(interest) {
    this.interests = interest;
  }

  setTypeModal(typeModal) {
    this.modalType = typeModal;
  }

  setTitleModal(title) {
    this.titleModal = title;
  }

  setLanguages(lang) {
    this.languages = lang;
  }

  setReligion(reli) {
    this.religion = reli;
  }

  setZodiac(zod) {
    this.zodiac = zod;
  }

  setEducation(edu) {
    this.education = edu;
  }

  setFamilyPlan(fam) {
    this.familyPlan = fam;
  }

  setVaccine(vac) {
    this.vaccine = vac;
  }

  setPersonalType(type) {
    this.personalType = type;
  }

  setCommunication(com) {
    this.communStyle = com;
  }

  setLoveStyle(lov) {
    this.loveStyle = lov;
  }

  setBlood(blood) {
    this.bloodType = blood;
  }

  setPets(pet) {
    this.pets = pet;
  }

  setDrinks(drink) {
    this.drinking = drink;
  }

  setSmoking(smoke) {
    this.smoking = smoke;
  }

  setWorkout(wo) {
    this.workout = wo;
  }
  setDietary(die) {
    this.dietary = die;
  }

  setSocial(soc) {
    this.social = soc;
  }

  setSleeping(sleep) {
    this.sleeping = sleep;
  }

  setMusic(music) {
    this.musicRef = music;
  }

  setMovie(mov) {
    this.movieRef = mov;
  }

  setBook(book) {
    this.bookRef = book;
  }

  setTravel(trav) {
    this.travelRef = trav;
  }

  // Action to increment the count
}

// Create an instance of the store
const userStore = new UserStore();

export default userStore;
