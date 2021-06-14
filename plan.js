var i;
i=0;

var fn=function(){
        
    alert('おはようございます！今日も頑張っていきましょう。');
    return;
}
var tm=1000;
setTimeout(fn,tm);


function addTask(){

    var inputTask = document.getElementById('inputTask');

    var timeTask = document.getElementById('timeTask');

    

    if(inputTask.value.length<=0){
    alert('タスク名を入力して下さい');
    return;
    }
    
    
    
    var task= document.createElement('li');
    task.innerHTML = inputTask.value;


    document.getElementById('taskList').appendChild(task);
 
 

    if(task.innerHTML=='遊び'){

　　 speechSynthesis.speak( new SpeechSynthesisUtterance('遊びすぎもよくないですよ') ); 

}


    var fn=function(){
        
        var text=task.innerHTML;
         speechSynthesis.speak( new SpeechSynthesisUtterance('今日の予定は'+text+'です') ); 
      
    }
    var tm=3600000*timeTask.value;
  setTimeout(fn,tm);



  var fn=function(){
     
        if(i==0){
    speechSynthesis.speak( new SpeechSynthesisUtterance('今日も計画をたてて偉いですね！') ); 
        }
 i++;
}
var tm=100000;
setTimeout(fn,tm);

var fn=function(){
    speechSynthesis.speak( new SpeechSynthesisUtterance('いつもお疲れ様です！') ); 
}

var tm=1000000;
setTimeout(fn,tm);



    inputTask.value='';
}
