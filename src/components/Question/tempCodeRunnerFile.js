const handlePrev=()=>{
    if(currQues==0)
      history.push("/");
    else
     setCurrQues(currQues-1);
  }