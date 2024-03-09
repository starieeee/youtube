export const API_KEY = 'AIzaSyBsdBI_JU9pmCCKxpsBLRbu6t5Uyu3ZQkg'

export const value_converter = (value) =>{
    if(value>=1000000){
        return Math.floor(value/1000000).toFixed(1)+'M'
    }
    else if(value>=1000){
        return Math.floor(value/1000).toFixed(1)+'K'
    }
    else{
        return value
    }
}