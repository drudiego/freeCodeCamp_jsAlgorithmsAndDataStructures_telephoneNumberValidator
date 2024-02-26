function telephoneCheck(str) {

    //First, create an array containing some regular expressions that could match the valid formats
    const regArr = [/^(1\s)*\d{3}-\d{3}-\d{4}/, 
    /^(1*\s*\d{10})$/, 
    /^1*\s*\(\d{3}\)\s*\d{3}-\d{4}/,
    /1*\d{3}\s\d{3}\s\d{4}$/,
    ]
  
    //Then, iterate through the array, testing the string for each regular expression. If one of the tests pass, the function returns true. Otherwise, it returns false
    for (let regex of regArr){
      if (regex.test(str)){
        return true
      } 
    }
    return false; 
  }
  
  
  console.log(telephoneCheck("1 555 555 5555"));