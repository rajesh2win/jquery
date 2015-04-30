angular.module('myApp.factories',[]).factory('noteFactory',function($http){
    //declare dependency on $http
    return {
        addNote: function(note){
// save the note. may be use $http to persist on server
        },
        updateNote: function(note){
//update note
        },
        getNotes: function(){
//get all notes
        },
        getNote: function(noteId){
//get a single note
        }
    }
});

angular.module('myApp.factories').factory('helloService',function(){
    return {
        sayHello: function(name){
            alert('Hello '+name);
        },
        echo: function(message){
            alert(message);
        }
    }
});