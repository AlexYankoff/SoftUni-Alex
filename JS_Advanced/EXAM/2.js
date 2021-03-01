class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [{id:1},{id:2},{id:3}];
        this._likes =[]

    }
    get likes() {
        if(this._likes.length ==0) {
            return `${this.title} has 0 likes"`
        } 
        if (this._likes.length ==1) {
            return `${this._likes[0]} likes this story!`
        } else {
            return `${this._likes[0]} and ${this._likes.length-1} others like this story!`
        }
    }

   
    like (username) {
        if (this._likes.includes(username)) {
            return "You can't like the same story twice!"
        }
        if (username == this.creator) {
            return "You can't like your own story!"
        }
        this._likes.push(username)
        return `${username} liked ${this.title}!`
    }
    dislike (username) {
        if (!this._likes.includes(username)) {
            throw new Error ("You can't dislike this story!")
        }
        let toDelete = this._likes.indexOf(username)
        this._likes.splice(toDelete,1)
        return `${username} disliked ${this.title}`
  
    }

    comment (username, content, id) {

        const rep = {id, username, content}
        const com = {id, username, content, rep}
        let index;

        for (let i=0; i<(this._comments.length); i++) {

            if(this._comments[i].id == id){
                console.log
                index = i;
                break;

            }
            
        }
        if (index == undefined) {
            this._comments.push(com)
            return 'нов коментар добавен'
        }
        return this._comments[index]
    }
} 

toString (sortingType)

const ay = new Story('Home', 'Sasho')
//console.log(ay.like('Boby'))
//console.log(ay.like('Toni'))

//console.log(ay)
//console.log(ay.dislike('Boby'))
//console.log(ay.dislike('Toni'))

console.log(ay.comment("boby",'dobre', 4))
console.log(ay._comments)


