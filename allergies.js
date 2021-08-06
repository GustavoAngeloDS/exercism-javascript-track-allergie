//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class Allergies {
  
  activeAllergiesMap = new Map();  

  checkAndFillAllergiesMap(allergieScore){
    if(allergieScore >= 128){
      this.activeAllergiesMap.set("cats", 128);
      allergieScore-=128;
    }
    if (allergieScore >= 64 && allergieScore < 128){
      this.activeAllergiesMap.set("pollen", 64);
      allergieScore-=64;
    }
    if(allergieScore >= 32 && allergieScore < 64){
      this.activeAllergiesMap.set("chocolate", 32);
      allergieScore-=32;
    }
    if(allergieScore >= 16 && allergieScore < 32){
      this.activeAllergiesMap.set("tomatoes", 16);
      allergieScore-=16;
    }
    if(allergieScore >= 8 && allergieScore < 16){
      this.activeAllergiesMap.set("strawberries", 8);
      allergieScore-=8;
    }
    if(allergieScore >= 4 && allergieScore < 8){
      this.activeAllergiesMap.set("shellfish", 4);
      allergieScore-=4;
    }
    if(allergieScore >= 2 && allergieScore < 4){
      this.activeAllergiesMap.set("peanuts", 2);
      allergieScore-=2;
    }
    if(allergieScore == 1){
      this.activeAllergiesMap.set("eggs", 1);
      allergieScore-=1;
    }
  }

  constructor(allergieScore) {
    allergieScore = allergieScore % 256;
    this.checkAndFillAllergiesMap(allergieScore);
  }

  list() {
    const activeAllergiesArray = [];
    for (let allergieName of this.activeAllergiesMap.keys()) {
      if(allergieName != undefined)
        activeAllergiesArray.push(allergieName);
    }
    return activeAllergiesArray.reverse();
  }

  allergicTo(allergieName) {
    return this.activeAllergiesMap.has(allergieName);
  }
}