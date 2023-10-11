class School {
    constructor(name, numberOfStudents, level) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set numberOfStudents(students) {
      if (typeof students === 'number') {
        this._numberOfStudents = students;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
    quickFacts() {
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
   pickSubtituteTeacher(subtituteTeachers) {
      const randInd= Math.floor(subtituteTeachers.length * Math.random());
      return subtituteTeachers[randInd];
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pikcupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._numberOfStudents = numberOfStudents;
      this._level = 'primary';
      this._pickupPolicy = pikcupPolicy;
    }
    get pikcupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeam) {
      super(name);
      this._numberOfStudents = numberOfStudents;
      this._level = 'high';
      this._sportsTeam = sportsTeam;
    }
    get sportsTeam() {
      return this._sportsTeam;
      console.log(this._sportsTeam);
    }
  }
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  
  lorraineHansbury.quickFacts();
  const sub = lorraineHansbury.pickSubtituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  console.log(sub);
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  console.log(alSmith.sportsTeam);