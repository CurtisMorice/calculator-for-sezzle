import React from "react";
// // import { NumberContext } from "./NumberProvider";
// // import { DisplayStyles } from "./styles/Styles";

// export interface Calculation {
//   id: number;
//   number1: number;
//   operator: any;
//   number2: number;
//   total: number;
//   created_at: Date;
// }
// const CalcList = () => {
//   const [calculations, setCalculations] = useState<Calculation[]>([]);

//   const fetchData = async () => {
//     try {
//       let result = await fetch(`/calculations`);
//       let calc_obj = await result.json();
//       setCalculations(calc_obj);
//       console.log(calculations);
//     } catch (error) {
//       console.log("Error in fetchData()", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <DisplayStyles
//       style={{
//         width: "500px",
//         height: "432px",
//         display: "relative",
//         margin: "0",
//       }}
//     >
//       <h1 className="text-primary text-center">Calculations</h1>
//       <ul className="list-group">
//         {calculations.map((item) => {
//           return (
//             <li key={item.id} className="list-group-item">
//               {item.number1} {item.number2} = {item.total}
//             </li>
//           );
//         })}
//       </ul>
//     </DisplayStyles>
//   );
// };

// export default CalcList;
