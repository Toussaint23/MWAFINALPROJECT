export class InterviewQ {
    id = 0;
    firstname = '';
    lastname = '';
    category = '';
    email = '';
    questiontext = '';
    comapanyname = '';
    date = '';
    comments: Comment[];
}

export class Comment {
    firstname = '';
    lastname = '';
    commenttext = '';
    email = '';
    date = '';
}

export const interviews: InterviewQ[] = [
    {
        id: 1,
        lastname : 'm',
        firstname : 'eee',
        category: 'Java',
        email : 'mm@mum.edu',
        questiontext : 'mm',
        comapanyname: 'google',
        date : '',
        comments  : [
            {
               firstname : 'mm',
               lastname : 'mm',
               email : 'm@mum.edu',
               date : '',
               commenttext : 'mm'
           }],
        }
    ];
