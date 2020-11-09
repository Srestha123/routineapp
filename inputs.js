class Inputs{
  constructor(){
    this.name=createInput('name');
    this.wakeup=createInput('time');
    this.o1=createSelect();
    this.o1.option('AM');
    this.o1.option('PM');
    this.studyDuration=createSelect();
    this.studyDuration.option('less');
    this.studyDuration.option('1-3 hrs');
    this.studyDuration.option('4-6 hrs');
    this.studyDuration.option('6-10 hrs');
    this.studyDuration.option('more');
    this.studyDuration.selected('1-3 hrs');
    this.school=createSelect();
    this.school.option('3-5 hrs');
    this.school.option('6-8 hrs');
    this.school.option('more');
    this.school.selected('6-8 hrs');
    this.rest= createInput('duration');
    this.o2=createRadio();
    this.o2.option('hrs');
    this.o2.option('mins');
    this.tv=createSelect();
    this.tv.option('1-5 hrs');
    this.tv.option('more');
    this.tv.option('less');
    this.specialClass=createInput('duration');
    this.o3=createRadio();
    this.o3.option('hrs');
    this.o3.option('mins');
    this.hobby=createInput('duration');
    this.o4=createRadio();
    this.o4.option('hrs');
    this.o4.option('mins');
    this.play=createInput('duration');
    this.o5=createRadio();
    this.o5.option('hrs');
    this.o5.option('mins');
    this.miscellaneous=createInput('duration');
    this.o6=createRadio();
    this.o6.option('hrs');
    this.o6.option('mins');
    this.sleep=createSelect();
    this.sleep.option('8-12 hrs');
    this.sleep.option('more');
    this.sleep.option('less');
    this.submit=createButton('SUBMIT');
  }
  display(){
    this.name.position(50,20);
    this.wakeup.position(50,40);
    this.o1.position(50,60);
    this.studyDuration.position(displayWidth/4+200,displayHeight/3);
    this.school.position(displayWidth/4+200,displayHeight/4+100);
    this.rest.position(displayWidth/4+200,displayHeight/2);
    this.o2.position(displayWidth/2+200,displayHeight/2);
    this.submit.position(displayWidth/4+200,displayHeight/2+100);
    text("name:",displayWidth/15,displayHeight/6.5);
    text("wake up time:",displayWidth/4-100,displayHeight/4);
    text("Study time(duration):",displayWidth/4-100,displayHeight/3);
    text("school duration:",displayWidth/4-100,displayHeight/4+100);
    text("rest duration:",displayWidth/4-100,displayHeight/2);
    this.tv.position(displayWidth/5,displayHeight/8);
    this.o3.position(displayWidth/5+200,displayHeight/4);
    this.hobby.position(displayWidth/8+200,displayHeight/5);
    this.o4.position(displayWidth/2+200,displayHeight/5);
    this.play.position(displayWidth/4+200,displayHeight/4+100);
    this.o5.position(displayWidth/4+200,displayHeight/2);
    this.miscellaneous.position(displayWidth/8+200,displayHeight/5);
    this.o6.position(displayWidth/2+200,displayHeight/5);
    this.sleep.position(displayWidth/4+200,displayHeight/4+100);
    this.specialClass.position(displayWidth/4+200,displayHeight/4+100);
   
    console.log("message");
    /*text("name:",displayWidth/4-100,displayHeight/5);
    text("name:",displayWidth/4-100,displayHeight/5);
    text("name:",displayWidth/4-100,displayHeight/5);*/
  /* var name=this.name.value();
  this.submit.mousePressed(()=>{
   user.update(name);
    console.log(name);
    gameState=1;
    })*/
    
  }
}