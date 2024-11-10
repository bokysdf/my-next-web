export default function Home(){
  return(
    <div>
      <MyButton name = "NAME" nickname="DUNE" age = {18} today = {new Date()}/>
    </div>
  );
}

type TParams = {
  name : string;
   nickname : string;
   age : number;
   today : Date;
}

function MyButton(params: TParams){
  return (
    <div className = "bg-orange-400 text-xl w-[100px]" style ={{backgroundColor: "rgb(251 146 60)", fontSize: "20px"}}>
    I am{params.name}. my nickname is {params.nickname}.{" "}.today is {params.today.getDate()}
    </div>
  );
}
    