export default {
   title: "Memo"
}


const NewMessagesCounter = (props: {count: number}) => {

   return <div>{props.count}</div>
}

type UsersType = {
   users: string[]
}

const User = (props: UsersType) => {

   return (
      <div>
         {props.users.map((u, i) => {
            return (
               <div key={`${i}`}>{u}</div>
            )
         })}
      </div>
   )
}

export const Example1 = () => {

   return (
      <>
         <NewMessagesCounter count={10}/>
         <User users={["Daniyel", "Vika", "Zakhar"]}/>
      </>
   )
}
