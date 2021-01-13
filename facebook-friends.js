let facebookProfile = {
  name: "Eppa Lea",
  friends: 1294,
  messages: [
      "How are the snowboarding conditions today?",
      "I want to be in Hawaii right now!",
      "Come visit anytime you want!"
      ],
  postMessage: function(message) {
    return facebookProfile.messages.push(message); 
    },   
  deleteMessage: function(index) {
    return facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    return facebookProfile.friends += 1;  
  },
  removeFriend: function () {
    return facebookProfile.friends -= 1;  
  }
};

console.log(facebookProfile.postMessage("does this work"));
console.log(facebookProfile.messages);
console.log(facebookProfile.deleteMessage(0));
console.log(facebookProfile.messages);
console.log(facebookProfile.addFriend());
console.log(facebookProfile.removeFriend());
