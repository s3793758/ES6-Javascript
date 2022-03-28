"use strict";

class User {
  //method    //properties
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  //static methods - register we need to instatiate method
  static countUser() {
    console.log(`there are 50 users`);
  }

  register() {
    console.log(this.username + `is now registered`);
  }
}
/*
//creating user by istantiate
let bob = new User("bob", "bob@email.com", "1235");
//using the user
bob.register();


// calling static method
User.countUser;
*/

class Member extends User {
  constructor(username, email, password, memberPackage) {
    //easier way to do line 5
    super(username, email, password);
    this.package = memberPackage;
  }

  getPackage() {
    console.log(
      this.username + "  is subscribed to the" + this.package + "package"
    );
  }
}
//creating new memeber      inheritaing class
let mike = new Member("mike", "mike@a.com", "123", "standards ");

mike.getPackage();

//display if registered
mike.register();
