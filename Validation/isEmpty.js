
const isEmpty=(data)=>{
    return (
        (typeof data=== 'object' && Object.keys(data).length===0) ||
        (typeof data === 'string' && data.length === 0) ||
        data === undefined ||
        data === null
    )
}

module.exports=isEmpty;