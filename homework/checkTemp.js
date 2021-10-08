function checkTemp(temp){
    if (temp<=20)
    {
        return -1
    }
    else if(temp>=21 && temp<=40)
    {
       return 0   
    }
    else 
    {
       return 1
    }
}
