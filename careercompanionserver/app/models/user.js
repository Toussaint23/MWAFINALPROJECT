export function user(formValue){
    return {
        value:{
        _id: formValue.id,
       lastName: formValue.lastname,
       firstName: formValue.firstname,
       status: formValue.status,
       mail: formValue.mail,
       country: formValue.country,
       gender: formValue.gender,
       details_employment : [
           {
               position: formValue.position,
               company: {
                   name: formValue.cname,
                   state: formValue.cstate,
                   city: formValue.ccity,
               },
               recruiter: {
                   name: formValue.rname,
                   state: formValue.rstate,
                   city: formValue.rcity,
               },
           }]
       },
       token: localStorage.getItem('token')
    };
}
 