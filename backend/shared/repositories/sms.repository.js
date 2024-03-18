// const http = require("https");

// const options = {
//     method: "POST",
//     hostname: "api.msg91.com",
//     port: null,
//     path: "/api/v5/flow/",
//     headers: {
//         authkey: "212829AifczlotR5ae42e68",
//         "content-type": "application/JSON",
//     },
// };

// const req = http.request(options,  (res) =>{
//     const chunks = [];

//     res.on("data",  (chunk) =>{
//         chunks.push(chunk);
//     });

//     res.on("end",  ()=> {
//         const body = Buffer.concat(chunks);
//         console.log(body.toString());
//     });
// });

// req.write(
//     '{\n  "flow_id": "62b5845869fd2f0b3d7afcd7",\n  "mobiles": "917083002811",\n  "Value1": "Pratik",\n  "var1": "Haresh",\n  "#let#": "Haresh11",\n  "{#let#}": "Haresh222",\n  "VAR2": "12312341",\n   "VAR1": "dfssdfgf"\n}'
// );
// req.end();

// {
//   "msg_type": "Success",
//   "data": {
//     "FlowName": "Credential",
//     "Sender": "EMEITI",
//     "Status": "Approved",
//     "FlowState": "Enabled",
//     "Message": "Hello {#let#}, Your account on EMERGE ITI Recruitment App is activated. Your username is {#let#} and your password is {#let#} ",
//     "MessageVariable": [],
//     "ReceiverVariable": "##mobiles##",
//     "DLT_TE_ID": "1207161529094870684"
//   }
// }
