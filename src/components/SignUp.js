// import React, { useState } from "react";
// import "./SignUp.css";

// const SignUp = ({ setSignupFlag }) => {
//   const [inputData, setInputData] = useState({
//     "user-id": "",
//     "first-name": "",
//     "last-name": "",
//     password: "",
//   });

//   const submit = () => {
//     (async () => {
//       const response = await fetch("http://localhost:3333/singnup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(inputData),
//       })
//         .then((response) => response.json())
//         .catch(() => false);

//       switch (response) {
//         case 1:
//           alert("Entering id is already used...");
//           break;
//         case 2:
//           alert("Congratulations!! Your account has been created.");
//           setSignupFlag(false);
//           break;
//         default:
//           break;
//       }
//     })();
//   };

//   return (
//     <>
//       <section className="signupFormContainer">
//         <article>
//           <nav>
//             <h1>SignUp Form</h1>
//           </nav>
//           <section>
//             <p>USER ID</p>
//             <input
//               type="text"
//               pattern="^[0-9]+$"
//               minLength={4}
//               maxLength={15}
//               name="user-id"
//               placeholder="user id  (※number only)"
//               value={inputData["user-id"]}
//               required
//               onChange={(e) =>
//                 setInputData({
//                   ...inputData,
//                   [e.target.name]: e.target.value,
//                 })
//               }
//             />
//             <p>FIRST NAME</p>
//             <input
//               type="text"
//               name="first-name"
//               placeholder="first name"
//               value={inputData["first-name"]}
//               onChange={(e) =>
//                 setInputData({
//                   ...inputData,
//                   [e.target.name]: e.target.value,
//                 })
//               }
//             />
//             <p>LAST NAME</p>
//             <input
//               type="text"
//               name="last-name"
//               placeholder="last name"
//               value={inputData["last-name"]}
//               onChange={(e) =>
//                 setInputData({
//                   ...inputData,
//                   [e.target.name]: e.target.value,
//                 })
//               }
//             />
//             <p>PASSWORD</p>
//             <input
//               type="password"
//               pattern="^[a-zA-Z0-9]+$"
//               minLength={4}
//               maxLength={15}
//               name="password"
//               placeholder="password"
//               value={inputData.password}
//               autoComplete="on"
//               onChange={(e) =>
//                 setInputData({
//                   ...inputData,
//                   [e.target.name]: e.target.value,
//                 })
//               }
//             />
//             <div className="signupButton">
//               <button onClick={submit}>SUBMIT</button>
//               <button onClick={() => setSignupFlag(false)}>CLOSE</button>
//             </div>
//           </section>
//         </article>
//       </section>
//     </>
//   );
// };

// export default SignUp;
