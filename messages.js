// Returns a random greeting
const returnRandGreeting = () => {
    const messages = ['Hello', 'Hola', 'Hi', 'Hey', 'Howdy', "G'day"]
    return messages[Math.floor(Math.random() * 6)]
  }
  // Returns a random greeting
  /*const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 1; i++) {
      newStrand.push(returnRandGreeting())
    }
    return newStrand
  }*/

// Returns a random question
const returnRandQ = () => {
    const questions = ['How old are you', 'Where are you from?', 'How have you been?', 'Where have you been?', "What's the date today?", "Have you heard from your family?"]
    return questions[Math.floor(Math.random() * 6)]
  }
  // Returns a random question
  /*const mockUpQ = () => {
    const newStrand = []
    for (let i = 0; i < 1; i++) {
      newStrand.push(returnRandQ())
    }
    return newStrand
  }*/

// Returns a random name
const returnRandName = () => {
    const name = ['Sally', 'Anne', 'Mike', 'James', 'Debra', 'Jason', 'Holly']
    return name[Math.floor(Math.random() * 7)]
}
// Returns a random name
const mockupMessage = () =>{
    const newStrand = []
    for (let i = 0; i < 3; i++) {
        newStrand.push(returnRandGreeting() + returnRandQ() + returnRandName )
    }
    return newStrand
}

console.log(mockupMessage())

/*
  const pAequorFactory = (specimanNum, dna) => {
    return {
      specimanNum,
      dna,
      mutate() {
        const randIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase();
        while (this.dna[randIndex] === newBase) {
          newBase = returnRandBase();
        }
        this.dna[randIndex] = newBase;
        return this.dna;
      },
      compareDNA(otherOrg) {
        const similarities = this.dna.reduce((acc, curr, idx, arr) => {
          if (arr[idx] === otherOrg.dna[idx]) {
            return acc + 1;
          } else {
            return acc;
          }
        }, 0);
        const percentOfDNAshared = (similarities / this.dna.length) * 100;
        const percentageTo2Deci = percentOfDNAshared.toFixed(2);
        console.log(`${this.specimanNum} and ${otherOrg.specimanNum} have ${percentageTo2Deci}% DNA in common.`);
      },
      willLikelySurvive() {
        const cOrG = this.dna.filter(el => el === "C" || el === "G");
        return cOrG.length / this.dna.length >= 0.6;
      },
    }
  };
  const survivingSpecimen = [];
  let idCounter = 1;
  while (survivingSpecimen.length < 30) {
    let newOrg = pAequorFactory(idCounter, mockUpStrand());
    if (newOrg.willLikelySurvive()) {
      survivingSpecimen.push(newOrg);
    }
    idCounter++;
  }
  console.log(survivingSpecimen)*/