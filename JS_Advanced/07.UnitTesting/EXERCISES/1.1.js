function solve (object) {
    console.log(object)

    //method
    if (!['GET', 'POST', 'DELETE', 'CONNECT'].includes(object.method)) {
        throw new Error('Invalid request header: Invalid Method')
    }

    //uri,
    if (!((object.uri&&/^[\w.\d]+$/gm.test(object.uri))||object.uri === '*'))
        throw new Error ('Invalid request header: Invalid URI')
    
    return console.log('Everything Ok')


//version
//message

}

solve ({method:'GET', uri:'svn.public.catalog'})