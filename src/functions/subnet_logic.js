//Transform number into ip address
function numToIPSubnet(ipObject,num){
    let result = num
    //Class A
    if(num >= Math.pow(2,16)){
        let ip = ipObject.first
        result = ip+'.'+classAHandler(num)
        return result
    }
    //Class B
    else if(num >= Math.pow(2,8)){
        let ip = ipObject.first+'.'+ipObject.second
        result = ip+'.'+classBHandler(num)
        return result
    }
    //Class C
    else {
        let ip = ipObject.first+'.'+ipObject.second+'.'+ipObject.third
        result = ip+'.'+result
        return result
    }
}

function classAHandler(num){
    let numInBin = num.toString(2)

    let numInBinLength = numInBin.length
    let secondLength = numInBinLength - 16
    let thirdLength = numInBinLength - 8

    let ipBlock2 = numInBin.substring(0,secondLength)
    let ipBlock3 = numInBin.substring(secondLength,thirdLength)
    let ipBlock4 = numInBin.substring(thirdLength,numInBinLength)

    let result = parseInt(ipBlock2,2)+'.'+parseInt(ipBlock3,2)+'.'+parseInt(ipBlock4,2)
    return result
}

function classBHandler(num){
    let numInBin = num.toString(2)

    let numInBinLength = numInBin.length
    let thirdLength = numInBinLength - 8

    let ipBlock3 = numInBin.substring(0,thirdLength)
    let ipBlock4 = numInBin.substring(thirdLength,numInBinLength)

    ipBlock3 = parseInt(ipBlock3,10)
    let result = parseInt(ipBlock3,2)+'.'+parseInt(ipBlock4,2)
    return result
}

/**
 * Get the array of each subnet in type of object.
 * @param {String} ip object of ip that is constant.
 * @param {Number} network number of bit that we use in network.
 * @param {Number} host number of bit that we use in host.
 * @returns {Object} Json of subnet that have these properties (subnet,subnetID,firstAdd,lastAdd,broadcast)
 */
function getSubnetArray(ip,network,host){

    //Because we just want the number of hosts not include id and broadcast.
    let hostNum = Math.pow(2,host) - 2
    let networkNum = Math.pow(2,network)
    let startIP = 0

    let arraySubnet = []
    for(let i = 0; i < networkNum; i++){
        let subnetID = startIP
        let first = parseInt(startIP+1)
        let last = parseInt(startIP+hostNum)
        let broad = parseInt(last+1)
        startIP = parseInt(broad + 1)
    
        subnetID = numToIPSubnet(ip,subnetID)
        first = numToIPSubnet(ip,first)
        last = numToIPSubnet(ip,last)
        broad = numToIPSubnet(ip,broad)
        
        let subnetObject = {
            'subnet':i,
            'subnetID':subnetID,
            'firstAdd':first,
            'lastAdd':last,
            'broadcast':broad,
        }
        arraySubnet[i] = subnetObject
    }
    return arraySubnet
}

module.exports = {
    getSubnetArray,
}  