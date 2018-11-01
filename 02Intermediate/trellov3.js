let myTodos = {
    day:'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(meet){
        this.meetings = this.meetings + meet;
    },

    meetComplete: function(meet){
        this.meetDone = this.meetDone + meet;
    },

    daySummary: function(){
        let final = this.meetings - this.meetDone;
        console.log(`The remaining meeting in the day is : ${final}`);
    }
}
myTodos.addMeeting(4);
myTodos.meetComplete(1);
myTodos.daySummary();