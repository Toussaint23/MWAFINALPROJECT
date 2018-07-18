export class InterviewQ {
    id = 0;
    category = '';
    questiontext = '';
    comapanyname = '';
    date = '';
    comments: Comment[];
}

export class Comment {
    commenttext = '';
    date = '';
}

export const interviews: InterviewQ[] = [
    {
        id: 1,
        category: 'Java',
        questiontext : 'mm',
        comapanyname: 'google',
        date : '',
        comments  : [
            {
               commenttext : 'mm',
               date : '',
           }],
        }
    ];
