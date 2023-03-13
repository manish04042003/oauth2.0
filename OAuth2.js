
function signIn(){
    let oauth2Endpoint ='https://accounts.google.com/o/oauth2/v2/auth';

    let form = document.createElement('form')
    form.setAttribute('method','GET')
    form.setAttribute('action',oauth2Endpoint)

    let params ={
        'client_id':'501597643895-hrsvgvm5kn6iamnlhea3l0qcc040vum4.apps.googleusercontent.com',
        "redirect_rui":'http://127.0.0.1:5500/user.html',
        'rsponse_type':'code',
        "scope":"https://www.googleapis.com/auth/userinfo.profile",
        "include_granted_scopes":'true',
        'state':'pass-throught-value'

    }

    for(let p in params){
        // console.log(p,params[p])
        let input = document.createElement('input');
        input.setAttribute('type','hidden')
        input.setAttribute('name',p)
        input.setAttribute('value',params[p])
        form.appendChild(input);
    }
    document.body.appendChild(form)
    form.submit()
}

