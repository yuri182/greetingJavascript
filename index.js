let userName="ゲスト";

let now=new Date();
let Hour=now.getHours();

if (Hour<=4){
    document.write(userName,"さん。もう寝ましょうね");
}else if (Hour<=10){
    document.write(userName,"さん。おはようございます");
}else if (Hour<=16){
    document.write(userName,"さん。こんにちは");
}else if (Hour<=19){
    document.write(userName,"さん。お家へ帰りましょう");
}else{
    document.write(userName,"さん。おばんです");
}