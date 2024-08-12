 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */






const checkEachData = (data, max , min) => {
    if (data === undefined)  { 
       Logger('undefined :data ' )
       return false
    }
    if (data === null)  { 
        Logger('null :data ' )
        return false
     }
     if (typeof data !== 'string')  { 
        Logger('not string ' + data )
        return false
     }
     if ( data.trim() === '')  { 
        Logger('data is emty')
        return false
     }
     if ( max !== undefined && data.length > max )  { 
        Logger('greter then max' + data)
        return false
     }
     if (  min !== undefined && data.length < min )  { 
        Logger('less then min' + data)
        return false
     }
     




    return true 
}

export {checkEachData,Logger}





const Logger = (e) => {
  console.log(e)
}




























