import React, {FC, memo, useMemo, useState} from 'react';

export default {
   title: "test select for useMemo"
}


type CityType = {
      value: number
      title: string
}

type Props = {
   data: CityType[]
}

const SelectCities: FC<Props> = memo((props) => {
   const {data} = props;

   console.log("Select")

   return (
      <select>
         {
            data.map(el => {
               return (
                  <option key={el.value} value={el.value}>{el.title}</option>
               )
            })
         }
      </select>
   )
});

export const Helps: FC = () => {
   const [data, setDate] = useState([
      {value: 1, title: "Гродно"},
      {value: 2, title: "Гомель"},
      {value: 3, title: "Минск"},
      {value: 4, title: "Лида"},
      {value: 5, title: "Островец"},
      {value: 6, title: "Ганцевичи"},
      {value: 7, title: "Глубокое "},
   ]);

   console.log("Helps");

   const [counter, setCounter] = useState(0);

   const filterCity = useMemo(() => {
      return data.filter(el => el.title.toLowerCase().includes("г"));
   }, [data]);

   const addCity = () => {
      setDate([...data, {value: new Date().getTime(), title: "Горки"}])
   }

   return (
      <div>
         <div>
            <span>counter value: {counter}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
         </div>
         <div>
            <SelectCities data={filterCity}/>
            <button onClick={addCity}>add city</button>
         </div>
      </div>
   )
}