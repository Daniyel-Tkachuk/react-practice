import React, {ChangeEvent, FC, useCallback, useState} from "react";

export default {
   title: "use callback"
}

export const UseCallBack: FC = () => {
   console.log("UseCallBack")
   const [counter, setCounter] = useState(0);
   const [books, setBooks] = useState<string[]>(["HTML", "CSS", "JS"])

   const incCounter = () => {
      setCounter((prevState) => prevState + 1);
   };

   const addBook = useCallback((nameBook: string) => {
      setBooks([...books, nameBook]);
   }, [books])

   return (
      <div>
         <div style={{marginBottom: "15px"}}>
            <span style={{paddingRight: "20px"}}>
               <b>{counter}</b>
            </span>
            <button onClick={incCounter}>+</button>
         </div>
         <hr/>
         <div>
            <Books books={books} addBook={addBook}/>
         </div>
      </div>
   )
}

type BooksProps = {
   books: string[]
   addBook: (nameBook: string) => void
}

const Books: FC<BooksProps> = React.memo((props) => {
   console.log("Books");
   const {books, addBook} = props;

   const [value, setValue] = useState("");

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value);
   }

   const addBookHandler = () => {
      addBook(value);
      setValue("");
   }

   return (
      <div>
         <input type="text" value={value} onChange={onChangeHandler}/>
         <ul>
            {
               books && books.map((book, i) => {
                  return (
                     <li key={i}>
                        <b>{book}</b>
                     </li>
                  )
               })
            }
         </ul>
         <button onClick={addBookHandler}>add book</button>
      </div>
   )
})