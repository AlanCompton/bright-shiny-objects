// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

// createUser
function createUser(firstName,lastName){
    let user = {
        firstName: firstName,
        lastName: lastName
    }
    return user;
}

// setAge
function setAge(user,age){
    user.age = age;
    return user;
}

// incrementAge
function incrementAge(user){
    user.age = user.age +1;
    return user;
}

// fixCar
function fixCar(car){
    car.needsMaintenance = false;
    return car;
}

// addGrades
function addGrades(student, newGrades){
    student.grades = student.grades.concat(newGrades);
    return student;
}

// getDataType
function getDataType(car,keys){
    keyTypes = typeof car[keys];
    return keyTypes;
}

// addToDo
function addTodo(todos,addNewToDo){
    todos.push(addNewToDo);
    return todos;
} 

// addSong
function addSong(playList,newSong){
    playList.songs.push(newSong);
    playList['duration']=(playList['duration']+=newSong['duration']);
    return playList;
}

// updateReportCard

// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
