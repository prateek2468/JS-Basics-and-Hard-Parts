function userCreator(name , score){
  const newUser = new Object.create(userFunctions) ; 
  newUser.name = name ; 
  newUser.score = score ; 
  return newUser ; 
}

const userFunctions = {
  increment(){
    this.score++ ; 
  } , 
  login(){ console.log("logged in")} 
}

const user1 = userCreator('Phil' , 9) ; 