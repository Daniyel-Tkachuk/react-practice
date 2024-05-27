import {memo, useState} from "react";

export default {
   title: "Memo"
}


export const Example1 = () => {
   const [counter, setCounter] = useState(0);
   const [users, setUsers] = useState(["Даниель", "Виктория", "Захар"]);

   const addUser = () => {
      setUsers([...users, "Алексей " + new Date().getTime()]);
   }

   return (
      <>
         <button onClick={() => setCounter(counter + 1)}>+</button>
         <button onClick={addUser}>add user</button>
         <Counter count={counter}/>
         <Users users={users}/>
      </>
   )
}


const Counter = memo((props: {count: number}) => {
   console.log("counter")
   return <div>{props.count}</div>
})

type UsersType = {
   users: string[]
}
const Users = memo((props: UsersType) => {
   console.log("users");

   return (
      <div>
         {props.users.map((u, i) => {
            return (
               <div key={`${i}`}>{u}</div>
            )
         })}
      </div>
   )
});


